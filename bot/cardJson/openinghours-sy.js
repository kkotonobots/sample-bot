module.exports = {
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "items": [
                        {
                            "type": "Container",
                            "backgroundImage": {
                                "url": "https://messagecardplayground.azurewebsites.net/assets/TxP_Background.png"
                            },
                            "items": [
                                {
                                    "type": "Image",
                                    "horizontalAlignment": "Center",
                                    "url": "https://img.icons8.com/plasticine/2x/clock.png"
                                }
                            ],
                            "bleed": true
                        }
                    ],
                    "width": 45,
                    "height": "stretch"
                },
                {
                    "type": "Column",
                    "items": [
                        {
                            "type": "Container",
                            "height": "stretch",
                            "items": [
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "items": [
                                                {
                                                    "type": "TextBlock",
                                                    "size": "ExtraLarge",
                                                    "weight": "Lighter",
                                                    "text": "MON"
                                                }
                                            ],
                                            "width": "auto"
                                        },
                                        {
                                            "type": "Column",
                                            "verticalContentAlignment": "Center",
                                            "items": [
                                                {
                                                    "type": "Image",
                                                    "url": "https://messagecardplayground.azurewebsites.net/assets/graydot2x2.png",
                                                    "width": "10000px",
                                                    "height": "2px"
                                                }
                                            ],
                                            "width": "stretch"
                                        },
                                        {
                                            "type": "Column",
                                            "items": [
                                                {
                                                    "type": "TextBlock",
                                                    "horizontalAlignment": "Right",
                                                    "size": "ExtraLarge",
                                                    "weight": "Lighter",
                                                    "text": "FRI"
                                                }
                                            ],
                                            "width": "auto"
                                        }
                                    ]
                                },
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "items": [
                                                {
                                                    "type": "TextBlock",
                                                    "size": "Medium",
                                                    "text": "10 AM"
                                                }
                                            ],
                                            "width": 1
                                        },
                                        {
                                            "type": "Column",
                                            "items": [
                                                {
                                                    "type": "TextBlock",
                                                    "horizontalAlignment": "Right",
                                                    "size": "Medium",
                                                    "text": "5PM AEST"
                                                }
                                            ],
                                            "width": 1
                                        }
                                    ]
                                },
                                {
                                    "type": "TextBlock",
                                    "spacing": "Small",
                                    "wrap": true,
                                    "text": "We are always available to help you, send an email to support@net247.com"
                                }
                            ]
                        }
                    ],
                    "width": 55
                }
            ],
            "height": "stretch"
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2"
}