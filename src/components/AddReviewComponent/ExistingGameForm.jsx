import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import ReactStars from "react-stars";
import Loading from "../AuthenticationComponent/Loading";
import NotFoundImage from "../../assets/notAvailable.png";
import { Helmet } from "react-helmet-async";

const ExistingGameForm = () => {
  const game = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [reviewInput, setReviewInput] = useState();
  const [ratingInput, setRatingInput] = useState();

  const {
    gameCoverImage,
    gameTitle,
    averageRating,
    totalReviews,
    publishingYear,
    genres,
  } = game;
  const userEmail = user?.email;
  const userName = user?.displayName;

  let addReviewOnSubmit = (e) => {
    e.preventDefault();
    const reviewDescription = e.target.reviewDescription.value;
    const rating = Number(e.target.rating.value);

    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;

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
        "https://ph-tenth-assignment-server.vercel.app/addReview",
        reviewCredentials
      )
      .then(() => {
        e.target.reset();
        toast.success("You have successfully added a Review!");
        const gameCredentials = { gameTitle };
        return axios.put(
          "https://ph-tenth-assignment-server.vercel.app/addOrUpdateGame",
          gameCredentials
        );
      })
      .catch((error) => {
        console.error("Error adding Review:", error);
        toast.error(
          error.response?.data?.message ||
            `Failed to add your review or update game details for ${gameTitle}`
        );
      })
      .finally(() => {
        navigate("/addReview");
      });
  };

  return (
    <main className="">
      <Helmet>
        <title>
          Add Review On: {gameTitle && gameTitle} | CHILL GAMER
          (PHtenthAssignment)
        </title>
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="pb-10 bg-custom-half-primary">
            <div className="container p-0 xs:px-[10%] space-y-8">
              <img
                src={gameCoverImage}
                alt={`${gameTitle}'s Cover Image`}
                className="xs:rounded-md"
              />

              <div className="text-center lg:text-left grid lg:grid-cols-2 gap-[10%] px-[5%] xs:px-0">
                <div className="space-y-2">
                  <h2 className="w-[95%] mx-auto lg:mx-0">{gameTitle}</h2>

                  <div className="grid gap-1">
                    <div className="flex gap-2 mx-auto lg:mx-0 items-center">
                      <ReactStars
                        count={5}
                        value={averageRating}
                        size={18}
                        edit={false}
                        isHalf={true}
                        halfIcon={<IoStarHalf />}
                        emptyIcon={<IoStarOutline />}
                        fullIcon={<IoStar />}
                        color1="rgba(47, 116, 172, 0.375) "
                        color2="#2f74ac"
                      />
                      <span>{averageRating}</span>
                    </div>
                    <b>Publishing Year: {publishingYear}</b>
                    <b>Game Genre: {genres}</b>
                    <b>Total Reviews: {totalReviews}</b>
                  </div>
                </div>

                <div className="hidden lg:inline-block">
                  <div className="card w-full shrink-0 space-y-4 ">
                    <h2 className="">Write A Review!</h2>
                    <form
                      onSubmit={addReviewOnSubmit}
                      className="card-body p-0"
                    >
                      <div className="form-control">
                        <label
                          htmlFor="reviewDescription"
                          className="label w-fit"
                        >
                          <span className="">Review Description</span>
                        </label>
                        <textarea
                          onChange={(e) => setReviewInput(e.target.value)}
                          value={reviewInput}
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
                          onChange={(e) => setRatingInput(e.target.value)}
                          value={ratingInput}
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
                        <label htmlFor="userEmail" className="label w-fit">
                          <span className="">Your Email</span>
                        </label>
                        <input
                          type="email"
                          name="userEmail"
                          id="userEmail"
                          value={userEmail}
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
                          value={userName}
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
              </div>
            </div>
          </section>

          <section className={`lg:hidden`}>
            <div className="container hero flex items-center justify-center">
              <div className="mt-0 fromWrapper max-w-lg">
                <h1 className="">Write A Review!</h1>
                <form onSubmit={addReviewOnSubmit} className="card-body p-0">
                  <div className="form-control">
                    <label htmlFor="reviewDescription" className="label w-fit">
                      <span className="">Review Description</span>
                    </label>
                    <textarea
                      onChange={(e) => setReviewInput(e.target.value)}
                      value={reviewInput}
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
                      onChange={(e) => setRatingInput(e.target.value)}
                      value={ratingInput}
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
                    <label htmlFor="userEmail" className="label w-fit">
                      <span className="">Your Email</span>
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      id="userEmail"
                      value={userEmail}
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
                      value={userName}
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
        </>
      )}
    </main>
  );
};

export default ExistingGameForm;
