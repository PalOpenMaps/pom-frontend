export const locs_url =
"https://docs.google.com/spreadsheets/d/1LejOouylx6u_TKF_1BxvV_B7uI34M4zIWyoc8LozATo/gviz/tq?tqx=out%3Acsv&sheet=database";
export const layers_url = "https://palopenmaps.org/api/layers/?format=json";
export const sheets_url = "https://palopenmaps.org/api/sheets/?format=json";

export const statuses = {
	Remaining: {
		name: "Remaining",
		color: "#7ac943",
		selected: true,
	},
	Depopulated: {
		name: "Depopulated",
		color: "#fcee21",
		selected: true,
	},
	Appropriated: {
		name: "Depopulated & appropriated",
		color: "#f7931e",
		selected: true,
	},
	"Built over": {
		name: "Depopulated & built over",
		color: "#ff0000",
		selected: true,
	},
	Abandoned: {
		name: "Abandoned",
		color: "#0099ff",
		selected: false,
	},
	"Newly built": {
		name: "New locality",
		color: "#777777",
		selected: false,
	}
};

export const texts = {
	"ar": {
		"Palestine Open Maps": "خرائط فلسطين المفتوحة",
		"Base maps": "الخرائط",
		"Overlays": "الطبقات الأخرى", 
		"Places": "البلدات",
		"Get updates": "تابعوا آخر التحديثات",
		"Download maps": "تنزيل الخرائط",
		"About": "عن المشروع",
		"Blog": "مدونة",
		"Project vision": "رؤيتنا للمشروع",
		"Support us": "دعم المشروع",
		"View maps": "الخرائط"
	}
};

export const pages = [
	{
		key: "about",
		label: "About",
		icon: "info",
		id: {en: 3, ar: 7}
	},
	{
		key: "vision",
		label: "Project vision",
		icon: "stars",
		id: {en: 5, ar: 8}
	},
	{
		key: "support",
		label: "Support us",
		icon: "heart",
		id: {en: 6, ar: 9}
	}
];