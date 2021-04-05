## GUI

**Cruise on the River Mersey** interface available [here](https://pixeljuggle.github.io/cruise-ships/ "here")

## Domain Model

### Ship 🛳️

| Properties       | Methods        |
| :--------------- | :------------- |
| atsea            | boardPassenger |
| currentPort      | dock           |
| itinerary        | setSail        |
| nextPort         | get atSea      |
| passengersAboard |                |
| previousPort     |                |
| shipName         |                |

### Port 🏙️

| Properties | Methods    |
| :--------- | :--------- |
| name       | addShip    |
| ships      | removeShip |

### Itinerary 📌

| Properties | Methods |
| :--------- | :------ |
| ports      | addPort |
