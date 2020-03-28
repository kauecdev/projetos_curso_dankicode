window.onload = function(){
    
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-5.0791278,-42.8127108),
            scroolwheel:false,
            zoom:12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    function addMarker(lat,long,icon,content,click){
        var latLng = {'lat':lat, 'lng':long};

        var marker = new google.maps.Marker({
            position: latLng,
            map: map, 
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        }); 

        if(click == true){
        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
            });
    }else{
        infoWindow.open(map,marker);
    }
        
    }

    initialize();
    addMarker(-5.0791278,-42.8127108,'','Meu endereço personalizado!', true);
    
    setTimeout(function(){
        map.setZoom(15);
    }, 2000);
}