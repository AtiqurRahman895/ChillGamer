import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const GameCard = ({data,addYear,addReviewPage}) => {
    const {_id, gameCoverImage, gameTitle, averageRating, totalReviews, publishingYear}=data
    return (
        <div className="break-inside-avoid card card-compact bg-custom-half-primary rounded-md">
            <figure>
                <img
                src={gameCoverImage}
                alt={`${gameTitle} Image`} />
            </figure>
            <div className="card-body place-items-center text-center">
                <h6 className="">{gameTitle} <span className="text-xs">{addYear&&`(${publishingYear})`}</span></h6>
                <div className="flex gap-2 items-center">
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
                {
                    addReviewPage && <p>Total Reviews: {totalReviews}</p>
                }
                
                <div className="card-actions">
                    {
                        addReviewPage?
                        <Link to={`/addReviewOn/${data._id}`} className="primaryButton activePrimaryButton h-fit">Add your review</Link>
                        : 
                        <Link to={`/game/${data._id}`} className="primaryButton activePrimaryButton h-fit">View Details</Link>
                    }
                </div>
            </div>
        </div>

    );
};

export default GameCard;