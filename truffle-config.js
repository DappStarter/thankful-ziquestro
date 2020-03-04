require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remove essay imitate private fresh try'; 
let testAccounts = [
"0xc336a5cf187945341623c975e4675baf7a4818528ab4c7a1c126f7e0b62908ed",
"0xad599918232a81491312f1505e012425d83d80fca0fbc4840129ca4543058015",
"0xb3a29d42c8d700d9e15601f16ab08da0cb08f9c62a0d9ff858260ee8d072a49e",
"0x9d63ed9bcf5dd01c9448ce6020feffb597727535c9fd0c1b1243ac1e227aeee1",
"0xbb27d2879a3aa9859f6f4331d5db6be2b7247a9014aa4b6ad27ec311076a1133",
"0xb8101f0d9795a63ffddd7ad4e963ae10b42e0bd9adaac1384733961c3c729561",
"0xda029414a99a8dbc54628877e81b5076d5f96d96523fc8712fa0d56e5c78ff92",
"0x7b1aef2fd9f28d652903fc9c9fc1cbaf56217d8e9272bd333bd5203772e58da6",
"0x7970cbd4ff628f07bc364507eff633e50ed51c2459c00c2aa68b08cbacd7fbc8",
"0xe966fe1ee763b96e743e3a31a3313fc153de3f0599003c77ec505622e6cf75c8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
