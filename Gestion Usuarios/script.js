// Script que maneja la funcionalidad dinámica de la página
// Función que realiza una tarea específica
document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.getElementById("userForm");
    const userList = document.getElementById("userList");
    let users = [];

    // Función para añadir un nuevo usuario
// Función que realiza una tarea específica
    userForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            const user = { name, email };
            users.push(user);
            updateUserList();
            userForm.reset();
        }
    });

    // Función para actualizar la lista de usuarios
// Función que realiza una tarea específica
    function updateUserList() {
        userList.innerHTML = "";
        users.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button onclick="deleteUser(${index})">Eliminar</button></td>
            `;
            userList.appendChild(row);
        });
    }

    // Función para eliminar un usuario
// Función que realiza una tarea específica
    window.deleteUser = function(index) {
        users.splice(index, 1);
        updateUserList();
    };
});
