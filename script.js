const buttonClicked = (event) => {
    console.log("Button clicked");
    const screen = document.getElementById("screen");
    
    // console.log(event);
    const numberClicked = event.target.innerHTML;

    if (screen.innerHTML === "0"){
        screen.innerHTML = numberClicked;
    } else {
        screen.innerHTML += numberClicked;
    }
};

const clearButton = () => {
    const screen = document.getElementById("screen");
    screen.innerHTML = "0";
};

const equalClicked = () => {
    console.log("equal clicked");
    const screen = document.getElementById("screen");
    try{
        const result = eval(screen.innerHTML);
        console.log(result);
        screen.innerHTML = result;
    } catch (error) {
        screen.innerHTML = "Error";
    }

};

const allButtons = document.getElementsByTagName("button")
for (const individualButton of allButtons){

    if (individualButton.innerHTML === "="){
        individualButton.onclick = equalClicked;
    } else if (individualButton.innerHTML === "c"){
        individualButton.onclick = clearButton;
    } else {
        individualButton.onclick = buttonClicked;
    }

};