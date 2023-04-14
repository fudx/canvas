import BackGround from '../js/background.js'
class Main {
  constructor({canvas,ctx}) {
    this.aniId = 0;
    this.canvas = canvas
    this.ctx = ctx
    this.bindLoop = this.loop.bind(this)
    this.bg = new BackGround(ctx)
    this.restart();
  }
  restart() {
    this.aniId = window.requestAnimationFrame(
        this.bindLoop
    )
  }

  update() {
    this.bg.update()
  }

  render() {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.bg.render(this.ctx)
  }

  loop() {
    this.update()
    this.render()
    this.aniId = window.requestAnimationFrame(this.bindLoop);
  }
}
const canvas = document.getElementById("game_canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
new Main({
  canvas,
  ctx
})
