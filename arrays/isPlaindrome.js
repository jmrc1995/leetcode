 const isPalindrome = (integer) =>{
    let rev = integer.toString().split('').reverse().join('');
    let currentInt = integer.toString();

    if(currentInt === rev){
        return true;
    } else return false;
 }