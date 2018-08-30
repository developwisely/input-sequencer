export default class ActionsController {
    constructor(player) {
        this.player = player

        this.playerMoves
    }

    init() {
        this.playerMoves = this.player.moves

        // Create an event listener for each move
        for (const move of this.playerMoves) {
            this.player.on(move.name, this.handleAction)
        }
    }

    handleAction(move, player) {

        // If the player is already performing an action
        if (player.state.isPerformingAction) {


        // If the player is not performing an action
        } else {
            if (move.data) {
                player.state.isPerformingAction = true
                player.anims.play(move.data.animation.name)
            }
        }
    }
}