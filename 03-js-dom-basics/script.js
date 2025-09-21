function switchIt(){
    document.body.style.backgroundColor = 'lightpink';
    alert('You changed the background color!')
}

function dynamicChange(){
    let fortunes = [
        "Good Things Are Coming",
        "You will have a great day!",
        "Better Days Ahead",
        "Expect a pleasant surprise!",
        "You will achieve your goals."
    ];
    let box1 = document.getElementById("change1");
    let newDiv = document.createElement("div");
    newDiv.className = "dynamic";
    newDiv.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
    box1.appendChild(newDiv);
        }
