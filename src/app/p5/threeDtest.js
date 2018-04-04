
const sketch = (p5) => {
    let halfWidth;
    let halfHeight;
    let xRotateSpeedFactor = 1;
    let yRotateSpeedFactor = 1;
    let xRotate = 0;
    let yRotate = 0;

    p5.setup = () => {
        p5.angleMode(p5.DEGREES);
        p5.createCanvas(1000, 1000, p5.WEBGL);
        halfWidth = p5.width / 2;
        halfHeight = p5.height / 2;
    };

    p5.draw = () => {
        p5.background(0);
        p5.noStroke();
        p5.ambientLight(150);
        const dirX = ((p5.mouseX / p5.width) - 0.5) * 2;
        const dirY = ((p5.mouseY / p5.height) - 0.5) * 2;
        p5.directionalLight(255, 255, 255, -dirX, -dirY, -0.2);
        p5.specularMaterial(250, 250, 0);
        xRotateSpeedFactor = -(p5.mouseY - halfHeight) / halfHeight;
        yRotateSpeedFactor = -(p5.mouseX - halfWidth) / halfWidth;
        xRotate += (xRotateSpeedFactor * 2);
        yRotate += (yRotateSpeedFactor * 2);
        p5.rotateX(xRotate);
        p5.rotateY(yRotate);

        // SHAPES

        // BODY
        p5.sphere(200);

        // LEG 1
        p5.specularMaterial(0, 0, 250);
        p5.rotateZ(-45);
        p5.translate(-50, 270);
        p5.cylinder(10, 200);

        // LEG 2
        p5.rotateZ(45);
        // p5.translate(50, 270);
        p5.cylinder(10, 200);
    };
};

export default sketch;
