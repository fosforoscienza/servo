input.onButtonPressed(Button.A, function () {
    control.waitMicros(40)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P0, 90)
        if (input.buttonIsPressed(Button.B)) {
            pins.servoWritePin(AnalogPin.P0, 90)
        }
    }
})
