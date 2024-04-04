
/* String Manipulation Functions */
console.log("********* String Manipulation Functions ************");

    //Reverse a String
    console.log("--Q1: Reverse a String");

    var word = prompt("Q1-Reverse a String : Veuillez entrer un mot pour avoir son inverse");
    function reverseWord(word){
        var reverse = word.split('').reverse();
        console.log("Mot à inverser : "+word);
        return "L'inverse du mot que vous avez entre est : "+reverse.join('');
    }
    console.log(reverseWord(word));

    //Count Characters
    console.log("--Q2: Count Characters");

    var word = prompt("Q2-Count Characters : Veuillez entrer un mot pour avoir le nombre de caracteres");
    function countWord(word){
        var count = word.split('').length;
        console.log("Mot renseigne : "+word);
        return "Le nombre de caracteres est de : "+count;
    }
    console.log(countWord(word));

    //Capitalize Words
    console.log("--Q3: Capitalize Words");
    
    var expression = prompt("Q3-Capitalize Words : Veuillez entrer une expression ou une phrase");
    function capitalizeWord(expression){
        var result = expression.split(' ');
        var result2 = [];

        for(var i = 0; i < result.length; i++){
            result2[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        }

        console.log("Expression ou phrase renseignee : "+expression);
        return "Resultat de la fonction : "+result2.join(' ');;
    }
    console.log(capitalizeWord(expression));

/* End String Manipulation Functions */


/* Array Functions */
console.log("********* Array Functions ************");

    //Find Maximum
    console.log("--Q1: Find Maximum");

    var val = prompt("Q1-Find Maximum : Veuillez entrer des valeurs numeriques separees d'une virgule");
    function valMax(val = []){

        var maximum = val[(val.length)-1];
        for(i=0; i < val.length; i++){
            if(val[i] > maximum){
                maximum = val[i];
            }
        }
        return "Le maximum est : "+maximum;
    }
    console.log(valMax(val));

    //Find Minimum
    console.log("--Q1: Find Minimum");

    var val = prompt("Q1-Find Minimum : Veuillez entrer des valeurs numeriques separees d'une virgule");
    function valMin(val){

        var minimum = val[(val.length)-1];
        for(i = 0; i < val.length; i++){
            if(val[i] < minimum){
                minimum = val[i];
            }
        }
        return "Le minimum est : "+minimum;
    }
    console.log(valMin(val));

    //Sum of array66
    console.log("--Q2: Sum of Array");
    
    function sumArray(val){
        
        var sum = 0;
        for(i = 0; i < val.length; i++){
            sum += val[i];
        }
        return "La somme des valeurs entrees est :"+sum;
    }
    console.log(sumArray([9,8,5,4,6,3,2,1]));

    //Filter array
    console.log("--Q3: Filter array");
    var tabNumb = [18, 20, 11, 5, 90];
    var result = tabNumb.filter(filterArr);
    
    function filterArr(numb){
        return numb > 10;
    }
    console.log(result);

/* End Array Functions */

/* Mathematical Functions */
    console.log("********* Mathematical Functions ************");

    //Factorial
    console.log("--Q1: Factorial");

    var number = prompt("Q1-Factorial : Veuillez entrer un chiffre ou un nombre")
    function factoNumb(number){
        var factorial = 1;
        for(i = 1; i <= number; i++){
            factorial = factorial * i;
        }

        console.log("Valeur renseignee : "+number)
        return "La factoriel est : "+factorial;
    }
    console.log(factoNumb(number));

    //Prime Number Check
    console.log("--Q2: Prime Number Check");
    
    var number = prompt("Q2-Prime Number Check : Veuillez entrer un chiffre ou un nombre");
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
    console.log(primeNumber(number));

    //Fibonacci Sequence
    console.log("--Q3: Fibonacci Sequence");
    
    var number = prompt("Q3-Fibonacci Sequence : Veuillez entrer un chiffre ou un nombre");
    function fibonacci(number){

        var fibo;
        var array = [];

        for(i=0; i <= number; i++){
            if(i === 0){
                fibo = 0;
                array.push(fibo);
            } else if (i === 1){
                fibo = 1;
                array.push(fibo);
            }
            else {
                fibo = array[i-1] + array[i-2];
                array.push(fibo);
            }
        }

        return "La sequence de fibonacci de "+number+" est : "+array;
    }
    console.log(fibonacci(number));
    
/* End Mathematical Functions */