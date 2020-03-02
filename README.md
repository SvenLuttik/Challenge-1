# Challenge 1 - Dashboard SpaceX

**Opdracht:**
Challenge 1 - dashboard

**Student:**
Sven Luttik - 18121845

## Mijn site

Als je wilt weten hoe mijn dashboard geworden is, klik dan deze link.
[Challenge 1](https://svenluttik.github.io/Challenge-1/)


### Hoe heb ik het gemaakt

Ik heb de meeste code van de charts gemaakt met behulp van ChartJS. Het duurde wel even voordat ik door had wat er gedaan werd met deze code dus het is wel een beetje rommellig geworden. Maar de goude regel is als het werkt dat je er niet meer aan moet komen.

```
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
      }
    }
```

Door de code telkens weer te copieëren en te plakken en vervolgens deze waarden te veranderen heb ik de charts werkend gekregen op mijn dashboard.
```
      type:'bar',
```
```
      labels:['Aarde', 'Shuttle', 'Mars'],
```
```
      tdata:[
            9.807,
            1.201,//Waarde van de shuttle. Je kan het veranderen
            3.711
          ],
```


Niet alle charts zijn even revelant voor elk scherm. Mobiel is vaak bedoeld voor commercieel gebruik dus hoef je niet alles te zien. Wanneer het op grotere schermen getoond word wil je al snel meer weten over het toestand van het schip en voorraad. Daarom heb ik bij sommige breakpoints dat er charts bijkomen.
