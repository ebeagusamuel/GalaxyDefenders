<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Galaxy Defenders</h3>
  <p align="center">
  A JavaScript Capstone project built using JavaScript framework called phaser
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Live Demo](#live-demo)
  - [Built With](#built-with)
- [Design Process](#design-process)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [How to Play the Game](#how-to-play-the-game)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

> This is a 2D game built using phaser which is a javascript framework for building games. The project had a deadline of 5 days. Each day of the 5 days has a specific milestone which we were to achieve. The game is called Galaxy defenders and the idea behind the game is that aliens are trying to invade our galaxy and we have to defend the galaxy by shooting down the aliens ship. The fight scene is in space.

![Screenshot from 2020-10-09 14-28-07](https://user-images.githubusercontent.com/57847212/95588769-bd49a300-0a3b-11eb-94f3-9c18fdae1e64.png)

![Webp net-resizeimage](https://user-images.githubusercontent.com/57847212/95590426-f3882200-0a3d-11eb-8366-b2708fc89d86.png)

## Live Demo

Here is the link to the game [space-shooter](https://galaxy-defenders.netlify.app/)

### Built With
This progam was made using this technologies
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Language used.
* [Phaser](https://phaser.io/) - The Game Framework used.
* [Webpack](https://webpack.js.org/) - Tool for bundling our code.

## Design Process

* On day one, I familiarised myself with the phaser framework, went through their material on getting started with phaser, watched and practiced with some tutorials on phaser. After that, I set up the project repository and configured the project to use webpack, es6 and modules.

* I spent the second day thinking of how I want the game to be, i.e the story behind the game, how the player will be, if I would have enemies or obstacles. After that I went ahead to gather assets I will be using for the game.

* On the third day, I started building up the project, setting up some scene like the menu scene, background and setting up the configuration for phaser. After that I added my player ship and made it to be able to move.

* On day four, I added the enemy ship, and also made the enemy ship to be able to fire at the player ship and likewise the player ship to be able to fire at the enemy ship.

* On the last day of the project, I implemented the leaderscore board. For this I had to work with an API which was used for storing the scores of the people that played the game. After the end of the game , I am displaying the players with the highest scores so far.

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->
1. Clone the repo
```sh
git clone https://github.com/ebeagusamuel/GalaxyDefenders
```

<!-- USAGE EXAMPLES -->
## Usage

2. Next step is to change directory by doing this below
```
cd GalaxyDefenders
```

3. Next step is to install all the project dependencies by running this command below

```
npm install
```

4. Then, next step is to run this command:

NB: This will open a new tab on your browser where you will see the game.
```
npm start
```
## How to Play the Game

  * Left cusor key(←) for moving to the left
  * Right cusor key(→) for moving to the right
  * Up cusor key(↑) for moving to the top
  * Down cusor key(↓) for moving to the bottom
  * SpaceKey to shoot.

## To play the Game

You need to enter the name of the player in the input text field and clicked on the ```Submit``` button

After which you can now click on the ```Play``` button to start playing the game

## Different Types of Enemies 

We have 2 different types of enemies
- The enemy Gunship
- The enemy Chasership.

The Gunship is the ship with the ability to shoot while the Chasership does not shot but chases the player ship to clash into it.

Contact between either of the enemy ship and the player ship will destroy both ships, so the player ship should avoid contact with any of the enemy ship while shooting at the enemy ship. 

## Others Future Features

> This project is an open source project, there are quite a features you could add to this project as well. A few I can think of are:

- ADD LIVES
- ADD INCREASING DIFFICULTY

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Author

👤 **Ebeagu Samuel**

- Github: [@ebeagusamuel](https://github.com/ebeagusamuel)
- Twitter: [@ebeagu_samuel](https://twitter.com/ebeagu_samuel)
- LinkedIn: [Ebeagu Samuel](https://linkedin.com/in/ebeagusamuel)
- Email: [samuelebeagu@gmail.com](mailto:samuelebeagu@gmail.com)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Microverse](https://www.microverse.org/)
* [OpenGameArt](https://opengameart.org/)