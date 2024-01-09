const express = require("express");

const { getUserInfo } = require("../controllers/botController");

const router = express.Router();

router.post(`/getUserInfo`, getUserInfo);

module.exports = router;
