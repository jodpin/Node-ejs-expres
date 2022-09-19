// RutasWeb.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo : "dirigete a mascotas 🦁"})
})



module.exports = router;