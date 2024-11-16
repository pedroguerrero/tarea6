import { doctors } from './data/doctors';
import { services } from './data/services';

function renderDoctors(docs) {
  const doctorsElement = document.querySelector('.doctors-row');

  let doctorsHtmlContent = '';

  const clonedDocs = [...docs.map((doc) => ({ ...doc }))];
  clonedDocs[0].name = 'Doctor Modificado';
  console.log('Cloned docs', clonedDocs);
  console.log('Original docs', docs);

  console.log(
    'doctor original',
    docs[0].name,
    'doctor clonado',
    clonedDocs[0].name
  );

  const mergedData = [...docs, ...services];

  console.log('Merged docs', mergedData);

  for (const merged of mergedData) {
    console.log('Datos mergeados', merged);
  }

  console.log('Objeto serializado', JSON.stringify(mergedData));

  for (const { image, name, description, experience, available } of docs) {
    console.log(
      'Datos del doctor',
      image,
      name,
      description,
      experience,
      available
    );
    doctorsHtmlContent += `
    <div class="col-md-3 mb-5">
      <div class="card text-center">
        <img src="${image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <p class="card-text">
            ${description}
            <br>
            ${experience} años de experiencia
            <br>
            <strong>${available ? 'Disponible' : 'No disponible'}</strong>
          </p>
        </div>
      </div>
    </div>`;
  }

  doctorsElement.innerHTML = doctorsHtmlContent;
}

console.log('equipo-medico');

renderDoctors(doctors);

const searchText = document.querySelector('.search-box');

searchText.addEventListener('keyup', (event) => {
  try {
    const searchTerm = event.target.value.trim();

    const filteredDoctors = doctors.filter(
      ({ name, description }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    renderDoctors(filteredDoctors);
  } catch (error) {
    alert(`Error al buscar: ${error.message}`);
  }
});
