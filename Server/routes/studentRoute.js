import express from "express";
import { createStudent } from "../controllers/studenController.js";
import { getStudents } from "../controllers/studenController.js";
import { filterStudent } from "../controllers/studenController.js";
const router = express.Router();
//route to create studend document (optional)
router.post("/createStudent", createStudent);
//route to get student list in paginated manner
router.get("/getStudents", getStudents);
//route to get filtered students in paginated manner
router.get("/filter", filterStudent);
export default router;
