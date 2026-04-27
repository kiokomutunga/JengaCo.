const express = require ("express")
const router = express.Router()
const smscontroller = require("../controllers/smsController")
router.post("sms sending",screatesms )
module.export = router
