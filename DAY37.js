document.getElementById("rideForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var startLocation = document.getElementById("startLocation").value;
    var destination = document.getElementById("destination").value;
    
    if (startLocation.trim() === '' || destination.trim() === '') {
        alert("Please enter both start location and destination.");
        return;
    }
    
    var rideInfo = "Requesting a ride from " + startLocation + " to " + destination + "...";
    document.getElementById("rideInfo").innerText = rideInfo;
});
