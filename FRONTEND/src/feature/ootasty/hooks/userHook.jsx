import { useState } from "react";
import { handleLoginUserData, handleUserData } from "../api/users";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../state/authSlice";
import { useNavigate } from "react-router";

export const useHandleData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState(null);

  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await handleUserData(formData);

    dispatch(userRegister(response.data));
    navigate("/explore")
  };

  const handleSubmitLoginUser = async (e) => {
    e.preventDefault();

    const response = await handleLoginUserData(formData);

    dispatch(userLogin(response.data));
    navigate("/explore")
  };

  const handleChangeLoginUser = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  return {
    handleChange,
    handleSubmit,
    handleChangeLoginUser,
    handleSubmitLoginUser,
  };
};
