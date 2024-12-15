import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const TrandingGameCard = ({data}) => {
    const {_id, gameCoverImage, gameTitle, averageRating, totalReviews}=data
    return (
        <div className="w-72 md:w-80 mx-8">
            <Link to={`/game/${_id}`} className="space-y-2 place-items-center text-center rounded-md">
                <img src={gameCoverImage} alt={`${gameTitle} Image`} />
                <h5 className="">{gameTitle}</h5>
                <div className="flex gap-2 px-3 items-center justify-center">
                    <ReactStars
                        count={5}
                        value={averageRating} 
                        size={16} 
                        edit={false} 
                        isHalf={true} 
                        halfIcon={<IoStarHalf />} 
                        emptyIcon={<IoStarOutline />} 
                        fullIcon={<IoStar />} 
                        color1="rgba(47, 116, 172, 0.375) " 
                        color2="#2f74ac" 
                    />
                    <span className="text-xs">{averageRating}</span>
                </div>
                <p className="">Total Reviews: {totalReviews}</p>
            </Link>

        </div>

    );
};

export default TrandingGameCard;