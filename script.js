let random = () => Math.floor(Math.random() * 3);

function getComputerChoice(){
    let choice = random();

    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

console.log(getComputerChoice());