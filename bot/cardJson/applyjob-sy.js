module.exports = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": 2,
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Tell us about yourself",
                            "weight": "Bolder",
                            "size": "Medium"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Need details to submit application to Sydny office",
                            "isSubtle": true,
                            "wrap": true
                        },
                        {
                            "type": "TextBlock",
                            "text": "Don't worry, we'll never share or sell your information.",
                            "isSubtle": true,
                            "wrap": true,
                            "size": "Small"
                        },
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "First name",
                                    "wrap": true
                                },
                                {
                                    "type": "Input.Text",
                                    "id": "firstName",
                                    "placeholder": "First name"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Last name",
                                    "wrap": true
                                },
                                {
                                    "type": "Input.Text",
                                    "id": "lastName",
                                    "placeholder": "Last name"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Email",
                                    "wrap": true
                                },
                                {
                                    "type": "Input.Text",
                                    "id": "email",
                                    "placeholder": "Email"
                                },{
                                    "type": "TextBlock",
                                    "text": "Cover latter"
                                  },
                                  {
                                    "type": "Input.Text",
                                    "id": "coverLatter ",
                                    "placeholder": "Cover latter ",
                                    "isMultiline": true
                                  }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Submit"
        }
    ]
}