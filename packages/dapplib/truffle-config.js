require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind minor hidden argue suit twist'; 
let testAccounts = [
"0xc2188e69ebfe5e3e1ec9c495d4944f0388a484290cb5026de3c58ca95a1dc43d",
"0x0a178782f386435ed1abd45e464549ab0c043edeb4fbd7744e6fdf6b54d569a7",
"0xc250b3a4661c4757ca0123e7fb9a1adb14068b946fe72b6f814cd2e0e66adbfb",
"0x29f1b462fd8fb4900ad30b84ed7f94f2817589d4ab475ba9d444c5cc2141f7c6",
"0xd8cc663f56ba000d3c3810ed38c78703a87e1f6d981b798097c6cd344c77f30c",
"0x9fc9214cb895622ec82b191272457133784eba814dcc7beae65bc4d2e535b24b",
"0x41499aad1aed7e144ae65a47ea47265f348c7c96c31a084e4200d61a81e76242",
"0x6163cdcdfa420411743505771f212e1ec520e8ba7d4ae98dc94bc68910f501d3",
"0x991b3d3eb1294a08dd017ebcfcc49c5cf2c965458421c1c07b4533da2cc087c7",
"0x40e98c6701c20434c327ca4bf48642569962e284ee718cc49d2bae31820faea3"
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

