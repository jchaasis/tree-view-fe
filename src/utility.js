//functions to be used in various places across the application
function validateRange(min,max){
    //if the min is actually lower than the max, return true
    if (parseInt(min) < parseInt(max)){
        return true;
    } else {
        return false;//someone needs to check their math and try again. Maybe look into some math classes
    }
}

export {validateRange};