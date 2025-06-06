const img = document.querySelector('.Eid-container img');
const message = document.querySelector('.message');
const messages = [
  "عيدكم مبارك وكل عام وأنتم بخير! 🎉",
  "فرحة العيد ما تكمل إلا بوجودكم 💖",
  "كل عيد وأنتم إلى الله أقرب ✨"
];

img.addEventListener('click', () => {
  const random = Math.floor(Math.random() * messages.length);
  message.textContent = messages[random];

 
  message.classList.toggle('show');
});
