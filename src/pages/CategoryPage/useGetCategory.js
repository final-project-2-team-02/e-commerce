import { useSelector } from "react-redux";

export const useGetCategory = (category) => {
  const { product } = useSelector((state) => state.ecom);

  const productCategory = product.filter(
    (item) => item.val.category === category && item.jumlah > 0
  );

  return { productCategory };
};
