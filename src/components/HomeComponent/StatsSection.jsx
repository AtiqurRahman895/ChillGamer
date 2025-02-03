import axios from "axios";
import { useContext, useEffect, useState } from "react";
import NotFoundImage from "../../assets/notAvailable.png";
import Loading from "../AuthenticationComponent/Loading";
import { MdRateReview, MdReviews } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { TransferLists } from "../../Contexts/TransferLists";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { Bounce } from "react-toastify";

const StatsSection = () => {
  const { lightTheme } = useContext(TransferLists);
  const [totalGames, settotalGames] = useState();
  const [totalReviews, settotalReviews] = useState();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [text] = useTypewriter({
    words: ["Games", "Reviews"],
    delaySpeed: 1500,
    typeSpeed: 100,
    deleteSpeed: 100,
    loop: 0,
  });
  useEffect(() => {
    // setLoading(true);
    axios
      .get("https://chill-gamer-server-sepia.vercel.app/games")
      .then((res) => {
        res.data.length === 0
          ? setNotFound(true)
          : settotalGames(res.data.length);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error finding games:", error);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://chill-gamer-server-sepia.vercel.app/reviews")
      .then((res) => {
        res.data.length === 0
          ? setNotFound(true)
          : settotalReviews(res.data.length);
      })
      .catch((error) => {
        console.error("Error finding reviews:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // console.log(totalGames, totalReviews);
  return (
    <section className="pb-20">
      <div className="sm:container px-4 space-y-10 text-center">
        <h2>
          Total {text}
          <Cursor
            cursorBlinking
            cursorColor={lightTheme ? "#5EBCE8" : "#1775A1"}
          />{" "}
        </h2>
        {loading ? (
          <Loading />
        ) : (
          <>
            {notFound ? (
              <div className="h-lvh place-items-center grid gap-3 content-center">
                <img src={NotFoundImage} alt={`not available`} />
                <h1 className="font-extrabold text-center text-custom-primary">
                  Anyone yet to add any games or reviews!
                </h1>
              </div>
            ) : (
              <div className="grid grid-cols-2 items-start gap-4">
                <Slide duration={1500} direction="left" cascade damping={1}>
                  <Link
                    to={"/games"}
                    className="grid gap-3 justify-items-center"
                  >
                    <IoGameController className="text-[clamp(6rem,1.8736842105263163rem+13.473684210526315vw,14rem)] text-custom-primary" />
                    <h6 className="text-[14px] xs:text-[clamp(1rem,0.7421052631578948rem+0.8421052631578947vw,1.5rem)]">
                      {totalGames}+
                    </h6>
                  </Link>
                </Slide>

                <Slide duration={1500} direction="right" cascade damping={1}>
                  <Link
                    to={"/reviews"}
                    className="grid gap-3 justify-items-center"
                  >
                    {/* <MdReviews className="text-[clamp(6rem,1.8736842105263163rem+13.473684210526315vw,14rem)] text-custom-primary"/> */}
                    <MdRateReview className="text-[clamp(6rem,1.8736842105263163rem+13.473684210526315vw,14rem)] text-custom-primary" />
                    <h6 className="text-[14px] xs:text-[clamp(1rem,0.7421052631578948rem+0.8421052631578947vw,1.5rem)]">
                      {totalReviews}+
                    </h6>
                  </Link>
                </Slide>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default StatsSection;
