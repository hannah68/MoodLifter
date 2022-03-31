const today = new Date();

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const month = monthNames[today.getMonth()];
const day = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();

const getTodayDate = (month: string, day: number, hour: string | number, minute: string | number) => {
    if(hour < 10){
        let h = '0' + hour;
        return `${day} ${month}, ${h}:${minute}`
    }
    if(minute < 10){
        let m = '0' + minute;
        return `${day} ${month}, ${hour}:${m}`
    }
    if(day < 10){
        let d = '0' + day;
        return `${d} ${month}, ${hour}:${minute}`
    }
    return `${day} ${month}, ${hour}:${minute}`
}

export const todayDate = getTodayDate(month, day, hour, minute);





