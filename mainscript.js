function functionDistance(){
    
    //Dit is de code voor de afstand
    var distanceChart = document.getElementById('distance').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(distanceChart, {
      type:'horizontalBar',
      data:{
        labels:['Shuttle'],
        datasets:[{
          label:'KM',
          data:[
            270//dit is de huide afstand van de shuttle.
          ],
          backgroundColor:[
            '#27ae60'
          ]
        }]
      },
      options:{
        title:{
          display:false
        },
        scales:{
          xAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 100,
                stepValue: 5,
                max: 400
            }
        }]
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    
    
}

function functionSpeed(){
    
    //Dit is de code voor de snelheid
    
    var speedChart = document.getElementById('speed').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(speedChart, {
      type:'doughnut',
      data:{
        labels:['Current-speed', 'Max-speed'],
        datasets:[{
          label:'km/h',
          data:[
            450,//Dit side snelheid die je kan aanpassen
            500//max-snelheid in km/h
          ],
          backgroundColor:[
            '#2980b9',
            '#000'
          ]
        }]
      },
      options:{
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      }
    });
    
}

function functionGravity(){
    
    //Dit is de code voor de zwaartekracht
    
    var gravityChart = document.getElementById('gravity').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(gravityChart, {
      type:'bar',
      data:{
        labels:['Aarde', 'Shuttle', 'Mars'],
        datasets:[{
          label:'Newton',
          data:[
            9.807,
            1.201,//Waarde van de shuttle. Je kan het veranderen
            3.711
          ],
          backgroundColor:[
            '#2980b9',
            '#27ae60',
            '#c0392b'
          ]
        }]
      },
      options:{
        title:{
          display:true,
          text:'Zwaartekracht in Newton'
        },
        scales:{
          yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
        }]
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    
}

function start(){
    functionDistance();
    functionSpeed();
    functionGravity();
}

window.onload = start(); 

