import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import useHostImage from "../../Hooks/useHostImage";


// AddReview
const NewGameForm = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState();

  const hostImage=useHostImage()

  const handleImageChange=(e)=>{
      const file=e.target.files[0]
      hostImage(file,setImage)
  }

  const genresList = [
    "RPG",
    "Adventure",
    "Action",
    "Simulation",
    "Royale",
    "Sandbox",
    "Party",
    "MOBA",
    "Shooter",
  ];

  let addReviewOnSubmit = (e) => {
    e.preventDefault();
    const gameCoverImage = image;
    const gameTitle = e.target.gameTitle.value;
    const reviewDescription = e.target.reviewDescription.value;
    const rating = Number(e.target.rating.value);
    const publishingYear = Number(e.target.publishingYear.value);
    const genres = e.target.genres.value;
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;

    if (!gameCoverImage) {
      toast.warning(
        "You must upload a game cover image. Only JPG, PNG, GIF image files are allowed, and the maximum file size is 10MB. Please select an appropriate image file to proceed!"
      );
      return;
    }

    const reviewCredentials = {
      gameCoverImage,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genres,
      userEmail,
      userName,
    };

    axios
      .post(
        "https://chill-gamer-server-sepia.vercel.app/addReview",
        reviewCredentials
      )
      .then(() => {
        e.target.reset();
        toast.success("You have successfully added a Review!");
        const gameCredentials = { gameTitle };
        return axios.put(
          "https://chill-gamer-server-sepia.vercel.app/addOrUpdateGame",
          gameCredentials
        );
      })
      .catch((error) => {
        console.error("Error adding Review:", error);
        toast.error(
          error.response?.data?.message ||
            `Failed to add your review or update game details for ${gameTitle}`
        );
      });
  };

  return (
    <section>
      <div className="container hero flex items-center justify-center">
        <div className="mt-0 fromWrapper max-w-lg">
          <h2 className="">Write A Review!</h2>
          <form onSubmit={addReviewOnSubmit} className="card-body p-0">

            <div className="form-control">
              <label htmlFor="image" className="label w-fit">
                <span className="">Game Cover Image url</span>
              </label>
              <input name="image" id="image" type="file" accept="image/*" onChange={handleImageChange}  className="file-input input-ghost file-input-bordered w-full focus:bg-inherit focus:border-black focus:text-black" />
            </div>

            <div className="form-control">
              <label htmlFor="gameTitle" className="label w-fit">
                <span className="">Game Title</span>
              </label>
              <input
                type="text"
                name="gameTitle"
                minLength={3}
                id="gameTitle"
                className="input input-ghost input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="reviewDescription" className="label w-fit">
                <span className="">Review Description</span>
              </label>
              <textarea
                name="reviewDescription"
                id="reviewDescription"
                minLength={10}
                className="textarea textarea-ghost textarea-bordered h-32"
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label htmlFor="rating" className="label w-fit">
                <span className="">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                min={0}
                max={5}
                step={0.01}
                className="input input-ghost input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="publishingYear" className="label w-fit">
                <span className="">Publishing Year</span>
              </label>
              <input
                type="number"
                name="publishingYear"
                id="publishingYear"
                min={1962}
                max={2024}
                className="input input-ghost input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="genres" className="label w-fit">
                <span className="">Game Genres</span>
              </label>
              <select
                name="genres"
                id="genres"
                className="select select-ghost select-bordered"
                required
              >
                <option value={""} selected disabled hidden>
                  Pick one
                </option>
                {genresList.map((genreName, index) => (
                  <option key={index} value={genreName}>
                    {genreName}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label htmlFor="userEmail" className="label w-fit">
                <span className="">Your Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                value={user?.email}
                className="input input-ghost input-bordered disabled:border  disabled:border-gray-300 dark:disabled:border-gray-700"
                disabled
              />
            </div>

            <div className="form-control">
              <label htmlFor="userName" className="label w-fit">
                <span className="">Your Name</span>
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                value={user?.displayName}
                className="input input-ghost input-bordered disabled:border disabled:border-gray-300 dark:disabled:border-gray-700"
                disabled
              />
            </div>

            <div className="mt-6">
              <button className="formSubmitBtn">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewGameForm;
