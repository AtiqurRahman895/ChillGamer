import axios from "axios";
import { toast } from "react-toastify";

export const addReview = (gameCredentials) => {
  axios
    .post(
      "https://ph-tenth-assignment-server.vercel.app/addReview",
      gameCredentials
    )
    .then(() => {
      // e.target.reset()
      toast.success("You have successfully added a Review!");
    })
    .catch((error) => {
      console.error("Error adding Review:", error);
      toast.error("Failed to add Review!");
    });
};
