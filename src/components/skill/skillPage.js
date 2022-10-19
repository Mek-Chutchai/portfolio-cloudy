import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import GlassmorphismButton from "./btnSkill/glassmorphismButton";
import ContentLoader from "react-content-loader";
import toast from "react-hot-toast";
import Loading from "../components/loading";
import { useNavigate } from "react-router-dom";

function Skillpage() {
  const [card, setCard] = useState([]);
  const [cardIndex, setCardIndex] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [itemShop, setItemShop] = useState(false);
  const [money, setMoney] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      setCard([
        {
          name: "Lucky-game",
          image:
            "https://store.webkul.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/p/opencart-coupon-game-webkul.png",
          path: "gachaGame",
          // listItem: [
          //   "Color Change",
          //   "Calculator",
          //   "Digital Clock",
          //   "WordCounter",
          //   "Browser Extension",
          //   "Random Quotes",
          //   "Shopping Cart",
          //   "File Converter",
          //   "To-Do List",
          //   "Quiz App",
          //   "Expense Tracker",
          //   "Authentication",
          //   "Chat-App",
          //   "Youtube Clone",
          //   "Sorting Visualizer",
          //   "Social Media App",
          //   "File Sharing App",
          //   "MultiPlayer Game",
          // ],
        },
        {
          name: "Tic-tac-toe",
          image:
            "https://www.pngitem.com/pimgs/m/47-478267_tic-tac-toe-tic-tac-toe-png-transparent.png",
          path: "tictactor",
          // listItem: [],
        },
      ]);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const onGame = (item) => {
    navigate("/" + item);
  };
  return (
    <div>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <p>
            today i gonna teach u about how to use tailwind for react
            application
          </p>

          {/* <Navbar /> */}
          <div class="p-24 flex gap-16">
            {card.map((item, index) => (
              <>
                <div
                  class={
                    cardIndex === index
                      ? "px-8 w-74 h-84 gap-16 shadow-md flex rounded-lg cardItemSkill cursor-pointer items-center ..."
                      : "w-44 h-44 shadow-md flex justify-center rounded-lg cardItemSkill cursor-pointer items-center ..."
                  }
                  onClick={() => setCardIndex(index)}
                >
                  <div>
                    <img src={item.image} width="150px" />
                  </div>
                  {cardIndex === index && (
                    <div>
                      <p>{item.name}</p>
                      <button
                        onClick={() => onGame(item.path)}
                        class="border-4 border-sky-500 py-2 px-8  rounded-md text-xl bg-sky-500 shadow-lg shadow-sky-500/50 text-white"
                      >
                        PLAY
                      </button>
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Skillpage;
