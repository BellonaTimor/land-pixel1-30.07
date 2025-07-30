document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const phone = e.target.phone.value.trim();

  const message = `Нове замовлення:\nІм'я: ${name}\nТелефон: ${phone}`;
  const token = '7952709358:AAGBROYbyP9c4IZZ5Q-TaXWEQbIfc-oOfRE';
  const chat_id = '714440492';

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chat_id, text: message })
  })
.then(response => {
  if (response.ok) {
    fbq('track', 'Lead'); // 🔴 Піксель Facebook
    alert("✅ Заявка успішно надіслана! Очікуйте дзвінка.");
    e.target.reset();
  } else {
    alert("❌ Сталася помилка. Спробуйте пізніше.");
  }
});
});
