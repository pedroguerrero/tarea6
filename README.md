# Modulo 3 Laboratorio virtual 1

## Algoritmo de busqueda implementado

Fragmento de codigo encargado de filtrar los medicos

```
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
```

Por cada tecla presionada por el usuario se utiliza el metodo filter de los arreglos el cual tiene complejidad O(n) (lineal)

Fragmento de codigo para ordenar datos

```
function sortByFn(data, fn) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (fn(data[i], data[j]) > 0) {
        [data[i], data[j]] = [data[j], data[i]];
      } else if (fn(data[j], data[i]) < 0) {
        [data[j], data[i]] = [data[i], data[j]];
      }
    }
  }
}
```

Funcion utilizada para implementar el ordenamiento de los datos, en este caso se uso el algoritmo Bubble sort para ordenar los datos el cual tiene complejidad de O(n^2)

Ejemplo de uso

```
const datos = [1, 2, 3, 4, 5];
sortByFn(datos, (a, b) => b - a);
console.log(datos);
```

La ejecucion de ese fragmento de codigo nos daria [5, 4, 3, 2, 1] que seria un ordenamiento de mayor a menor
