import { useDispatch, useSelector } from "react-redux";
import { createSeller } from "../api/seller";
import { handleAccessToken } from "../api/users";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useSeller = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuthenticated, accessToken } = useSelector(
    (state) => state.authUser,
  );

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [storeData, setStoreData] = useState({});

  const createSellerAccount = async (data) => {
    const token = await handleAccessToken(dispatch);
    const res = await createSeller(token, data);

    console.log(res)
    navigate("/store/dashboard")
  };

  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) => {
      const alreadySelected = prev.some((item) => item.id === category.id);

      if (alreadySelected) {
        return prev.filter((item) => item.id !== category.id);
      }

      return [...prev, category];
    });
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreateStoreBtn = async () => {
    const categories = selectedCategories.map((cat) => cat.name);

    const data = {
      storeName: inputValue,
      category: categories,
    };

    setStoreData(data);
    createSellerAccount(data);
  };

  return {
    isAuthenticated,
    accessToken,

    createSellerAccount,

    handleCreateStoreBtn,
    handleInputValue,
    handleCategoryClick,

    selectedCategories,
    setSelectedCategories,

    inputValue,
    setInputValue,

    storeData,
    setStoreData,
  };
};
