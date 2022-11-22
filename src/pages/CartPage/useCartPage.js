import { addRecap } from "../../redux/ecom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useCartPage = () => {
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.ecom);
  
    const productCartItem = product.filter((nilai) => {
      return nilai.cart > 0;
    });
    const check = () => {
      dispatch(addRecap());
    };

    return {product, productCartItem, check}
}