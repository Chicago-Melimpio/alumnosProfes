
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
    var id = document.getElementById("id_row" + no);
    var producto = document.getElementById("producto_row" + no);
    var precio = document.getElementById("precio_row" + no);
    var cantidadDisponible = document.getElementById("cantidadDisponible_row" + no)
    var id_data = id.innerHTML;
    var producto_data = producto.innerHTML;
    var precio_data = precio.innerHTML;
    var cantidadDisponible_data = cantidadDisponible.innerHTML;
    id.innerHTML = "<input type='text' id='id_text" + no + "' value='" + id_data + "'>";
    producto.innerHTML = "<input type='text' id='producto_text" + no + "' value='" + producto_data + "'>";
    precio.innerHTML = "<input type='text' id='precio_text" + no + "' value='" + precio_data + "'>";
    cantidadDisponible.innerHTML = "<input type='text' id='cantidadDisponible_text" + no + "' value='" + cantidadDisponible_data + "'>";
}

//Guardar
function save_row(no) {
    var id_val = document.getElementById("id_text" + no).value;
    var producto_val = document.getElementById("producto_text" + no).value;
    var precio_val = document.getElementById("precio_text" + no).value;
    var cantidadDisponible_val = document.getElementById("cantidadDisponible_text" + no).value;
    document.getElementById("id_row" + no).innerHTML = id_val;
    document.getElementById("producto_row" + no).innerHTML = producto_val;
    document.getElementById("precio_row" + no).innerHTML = precio_val;
    document.getElementById("cantidadDisponible_row" + no).innerHTML = cantidadDisponible_val;
    document.getElementById("edit_button" + no).style.display = "inline";
    document.getElementById("save_button" + no).style.display = "none";
}

//Borrar
function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

//Añadir
function add_row() {
    var new_id = document.getElementById("new_id").value;
    var new_producto = document.getElementById("new_producto").value;
    var new_precio = document.getElementById("new_precio").value;
    var new_cantidadDisponible = document.getElementById("new_cantidadDisponible").value;
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='id_row" + table_len + "'>" + new_id + "</td><td id='producto_row" + table_len + "'>" + new_producto + "</td><td id='precio_row" + table_len + "'>" + new_precio + "</td><td id='cantidadDisponible_row" + table_len + "'>" + new_cantidadDisponible + "</td><td><input type='button' id='edit_button" + table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='💾' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='🗑️' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
    document.getElementById("new_id").value = "";
    document.getElementById("new_producto").value = "";
    document.getElementById("new_precio").value = "";
    document.getElementById("new_cantidadDisponible").value = "";
}


