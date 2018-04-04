import _ from 'lodash';
import ksuey from '../../public/img/ksuey_bigger.png';

const sketch = (p5) => {
    let img;
    let previousMasks = [];

    p5.setup = () => {
        p5.createCanvas(1000, 1000);
        p5.noStroke();
        p5.frameRate(60);
        img = p5.loadImage(ksuey);
    };

    p5.draw = () => {
        p5.background('rgba(0, 0, 0, 0.8)');
        previousMasks = previousMasks.slice(Math.max(-500, -previousMasks.length));
        _.forEach(previousMasks, (mask) => {
            p5.blend(img, 0, 0, img.width, img.height, mask.x, mask.y, img.width, img.height, p5.BLEND);
            p5.fill(0, 3);
            p5.rect(0, 0, p5.width, p5.height);
        });
        if (p5.mouseIsPressed) {
            previousMasks.push({ x: p5.mouseX - 20, y: p5.mouseY - 40 });
        }
        p5.image(img, p5.mouseX - 20, p5.mouseY - 40);
    };
};

export default sketch;
