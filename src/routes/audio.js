const express = require('express');
const router = express.Router();

const audioController = require("../app/controllers/AudioController");
const upload = require('../config/upload');
const verifyToken = require('../Util/verifyToken');

router.post("/uploadFile", upload.fields([
    {
        name: 'audioFile',
        maxCount: 1
    },
    {
        name: 'thumb',
        maxCount: 1
    }
]), audioController.store);
router.get("/:slug", verifyToken, audioController.index);

module.exports = router;