import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tambah } from "../../redux/userredux";
import { resetCart } from "../../redux/ecom";

export const useLogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product } = useSelector((state) => state.ecom);
  const { user } = useSelector((state) => state.user);
  const { val: userProfile} = user.find(
    (user) => user.val.username === localStorage.getItem("token")
  );

  const handleLogout = () => {
    const inilist = [];
    product.forEach((data) => {
      inilist.push(data.cart);
    });
    dispatch(tambah(inilist));
    dispatch(resetCart());
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleBackToMenu = () => {
    navigate("/");
  };

  return { userProfile, handleLogout, handleBackToMenu };
};
