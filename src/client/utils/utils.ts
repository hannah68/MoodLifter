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

export const capitaliseFirstLetter = (name: string) => name.replace(/\b\w/g, (c) => c.toUpperCase());

const happyArray : Array<string>= ['Happy', 'Relieved', 'Romantic', 'Proud', 'Neutral', 'Bored', 'Excited'];

export const iconStyle = {color: '#d77283'};
export const iconStyleSize = {fontSize: '1.3rem', color: '#d77283'};

export const existFeelings = (feelingArr:  Array<string>) : boolean => {
    const res = feelingArr.every(feeling => {
        return happyArray.includes(feeling);
    })
    return res;
}

export const uniqueArrHandler = (arr: any) => {
	const ArrOfString = arr.map((obj:any) => {
		return JSON.stringify(obj);
	});

	const uniqueArrOfString = [...new Set(ArrOfString)];

	const uniqueArrOfObj = uniqueArrOfString.map((obj: any) => {
		return JSON.parse(obj);
	});

    return uniqueArrOfObj
};

