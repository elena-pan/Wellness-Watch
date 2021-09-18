
# HTN 22

Description

[Features](#features) \
[Project Structure](#project-structure) \
[Pre-installation Requirements](#pre-installation-requirements) \
[Installation](#installation)

![Demo video](url-here)

## Features

#### Routes

* POST  /api/auth/register
  * Adds a new user to the database, if the data is valid, after hashing the user's password

* POST  /api/auth/login
  * Logs in a user, if valid, and returns a JWT token for authentication

#### NoSQL Database
* The development server uses a MongoDB cloud database.

#### Front-end
* A React frontend connects to the backend routes, and blah blah blah.

#### Technology Stack
* REST API server: Express.js (Node.js framework)
* JWT Authentication: passport.js
* Database: Mongoose, MongoDB
* Front-end: React, MaterializeCSS

## Project Structure

```
├── models                    -- Database models
├── routes                    -- API routes
    ├── api
├── client                    -- Client folder
    ├── public                -- Static files
    ├── src                   -- Client entry point
    │   ├── components        -- JSX components
    │   |   ├── layout        -- Layout components
    │   |   └── pages         -- Pages

```

## Pre-Installation Requirements

This project requires at least version 14.x of [Node.js](https://nodejs.org/en/) (which comes with [npm](http://npmjs.com/)).

## Installation

To complete the setup and run both the server and client applications, navigate into the root directory of the project and run

```cmd
$ npm run setup
$ npm start
```

The application will be hosted at
[http://localhost:5000](http://localhost:5000)

