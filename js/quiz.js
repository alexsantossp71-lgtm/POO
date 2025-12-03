document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.getElementById('categories-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');

    // Elements for Quiz View
    const categoryTitle = document.getElementById('category-title');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');
    const currentQuestionNum = document.getElementById('current-question-num');
    const totalQuestionNum = document.getElementById('total-question-num');

    // Elements for Result View
    const scoreText = document.getElementById('score-text');
    const scoreMessage = document.getElementById('score-message');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

    let currentCategory = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];

    // Initialize Categories
    function initCategories() {
        categoriesContainer.innerHTML = '';
        quizData.forEach((block, index) => {
            const card = document.createElement('div');
            card.className = 'card quiz-card';
            card.innerHTML = `
                <div class="card-icon">
                    <i data-lucide="help-circle"></i>
                </div>
                <h3>${block.category}</h3>
                <p>10 Perguntas</p>
                <div class="card-footer">
                    <span class="card-tag">Quiz</span>
                    <i data-lucide="play" class="card-arrow"></i>
                </div>
            `;
            card.addEventListener('click', () => startQuiz(index));
            categoriesContainer.appendChild(card);
        });
        lucide.createIcons();
    }

    function startQuiz(categoryIndex) {
        currentCategory = quizData[categoryIndex];
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];

        document.getElementById('categories-section').style.display = 'none';
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';

        categoryTitle.textContent = currentCategory.category;
        totalQuestionNum.textContent = currentCategory.questions.length;

        loadQuestion();
    }

    function loadQuestion() {
        const question = currentCategory.questions[currentQuestionIndex];

        currentQuestionNum.textContent = currentQuestionIndex + 1;
        const progress = ((currentQuestionIndex) / currentCategory.questions.length) * 100;
        progressBar.style.width = `${progress}%`;

        questionText.textContent = question.q;
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selectedIndex) {
        const question = currentCategory.questions[currentQuestionIndex];
        const options = optionsContainer.children;

        // Disable all buttons
        for (let btn of options) {
            btn.disabled = true;
        }

        // Check answer
        if (selectedIndex === question.answer) {
            options[selectedIndex].classList.add('correct');
            score++;
        } else {
            options[selectedIndex].classList.add('wrong');
            options[question.answer].classList.add('correct');
        }

        // Wait and go to next
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentCategory.questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 1500);
    }

    function showResults() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        scoreText.textContent = `${score} / ${currentCategory.questions.length}`;

        if (score === 10) {
            scoreMessage.textContent = "Perfeito! Você é um mestre em Java! 🏆";
        } else if (score >= 7) {
            scoreMessage.textContent = "Muito bom! Você domina o assunto. 👏";
        } else if (score >= 5) {
            scoreMessage.textContent = "Bom, mas pode melhorar. Continue estudando! 📚";
        } else {
            scoreMessage.textContent = "Que tal revisar o conteúdo e tentar de novo? 💪";
        }
    }

    restartBtn.addEventListener('click', () => {
        document.getElementById('categories-section').style.display = 'block';
        resultContainer.style.display = 'none';
    });

    initCategories();
});
