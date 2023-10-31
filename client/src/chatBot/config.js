import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./botComponents/Options.jsx";
import LinksList from "./botComponents/linkList.jsx";

const config = {
  initialMessages: [
      createChatBotMessage("Привет, я ассистент этого сайта. Нужна помощь?", {
      widget: "Options",
      }),],
    widgets: [
      {
      widgetName: "Options",
      widgetFunc: (props) => <Options {...props} />,
      },
      {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinksList {...props} />,
        props: {
          options: [
            {
              text: "Introduction to JS",
              url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "promo",
        widgetFunc: (props) => <LinksList {...props} />,
        props: {
          options: [
            {
              text: "Акции магазина",
              url: "http://localhost:3000/afish",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "git",
        widgetFunc: (props) => <LinksList {...props} />,
        props: {
          options: [
            {
              text: "GitHub",
              url: "https://github.com/MethanolCode/PCHub_Market",
              id: 1,
            }
          ],
        },
      },

    ],
  }
export default config