// Chatbot Knowledge Base
const chatbotKnowledgeBase = {
    'interview setup': 'To set up an interview, go to the Interview Setup page and select your role and preferences.',
    'premium plan': 'The Premium Plan offers unlimited interviews and access to advanced features. You can upgrade on the Premium Purchase page.',
    'profile settings': 'You can update your profile information, including your name and dream company, on the Profile Settings page.',
    'contact us': 'If you have any issues, you can reach out to us via the Contact Us page.',
    'dashboard': 'The dashboard provides an overview of your progress, subscription status, and quick actions.',
    'reviews': 'You can view client reviews on the Client Reviews page to see how others have benefited from our platform.',
    'features': 'Our platform offers AI-driven interview simulations, progress tracking, and personalized feedback to help you succeed.',
    'subscription': 'You can manage your subscription and upgrade to premium for unlimited interviews on the Premium Purchase page.',
    'help': 'I am here to assist you with any questions about the website or its features. Just ask!'
};

// Text-to-Speech Functionality
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
}

// Chatbot Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Chatbot script initialized');

    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    if (chatbotToggle && chatbotWindow && chatbotClose && chatbotInput && chatbotMessages) {
        chatbotToggle.addEventListener('click', () => {
            console.log('Chatbot toggle clicked');
            chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'block' : 'none';
        });

        chatbotClose.addEventListener('click', () => {
            console.log('Chatbot close clicked');
            chatbotWindow.style.display = 'none';
        });

        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && chatbotInput.value.trim() !== '') {
                const userMessage = chatbotInput.value.toLowerCase();
                const userMessageDiv = document.createElement('div');
                userMessageDiv.className = 'text-sm text-primary-800 text-right';
                userMessageDiv.textContent = chatbotInput.value;
                chatbotMessages.appendChild(userMessageDiv);

                let botReply = 'I am sorry, I am not sure how to help with that. Please try rephrasing your question.';

                for (const key in chatbotKnowledgeBase) {
                    if (userMessage.includes(key)) {
                        botReply = chatbotKnowledgeBase[key];
                        break;
                    }
                }

                const botReplyDiv = document.createElement('div');
                botReplyDiv.className = 'text-sm text-secondary-700';
                botReplyDiv.textContent = botReply;
                chatbotMessages.appendChild(botReplyDiv);

                // Speak the bot's reply
                speakText(botReply);

                chatbotInput.value = '';
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        });
    } else {
        console.error('Chatbot elements not found on this page');
    }
});
