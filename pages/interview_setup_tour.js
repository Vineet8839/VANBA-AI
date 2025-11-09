// Enhanced Intro.js tour for Interview Setup page
// Covers all main features and functions

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('ai_interview_tour_setup')) {
        introJs()
            .setOptions({
                steps: [
                    { intro: "Welcome to Interview Setup! Let's configure your AI interview experience." },
                    { element: document.querySelector('nav[aria-label="Breadcrumb"]'), intro: "Breadcrumb navigation: See where you are and go back to the dashboard." },
                    { element: document.querySelector('.progress-step'), intro: "Track your setup progress here." },
                    { element: document.querySelector('#job-search'), intro: "Search and select your target job role for personalized questions." },
                    { element: document.querySelector('#job-role'), intro: "Choose your job role from this dropdown." },
                    { element: document.querySelector('.difficulty-card'), intro: "Pick your interview difficulty level: Basic, Intermediate, or Advanced." },
                    { element: document.querySelector('.upload-area'), intro: "Upload your resume or supporting documents here (optional)." },
                    { element: document.querySelector('.feature-list'), intro: "See the features and benefits of your selected setup." },
                    { element: document.querySelector('button[type="submit"]'), intro: "Click here to start your AI interview!" }
                ],
                showProgress: true,
                showBullets: false,
                exitOnOverlayClick: false,
                nextLabel: 'Next',
                prevLabel: 'Back',
                doneLabel: 'Finish'
            })
            .oncomplete(function() { localStorage.setItem('ai_interview_tour_setup', 'yes'); })
            .onexit(function() { localStorage.setItem('ai_interview_tour_setup', 'yes'); })
            .start();
    }
});
