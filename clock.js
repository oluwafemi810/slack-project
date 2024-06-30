function updateClock() {
    const clockElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const dateElement = document.querySelector('[data-testid="currentDate"]');
    const dayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = date;
    dayElement.textContent = day;
}

setInterval(updateClock, 1000);
updateClock();  // Initial call to display the clock immediately
