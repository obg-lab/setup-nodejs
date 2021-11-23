exports.sayHello = (name='') => {
    return `Hello ${name ? name : 'World'}!`
}