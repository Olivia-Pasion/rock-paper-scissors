export function getRandomItem(array) {
    const random = Math.floor(Math.random() * array.length);
    const item = array [random];
    return item;
}

export function score(throwSelect, computerSelect) {
    const thrown = throwSelect;
    if (thrown === computerSelect) {
        return 0;

    } else if (thrown === 'rock' && computerSelect === 'paper') {
        return -1;
    
    } else if (thrown === 'rock' && computerSelect === 'scissors') {
        return 1;
    } 
    else if (thrown === 'paper' && computerSelect === 'scissors') {
        return -1;
    
    } else if (thrown === 'paper' && computerSelect === 'rock') {
        return 1;

    } else if (thrown === 'scissors' && computerSelect === 'rock') {
        return -1;
    
    } else if (thrown === 'scissors' && computerSelect === 'paper') {
        return 1;
    }
}