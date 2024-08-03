const datapool = [
    {
        "startDate": "Jan-01-2024",
        "endDate": "Jan-07-2024",
        "totalHours": 50,
        "devices": [
            { "deviceName": "iPhone 14", "hoursUsed": 20 },
            { "deviceName": "iPad Pro", "hoursUsed": 15 },
            { "deviceName": "iPad Mini 4    ", "hoursUsed": 2.5 },
            { "deviceName": "Chrome", "hoursUsed": 15 }
        ]
    },
    {
        "startDate": "Jan-08-2024",
        "endDate": "Jan-14-2024",
        "totalHours": 40,
        "devices": [
            { "deviceName": "iPhone 14", "hoursUsed": 18 },
            { "deviceName": "iPad Pro", "hoursUsed": 12 },
            { "deviceName": "Chrome", "hoursUsed": 10 }
        ]
    },
    {
        "startDate": "Jan-15-2024",
        "endDate": "Jan-21-2024",
        "totalHours": 55,
        "devices": [
            { "deviceName": "Samsung Galaxy S21", "hoursUsed": 25 },
            { "deviceName": "Samsung Galaxy Tab S7", "hoursUsed": 15 },
            { "deviceName": "Firefox", "hoursUsed": 15 }
        ]
    },
    {
        "startDate": "Jan-22-2024",
        "endDate": "Jan-28-2024",
        "totalHours": 55,
        "devices": [
            { "deviceName": "Google Pixel 7", "hoursUsed": 22 },
            { "deviceName": "Google Pixel Slate", "hoursUsed": 18 },
            { "deviceName": "Edge", "hoursUsed": 15 }
        ]
    },
    {
        "startDate": "Jan-29-2024",
        "endDate": "Feb-04-2024",
        "totalHours": 45,
        "devices": [
            { "deviceName": "OnePlus 9", "hoursUsed": 20 },
            { "deviceName": "Amazon Fire HD 10", "hoursUsed": 15 },
            { "deviceName": "Opera", "hoursUsed": 10 }
        ]
    },
    {
        "startDate": "Feb-05-2024",
        "endDate": "Feb-11-2024",
        "totalHours": 40,
        "devices": [
            { "deviceName": "iPhone 13", "hoursUsed": 18 },
            { "deviceName": "iPad Air", "hoursUsed": 12 },
            { "deviceName": "Safari", "hoursUsed": 10 }
        ]
    },
    {
        "startDate": "Feb-12-2024",
        "endDate": "Feb-18-2024",
        "totalHours": 50,
        "devices": [
            { "deviceName": "Samsung Galaxy S22", "hoursUsed": 22 },
            { "deviceName": "Samsung Galaxy Tab S8", "hoursUsed": 15 },
            { "deviceName": "Brave", "hoursUsed": 13 }
        ]
    },
    {
        "startDate": "Feb-19-2024",
        "endDate": "Feb-25-2024",
        "totalHours": 45,
        "devices": [
            { "deviceName": "Google Pixel 6", "hoursUsed": 20 },
            { "deviceName": "Google Pixelbook Go", "hoursUsed": 15 },
            { "deviceName": "Vivaldi", "hoursUsed": 10 }
        ]
    },
    {
        "startDate": "Feb-26-2024",
        "endDate": "Mar-03-2024",
        "totalHours": 60,
        "devices": [
            { "deviceName": "OnePlus 10", "hoursUsed": 25 },
            { "deviceName": "Amazon Fire HD 8", "hoursUsed": 20 },
            { "deviceName": "Opera GX", "hoursUsed": 15 }
        ]
    },
    {
        "startDate": "Mar-04-2024",
        "endDate": "Mar-10-2024",
        "totalHours": 55,
        "devices": [
            { "deviceName": "iPhone 14", "hoursUsed": 20 },
            { "deviceName": "iPad Pro", "hoursUsed": 20 },
            { "deviceName": "Chrome", "hoursUsed": 15 }
        ]
    },
    {
        "startDate": "Mar-11-2024",
        "endDate": "Mar-17-2024",
        "totalHours": 55,
        "devices": [
            { "deviceName": "Samsung Galaxy S21", "hoursUsed": 22 },
            { "deviceName": "Samsung Galaxy Tab S7", "hoursUsed": 18 },
            { "deviceName": "Firefox", "hoursUsed": 15 }
        ]
    },
    {
        "startDate": "Mar-18-2024",
        "endDate": "Mar-24-2024",
        "totalHours": 50,
        "devices": [
            { "deviceName": "Google Pixel 7", "hoursUsed": 20 },
            { "deviceName": "Google Pixel Slate", "hoursUsed": 15 },
            { "deviceName": "Edge", "hoursUsed": 15 }
        ]
    },
    {
        "startDate": "Mar-25-2024",
        "endDate": "Mar-31-2024",
        "totalHours": 48,
        "devices": [
            { "deviceName": "OnePlus 9", "hoursUsed": 20 },
            { "deviceName": "Amazon Fire HD 10", "hoursUsed": 15 },
            { "deviceName": "Opera", "hoursUsed": 13 }
        ]
    },
    {
        "startDate": "Apr-01-2024",
        "endDate": "Apr-07-2024",
        "totalHours": 45,
        "devices": [
            { "deviceName": "iPhone 13", "hoursUsed": 18 },
            { "deviceName": "iPad Air", "hoursUsed": 15 },
            { "deviceName": "Safari", "hoursUsed": 12 }
        ]
    },
    {
        "startDate": "Apr-08-2024",
        "endDate": "Apr-14-2024",
        "totalHours": 50,
        "devices": [
            { "deviceName": "Samsung Galaxy S22", "hoursUsed": 20 },
            { "deviceName": "Samsung Galaxy Tab S8", "hoursUsed": 18 },
            { "deviceName": "Brave", "hoursUsed": 12 }
        ]
    },
    {
        "startDate": "Apr-15-2024",
        "endDate": "Apr-21-2024",
        "totalHours": 47,
        "devices": [
            { "deviceName": "Google Pixel 6", "hoursUsed": 20 },
            { "deviceName": "Google Pixelbook Go", "hoursUsed": 15 },
            { "deviceName": "Vivaldi", "hoursUsed": 12 }
        ]
    },
    {
        "startDate": "Apr-22-2024",
        "endDate": "Apr-28-2024",
        "totalHours": 55,
        "devices": [
            { "deviceName": "OnePlus 10", "hoursUsed": 25 },
            { "deviceName": "Amazon Fire HD 8", "hoursUsed": 20 },
            { "deviceName": "Opera GX", "hoursUsed": 10 }
        ]
    },
    {
        "startDate": "Apr-29-2024",
        "endDate": "May-05-2024",
        "totalHours": 50,
        "devices": [
            { "deviceName": "iPhone 14", "hoursUsed": 22 },
            { "deviceName": "iPad Pro", "hoursUsed": 18 },
            { "deviceName": "Chrome", "hoursUsed": 10 }
        ]
    },
    {
        "startDate": "May-06-2024",
        "endDate": "May-12-2024",
        "totalHours": 55,
        "devices": [
            { "deviceName": "Samsung Galaxy S21", "hoursUsed": 25 },
            { "deviceName": "Samsung Galaxy Tab S7", "hoursUsed": 15 },
            { "deviceName": "Firefox", "hoursUsed": 15 }
        ]
    },
    {
        "startDate": "May-13-2024",
        "endDate": "May-19-2024",
        "totalHours": 50,
        "devices": [
            { "deviceName": "Google Pixel 7", "hoursUsed": 22 },
            { "deviceName": "Google Pixel Slate", "hoursUsed": 18 },
            { "deviceName": "Edge", "hoursUsed": 10 }
        ]
    },
    {
        "startDate": "May-20-2024",
        "endDate": "May-26-2024",
        "totalHours": 55,
        "devices": [
            { "deviceName": "OnePlus 9", "hoursUsed": 25 },
            { "deviceName": "Amazon Fire HD 10", "hoursUsed": 20 },
            { "deviceName": "Opera", "hoursUsed": 10 }
        ]
    },
    {
        "startDate": "May-27-2024",
        "endDate": "Jun-02-2024",
        "totalHours": 55,
        "devices": [
            { "deviceName": "iPhone 13", "hoursUsed": 22 },
            { "deviceName": "iPad Air", "hoursUsed": 18 },
            { "deviceName": "Safari", "hoursUsed": 15 }
        ],
    },
];

export function dataPool() {
    return datapool;
};
