
//random generator or Computer's choice
const Computer = () => {

    let r = Math.floor(Math.random() * 3);
    return r;

}


let arr = ["stone", "paper", "scissors"];
let i = 0;
let userScore = 0;
let compScore = 0;

let icons = document.querySelectorAll(".same");


icons.forEach((icon) => {
    console.log(icon);

    icon.addEventListener("click", () => {
        document.querySelector(".img1").classList.add("hide");
        document.querySelector(".img2").classList.add("hide");
        let rd = Computer();
        const choice = icon.getAttribute("id");
        console.log("clicked");
        console.log(arr.indexOf(choice));
        console.log(rd);

        if (arr.indexOf(choice) === rd) {
            console.log("matched with comp");
            document.querySelector(".img3").classList.add(choice);
            document.querySelector(".img4").classList.add(arr[rd]);
            document.querySelector(".win").innerText= " It's a Draw";
            document.querySelector("#sp1").innerText= choice;
            document.querySelector("#sp2").innerText= arr[rd];



            if (choice === "paper" && arr[rd] === "paper") {
                document.querySelector(".img3").classList.remove("scissors", "stone");
                document.querySelector(".img4").classList.remove("scissors", "stone");
            } else if (choice === "stone" && arr[rd] === "stone") {
                document.querySelector(".img3").classList.remove("scissors", "paper");
                document.querySelector(".img4").classList.remove("scissors", "paper");
            } else if (choice === "scissors" && arr[rd] === "scissors") {
                document.querySelector(".img3").classList.remove("paper", "stone");
                document.querySelector(".img4").classList.remove("paper", "stone");
            }



        } else if (choice === "stone" && arr[rd] === "paper") {
            console.log("Computer won");
            compScore++;
            document.querySelector("#b2").innerText = compScore;
            document.querySelector(".img3").classList.remove("paper", "scissors");
            document.querySelector(".img4").classList.remove("scissors", "stone");
            document.querySelector(".img3").classList.add(choice);
            document.querySelector(".img4").classList.add(arr[rd]);
            document.querySelector(".win").innerText= " COMPUTER WON";
            document.querySelector("#sp1").innerText= choice;
            document.querySelector("#sp2").innerText= arr[rd];



        } else if (choice === "paper" && arr[rd] === "scissors") {
            console.log("Computer won");
            compScore++;
            document.querySelector("#b2").innerText = compScore;
            document.querySelector(".img3").classList.remove("stone", "scissors");
            document.querySelector(".img4").classList.remove("paper", "stone");

            document.querySelector(".img3").classList.add(choice);
            document.querySelector(".img4").classList.add(arr[rd]);
            document.querySelector(".win").innerText= " COMPUTER WON";
            document.querySelector("#sp1").innerText= choice;
            document.querySelector("#sp2").innerText= arr[rd];


        } else if (choice === "scissors" && arr[rd] === "stone") {
            console.log("Computer won");
            compScore++;
            document.querySelector("#b2").innerText = compScore;
            document.querySelector(".img3").classList.remove("paper", "stone");
            document.querySelector(".img4").classList.remove("scissors", "paper");

            document.querySelector(".img3").classList.add(choice);
            document.querySelector(".img4").classList.add(arr[rd]);
            document.querySelector(".win").innerText= " COMPUTER WON";
            document.querySelector("#sp1").innerText= choice;
            document.querySelector("#sp2").innerText= arr[rd];


        } else if (choice === "paper" && arr[rd] === "stone") {
            console.log("User won");
            userScore++;
            document.querySelector("#b1").innerText = userScore;
            document.querySelector(".img3").classList.remove("stone", "scissors");
            document.querySelector(".img4").classList.remove("scissors", "paper");

            document.querySelector(".img3").classList.add(choice);
            document.querySelector(".img4").classList.add(arr[rd]);
            document.querySelector(".win").innerText= " YOU WON";
            document.querySelector("#sp1").innerText= choice;
            document.querySelector("#sp2").innerText= arr[rd];


        } else if (choice === "scissors" && arr[rd] === "paper") {
            console.log("User won");
            userScore++;
            document.querySelector("#b1").innerText = userScore;
            document.querySelector(".img3").classList.remove("paper", "stone");
            document.querySelector(".img4").classList.remove("scissors", "stone");

            document.querySelector(".img3").classList.add(choice);
            document.querySelector(".img4").classList.add(arr[rd]);
            document.querySelector(".win").innerText= " YOU WON";
            document.querySelector("#sp1").innerText= choice;
            document.querySelector("#sp2").innerText= arr[rd];


        } else if (choice === "stone" && arr[rd] === "scissors") {
            console.log("User won");
            userScore++;
            document.querySelector("#b1").innerText = userScore;
            document.querySelector(".img3").classList.remove("paper", "scissors");
            document.querySelector(".img4").classList.remove("paper", "stone");

            document.querySelector(".img3").classList.add(choice);
            document.querySelector(".img4").classList.add(arr[rd]);
            document.querySelector(".win").innerText= " YOU WON";
            document.querySelector("#sp1").innerText= choice;
            document.querySelector("#sp2").innerText= arr[rd];


        }

    });

});

let button=document.querySelector("button");
button.addEventListener("click",()=>{
    window.location.reload();
});


