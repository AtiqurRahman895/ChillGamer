import axios from "axios";
import { useContext, useEffect, useState } from "react";
import NotFoundImage from "../../assets/notAvailable.png";
import Marquee from "react-fast-marquee";
import TrandingGameCard from "./TrandingGameCard";
import Loading from "../AuthenticationComponent/Loading";
import { TransferLists } from "../../Contexts/TransferLists";

const TrandingGamesSection = () => {
  const { lightTheme } = useContext(TransferLists);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const params = { limit: 10, sort: { totalReviews: -1, averageRating: -1 } };
    setLoading(true);
    axios
      .get("https://ph-tenth-assignment-server.vercel.app/games", { params })
      .then((res) => {
        res.data.length === 0 ? setNotFound(true) : setGames(res.data);
      })
      .catch((error) => {
        console.error("Error finding games:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // console.log(games);
  return (
    <section className="">
      <div className=" space-y-10 text-center">
        <h2>Tranding Games</h2>
        {loading ? (
          <Loading />
        ) : (
          <>
            {notFound ? (
              <div className="h-lvh place-items-center grid gap-3 content-center">
                <img src={NotFoundImage} alt={`not available`} />
                <h1 className="font-extrabold text-center text-custom-primary">
                  yet to add any game in the wishlist!
                </h1>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Marquee
                  pauseOnHover={true}
                  gradient={true}
                  gradientColor={lightTheme ? "white" : "black"}
                  // gradientWidth={`clamp(1.25rem, 0rem + 6.25vw, 5.625rem)`}
                  gradientWidth={`clamp(1.25rem, -2.2500000000000004rem + 8.75vw, 5.625rem)`}
                  className="bg-transparent"
                  speed={40}
                >
                  {games.map((game, index) => (
                    <TrandingGameCard key={index} data={game} />
                  ))}
                </Marquee>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TrandingGamesSection;
