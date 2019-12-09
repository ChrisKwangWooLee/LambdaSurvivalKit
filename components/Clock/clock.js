/*
    <div class="lambda-clock">
        <p class='lambda-dayOfWeek'>Mon</h2>
        <p class='lambda-time'>12:25 <span>PM</span></p>
    </div>

*/

// NOTE: current js depends on local computer's time stamp
// In the next iteration, consider using an API to 

// Component Constructor
function createClock() {
    // create element
    const lambdaClock = document.createElement('div');
    const lambdaDayOfWeek = document.createElement('p');
    const lambdaTime = document.createElement('p');
    const ampm = document.createElement('span');

    // add class
    lambdaClock.classList.add('lambda-clock');
    lambdaDayOfWeek.classList.add('lambda-dayOfWeek');
    lambdaTime.classList.add('lambda-time');

    // Convert local time -> UTC time -> SF time
    var date = new Date();    
    var utc_offset = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() + utc_offset);
    var sf_offset = 8 * 60 * (-1);
    date.setMinutes(date.getMinutes() + sf_offset);

    // set content
    dateArr = date.toString().split(' ');

        // set Day of week
        lambdaDayOfWeek.textContent = dateArr[0];

        // set AM/PM and time
        let dow = dateArr[0];
        let hour = Number(dateArr[4].split(':')[0]);
        let minutes = dateArr[4].split(':')[1];
        if (hour >= 0 && hour < 12) {
            ampm.textContent = 'AM';
            lambdaTime.textContent = `${hour.toString()}:${minutes} `;
        } else {
            hour = hour - 12;
            ampm.textContent = 'PM';
            lambdaTime.textContent = `${hour.toString()}:${minutes}`;
        }

    // Change color of clock test based on time
    // Work day (Monday - Friday) / Work time (8am - 6pm)
    let newHour = Number(dateArr[4].split(':')[0]);
    let workday = (dow === 'Mon' || dow === 'Tue' || dow === 'Wed' || dow === 'Thur' || dow === 'Fri');
    let worktime = (newHour >= 8 && newHour <= 18);
    
    if (workday && worktime) {  // green on work day
        lambdaDayOfWeek.style.color = '#6BCD5B';
        lambdaTime.style.color = '#6BCD5B';
        ampm.style.color = '#6BCD5B';
    } else { // grey on off day
        lambdaDayOfWeek.style.color = '#A3A3A3';
        lambdaTime.style.color = '#A3A3A3';
        ampm.style.color = '#A3A3A3';
    }
    
    // append
    lambdaTime.appendChild(ampm);
    lambdaClock.appendChild(lambdaDayOfWeek);
    lambdaClock.appendChild(lambdaTime);

    return lambdaClock;
}


const clockContainer = document.querySelector('.clock-container');
clockContainer.appendChild(createClock());

function clock_cb() {
    const clockContainer = document.querySelector('.clock-container');
    const lambdaClock = document.querySelector('.lambda-clock')
    clockContainer.removeChild(lambdaClock);
    clockContainer.appendChild(createClock());
}

window.setInterval(clock_cb, 1000)