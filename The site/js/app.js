/**
 * SEC_FOR_AI Pentesting Learning Site
 * JavaScript functionality for interactive features
 */

(function() {
    'use strict';

    // ==================================
    // Theme Toggle (Dark/Light Mode)
    // ==================================
    const ThemeManager = {
        STORAGE_KEY: 'pentest_theme',

        init() {
            this.toggleBtn = document.getElementById('themeToggle');
            if (this.toggleBtn) {
                this.toggleBtn.addEventListener('click', () => this.toggleTheme());
            }

            // Check saved theme or system preference
            const savedTheme = localStorage.getItem(this.STORAGE_KEY);
            if (savedTheme) {
                this.setTheme(savedTheme);
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.setTheme('dark');
            } else {
                this.setTheme('light');
            }
        },

        toggleTheme() {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        },

        setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(this.STORAGE_KEY, theme);

            // Update icon
            if (this.toggleBtn) {
                const iconLight = this.toggleBtn.querySelector('.icon-light');
                const iconDark = this.toggleBtn.querySelector('.icon-dark');

                if (theme === 'dark') {
                    iconLight.style.display = 'none';
                    iconDark.style.display = 'block';
                } else {
                    iconLight.style.display = 'block';
                    iconDark.style.display = 'none';
                }
            }
        },

        getTheme() {
            return document.documentElement.getAttribute('data-theme') || 'light';
        }
    };

    // ==================================
    // Dropdown Navigation
    // ==================================
    const NavManager = {
        init() {
            const dropdownToggle = document.getElementById('subjectsDropdown');
            if (dropdownToggle) {
                // Click to open dropdown
                dropdownToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleDropdown(dropdownToggle);
                });

                // Close dropdown when clicking outside
                document.addEventListener('click', (e) => {
                    if (!dropdownToggle.contains(e.target)) {
                        this.closeDropdown(dropdownToggle);
                    }
                });
            }

            // Active nav link highlighting
            this.highlightActiveLink();
        },

        toggleDropdown(toggle) {
            const menu = toggle.parentElement.querySelector('.dropdown-menu');
            const isOpen = menu.style.display === 'block';

            if (isOpen) {
                this.closeDropdown(toggle);
            } else {
                // Close other dropdowns
                document.querySelectorAll('.dropdown-menu').forEach(el => {
                    if (el !== menu) el.style.display = 'none';
                });
                menu.style.display = 'block';
            }
        },

        closeDropdown(toggle) {
            const menu = toggle.parentElement.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = 'none';
            }
        },

        highlightActiveLink() {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
                    link.classList.add('active');
                }
            });
        }
    };

    // ==================================
    // Search Functionality
    // ==================================
    const SearchManager = {
        init() {
            this.widgetSearch = document.getElementById('widgetSearch');
            this.siteSearch = document.getElementById('searchInput');

            if (this.widgetSearch) {
                this.widgetSearch.addEventListener('input', (e) => {
                    this.handleSearch(e.target.value);
                });
            }

            if (this.siteSearch) {
                this.siteSearch.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const value = this.siteSearch.value.trim();
                    if (value) {
                        window.location.href = `search.html?q=${encodeURIComponent(value)}`;
                    }
                });
            }
        },

        handleSearch(query) {
            if (!query) return;

            // Show toast notification
            this.showToast(`Searching for: ${query}`);

            // For now, redirect to a search page (will be created)
            // In a real implementation, this would filter the content
        },

        showToast(message) {
            // Simple toast notification
            const toast = document.createElement('div');
            toast.className = 'search-toast';
            toast.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: #2F6BFF;
                color: white;
                padding: 12px 20px;
                border-radius: var(--radius-md);
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            toast.textContent = message;

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }
    };

    // ==================================
    // Quiz System
    // ==================================
    const QuizManager = {
        questions: [],
        currentQuestion: 0,
        score: 0,
        totalQuestions: 0,

        init() {
            this.questions = this.loadQuestions();
            this.totalQuestions = this.questions.length;

            if (this.totalQuestions === 0) return;

            this.renderQuiz();
            this.bindEvents();
        },

        loadQuestions() {
            // This will be populated dynamically based on which page
            const quizData = document.querySelector('[data-quiz]');
            if (quizData) {
                try {
                    return JSON.parse(quizData.dataset.quiz);
                } catch (e) {
                    console.error('Failed to parse quiz data:', e);
                }
            }
            return [];
        },

        renderQuiz() {
            const quizContainer = document.getElementById('quiz-container');
            if (!quizContainer || this.questions.length === 0) return;

            let html = `<div class="quiz-section">
                <h3 class="quiz-title">Check Your Understanding</h3>`;

            this.questions.forEach((q, index) => {
                html += this.renderQuestion(q, index);
            });

            html += `
                <div class="quiz-controls">
                    <button class="btn btn-primary" id="submitQuiz">Submit Answers</button>
                    <span class="quiz-score" id="quizScore">Score: 0/${this.totalQuestions}</span>
                </div>
                <div class="quiz-feedback" id="quizFeedback" style="margin-top:16px; font-weight:bold;"></div>
            </div>`;

            quizContainer.innerHTML = html;
        },

        renderQuestion(q, index) {
            const optionsHtml = q.options.map((opt, i) => `
                <label class="quiz-option" data-question="${index}" data-option="${i}">
                    <input type="radio" name="q${index}" value="${i}">
                    ${opt.text}
                </label>
            `).join('');

            return `
                <div class="quiz-question" id="question-${index}">
                    <div class="quiz-question-number">Question ${index + 1}</div>
                    <div class="quiz-question-text">${q.question}</div>
                    <div class="quiz-options">
                        ${optionsHtml}
                    </div>
                    <div class="quiz-feedback" id="feedback-${index}"></div>
                </div>
            `;
        },

        bindEvents() {
            const submitBtn = document.getElementById('submitQuiz');
            if (submitBtn) {
                submitBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.checkAnswers();
                });
            }

            // Highlight selected option
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('quiz-option')) {
                    this.selectOption(e.target);
                }
            });
        },

        selectOption(optionLabel) {
            const selected = document.querySelector('.quiz-option.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
            optionLabel.classList.add('selected');
        },

        checkAnswers() {
            let score = 0;

            this.questions.forEach((q, index) => {
                const selected = document.querySelector(`input[name="q${index}"]:checked`);
                const feedbackEl = document.getElementById(`feedback-${index}`);
                const questionEl = document.getElementById(`question-${index}`);

                if (selected) {
                    const answer = parseInt(selected.value);
                    if (answer === q.correct) {
                        score++;
                        if (feedbackEl) {
                            feedbackEl.className = 'quiz-feedback correct';
                            feedbackEl.textContent = '✓ Correct! ' + (q.explanation || '');
                        }
                        questionEl.classList.add('correct');
                    } else {
                        if (feedbackEl) {
                            feedbackEl.className = 'quiz-feedback incorrect';
                            feedbackEl.textContent = '✗ Incorrect. ' + (q.explanation || '');
                        }
                    }
                }
            });

            this.score = score;
            this.updateScore();

            // Show final feedback
            const finalFeedback = document.getElementById('quizFeedback');
            if (finalFeedback) {
                const percentage = (score / this.totalQuestions) * 100;
                let message = '';

                if (percentage === 100) {
                    message = '🎉 Perfect score! You mastered this topic.';
                } else if (percentage >= 70) {
                    message = 'Great job! You have a solid understanding.';
                } else {
                    message = 'Keep studying! Review the content and try again.';
                }

                finalFeedback.textContent = `${message} Final Score: ${score}/${this.totalQuestions}`;
                finalFeedback.style.display = 'block';
                finalFeedback.style.marginTop = '24px';
            }
        },

        updateScore() {
            const scoreEl = document.getElementById('quizScore');
            if (scoreEl) {
                scoreEl.textContent = `Score: ${this.score}/${this.totalQuestions}`;
            }
        }
    };

    // ==================================
    // Search Toast Animation
    // ==================================
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    // ==================================
    // DOM Ready Handler
    // ==================================
    document.addEventListener('DOMContentLoaded', () => {
        ThemeManager.init();
        NavManager.init();
        SearchManager.init();
        QuizManager.init();

        console.log('Pentesting Learning Site initialized');
    });

})();
