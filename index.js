const axios = require('axios');
const express = require('express');

const app = express();

app.get('/run-bat', async (req, res) => {
    try {
        const response = await axios.get('http://seu-servidor.com/executar-bat');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;
