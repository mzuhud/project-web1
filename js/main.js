const countdown = document.querySelector('.countdown');

//set launch date (ms)
const launchDate = new Date('may 24, 2020 13:00:00').getTime();

//update every second
const intvl = setInterval(() => {
    //Get todays date and time(ms)
    const now = new Date().getTime();

    //distance from now to the launch date
    const distance = launchDate - now;

    //time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    //if launch date passed
    if (distance < 0) {
        //stop countdown
        clearInterval(intvl);
        //styel and output text
        countdown.style.colour = '#17ab8';
        countdown.innerHTML = 'LAUNCHED!';
    }
}, 1000);