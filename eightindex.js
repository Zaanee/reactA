let startBtn = document.getElementById('startBtn');
let ticTacBtn = document.getElementById('ticTacBtn')

// 1 stage variable
let firstStage = document.getElementById('firstStage');
let firstStageInput = document.getElementById('firstStageInput');
let firstStageBtn = document.getElementById('firstStageBtn');
let firstStageAsk = document.getElementById('firstStageAsk');


// 2 stage virable
let secondStage = document.getElementById('secondStage');
let secondStageImg1 = document.getElementById('secondStageImg1');
let secondStageImg2 = document.getElementById('secondStageImg2');
let secondStageAsk = document.getElementById('secondStageAsk');

// 3 stage virable
let thirdStage = document.getElementById('thirdStage');
let thirdStageImg1 = document.getElementById('thirdStageImg1');
let thirdStageHP = document.getElementById('thirdStageHP');
let thirdStageHeal = document.getElementById('thirdStageHeal');
let thirdStageHealth = document.getElementById('thirdStageHealth');
let thirdStageAtk = document.getElementById('thirdStageAtk');

// 4 stage virable
let fourthStage = document.getElementById('fourthStage');
let fourthStageBtn = document.getElementById('fourthStageBtn');
let fourthStageAsk = document.getElementById('fourthStageAsk');
let nextStageBtn = document.getElementById('nextStageBtn');

// 5 stage virable
let fifthStage = document.getElementById('fifthStage');
let fifthStageAnswer = document.getElementById('fifthStageAnswer');
let fifthStageInput = document.getElementById('fifthStageInput');
let fifthStageBtn = document.getElementById('fifthStageBtn');
let fifthStageAsk = document.getElementById('fifthStageAsk');

// tic tac virable

let cells = document.querySelectorAll('#table td');
let ask = document.getElementById('ask')
let ticTac = document.getElementById('ticTac')









// Start game
let getStart = () => {
    ticTac.classList.remove('visibleTicTac')
    ticTac.classList.add('hide')
    firstStage.classList.remove('hide');
    firstStage.classList.add('visibleFirstStage');
};
startBtn.addEventListener('click', getStart);

// 1 stage
let checkAsk = () => {
    if (firstStageInput.value == 'Москва','Moscow') {
        firstStageAsk.textContent = 'Правильный ответ, переходим на второй этап';
        setTimeout(() => {
            firstStage.classList.remove('visibleFirstStage');
            firstStage.classList.add('hide')
            secondStage.classList.remove('hide');
            secondStage.classList.add('visibleSecondStage');
            firstStageInput.value = '';
            firstStageAsk.textContent = '';
        },1000);
    } else {
        firstStageAsk.textContent = 'Неправильный ответ,попробуй ещё раз';
    }
};
firstStageBtn.addEventListener('click', checkAsk);



// 2 stage
let trueAsk = () => {
    secondStageAsk.textContent = 'Да, это мужчина, перходим на третий этап';
    setTimeout(() => {
        secondStage.classList.remove('visibleSecondStage');
        secondStage.classList.add('hide')
        thirdStage.classList.remove('hide');
        thirdStage.classList.add('visibleThirdStage');
        secondStageAsk.textContent = '';
    }, 1000);
};
let falseAsk = () => {
    secondStageAsk.textContent = 'Нет,это не мужчина. Попробуй ещё раз';
};
secondStageImg1.addEventListener('click', falseAsk);
secondStageImg2.addEventListener('click',trueAsk);


// 3 stage

 
let randDmg = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

let HPuser = 100;
let HPmonster = 100;

thirdStageHP.textContent = HPmonster;
thirdStageHealth.textContent = HPuser;

let atk = () => {
    HPmonster -= randDmg(10, 25);
    HPuser -= randDmg(10, 25);
    thirdStageHP.textContent = HPmonster;
    thirdStageHealth.textContent = HPuser;
    if (HPmonster <= 0) {
        setTimeout(() => {
            thirdStage.classList.remove('visibleThirdStage');
            thirdStage.classList.add('hide');
            fourthStage.classList.remove('hide')
            fourthStage.classList.add('visibleFourthStage')
            thirdStageHP.textContent = 100
            thirdStageHealth.textContent = 100
        },1000)
    }
    if (HPuser <= 0) {
        thirdStage.classList.remove('visibleThirdStage');
        thirdStage.classList.add('hide');
        firstStage.classList.remove('visibleFirstStage');
        firstStage.classList.add('hide')
        thirdStageHP.textContent = 100
        thirdStageHealth.textContent = 100
    }
};

let heal = () => {
    HPuser += 10
    thirdStageHP.textContent = HPmonster;
    thirdStageHealth.textContent = HPuser;
};


thirdStageAtk.addEventListener('click', atk);
thirdStageHeal.addEventListener('click', heal);


// 4 stage

let trueClick = () => {
    fourthStageAsk.textContent = 'Кнопка найдена';
    fourthStageBtn.classList.add('trueBtn');
    if (fourthStageAsk.textContent = 'Кнопка найдена') {
        nextStageBtn.classList.remove('hide')
        nextStageBtn.classList.add('visibleBtnNext')
    } 
};
let goNext = () => {
    if (fourthStageAsk.textContent = 'Кнопка найдена') {
        setTimeout(() => {
            fourthStage.classList.remove('visibleFourthStage')
            fourthStage.classList.add('hide')
            fifthStage.classList.remove('hide')
            fifthStage.classList.add('visibleFifthStage')
            fourthStageBtn.classList.remove('trueBtn')
            nextStageBtn.classList.remove('visibleBtnNext')
            nextStageBtn.classList.add('hide')
            fourthStageAsk.textContent = 'Найди секретную кнопку'
        },1000)
    }
}
fourthStageBtn.addEventListener('click', trueClick );
nextStageBtn.addEventListener('click', goNext)

// 5 stage

let randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
let num = 0;
num += randNum(0,3)
let guessNum = () => {
    if (fifthStageInput.value == num) {
            fifthStageAnswer.textContent = 'Вы угадали число';
            setTimeout(() => {
                fifthStage.classList.remove('visibleFifthStage');
                fifthStage.classList.add('hide')
                ticTac.classList.remove('hide')
                ticTac.classList.add('visibleTicTac')
                fifthStageInput.value = '';
                fifthStageAnswer.textContent = 'Система выбрала число от 1 до 3. Отгадай данное число'
            }, 1000);
    }
    else if (fifthStageInput.value != num){
        fifthStageAnswer.textContent = 'Вы не угадали число';
    }
}
fifthStageBtn.addEventListener('click', guessNum)


// tic tak



let startTicTac = () => {
    firstStage.classList.remove('visibleFirstStage','hide');
    firstStage.classList.add('hide')
    secondStage.classList.remove('visibleSecondStage','hide');
    secondStage.classList.add('hide')
    thirdStage.classList.remove('visibleThirdStage','hide');
    thirdStage.classList.add('hide');
    fourthStage.classList.remove('visibleFourthStage','hide')
    fourthStage.classList.add('hide')
    fifthStage.classList.remove('visibleFifthStage','hide');
    fifthStage.classList.add('hide')
    ticTac.classList.remove('hide')
    ticTac.classList.add('visibleTicTac')
}
ticTacBtn.addEventListener('click',startTicTac)


const isVictory =(cells) =>{
let combs = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

for(let comb of combs){
    if (
    cells[comb[0]].textContent === cells[comb[1]].textContent && 
    cells[comb[1]].textContent === cells[comb[2]].textContent && 
    cells[comb[0]].textContent!= ''
    )   {
        return true;
        }
    }
    return false;
};

const start = (argCells) => {
    let i = 0;
    for(let cell of argCells) {
        cell.addEventListener('click', function turn() {
        cell.textContent =["X", "0"][i % 2];
        cell.removeEventListener('click', turn);
        if(isVictory(argCells)){
            setTimeout(() => alert(`${cell.textContent} win`))
            setTimeout(() => ask.textContent = `${cell.textContent} win`)
        }  else if (i == 8) {
            setTimeout(() => alert('No one win'))
            setTimeout(() => ask.textContent = 'No one win')
        } 
        i ++;
        });
    }
};
start(cells);
