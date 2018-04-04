import ksuey from '../../public/img/ksuey.png';

const sketch = (p5) => {
    let img;

    p5.setup = () => {
        p5.createCanvas(1700, 700);
        p5.frameRate(60);
        img = p5.loadImage(ksuey);
    };

    p5.draw = () => {
        // p5.background(255);
        p5.fill(0, 20);
        p5.rect(0, 0, p5.width, p5.height);
        p5.image(img, p5.mouseX - 20, p5.mouseY - 40);
        p5.noStroke();
        // p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
        if (p5.mouseIsPressed) {
            p5.image(img, p5.mouseX, p5.mouseY);
        }
    };
};

export default sketch;
