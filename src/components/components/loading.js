import React from "react";

function Loading() {
  return (
    <div className="centerScreen">
      <img
        src={
          "https://media0.giphy.com/media/XcJKsYtKPk0Vy/200w.gif?cid=82a1493ba4aiv46t6ebqwm7htn2ol4scxvluc40ittsfm5an&rid=200w.gif&ct=g"
        }
        alt="catLoading"
      />
      <br />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "80%",
          transform: "translate(-50%,-50%)",
          color: "#474747",
          opacity: 0.8,
        }}
      >
        <span className="LoadingL">L</span>
        <span className="LoadingO">O</span>
        <span className="LoadingA">A</span>
        <span className="LoadingD">D</span>
        <span className="LoadingI">I</span>
        <span className="LoadingN">N</span>
        <span className="LoadingG">G</span>
        <span> </span>
        <span className="LoadingDotI">.</span>
        <span> </span>
        <span className="LoadingDotII">.</span>
        <span> </span>
        <span className="LoadingDotIII">.</span>
      </div>
    </div>
  );
}

export default Loading;
