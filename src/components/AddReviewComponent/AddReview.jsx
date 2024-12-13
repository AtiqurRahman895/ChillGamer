import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import NewGameForm from "./NewGameForm";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { TransferLists } from "../../Contexts/TransferLists";
import AllGames from "./AllGames";

const AddReview = () => {
  const { lightTheme } = useContext(TransferLists);
  const [showForm, setShowForm] = useState(false);
  const [text] = useTypewriter({
    words: ["Existing Games", "New Game"],
    delaySpeed: 1500,
    typeSpeed: 100,
    deleteSpeed: 100,
    loop: 0,
  });
  return (
    <main className="">
      <Helmet>
        <title>Add Review | CHILL GAMER</title>
      </Helmet>
      <section className="bg-custom-primary py-12 lg:py-20">
        <div className="container text-center place-items-center space-y-6">
          <h1>
            Add Review On <br /> {text}
            <Cursor
              cursorBlinking
              cursorColor={lightTheme ? "#1775A1" : "#5EBCE8"}
            />{" "}
          </h1>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setShowForm(false)}
              type="button"
              className={`heroButton2 ${showForm || "activeHeroButton2"}`}
            >
              Existing game
            </button>

            <button
              onClick={() => setShowForm(true)}
              type="button"
              className={`heroButton2 ${showForm && "activeHeroButton2"}`}
            >
              New game
            </button>
          </div>
        </div>
      </section>
      {!showForm ? <AllGames addReviewPage={true} /> : <NewGameForm />}
    </main>
  );
};

export default AddReview;
