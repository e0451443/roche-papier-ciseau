let symbole = 0
input.onButtonPressed(Button.AB, function () {
    symbole = randint(1, 3)
    if (symbole == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (symbole == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # # # .
            . # # . .
            . . . . .
            `)
    }
})
