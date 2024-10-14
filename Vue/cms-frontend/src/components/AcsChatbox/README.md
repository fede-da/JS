# Description

To use this component you have to register **Chat** component and use it.

The **Chat** component is basically a wrapper, handler for other components that manage all **AUS** features.

It exposes many styles that can be injected externally, here a list with all the styles and their default value is presented:
```JS
headerBackgroundColor: {
      type: String,
      default: '#16AD8D'
    },
    headerTextColor: {
      type: String,
      default: '#ffffff'
    },
    chatContainerBackgroundColor: {
      type: String,
      default: 'white'
    },
    systemMessageBackgroundColor: {
      type: String,
      default: 'transparent'
    },
    systemMessageTextColor: {
      type: String,
      default: 'black'
    },
    userMessageBackgroundColor: {
      type: String,
      default: '#1C9FD1'
    },
    userMessageTextColor: {
      type: String,
      default: 'white'
    },
    sendMessageButtonBackgroundColor: {
      type: String,
      default: '#16AD8D'
    },
    sendMessageButtonTextColor: {
      type: String,
      default: 'white'
    },
    eFSIconPath: {
      type: String,
      default: require('./assets/logo_3fs.png')
    },
    supportIconPath:{
      type: String,
      default: require('./assets/chatbot-icon.png')
    },
    toggleButtonGradientStartColor: {
      type: String,
      default: '#1C9FD1' // Colore di partenza del gradiente (in alto)
    },
    toggleButtonGradientEndColor: {
      type: String,
      default: '#16AD8D' // Colore finale del gradiente (in basso)
    },
  toggleButtonBoxShadowColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.1)'
  },
  chatContainerBorderColor: {
    type: String,
    default: '#ccc'
  },
  closeButtonHoverColor: {
    type: String,
    default: '#ff0000'
  }
```
usage example:
```JS
 <chat
      :headerBackgroundColor="headerBackgroundColor"
      ...
      />

      ...

      data() {
    return {
      /* Define all your colours and themes here */
      headerBackgroundColor: '#16AD8D',
      ...
    }
```

## Features

It shows a box on the lower-right corner of the screen.

Colours, themes and other styles are defined as *prop*; this allows the injection of these elements externally.

## Common errors

Sometimes, when pulling changes, "*ChatWindow*" file is saved as  "*Chatwindow*" generating an error. Rename it as "*ChatWindow*" to solve the issue