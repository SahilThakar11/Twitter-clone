import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getNotifications } from "../controllers/notification.controller.js";
import { deleteNotification } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotification);

export default router;
