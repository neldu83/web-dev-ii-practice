
const travelButton = document.getElementById("travelButton");
const travelDetails = document.getElementById("travelDetails");

travelButton.addEventListener("click", function () {
    travelDetails.hidden = !travelDetails.hidden;

    const isExpanded = !travelDetails.hidden;

    travelButton.setAttribute("aria-expanded", String(isExpanded));

    if (isExpanded) {
        travelButton.textContent = "Show Less";
    } else {
        travelButton.textContent = "Read More About My Journey";
    }
});
