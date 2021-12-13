# XCoins Challenge

This project is structured using the three-layer principle, ie separation of concerns.
Separating concerns is a great way to enforce structure, and it also provides useful qualities when thinking about testing.
The three layer include: Controller layer, Service layer and Data access layer.

<img src="https://softwareontheroad.com/static/122dab3154cb7e417bbb210bbce7ca01/8299d/server_layers.jpg" alt="structure">

> Borrowed this image from this <a href="https://softwareontheroad.com">site</a>.

- The Controller layer is only in charge of the accepting requests from the client and giving appropriate response back.

- The Service layer is where the business logic of the project lives, 
It controls the application’s core functionality by performing detailed processing, no database query exists here. While,

- The Data access layer is charge of reading/writing to the database. This layer is kept independent of the business logic. This ensures project flexibility.

### Benefits of three-layer principle 
* It provides great freedom to the development team, parts of an application can be updated or replaced 
without affecting the product as a whole.
* Decoupling application in this manner, makes testing easier.
* It provides high degree of flexibility, for example the ODM/ORM used in accessing the database in the `Data Access Layer` can easily be changed without
it affecting the business logic of the application.
* Different teams can work on differenct sections of the application
* It ensures scalability
* Critical components of the application can be encapsulated and retained while the whole system keeps evolving organically.


## Table of Contents

- [Installation](#installation)
- [Structure](#structure)
- [Features](#features)
- [Usage](#usage)
- [Pattern](#patterns)
- [Test](#test)
- [Meta](#meta)


## Installation

- All the `code` required to get started

### Clone

- Clone this repo to your local machine using `https://github.com/Horlarmeday/xcoins_challenge`

### Setup

> run npm install to download the project dependencies

```shell
$ yarn install
```

#### Development setup

In order to be able use the ES6 features like `async/await`, `classes`, `template strings` etc and linting. You need to work in a development mode.
> npm run dev
```sh
yarn dev
```

#### Production setup

For working in production mode, run below command.
> Run `yarn build` to bundle the project and then start server
```sh
yarn start
```

---

## Structure

This project is structured in modules. A modular application is an application composed of loosely coupled, functional units, 
and these modules can be linked together to form the application. This project type structure is better because:

1.  It helps keeps the code clean and organized
2.  It  makes coding, testing, deployment, and maintenance easier
3.  Complete modules can be reused for other applications, saving development teams valuable time and money. 
4.  Easy debugging
5.  It makes working in a team easier since parts of the code can be worked on independently

We have the Simulator module, the Profile module and the Favorites module. 

### Simulator Module
The principle of three-layer architecture is used here. Files in this module include
`simulator controller` which accepts requests from the client and passes it to the service after validating the requests, 
the `simulator service` then work on the business logic of the requests, this is where things like calculations, logic and background checks happens, 
the `simulator repository`(Data access layer), this layer has just one job and that is to access information from the Database and sends back the data to the `simulator service`.
the `simulator routes` and the `simulator interface`. 

### Profile Module
The Profile module contains everything about a user profile information. The files in this module is also similar to the `Simulator Module`.
It has its `controller`, `service`, `repository`, `interface` and its `routes`.

### Favorites Module
The Favorites module contains everything about a user favorite crypto. The files in this module is also structured as the modules above.

## Patterns
-   Keeping Express `app` and `server` into seperate files. This is done because seperating
API declaration and the network related configuration allows testing the API in-process without having to perform network calls, and faster testing execution
-   Seperating app `loaders` and `routes` from the server startup file. I did this because having all the app loaders and routes in the server file
would clutter the file and make it unreadable especially if the app has so many `dependencies` and `routes`
- Creating functions for `error` and `success` responses, this helps keep the code DRY
- Extending the Error class to use in the modules `services`

## Features
The features of this project include the following.

- User can create a simulator
- Can get a simulator belonging to a user
- Can get all simulators
- Can create a user profile
- Can get a user profile
- Can get all favourites
- Can get a user favorite

## Tests
To run the tests

> run npm run test

```shell
$ yarn test
```

## Meta

Mahmud Ajao – [@MahmudAjao1](https://twitter.com/@MahmudAjao1) – ajaomahmud@gmail.com

[https://github.com/Horlarmeday/xcoins_challenge](https://github.com/dbader/)
