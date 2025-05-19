/*A closure in JavaScript is a feature where an inner function has access to variables from its outer function's scope, even after the outer function has finished executing.

This means:

The inner function can "remember" and access variables defined in the outer function.

The variables are preserved in memory, not destroyed after the outer function completes. */

function add(a){
    return function(b){
        return a+b
    }
}

const add5=add(5)
console.log(add5(10))//output:15