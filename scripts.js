
/* String Manipulation Functions */

    //Reverse a String
    function reverseWord(word){
        var reverse = word.split('').reverse();
        return reverse.join('');
    }
    console.log(reverseWord("monde"));

    //Count Characters
    function countWord(word){
        var count = word.split('').length;
        return count;
    }
    console.log(countWord("monde"));

    //Capitalize Words
    function capitalizeWord(expression){
        var result = expression.split(' ');
        var result2 = [];

        for(var i = 0; i < result.length; i++){
            result2[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        }

        return result2.join(' ');;
    }
    console.log(capitalizeWord("le coup du marteau"));

/* End String Manipulation Functions */


/* Array Functions */

    //Max and Min
    function maxMin(val){
        var max = Math.max(val);
        var min = Math.min(val);
        return max, min;
    }
    console.log(maxMin([4, 2, 3]));

    //Sum of array
    function sumArray(val){

        var sum = 0;
        for(i = 0; i < val.length; i++){
            sum += val[i];
        }
        return sum;
    }
    console.log(sumArray([1,9,5]));

    //Filter array
    var tabNumb = [18, 20, 11, 5, 90];
    var result = tabNumb.filter(filterArr);
    
    function filterArr(numb){
        return numb > 10;
    }
    console.log(result);

/* End Array Functions */

/* Mathematical Functions */

    //Factorial
    function factoNumb(number){
        var factorial = 1;
        for(i = 1; i <= number; i++){
            factorial = factorial * i;
        }
        return factorial;
    }
    console.log(factoNumb(6));

    //Prime Number Check
    function primeNumber(number){

        var result = 0;
        var diviseur = 0;
        var count = 0;
        var array = [];

        for(i=0; i <= number; i++){
            result = number % i;
            if(result == 0){
                diviseur = i;
                count = count + 1;
                array.push(i);
            }
        }

        if(count == 2){
            console.log("("+number+") est un nombre premier car admet 2 diviseurs");
        } else {
            console.log("("+number+") n'est pas un nombre premier");
        }

        return "Ces diviseurs sont : "+array;
    }
    console.log(primeNumber(13));

    //Fibonacci Sequence
    function fibonacci(number){

        var fibo = 0;
        var array = [];

        for(i=2; i <= number; i++){
            fibo = [(i-1) + (i-2)];
            array.push(fibo);
        }
        return array;
    }
    console.log(fibonacci(10));
    
/* End Mathematical Functions */
