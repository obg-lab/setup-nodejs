const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Germano', () => {
        const response = sayHelloWorld.sayHello('Germano');

        expect(response).toBe('Hello Germano!');
    })
});