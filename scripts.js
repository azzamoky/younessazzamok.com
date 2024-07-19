document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "YOUR_API_KEY"; // You need to get an API key from a service like Aladhan (https://aladhan.com/prayer-times-api)
    
    const prayerTimesEndpoints = {
        rabat: `https://api.aladhan.com/v1/timingsByCity?city=Rabat&country=Morocco&method=2&key=${apiKey}`,
        isabela: `https://api.aladhan.com/v1/timingsByCity?city=Isabela&country=Puerto%20Rico&method=2&key=${apiKey}`,
        nyc: `https://api.aladhan.com/v1/timingsByCity?city=New%20York&country=USA&method=2&key=${apiKey}`,
    };

    const fetchPrayerTimes = async (endpoint, elementId) => {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            const timings = data.data.timings;

            const prayerTimesHtml = `
                <ul>
                    <li>Fajr: ${timings.Fajr}</li>
                    <li>Dhuhr: ${timings.Dhuhr}</li>
                    <li>Asr: ${timings.Asr}</li>
                    <li>Maghrib: ${timings.Maghrib}</li>
                    <li>Isha: ${timings.Isha}</li>
                </ul>
            `;

            document.getElementById(elementId).innerHTML = prayerTimesHtml;
        } catch (error) {
            console.error("Error fetching prayer times:", error);
            document.getElementById(elementId).innerHTML = "<p>Unable to fetch prayer times. Please try again later.</p>";
        }
    };

    if (document.getElementById("prayer-times-rabat")) {
        fetchPrayerTimes(prayerTimesEndpoints.rabat, "prayer-times-rabat");
    }

    if (document.getElementById("prayer-times-isabela")) {
        fetchPrayerTimes(prayerTimesEndpoints.isabela, "prayer-times-isabela");
    }

    if (document.getElementById("prayer-times-nyc")) {
        fetchPrayerTimes(prayerTimesEndpoints.nyc, "prayer-times-nyc");
    }
});
