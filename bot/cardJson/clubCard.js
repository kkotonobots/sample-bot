module.exports = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.2",
    "body": [
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Esperance Pistol Club",
                    "weight": "Bolder",
                    "wrap": true,
                    "height": "stretch",
                    "fontType": "Monospace",
                    "separator": false,
                    "color": "Good",
                    "size": "ExtraLarge"
                }
            ]
        },
        {
            "speak": "Tom's Pie is a Pizza restaurant which is rated 9.3 by customers.",
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": 2,
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "281 Brookland Road, AllenviewQLD 4285",
                            "wrap": true,
                            "color": "Attention",
                            "isSubtle": true,
                            "weight": "Bolder"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://pbs.twimg.com/profile_images/746168106880380928/JzGp1bbm_normal.jpg",
                                            "width": "",
                                            "height": "",
                                            "separator": false,
                                            "isVisible": true
                                        }
                                    ],
                                    "horizontalAlignment": "Center"
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [],
                                    "backgroundImage": {
                                        "verticalAlignment": "Center"
                                    },
                                    "isVisible": true,
                                    "separator": false,
                                    "height": "stretch",
                                    "horizontalAlignment": "Center",
                                    "verticalContentAlignment": "Center"
                                }
                            ],
                            "spacing": "Large"
                        }
                    ]
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [

            ]
        }
    ]
}