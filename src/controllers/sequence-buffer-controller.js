// Extend to find equality of array
Array.prototype.equals = function(array) {
    if (!array || (this.length != array.length)) {
        return false
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i])) {
                return false
            }
        }
        else if (this[i] != array[i]) {
            return false
        }
    }

    return true
}


// Default to 40 frames of inputs for testing (higher = more leniency)
const BUFFER_SIZE = 60

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
        const stackSet = this.stack.slice().reverse()
        
        for (const move of moveSet) {
            let sequence = move.sequence
            let currentStackIndex = 0
            let matchedInputs = 0

            // For each key input in the sequence
            for (const key of sequence) {
                
                // Loop through buffer
                while (currentStackIndex <= stackSet.length) {
                    let stackInputs = stackSet[currentStackIndex]
                    
                    // If there's a key match, move to next key
                    if (key.equals(stackInputs)) {
                        matchedInputs++
                        break
                    }

                    currentStackIndex++
                }
            }

            // Move sequence matched in buffer
            if (matchedInputs == sequence.length) {
                this.firePlayerAction(move)
                this.resetStack()
                break
            }
        }
    }

    firePlayerAction(action) {
        this.player.emit(action.name, this.player)
    }

    resetStack() {
        this.stack = []
    }
}