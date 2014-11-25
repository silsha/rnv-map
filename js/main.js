jQuery(document).ready(function () {
    
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(49.487459, 8.466039),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

});