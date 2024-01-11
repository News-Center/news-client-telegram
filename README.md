# General Purpose

The purpose of various news clients is to provide users with news updates from other sources than our website. Users have the flexibility to register for multiple services, one of which is the `news-client-telegram`. This allows users to receive news updates directly within the Discord platform, enhancing their ability to stay informed through diverse channels beyond conventional web interfaces.

# How it works

The news clients receive the relevant news updates from the `news-manager`. Specifically, the news client for Telegram utilizes the Telegram Bot API to deliver these updates to the users. This process involves the following steps:

### News-Manager Interaction
News clients, such as `news-client-telegram`, communicate with the News Manager to retrieve the latest news updates. The clients initiate this interaction by making RESTful API calls to specific routes provided by the News Manager. These REST routes serve as endpoints through which the clients receive the desired news content.

### Telegram Bot API Integration
In the case of news-client-telegram, the Telegram API is utilized to effortlessly transmit the fetched news messages directly to users on the Telegram platform. To streamline this integration, news-client-telegram harnesses the capabilities of a robust JavaScript library known as "[node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)" to interact seamlessly with the [Telegram Bot API](https://core.telegram.org/#bot-api). This integration guarantees a fluid communication channel between the news delivery system and Telegram, enabling the prompt and efficient distribution of news updates to the intended audience within Telegram channels or individual chats.

# Setup

## Prerequisite

- Node.js Version 16
- npm Version 8

### Telegram Token
Before the client can be operational, you need to generate an API token. The instructions for this process can be found here: https://core.telegram.org/bots/tutorial#getting-ready. 
Subsequently, the token must be added to the .env file, and you can refer to .example.env for guidance on how to do this.

## Dev-Setup

1. Clone the repo

```bash
  git@github.com:News-Center/news-client-telegram.git
```

2. Install dependencies

```bash
  npm install
```

3. Setup the .env file (For a Quickstart copy the example from the `.env.example` file)
4. Start the application

```bash
  ubuntu run
  make up
```

## Production-Setup

Use `news-kraken` to deploy the entire application to a server. For more information see refer to the news-kraken
repository.

