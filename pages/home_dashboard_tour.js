// Intro.js initialization for interactive tour
// This script assumes Intro.js CSS is loaded in the HTML

document.addEventListener('DOMContentLoaded', function() {
    // Only show the tour on first visit (optional, can use localStorage)
    if (!localStorage.getItem('ai_interview_tour_shown')) {
        introJs()
            .setOptions({
                steps: [
                    {
                        intro: "Welcome to the AI Interview Simulator! Let's take a quick tour."
                    },
                    {
                        element: document.querySelector('header'),
                        intro: "This is your main navigation bar. Access your profile, toggle theme, and more."
                    },
                    {
                        element: document.querySelector('.action-card'),
                        intro: "Here you can start a new interview simulation or access key features."
                    },
                    {
                        element: document.querySelector('.stats-counter'),
                        intro: "Track your progress and stats here."
                    },
                    {
                        element: document.querySelector('.premium-badge'),
                        intro: "Upgrade to premium for advanced features!"
                    },
                    {
                        element: document.querySelector('a[href="contact_us.html"]'),
                        intro: "Need help? Contact us anytime."
                    }
                ],
                showProgress: true,
                showBullets: false,
                exitOnOverlayClick: false,
                nextLabel: 'Next',
                prevLabel: 'Back',
                doneLabel: 'Finish'
            })
            .oncomplete(function() {
                localStorage.setItem('ai_interview_tour_shown', 'yes');
            })
            .onexit(function() {
                localStorage.setItem('ai_interview_tour_shown', 'yes');
            })
            .start();
    }
});
