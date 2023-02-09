function scan_light () {
    for (let index = 0; index < x; index++) {
        if (input.lightLevel() > LIGHT) {
            TobbieII.stopturn()
            TobbieII.forward()
        } else {
            TobbieII.stopwalk()
        }
        basic.pause(500)
    }
}
input.onButtonPressed(Button.A, function () {
    LIGHT = LIGHT + 1
    basic.showNumber(LIGHT)
    if (LIGHT == 10) {
        LIGHT = 1
    }
})
input.onButtonPressed(Button.B, function () {
    GO = 1
})
let LIGHT = 0
let x = 0
let GO = 0
GO = 0
x = 1
LIGHT = 1
basic.forever(function () {
    if (GO == 1) {
        TobbieII.rightward()
        scan_light()
        TobbieII.stopturn()
        x = x + 1
        TobbieII.leftward()
        scan_light()
        TobbieII.stopturn()
        x = x + 1
        if (x > 4) {
            TobbieII.leftward()
            basic.pause(500)
            TobbieII.leftward()
            x = 1
        }
    } else {
        basic.showNumber(input.lightLevel())
    }
})
