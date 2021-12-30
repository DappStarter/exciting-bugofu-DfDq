require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain exchange guess kite outer gas'; 
let testAccounts = [
"0x5eb8603b26734fccd4c23d2431554dc6da90be5d8c68daddaa25b1679f713b2a",
"0x8a80f50f822f5ab39e06677994670bc33790c6c49262486e05ea6d49b6da5a56",
"0xfb33d681a9ef5f9e77a8e35adac06323d9235cf7429e4a79012581d7e49142f2",
"0x50e45340b594800610508cfd7f3e46059aa51eeb8aeed6d3e15cb2c4f87eec30",
"0xbb042c93f82e34653fadf229263e6908db4d86ec0eb35d6e26392ed39ca3deb4",
"0x21ff2888f794ab3e2b42ec286668d8ca10ec29dff9e027f72249f29aafd5b114",
"0x97e5a4549dd73900190238f7736291352e239af258f08c6350c3a0ca6b269583",
"0x6e5f6f5f74b9c0df549a8e220be200821fff96b92f7f03598c1192e9fc4f33ea",
"0x537cf35774b945b58af56fee80916761b570a32467dec5db3e13bcb129c45e02",
"0xd5c37a6a9a5b934e27b00c29994a3d0a62c6a2c099f766f26523e2961fa3e1c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

