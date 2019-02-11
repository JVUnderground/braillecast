/**
 * This prefetch plugin logs the request method and path to console.
 * @param  {Request} request
 */
function logRequest(request) {
    console.log(`%c API REQUEST : ${request.method} ${request.path} `, 'background: #00F; color: #FFF; font-weight: bold;');
    return request;
}

module.exports = {
    logRequest
};