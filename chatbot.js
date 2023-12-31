
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotContainer = document.getElementById('chatbot-container');
const questionSelect = document.getElementById('question-select');
const chatbotMessages = document.getElementById('chatbot-messages');


let isChatbotVisible = false;

chatbotIcon.addEventListener('click', () => {
  isChatbotVisible = !isChatbotVisible;
  chatbotContainer.style.display = isChatbotVisible ? 'block' : 'none';
});

function sendSelectedQuestion() {
  const selectedQuestion = questionSelect.value;
  sendMessage(selectedQuestion);
  // console.log("Yes");
}


function sendMessage(questionNumber) {
  const userMessage = document.createElement('div');
  userMessage.innerHTML = `<strong>You:</strong> ${getQuestionText(questionNumber)}`;
  chatbotMessages.appendChild(userMessage);

  const responseMessage = document.createElement('div');
  responseMessage.innerHTML = `<strong>SciAstra:</strong> ${getChatbotResponse(questionNumber)}`;
  chatbotMessages.appendChild(responseMessage);

  chatbotMessages.appendChild(document.createElement('br')); // Add space between messages
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getQuestionText(questionNumber) {
  switch (questionNumber) {
    case '1':
      return 'What is SciAstra';
    case '2':
      return 'Who are the target students of SciAstra';
    case '3':
      return 'Are there scholarships at SciAstra';
    case '4':
      return 'Which colleges can I get admission to after connecting with SciAstra';
    case '5':
      return 'What are the exams that I prepare for at SciAstra';
    case '6':
      return 'Where are the teachers from';
    case '7':
      return 'Are session recordings provided';
    case '8':
      return 'Are there mock tests available';
    case '9':
      return 'Is SciAstra recognized by the Government of India';
    case '10':
      return 'What\'s the contact email id';
    default:
      return '';
  }
}

function getChatbotResponse(questionNumber) {
  switch (questionNumber) {
    case '1':
      return 'SciAstra is the biggest community of science scholars in India for IISER Aptitude test (IAT), National Entrance Screening Test (NEST), ISI, CMI, and IACS';
    case '2':
      return 'At SciAstra, we guide students who want to become scientists and pursue research by helping them secure admissions in the top colleges for the same like IISER, NISER, CEBS, ICAR, CMI, etc.';
    case '3':
      return 'Scholarships are available up to Rs 4 lakh';
    case '4':
      return 'You can get admission to IISc Bengaluru, IIT Madras & 7 IISERs, NISER Bhubaneswar & CEBS Mumbai, ISI & CMI, ISI/IACS';
    case '5':
      return 'The exams you prepare for at SciAstra include IAT, IACS, NEST, IISC';
    case '6':
      return 'Teachers come from a variety of backgrounds, national and international like Harvard, California University, etc.';
    case '7':
      return 'Yes, session recordings are provided after enrollment';
    case '8':
      return 'Yes, SciAstra offers a variety of mock and practice tests';
    case '9':
      return 'Yes, SciAstra is recognized by the Government of India. It won the Global Student Entrepreneurship Award by EO Odisha';
    case '10':
      return 'You can contact us at support@sciastra.com';
    default:
      return 'I am sorry, I do not understand that question.';
  }

}

function closeChatbot() {
    isChatbotVisible = false;
    chatbotContainer.style.display = 'none';
}