# Netbank App Model

## Overview

This TypeScript model defines the comprehensive state management structure for a simplified netbank application. The model captures user authentication, account details, chat functionality, and page navigation within a single-state architecture. Designed to enforce strict type safety, it ensures that the application can handle various states like loading, error handling, and user interactions with a robust and flexible approach.

## Features

- **User Authentication**: Manages user login states, including asynchronous data fetching for user details and error handling.
- **Accounts Management**: Supports different types of accounts (regular and pocket) with detailed attributes such as account name, IBAN, and balances in multiple currencies.
- **Chat Functionality**: Implements a dynamic chat system that allows users to interact with support agents, including connection status, chat history, and queue management.
- **Page Navigation**: Enforces single active page navigation within the application, ensuring a focused user experience across the `accounts` and `support` pages.

## Models

- `AppState`: The root state of the application, linking user status, current page, and chat states.
- `UserState`, `AccountsState`, `ChatState`: Specific states managing user details, account information, and chat interactions, respectively.
- Helper interfaces such as `Account`, `PocketAccount`, and `Message` detail the structure of accounts and chat messages.

## Usage

This model is designed for TypeScript applications and requires no specific installation steps. Integrate it into your application to manage state across components, ensuring type safety and a consistent user experience.
