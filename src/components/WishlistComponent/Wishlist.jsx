import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../AuthenticationComponent/Loading";
import NotFoundImage from "../../assets/notAvailable.png";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishItems, setWishItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const params = { query: { userEmail: user?.email } };
    axios
      .get("https://ph-tenth-assignment-server.vercel.app/Wishlist", { params })
      .then((res) => {
        res.data.length === 0 ? setNotFound(true) : setWishItems(res.data);
      })
      .catch((error) => {
        console.error("Error finding wish Items form wishlist:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email, loading]);

  const handleDeleteButton = (_id, gameTitle) => {
    const deleteGame = window.confirm(
      `Are you sure about deleting ${gameTitle} from your wishlist?`
    );
    if (deleteGame) {
      setLoading(true);
      axios
        .delete(
          `https://ph-tenth-assignment-server.vercel.app/deleteWishlist/${_id}`
        )
        .then(() => {
          toast.info(
            `You have successfully deleted ${gameTitle} from your wishlist`
          );
        })
        .catch(() => {
          toast.error(`Faild to delete delete ${gameTitle} from your wishlist`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // console.log(wishItems._id)
  return (
    <main className="">
      <Helmet>
        <title>Your Game Wishlist | CHILL GAMER</title>
      </Helmet>
      <section className="bg-custom-primary py-16 lg:py-20">
        <div className="container">
          <div className=" text-center place-items-center space-y-6">
            <h1>Your Game Wishlist</h1>
            <h5 className="px-6 sectionHeaderWidth sectionHeaderSubtextWidth">
              Keep track of the games you want to play and revisit them anytime!
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
                yet to add any game in the wishlist!
              </h1>
            </div>
          ) : (
            <div className="max-h-[65svh] overflow-x-auto">
              <table className="MyReviewTable table table-sm table-pin-rows table-pin-cols">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <td>Game Title</td>
                    <td>Average Rating</td>
                    <td>Publishing Year</td>
                    <td>Genres</td>
                    <td className="sm:hidden text-center">Actions</td>
                    <th className="hidden sm:table-cell text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-custom-half-primary">
                  {wishItems.map((item, index) => (
                    <tr key={index + 1}>
                      <th className="text-center">{index + 1}</th>
                      <td>{item.gameTitle}</td>
                      <td>{item.averageRating}</td>
                      <td>{item.publishingYear}</td>
                      <td>{item.genres}</td>
                      <td className="sm:hidden">
                        <div className="flex gap-4 w-full items-center justify-center">
                          <MdDeleteForever
                            onClick={() =>
                              handleDeleteButton(item._id, item.gameTitle)
                            }
                            className="btn-sm p-1 btn-circle btn-ghost cursor-pointer"
                          />
                          <Link to={`/game/${item._id}`}>
                            <GrLinkNext className="btn-sm p-1.5 btn-circle btn-ghost cursor-pointer" />
                          </Link>
                        </div>
                      </td>
                      <th className="hidden sm:table-cell">
                        <div className="flex gap-4 w-full items-center justify-center">
                          <MdDeleteForever
                            onClick={() =>
                              handleDeleteButton(item._id, item.gameTitle)
                            }
                            className="btn-sm p-1 btn-circle btn-ghost cursor-pointer"
                          />
                          <Link to={`/game/${item.gameId}`}>
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
                        "Average Rating"
                      )}
                    </td>
                    <td>
                      {loading ? (
                        <span className="loading loading-spinner loading-xs text-custom-primary"></span>
                      ) : (
                        "Publishing Year"
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

export default Wishlist;
