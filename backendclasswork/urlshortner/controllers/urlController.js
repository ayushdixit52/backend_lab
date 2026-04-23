const { Url } = require('../models/urlModel');
const { nanoid } = require('nanoid');

async function generateUrl(req, res) {
    try {
        const { actUrl } = req.body;

        if (!actUrl) {
            return res.status(400).json({ error: "URL is mandatory" });
        }

        const shortUrl = nanoid(8);

        const newUrl = await Url.create({
            shortUrl,
            actUrl
        });

        res.status(201).json({
            message: "Short URL created",
            data: newUrl
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = { generateUrl };