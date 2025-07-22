const fs = require('fs');

if (process.env.GITHUB_ACTIONS !== 'true') {
    require('dotenv').config();
}


//no fetch in node by default so node-fetch utility being used 
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));



//function to make a post requests

async function post(url, body, options) {
    const data = await fetch(url, {
        method: "POST",
        headers: options.headers,
        body: JSON.stringify(body)
    })
    return { data: await data.json() }
}
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;


//fetching the array of locations from locations.js
const LOCATIONS = require('./locations');


//Google returns me duration in ISO 8601 converting that to seconds format

function parseISODuration(durationStr) {
    // Handle simple seconds format (e.g., "2486s")
    if (durationStr.endsWith('s')) {
        return parseInt(durationStr.slice(0, -1));
    }

    // Handle ISO 8601 duration format (e.g., "PT41M26S")
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const match = durationStr.match(regex);

    if (!match) {
        throw new Error(`Invalid duration format: ${durationStr}`);
    }

    const [, hours, minutes, seconds] = match.map(x => parseInt(x || "0"));
    return (hours * 3600 + minutes * 60 + seconds);
}



// voluntary delay between API calls to resolve rate limiting issues

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function formatTime(date) {
    return date.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
    });
}

async function checkTraffic() {
    // Check if API key is loaded
    if (!API_KEY) {
        console.error('Error: GOOGLE_MAPS_API_KEY not found in environment variables');
        return;
    }

    // Set departure time to 5 minutes in the future (API requirement)
    const departureTime = new Date(Date.now() + 5 * 60 * 1000).toISOString();
    const currentTime = new Date();
   
    const nowIst = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const IstDate = nowIst.substring(0, 9);
    const IstTime = nowIst.substring(11, 22);



    const url = 'https://routes.googleapis.com/directions/v2:computeRoutes';

    console.log(`\n🚦 Traffic Check at ${formatTime(currentTime)} (IST) - ${currentTime.toDateString()}`);
    console.log('='.repeat(60));

    for (let i = 0; i < LOCATIONS.length; i++) {
        const route = LOCATIONS[i];

        // Add delay between requests (except for the first one)
        if (i > 0) {
            await delay(1000); // 1 second delay between requests
        }

        const body = {
            origin: route.origin,
            destination: route.destination,
            travelMode: "DRIVE",
            routingPreference: "TRAFFIC_AWARE_OPTIMAL",
            departureTime: departureTime,
            languageCode: "en-US",
            units: "METRIC"
        };

        try {
            console.log(`\n📍 Route ${i + 1}: ${route.origin.address} → ${route.destination.address}`);

            const res = await post(url, body, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': API_KEY,
                    'X-Goog-FieldMask': 'routes.duration,routes.staticDuration,routes.distanceMeters'
                }
            });

            // Check if routes exist
            if (!res.data.routes || res.data.routes.length === 0) {
                console.error('❌ No routes found for:', route.origin.address, '→', route.destination.address);
                continue;
            }

            const r = res.data.routes[0];

            // Check if required fields exist
            if (!r.duration || !r.staticDuration) {
                console.error('❌ Missing duration data for route:', route.origin.address, '→', route.destination.address);
                console.log('Route data:', JSON.stringify(r, null, 2));
                continue;
            }

            const rt = parseISODuration(r.duration);
            const ht = parseISODuration(r.staticDuration);
            const trafficDelay = rt - ht;
            const trafficDelayPercent = ((rt - ht) / ht * 100).toFixed(1);
            const isUnusual = rt > 1.5 * ht;

            // Traffic condition emoji
            let trafficEmoji = '🟢'; // Green - Normal
            if (trafficDelay > 300) trafficEmoji = '🔴'; // Red - Heavy (5+ min delay)
            else if (trafficDelay > 120) trafficEmoji = '🟡'; // Yellow - Moderate (2+ min delay)

            const log = {
                date:IstDate,
                departure_time: IstTime,
                origin: route.origin.address,
                destination: route.destination.address,
                realtime_min: (rt / 60).toFixed(1),
                historical_min: (ht / 60).toFixed(1),
                traffic_delay_min: (trafficDelay / 60).toFixed(1),
                delay_percent: trafficDelayPercent + '%',
                distance_km: r.distanceMeters ? (r.distanceMeters / 1000).toFixed(1) : 'N/A',
                unusual: isUnusual,
                traffic_condition: trafficEmoji
            };

            // Create log file if it doesn't exist
            if (!fs.existsSync('traffic-log.json')) {
                fs.writeFileSync('traffic-log.json', '');
            }

            fs.appendFileSync('traffic-log.json', JSON.stringify(log) + '\n');

            // Enhanced console output
            console.log(`   ${trafficEmoji} Distance: ${log.distance_km} km`);
            console.log(`   ⏱️  Normal time: ${log.historical_min} min`);
            console.log(`   🚗 Current time: ${log.realtime_min} min`);
            console.log(`   ⚠️  Traffic delay: ${log.traffic_delay_min} min (${log.delay_percent})`);
            console.log(`   ${isUnusual ? '🚨 UNUSUAL TRAFFIC!' : '✅ Normal traffic'}`);

        } catch (err) {
            console.error(`❌ Error fetching route for ${route.origin.address} → ${route.destination.address}:`);

            if (err.response) {
                console.error('Status:', err.response.status);
                console.error('Response:', JSON.stringify(err.response.data, null, 2));
            } else {
                console.error('Error:', err.message);
            }
        }
    }
}

// Add some delay between API calls to avoid rate limiting
async function checkTrafficWithDelay() {
    console.log('🚀 Starting Lucknow traffic monitoring...');
    await checkTraffic();
    console.log('\n✅ Traffic check completed!');
    console.log('📝 Results saved to traffic-log.json');
}

checkTrafficWithDelay();