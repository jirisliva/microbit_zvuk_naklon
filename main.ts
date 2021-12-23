input.onButtonPressed(Button.A, function () {
    music.setVolume(music.volume() - 10)
})
input.onButtonPressed(Button.AB, function () {
    if (mute == 0) {
        mute = 1
        music.setVolume(0)
    } else {
        mute = 0
        music.setVolume(10)
    }
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(music.volume() + 10)
})
let naklon = 0
let mute = 0
mute = 0
music.setVolume(10)
let naklon_min = -90
let naklon_max = 90
let ton = 100
basic.forever(function () {
    naklon = input.rotation(Rotation.Roll)
    if (naklon < naklon_min) {
        naklon = naklon_min
    }
    if (naklon > naklon_max) {
        naklon = naklon_max
    }
    ton = Math.constrain(ton + naklon, 1, 3000)
    music.ringTone(ton)
})
loops.everyInterval(100, function () {
    led.plotBarGraph(
    ton,
    3000
    )
})
