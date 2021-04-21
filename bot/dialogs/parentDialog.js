import { TurnContext } from 'botbuilder-core'
const { AttachmentLayoutTypes, CardFactory } = require('botbuilder');
import  storage  from '../bot'
const { QnAMaker } = require('botbuilder-ai');
const { forEach } = require('p-iteration');

//import {inputCardDialog,ouputCardDialog} from './cardDialog'
let applyjob_pe = require('../cardJson/applyjob-pe')
let applyjob_sy = require('../cardJson/applyjob-sy')
let facilities_pe = require('../cardJson/facilities-pe')
let facilities_sy = require('../cardJson/facilities-sy')
let openinghours_pe = require('../cardJson/openinghours-pe')
let openinghours_sy = require('../cardJson/openinghours-sy')
let clubCard = require('../cardJson/clubCard')

console.log('/n/n/n',storage)
let request = require('request');

const {
    ComponentDialog,
    DialogSet,
    DialogTurnStatus,
    WaterfallDialog,
    AttachmentPrompt,
    DateTimePrompt,
    ConfirmPrompt,
    NumberPrompt,
    TextPrompt,
    ChoicePrompt,
    ChoiceFactory
} = require('botbuilder-dialogs')

export class parentDialog extends ComponentDialog{
    constructor(userDataAccessor,conversationDataAccessor,dialogStateAccessor) {
        super('root')
        console.log(dialogStateAccessor)
        // Create a property used to store dialog state.
        // See https://aka.ms/about-bot-state-accessors to learn more about bot state and state accessors.
        this.userDataAccessor = userDataAccessor
        this.conversationDataAccessor = conversationDataAccessor
        this.dialogStateAccessor = dialogStateAccessor
        this.dialogs = new DialogSet(this.dialogStateAccessor)
        //this.inputCardDialog = new inputCardDialog(this.userDataAccessor,this.conversationDataAccessor,this.dialogStateAccessor,this.dialogs)
        //this.ouputCardDialog = new ouputCardDialog(this.userDataAccessor,this.conversationDataAccessor,this.dialogStateAccessor,this.dialogs)
        this.initialDialogId = 'root'
        this.initDialog()
        this.qnaMaker = new QnAMaker({
            knowledgeBaseId: process.env.QnAKnowledgebaseId || '5444a2a5-a807-4512-a5f9-f3941e2de96c',
            endpointKey: process.env.QnAEndpointKey || '07f5d73e-b578-42bd-bae9-1ad7e3a2f4fb',
            host: process.env.QnAEndpointHostName || 'https://new-qna-service.azurewebsites.net/qnamaker'
        });

    }
    initDialog() {
        let that = this
        console.log(that.dialogs)
        if(!that.dialogs) {
        that.dialogs = new DialogSet(this.dialogStateAccessor)
        }
        if(!that.dialogs.find('root')) {
            that.dialogs.add(that)
        }
    }
  createCard(cardName) {
    return CardFactory.adaptiveCard(eval(cardName));
  }
  getQnaMakerResult(uatt) {
      let option = {
          url : 'https://new-qna-service.azurewebsites.net/qnamaker/knowledgebases/5444a2a5-a807-4512-a5f9-f3941e2de96c/generateAnswer',
          method: 'POST',
          headers :{
            authorization: '07f5d73e-b578-42bd-bae9-1ad7e3a2f4fb'
          },
          json:{
              question: uatt,
              top:5
          }
      }
    return new Promise(function (resolve, reject) {
      request(option,function(err,res,result){
          if(err) return reject(err)
          if(res.statusCode === 200) {
              if(result && result.answers && result.answers.length>0) resolve(result.answers)
          }
      })
    })
  }
  async run(context) {
      let that = this
      try {
      let dialogContext =  await that.dialogs.createContext(context)
      const results = await dialogContext.continueDialog()
      if (!that.dialogs.find('text')) that.dialogs.add(new TextPrompt('text'));
      if (!that.dialogs.find('number')) that.dialogs.add(new NumberPrompt('number'));
      if (!that.dialogs.find('choiceCard')) that.dialogs.add(new ChoicePrompt('choiceCard'))
      if (!that.dialogs.find('confirm')) that.dialogs.add(new ConfirmPrompt('confirm'))
      if (!that.dialogs.find('dateTime')) that.dialogs.add(new DateTimePrompt('dateTime'))
      if (!that.dialogs.find('attachment')) that.dialogs.add(new AttachmentPrompt('attachment'))
      if(results && results.status === DialogTurnStatus.empty) {
          if(!that.dialogs.find('qnaDialog')) {
           that.dialogs.add(new WaterfallDialog('qnaDialog',[async (step)=> {
               context = step.context
               await context.sendActivity(`Hey i am demo bot you can try me sending email.`);
                return await step.endDialog();
            //    let finalAnswer, cardName,inputCard,attachments = [] ;
            //    let qnaResults = await this.getQnaMakerResult(context.activity.text);
            //        qnaResults = qnaResults.filter(a=>a.score>20)
            //     let smallTalkAns = qnaResults.filter(a=>{
            //         if(!a.metadata || a.metadata.length ==0) return false
            //         return a.metadata.find(tag=>tag.name == 'editorial' && tag.value == 'chitchat')
            //     }) 
            //     let nonSmallTalkAns = qnaResults.filter(a=>{
            //         if(!a.metadata || a.metadata.length ==0) return true
            //         return a.metadata.find(tag=> !tag.value || tag.value !== 'chitchat')
            //     }) 
            //     let isSmallTalk = smallTalkAns && smallTalkAns.length>0 && smallTalkAns[0].score >99 ? true : false
            //     if(isSmallTalk) finalAnswer = smallTalkAns[0].answer
            //     else if(nonSmallTalkAns && nonSmallTalkAns.length>0 && nonSmallTalkAns[0].metadata.find(tag=>tag.name ==='flow')){
            //         //cardName = nonSmallTalkAns[0].metadata[0].value
            //         finalAnswer = nonSmallTalkAns[0].answer
            //     }
            //     else finalAnswer = nonSmallTalkAns && nonSmallTalkAns.length>0? nonSmallTalkAns[0].answer: null
            //    if (finalAnswer) {
            //        if(finalAnswer && isSmallTalk) {
            //         await context.sendActivity(finalAnswer);
            //         return await step.endDialog({});
            //        }
                // if(cardName == 'applyjob_pe' || cardName == 'applyjob_sy') inputCard = true
                // cardName = 'clubCard';
                // console.log(clubCard)
                // if(cardName) {
                //     let n= 5
                //     let emailJson,phoneJson,websiteJson,mapJson
                //     let dynamicJSON =   {
                //         "type": "Column",
                //         "width": "stretch",
                //         "items": [
                //             {
                //                 "type": "TextBlock",
                //                 "text": "",
                //                 "wrap": true,
                //                 "size": "Large",
                //                 "weight": "Bolder",
                //                 "isVisible": true
                //             }
                //         ]
                //     }
                //     let webJson =    {
                //         "type": "TextBlock",
                //         "text": "",
                //         "wrap": true,
                //         "size": "Medium",
                //         "fontType": "Default",
                //         "isSubtle": true,
                //         "isVisible": true
                //     }
                //     if(nonSmallTalkAns.length<n) n= nonSmallTalkAns.length
                //     await forEach(nonSmallTalkAns, async (ee, i)=>{                        
                //         let clubCard1 = JSON.parse(JSON.stringify(clubCard));
                //         let dynamicJSONe = JSON.parse(JSON.stringify(dynamicJSON))
                //         let dynamicJSONp = JSON.parse(JSON.stringify(dynamicJSON))
                //         let dynamicJSONm = JSON.parse(JSON.stringify(dynamicJSON))
                //         let webJsonw = JSON.parse(JSON.stringify(webJson))

                //         let longitude, latitude
                //         if(i>n) return
                //         clubCard1.body[0].items[0].text =ee.answer
                //         clubCard1.body[1].columns[0].items[0].text =ee.questions[0]
                //         ee.metadata.forEach(tag => {
                //             if(tag.name=='phone'){
                //                 if(context.activity.channelId=='directline')
                //                 phoneJson = "[Call](mailto:"+tag.value.replace(/ /g,'')+")\n"
                //                 else 
                //               phoneJson = "[Call](tel:"+tag.value.replace(/ /g,'')+")\n"
                //             }
                //             if(tag.name=='email'){
                //                 emailJson = "[Email](mailto:"+tag.value+")\n"
                //             }
                //             if(tag.name == 'longitude'){
                //                 longitude = tag.value
                //                 mapJson = "[Map](https://www.google.com/maps/search/?api=1&query="+latitude+","+longitude+")"
                //             }
                //             if(tag.name == 'latitude'){
                //                 latitude = tag.value
                //                 mapJson = "[Map](https://www.google.com/maps/search/?api=1&query="+latitude+","+longitude+")"

                //             }
                //             if(tag.name == 'website'){
                //                 websiteJson = "[Visit Website]("+tag.value.replace('~',':')+")\n\n"
                //             }

                //         });
                //         if(mapJson) {
                //             dynamicJSONm.items[0].text = mapJson
                //             clubCard1.body[2].columns.push(dynamicJSONm)
                //             mapJson = null
                //         }
                //         if(emailJson){
                //             dynamicJSONe.items[0].text = emailJson
                //             clubCard1.body[2].columns.push(dynamicJSONe);
                //             emailJson = null
                //         }
                //        if(phoneJson) {
                //         dynamicJSONp.items[0].text = phoneJson
                //         clubCard1.body[2].columns.push(dynamicJSONp)
                //         phoneJson = null
                //        }
                //        if(websiteJson){
                //         webJsonw.text = websiteJson
                //          clubCard1.body[1].columns[0].items[1].columns[1].items.push(webJsonw)
                //        }
                //        websiteJson = null
                //        attachments.push(this.createCard(clubCard1))
                //     })
                  

                    
                //     // if(cardName == 'facilities_pe' || cardName == 'facilities_sy') {
                //         await context.sendActivity("Here are the Result(s) -")
                //         await context.sendActivity({attachments: attachments,
                //         attachmentLayout: AttachmentLayoutTypes.Carousel})
                //     // } else {
                //     //     await context.sendActivity({attachments: [
                //     //         this.createCard(cardName),
                //     //         this.createCard(cardName),
                //     //         this.createCard(cardName)   
                //     //     ]
                //     //  })
                //     //}
                //     return await step.endDialog();

                // }
                // if(!isSmallTalk && !inputCard) {
                //     return await step.prompt('choiceCard', {
                //         prompt: 'Did that help?',
                //         choices: ChoiceFactory.toChoices(['Yes', 'No'])
                //     });
                // }else if(isSmallTalk){
                //     return await step.endDialog();
                    
                // }
               
                //await dialogContext.prompt('choiceCard',{prompt: 'Did that help?'})
            // If no answers were returned from QnA Maker, reply with help.
            // } else {
            //     await context.sendActivity(`Hey i am demo bot you can try me sending email.`);
            //     return await step.endDialog();
            // }
           },async (step)=>{
               let value = step.result && step.result.value?step.result.value:''
               context = step.context
               if(value == 'Yes') {
                 await context.sendActivity('Cool! I am ready for the next one.')
               } else if(value == 'No'){
                await context.sendActivity('Can you rephrase?')
               } else if(context.activity && context.activity.value) {
                 await context.sendActivity(`Thanks for sharing the details ${context.activity.value.firstName}, our HR team will get back to you soon.`)
                 await context.sendActivity('I am ready for the next one.')
               } else  {
                await context.sendActivity('Can you rephrase?')

               }
               return await step.endDialog({});
               //await step.endActiveDialog();
               
           }]))
           await dialogContext.beginDialog('qnaDialog')
          } else  {
              console.log('esle part calling')
            await dialogContext.beginDialog('qnaDialog')
          }
      }
    } catch(err) {console.log(err)}    //await context.sendActivity("Run point working"); 
  }
}