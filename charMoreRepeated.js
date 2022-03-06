function moreUsedChar(word){
    
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
    // for(veces of times){
    //     let aux;
    //     if(veces>times[letter+1]){
    //         aux=times[letter+1];
    //         veces=times[letter+1]

    //     }
    // }
    for(let letra in times){

        if(times[letra]>maximo_repeticiones){
            maximo_repeticiones=times[letra];
            letra_mas_repetida=letra;
        }
    }

    console.log(maximo_repeticiones, letra_mas_repetida);
}

moreUsedChar("salomunsalomon")
// console.log("The letter than exists more times in this word is: "+moreUsedChar("Salomon.salo"))