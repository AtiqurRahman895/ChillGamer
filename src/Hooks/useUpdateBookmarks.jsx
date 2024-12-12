import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TransferLists } from '../Contexts/TransferLists';
import { toast } from 'react-toastify';

const useUpdateBookmarks = ({specificBrand}) => {
  const {bookmarks, setBookmarks} = useContext(TransferLists);

  const addToBookmarks=()=>{

    setBookmarks((preBookmarks=>[...preBookmarks,specificBrand]))
    toast.success(`You've added ${specificBrand.brand_name} to the Bookmarks.`)

  }


  const removeFromBookmarks=()=>{
    
      const remainingBookmarks =bookmarks.filter(brand=>brand._id !== specificBrand._id)
      toast.info(`You've removed ${specificBrand.brand_name} from the Bookmarks.`)
      setBookmarks(remainingBookmarks)
  }

    return {addToBookmarks,removeFromBookmarks}
};

useUpdateBookmarks.propTypes = {
  specificBrand: PropTypes.object.isRequired,
};

export default useUpdateBookmarks;