import React from "react";
function Homepage() {
  const onGetStarted = () => {
    window.location.replace("/home");
  };
  return (
    <div class="p-20">
      <div className="home-center">
        <div class="flex justify-center">
          <h1 class="text-3xl" className="sayHalo">Hi user.</h1>
        </div>
        <div class="flex justify-center">
          <img
            src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53539b550b7634d6f2aade_peep-25.png"
            alt="human"
            width="50%"
          />
        </div>
        <div class="flex justify-center">
          <button
            class="... ring-2 ring-zinc-500 ring-inset p-2"
            onClick={() => onGetStarted()}
          >
            SURVEY
          </button>
        </div>
      </div>

      <div className="home-ref">
        <p>
          image by:{" "}
          <u onClick={() => window.open("https://openpeeps.com/")}>
            https://openpeeps.com/
          </u>
        </p>
      </div>
    </div>
  );
}

export default Homepage;
