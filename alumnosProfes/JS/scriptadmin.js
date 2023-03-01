/*
//Busqueda
function filtro() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("data_table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

//Editar
function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "inline";

  var nombrehtml = document.getElementById("Nombre" + no);
  var apellidoshtml = document.getElementById("Apellidos" + no);
  var contraseñahtml = document.getElementById("Contraseña" + no);
  var dnihtml = document.getElementById("DNI" + no);
  var nacihtml = document.getElementById("Nacimiento" + no);
  var emailhtml = document.getElementById("Email" + no);
  var telhtml = document.getElementById("Telefono" + no);
  var emphtml = document.getElementById("Empresa" + no);
  var dualhtml = document.getElementById("Dual" + no);
  var fcthtml = document.getElementById("FCT" + no);
  var obshtml = document.getElementById("Observaciones" + no);

  var nombre = nombrehtml.innerHTML;
  var apellidos = apellidoshtml.innerHTML;
  var contra = contraseñahtml.innerHTML;
  var dni = dnihtml.innerHTML;
  var naci = nacihtml.innerHTML;
  var email = emailhtml.innerHTML;
  var tel = telhtml.innerHTML;
  var emp = emphtml.innerHTML;
  var dual = dualhtml.innerHTML;
  var fct = fcthtml.innerHTML;
  var obs = obshtml.innerHTML;

  nombrehtml.innerHTML = "<input type='text' id='nombre_text" + no + "' value='" + nombre + "'>";
  apellidoshtml.innerHTML = "<input type='text' id='apellidos_text" + no + "' value='" + apellidos + "'>";
  contraseñahtml.innerHTML = "<input type='text' id='contraseña_text" + no + "' value='" + contra + "'>";
  dnihtml.innerHTML = "<input type='text' id='dni_text" + no + "' value='" + dni + "'>";
  nacihtml.innerHTML = "<input type='text' id='nacimiento_text" + no + "' value='" + naci + "'>";
  emailhtml.innerHTML = "<input type='text' id='email_text" + no + "' value='" + email + "'>";
  telhtml.innerHTML = "<input type='text' id='telefono_text" + no + "' value='" + tel + "'>";
  emphtml.innerHTML = "<input type='text' id='empresa_text" + no + "' value='" + emp + "'>";
  dualhtml.innerHTML = "<input type='text' id='dual_text" + no + "' value='" + dual + "'>";
  fcthtml.innerHTML = "<input type='text' id='fct_text" + no + "' value='" + fct + "'>";
  obshtml.innerHTML = "<input type='text' id='observaciones_text" + no + "' value='" + obs + "'>";
}

//Guardar
function save_row(no) {
  var nombrehtml = document.getElementById("nombre_text" + no).value;
  var apellidoshtml = document.getElementById("apellidos_text" + no).value;
  var contraseñahtml = document.getElementById("contraseña_text" + no).value;
  var dnihtml = document.getElementById("dni_text" + no).value;
  var nacihtml = document.getElementById("nacimiento_text" + no).value;
  var emailhtml = document.getElementById("email_text" + no).value;
  var telhtml = document.getElementById("telefono_text" + no).value;
  var emphtml = document.getElementById("empresa_text" + no).value;
  var dualhtml = document.getElementById("dual_text" + no).value;
  var fcthtml = document.getElementById("fct_text" + no).value;
  var obshtml = document.getElementById("observaciones_text" + no).value;

  document.getElementById("Nombre" + no).innerHTML = nombrehtml;
  document.getElementById("Apellidos" + no).innerHTML = apellidoshtml;
  document.getElementById("Contraseña" + no).innerHTML = contraseñahtml;
  document.getElementById("DNI" + no).innerHTML = dnihtml;
  document.getElementById("Nacimiento" + no).innerHTML = nacihtml;
  document.getElementById("Email" + no).innerHTML = emailhtml;
  document.getElementById("Telefono" + no).innerHTML = telhtml;
  document.getElementById("Empresa" + no).innerHTML = emphtml;
  document.getElementById("Dual" + no).innerHTML = dualhtml;
  document.getElementById("FCT" + no).innerHTML = fcthtml;
  document.getElementById("Observaciones" + no).innerHTML = obshtml;

  document.getElementById("edit_button" + no).style.display = "inline";
  document.getElementById("save_button" + no).style.display = "none";
}

//Borrar
function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

//Añadir
function add_row() {
  var new_nombre = document.getElementById("new_nombre").value;
  var new_apellidos = document.getElementById("new_apellidos").value;
  var new_contraseña = document.getElementById("new_contraseña").value;
  var new_dni = document.getElementById("new_dni").value;
  var new_nacimiento = document.getElementById("new_nacimiento").value;
  var new_email = document.getElementById("new_email").value;
  var new_telefono = document.getElementById("new_telefono").value;
  var new_emp = document.getElementById("new_empresa").value;
  var new_dual = document.getElementById("new_dual").value;
  var new_fct = document.getElementById("new_fct").value;
  var new_obs = document.getElementById("new_observaciones").value;

  var table = document.getElementById("data_table");
  var table_len = (table.rows.length)-1;
  table.insertRow(table_len).outerHTML = 
  "<tr id='row" + table_len + "'>"+
  "<td id='Nombre" +table_len+"'>"+new_nombre+"</td>"+
  "<td id='Apellidos" +table_len+"'>"+new_apellidos+"</td>"+
  "<td id='Contraseña" +table_len+"'>"+new_contraseña+"</td>"+
  "<td id='DNI" +table_len+"'>"+new_dni+"</td>"+
  "<td id='Nacimiento" +table_len+"'>"+new_nacimiento+"</td>"+
  "<td id='Email" +table_len+"'>"+new_email+"</td>"+
  "<td id='Telefono" +table_len+"'>"+new_telefono+"</td>"+
  "<td id='Empresa" +table_len+"'>"+new_emp+"</td>"+
  "<td id='Dual" +table_len+"'>"+new_dual+"</td>"+
  "<td id='FCT" +table_len+"'>"+new_fct+"</td>"+
  "<td id='Observaciones" +table_len+"'>"+new_obs+"</td>"+
  "<td><input type='button' id='edit_button" + table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'>"+
  "<input type='button' id='save_button" + table_len + "' value='💾' class='save' onclick='save_row(" + table_len + ")'>"+
  "<input type='button' value='🗑️' class='delete' onclick='delete_row(" + table_len + ")'>"+
  "<input type='button' value='🤓' class='ver'></td></tr>";
  
  document.getElementById("new_nombre").value = "";
  document.getElementById("new_apellidos").value = "";
  document.getElementById("new_contraseña").value = "";
  document.getElementById("new_dni").value = "";
  document.getElementById("new_nacimiento").value = "";
  document.getElementById("new_email").value = "";
  document.getElementById("new_telefono").value = "";
  document.getElementById("new_empresa").value = "";
  document.getElementById("new_dual").value = "";
  document.getElementById("new_fct").value = "";
  document.getElementById("new_observaciones").value = "";
  
  actualizar();
}
*/



function cargarJson() {
  document.querySelector("table").rows.length
  var data = document.querySelector("#data")
  fetch('https://raw.githubusercontent.com/Chicago-Melimpio/alumnosProfes/main/profesores.json')
    .then(response => response.json())
    .then(data => {

      // -----------------------------------------------------------------



      // -----------------------------------------------------------------
      data.profesores.forEach(profesor => {
        console.log(profesor)
        if (profesor.nombre == "Aaron") {

          if (window.location.href.includes("Aaron")) {
              const row = document.createElement("tr");
              row.innerHTML = `<tr>
              <td>${document.querySelector("#data_table").rows.length}</td>
                  <td>${profesor.alumnos[0].nombre}</td>
                  <td>${profesor.alumnos[0].apellidos}</td>
                  <td>${profesor.alumnos[0].contraseña}</td>
                  <td>${profesor.alumnos[0].dni}</td>
                  <td>${profesor.alumnos[0].nacimiento}</td>
                  <td>${profesor.alumnos[0].email}</td>
                  <td>${profesor.alumnos[0].telefono}</td>
                  <td>${profesor.alumnos[0].empresa}</td>
                  <td>${profesor.alumnos[0].dual}</td>
                  <td>${profesor.alumnos[0].fct}</td>
                  <td>${profesor.alumnos[0].observacionesp}</td>
                  // document.addEventListener("DOMContentLoaded", function() {
              <td><input type='button' id='edit_button" +
         table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
          "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
              document.querySelector('#data').appendChild(row);
            }else if (window.location.href.includes("Aaron")) {
                const row = document.createElement("tr");
                row.innerHTML = `<tr> 
                  <td>${document.querySelector("table").rows.length}</td>
                  <td>${profesor.alumnos[1].nombre}</td>
                  <td>${profesor.alumnos[1].apellidos}</td>
                  <td>${profesor.alumnos[1].contraseña}</td>
                  <td>${profesor.alumnos[1].dni}</td>
                  <td>${profesor.alumnos[1].nacimiento}</td>
                  <td>${profesor.alumnos[1].email}</td>
                  <td>${profesor.alumnos[1].telefono}</td>
                  <td>${profesor.alumnos[1].empresa}</td>
                  <td>${profesor.alumnos[1].dual}</td>
                  <td>${profesor.alumnos[1].fct}</td>
                  <td>${profesor.alumnos[1].observacionesp}</td>
                  <td><input type='button' id='edit_button" +
             table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
              "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
                document.querySelector('#data').appendChild(row);
            }
          } else {
            if (window.location.href.includes("Francisco")) {
              for (i = 0; i <= profesor.alumnos[0].actividades.length; i++) {
                const row = document.createElement("tr");
                row.innerHTML = `<tr> 
               <td>${document.querySelector("table").rows.length - 1}</td>
               <td>${profesor.alumnos[0].actividades}</td>
               <td>${profesor.alumnos[0].observacionesa}</td>
               <td>${profesor.alumnos[0].horas}</td>
               <td><input type='button' id='edit_button" +
          table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
           "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
                document.querySelector('#data').appendChild(row);
              }
            } else if (window.location.href.includes("Francisco")) {
              for (i = 0; i <= profesor.alumnos[1].actividades.length; i++) {
                const row = document.createElement("tr");
                row.innerHTML = `<tr> 
                   <td>${document.querySelector("table").rows.length - 1}</td>
                   <td>${profesor.alumnos[1].actividades}</td>
                   <td>${profesor.alumnos[1].observacionesa}</td>
                   <td>${profesor.alumnos[1].horas}</td>
                   <td><input type='button' id='edit_button" +
              table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
               "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
                document.querySelector('#data').appendChild(row);
              }
            }
          }
        })

    });
}

function tareasNuevas() {
  // var tareasNuevas = JSON.parse(localStorage.getItem("tareaAlumno"));
  // console.log(tareasNuevas)

  // tareasNuevas.forEach(alumno => {
  if (window.location.href.includes("Royce")) {
    var tareasNuevasRoyce = JSON.parse(localStorage.getItem("tareasRoyce"));
    tareasNuevasRoyce.forEach(dia => {

      const fila = document.createElement("tr");
      fila.innerHTML =
        `<tr> 
                  <td>${document.querySelector("table").rows.length - 1}</td>
              <td>${dia.actividades}</td>
              <td>${dia.observaciones}</td>
              <td>${dia.horas}</td>
              
              <td><input type='button' id='edit_button" +
              table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
              "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
      document.querySelector("#data").appendChild(fila);

    })

  } else if (window.location.href.includes("Pepelu")) {
    var tareasNuevasPepelu = JSON.parse(localStorage.getItem("tareasPepelu"));
    tareasNuevasPepelu.forEach(dia => {
      const fila = document.createElement("tr");
      fila.innerHTML =
        `<tr> 
              <td>${document.querySelector("table").rows.length - 1}</td>
          <td>${dia.actividades}</td>
          <td>${dia.observaciones}</td>
          <td>${dia.horas}</td>
          
          <td><input type='button' id='edit_button" +
          table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
          "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
      document.querySelector("#data").appendChild(fila);

    })
  } else if (window.location.href.includes("Miguel")) {
    var tareasNuevasMiguel = JSON.parse(localStorage.getItem("tareasMiguel"));
    tareasNuevasMiguel.forEach(dia => {
      const fila = document.createElement("tr");
      fila.innerHTML =
        `<tr> 
              <td>${document.querySelector("table").rows.length - 1}</td>
          <td>${dia.actividades}</td>
          <td>${dia.observaciones}</td>
          <td>${dia.horas}</td>
          
          <td><input type='button' id='edit_button" +
          table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
          "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
      document.querySelector("#data").appendChild(fila);

    })
  } else if (window.location.href.includes("Camilo")) {
    var tareasNuevasCamilo = JSON.parse(localStorage.getItem("tareasCamilo"));
    tareasNuevasCamilo.forEach(dia => {
      const fila = document.createElement("tr");
      fila.innerHTML =
        `<tr> 
              <td>${document.querySelector("table").rows.length - 1}</td>
          <td>${dia.actividades}</td>
          <td>${dia.observaciones}</td>
          <td>${dia.horas}</td>
          
          <td><input type='button' id='edit_button" +
          table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
          "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
      document.querySelector("#data").appendChild(fila);
    })
  };
// })
  
}