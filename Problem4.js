/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
Guaranteed constraints:
    2 ≤ inputArray.length ≤ 10,
    -1000 ≤ inputArray[i] ≤ 1000.
    */
function adjacentElementsProduct(inputArray) {
    let j = 1;
    let biggest = -1000;
    for (let i = 0; i < inputArray.length-1; i++) {
        let product = (inputArray[i]*inputArray[j])
       if(product > biggest){
           biggest = product;
       }
     product = 0;
     j++;
    }
    return biggest;
}
