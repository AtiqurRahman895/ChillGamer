import { useContext, useMemo } from 'react';
import { TransferLists } from '../Contexts/TransferLists';

const useCategoryBrandCount = () => {
  const {coupons}=useContext(TransferLists)
  return useMemo(() => {
    const categoryMap = coupons.reduce((acc, brand) => {
      const { category } = brand;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += 1;
      return acc;
    }, {});

    return Object.keys(categoryMap).map(category => ({
      category: category,
      totalCount: categoryMap[category]
    }));
  }, [coupons]);
};

export default useCategoryBrandCount;
