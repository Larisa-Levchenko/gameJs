'use strict';
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
    
};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const game = function(){
    let number = getRandomInt(100);
    let amount = 10;
    console.log(number);        
    const bot =function(){
        amount--;
        let n = prompt('Угадай число от 1 до 100');
        if(n!==null){
            if(amount>0){
                if(+n===number){
                    let repeat = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                    if(repeat){
                       game();
                    }
                }else{
                    if(n<number){
                        alert('Загаданное число больше, осталось попыток ' + amount);                                 
                    }else if(n>number){
                        alert('Загаданное число меньше, осталось попыток ' + amount);                    
                    }else if(!isNumber(n)){
                        alert('Введи число!');                    
                    }
                    bot();  
                }            

            }else{
                let repeat = confirm('Попытки закончились, хотите сыграть еще?');
                console.log(repeat);
                    if(repeat){
                       game();
                    }
            }          
                 
        }else{
            alert('Игра окончена');
        }
    };
    bot();
};   
game();


