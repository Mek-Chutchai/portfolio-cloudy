import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import GlassmorphismButton from "./btnSkill/glassmorphismButton";

function Skillpage() {
  const [card, setCard] = useState([]);
  const [cardIndex, setCardIndex] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      setCard([
        {
          name: "react",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          name: "flutter",
          image: "http://www.somkiat.cc/wp-content/uploads/2018/07/flutter.png",
        },
      ]);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div class="p-24 flex gap-16">
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
              {/* <div>{item.name}</div> */}
              <div>
                <img src={item.image} width="150px" />
              </div>
              {cardIndex === index && <p>Experience : 2 Years</p>}
            </div>
          </>
        ))}
      </div>
      {/* <GlassmorphismButton/> */}
    </div>
  );
}

export default Skillpage;
