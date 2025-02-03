import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../AuthenticationComponent/Loading";
import NotFoundImage from "../../assets/notAvailable.png";
import ReviewCard from "./ReviewCard";
import { Helmet } from "react-helmet-async";
import TopScrollBar from "../CommonComponent/TopScrollBar";

const AllReviews = () => {
  // const [showFilter,setShowFilter]= useState(false)
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedSortType, setSelectedSortType] = useState("None");

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let sort;
    if (selectedSortType === "Rating") {
      sort = { rating: -1 };
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
      .get("https://chill-gamer-server-sepia.vercel.app/reviews", { params })
      .then((res) => {
        if (res.data.length === 0) {
          setNotFound(true);
        } else {
          setReviews(res.data);
          setNotFound(false);
        }
      })
      .catch((error) => {
        console.error("Error finding reviews:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedGenre, selectedSortType]);

  return (
    <main className="">
      <Helmet>
        <title>All Reviews | CHILL GAMER</title>
      </Helmet>
      {/* <section className="bg-custom-primary py-16 lg:py-20">
                <div className="container text-center place-items-center space-y-6">
                    <h1>Our Game Collection</h1>
                </div>
            </section> */}

      <section className="mt-10 mb-20">
        <div className="container space-y-4">
          <TopScrollBar
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            selectedSortType={selectedSortType}
            setSelectedSortType={setSelectedSortType}
            title={"All Reviews"}
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
                      No reviews available in this genre!
                    </h1>
                  </div>
                ) : (
                  // columns-[290px] md:columns-[350px] space-y-6
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                      <ReviewCard key={index} data={review} />
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

export default AllReviews;
