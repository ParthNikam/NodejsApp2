var counter = function(arr){
    return arr.length;
}

var add = function(a, b){
    return a + b;
}

var pi = 3.14;

var circle_area = function(r){
    return pi * r * r;
}

//exporting the functions and varialbes to use in other files
module.exports = {counter, add, circle_area, pi};





