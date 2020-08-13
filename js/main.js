'use strict';
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
    
};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const game = function(){
    let number = getRandomInt(100);
    console.log(number);        
    const bot =function(){
        let n = prompt('Угадай число от 1 до 100');
        if(n!==null){
            if(+n===number){
                alert('Ура!!! Загаданное число: ' + n);
            }else{
                if(n<number){
                    alert('Загаданное число больше');                                 
                }else if(n>number){
                    alert('Загаданное число меньше');                    
                }else if(!isNumber(n)){
                    alert('Введи число!');                    
                }
                bot();  
            }             
                 
        }else{
            console.log('Игра окончена');
        }
    };
    bot();
};   
game();


