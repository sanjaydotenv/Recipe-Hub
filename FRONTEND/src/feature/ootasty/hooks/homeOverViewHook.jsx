import pizza from "../../../../src/assets/pizza.avif";
import pasta from "../../../../src/assets/pasta.avif";
import burger from "../../../../src/assets/burger.avif";
import cake from "../../../../src/assets/cake.avif";
import { useNavigate } from "react-router";

export const useOverview = () => {
  const navigate = useNavigate();

  const overViewData = [
    {
      foodImage: pizza,
      name: "Pizza",
      para: "Cheesy crispy & delicious",
    },
    {
      foodImage: pasta,
      name: "Pasts",
      para: "Comfort in every bite",
    },
    {
      foodImage: burger,
      name: "Burger",
      para: "juicy tasty & satisfying",
    },
    {
      foodImage: cake,
      name: "Desserts",
      para: "sweet treats for you",
    },
  ];

  const redirectExplorePage = (e) => {
    console.log(e.target);
    navigate("/explore");
  };

  return { overViewData, redirectExplorePage };
};
