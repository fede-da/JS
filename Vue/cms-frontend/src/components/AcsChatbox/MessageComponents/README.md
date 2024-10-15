# Notes about Message components

There is a base message type:
- **Message**
It defines the minimal message structure and style.

Then, other message types are defined:
- **UserMessage**: Message sent from user
- **SystemMessage**: Message sent by our chatbot (from Azure)
- **ErrorMessage**: An error message


## Message

It is the base Message type; it defines a base *template*, *script* and *style* used by the other Message components.

Basically, it shows a text (slot) and defines a *messageType* property.

This component is never used alone, usually other components instantiate it changing its base behaviour.

## UserMessage

It instantiates a **Message** changing its base behaviour, all **UserMessage** components are positioned on the right side of the chat. 

## SystemMessage

It instantiates a **Message** changing its base behaviour, all **SystemMessage** components show:
- An icon (on the left, usually 3FS icon)
- The message content (it is either the correct response, loading indicator or error message)

# Error Handling

Errors are shown withing SystemMessage components.