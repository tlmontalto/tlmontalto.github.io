// console.log("connected");

const cardSet = [
    {
        'card': `Ace`,
        'value': 11,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/04/ace-28357_1280.png`
    }, {
        'card': `Ace`,
        'value': 11,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/00/ace-28344_1280.png`
    }, {
        'card': `Ace`,
        'value': 11,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2014/03/25/17/01/spades-297839_1280.png`
    }, {
        'card': `Ace`,
        'value': 11,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/56/ace-28331_1280.png`
    }, {
        'card': `two`,
        'value': 2,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/02/two-28349_1280.png`
    }, {
        'card': `two`,
        'value': 2,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/57/two-28336_1280.png`
    }, {
        'card': `two`,
        'value': 2,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/49/spades-28311_1280.png`
    }, {
        'card': `two`,
        'value': 2,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/53/clubs-28323_1280.png`
    }, {
        'card': `three`,
        'value': 3,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/02/three-28350_1280.png`
    }, {
        'card': `three`,
        'value': 3,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/57/three-28337_1280.png`
    }, {
        'card': `three`,
        'value': 3,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/07/spades-28365__340.png`
    }, {
        'card': `three`,
        'value': 3,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/53/clubs-28324__340.png`
    }, {
        'card': `four`,
        'value': 4,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/02/four-28351__480.png`
    }, {
        'card': `four`,
        'value': 4,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/58/four-28338__480.png`
    }, {
        'card': `four`,
        'value': 4,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/08/spades-28366__340.png`
    }, {
        'card': `four`,
        'value': 4,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/53/four-28325__480.png`
    }, {
        'card': `five`,
        'value': 5,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/03/hearts-28352__340.png`
    }, {
        'card': `five`,
        'value': 5,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/58/five-28339__340.png`
    }, {
        'card': `five`,
        'value': 5,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/08/spades-28367__340.png`
    }, {
        'card': `five`,
        'value': 5,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/54/five-28326__340.png`
    }, {
        'card': `six`,
        'value': 6,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/03/six-28353__340.png`
    }, {
        'card': `six`,
        'value': 6,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/58/six-28340__340.png`
    }, {
        'card': `six`,
        'value': 6,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/08/spades-28368__340.png`
    }, {
        'card': `six`,
        'value': 6,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/54/six-28327__340.png`
    }, {
        'card': `seven`,
        'value': 7,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/03/hearts-28354__340.png`
    }, {
        'card': `seven`,
        'value': 7,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/59/seven-28341__340.png`
    }, {
        'card': `seven`,
        'value': 7,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/09/spades-28369__340.png`
    }, {
        'card': `seven`,
        'value': 7,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/54/seven-28328__340.png`
    }, {
        'card': `eight`,
        'value': 8,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/04/eight-28355__340.png`
    }, {
        'card': `eight`,
        'value': 8,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/59/eight-28342__340.png`
    }, {
        'card': `eight`,
        'value': 8,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/09/spades-28370__340.png`
    }, {
        'card': `eight`,
        'value': 8,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/18/19/20/card-37623__340.png`
    }, {
        'card': `nine`,
        'value': 9,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/04/nine-28356__340.png`
    }, {
        'card': `nine`,
        'value': 9,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/59/nine-28343__340.png`
    }, {
        'card': `nine`,
        'value': 9,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/09/nine-28371__340.png`
    }, {
        'card': `nine`,
        'value': 9,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/55/nine-28330__340.png`
    }, {
        'card': `ten`,
        'value': 10,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/01/ten-28348__340.png`
    }, {
        'card': `ten`,
        'value': 10,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/13/57/ten-28335__340.png`
    }, {
        'card': `ten`,
        'value': 10,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2012/04/11/14/07/spades-28363__340.png`
    }, {
        'card': `ten`,
        'value': 10,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2012/04/18/19/19/card-37621__340.png`
    }, {
        'card': `Jack`,
        'value': 10,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161493__340.png`
    }, {
        'card': `Jack`,
        'value': 10,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161490__340.png`
    }, {
        'card': `Jack`,
        'value': 10,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161487__340.png`
    }, {
        'card': `Jack`,
        'value': 10,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161483__340.png`
    }, {
        'card': `Queen`,
        'value': 10,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161494__340.png`
    }, {
        'card': `Queen`,
        'value': 10,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161491__340.png`
    }, {
        'card': `Queen`,
        'value': 10,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161488__340.png`
    }, {
        'card': `Queen`,
        'value': 10,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161484__480.png`
    }, {
        'card': `King`,
        'value': 10,
        'suit': `hearts`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161495__480.png`
    }, {
        'card': `King`,
        'value': 10,
        'suit': `diamonds`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/46/playing-card-161492__480.png`
    }, {
        'card': `King`,
        'value': 10,
        'suit': `spades`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161489__480.png`
    }, {
        'card': `King`,
        'value': 10,
        'suit': `clubs`,
        'img': `https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161485__480.png`
    }];


let cardCopy = [];
let player = [];
let dealer = [];
let score = 500;

// for (let i = 1; i > dealer.length; i++) {
//     dealer.topCard.img = 'https://cdn.pixabay.com/photo/2012/05/07/18/53/card-game-48983_1280.png'
// }

const start = () => {
    restart.style.display = `none`;
    result.innerText = ``;
    score = 500;
    current.innerHTML = score;
    resetDeck();
    resetPlayer();
    resetDealer();
    dealPlayer();
    dealDealer();
    dealPlayer();
    dealDealer();
    showButtons();
}

// Durstenfeld Shuffle
const shuffle = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * deck.length);
        [deck[i], deck[rand]] = [deck[rand], deck[i]];
    }
}

const dealBtn = () => {
    emptyDeck();
    result.innerText = ``;
    resetPlayer();
    resetDealer();
    dealPlayer();
    dealDealer();
    dealPlayer();
    dealDealer();
    showButtons();
}


const dealPlayer = () => {
    let topCard = cardCopy.shift();
    player.push(topCard);
    const playerHand = document.querySelector(`.player-hand`);
    const cardImg = document.createElement('img');
    cardImg.setAttribute(`class`, `cardImg`);
    cardImg.src = topCard.img;
    playerHand.appendChild(cardImg);

    aces(player);
}

const dealDealer = () => {
    let topCard = cardCopy.shift();
    dealer.push(topCard);
    const dealerHand = document.querySelector(`.dealer-hand`);
    const cardImg = document.createElement('img');
    cardImg.setAttribute(`class`, `cardImg`);
    cardImg.src = topCard.img;
    dealerHand.appendChild(cardImg);

    aces(dealer);
}

// Learned how to use reduce method
const summation = (ev) => {
    return ev.reduce((accumulator, currentValue) => {
        accumulator += currentValue.value;
        return accumulator;
    }, 0);
}


const evaluatePlayer = () => {
    if (summation(player) > 21) {
        result.innerText = `Player Bust! Dealer Wins! Better Luck Next Time.`;
        score -= 100;
        current.innerHTML = score;
        hideButtons();
        checkWin();
    }
};

const evaluateDealer = () => {
    if (summation(dealer) > 21) {
        result.innerText = `Dealer Bust! Player Wins!`;
        score += 100;
        current.innerHTML = score;
        hideButtons();
        checkWin();
    } else if (summation(dealer) < 17) {
        dealDealer();
        evaluateDealer();
    } else {
        evaluateWin();
    }
}

const evaluateWin = () => {
    if (summation(player) === summation(dealer)) {
        result.innerText = `Your cards have the same value as the dealer's. It's a tie!`;
        hideButtons();
    } else if (summation(player) > summation(dealer)) {
        result.innerText = `You won that round!`;
        score += 100;
        current.innerHTML = score;
        hideButtons();
        checkWin();
    } else if (summation(dealer) > summation(player)) {
        result.innerText = `The dealer won that round!`;
        score -= 100;
        current.innerHTML = score;
        hideButtons();
        checkWin();
    }
}

const checkWin = () => {
    if (score >= 1000) {
        result.innerText = `You must be counting cards! Get out of here!`;
        hit.style.display = `none`;
        hold.style.display = `none`;
        deal.style.display = `none`;
        restart.style.display = `block`;
    } else if (score <= 0) {
        result.innerText = `You're all out of cash. Dont you know the house always wins?`;
        hit.style.display = `none`;
        hold.style.display = `none`;
        deal.style.display = `none`;
        restart.style.display = `block`;
    }
}

const aces = (ev) => {
    for (i = 0; i < ev.length; i++) {
        if ((ev[i].card === `Ace`) && (summation(ev) > 21)) {
            ev[i].value = 1;
        } else if ((ev[i].card === `Ace`) && (summation(ev) <= 21)) {
            ev[i].value = 11;
        }
    }
}

const hitBtn = () => {
    aces(player);
    aces(dealer);
    emptyDeck();
    dealPlayer();
    evaluatePlayer();
}

const holdBtn = () => {
    aces(player);
    aces(dealer);
    emptyDeck();
    evaluatePlayer();
    evaluateDealer();
}

const resetPlayer = () => {
    const playerHand = document.querySelector(`.player-hand`);
    player = [];
    playerHand.innerHTML = "";
}

const resetDealer = () => {
    const dealerHand = document.querySelector(`.dealer-hand`);
    dealer = [];
    dealerHand.innerHTML = "";
}

const resetDeck = () => {
    cardCopy = Object.assign([], cardSet);
    //  or spread operator
    // cardCopy = [...cardSet];
    shuffle(cardCopy);
}

const emptyDeck = () => {
    if (cardCopy.length <= 4) {
        resetDeck();
    }
}

const hideButtons = () => {
    hit.style.display = `none`;
    hold.style.display = `none`;
    deal.style.display = `block`;
}

const showButtons = () => {
    hit.style.display = `block`;
    hold.style.display = `block`;
    deal.style.display = `none`;
}

const current = document.querySelector(`#score`);
current.innerHTML = score;
current.style.color = `green`;

const result = document.querySelector(`.result`);

const deal = document.querySelector(`#deal`);
deal.addEventListener(`click`, dealBtn);

const hit = document.querySelector(`#hit`);
hit.addEventListener(`click`, hitBtn);

const hold = document.querySelector(`#hold`);
hold.addEventListener(`click`, holdBtn);

const restart = document.querySelector(`#restart`);
restart.addEventListener(`click`, start);

start();