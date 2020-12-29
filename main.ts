input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    kitronik_servo_lite.left()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    kitronik_servo_lite.forward()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    kitronik_servo_lite.right()
})
radio.setGroup(1)
kitronik_servo_lite.setDistancePerSecond(1000)
