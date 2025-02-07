const express = require('express');
const axios = require('axios');

const app = express();

app.get('/rekonise', async (req, res) => {
    const { url } = req.query;
    const apiKey = 'XqzyaenZishd33axPYPz';

    if (!url) {
        return res.status(400).json({ error: 'Parâmetro "url" é obrigatório' });
    }

    try {
        const response = await axios.get(`https://madkung.vercel.app/rekonise-api?url=${encodeURIComponent(url)}&api_key=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados da API', details: error.message });
    }
});

module.exports = app;
