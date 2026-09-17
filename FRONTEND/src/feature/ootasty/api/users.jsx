import { useState } from "react";
import { axiosInsatnce } from "../../../config/axiosInstance";

export const handleUserData = async (data) => {
  const userResponse = await axiosInsatnce.post(
    "/auth/api/v1/user/register",
    data,
  );

  return userResponse;
};
