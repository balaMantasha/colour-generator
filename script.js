const getColour = () => {
    //hex code
    const randNo = Math.floor(Math.random() * 1677215);
    const randCode = "#" + randNo.toString(16);
    document.body.style.backgroundColor = randCode;
    document.getElementById("colour-code").innerText= randCode;

    navigator.clipboard.writeText(randCode);
}

// event call 
document.getElementById("btn").addEventListener('click' , getColour);

// initial call
getColour();