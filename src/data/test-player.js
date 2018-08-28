export default {
    name: 'Test Player',

    // NOTE: Priority is set via order
    moves: [
        {
            name: 'Fireball - SPECIAL',
            sequence: [
                ['DIRECTIONAL_DOWN'],
                ['DIRECTIONAL_DOWNFORWARD'],
                ['DIRECTIONAL_FORWARD'],
                ['LP']
            ]
        },
        {
            name: 'Overhead Punch - COMMAND',
            sequence: [
                ['DIRECTIONAL_BACK', 'BUTTON_LP']
            ]
        },
        {
            name: 'Punch',
            sequence: [
                ['BUTTON_LP']
            ]
        },
        {
            name: 'Spin Kick - SPECIAL',
            sequence: [
                ['DIRECTIONAL_DOWN'],
                ['DIRECTIONAL_DOWNBACK'],
                ['DIRECTIONAL_BACK'],
                ['LK']
            ]
        },
        {
            name: 'Hop Kick - COMMAND',
            sequence: [
                ['DIRECTIONAL_FORWARD', 'BUTTON_LK']
            ]
        },
        {
            name: 'Kick',
            sequence: [
                ['BUTTON_LK']
            ]
        }
    ]
}