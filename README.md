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

User Input -> Input Buffer -> Valid Sequence? -> Action Handler -> Can Do Action?

## Attributions

This proof of concept uses an altered version of John Cheeseman's [phaser3-webpack](https://github.com/john-cheesman/phaser3-webpack).