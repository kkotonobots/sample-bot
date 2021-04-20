module.exports = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.3",
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
                            "type": "TextBlock",
                            "text": "[Visit Website](www.otonobots.com)\n\n",
                            "wrap": true,
                            "size": "Medium",
                            "fontType": "Default",
                            "isSubtle": true,
                            "isVisible": true
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
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
                {
                    "type": "Column",
                    "width": "stretch"
                },
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "[Map](Mapurl)",
                                    "wrap": true,
                                    "size": "Large",
                                    "weight": "Bolder",
                                    "isVisible": true
                                }
                            ]
                        },
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "[Email](mailto:saurv@gmail.com)\n",
                                    "wrap": true,
                                    "size": "Large",
                                    "weight": "Bolder"
                                }
                            ]
                        },
                        {
                            "type": "TextBlock",
                            "text": "[Call](tel:442081335044)",
                            "wrap": true,
                            "size": "Large",
                            "weight": "Bolder"
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "stretch"
                }
            ]
        }
    ]
}