const FACING_DIRECTION = {
    LEFT: 'left',
    RIGHT: 'right'
}

import PlayerInputController from '../controllers/player-input-controller'
import ActionsController from '../controllers/actions-controller'
import playerData from '../data/test-player'

export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        this.scene = scene
        this.moves = playerData.moves
        
        this.state
        this.keys
        this.playerInputController
        this.actionsController
    }

    create() {
        this.state = {
            isFacing: FACING_DIRECTION.RIGHT,  // Player 2 should face left by default
        }

        // TODO: this needs to be set PER PLAYER (as different keys)
        // Down, Right, Up, Left, Punch, Kick
        this.keys = this.scene.input.keyboard.addKeys('S,D,W,A,P,K')

        // Player Inputs
        this.playerInputController = new PlayerInputController(this, this.keys)
        this.playerInputController.init()

        // Player Action Controller
        this.actionsController = new ActionsController(this)
        this.actionsController.init()

        console.log('Created player')
    }

    update() {
        this.playerInputController.update()
    }
}
