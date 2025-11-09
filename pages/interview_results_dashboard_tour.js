// Enhanced Intro.js tour for Interview Results Dashboard page
// Covers all main features and functions

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('ai_interview_tour_results')) {
        introJs()
            .setOptions({
                steps: [
                    { intro: "Welcome to your Interview Results Dashboard! Let's review your performance and feedback." },
                    { element: document.querySelector('#congratulations-section'), intro: "See your interview completion status and summary here." },
                    { element: document.querySelector('#score-section'), intro: "Your overall performance score and percentile." },
                    { element: document.querySelector('#metrics-section'), intro: "Detailed breakdown of your skills and metrics." },
                    { element: document.querySelector('#recommendations-section'), intro: "AI-generated recommendations for improvement." },
                    { element: document.querySelector('.review-answers-btn'), intro: "Review your answers and see model suggestions." }
                ],
                showProgress: true,
                showBullets: false,
                exitOnOverlayClick: false,
                nextLabel: 'Next',
                prevLabel: 'Back',
                doneLabel: 'Finish'
            })
            .oncomplete(function() { localStorage.setItem('ai_interview_tour_results', 'yes'); })
            .onexit(function() { localStorage.setItem('ai_interview_tour_results', 'yes'); })
            .start();
    }
});
