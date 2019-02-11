import Braillecast from '../servers/braillecast';

/**
 * Posts a new youtube video for conversion
 * @param  {String} url URL of the youtube video
 * @returns {Promise} a reference to the S3 resource containing the converted audio
 */
export function convertYoutubeVideo(url) {
    return Braillecast.post('/video', { ytlink: url })
};

/**
 * Get recent casts, owned by the requester.
 */
export function getCasts() {
    return Braillecast.get('/casts');
};