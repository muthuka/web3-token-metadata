# web3-token-metadata

## Print several ERC token metadata

This project was built to explore ethereum ERC contracts and their structure. Use it as you like to.

### Running sample

`
$ npm install
`

Replace the GETH rpc node at "common.js" so that it works. Add necesssary auth headers if needed.

`
const web3 = new Web3("https://<GETH-RPC-NODE>");
`

Run as below:

`
$ node index.js
`