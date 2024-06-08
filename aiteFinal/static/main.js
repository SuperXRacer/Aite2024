// ... (your imports and GoogleGenerativeAI setup remain the same) ...
const conv = new showdown.Converter();

const genAI = new GoogleGenerativeAI("AIzaSyDdqSig6oHWqAiYAywQyfroQT-2YhOTJOc");

const gen_model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    // ... (your system instructions remain the same)
});
const chat = gen_model.startChat({
    generationConfig: {
        temperature: 0.5,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    },
}); 

const chatGemini = async (message) => {
    addMessage(message, "outgoing");
    let res = await chat.sendMessage(message);
    res = await res.response;
    console.log(res);

    // Directly use the response text without converting with Showdown
    addMessage(res.text, "incoming"); 
};


// Add this function to handle scrolling to the bottom
function scrollToBottom() {
    const chatbox = document.querySelector('.chatbox');
    chatbox.scrollTop = chatbox.scrollHeight;
}

const addMessage = (msg, direction) => {
    const chatbox = document.querySelector('.chatbox');
    const li = document.createElement('li');
    li.classList.add('chat', `chat-${direction}`);

    // Create a new paragraph element and append text to it
    const p = document.createElement('p');
    p.textContent = msg; // Use textContent instead of innerHTML
    li.appendChild(p);

    chatbox.appendChild(li);
    scrollToBottom();
};

// Get and display user's name (replace with actual logic to fetch it)
const userNameElement = document.getElementById('userName');
const userName = "John Doe"; // Fetch the user's name from your system
userNameElement.textContent = userName; 

const messageInput = document.getElementById("chat");
const sendBtn = document.getElementById("btn");

sendBtn.addEventListener("click", function () {
    const message = messageInput.value;
    chatGemini(message);
    messageInput.value = "";
});
