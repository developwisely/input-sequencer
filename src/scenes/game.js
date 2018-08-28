import Player from '../objects/player'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')

        this.player
    }

    preload() {}

    create() {
        console.log('game started')

        let config = {
            key: 'engineer_walk_down',
            frames: this.anims.generateFrameNumbers('engineer', {
                start: 0,
                end: 3
            }),
            repeat: -1,
            frameRate: 5
        }

        this.anims.create(config)
        
        this.player = new Player(this, 100, 100, 'engineer', 0)
        this.player.create()

        this.add.existing(this.player)
        this.player.anims.play('engineer_walk_down')
    }

    update() {
        this.player.update()
    }
}
