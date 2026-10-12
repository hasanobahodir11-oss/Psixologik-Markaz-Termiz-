const BOT_TOKEN = '8614132242:AAGfy5ZIpR56tWuIa3ere7oKq-ZH9-LN4fk';
const CHAT_ID = '1090733464';

document.getElementById('qabulForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const format = document.getElementById('format').value;

  const text = `📌 <b>Yangi qabul arizasi:</b>\n\n` +
               `👤 <b>Ismi:</b> ${name}\n` +
               `📞 <b>Tel:</b> ${phone}\n` +
               `🛠 <b>Xizmat:</b> ${service}\n` +
               `📅 <b>Sana:</b> ${date}\n` +
               `💻 <b>Format:</b> ${format}`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: 'HTML'
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      alert("Arizangiz muvaffaqiyatli yuborildi!");
      this.reset();
    } else {
      alert("Xatolik yuz berdi! Botga /start bosganingizni tekshiring.");
    }
  })
  .catch(error => {
    console.error('Xatolik:', error);
    alert("Internet ulanishida xatolik yuz berdi.");
  });
});