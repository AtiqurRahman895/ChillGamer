import { useEffect, useState } from "react";
import Topbar from "../CommonComponent/Topbar";
import axios from "axios";
import Loading from "../AuthenticationComponent/Loading";
import NotFoundImage from "../../assets/notAvailable.png";
import GameCard from "../CommonComponent/GameCard";
import { Helmet } from "react-helmet-async";

const AllGames = ({ addReviewPage }) => {
  // const [showFilter,setShowFilter]= useState(false)
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedSortType, setSelectedSortType] = useState("None");

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let sort;
    if (selectedSortType === "Rating") {
      sort = { averageRating: -1 };
    } else if (selectedSortType === "Year") {
      sort = { publishingYear: -1 };
    } else {
      sort = undefined;
    }
    const params = {
      query: { genres: selectedGenre !== "All" ? selectedGenre : null },
      sort,
    };
    setLoading(true);

    axios
      .get("https://ph-tenth-assignment-server.vercel.app/games", { params })
      .then((res) => {
        if (res.data.length === 0) {
          setNotFound(true);
        } else {
          setGames(res.data);
          setNotFound(false);
        }
      })
      .catch((error) => {
        console.error("Error finding games:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedGenre, selectedSortType]);

  return (
    <main className="">
      <Helmet>
        <title>All Games | CHILL GAMER</title>
      </Helmet>
      {/* <section className="bg-custom-primary py-16 lg:py-20">
              <div className="container text-center place-items-center space-y-6">
                  <h1>Our Game Collection</h1>
              </div>
          </section> */}

      <section className="mt-10 mb-20">
        <div className="container space-y-8">
          <Topbar
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            selectedSortType={selectedSortType}
            setSelectedSortType={setSelectedSortType}
            title={"All Games"}
          />

          <div className="">
            {loading ? (
              <Loading />
            ) : (
              <>
                {notFound ? (
                  <div className="h-lvh place-items-center grid gap-3 content-center">
                    <img src={NotFoundImage} alt={`not available`} />
                    <h1 className="font-extrabold text-center text-custom-primary">
                      No games available in this genre!
                    </h1>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {games.map((game, index) => (
                      <GameCard
                        key={index}
                        addReviewPage={addReviewPage && addReviewPage}
                        data={game}
                        addYear={1}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllGames;
