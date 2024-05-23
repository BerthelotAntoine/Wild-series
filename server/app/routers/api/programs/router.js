const express = require("express");

const router = express.Router();

const { programs, browse } = require("../../../controllers/programActions");

router.get("/", programs);

router.get("/", browse);

module.exports = router;
