function updateDateTime() {
    const now = new Date();
    const datetime = now.toLocaleString(); // e.g. 5/27/2025, 3:45:22 PM
    document.getElementById("datetime").innerText = datetime;
}

// Update every second
setInterval(updateDateTime, 1000);

// Initial call
updateDateTime();
