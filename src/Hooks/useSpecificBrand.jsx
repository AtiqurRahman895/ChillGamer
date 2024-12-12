import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TransferLists } from "../Contexts/TransferLists";

const useSpecificBrand = ({ brandId }) => {
  const { coupons } = useContext(TransferLists);
  

  return specificBrand;
};

useSpecificBrand.propTypes = {
  brandId: PropTypes.string.isRequired,
};

export default useSpecificBrand;
