import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DetailsPageReviewCard from "../CommonComponent/DetailsPageReviewCard";
import { GiHeartPlus } from "react-icons/gi";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../AuthenticationComponent/Loading";
import { Helmet } from "react-helmet-async";

const Review = () => {
  const review = useLoaderData();
  const { user } = useContext(AuthContext);
  const [gameDetails, setGameDetails] = useState();
  const [loading, setLoading] = useState(true);

  const { gameCoverImage, gameTitle, publishingYear, genres } = review;
  // console.log(review)
  const userEmail = user?.email;
  const userName = user?.displayName;



  useEffect(() => {
    const params = { query: { gameTitle: review?.gameTitle } };
    setLoading(true);
    axios
      .get(`https://ph-tenth-assignment-server.vercel.app/games`, { params })
      .then((result) => {
        // console.log(result)
        setGameDetails(result.data[0]);
      })
      .catch((error) => {
        console.error(`Error finding game:`, error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <main className="space-y-10">
      <Helmet>
        <title>Review on: {gameTitle && gameTitle} | CHILL GAMER</title>
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
                    <b>Publishing Year: {publishingYear}</b>
                    <b>Game Genre: {genres}</b>
                  </div>

                  <div className="flex gap-2 pt-3 justify-center md:justify-start">
                    <Link
                      to={`/game/${gameDetails._id}`}
                      className="primaryButton activePrimaryButton"
                    >
                      See Others reviews
                    </Link>
                    <button
                      type="button"
                      className="bg-custom-primary hover:bg-custom-half-primary border border-custom-primary p-2 duration-500 rounded-full"
                    >
                      <GiHeartPlus className="text-lg" />
                    </button>
                  </div>
                </div>

                <div className="max-w-[400px] place-self-end hidden md:inline-block">
                  <DetailsPageReviewCard data={review} />
                </div>
              </div>
            </div>
          </section>

          <section className="md:hidden pb-10 ">
            <div className="container">
              <div className="max-w-[400px] place-self-center ">
                <DetailsPageReviewCard data={review} />
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Review;
