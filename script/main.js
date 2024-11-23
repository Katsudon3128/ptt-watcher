$(function(){
  $.ajaxSetup({ cache: false });
});

var ctx = document.getElementById('chart').getContext('2d');
ctx.canvas.width = 1500;
ctx.canvas.height = 1200;

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'test',
      data: [1,2,3],
      fill: false,
      borderColor: 'rgb(255, 0, 0)',
      tension: 0.1,
      yAxisID: 'y1',
      pointBorderWidth: 5,
      pointHitRadius: 20,
      pointStyle: false
    }]
  },
  plugins: [ChartDataLabels],
  options:{
    layout: {
        padding: {
            left: 10,
            right: 200,
            top: 10,
            bottom: 10
        }
    },
    plugins:{
      datalabels:{
        display: 'true',
        anchor: 'end',
        align: 'top',
        borderRadius: 4,
        padding: 6,
        font: {
          weight: 'bold'
        },
        color: 'black',
        formatter: function(value, context){
          if (context.dataIndex == context.dataset.data.length - 1){
            return context.dataset.label + '\n' + value;
          }
          return "";
        }
      }
    },
    responsive: true,
    animation:false,
    scales:{
      y1:{
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          stepSize: 100
        }
      }
    }
  }
});


var updateData = function(){
  var csvData;
  $.ajax({
    type: "GET",
    url: "/data.csv",
    dataType: "text",
    success: function(csv) {
      csvData = $.csv.toArrays(csv);

      const labels = [];
      const b1 = [];
      const b2 = [];
      const b3 = [];
      const b4 = [];
      const b5 = [];
      const b6 = [];
      const b7 = [];
      const b8 = [];
      const b9 = [];
      const b10 = [];

      for (let i = 1; i < csvData.length; ++i){
        labels.push(csvData[i][0]);
        b1.push(csvData[i][1]);
        b2.push(csvData[i][2]);
        b3.push(csvData[i][3]);
        b4.push(csvData[i][4]);
        b5.push(csvData[i][5]);
        b6.push(csvData[i][6]);
        b7.push(csvData[i][7]);
        b8.push(csvData[i][8]);
        b9.push(csvData[i][9]);
        b10.push(csvData[i][10]);
      }

      const data = {
        labels: labels,
        datasets: [
          {
            label: csvData[0][1],
            data: b1,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][2],
            data: b2,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][3],
            data: b3,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][4],
            data: b4,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][5],
            data: b5,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][6],
            data: b6,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][7],
            data: b7,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][8],
            data: b8,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][9],
            data: b9,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          },
          {
            label: csvData[0][10],
            data: b10,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false
          }
        ]
      };
      
      chart.config.data = data;
      chart.config.options.scales.y1.min = csvData[csvData.length-1][10]-30;
      chart.update();
    },
    error: function(r){
      alert('error');
    }
  })
}

var updateInterval = setInterval(updateData, 1000);

function Stop(){
  clearInterval(updateInterval);
}