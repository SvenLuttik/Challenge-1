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
            270//dit is de huidige afstand van de shuttle. Voel vrij om de afstand te veranderen.
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
                max: 400
            }
          }]
        },
        legend:{
          display:false
        },
        tooltips:{
          enabled:true
        }
      }
    });   
}

function functionSpeed(){
    
    //Dit is de code voor de snelheid. 
    
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
          display:false
        },
        tooltips:{
          enabled:true
        }
      }
    });
    
}

function functionOxygen(){
    
    //zuurstof gehalte per cabine. is niet relevant voor mobiel dus is pas vanaf tablet te zien
    
    var oxygenChart = document.getElementById('oxygen').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(oxygenChart, {
      type:'bar',
      data:{
        labels:['Cockpit', 'firstclass', 'businessclass'],
        datasets:[{
          label:'O',
          data:[
              
            //Hier kan je de zuurstof waarde aan passen per cabine.
            96,
            83,
            79
          ],
          backgroundColor:[
            '#f1c40f',
            '#f3cf3f',
            '#f5d865'
          ]
        }]
      },
      options:{
        title:{
          display:true,
          text:'Zuurstofpercentage per cabine'
        },
        scales:{
          yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                max: 100
            }
          }]
        },
        legend:{
          display:false
        },
        tooltips:{
          enabled:true
        }
      }
    });
    
}

function functionStock(){
    
    //Dit is de code voor de voorraad
    var stockChart = document.getElementById('stock').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(stockChart, {
      type:'horizontalBar',
      data:{
        labels:['Voedsel', 'Water'],
        datasets:[{
          label:'',
          data:[
            72,
            89
          ],
          backgroundColor:[
            '#27ae60',
            '#2980b9'
          ]
        }]
      },
      options:{
        title:{
          display:true,
          text:'Voorraad percentage'
        },
        scales:{
          xAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 10,
                max: 100
            }
          }]
        },
        legend:{
          display:false
        },
        tooltips:{
          enabled:true
        }
      }
    });   
}

function functionGforce(){
    
    //Dit is de code voor de G kracht
    var gforceChart = document.getElementById('gforce').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(gforceChart, {
      type:'line',
      data:{
        labels:['Lancering', 'Atmosfeer','Reis','Landing'],
        datasets:[{
          label:'',
          data:[
              
            // G kracht van momenten tijdens de vlucht. voel vrij om de waardes aan te passen.
            7.2,
            8.9,
            1.3,
            6.2
          ],
          borderWidth:1,
          borderColor:'#fff',
          backgroundColor:[
            '#c0392b',
            '#c0392b',
            '#c0392b',
            '#c0392b',
            'rgba(231, 76, 60,0.5)'
            
          ]
        }]
      },
      options:{
        title:{
          display:false
        },
        scales:{
          yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 10,
                max: 10
            }
          }]
        },
        legend:{
          display:false
        },
        tooltips:{
          enabled:true
        }
      }
    });   
}

//hier toep ik alle functies op wanneer de pagina laad
function start(){
    functionDistance();
    functionSpeed();
    functionGravity();
    functionOxygen();
    functionStock();
    functionGforce();
}

window.onload = start();