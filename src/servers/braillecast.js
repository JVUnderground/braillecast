import API, { plugins } from '../util/endpoints';

// Postman Mock Server
const config = {
    host: 'https://09f31754-1cd2-4665-b320-f9dd0b013b4f.mock.pstmn.io',
    stage: 'dev',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

const Braillecast = new API(config);
Braillecast.preFetchPlugins = [plugins.logRequest];

export default Braillecast;