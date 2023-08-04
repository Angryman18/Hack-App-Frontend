import React from "react";
import "./style.scss";

type ButtoProps = {
  text: string;
  onClick: (event: React.SyntheticEvent) => void;
  size?: "large" | "medium" | "small";
};

function Button({ text, onClick, size }: ButtoProps) {
  let buttonSize: string = "";
  switch (size) {
    case "large":
      buttonSize = "py-3 px-6";
      break;
    case "medium":
      buttonSize = "py-2 px-4";
      break;
    case "small":
      buttonSize = "py-1 px-3";
      break;
    default:
      buttonSize = "py-1 px-3";
  }

  return (
    <button onClick={onClick} className={`custom-button ${buttonSize}`}>
      {text}
    </button>
  );
}

export default Button;
