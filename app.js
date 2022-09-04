'use strict'





class Sprite {
    constructor(options) {
        this.ctx = options.ctx;

        this.image = options.image;

        this.frameIndex = 0;
        this.tickPers = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames ||1;

        this.width = options.width;
        this.height = options.height;

        this.start();
    }

    update() {
        this.tickPers++;

        if (this.tickPers > this.ticksPerFrame) {
            this.tickPers = 0;
              if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
              } else {
                this.frameIndex = 0;
            }    
        }
    }
    

    render() {
        this.ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);
        this.ctx.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            0,
            this.width / this.numberOfFrames,
            this.height,
            5,
            5,
            this.width / this.numberOfFrames,
            this.height
            )
    }
    
    start() {
        let loop = () => {
            this.update();
            this.render();

            window.requestAnimationFrame(loop);
            
        }

        window.requestAnimationFrame(loop);

    }
}


let persImage = new Image();
persImage.src = '1627248988_11-kartinkin-com-p-spraiti-personazhei-piksel-art-art-krasivo-15.png';

let canvas = document.getElementById('canvas');
canvas.width = 250;
canvas.height = 300;

let sprite = new Sprite({
    ctx: canvas.getContext('2d'),
    image: persImage,
    width: 922,
    height: 290,
    numberOfFrames: 4,
    ticksPerFrame: 5,
})





