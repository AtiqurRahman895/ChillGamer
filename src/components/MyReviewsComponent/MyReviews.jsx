import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../AuthenticationComponent/Loading";
import NotFoundImage from "../../assets/notAvailable.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const params = { query: { userEmail: user?.email }, sort: { rating: -1 } };

    axios
      .get("https://ph-tenth-assignment-server.vercel.app/reviews", { params })
      .then((res) => {
        res.data.length === 0 ? setNotFound(true) : setReviews(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error finding reviews:", error);
        setLoading(false);
      });
  }, [user?.email, loading]);

  const handleDeleteButton = (_id, gameTitle) => {
    const deleteReview = window.confirm(
      `Are you sure about deleting your review on ${gameTitle}?`
    );
    if (deleteReview) {
      setLoading(true);
      axios
        .delete(
          `https://ph-tenth-assignment-server.vercel.app/deleteReview/${_id}`
        )
        .then(() => {
          toast.info(
            `You have successfully deleted your review on ${gameTitle}`
          );
          const gameCredentials = { gameTitle };
          return axios.put(
            "https://ph-tenth-assignment-server.vercel.app/addOrUpdateGame",
            gameCredentials
          );
        })
        .catch((error) => {
          toast.error(
            error.response?.data?.message ||
              `Failed to delete your review or update game details for ${gameTitle}`
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // console.log(reviews)
  return loading ? (
    <Loading />
  ) : (
    <main className="">
      <Helmet>
        <title>Your Game Reviews | CHILL GAMER</title>
      </Helmet>
      <section className="bg-custom-primary py-16 lg:py-20">
        <div className="container">
          <div className=" text-center place-items-center space-y-6">
            <h1>Your Game Reviews</h1>
            <h5 className="px-6 sectionHeaderWidth sectionHeaderSubtextWidth">
              Manage and update your reviews to share your thoughts with others.
            </h5>
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="container">
          {notFound ? (
            <div className="h-lvh place-items-center grid gap-3 content-center">
              <img src={NotFoundImage} alt={`not available`} />
              <h1 className="font-extrabold text-center text-custom-primary">
                yet to add any review!
              </h1>
            </div>
          ) : (
            <div className="max-h-[65svh] overflow-x-auto">
              <table className="MyReviewTable table table-sm table-pin-rows table-pin-cols">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <td>Game Title</td>
                    <td>Review Description</td>
                    <td>Genres</td>
                    <td className="sm:hidden text-center">Actions</td>
                    <th className="hidden sm:table-cell text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-custom-half-primary">
                  {reviews.map((review, index) => (
                    <tr key={index + 1}>
                      <th className="text-center">{index + 1}</th>
                      <td>{review.gameTitle}</td>
                      <td className="line-clamp-3 max-w-[400px]">
                        {review.reviewDescription}
                      </td>
                      <td>{review.genres}</td>
                      <td className="sm:hidden">
                        <div className="flex gap-4 w-full items-center justify-center">
                          <MdDeleteForever
                            onClick={() =>
                              handleDeleteButton(review._id, review.gameTitle)
                            }
                            className="btn-sm p-1 btn-circle btn-ghost cursor-pointer"
                          />
                          <Link to={`/updateReview/${review._id}`}>
                            <HiPencilSquare className="btn-sm p-1 btn-circle btn-ghost cursor-pointer" />
                          </Link>
                          <Link to={`/review/${review._id}`}>
                            <GrLinkNext className="btn-sm p-1.5 btn-circle btn-ghost cursor-pointer" />
                          </Link>
                        </div>
                      </td>
                      <th className="hidden sm:table-cell">
                        <div className="flex gap-4 w-full items-center justify-center">
                          <MdDeleteForever
                            onClick={() =>
                              handleDeleteButton(review._id, review.gameTitle)
                            }
                            className="btn-sm p-1 btn-circle btn-ghost cursor-pointer"
                          />
                          <Link to={`/updateReview/${review._id}`}>
                            <HiPencilSquare className="btn-sm p-1 btn-circle btn-ghost cursor-pointer" />
                          </Link>
                          <Link to={`/review/${review._id}`}>
                            <GrLinkNext className="btn-sm p-1.5 btn-circle btn-ghost cursor-pointer" />
                          </Link>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-center">
                      {loading ? (
                        <span className="loading loading-spinner loading-xs text-custom-primary"></span>
                      ) : (
                        "No"
                      )}
                    </th>
                    <td>
                      {loading ? (
                        <span className="loading loading-spinner loading-xs text-custom-primary"></span>
                      ) : (
                        "Game Title"
                      )}
                    </td>
                    <td>
                      {loading ? (
                        <span className="loading loading-spinner loading-xs text-custom-primary"></span>
                      ) : (
                        "Review Description"
                      )}
                    </td>
                    <td>
                      {loading ? (
                        <span className="loading loading-spinner loading-xs text-custom-primary"></span>
                      ) : (
                        "Genres"
                      )}
                    </td>
                    <td className="sm:hidden text-center">
                      {loading ? (
                        <span className="loading loading-spinner loading-xs text-custom-primary"></span>
                      ) : (
                        "Actions"
                      )}
                    </td>
                    <th className="hidden sm:table-cell text-center">
                      {loading ? (
                        <span className="loading loading-spinner loading-xs text-custom-primary"></span>
                      ) : (
                        "Actions"
                      )}
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MyReviews;
