export default {
    name: 'Test Player',

    // NOTE: Priority is set via order
    moves: [
        {
            name: 'Hadouken',
            type: 'Special',
            sequence: [
                ['DIRECTIONAL_DOWN'],
                ['DIRECTIONAL_DOWNFORWARD'],
                ['DIRECTIONAL_FORWARD'],
                ['BUTTON_LP']
            ]
        },
        {
            name: 'Overhead',
            type: 'Command',
            sequence: [
                ['DIRECTIONAL_BACK', 'BUTTON_LP']
            ]
        },
        {
            name: 'Punch',
            type: 'Regular',
            sequence: [
                ['BUTTON_LP']
            ]
        },
        {
            name: 'Tatsumaki',
            type: 'Special',
            sequence: [
                ['DIRECTIONAL_DOWN'],
                ['DIRECTIONAL_DOWNBACK'],
                ['DIRECTIONAL_BACK'],
                ['BUTTON_LK']
            ]
        },
        {
            name: 'Hop Kick',
            type: 'Command',
            sequence: [
                ['DIRECTIONAL_FORWARD', 'BUTTON_LK']
            ]
        },
        {
            name: 'Kick',
            type: 'Regular',
            sequence: [
                ['BUTTON_LK']
            ]
        }
    ]
}