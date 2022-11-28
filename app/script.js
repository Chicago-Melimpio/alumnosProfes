function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "inline";
    var actividades = document.getElementById("actividades_row" + no);
    var observaciones = document.getElementById("observaciones_row" + no);
    var horas = document.getElementById("horas_row" + no);

    var actividades_data = actividades.innerHTML;
    var observaciones_data = observaciones.innerHTML;
    var horas_data = horas.innerHTML;

    actividades.innerHTML = "<input type='text' id='actividades_text" + no + "' value='" + actividades_data + "'>";
    observaciones.innerHTML = "<input type='text' id='observaciones_text" + no + "' value='" + observaciones_data + "'>";
    horas.innerHTML = "<input type='text' id='horas_text" + no + "' value='" + horas_data + "'>";

}

function save_row(no) {
    var actividades_val = document.getElementById("actividades_text" + no).value;
    var observaciones_val = document.getElementById("observaciones_text" + no).value;
    var horas_val = document.getElementById("horas_text" + no).value;

    document.getElementById("actividades_row" + no).innerHTML = actividades_val;
    document.getElementById("observaciones_row" + no).innerHTML = observaciones_val;
    document.getElementById("horas_row" + no).innerHTML = horas_val;
    document.getElementById("edit_button" + no).style.display = "inline";
    document.getElementById("save_button" + no).style.display = "none";
}


function add_row() {
    var new_dias = document.getElementById("new_dias").value;
    var new_actividades = document.getElementById("new_actividades").value;
    var new_observaciones = document.getElementById("new_observaciones").value;
    var new_horas = document.getElementById("new_horas").value;
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='dias_row" + table_len + "'>" + table_len + "</td><td id='actividades_row" + table_len + "'>" + new_actividades + "</td><td id='observaciones_row" + table_len + "'>" + new_observaciones + "</td><td id='horas_row" + table_len + "'>" + new_horas +"</td><td><input type='button' id='edit_button" + table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='📝' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>";

    var numero = 2;
    document.getElementById("new_dias").textContent = table_len+1;
    document.getElementById("new_actividades").value = "";
    document.getElementById("new_observaciones").value = "";
    document.getElementById("new_horas").value = "";
}

// function increaseNum(){
//   document.getElementById("new_dias").value++;
// }


