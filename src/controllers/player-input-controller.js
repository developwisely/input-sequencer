import constants from '../const'
import SequenceBufferController from './sequence-buffer-controller'

export default class PlayerInputController {
    constructor(player, inputKeys) {
        this.player = player
        this.inputKeys = inputKeys

        this.sequenceBufferController
        this.keyMap
    }

    init() {
        // map the keys to game friendly movements
        const keys = Object.entries(this.inputKeys)
        this.keyMap = {}

        this.keyMap.DOWN = keys.find(arr => { return arr[0] === 'S' })[1]
        this.keyMap.RIGHT = keys.find(arr => { return arr[0] === 'D' })[1]
        this.keyMap.UP = keys.find(arr => { return arr[0] === 'W' })[1]
        this.keyMap.LEFT = keys.find(arr => { return arr[0] === 'A' })[1]
        this.keyMap.LP = keys.find(arr => { return arr[0] === 'P' })[1]
        this.keyMap.LK = keys.find(arr => { return arr[0] === 'K' })[1]


        this.sequenceBufferController = new SequenceBufferController(this.player)
        this.sequenceBufferController.init()
    }

    update() {
        // Inputs triggered this frame
        let triggered = []

        // Note: only one LEGAL directional input per frame allowed
        // ILLEGAL INPUTS SKIP
        if ((this.keyMap.UP.isDown && this.keyMap.DOWN.isDown) || (this.keyMap.LEFT.isDown && this.keyMap.RIGHT.isDown)) {
            // up + down
            // left + right

        // PRIORITY: up + right / up + left / up, down + right / down + left / down, left, right
        } else if (this.keyMap.UP.isDown && this.keyMap.RIGHT.isDown) {
            if (this.player.state.isFacing === constants.FACING_DIRECTION.RIGHT) {
                triggered.push('DIRECTIONAL_UPFORWARD')
            } else {
                triggered.push('DIRECTIONAL_UPBACK')
            }
        } else if (this.keyMap.UP.isDown && this.keyMap.LEFT.isDown) {
            if (this.player.state.isFacing === constants.FACING_DIRECTION.RIGHT) {
                triggered.push('DIRECTIONAL_UPBACK')
            } else {
                triggered.push('DIRECTIONAL_UPFORWARD')
            }
        } else if (this.keyMap.UP.isDown) {
            triggered.push('DIRECTIONAL_UP')
        } else if (this.keyMap.DOWN.isDown && this.keyMap.RIGHT.isDown) {
            if (this.player.state.isFacing === constants.FACING_DIRECTION.RIGHT) {
                triggered.push('DIRECTIONAL_DOWNFORWARD')
            } else {
                triggered.push('DIRECTIONAL_DOWNBACK')
            }
        } else if (this.keyMap.DOWN.isDown && this.keyMap.LEFT.isDown) {
            if (this.player.state.isFacing === constants.FACING_DIRECTION.RIGHT) {
                triggered.push('DIRECTIONAL_DOWNBACK')
            } else {
                triggered.push('DIRECTIONAL_DOWNFORWARD')
            }
        } else if (this.keyMap.DOWN.isDown) {
            triggered.push('DIRECTIONAL_DOWN')
        } else if (this.keyMap.LEFT.isDown) {
            if (this.player.state.isFacing === constants.FACING_DIRECTION.RIGHT) {
                triggered.push('DIRECTIONAL_BACK')
            } else {
                triggered.push('DIRECTIONAL_FORWARD')
            }
        } else if (this.keyMap.RIGHT.isDown) {
            if (this.player.state.isFacing === constants.FACING_DIRECTION.RIGHT) {
                triggered.push('DIRECTIONAL_FORWARD')
            } else {
                triggered.push('DIRECTIONAL_BACK')
            }
        }


        // PRIORITY: lp + lk, lp, lk
        if (this.keyMap.LP.isDown && this.keyMap.LK.isDown) {
            triggered.push('BUTTON_LPLK')
        } else if (this.keyMap.LP.isDown) {
            triggered.push('BUTTON_LP')
        } else if (this.keyMap.LK.isDown) {
            triggered.push('BUTTON_LK')
        }


        this.sequenceBufferController.handleFrameInput(triggered)
    }
}