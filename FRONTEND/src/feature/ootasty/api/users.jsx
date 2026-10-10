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
  const res = await axiosInsatnce.post(
    "/auth/api/v1/user/refresh-token",
    {},
    {
      withCredentials: true,
    },
  );

  const accessToken = res.data.data.accessToken;

  dispatch(setAccessToken(accessToken));

  return accessToken;
};

export const handleLogout = async (accessToken) => {
  try {
    const res = await axiosInsatnce.post(
      "/auth/api/v1/user/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      },
    );

    return res.data;
  } catch (error) {
    console.error("Logout failed:", error.response?.data || error.message);

    throw error;
  }
};
