import axios from "axios";
import { useEffect, useState } from "react";
import NotFoundImage from "../../assets/notAvailable.png";
import GameCard from "../CommonComponent/GameCard"
import Loading from "../AuthenticationComponent/Loading";

const TopRatedGamesSection = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const params = { limit: 6, sort: { averageRating: -1, totalReviews: -1 } };
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
      <div className="sm:container px-4 space-y-10 text-center">
        <h2>Top Rated Games</h2>
        {loading ? (
          <Loading />
        ) : (
          <>
            {notFound ? (
              <div className="h-lvh place-items-center grid gap-3 content-center ">
                <img src={NotFoundImage} alt={`not available`} />
                <h1 className="font-extrabold text-center text-custom-primary">
                  yet to add any game in the wishlist!
                </h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game, index) => (
                  <GameCard key={index} data={game} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TopRatedGamesSection;
