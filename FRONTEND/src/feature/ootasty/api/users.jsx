import { useState } from "react";
import { axiosInsatnce } from "../../../config/axiosInstance";
import { setAccessToken } from "../state/authSlice";

export const handleUserData = async (data) => {
  const userResponse = await axiosInsatnce.post(
    "/auth/api/v1/user/register",
    data,
  );

  return userResponse;
};

export const handleLoginUserData = async (data) => {
  const userResponse = await axiosInsatnce.post(
    "/auth/api/v1/user/login",
    data,
  );

  return userResponse;
};

export const handleAccessToken = async (dispatch) => {


  const res = await axiosInsatnce.post("/auth/api/v1/user/refresh-token")

  dispatch(setAccessToken(res.data.data.accessToken))

}