$(function(){
  $.ajaxSetup({ cache: false });
});

var ctx = document.getElementById('chart').getContext('2d');
ctx.canvas.width = 1300;
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
    borderWidth: 2,
    plugins:{
      legend:{
        labels:{
          color: 'white',
          font: {
            size: 16
          }
        }
      }
    },
    layout: {
        padding: {
            left: 20,
            right: 250,
            top: 20,
            bottom: 20
        }
    },
    responsive: true,
    animation: false,
    scales:{
      x:{
        type: 'time',
        time:{
          unit: 'minute',
          displayFormats:{
            minute: 'HH:mm'
          }
        },
        ticks:{
          color: 'white'
        },
        grid:{
          color: 'rgb(26, 26, 26)'
        },
        border:{
          display: true,
          color: 'rgb(26, 26, 26)'
        }
      },
      y1:{
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          stepSize: 1000,
          color: 'white'
        },
        grid:{
          color: function(context){
            if (context.tick.value>=100000){
              return 'rgb(75, 0, 102)';
            }
            else if(context.tick.value>=60000){
              return 'rgb(102, 102, 0)';
            }
            else if(context.tick.value>=30000){
              return 'rgb(17, 102, 0)';
            }
            else if(context.tick.value>=10000){
              return 'rgb(0, 102, 102)';
            }
            else if(context.tick.value>=5000){
              return 'rgb(0, 9, 102)';
            }
            else if(context.tick.value>=2000){
              return 'rgb(51, 0, 0)';
            }
            return 'rgb(51, 51, 51)';
          }
        },
        border:{
          display: true,
          color: 'rgb(26, 26, 26)'
        }
      },
      y2:{
        display: true,
        position: 'right',
        border:{
          display: true,
          color: 'rgb(26, 26, 26)'
        },
        grid:{
          color: 'rgb(0, 0, 0)'
        },
        ticks:{
          color: 'rgb(0, 0, 0)'
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
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '-45',
              offset: 1,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 22
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][2],
            data: b2,
            fill: false,
            borderColor: 'rgb(255, 255, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '-45',
              offset: 1,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 18
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][3],
            data: b3,
            fill: false,
            borderColor: 'rgb(0, 255, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '-45',
              offset: 1,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 16
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][4],
            data: b4,
            fill: false,
            borderColor: 'rgb(0, 0, 255)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '-46',
              offset: 5,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 15
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][5],
            data: b5,
            fill: false,
            borderColor: 'rgb(255, 128, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '-40',
              offset: 1,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 14
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][6],
            data: b6,
            fill: false,
            borderColor: 'rgb(0, 128, 255)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '-20',
              offset: 0,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 13
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][7],
            data: b7,
            fill: false,
            borderColor: 'rgb(191, 255, 0)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '0',
              offset: 0,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 12
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][8],
            data: b8,
            fill: false,
            borderColor: 'rgb(191, 0, 255)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '15',
              offset: 1,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 11
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][9],
            data: b9,
            fill: false,
            borderColor: 'rgb(0, 255, 191)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '45',
              offset: 0,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 11
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 204, 204, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          },
          {
            label: csvData[0][10],
            data: b10,
            fill: false,
            borderColor: 'rgb(255, 0, 191)',
            tension: 0.1,
            yAxisID: 'y1',
            pointBorderWidth: 5,
            pointHitRadius: 20,
            pointStyle: false,
            datalabels:{
              display: true,
              anchor: 'end',
              clamp: 'true',
              align: '50',
              offset: 15,
              borderRadius: 4,
              padding: 6,
              font: {
                weight: 'bold',
                size: 11
              },
              color: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  var users = parseInt(value.dataset.data[value.dataIndex]);
                  if(users>=100000){
                    return 'rgb(214, 102, 255)';
                  }
                  else if(users>=60000){
                    return 'rgb(255, 255, 102)';
                  }
                  else if(users>=30000){
                    return 'rgb(102, 255, 72)';
                  }
                  else if(users>=10000){
                    return 'rgb(72, 255, 255)';
                  }
                  else if(users>=5000){
                    return 'rgb(89, 102, 255)';
                  }
                  else if(users>=2000){
                    return 'rgb(255, 71, 36)';
                  }
                  return 'white';
                }
                return "";
              },
              backgroundColor: function(value, context){
                if (value.dataIndex == value.dataset.data.length - 1){
                  return 'rgba(255, 230, 230, 0.1)';
                }
                return "";
              },
              formatter: function(value, context){
                if (context.dataIndex == context.dataset.data.length - 1){
                  return context.dataset.label + ' 人氣 ' + value;
                }
                return "";
              }
            }
          }
        ]
      };
      
      chart.config.data = data;
      chart.config.options.scales.y1.min = csvData[csvData.length-1][10]-30;
      chart.update();
    }
  })
}

var updateInterval = setInterval(updateData, 1000);

function Stop(){
  clearInterval(updateInterval);
}

function setTime(){
  var now = new Date();
  $('#current').html(now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'<br>'
                    +now.toLocaleTimeString());
  setTimeout('setTime()',1000);
}
