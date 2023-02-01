// Math Functions

const add = (a, b) => {
    return a + b
};

const sub = (x, y) => {
    return x - y
};

const mult = (c, d) => {
    return c * d
};

const div = (e, f) => {
    if (e == 0){
        return "OOPS a zero was used and broke it, Try again!"
    }else if (f == 0){
        return "Error!!! You used a Zero and crashed, Try again!"
    }else {
        return e / f
    }
};

// exporting the funstions
module.exports = {
    add,
    sub,
    mult,
    div
};