const { Circle, Square, Triangle } = require('./shapes')

describe('Circle', () => {
    it('should render circle with the correct color', () => {
        const circle = new Circle();
        circle.setColor('blue');
        const renderedCircle = circle.render();
        expect(renderedCircle).toContain('fill="blue"');
    });
});

describe('Square', () => {
    it('should render square with the correct color', () => {
        const square = new Square();
        square.setColor('green');
        const renderedSquare = square.render();
        expect(renderedSquare).toContain('fill="green"');
    });
});

describe('Triangle', () => {
    it('should render triangle with the correct color', () => {
        const triangle = new Triangle();
        triangle.setColor('yellow');
        const renderedTriangle = triangle.render();
        expect(renderedTriangle).toContain('fill="yellow"');
    });
});