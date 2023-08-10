class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="150" cy="120" r="75" fill="${this.getColor()}"></circle>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="75" y="50" height="150" width="150" fill="${this.getColor()}"></rect>`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.getColor()}"></polygon>`;
    }
}

module.exports = { Circle, Square, Triangle };