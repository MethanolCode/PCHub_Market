class ActionProvider {
    constructor(createChatBotMessage, setStateFunc,
        createClientMessage, stateRef, createCustomMessage,
        ...rest
    ) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.stateRef = stateRef;
      this.createCustomMessage = createCustomMessage;
    }

    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Выбор комплектующих непростая задача, советую прочитать наш гайд, вот ссылка",
        {widget: "javascriptLinks"}
      );
      this.updateChatbotState(message);
    };

    handlePromo = () => {
      const message = this.createChatBotMessage(
        "В поисках халявы? Она у нас есть, загляни по ссылке:",
        {widget: "promo"}
      );
      this.updateChatbotState(message);
    };

    handleGit = () => {
      const message = this.createChatBotMessage(
        "Хочешь посмотреть на сайт изнутри? Ну посмотри под капот:",
        {widget: "git"}
      );
      this.updateChatbotState(message);
    };

    greet() {
      const greetingMessage = this.createChatBotMessage("Здаров, я твой помощник...лучший из оставшихся...")
      this.updateChatbotState(greetingMessage)
    }
  
    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
    }
 }
 
 export default ActionProvider;