function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours} : ${minutes}`;
}

updateClock(); // первый вызов
setInterval(updateClock, 1000); // обновление каждую секунду