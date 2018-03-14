import objFile from '../../public/assets/Zenith_OBJ.obj';

const sketch = (p5) => {
    let zenith;

    p5.preload = () => {
        zenith = p5.loadModel(objFile);
    };

    p5.setup = () => {
        p5.createCanvas(100, 100, p5.WEBGL);
    };

    p5.draw = () => {
        p5.background(200);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.model(zenith);
    };
};

export default sketch;
