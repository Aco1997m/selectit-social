const { Router } = require("express")
const router = new Router()

router.get("/test", require("../controler/userControler/getAllUser"))
router.post("/add", require("../controler/userControler/addUser"))

module.exports = router