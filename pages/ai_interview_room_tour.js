// Enhanced Intro.js tour for AI Interview Room page
// Covers all main features and functions

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('ai_interview_tour_room')) {
        introJs()
            .setOptions({
                steps: [
                    { intro: "Welcome to your AI Interview Room! Let's explore all the features." },
                    { element: document.querySelector('#question-counter'), intro: "Track your current question number here." },
                    { element: document.querySelector('#difficulty-indicator'), intro: "See the difficulty level of your interview." },
                    { element: document.querySelector('#timer-display'), intro: "Keep an eye on your interview timer." },
                    { element: document.querySelector('#connection-status'), intro: "Check your connection status here." },
                    { element: document.querySelector('#avatar-container'), intro: "Meet your AI interviewer! 3D avatar and webcam integration." },
                    { element: document.querySelector('#webcam-container'), intro: "Your webcam feed for real-time analysis and feedback." },
                    { element: document.querySelector('#current-question'), intro: "Read your current interview question here." },
                    { element: document.querySelector('#repeat-question-btn'), intro: "Repeat the question if you need to hear it again." },
                    { element: document.querySelector('#start-recording-btn'), intro: "Start answering using your voice (speech-to-text supported)." },
                    { element: document.querySelector('#stop-recording-btn'), intro: "Stop your answer recording here." },
                    { element: document.querySelector('#next-question-btn'), intro: "Go to the next question when ready." },
                    { element: document.querySelector('#transcription-container'), intro: "See your real-time answer transcription and accuracy." },
                    { element: document.querySelector('#feedback-hints'), intro: "Live feedback and improvement hints will appear here." },
                    { element: document.querySelector('#premium-features'), intro: "Premium users get extra features and performance stats here." },
                    { element: document.querySelector('#exit-modal'), intro: "Exit or end your interview session anytime." }
                ],
                showProgress: true,
                showBullets: false,
                exitOnOverlayClick: false,
                nextLabel: 'Next',
                prevLabel: 'Back',
                doneLabel: 'Finish'
            })
            .oncomplete(function() { localStorage.setItem('ai_interview_tour_room', 'yes'); })
            .onexit(function() { localStorage.setItem('ai_interview_tour_room', 'yes'); })
            .start();
    }
});
