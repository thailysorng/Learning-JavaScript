let score = JSON.parse(localStorage.getItem('score')) || {wins:0, loses:0, ties:0};
document.querySelector('.scoring').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;        
const moves = {
    rock: '✊',
    paper: '🖐️',
    scissors: '✌️'
};

function computerpick() {
    let randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber <= 1/3){
        return 'rock';
    } else if(randomNumber > 1/3 && randomNumber <= 2/3){
        return 'paper';
    } else if(randomNumber > 2/3 && randomNumber < 1) {
        return 'scissors';
    }
}

function getResult(person, computer) {
    if(person === computer) return 'It\'s a tie';
    else if(
        person === 'rock' && computer === 'scissors' ||
        person === 'paper' && computer === 'rock' ||
        person === 'scissors' && computer === 'paper'
    ) return 'You Win';
    return 'You Lose';
}

function play(person) {
    let computer = computerpick();
    let result = getResult(person, computer);

    if(result === 'You Win') score.wins +=1;
    else if(result === 'You Lose') score.loses +=1;
    else if(result === 'It\'s a tie') score.ties +=1;

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.result').innerHTML = `${result}`;
    document.querySelector('.decided').innerHTML = `You chose <span style="font-size: 50px;" class="personSpan">${moves[person]}</span>, Computer chose <span style="font-size: 50px;" class="computerSpan">${moves[computer]}</span>.`;
    document.querySelector('.scoring').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}
        
function resetScore() {
    score = {wins: 0, loses: 0, ties: 0};
    localStorage.removeItem('score');
    document.querySelector('.result').innerHTML = ``;
    document.querySelector('.decided').innerHTML = ``;
    document.querySelector('.scoring').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}