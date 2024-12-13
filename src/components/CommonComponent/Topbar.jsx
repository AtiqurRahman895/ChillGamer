import { useEffect, useState } from 'react';
import { FaSortNumericUpAlt } from 'react-icons/fa';
import { TbAdjustmentsFilled } from 'react-icons/tb';

const Topbar = ({selectedGenre,setSelectedGenre, selectedSortType, setSelectedSortType ,title}) => {
    const [genresList,setGenresList]=useState(["All", "RPG", "Adventure", "Action", "Adult", "Simulation", "Royale", "Sandbox", "Party", "MOBA", "Shooter"])
    const [sortTypeList,setSortTypeList]=useState(["None", "Rating", "Year"])

    

    useEffect(()=>{
        const allSortTypeList=["None", "Rating", "Year"]
        const allGenresList=["All", "RPG", "Adventure", "Action", "Adult", "Simulation", "Royale", "Sandbox", "Party", "MOBA", "Shooter"]

        const remainingSortTypes=allSortTypeList.filter(sortTypeName=>sortTypeName !== selectedSortType)
        setSortTypeList(remainingSortTypes)

        const remainingGenres=allGenresList.filter(genreName=>genreName !== selectedGenre)
        setGenresList(remainingGenres)

    },[selectedSortType,selectedGenre])

    return (
        <div className="allReviewsTopbar flex flex-col text-center xs:text-start xs:flex-row justify-between xs:items-end items-center gap-4">
            <h2>{selectedGenre==="All"?`${title}`:`${selectedGenre}`}</h2>
            <div className="flex gap-4 items-center">

                <div className="space-y-4 md:w-full dropdown dropdown-bottom">
                    <button tabIndex={0} type="button" className="flex items-center gap-1 primaryButton activePrimaryButton capitalize">
                        <FaSortNumericUpAlt/> {selectedSortType==="None"? "Sort":`Sort by ${selectedSortType}` }
                    </button>
                    <div tabIndex={0} className={`join join-vertical w-40 dropdown-content z-20`} >
                                {
                                    sortTypeList.map(((sortTypeName,index)=>(
                                        <button key={index} onClick={()=>setSelectedSortType(sortTypeName)} className={`joinedFilterButton`}>{sortTypeName}</button>
                                    )))
                                }
                    </div>
                </div>

                <div className="space-y-4 md:w-full dropdown dropdown-end">
                    <button tabIndex={0} type="button" className="flex items-center gap-1 cardButton capitalize">
                        <TbAdjustmentsFilled className="text-[18px]"/> Filter
                    </button>
                    <div tabIndex={0} className={`join join-vertical w-40 dropdown-content z-20`} >
                                {
                                    genresList.map(((genreName,index)=>(
                                        <button key={index} onClick={()=>setSelectedGenre(genreName)} className={`joinedFilterButton`}>{genreName}</button>
                                    )))
                                }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Topbar;