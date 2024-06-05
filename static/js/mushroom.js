document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (message === '') return;

    displayMessage(message, 'user');
    input.value = '';

    const response = getResponse(message);
    displayMessage(response, 'bot');
}

function getResponse(message) {
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I am just a bot, but I am doing great!",
        "bye": "Goodbye! Have a great day!",
        "what is your accuracy score?" : "Mushroom Madness! has a accuracy of 94.91%"
    };

    const lowerCaseMessage = message.toLowerCase();
    return responses[lowerCaseMessage] || "Sorry, I do not understand that question.";
}

function displayMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}
