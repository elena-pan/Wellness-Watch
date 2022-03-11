
<h1 align="center">
  Wellness Watch
</h1>

<h4 align="center">Use Maslow's Hierarchy to track your wellbeing</h4>

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E=14.0-blue.svg?style=flat-square" alt="node:>=14.0">
  <img src="https://img.shields.io/pypi/pyversions/Django" alt="python:>=3.8">
  <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square" alt="License: MIT">
</p>


<p align="center">
  <a href="#overview">Overview</a> • <a href="#demo">Demo</a> • <a href="#features">Features</a> • <a href="#installation">Installation</a> • <a href="#authors">Authors</a> • <a href="#license">License</a>
</p>

## Overview
Since the pandemic, a lot of people have seen their mental health suffer, but the reasons are all different. Some are stressed because of employment issues, some haven't been able to see their friends for over a year, and others can't participate in activities that gave their lives meaning. We wanted to build something that tracks your wellbeing, but also takes into account the different needs and circumstances around you.

### What it does
Wellness Watch uses Maslow's hierarchy of needs to keep track of what you're feeling and how you can improve your wellbeing. Since this considers your circumstances in tracking your health, you can see what you need to work on in order to keep your life running smoothly.

Users enter their feelings and sleep time daily, and we use that data to visualize how your wellbeing has changed over time. All data is stored safely and securely, so you can rest easy.

The app is built in React, which authenticates users using JWT bearer tokens. Data is fetched from a MongoDB database via an Express.js REST API on a Node.js server. 

This project was built for [Hack the North 2021](https://devpost.com/software/wellness-watch).


## Demo

![Demo Video](https://user-images.githubusercontent.com/64248134/157815391-482d42a2-4337-4b30-a63c-267d20951b49.gif)


## Features

#### Reports
* Dynamically generated reports help you understand where you're doing well and poorly 
* Custom recommendations allow you to learn more about how to improve your wellbeing

#### Detailed Data Visualization
* Interactive Graphs to help you visualize your progress over time
* Select over any custom time range to view details

#### Intelligent Predictions
* Machine Learning predictions help you predict how your sleep time and quantity will fluctuate

#### Authentication
* Private routes
* Register and login with passport and JWT - passwords are encrypted



## Installation

This project requires at least version 14.x of [Node.js](https://nodejs.org/en/) (which comes with [npm](http://npmjs.com/)), as well as a minimum of Python 3.8. 

### Server

To run the servers for Wellness Watch, begin by downloading the repository.

```cmd
# Clone this repository
$ git clone https://github.com/elena-pan/htn-22.git

# Install JS dependencies
$ npm install

# Run the server
$ npm start

# Install Python dependencies
$ pip install -r requirements.txt

# Run the Flask service
$ python3 app.py
```

The JS Server will be hosted at
[http://localhost:5000](http://localhost:5000).


The Flask service will be hosted at 
[http://localhost:5002](http://localhost:5002)

### App

To start the app, navigate from the root directory of the repository:

```cmd
# Navigate into the app folder of the repository
$ cd app

# Install dependencies
$ npm install

# Run the app
$ npm start
```

The App will be hosted at
[http://localhost:3000](http://localhost:3000)

#### Technology Stack
* REST API server: Express.js (Node.js framework), Flask 
* JWT Authentication: passport.js
* Database: Mongoose, MongoDB
* Front-end: React, MaterializeCSS

## Authors

* [Elena Pan](https://github.com/elena-pan) and [Dhananjay Patki](https://github.com/dpatki)


## License

This project is licensed under the terms of the MIT license.
