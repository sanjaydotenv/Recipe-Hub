import { useState } from "react";

export const useProfile = () => {
  const [isShow, setIsShow] = useState(false);

  const handleBecomeASellerCard = () => {
    setIsShow(true);
  };

  const backToProfile = () => {
    setIsShow(false);
  };

  return {
    handleBecomeASellerCard,
    isShow,
    setIsShow,
    backToProfile,
  };
};
