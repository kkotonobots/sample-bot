const express = require('express')
const path = require('path')
import { BotFrameworkAdapter,MemoryStorage, ConversationState, UserState } from 'botbuilder'
const PORT = process.env.PORT || 3000
import { Bot } from './bot/bot'
require('dotenv').config();
require('@babel/register')({
  ignore: [/[\/\\]node_modules/, /@babel[\/\\]runtime/, /[\/\\]test/, /[\/\\]dist/, /[\/\\]core-js/],  //   
  presets: [['@babel/preset-env', { targets: { node: true } }]],
  plugins: ['@babel/plugin-transform-runtime'],
  // root:"./app"
});
const app = express();
  let auth = {};
      auth.appId = process.env.appId || '0af77574-f91a-4cf8-b0df-f8829e30b978'
      auth.appPassword = process.env.appPassword || '.pQbj2rr2JT9NlS40JFt_~q9PgZR.1DDoe'
  let adapter = new BotFrameworkAdapter(auth)
  const storage = new MemoryStorage()
  const conversationState = new ConversationState(storage)
  const userState = new UserState(storage)
  let bot = new Bot (auth,adapter,conversationState,userState)
     bot.init();
  app.post('/demo/messages',(req, res)=>{
    bot.adapter.processActivity(req,res, async (context)=> {
      await bot.run(context)
     //await context.sendActivity("First point working"); 
    })
  })
  
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
