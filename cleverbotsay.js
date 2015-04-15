var Cleverbot = require("cleverbot-node");
var say = require("say");

var i = 0;

var chatbots = [{
  "name": "Alex",
  "voice": "Alex",
  "bot": new Cleverbot()
},{
  "name": "Victoria",
  "voice": "Victoria",
  "bot": new Cleverbot()
}];

var chat = function (chatbot, statement) {
  console.log(chatbot.name + ": ", statement);
  say.speak(chatbot.voice || chatbot.name, statement, function() {
    chatbot.bot.write(statement, function(resp) {
      i = (i === chatbots.length-1) ? 0 : i+1;
      chat(chatbots[i], resp.message);
    });
  });
}

chat(
  chatbots[i],
  "Hi there, " + chatbots[i+1].name + ". How are you today?"
);
