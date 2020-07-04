input.onButtonPressed(Button.A, function () {
    x += 1
    if (x >= scrollbit.cols()) {
        x = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    place += 1
})
input.onButtonPressed(Button.B, function () {
    y += 1
    if (y >= scrollbit.rows()) {
        y = 0
    }
})
let y = 0
let x = 0
x = 0
y = 0
let place = 0
scrollbit.clear()
basic.forever(function () {
    if (place == 0) {
        scrollbit.clear()
        scrollbit.setImage(
        images.createBigImage(`
            # . . . . . . . . .
            # # . . . . . . . .
            # # . . . . . . . .
            . . . . . . . . . .
            . . . . . . . . . .
            `),
        x,
        y,
        128
        )
        scrollbit.show()
    }
    basic.pause(100)
})
