module.exports = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.2",
    "body": [
        {
            "type": "TextBlock",
            "text": "Cool Pics from our Peterborough Office",
            "size": "Large"
        },
        {
            "type": "TextBlock",
            "text": "This is a Cool place with Cool people.",
            "size": "Medium",
            "weight": "Lighter"
        },
        {
            "type": "ImageSet",
            "imageSize": "medium",
            "images": [
                {
                    "type": "Image",
                    "url": "https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    "type": "Image",
                    "url": "https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    "type": "Image",
                    "url": "$https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    "type": "Image",
                    "url": "$https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    "type": "Image",
                    "url": "https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    "type": "Image",
                    "url": "$https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    "type": "Image",
                    "url": "https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                }
            ]
        }
    ], "actions": [
        {
            "type": "Action.ShowCard",
            "title": "Video Tour",
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "Media",
                        "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcrTLHiGvQVpOHIUfTPE-nPO9uYrXVE2MXaA&usqp=CAU",
                        "sources": [
                            {
                                "mimeType": "video/mp4",
                                "url": "https://adaptivecardsblob.blob.core.windows.net/assets/AdaptiveCardsOverviewVideo.mp4"                      
                            }
                        ]
                    }
                
                ]}}]
}