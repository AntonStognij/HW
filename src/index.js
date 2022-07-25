import './styles/all'
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

import {MDCDataTable} from '@material/data-table';

const moment = require('moment');
let url = 'https://api.json-generator.com/templates/dSPMBCcT8Rcy/data?status=200&delay=500'
fetch(`${url}`, {
    headers:{
        "Authorization":"Bearer 48pkeeh1ovn58poad0w7q9q93d5tmg4pq8y3e2tt",
    }
    
}).
    then(res => res.json())
    .then(res => {
    const students = res.slice("")
    const name = []
    const rating = []
    let trTable  = ''
    students.forEach(element => {
    element.date_of_birth = moment(element.date_of_birth, "DD-MM-YYYY")
    element.date_of_birth = moment(element.date_of_birth).format('DD/MM/YYYY');
    name.push(element.name);
    rating.push(element.rating);
    trTable = trTable +  `<tr class="mdc-data-table__row"> <th class="mdc-data-table__cell" scope="row">${element.name}</th> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${element.date_of_birth}</td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${element.rating}</td></tr>` 
  });
    let table = `
    <div class="mdc-data-table">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr class="mdc-data-table__header-row">
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Name</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Date of Birth</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Rating</th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content">
       ${trTable}
      </tbody>
    </table>
  </div>
</div>`

let divTable = document.querySelector('.table');
divTable.innerHTML = table
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
const ctx = document.getElementById('myChart');
const labels = name;
const data = {
  labels: labels,
  datasets: [{
    label: 'student rating',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: rating,
  }]
};
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
const myChart = new Chart(
  ctx,  config
);
})