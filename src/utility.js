//functions to be used in various places across the application

function validateRange(min,max){
    // if the min is actually lower than the max, return true
    if (parseInt(min) < parseInt(max)){
        return true;//everything checks out
    } else {
        return false;//someone needs to check their math and try again. Maybe look into some math classes
    }
}

function validateChildren(num){
    if (num < 0 || num > 15){
        return false;
    }
}

function validateName(str){
    //make sure the length is between 3 and 15 characters
    if (str.length < 3 || str.length > 15){
        return false;
    }
}

export {validateRange, validateName, validateChildren};