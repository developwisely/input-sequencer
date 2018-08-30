# Input Sequence Proof of Concept

**NOTE: This is a work in progress.**

## Get Started
This proof of concept is built with [Phaser 3](https://phaser.io/phaser3) and requires [Node.js](https://nodejs.org)

```
npm install
npm run dev
```

## Overview
This is a proof of concept for an input buffer system seen in games with input sequencing, primarily fighting games. 

The simplest example is throwing a fireball in Street Fighter. To activate a fireball move, this requires a specific **sequence of inputs** to be entered in order to trigger the **move** within a certain number of frames.  Not only this, but the state of the player has to allow the move to trigger.

## Visual Flow Chart


## Breakdown

### 1. Player Input Controller

`src/controllers/player-input-controller.js`

A simple brute force way of handling inputs.  It checks if the input sent by the user is a valid input for the game every frame. If there is a valid input, it will pass it to the **Sequence Buffer Controller**.

**Inputs allowed**
- W = up
- A = left
- S = down
- D = right
- P = punch
- K = kick

### 2. Sequence Buffer Controller

`src/controllers/sequence-buffer-controller.js`

This controller accepts the valid user input every frame. It builds a buffer "stack", which is a list of user inputs over the last X frames. The larger the stack window, the longer the user has to input a sequence command. Once the stack is filled up, the inputs will be removed first in - last out (the oldest input will be removed from the end of the buffer stack).

Note: If the player send no inputs, the buffer stack will still record that no input was received, and will fill that frame with an empty input.

After the buffer stack is updated, it will check for a sequence match from the player's character move list (`src/data/test-player.js`). It loops through every move's sequence and checks the stack for a complete pattern match. If there is a match to any sequence, it will emit an event on the player, which will be caught by the **Actions Controller**.

Example: to throw a fireball like Ryu, you have to input *QCF+P* - or simply - *Down, Down-Forward, Forward, Punch*

Also note that the player move list is prioritized. This way, more complicated moves or moves that overlap, will take priority over simpler moves.

Example: A fireball requires the same input as a Punch. The only difference is you have to do *Down, Down-Forward, Forward* before pressing *Punch*. With prioritization, if you input a fireball, you will get a fireball instead of a standard punch.

### 3. Action Controller

`src/controllers/sequence-buffer-controller.js`

This controller listens for move events. Once it receives one, it will simply check the player's current state, and verify whether the player is able to execute the move that was emitted, and fire it.

There has to be a check against the state of the player, otherwise you would be able to cancel any move into any other move.  This is just a simple version, but it can get more complex once you start to add cancelable moves, airborne moves, etc.


## Attributions

This proof of concept uses an altered version of John Cheeseman's [phaser3-webpack](https://github.com/john-cheesman/phaser3-webpack).
