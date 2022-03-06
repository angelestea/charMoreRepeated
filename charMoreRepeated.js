/*
The objective is save the letter that exist more in whichever string, so the focus must be in the object json times, because you can save element with value in these ones.

Enjoy!
*/
function moreUsedChar(word){
    word=word.replace(/ /g,"").toLowerCase();
    let times={};
    let maximo_repeticiones =0;
    let letra_mas_repetida="";

    for(let letter of word){
        
        if(!times[letter]){
            times[letter]=1;
        }else{
            times[letter]++;
        }
        
    }
    for(let letra in times){

        if(times[letra]>maximo_repeticiones){
            maximo_repeticiones=times[letra];
            letra_mas_repetida=letra;
        }
    }

    return letra_mas_repetida; 
}

console.log("Letter that exist more in this string is: '"+moreUsedChar("sal om  un sal om on ho la  si ud  bas ids  ba sdu o ad")+"'");
