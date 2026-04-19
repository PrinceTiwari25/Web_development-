from flask import Flask, render_template, request
import random

app = Flask(__name__)

# 🔥 LARGE QUESTION BANK (add more if you want)
quiz_bank = [
    {"question": "Capital of India?", "options": ["Delhi", "Mumbai", "Chennai", "Kolkata"], "answer": "Delhi"},
    {"question": "2 + 2 = ?", "options": ["3", "4", "5", "6"], "answer": "4"},
    {"question": "HTML stands for?", "options": ["Hyper Text Markup Language", "High Text Machine", "Hyper Tool", "None"], "answer": "Hyper Text Markup Language"},
    {"question": "Python is?", "options": ["Language", "Snake", "Game", "OS"], "answer": "Language"},
    {"question": "CSS used for?", "options": ["Styling", "Logic", "Database", "Server"], "answer": "Styling"},
    {"question": "JS used for?", "options": ["Frontend", "Backend", "Both", "None"], "answer": "Both"},
    {"question": "Flask is?", "options": ["Framework", "Language", "Database", "Tool"], "answer": "Framework"},
    {"question": "1 byte = ?", "options": ["8 bits", "4 bits", "16 bits", "32 bits"], "answer": "8 bits"},
    {"question": "CPU stands for?", "options": ["Central Processing Unit", "Control Unit", "Computer Unit", "None"], "answer": "Central Processing Unit"},
    {"question": "Which is DB?", "options": ["MySQL", "HTML", "CSS", "JS"], "answer": "MySQL"}
]

# Home
@app.route('/')
def home():
    return render_template('index.html')


# Quiz Page (random 5 questions every time)
@app.route('/quiz')
def quiz():
    global current_quiz
    
    # pick 5 random questions
    current_quiz = random.sample(quiz_bank, 5)

    return render_template('quiz.html', quiz=current_quiz)


# Result
@app.route('/result', methods=['POST'])
def result():
    score = 0

    for i in range(len(current_quiz)):
        selected = request.form.get(f"q{i}")
        if selected == current_quiz[i]['answer']:
            score += 1

    return render_template('result.html', score=score, total=len(current_quiz))


if __name__ == '__main__':
    app.run(debug=True)