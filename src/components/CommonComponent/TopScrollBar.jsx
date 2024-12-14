import { useEffect, useState } from "react";
import { FaSortNumericUpAlt } from "react-icons/fa";
import { TbAdjustmentsFilled } from "react-icons/tb";

const TopScrollBar = ({
  selectedGenre,
  setSelectedGenre,
  selectedSortType,
  setSelectedSortType,
  title,
}) => {
  const [genresList, setGenresList] = useState([
    "All",
    "RPG",
    "Adventure",
    "Action",
    "Adult",
    "Simulation",
    "Royale",
    "Sandbox",
    "Party",
    "MOBA",
    "Shooter",
  ]);
  const [sortTypeList, setSortTypeList] = useState(["None", "Rating", "Year"]);

  useEffect(()=>{
    //   const allSortTypeList=["None", "Rating", "Year"]
      const allGenresList=["All", "RPG", "Adventure", "Action", "Adult", "Simulation", "Royale", "Sandbox", "Party", "MOBA", "Shooter"]

    //   const remainingSortTypes=allSortTypeList.filter(sortTypeName=>sortTypeName !== selectedSortType)
    //   setSortTypeList(remainingSortTypes)

      const remainingGenres=allGenresList.filter(genreName=>genreName !== selectedGenre)
      setGenresList(remainingGenres)

  },[selectedSortType,selectedGenre])

  return (
    <div className="allReviewsTopScrollBar flex flex-col text-center gap-4">
      <h2>{selectedGenre === "All" ? `${title}` : `${selectedGenre}`}</h2>
      <div className="flex gap-4 w-full items-center justify-center">

        <div className="space-y-3 dropdown dropdown-bottom">
          <button
            tabIndex={0}
            type="button"
            className="flex items-center gap-1 primaryButton2 bg-custom-primary hover:bg-custom-half-primary capitalize"
          >
            <FaSortNumericUpAlt />{" "}
            {selectedSortType === "None"
              ? "Sort"
              : `Sort by ${selectedSortType}`}
          </button>
          <div
            tabIndex={0}
            className={`join join-vertical w-40 dropdown-content z-20`}
          >
            {sortTypeList.map((sortTypeName, index) => (
              <button
                key={index}
                onClick={() => setSelectedSortType(sortTypeName)}
                className={`${
                  selectedSortType === sortTypeName
                    ? "bg-custom-primary hover:bg-custom-primary"
                    : "bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-800"
                } duration-500 btn join-item border border-gray-300 hover:border-gray-300 dark:border-custom-ash dark:hover:border-custom-ash text-inherit`}
              >
                {sortTypeName}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 items-center overflow-x-scroll hide-scrollbar rounded-md ">
            <button
                tabIndex={0}
                type="button"
                className="flex items-center gap-1 primaryButton2 bg-custom-half-primary capitalize"
            >
                <TbAdjustmentsFilled className="text-[18px]"/>Filter: {selectedGenre}
            </button>
            <div className="flex gap-2">

                {genresList.map((genreName, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedGenre(genreName)}
                    className={`bg-gray-200 hover:bg-gray-200 dark:bg-gray-800 text-sm cursor-pointer px-4 py-[.56rem] duration-500 rounded-md border-none text-inherit`}
                >
                    {genreName}
                </button>
                ))}

            </div>
        </div>

      </div>
    </div>
  );
};

export default TopScrollBar;
