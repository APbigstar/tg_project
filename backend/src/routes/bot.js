const express = require("express");

const { getUserInfo } = require("../controllers/botController");

const router = express.Router();

router.get(`/getUserInfo`, getUserInfo);

module.exports = router;
