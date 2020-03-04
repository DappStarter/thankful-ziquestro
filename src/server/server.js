import express from 'express';
import DappLib from '../lib/dapp-lib';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>> ACCESS CONTROL: CONTRACT RUN STATE  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
DappLib.onContractRunStateChange((result) => {
    console.log(result);
});


const app = express();
app.get('/api', (req, res) => {
    res.send({
      message: 'An API for My Dapp'
    })
})

export default app;


