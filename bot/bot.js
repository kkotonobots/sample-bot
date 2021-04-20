'use stric'
import { BotFrameworkAdapter, ConversationState, UserState, PrivateConversationState, ActivityHandler, TurnContext } from 'botbuilder-core'
import { parentDialog } from './dialogs/parentDialog'
import { MemoryStorage } from 'botbuilder'

export class Bot extends ActivityHandler {
    constructor(auth,adapter,conversationState, userState) {
        super()
        this.adapter = adapter
        this.adapter.onTurnError = async (context,error) =>{
            console.log(error)
            await context.sendActivity('Opps somthing went wrong')
        }
        this.userState = userState;
        this.conversationState = conversationState
        const userDataAccessor = this.userState.createProperty('userData');
        const conversationDataAccessor = this.conversationState.createProperty('conversationData');
        const dialogStateAccessor = this.conversationState.createProperty('dialogState');
     this.dialog = new parentDialog(userDataAccessor,conversationDataAccessor,dialogStateAccessor)
     this.onMessage(async (context, next) => {
         await this.dialog.run(context)
         await next()
     })
     this.onEvent(async (context, next) => {
        if (context.activity.name === 'webchatJoin') {
          //await context.sendActivity("Hi There, \n\n I am a chatbot form Pistol, I can help you fining a Club location. \n\n You can ask me questions like \n\n Where can I find a club at Blackall QLD? \n\n What's the address of Naracoorte Pistol Club? \n\n Or \n\n Type the name of Club or Location.");
        }
        await next();
      });
     this.onDialog(async (context, next) => {
        // Save any state changes. The load happened during the execution of the Dialog.
        await conversationState.saveChanges(context, false);
        await userState.saveChanges(context, false);
        await next();
      });
      this.onMembersAdded(async (context, next) => {
        const membersAdded = context.activity.membersAdded;
        for (let cnt = 0; cnt < membersAdded.length; cnt++) {
            if (membersAdded[cnt].id !== context.activity.recipient.id) {
                await context.sendActivity(`![image](https://pistol.org.au/wp-content/themes/pistol/assets/images/logo.png) 
                \n\n Welcome to the Pistol Australia Bot! 
                \n\n I am only a young bot and I am still learning. 
                \n\n I can help you find a Club location. 
                \n\n You can ask me questions like:- 
                \n\n Where can I find a club at Blackall QLD? 
                \n\n What’s the address of Naracoorte Pistol Club? \n\n Or 
                \n\n Type the name of Club or Location.`);
            }
        }

        // By calling next() you ensure that the next BotHandler is run.
        await next();
    });
      
    }
    init () {
        console.log('Init is calling')
    }
}