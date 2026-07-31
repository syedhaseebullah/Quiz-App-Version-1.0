# 🇵🇰 Pakistan General Knowledge - Quiz App

A dynamic, interactive Quiz Application built using Vanilla JavaScript, HTML5, and CSS3. This project features multiple-choice questions focusing on Pakistan's history, geography, and national facts.

---

## 🛠️ Features & Highlights

* **Dynamic Question Rendering:** Questions and multiple-choice options load dynamically from a JavaScript object array.

* **Smart Next/Submit Logic:** Uses a single button state to first validate/submit the answer and then proceed to the next question.

* **Instant Visual Feedback:** Highlights the selected option as green (`correctAns`) if correct, or red (`incorrectAns`) along with revealing the correct answer if wrong.

* **Real-time Score Counter:** Updates user score live as correct answers are selected.

* **Validation Check:** Alerts the user if no option is selected before clicking next.

* **Progress Indicator:** Displays current question count out of total questions (e.g., `1/10`).

* **Responsive Layout:** Clean and mobile-friendly UI that adapts smoothly across different screen sizes.

---

## 💻 Code Structure & Logic Overview

The core app logic revolves around state management:

* **`quizData` Array:** Stores all questions, options, and index-based correct answers.

* **DOM Selection:** Targets active elements for dynamic UI updates (`question`, `score`, `optionText`).

* **`loadQuestion()` Function:** Clears previous inputs and populates the DOM with new question details.

* **`nextBtn` Event Listener:** Handles selection validation, score incrementing, class toggling for correct/incorrect styling, and transitioning between questions.

---

## 🚀 Tech Stack

* **HTML5:** Semantic structure for quiz card and radio choices.
* **CSS3:** Custom styles for options, layout responsiveness, and feedback classes (`.correctAns`, `.incorrectAns`).
* **JavaScript (ES6+):** Array methods (`forEach`), DOM manipulation, state flags (`isChecked`), and event handling.

---

## 📝 Developer Note & Learning Journey

> "This repository is a part of my Web Development learning journey. 
> 
> - **Self-Written Code:** All JavaScript logic, DOM manipulation techniques, and state validation were hand-written by me to strengthen core fundamentals.
> - **AI Collaboration:** AI was strictly utilized as a learning mentor—helping me understand concepts, structure README documentation, and debug logic flow, while keeping the actual implementation 100% original."

---

## 🌐 Live Demo

You can try out the live working application here:
👉 **[Play Pakistan GK Quiz](https://syedhaseebullah.github.io/Quiz-App/)**