// Enhanced Intro.js tour for Premium Purchase page
// Covers all main features and functions

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('ai_interview_tour_premium')) {
        introJs()
            .setOptions({
                steps: [
                    { intro: "Unlock premium features for the best experience!" },
                    { element: document.querySelector('nav.flex'), intro: "Breadcrumb navigation: See where you are and go back to the dashboard." },
                    { element: document.querySelector('#subscription-plans'), intro: "Choose your preferred subscription plan here." },
                    { element: document.querySelector('.plan-card'), intro: "See all the features included in each plan." },
                    { element: document.querySelector('.select-plan-btn'), intro: "Click to select and purchase your plan." },
                    { element: document.querySelector('.payment-method'), intro: "Select your payment method here." },
                    { element: document.querySelector('.support-link') || document.querySelector('footer'), intro: "Need help? Contact our support team anytime." }
                ],
                showProgress: true,
                showBullets: false,
                exitOnOverlayClick: false,
                nextLabel: 'Next',
                prevLabel: 'Back',
                doneLabel: 'Finish'
            })
            .oncomplete(function() { localStorage.setItem('ai_interview_tour_premium', 'yes'); })
            .onexit(function() { localStorage.setItem('ai_interview_tour_premium', 'yes'); })
            .start();
    }
});
