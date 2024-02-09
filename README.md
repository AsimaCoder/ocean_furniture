# 🛋 Ocean Furniture 🛋

Welcome to the Ocean Furniture project! 🌊 This project is a web application for a furniture store where users can browse products 📦, register 📝, log in 🔑, and purchase furniture 💳. Built with Node.js, it utilizes MongoDB for data storage.

## 📚 Table of Contents

- [🏗 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [📋 Prerequisites](#-prerequisites)
  - [🔧 Installation](#-installation)
  - [▶️ Running the Application](#️-running-the-application)
- [🛠 Technologies Used](#-technologies-used)
- [📁 Folder Structure](#-folder-structure)

## 🏗 Project Structure

The project is organized as follows:

- `DB/` contains the MongoDB database JSON file 📄.
- `models/` includes Mongoose schemas for Order 📑, Product 🛍, and User 👤.
- `public/` holds static files such as HTML pages (about, products, contact, account), and resources in `img/` 🖼 and `sounds/` 🎵 folders.
- `app.js` is the main application file that starts the server 🌐.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

What things you need to install the software and how to install them:

- Node.js 🟢
- npm (Node Package Manager) 📦
- MongoDB 🍃

### 🔧 Installation

A step by step series of examples that tell you how to get a development env running:

1. Clone the repository:
`git clone https://github.com/AsimaCoder/ocean_furniture/.git`
2. Install NPM packages:
`cd OceanFurniture
npm install`
3. Import the MongoDB database:
`mongoimport --db ocean_furniture --collection products --file ./DB/products_data.json`

### ▶️ Running the Application

To start the server, run:
`node app.js`
The application will be available at `http://localhost:3000` 🚀.

## 🛠 Technologies Used

- [Node.js](https://nodejs.org/) 🟢
- [Express.js](https://expressjs.com/) 🛣
- [MongoDB](https://www.mongodb.com/) 🍃
- [Mongoose](https://mongoosejs.com/) 🐁

## 📁 Folder Structure

- **DB/**: Contains JSON files for MongoDB database seed 🌱.
- **models/**: Mongoose schemas for User 👤, Product 🛍, and Order 📑.
- **public/**: Static files like HTML, images 🖼, and sounds 🎵.
- **app.js**: Entry point of the application that starts the server 🌐.
