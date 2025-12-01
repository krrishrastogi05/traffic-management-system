
**Core Infrastructure**
* **Runtime Environment**: [Node.js](https://nodejs.org/) (JavaScript)
* **Cloud Services**: Google Cloud Platform (GCP)
* **API**: [Google Maps Routes API](https://developers.google.com/maps/documentation/routes) (v2 `computeRoutes`)




**Data Storage**
* **Format**: JSON (`traffic-log.json`) - Flat-file storage for historical data logging.

---

## Working

The system is designed to act as an automated "Traffic Watchdog" for specific routes in cties, running entirely in the cloud via GitHub Actions.

### 1. Automated Scheduling (Time-Gated)
Instead of running 24/7, the system uses a **Time Window Logic** in the GitHub Action workflow. It converts UTC server time to IST and only executes the script during relevant traffic hours to optimize API usage:
* **Morning Rush**: ~09:00 AM – 11:00 AM IST
* **Afternoon/School**: ~01:00 PM – 04:00 PM IST
* **Evening Peak**: ~06:30 PM – 09:00 PM IST

### 2. Route Analysis
The script iterates through a pre-defined list of Origin-Destination pairs (`LOCATIONS`). For each route, it requests the **"Traffic Aware Optimal"** travel time from Google Maps.

### 3. Traffic Severity Algorithm
Unlike standard maps that just show colors, this system calculates a precise **Delay Percentage** by comparing the *Current Travel Time* against a pre-defined *Free Flow Time* (ideal condition time).

$$
\text{Delay \%} = \left( \frac{\text{RealTime} - \text{FreeFlow}}{\text{FreeFlow}} \right) \times 100
$$

**Classification Thresholds:**
*  **Normal**: Delay < 25%
*  **Moderate**: 25% ≤ Delay ≤ 60%
*  **Heavy**: Delay > 60%

### 4. Data Persistence
After every run, the system appends the traffic data (Timestamp, Duration, Distance, Traffic Status) to `traffic-log.json`. The GitHub Action then detects this file change and **automatically commits and pushes** the updated log back to the repository, creating a permanent historical record of traffic patterns.
