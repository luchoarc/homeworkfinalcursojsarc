let array_latitud = new Array(); 
let array_longitud = new Array(); 

var boton = document.getElementById('botonClick');
boton.addEventListener('click', function(){
            
    var url_service = "https://serviciosgis.catastrobogota.gov.co/otrosservicios/rest/services/educacion/inversion/MapServer/0/query?where=COD_LOCA+%3D+15&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson";
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url_service);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = this.responseText;
            var obj = JSON.parse(json);
            for(var i in obj.features[0].geometry.rings[0]) {
                array_latitud.push(obj.features[0].geometry.rings[0][i][1]); 
                array_longitud.push(obj.features[0].geometry.rings[0][i][0]); 
            }
            //console.log(array_latitud);
            //console.log(array_longitud);

            rowsTable ="";
            array_latitud.forEach(function(elemento, indice, array){
                rowsTable += "<tr><td style='text-align: right;'>" + indice + "</td><td style='text-align: right;'>"+ elemento +"</td><td style='text-align: right;'>"+ array_longitud[indice] +"</td></tr>";
            });
            document.getElementById("tbodytablaLatLon").innerHTML = rowsTable; 

        }
        else
            alert("Error en la Conexión del Servicio REST");
    }			
});	
