const timer = (id,deadline) => {
    function getTimeRemaining (endTime) {
        const t =  Date.parse(endTime) - new Date(),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/(1000/60)) % 60),
        hours = Math.floor((t/(1000 * 60 * 60)) % 24),
        days = Math.floor((t/(1000 * 60 * 60 * 24)))

        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    };
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);
            if (t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval)
            }
        }
    };
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        };
    };
    setClock(id, deadline)
}
export default timer