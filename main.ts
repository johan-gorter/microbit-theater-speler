radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        servos.P0.setAngle(20)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        servos.P0.setAngle(20)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `)
        servos.P0.setAngle(160)
    }
})
radio.setGroup(105)
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
servos.P0.setAngle(20)
