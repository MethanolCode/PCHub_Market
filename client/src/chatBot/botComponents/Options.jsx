import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    { text: "Выбор комплектующих", handler: props.actionProvider.handleJavascriptList, id: 1 },
    { text: "Акции и скидки", handler: props.actionProvider.handlePromo, id: 2 },
    { text: "Исходники сайта", handler: props.actionProvider.handleGit, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >{option.text}</button>
  ));
  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default Options;