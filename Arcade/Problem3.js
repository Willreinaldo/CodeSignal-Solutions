//Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
    let reverse =  inputString.split("").reverse().join("");
    if(reverse===inputString){
        return true;
    }
    else{
        return false;
    }
}
