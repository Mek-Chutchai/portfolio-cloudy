import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import GlassmorphismButton from "./btnSkill/glassmorphismButton";
import ContentLoader from "react-content-loader";
import toast from "react-hot-toast";
import Loading from "../components/loading";

function GachaGame() {
  const [card, setCard] = useState([]);
  const [cardIndex, setCardIndex] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [itemShop, setItemShop] = useState(false);
  const [money, setMoney] = useState(0);

  const onRandom = () => {
    let i = 0;
    for (i = 0; i <= 50; i++) {
      randomLucky(i);
    }
    // setTimeout(() => {
    // console.log(Number(card[randomNum]));
    // setMoney(money + Number(card[randomNum]));
    // setCount(count + 1);
    // }, 1200);
  };
  const randomLucky = (i) => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 12);
      setItemShop(randomNum);
      if (i === 50) {
        setTimeout(() => {
          console.log(Number(card[randomNum]));
          setMoney(money + Number(card[randomNum]));
          setCount(count + 1);
        }, 1200);
      }
    }, 50 * i);
  };
  const onWithDraw = () => {
    toast.success("ถอนเงินเข้าบัญชีสำเร็จ!");
    setMoney(0);
  };
  useEffect(() => {
    const fetchData = () => {
      console.time();
      // for (let i = 0; i < 10000; i++) {
      //   console.log(i);
      // }
      console.timeEnd();
      setCard([
        "100",
        "-200",
        "300",
        "-400",
        "-500",
        "-600",
        "700",
        "800",
        "900",
        "-1000",
        "-1100",
        "1200",
      ]);
      setCardIndex([100, 200, 300, 400]);
      // setCard([
      //   {
      //     name: "react",
      //     image:
      //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      //     listItem: [
      //       "Color Change",
      //       "Calculator",
      //       "Digital Clock",
      //       "WordCounter",
      //       "Browser Extension",
      //       "Random Quotes",
      //       "Shopping Cart",
      //       "File Converter",
      //       "To-Do List",
      //       "Quiz App",
      //       "Expense Tracker",
      //       "Authentication",
      //       "Chat-App",
      //       "Youtube Clone",
      //       "Sorting Visualizer",
      //       "Social Media App",
      //       "File Sharing App",
      //       "MultiPlayer Game",
      //     ],
      //   },
      //   {
      //     name: "flutter",
      //     image: "http://www.somkiat.cc/wp-content/uploads/2018/07/flutter.png",
      //     listItem: [],
      //   },
      // ]);
      setIsLoading(false);
    };
    fetchData();
  }, []);
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
          <button
            onClick={() => window.location.replace("/skill")}
            class="border-4 border-gray-500  px-8  rounded-md text-xl bg-gray-500 shadow-lg shadow-gray-500/50 text-white"
          >
            Back
          </button>
          {money > 0 ? (
            <>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div class="flex justify-between m-4 ...">
                  <div class="uppercase">Heng over</div>
                  <div class="uppercase">${money}</div>
                </div>

                <div class={money > 1000 && "flex justify-between"}>
                  <button
                    onClick={() => onRandom()}
                    class="border-4 border-amber-500 py-4 px-8  rounded-md text-xl bg-amber-500 shadow-lg shadow-amber-500/50 text-white"
                  >
                    PLAY
                  </button>
                  {money > 1000 && (
                    <button
                      onClick={() => onWithDraw()}
                      class="border-4 border-amber-500 py-4 px-8  rounded-md text-xl bg-red-500 shadow-lg shadow-amber-500/50 text-white"
                    >
                      Withdraw
                    </button>
                  )}
                </div>
                <div class="flex justify-center m-8">
                  <div class="grid grid-cols-4 gap-4 w-48">
                    {card.map((item, index) => (
                      <div
                        class={
                          itemShop === index
                            ? item.includes("-")
                              ? "w-12 h-12 bg-red-500 rounded-md items-center flex justify-center text-white"
                              : "w-12 h-12 bg-green-500 rounded-md items-center flex justify-center text-white"
                            : "w-12 h-12 bg-red-100 rounded-md items-center flex justify-center text-white"
                        }
                      >
                        ${item}
                      </div>
                    ))}
                  </div>
                </div>
                <div class="flex justify-end m-4 ...">
                  <div class="text-black-100">
                    Withdraw can use more than $999
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {money < 0 ? (
                  <>
                    YOU LOSE <span class="text-red-500 text-5xl">${money}</span>
                    <br />
                    LET'S CONTACT FOR PAY
                    <br />
                    <button
                      onClick={() => window.location.reload()}
                      class="border-4 border-red-500 py-2 px-8 my-4  rounded-md text-xl bg-red-500 shadow-lg shadow-red-500/50 text-white"
                    >
                      RESET
                    </button>
                  </>
                ) : (
                  <>
                    <p>Choose deposit</p>
                    <div class="flex justify-center m-8">
                      <div class="grid grid-cols-4 gap-4 w-48">
                        {cardIndex.map((item, index) => (
                          <div
                            class={
                              "w-12 h-12 bg-red-500 rounded-md items-center flex justify-center text-white ..."
                            }
                            onClick={() => setMoney(item)}
                          >
                            ${item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          {/* <Navbar /> */}
          {/* <div class="p-24 flex gap-16">
  {card.map((item, index) => (
    <>
      <div
        class={
          cardIndex === index
            ? "p-8 w-74 h-84 gap-16 shadow-md flex rounded-lg cardItemSkill cursor-pointer items-center ..."
            : "w-44 h-44 shadow-md flex justify-center rounded-lg cardItemSkill cursor-pointer items-center ..."
        }
        onClick={() => setCardIndex(index)}
      >
        <div>
          <img src={item.image} width="150px" />
        </div>
        {cardIndex === index && <p>Experience : 2 Years</p>}
      </div>
    </>
  ))}
</div> */}
        </>
      )}
    </div>
  );
}

export default GachaGame;
