// Carga las canciones al cargar la página
getData();




// Función para obtener los datos de las canciones y mostrarlos en la tabla
function getData() {
    fetch('/getSongs')
    .then(response => response.json())
    .then(songs => {
        const tableSongs = document.getElementById('tableSongs');
        tableSongs.innerHTML = ''; 
        songs.forEach(song => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${song.id}</td>
                <td><input type="text" class="titulo" value="${song.titulo}" readonly></td>
                <td><input type="text" class="artista" value="${song.artista}" readonly></td>
                <td><input type="text" class="tono" value="${song.tono}" readonly></td>
                <td>
                    <button class="btn-edit" data-bs-toggle="tooltip" title="Editar"><i class="fa-solid fa-square-pen"></i></button>
                    <button class="btn-save" data-bs-toggle="tooltip" title="Guardar" disabled><i class="fa-solid fa-square-check"></i></button>
                    <button class="btn-delete" data-bs-toggle="tooltip" title="Eliminar"><i class="fa-solid fa-square-minus"></i></button>
                </td>

            `;
            tableSongs.appendChild(row);

            // Evento para los botones de editar
            row.querySelector('.btn-edit').addEventListener('click', () => {
                editSong(row);
            });

            row.querySelector('.btn-delete').addEventListener('click', () => {
                deleteSong(song.id);
            });

            row.querySelector('.btn-save').addEventListener('click', () => {
                saveSong(row);
            });
        });

    })
    .catch(error => console.error('Error al obtener las canciones:', error));
}



// Función para eliminar una canción
function deleteSong(id) {
    fetch('/deleteSong', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
    })
    .then(response => {
        if (response.ok) {
            alert('Canción eliminada exitosamente');
            getData();
        } else {
            throw new Error('Error al eliminar la canción');
        }
    })
    .catch(error => console.error(error));
}





// Función para editar una canción
function editSong(row) {
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => {
        input.removeAttribute('readonly');
        row.querySelector('.btn-save').disabled = false;
    });
    row.classList.add('editing');
    row.querySelector('.btn-edit').classList.add('btn-save');
    row.querySelector('.btn-edit').classList.remove('btn-edit');
}

// Evento para los botones de editar
document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', () => {
        const row = button.closest('tr');
        // Verificar si la fila está en modo de edición
        if (!row.classList.contains('editing')) {
            // Si no está en modo de edición, activar el modo de edición
            editSong(row);
            // Agregar evento de guardar solo si aún no se ha agregado
            if (!row.querySelector('.btn-save').hasEventListener('click')) {
                row.querySelector('.btn-save').addEventListener('click', () => {
                    saveSong(row);
                });
            }
        }
    });
});


// Función para guardar los cambios en una canción
function saveSong(row) {
    const id = row.querySelector('td:first-child').textContent;
    const titulo = row.querySelector('.titulo').value;
    const artista = row.querySelector('.artista').value;
    const tono = row.querySelector('.tono').value;

    fetch('/editSong', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, titulo, artista, tono })
    })
    .then(response => {
        if (response.ok) {
            alert('Cambios guardados exitosamente');
            row.classList.remove('editing');
            getData();
        } else {
            throw new Error('Error al guardar los cambios en la canción');
        }
    })
    .catch(error => console.error(error));
}

 // Obtener el mensaje de la URL y mostrarlo en un alert
 const urlParams = new URLSearchParams(window.location.search);
 const message = urlParams.get('message');
 if (message) {
     alert(message);
 }

