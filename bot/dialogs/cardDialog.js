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
export class inputCardDialog {
    constructor(userDataAccessor,conversationDataAccessor,dialogStateAccessor, dialogs) {
        this.userDataAccessor = userDataAccessor
        this.conversationDataAccessor = conversationDataAccessor
        this.dialogStateAccessor = dialogStateAccessor
        this.dialogs = dialogs
    }
    getDialog() {
        return new WaterfallDialog ('ouputCardDialog',[ async (step) => {
            context = step.context
        },async (step) => {
            context = step.context
        }])
    }
}
export class ouputCardDialog {
    constructor(userDataAccessor,conversationDataAccessor,dialogStateAccessor, dialogs) {
        this.userDataAccessor = userDataAccessor
        this.conversationDataAccessor = conversationDataAccessor
        this.dialogStateAccessor = dialogStateAccessor
        this.dialogs = dialogs
    }
    getDialog() {
        return new WaterfallDialog ('ouputCardDialog',[ async (step) => {
            context = step.context
        },async (step) => {
            context = step.context
        }])
    }
}