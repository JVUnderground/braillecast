if (!fetch) {
    var fetch = require('node-fetch');
    var Request = fetch.Request;
}

class API {
    constructor({ host, params={}, headers={}, stage }) {
        this.host = host;
        this.params = params;
        this.headers = headers;
        this.stage = stage;
        this.preFetchPlugins = [];
        this.requests = {};
    }

    _request = (method, path, params, headers) => {   
        let body = Object.assign({}, this.params, params);
        let url = `${this.host}${path}`;
        let { host,  } = new URL(this.host);

        let request = {
            host,
            method,
            path,
            url,
            stage: this.stage,
            headers: Object.assign({}, this.headers, headers),
            body: (method === 'GET') ? undefined : JSON.stringify(body),
        };

        this.preFetchPlugins.forEach(plugin => {
            request = plugin(request);
        });

        return new Request(url, request)
    };

    get = (path, params={}, headers={}) => {
        let query = "";
        for (let key in params) {
            let encoded = encodeURIComponent(params[key]);
            query += `${key}=${encoded}&`;
        }
        path = `${path}?${query}`;

        let request = this._request('GET', path, params, headers);
        return this._send(request);       
    };

    post = (path, params={}, headers={}) => {
        let request = this._request('POST', path, params, headers);
        return this._send(request);  
    };

    post_string = (path, params={}, headers={}) => {
        let query = "";
        for (let key in params) {
            let encoded = encodeURIComponent(params[key]);
            query += `${key}=${encoded}&`;
        }
        path = `${path}?${query}`;

        let request = this._request('POST', path, params, headers);
        return this._send(request);  
    };

    put = (path, params={}, headers={}) => {
        let request = this._request('PUT', path, params, headers);
        return this._send(request);  
    };

    patch = (path, params={}, headers={}) => {
        let request = this._request('PATCH', path, params, headers);
        return this._send(request);  
    };

    _send = request => {
        if (!request.id) {
            request.id = uuid4();
            this.requests[request.id] = { retries: 0 };
        }

        let clone;
        return fetch(request)
            .then(response => {
                clone = response.clone();
                if (response.ok) return response.json();
                else throw response.json();
            }).catch(err => {
                if (err instanceof SyntaxError) {
                    return clone.text()
                    .then(textErr => { throw textErr; })
                } else {
                    return err
                    .then(jsonErr => { throw jsonErr; })
                }
            });
            // .catch(err => {
            //     let handled = false;
            //     if (this.onError) {
            //         let retry = () => {
            //             if (this.requests[request.id].retries < MAX_RETRIES) {
            //                 this.requests[request.id].retries++;
            //                 this._send(request);
                            
            //             }
            //         }

            //         handled = this.onError(err, retry);
            //     }

            //     if (!handled) return err.json().then(err => { throw err });
            // });
    };
}

const MAX_RETRIES = 3;
const uuid4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
};

module.exports = API;