// Default to 40 frames of inputs for testing (higher = more leniency)
const BUFFER_SIZE = 40

export default class SequenceBufferController {
    constructor(player) {
        this.player = player

        this.emitter
        this.bufferSize
        this.stack
    }

    init() {
        this.emitter = new Phaser.Events.EventEmitter()
        this.bufferSize = BUFFER_SIZE
        this.stack = []
    }

    handleFrameInput(userInput) {
        // If the buffer is full, remove the last one
        if (this.stack.length === this.bufferSize) {
            this.stack.pop()
        }

        // Add the user input to the stack
        this.stack.unshift(userInput)

        // Check for a move sequence
        this.checkSequence()
    }

    checkSequence() {
        const moveSet = this.player.moves
        
        for (const move of moveSet) {
            let stackSet = this.stack.slice().reverse()
            
            for (const sequenceKey of move.sequence) {
                // take each sequence key, and find a matched input from stackset
                // if none, continue to next move
            }
        }
        
        // if sequence {
        //     this.firePlayerAction(sequence)
        //     this.resetStack()
        // }
    }

    firePlayerAction(sequence) {
        console.log(sequence)
    }

    resetStack() {
        this.stack = []
    }
}