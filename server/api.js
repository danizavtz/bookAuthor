    const express = require('express');
    const router = express.Router();


    router.get('/', (req, res) => {
        res.status(200).send('<!DOCTYPE html><head><style>body {font-family: Helvetica, Arial, Sans-Serif;margin-top: 5em; text-align: center;}h1 {font-size: 3em;}h2 {font-size: 2em} .page-wrap {width: 800px; margin: 0 auto; }</style></head><body><div class="page-wrap"><h1>Book Author api</h1><br></div></body></html>');
    });

    module.exports = router;