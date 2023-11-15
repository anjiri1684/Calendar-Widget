// month abbreviations
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// get current date values
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

// set month and year
document.querySelector('.calendar__month').innerText = months[currentDate.getMonth()];
document.querySelector('.calendar__year').innerText = currentYear;

// create grid of days
let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let week = document.createElement('div');
week.classList.add('calendar__day-numbers-row');

for (i = 1; i <= daysInMonth; i++) {
	let day = document.createElement('span');
	day.classList.add('calendar__day-number');
	day.innerText = i;
	(i == currentDay) && day.classList.add('calendar__day-number--current');
	week.append(day);

	if (new Date(currentYear, currentMonth, i).getDay() == 6 || i == daysInMonth) {
		document.querySelector('.calendar__day-numbers').append(week);

		if (i != daysInMonth) {
			week = document.createElement('div');
			week.classList.add('calendar__day-numbers-row');
		}
	}
}