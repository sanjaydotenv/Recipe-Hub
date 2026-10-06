import { getAllStoresAPI } from "../api/getAllStores";

export const useAdminStores = () => {
  const allStoresData = async () => {
    const response = await getAllStoresAPI();

    return response.data.data.store.allStores
  };

  return {
    allStoresData,
  };
};
