export default class Preload extends Phaser.Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.spritesheet('ryu', '/images/ryu-test.png', { frameWidth: 24, frameHeight: 24 });
    }

    create() {
        console.log('preload started')
        this.scene.start('game')
    }
}

