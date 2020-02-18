// export const weekDays = [
//   "maandag",
//   "dinsdag",
//   "woensdag",
//   "donderdag",
//   "vrijdag",
//   "zaterdag",
//   "zondag"
// ];

// export const weekDaysShort = weekDays.map(weekDay => weekDay.substr(0, 2));

// export const months = [
//   "januari",
//   "februari",
//   "maart",
//   "april",
//   "mei",
//   "juni",
//   "juli",
//   "augustus",
//   "september",
//   "oktober",
//   "november",
//   "december"
// ];

// export let monthsShort = months.map(month => month.substr(0, 3));
// monthsShort[2] = "mrt";

const human = {
	weekday: 'long',
	day: 'numeric',
	month: 'long'
}

export const formatDate = date =>
	new Date(date).toLocaleDateString('nl-BE', human)
