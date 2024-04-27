const { Configuration, OpenAIApi } = require('openai');//npm i openai

const configuration = new Configuration({
 organization: "https://platform.openai.com/account/org-settings burdan altta oluyor",
  apiKey: "chatgpt api key almak için https://platform.openai.com/account/api-keys",
});

const openai = new OpenAIApi(configuration);

//check for messeges
client.on('messageCreate' , async function(message){
  if (message.channel.id == "hangi kanalda çalışçaksa o kanalın id")  {
  try{
      if(message.author.bot) return;
    //  message.channel.sendTyping();
      const response = await openai.createCompletion({
          model:"text-davinci-003",
          prompt: `${message.content}`,
        temperature:0.5,
          max_tokens:2048,
      });
      console.log(`${response.data.choices[0].text}`);
      if (response.data.choices[0].text.trim() !== '') {
              message.reply(`${response.data.choices[0].text}`);
       //       message.channel.sendTyping(false)
      }
      return;
  }catch(e){
  message.reply("Hata Oluştu!"+e)
      console.log(e)
  }
}});
