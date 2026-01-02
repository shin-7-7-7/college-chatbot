function sendMessage() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    if (input === "") return;

    chatBox.innerHTML += `<div class="user"><b>You:</b> ${input}</div>`;

    let response = "Sorry, I didn't understand. Please ask about admission, courses, fees, or contact.";

    if (input.includes("admission")) {
        response = "Admissions are open from June to August. Apply online through the college website.";
    } 
    else if (input.includes("courses")) {
        response = "We offer BSc IT, BCA, BCom, and MSc IT courses.";
    } 
    else if (input.includes("fees")) {
        response = "The average annual fee for BSc IT is ₹45,000.";
    } 
    else if (input.includes("timing")) {
        response = "College timings are from 9:30 AM to 4:30 PM.";
    } 
    else if (input.includes("contact")) {
        response = "You can contact us at contact@college.edu or call 9876543210.";
    }

    chatBox.innerHTML += `<div class="bot"><b>Bot:</b> ${response}</div>`;

    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
