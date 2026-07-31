let currentQuestion = 0;
let userScore = 0;
let score = document.querySelector(".score_val");
let totalQuestions = document.querySelector(".question_num");
let question = document.querySelector(".Q_area");
let option = document.querySelectorAll(".option");
let optionText = document.querySelectorAll(".option_text");
let nextBtn = document.querySelector(".next_btn");
let ans = document.querySelectorAll(".ans");
let isChecked = false

let quizData = [
    {
        question: "What is the national flower of Pakistan?",
        options: ["Rose", "Jasmine", "Sunflower", "Tulip"],
        correct: 1,
    },
    {
        question: "Which is the largest province of Pakistan by area?",
        options: ["Punjab", "SindhKhyber","Balochistan", "Pakhtunkhwa"],
        correct: 2,
    },
    {
        question: "Which is the highest mountain peak in Pakistan?",
        options: ["K2", "NangaParbat", "BroadPeak", "Rakaposhi"],
        correct: 0,
    },
    {
        question: "In which year was the current constitution of Pakistan passed?",
        options: ["1973", "1956", "1962", "1988"],
        correct: 0,
    },
    {
        question: "Who was the first female Prime Minister of Pakistan?",
        options: ["Fatima Jinnah","Benazir Bhutto", "Hina Rabbani Khar", "Fehmida Mirza"],
        correct: 1,
    },
    {
        question: "Where is the famous Khewra Salt Mine located in Pakistan?",
        options: ["Karachi", "Quetta", "Peshawar","Jhelum",],
        correct: 3,
    },
    {
        question: "Who is known as the National Poet of Pakistan?",
        options: ["Allama Iqbal", "Faiz Ahmed Faiz", "Mirza Ghalib", "Hafeez Jalandhari"],
        correct: 0,
    },
    {
        question: "What is the national sport of Pakistan?",
        options: ["Cricket", "Hockey", "Football", "Squash"],
        correct: 1,
    },
    {
        question: "Who inaugurated the State Bank of Pakistan?",
        options: ["Liaquat Ali Khan", "Ayub Khan", "Zulfikar Ali Bhutto", "Quaid-e-Azam Muhammad Ali Jinnah"],
        correct: 3,
    },
    {
        question: "What is the national animal of Pakistan?",
        options: ["Snow Leopard", "Bengal Tiger", "Indus Dolphin", "Markhor"],
        correct: 3,
    },

];


function loadQuestion() {
    question.textContent = quizData[currentQuestion].question;
    totalQuestions.textContent = (`${currentQuestion + 1}/${quizData.length}`)
    quizData[currentQuestion].options.forEach((val, index) => {
        optionText[index].textContent = val;
    })
}

nextBtn.addEventListener("click", () => {

    if (isChecked) {
        ans.forEach((val, index) => {
            val.classList.remove("correctAns", "incorrectAns")
            option[index].checked = false
        })
        currentQuestion++
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            nextBtn.disabled = true
            question.textContent = "Quiz Ended !"
        }
        isChecked = false
        return
    }

    let isSelected = false

    option.forEach((val, index) => {
        if (val.checked) {
            isSelected = true
            if (index === quizData[currentQuestion].correct) {
                userScore++;
                score.textContent = userScore;
            }
        }
    });

    if (!isSelected) {
        alert("Select an Option");
        return;
    }

    if (!isChecked) {
        option.forEach((val, index) => {
            if (val.checked) {
                if (index === quizData[currentQuestion].correct) {
                    ans[index].classList.add("correctAns")
                } else {
                    ans[index].classList.add("incorrectAns");
                    ans[quizData[currentQuestion].correct].classList.add("correctAns");
                }
            }
        })
        isChecked = true
        return;
    }
})

loadQuestion();
