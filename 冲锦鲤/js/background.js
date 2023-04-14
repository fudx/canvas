import Sprite from '../base/sprite.js'

const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC   = '../imgs/bg.jpg'
const BG_WIDTH     = 512
const BG_HEIGHT    = 512

export default class BackGround extends Sprite {
  constructor(ctx) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT)

    this.top = 0

    this.render(ctx)
  }

  update() {
    this.top += 2

    if (this.top >= screenHeight) {
      this.top = 0
    }
  }

  render(ctx) {
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width, // 图片的原有宽度
      this.height, // 图片的原有高度
      0,  // 裁剪的x坐标 向左
      -screenHeight + this.top, // 裁剪的y坐标 向下
      screenWidth, // 绘制图片的宽度
      screenHeight  // 绘制图片的高度
    )

    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      this.top,
      screenWidth,
      screenHeight
    )
  }
}