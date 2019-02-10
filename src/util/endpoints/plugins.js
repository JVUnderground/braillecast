function logRequest(request) {
    console.log(`%c API REQUEST : ${request.method} ${request.path} `, 'background: #00F; color: #FFF; font-weight: bold;');
    return request;
}

module.exports = {
    logRequest
};