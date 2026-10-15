function showSafety(disaster) {
    const safetyInfo = document.getElementById("safetyInfo");
    let tips = "";

    if (disaster === "flood") {
        tips = `
            <h3>🌊 Flood Safety Tips</h3>
            <p><strong>Before:</strong> Prepare an emergency kit and follow weather warnings.</p>
            <p><strong>During:</strong> Move to higher ground and stay away from floodwater.</p>
            <p><strong>After:</strong> Avoid damaged buildings and contaminated water.</p>
        `;
    }
    else if (disaster === "fire") {
        tips = `
            <h3>🔥 Fire Safety Tips</h3>
            <p><strong>Before:</strong> Keep exits clear and check smoke alarms.</p>
            <p><strong>During:</strong> Raise the alarm, evacuate and use stairs instead of lifts.</p>
            <p><strong>After:</strong> Stay outside and do not re-enter until authorities say it is safe.</p>
        `;
    }
    else if (disaster === "earthquake") {
        tips = `
            <h3>🏚️ Earthquake Safety Tips</h3>
            <p><strong>Before:</strong> Secure heavy objects and prepare an emergency kit.</p>
            <p><strong>During:</strong> Drop, Cover and Hold On. Protect your head and neck.</p>
            <p><strong>After:</strong> Watch for aftershocks and avoid damaged buildings.</p>
        `;
    }
    else {
        tips = "<h3>Safety Information</h3><p>Please select a valid disaster.</p>";
    }

    safetyInfo.innerHTML = tips;
}

function checkItems() {
    const items = document.querySelectorAll(".kitItem");
    const progressText = document.getElementById("progressText");
    const progressFill = document.getElementById("progressFill");
    const result = document.getElementById("result");

    let count = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].checked === true) {
            count = count + 1;
        }
    }

    const total = items.length;
    const percentage = (count / total) * 100;

    progressText.textContent =
        count + " of " + total + " items prepared";

    progressFill.style.width = percentage + "%";

    if (count === total) {
        result.textContent =
            "Excellent! All checklist items are selected.";
    }
    else if (count >= 3) {
        result.textContent =
            "Good progress! Keep preparing the remaining items.";
    }
    else {
        result.textContent =
            "Keep preparing! Every item helps you get ready.";
    }
}
