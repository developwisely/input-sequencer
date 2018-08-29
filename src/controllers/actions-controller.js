export default class SequenceBufferController {
    constructor(player) {
        this.player = player

        this.playerState
        this.playerMoves
    }

    init() {
        this.playerMoves = this.player.moves

        for (const move of this.playerMoves) {
            this.player.on(move.name, function() {
                console.log(move.name)
            })
        }
    }


}