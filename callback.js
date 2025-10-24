function greet(name, callback) {{
    console.log("Hello " + name);
    callback();
}}

function sayBye(){
    console.log("Bye");
}

greet("ABC", sayBye);