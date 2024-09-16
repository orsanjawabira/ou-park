document.getElementById("parkingLotSelector").addEventListener("change", function() {
    var selectedLot = this.value;
    var iframe = document.getElementById("parkingMap");
    
    var baseURL = "https://www.google.com/maps/embed/v1/place?key=YOUR_NEW_API_KEY&q=";
    iframe.src = baseURL + selectedLot + "&zoom=17";
});
