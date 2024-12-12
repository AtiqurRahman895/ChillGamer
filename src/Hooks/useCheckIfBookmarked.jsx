// import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { TransferLists } from '../Contexts/TransferLists';

const useCheckIfBookmarked = ({specificBrandId}) => {
  const {bookmarks} = useContext(TransferLists);
  const [bookmarked,setBookmarked] =useState(false)


  useEffect(() => {
    const isItOrNot = bookmarks.some(brand => brand._id === specificBrandId);
    setBookmarked(isItOrNot);
  }, [bookmarks, specificBrandId]);

    return {bookmarked,setBookmarked}
};

// useCheckIfBookmarked.propTypes = {
//   specificBrand: PropTypes.object.isRequired,
// };

export default useCheckIfBookmarked;