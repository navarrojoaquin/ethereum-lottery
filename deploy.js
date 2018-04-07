const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'vague popular fox able uncover exhibit photo whisper unknown check nation hero',
    'https://rinkeby.infura.io/54zYEwz6CHuXCNuXGgxw'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Trying to deploy using account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hello Ethereum!'] })
        .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract deployed to', result.options.address);

};
deploy();