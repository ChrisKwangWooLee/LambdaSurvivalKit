import React from 'react';

function Clock() {

    // Convert local time -> UTC time -> SF time
    var date = new Date();    
    var utc_offset = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() + utc_offset);
    var sf_offset = 8 * 60 * (-1);
    date.setMinutes(date.getMinutes() + sf_offset);
    
    // Set clock variables
    let dateArr = date.toString().split(' ');
        // set Day of week
        let dayOfWeek = dateArr[0];

        // set AM/PM and time
        let dow = dateArr[0];
        let hour = Number(dateArr[4].split(':')[0]);
        let minutes = dateArr[4].split(':')[1];
        let lambdaTime;
        let ampm;
        if (hour >= 0 && hour < 12) {
            ampm = 'AM';
            lambdaTime = `${hour.toString()}:${minutes} `;
        } else {
            hour = hour - 12;
            ampm = 'PM';
            lambdaTime = `${hour.toString()}:${minutes}`;
        }

    // Change color of clock test based on time
    // Work day (Monday - Friday) / Work time (8am - 6pm)
    let newHour = Number(dateArr[4].split(':')[0]);
    let workday = (dow === 'Mon' || dow === 'Tue' || dow === 'Wed' || dow === 'Thur' || dow === 'Fri');
    let worktime = (newHour >= 8 && newHour <= 17);

    function setClockColor(workday, worktime) {
        if (workday && worktime) {
            return {
                color: "#6BCD5B"
            }
        } else {
            return {
                color: "#A3A3A3"
            }
        }
    }
    return (
        <div className="lambda-clock">
            <p className='lambda-dayOfWeek' 
               style={setClockColor(workday, worktime)}>
                   {dayOfWeek}
            </p>
            <p className='lambda-time' style={setClockColor(workday, worktime)}>
                {lambdaTime}
                <span style={setClockColor(workday, worktime)}>{ampm}</span>
            </p>
        </div>
    )
}

export default Clock;