import { Stack } from './Stack';

console.log('Pagina de cita de pacientes');

console.log('Creando pacientes');

const patients = new Stack();
patients.push({
  name: 'paciente 1',
  date: '01-08-2021',
  hour: '09:00',
});

patients.push({
  name: 'paciente 2',
  date: '01-08-2021',
  hour: '08:00',
});

patients.push({
  name: 'paciente 3',
  date: '01-08-2021',
  hour: '07:00',
});

patients.push({
  name: 'paciente 4',
  date: '01-08-2021',
  hour: '06:00',
});

const patientTable = document.querySelector('#reserved-hours tbody');
let tableContent = '';

while (!patients.isEmpty()) {
  const patient = patients.pop();
  tableContent += `
    <tr>
      <td scope="col">${patient.name}</td>
      <td scope="col">${patient.date}</td>
      <td scope="col">${patient.hour}</td>
    </tr>
  `;
}

patientTable.innerHTML = tableContent;
