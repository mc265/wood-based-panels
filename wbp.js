
Highcharts.getJSON('https://raw.githubusercontent.com/mc265/data/main/wood%20based%20panels.json', function (data) {
  
  var formattedData = data.map(function (point) {
    var date = new Date(point[0]);
    return [Date.UTC(date.getFullYear(), 0, 1), point[1]];
  });

     

    // Create the chart
    Highcharts.stockChart('container', {
       
     rangeSelector: {
    //buttons: [ {
     //   type: 'year',
      //  count: 5,
       // text: '5years'
  //  },  {
      //  type: 'year',
      //  count: 10,
     //   text: '10years'
   // }, {
    //    type: 'all',
    //    text: 'All'
  //  }]
enabled:false
},

        title: {
            text: 'Wood based panels export quantity'
        },
    
       xAxis: {
            type: 'date ',
            title: {
            enabled: true,
            text: 'Year'
            }
        },
        
         
         yAxis: {
          title:{
            enabled:true,
            text: 'cubic meters(m3)'
          }
        },
        series: [{
            name: 'Wood based panels',
            data: formattedData,
            tooltip: {
                valueDecimals: 0,
               valueSuffix: 'm3'
            }
        }]
    });
});

