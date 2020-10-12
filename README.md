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

> The goal was to create a platform game in which the main character i.e the player cann move around and shoot at the other characters in the game i.e the enemies.

#### Story and game play
The idea that came to my head was to create a space shooter game and it wasn't that difficult coming up with the game play since I have watched a couple of movies that involved space battles. So the story line behind the game is that aliens are tring to invade our galaxy and in order to prevent that from happening, that player has to shoot down all the enemy space ship. 

#### Assets choice
I picked most of the assets from opengameart.org, and these includes the player spaceship, the enemy gunship, the enemy chasership, the player laser, the enemy laser, the background and the background music.

#### Technical Knowhow
It took me some time to understand Phaser to the point where I could build something with it. The documentation helped a lot as well as the numerious youtube videos and articles about phaser.

#### Development stage
> Since the goal is set, the design has been made and the assets ready to use, I started the development phase.

> I started by creating the different scenes in my game. This gives me some level of confidence because within the first few hours, I already have a deliverable.

> After that, I picked the scenes one after the other and I preloaded the required assets. I also link the scenes all together according to the game design, so I can move freely from one scene to another.

> Next, I focused on the game scene, as this is the most complicated scene of all. I added logics to render playership, background, enemyship. I also added logics to animate playership, enemyship and to make their movement. Having done these, I added logic to move the player around and to make the player shoot.

> I later added logics to monitor collision between the playership, enemyship, playership laser and enemyship laser. Lastly in the game scene, I added the score mechanism to keep track of each game session's scores.

> A player do not have to enter his/her name before playing the game. If a player did not enter his/her name, the only implication is that their score will not be stored in the game board.

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