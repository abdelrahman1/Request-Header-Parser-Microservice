import Router from "express-promise-router"
import whoAmIcontroller from "../controllers/whoami"
const router = Router()

router.route("/").get(whoAmIcontroller.index)

export default router
