

const timer = {
    start() {
        const startTime = Date.now();

        setInterval(() => {
            const currentTime = Date.now();
            console.log(currentTime - startTime);
        }, 1000);
    }
};

timer.start();

// function updateClockface({ hours, mins, secs }) {
//     refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// function pad(value) {
//     return String(value).padStart(2, '0');
// }