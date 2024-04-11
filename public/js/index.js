 // Carga las canciones al cargar la página
 fetch('/getSongs')
 .then(response => response.json())
 .then(songs => {
     const tableSongs = document.getElementById('tableSongs');
     songs.forEach(song => {
         const fila = document.createElement('tr');
         fila.innerHTML = `
             <td>${song.id}</td>
             <td>${song.titulo}</td>
             <td>${song.artista}</td>
             <td>${song.tono}</td>
             <td>
                <button class="btn-edit"><i class="fa-solid fa-square-pen"></i></button>
                <button class="btn-delete"><i class="fa-solid fa-square-minus"></i></button>
            </td>
         `;
         tableSongs.appendChild(fila);
     });
 })
 .catch(error => console.error('Error al obtener las canciones:', error));