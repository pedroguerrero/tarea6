import { doctors } from './data/doctors';

function renderDoctors(docs) {
  const doctorsElement = document.querySelector('.doctors-row');

  let doctorsHtmlContent = '';

  for (const { image, name, description } of docs) {
    doctorsHtmlContent += `
    <div class="col-md-3 mb-5">
      <div class="card text-center">
        <img src="${image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <p class="card-text">
            ${description}
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
