import Boot from './scenes/boot'
import Preload from './scenes/preload'
import Game from './scenes/game'

export default {
    width: 1024,
    height: 576,
    backgroundColor: 'rgb(0, 0, 0)',
    scene: [ Boot, Preload, Game ]
}