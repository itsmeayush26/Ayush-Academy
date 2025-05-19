import express  from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { createCourse, editCourse, getCreatorCourse } from "../controllers/course.controller.js";
import upload from "../utils/multer.js";


const router =express.Router();

router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getCreatorCourse);
router.route("/:courseId").put(isAuthenticated, upload.single("courseThumbnail"), editCourse);


export default router;




