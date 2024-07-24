import express from "express";
import * as mypage_controller from "../controller/mypage_controller";
import auth from "../middleware/auth";
import upload from "../middleware/multer";

const mypage_router = express.Router();

mypage_router.get("/myPage", auth, mypage_controller.fetch_my_profile);
mypage_router.get("/myPage/review/:reviewId", auth, mypage_controller.fetch_mypage_review_detail);
mypage_router.get("/myPage/follower", auth, mypage_controller.fetch_follower);
mypage_router.get("/myPage/following", auth, mypage_controller.fetch_following);
mypge_router.patch("/myPage", auth, upload.single('profile_image'), mypage_controller.update_profile);

mypage_router.delete("/myPage/review/:reviewId", auth, mypage_controller.delete_review);

export default mypage_router;