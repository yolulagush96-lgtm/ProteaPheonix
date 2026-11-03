function gotoPricing (profield) {
    localStorage.setItem("selectedProfile",
     profield);
     window.location.href = "pricing.html";}

     const rateLabel = document.getElementById("rate-label");

if (isNightTime()) {
    rateLabel.innerText = "🌙 Night Rates Active";
} else {
    rateLabel.innerText = "☀️ Day Rates";
}

