function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    原地右转()
    basic.pause(3000)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    原地左转()
    basic.pause(3000)
})
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    -150
    )
}
makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    前进()
    basic.pause(5000)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Released, function () {
    停止()
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    后退()
    basic.pause(5000)
})
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    150
    )
}
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
basic.showIcon(IconNames.Heart)
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.Keyestudio)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
