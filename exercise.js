/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    const letters = encode.split(''); //we start by making an array
    let decode = ''; //make a variable for the result
    letters.forEach(Element => {  //we build the base for the cycle 
    /*inside the num we make our conditions, if our Element is 
    greater than 90 or less than 65 its value would be 
    the char transformed into a num, else, if we add 13 to a number and
    that number is greater than 90 we add 13 to the char
    else we  substract 13 to our char
    */
    let num = (Element.charCodeAt(0)>90 || Element.charCodeAt(0)<65 ? Element.charCodeAt(0) :(Element.charCodeAt(0)+13) >90 ? Element.charCodeAt(0)-13:Element.charCodeAt(0)+13);
    decode += String.fromCharCode(num);      
    return decode;
    });
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;