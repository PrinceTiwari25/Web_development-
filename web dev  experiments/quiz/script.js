const questions = [
    {
        question: "Capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "HTML stands for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "None"],
        answer: "Hyper Text Markup Language"
    }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    optionsEl.innerHTML = "";
    let q = questions[currentQ];
    questionEl.textContent = q.question;

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(option) {
    if (option === questions[currentQ].answer) score++;
    currentQ++;

    if (currentQ < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-box").classList.add("hide");
    document.getElementById("result-box").classList.remove("hide");

    document.getElementById("score").textContent =
        "Your Score: " + score + "/" + questions.length;

    let message = "Try Again";
    if (score === questions.length) message = "Excellent!";
    else if (score >= 2) message = "Good Job!";

    document.getElementById("message").textContent = message;
}

function restartQuiz() {
    currentQ = 0;
    score = 0;
    document.getElementById("quiz-box").classList.remove("hide");
    document.getElementById("result-box").classList.add("hide");
    loadQuestion();
}

loadQuestion();
