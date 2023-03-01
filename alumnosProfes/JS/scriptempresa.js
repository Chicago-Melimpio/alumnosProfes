<<<<<<< HEAD

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
    var telefonohtml = document.getElementById("Telefono" + no);
    var ubicacionhtml = document.getElementById("Ubicacion" + no);
    var tutorhtml = document.getElementById("Tutor" + no);
    var logohtml = document.getElementById("Logo" + no);

  
    var nombre = nombrehtml.innerHTML;
    var telefono = telefonohtml.innerHTML;
    var ubi = ubicacionhtml.innerHTML;
    var tutor = tutorhtml.innerHTML;
    var logo = logohtml.innerHTML;
  
  
    nombrehtml.innerHTML = "<input type='text' id='nombre_text" + no + "' value='" + nombre + "'>";
    telefonohtml.innerHTML = "<input type='text' id='telefono_text" + no + "' value='" + telefono + "'>";
    ubicacionhtml.innerHTML = "<input type='text' id='ubi_text" + no + "' value='" + ubi + "'>";
    tutorhtml.innerHTML = "<input type='text' id='tutor_text" + no + "' value='" + tutor + "'>";
    logohtml.innerHTML = "<input type='file' id='logo_text" + no + "' value='" + logo + "'>";

  }
  
  //Guardar
  function save_row(no) {
    var nombrehtml = document.getElementById("nombre_text" + no).value;
    var telefonohtml = document.getElementById("telefono_text" + no).value;
    var ubicacionhtml = document.getElementById("ubi_text" + no).value;
    var tutorhtml = document.getElementById("tutor_text" + no).value;
    var logohtml = document.getElementById("logo_text" + no).value;

  
    document.getElementById("Nombre" + no).innerHTML = nombrehtml;
    document.getElementById("Telefono" + no).innerHTML = telefonohtml;
    document.getElementById("Ubicacion" + no).innerHTML = ubicacionhtml;
    document.getElementById("Tutor" + no).innerHTML = tutorhtml;
    document.getElementById("Logo" + no).innerHTML = logohtml;

  
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
    var new_telefono = document.getElementById("new_telefono").value;
    var new_ubicacion = document.getElementById("new_ubicacion").value;
    var new_tutor = document.getElementById("new_tutor").value;
    var new_logo = document.getElementById("new_logo").value;

  
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length)-1;
    table.insertRow(table_len).outerHTML = 
    "<tr id='row" + table_len + "'>"+
    "<td id='Nombre" +table_len+"'>"+new_nombre+"</td>"+
    "<td id='Telefono" +table_len+"'>"+new_telefono+"</td>"+
    "<td id='Ubicacion" +table_len+"'>"+new_ubicacion+"</td>"+
    "<td id='Tutor" +table_len+"'>"+new_tutor+"</td>"+
    "<td id='Logo" +table_len+"'>"+new_logo+"</td>"+

    "<td><input type='button' id='edit_button" + table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'>"+
    "<input type='button' id='save_button" + table_len + "' value='💾' class='save' onclick='save_row(" + table_len + ")'>"+
    "<input type='button' value='🗑️' class='delete' onclick='delete_row(" + table_len + ")'>"+
    "<input type='button' value='🤓' class='ver'></td></tr>";
    
    document.getElementById("new_nombre").value = "";
    document.getElementById("new_telefono").value = "";
    document.getElementById("new_ubicacion").value = "";
    document.getElementById("new_tutor").value = "";
    document.getElementById("new_logo").value = "";

    
    actualizar();
  }
  
  
=======

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
    var telefonohtml = document.getElementById("Telefono" + no);
    var ubicacionhtml = document.getElementById("Ubicacion" + no);
    var tutorhtml = document.getElementById("Tutor" + no);
    var logohtml = document.getElementById("Logo" + no);

  
    var nombre = nombrehtml.innerHTML;
    var telefono = telefonohtml.innerHTML;
    var ubi = ubicacionhtml.innerHTML;
    var tutor = tutorhtml.innerHTML;
    var logo = logohtml.innerHTML;
  
  
    nombrehtml.innerHTML = "<input type='text' id='nombre_text" + no + "' value='" + nombre + "'>";
    telefonohtml.innerHTML = "<input type='text' id='telefono_text" + no + "' value='" + telefono + "'>";
    ubicacionhtml.innerHTML = "<input type='text' id='ubi_text" + no + "' value='" + ubi + "'>";
    tutorhtml.innerHTML = "<input type='text' id='tutor_text" + no + "' value='" + tutor + "'>";
    logohtml.innerHTML = "<input type='file' id='logo_text" + no + "' value='" + logo + "'>";

  }
  
  //Guardar
  function save_row(no) {
    var nombrehtml = document.getElementById("nombre_text" + no).value;
    var telefonohtml = document.getElementById("telefono_text" + no).value;
    var ubicacionhtml = document.getElementById("ubi_text" + no).value;
    var tutorhtml = document.getElementById("tutor_text" + no).value;
    var logohtml = document.getElementById("logo_text" + no).value;

  
    document.getElementById("Nombre" + no).innerHTML = nombrehtml;
    document.getElementById("Telefono" + no).innerHTML = telefonohtml;
    document.getElementById("Ubicacion" + no).innerHTML = ubicacionhtml;
    document.getElementById("Tutor" + no).innerHTML = tutorhtml;
    document.getElementById("Logo" + no).innerHTML = logohtml;

  
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
    var new_telefono = document.getElementById("new_telefono").value;
    var new_ubicacion = document.getElementById("new_ubicacion").value;
    var new_tutor = document.getElementById("new_tutor").value;
    var new_logo = document.getElementById("new_logo").value;

  
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length)-1;
    table.insertRow(table_len).outerHTML = 
    "<tr id='row" + table_len + "'>"+
    "<td id='Nombre" +table_len+"'>"+new_nombre+"</td>"+
    "<td id='Telefono" +table_len+"'>"+new_telefono+"</td>"+
    "<td id='Ubicacion" +table_len+"'>"+new_ubicacion+"</td>"+
    "<td id='Tutor" +table_len+"'>"+new_tutor+"</td>"+
    "<td id='Logo" +table_len+"'>"+new_logo+"</td>"+

    "<td><input type='button' id='edit_button" + table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'>"+
    "<input type='button' id='save_button" + table_len + "' value='💾' class='save' onclick='save_row(" + table_len + ")'>"+
    "<input type='button' value='🗑️' class='delete' onclick='delete_row(" + table_len + ")'>"+
    "<input type='button' value='🤓' class='ver'></td></tr>";
    
    document.getElementById("new_nombre").value = "";
    document.getElementById("new_telefono").value = "";
    document.getElementById("new_ubicacion").value = "";
    document.getElementById("new_tutor").value = "";
    document.getElementById("new_logo").value = "";

    
    actualizar();
  }
  
  
>>>>>>> 7c9e2d14699533a2b4a0d5123f6a473b088cb471
  