(function(){
   
    const url = "https://www.datos.gov.co/api/views/nav4-rbv7/rows.csv?accessType=DOWNLOAD";
    //La libreria d3 se conecta al sitio y descarga el archivo csv de forma automatica
    d3.csv(url, function(err, rows){

        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
        }

        var headerNames = d3.keys(rows[0]);

        var headerValues = [];
        var cellValues = [];
        for (i = 0; i < headerNames.length; i++) {
            headerValue = [headerNames[i]];
            headerValues[i] = headerValue;
            cellValue = unpack(rows, headerNames[i]);
            cellValues[i] = cellValue;
        }
        
        for (i = 0; i < cellValues[1].length; i++) {
        var dateValue = cellValues[1][i].split(' ')[0]
        cellValues[1][i] = dateValue
        }

        var data = [{
            type: 'table',
            header: {
              values: headerValues,
              align: "center",
              line: {width: 1, color: 'rgb(70,130,180)'},
              fill: {color: ['rgb(25,25,112)']},
              font: {family: "Arial", size: 8, color: "white"}
            },
            cells: {
              values: cellValues,
              align: ["center", "center"],
              line: {color: "black", width: 1},
              fill: {color: ['rgba(30,144,255, 0.65)','rgb(135,206,235)', 'rgba(135,206,250, 0.65)']},
              font: {family: "Arial", size: 9, color: ["black"]}
            }
        }]

        var layout = {
            title: "Oficinas de Atención al Ciudadano Unidades Armada Nacional"
        }
          
        Plotly.newPlot('myDiv', data, layout);
    
    
    });

    const bubbleSort = arr_sort => {
        const l = arr_sort.length;
        for (let i = 0; i < l; i++ ) {
          for (let j = 0; j < l - 1 - i; j++ ) {
            if ( arr_sort[ j ] > arr_sort[ j + 1 ] ) {
              [ arr_sort[ j ], arr_sort[ j + 1 ] ] = [ arr_sort[ j + 1 ], arr_sort[ j ] ];
            }
          }
        }
      
        return arr_sort;
    };
      
      const array_unsort = ['Pereira', 'Bogotá', 'Cali', 'Armenia', 'Cartagena', 'Neiva', 'Leticia', 'Valledupar', 'Bolívar', 'Manizales', 'Meta'];
      const result = bubbleSort(array_unsort);
      
      console.log(result);


})();