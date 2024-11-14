let pir = 0
makerbit.connectLcd(39)
basic.forever(function () {
    pir = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    makerbit.showStringOnLcd1602("" + (pir), makerbit.position1602(LcdPosition1602.Pos1), 16)
    basic.pause(2000)
})
basic.forever(function () {
    if (pir == 0) {
        pins.servoWritePin(AnalogPin.P3, 90)
        music.play(music.stringPlayable("C E G C5 E G C5 E ", 200), music.PlaybackMode.UntilDone)
        makerbit.showStringOnLcd1602("Pase usted", makerbit.position1602(LcdPosition1602.Pos17), 16)
        makerbit.showStringOnLcd1602("" + (makerbit.lcdCharacterPixels(`
            . . # . #
            . . # . #
            . . # # #
            . # . # .
            . . # # #
            # . # # .
            # . . . .
            . . . . .
            `)), makerbit.position1602(LcdPosition1602.Pos28), 16)
    } else if (pir > 100) {
        makerbit.showStringOnLcd1602("ALTO", makerbit.position1602(LcdPosition1602.Pos17), 16)
        makerbit.showStringOnLcd1602("" + (makerbit.lcdCharacterPixels(`
            . . . . #
            . . . . .
            . . . # .
            . . # . .
            # . . . .
            . . # . #
            . . # . .
            . . . . .
            `)), makerbit.position1602(LcdPosition1602.Pos28), 16)
        pins.servoWritePin(AnalogPin.P3, 180)
    }
    basic.pause(2000)
})
