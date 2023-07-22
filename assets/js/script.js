/* ========================================= * 
		        BEST VIEWED FULLSCREEN
   https://codepen.io/ig_design/full/KKVQpVP
 * ========================================= */


   function updateClock(clockId) {
    // Get the current date and time
    const now = new Date();

    // Extract the time components (hours, minutes, seconds)
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine if it's AM or PM
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Format the time in HH:MM:SS AM/PM format
    const formattedTime = `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)} ${amPm}`;

    // Extract the date components (day, month, year)
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are 0-based, so we add 1
    const year = now.getFullYear();

    // Format the date in DD/MM/YYYY format
    const formattedDate = `${formatTwoDigits(day)}/${formatTwoDigits(month)}/${year}`;

    // Update the clock display
    const clockElement = document.getElementById(clockId);
    clockElement.innerHTML = `${formattedDate}<br>${formattedTime}`;
}

// Helper function to format digits with leading zero if needed (e.g., 1 -> 01, 10 -> 10)
function formatTwoDigits(number) {
    return number.toString().padStart(2, '0');
}

// Call the updateClock function every second for both clocks
setInterval(() => updateClock('clock'), 1000);
setInterval(() => updateClock('clock1'), 1000);