import { useState } from "react";
import { handleUserData } from "../api/users";
import { useDispatch } from "react-redux";
import { userRegister } from "../state/authSlice";

export const useHandleData = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(null);

  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await handleUserData(formData);

    dispatch(userRegister(response.data));
  };

  return {
    handleChange,
    handleSubmit,
  };
};
