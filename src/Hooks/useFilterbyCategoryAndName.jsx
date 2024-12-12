import { useContext } from "react";
import { TransferLists } from "../Contexts/TransferLists";

const useFilterbyCategoryAndName = () => {
  const {coupons,setBrandsToShow}=useContext(TransferLists)

  const getCouponsByCategory=(categoryName)=>{
    
    if(categoryName==="All Brands"){
        setBrandsToShow(coupons)
    }else{
    setBrandsToShow(coupons.filter((coupon) => coupon.category.toLowerCase() === categoryName.toLowerCase()));
    }

  }
  const getCouponsByBrandName=(brandName)=>{
    setBrandsToShow(coupons.filter((coupon) => coupon.brand_name.toLowerCase() === brandName.toLowerCase()));

  }

  return {getCouponsByCategory,getCouponsByBrandName}
};


export default useFilterbyCategoryAndName;
