import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { GiHeartPlus } from "react-icons/gi";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../AuthenticationComponent/Loading";
import { Helmet } from "react-helmet-async";

const UpdateReview = () => {
  const review = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviewInput, setReviewInput] = useState(review?.reviewDescription);
  const [ratingInput, setRatingInput] = useState(review?.rating);
  const [loading, setLoading] = useState(true);

  const {
    _id,
    gameCoverImage,
    gameTitle,
    reviewDescription,
    rating,
    publishingYear,
    genres,
    userEmail,
    userName,
  } = review;
  // console.log(review)

  useEffect(() => {
    setLoading(true);
    if (user?.email !== userEmail) {
      toast.error("You are not the arthur of the review!");
      navigate("/");
    } else {
      setLoading(false);
    }
  }, []);

  let addReviewOnSubmit = (e) => {
    e.preventDefault();
    const newDescription = e.target.reviewDescription.value;
    const newRating = Number(e.target.rating.value);
    const reviewCredentials = {
      _id,
      reviewDescription: newDescription,
      rating: newRating,
    };

    // console.log(reviewCredentials)
    setLoading(true);

    axios
      .put(
        "https://chill-gamer-server-sepia.vercel.app/updateReview",
        reviewCredentials
      )
      .then(() => {
        e.target.reset();
        toast.success("You have successfully Updated a Review!");
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
            `Failed to update your review or update game details for ${gameTitle}`
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // console.log()
  return (
    <main className="">
      <Helmet>
        <title>
          Update Review On: {gameTitle && gameTitle} | CHILL GAMER
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
                    <b>Publishing Year: {publishingYear}</b>
                    <b>Game Genre: {genres}</b>
                    <b>Your Name: {userName}</b>
                    <b>Your Email: {userEmail}</b>
                  </div>
                </div>

                <div className="hidden lg:inline-block">
                  <div className="card w-full shrink-0 space-y-4 ">
                    <h2 className="">Update Your Review!</h2>
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

                      <div className="mt-6">
                        <button className="formSubmitBtn">Update</button>
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
                <h1 className="">Update Your Review!</h1>
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

                  <div className="mt-6">
                    <button className="formSubmitBtn">Update</button>
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

export default UpdateReview;
