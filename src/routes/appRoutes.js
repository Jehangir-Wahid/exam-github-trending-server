const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/developers", async (req, res) => {
    try {
        const response = await axios.get(
            `https://gh-trending-api.herokuapp.com/developers`
        );
        res.status(200).send(JSON.parse(JSON.stringify(response.data)));
    } catch (error) {
        return res.status(404).json({ type: "error", message: error.message });
    }
});

router.get("/repositories", async (req, res) => {
    try {
        const response = await axios.get(
            `https://gh-trending-api.herokuapp.com/repositories`
        );
        res.status(200).send(JSON.parse(JSON.stringify(response.data)));
    } catch (error) {
        return res.status(404).json({ type: "error", message: error.message });
    }
});

module.exports = router;
