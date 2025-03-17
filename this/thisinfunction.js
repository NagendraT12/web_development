//"use strict"

function showThis() {
    console.log(this);
}

showThis();  // In strict mode: undefined, otherwise global object (window in browser)