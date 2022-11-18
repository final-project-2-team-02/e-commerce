import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/userredux";

export const Listaja = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const url = "https://fakestoreapi.com/users";
  useEffect(() => {
    const fetching = () => {
      dispatch(fetchUser(url));
    };
    fetching();
    // eslint-disable-next-line
  }, []);

  return <div>{JSON.stringify(user)}</div>;
};
