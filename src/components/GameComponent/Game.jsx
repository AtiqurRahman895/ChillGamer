import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DetailsPageReviewCard from "../CommonComponent/DetailsPageReviewCard";
import { GiHeartPlus } from "react-icons/gi";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import ReactStars from "react-stars";
import Loading from "../AuthenticationComponent/Loading";
import NotFoundImage from "../../assets/notAvailable.png";
import { Helmet } from "react-helmet-async";

const Game = () => {
  const game = useLoaderData();
  const { user } = useContext(AuthContext);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const {
    _id: gameId,
    gameCoverImage,
    gameTitle,
    averageRating,
    totalReviews,
    publishingYear,
    genres,
  } = game;
  const userEmail = user?.email;
  const userName = user?.displayName;

  useEffect(() => {
    if (userEmail && userName) {
      const params = { query: { gameTitle, userEmail, userName } };
      // setLoading(true)
      axios
        .get("https://chill-gamer-server-sepia.vercel.app/Wishlist", {
          params,
        })
        .then((res) => {
          res.data.length === 0
            ? setAddedToWishlist(false)
            : setAddedToWishlist(true);
          //   setLoading(false)
        })
        .catch((error) => {
          console.error("Error finding game from wishlist:", error);
          //   setLoading(false)
        });
    } else {
      // setLoading(false)
      setAddedToWishlist(false);
    }
  }, []);

  useEffect(() => {
    const params = { query: { gameTitle }, sort: { rating: -1 } };
    setLoading(true);
    axios
      .get(`https://chill-gamer-server-sepia.vercel.app/reviews`, { params })
      .then((result) => {
        // console.log(result)
        setReviews(result.data);
      })
      .catch((error) => {
        console.error(`Error finding game:`, error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddtoWishlistButton = () => {
    if (userEmail && userName) {
      if (addedToWishlist) {
        toast.warn(`You have already added ${gameTitle} to wishlist once!`);
        return;
      }

      if (game) {
        const wishlistCredentials = {
          gameId,
          gameTitle,
          averageRating,
          publishingYear,
          genres,
          totalReviews,
          userEmail,
          userName,
        };
        setLoading(true);
        axios
          .post(
            "https://chill-gamer-server-sepia.vercel.app/addToWishlist",
            wishlistCredentials
          )
          .then(() => {
            setAddedToWishlist(true);
            toast.success(
              `You have successfully added ${gameTitle} to the wishlist!`
            );
          })
          .catch((error) => {
            console.error("Error adding to wishlist:", error);
            toast.error("Failed to add.");
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        toast.error(
          "Adding this game in your wishlist is not posible rignt now! try again later!"
        );
      }
    } else {
      toast.warning(
        "Curently you are not logged-in! Login to creat your wishlist!"
      );
    }
  };

  return (
    <main className="space-y-10">
      <Helmet>
        <title>{gameTitle && gameTitle} | CHILL GAMER</title>
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

              <div className="text-center md:text-left grid md:grid-cols-2 items-center px-[5%] xs:px-0">
                <div className="space-y-2">
                  <h2 className="w-[95%] mx-auto md:mx-0">{gameTitle}</h2>

                  <div className="grid gap-1">
                    <div className="flex gap-2 mx-auto md:mx-0 items-center">
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

                  <div className="flex gap-2 pt-3 justify-center md:justify-start">
                    <Link
                      to={`/addReviewOn/${gameId}`}
                      className="primaryButton activePrimaryButton"
                    >
                      Add your review
                    </Link>
                    <button
                      onClick={handleAddtoWishlistButton}
                      type="button"
                      className="bg-custom-primary hover:bg-custom-half-primary border border-custom-primary p-2 duration-500 rounded-full"
                    >
                      <GiHeartPlus className="text-lg" />
                    </button>
                  </div>
                </div>

                <div className="max-w-[400px] space-y-3 place-self-end hidden md:inline-block">
                  {reviews.length == 0 ? (
                    <div className="place-items-center grid gap-3 content-center">
                      <img src={NotFoundImage} alt={`not available`} />
                      <h4 className="font-extrabold text-center text-custom-primary">
                        This game has Yet to be reviewed!
                      </h4>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-center">
                        {reviews.length <= 1 ? "Review" : "Top review"}
                      </h3>
                      <DetailsPageReviewCard data={reviews[0]} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className={`pb-14 ${reviews.length <= 1 && "md:hidden"}`}>
            <div className="container space-y-6">
              <h1 className="text-center">All Reviews</h1>
              {reviews.length == 0 ? (
                <div className="h-[70svh] place-items-center grid gap-3 content-center bg-white dark:bg-black">
                  <img src={NotFoundImage} alt={`not available`} />
                  <h1 className="font-extrabold text-center text-custom-primary">
                    This game has Yet to be reviewed!
                  </h1>
                </div>
              ) : (
                <>
                  <div
                    className={`${
                      reviews.length <= 4
                        ? "flex flex-wrap justify-center gap-6"
                        : "columns-[290px] md:columns-[350px] space-y-6"
                    }`}
                  >
                    {reviews.map((review, index) => (
                      <div
                        key={index}
                        className={`${
                          reviews.length <= 4 &&
                          "w-full max-w-[350px] md:max-w-[400px]"
                        }`}
                      >
                        <DetailsPageReviewCard data={review} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Game;
