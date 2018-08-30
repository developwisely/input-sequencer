import Player from '../objects/player'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')

        this.player
    }

    preload() {}

    create() {
        console.log('game started')

        let animations = [
            {
                key: 'idle',
                frames: this.anims.generateFrameNumbers('ryu', { frames: [0, 1, 2] }),
                repeat: -1,
                frameRate: 5
            },
            {
                key: 'punch',
                frames: this.anims.generateFrameNumbers('ryu', { frames: [3, 3, 3, 4, 4, 4, 4, 3, 3, 3] }),
                repeat: 0,
                frameRate: 60
            },
            {
                key: 'hadouken',
                frames: this.anims.generateFrameNumbers('ryu', { frames: [5, 6, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8] }),
                repeat: 0,
                frameRate: 30
            }
        ]

        for (let anim of animations) {
            this.anims.create(anim) 
        }
        
        this.player = new Player(this, 200, 300, 'ryu', 0)
        this.player.scaleX = 4
        this.player.scaleY = 4
        this.player.create()

        this.add.existing(this.player)
        this.player.anims.play('idle')
    }

    update() {
        this.player.update()
    }
}
