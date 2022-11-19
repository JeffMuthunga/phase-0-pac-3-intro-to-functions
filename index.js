//Follow along with the examples here
function doNothing () {
    
}
function sayHello () {
    console.log("Hello!")
}
sayHello()
function sayHelloToIsabel () {
    console.log("Hello Isabel!")
}
sayHelloToIsabel()

function sayHelloToIndividuals (name) {
console.log(`Hello ${name}`)
}
sayHelloToIndividuals("Isabel")
sayHelloToIndividuals("Sofia")
sayHelloToIndividuals("Brendan") 
function say(greeting, firstName){
    console.log(`${greeting}, ${firstName}`)
}
say("Hello", "Jeff")

function add (x, y){
    return x+y;
}
console.log(add(5,6))

function texasGreetings(greeting, name){
    console.log(greeting, name)
    return `${greeting} ${name}`
}
console.log(texasGreetings("Howdy", "Partner"))