import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from "react-icons/bi";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const DetailsPageReviewCard = ({data}) => {
    // console.log(data)
    return (
        <div className="break-inside-avoid bg-custom-half-primary p-4 grid gap-5 rounded-md ">
            <div className="space-y-1">
                <div className="flex gap-2 items-center">
                    <ReactStars
                        count={5}
                        value={data.rating} 
                        size={18} 
                        edit={false} 
                        isHalf={true} 
                        halfIcon={<IoStarHalf />} 
                        emptyIcon={<IoStarOutline />} 
                        fullIcon={<IoStar />} 
                        color1="rgba(47, 116, 172, 0.375) " 
                        color2="#2f74ac" 
                    />
                    <span>{data.rating}</span>
                </div>
            </div>
            <p className="leading-loose">
                <BiSolidQuoteSingleLeft className="text-custom-primary text-2xl inline"/> 
                {data.reviewDescription} 
                <BiSolidQuoteSingleRight className="text-custom-primary text-2xl inline align-text-bottom"/> 
            </p>

            <div className="flex justify-end">
                <div className="w-fit text-center">
                    <b className="text-[#1775A1] dark:text-[#5EBCE8]">- by {data.userName}</b>
                    <p className="text-xs">( {data.userEmail} )</p>
                </div>
            </div>

            {/* <Link to={`/review/${data._id}`} className="primaryButton activePrimaryButton mx-auto">View Details</Link> */}

        </div>
    );
};

export default DetailsPageReviewCard;