const img = document.querySelector('.Eid-container img');
const message = document.querySelector('.message');
const messages = [
  "عيدكم مبارك وكل عام وأنتم بخير! 🎉",
  "فرحة العيد ما تكمل إلا بوجودكم 💖",
  "كل عيد وأنتم إلى الله أقرب ✨",
  "أدام الله عليكم الأفراح وأشعل قلوبكم بالسعادة في هذا العيد المبارك 🎈",
  "عيد أضحى سعيد، جعل الله أيامكم كلها فرح وسعادة ومحبة 🎁",
  "نسأل الله أن يتقبل منا ومنكم صالح الأعمال، وكل عام وأنتم بخير 🌟",
  "أضحى مبارك، عيد ملؤه السلام والبركة على الجميع 💫"
];

img.addEventListener('click', () => {
  const random = Math.floor(Math.random() * messages.length);
  message.textContent = messages[random];

 
  message.classList.toggle('show');
});
