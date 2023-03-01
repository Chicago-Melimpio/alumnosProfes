document.querySelector("#new_dias").innerHTML = document.querySelector("table").rows.length +1;

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
    horas.innerHTML = "<input type='number' id='horas_text" + no + "' value='" + horas_data + "'>";

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

tareasCamilo = [];
tareasMiguel = [];
tareasRoyce = [];
tareasPepelu = [];
function add_row() {
    var new_dias = document.getElementById("new_dias").value;
    var new_actividades = document.getElementById("new_actividades").value;
    var new_observaciones = document.getElementById("new_observaciones").value;
    var new_horas = document.getElementById("new_horas").value;
    
    if (new_actividades.trim() === "" || new_observaciones.trim() === "" || new_horas.trim() === "") {
        alert("Rellena todos los campos antes de guardar");
        return;
    }

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='dias_row" + table_len + "'>" + table_len +
     "</td><td id='actividades_row" + table_len + "'>" + new_actividades + "</td><td id='observaciones_row" + table_len + "'>" +
      new_observaciones + "</td><td id='horas_row" + table_len + "'>" + new_horas +"</td><td><input type='button' id='edit_button" +
       table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
        "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>";

    document.getElementById("new_dias").textContent = table_len+1;
    document.getElementById("new_actividades").value = "";
    document.getElementById("new_observaciones").value = "";
    document.getElementById("new_horas").value = "";
    actividadesObj = {
    actividades : new_actividades,
    observaciones : new_observaciones,
    horas : new_horas,
    nombre : nombre
}
var bdd = window.localStorage;
    var nombre;
    if(window.location.href.includes("Royce")){
         nombre = "royce";
         tareasRoyce.push(actividadesObj)
         bdd.setItem("tareasRoyce", JSON.stringify(tareasRoyce));
    }else if  (window.location.href.includes("epelu")){
         nombre = "pepelu";
         tareasPepelu.push(actividadesObj)
         bdd.setItem("tareasPepelu", JSON.stringify(tareasPepelu));
    }else if (window.location.href.includes("iguel")){
         nombre = "miguel"
         tareasMiguel.push(actividadesObj)
         bdd.setItem("tareasMiguel", JSON.stringify(tareasMiguel));
    }else {
         nombre = "camilo";
         tareasCamilo.push(actividadesObj)
         bdd.setItem("tareasCamilo", JSON.stringify(tareasCamilo));
    }
        
        
        
        // tareas.push(actividadesObj)
        // bdd.setItem("tareaAlumno", JSON.stringify(tareas));


}



 

function cargarJson(){
    document.querySelector("table").rows.length
var data = document.querySelector("#data")
fetch('https://raw.githubusercontent.com/Chicago-Melimpio/alumnosProfes/main/profesores.json')
  .then(response => response.json())
  .then(data => {

    // -----------------------------------------------------------------
 


    // -----------------------------------------------------------------
    data.profesores.forEach(profesor =>{
        console.log(profesor)
        if (profesor.nombre == "Aaron"){
        
            if (window.location.href.includes("Miguel")){
               for (i = 0; i <= profesor.alumnos[0].actividades.length; i++){
                const row = document.createElement("tr");
                row.innerHTML = `<tr> 
                <td>${document.querySelector("table").rows.length -1}</td>
                <td>${profesor.alumnos[0].actividades[i].valor}</td>
                <td>${profesor.alumnos[0].observacionesa[i].valor}</td>
                <td>${profesor.alumnos[0].horas}</td>
                <td><input type='button' id='edit_button" +
           table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
            "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
          document.querySelector('#data').appendChild(row);
               }
            }else if (window.location.href.includes("Camilo")){
                for (i = 0; i <= profesor.alumnos[1].actividades.length; i++){
                    const row = document.createElement("tr");
                    row.innerHTML = `<tr> 
                    <td>${document.querySelector("table").rows.length -1}</td>
                    <td>${profesor.alumnos[1].actividades[i].valor}</td>
                    <td>${profesor.alumnos[1].observacionesa[i].valor}</td>
                    <td>${profesor.alumnos[1].horas}</td>
                    <td><input type='button' id='edit_button" +
               table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
                "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
              document.querySelector('#data').appendChild(row);
                   }
            }
        }else{
            if (window.location.href.includes("alRoyce")){
                for (i = 0; i <= profesor.alumnos[0].actividades.length; i++){
                 const row = document.createElement("tr");
                 row.innerHTML = `<tr> 
                 <td>${document.querySelector("table").rows.length -1}</td>
                 <td>${profesor.alumnos[0].actividades[i].valor}</td>
                 <td>${profesor.alumnos[0].observacionesa[i].valor}</td>
                 <td>${profesor.alumnos[0].horas}</td>
                 <td><input type='button' id='edit_button" +
            table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
             "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
           document.querySelector('#data').appendChild(row);
                }
             }else if (window.location.href.includes("Pepelu")) {
                 for (i = 0; i <= profesor.alumnos[1].actividades.length; i++){
                     const row = document.createElement("tr");
                     row.innerHTML = `<tr> 
                     <td>${document.querySelector("table").rows.length -1}</td>
                     <td>${profesor.alumnos[1].actividades[i].valor}</td>
                     <td>${profesor.alumnos[1].observacionesa[i].valor}</td>
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

function tareasNuevas(){
    // var tareasNuevas = JSON.parse(localStorage.getItem("tareaAlumno"));
    // console.log(tareasNuevas)
    
    // tareasNuevas.forEach(alumno => {
        if (window.location.href.includes("Royce")){
            var tareasNuevasRoyce = JSON.parse(localStorage.getItem("tareasRoyce"));
            tareasNuevasRoyce.forEach(dia =>{
              
                    const fila = document.createElement("tr");
                    fila.innerHTML = 
                    `<tr> 
                    <td>${document.querySelector("table").rows.length -1}</td>
                <td>${dia.actividades}</td>
                <td>${dia.observaciones}</td>
                <td>${dia.horas}</td>
                
                <td><input type='button' id='edit_button" +
                table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
                "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
                document.querySelector("#data").appendChild(fila);
                    
            })
            
    } else if (window.location.href.includes("Pepelu")){
        var tareasNuevasPepelu = JSON.parse(localStorage.getItem("tareasPepelu"));
        tareasNuevasPepelu.forEach(dia =>{
                const fila = document.createElement("tr");
                fila.innerHTML = 
                `<tr> 
                <td>${document.querySelector("table").rows.length -1}</td>
            <td>${dia.actividades}</td>
            <td>${dia.observaciones}</td>
            <td>${dia.horas}</td>
            
            <td><input type='button' id='edit_button" +
            table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
            "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
            document.querySelector("#data").appendChild(fila);
                
        })
} else if (window.location.href.includes("Miguel")){
    var tareasNuevasMiguel = JSON.parse(localStorage.getItem("tareasMiguel"));
        tareasNuevasMiguel.forEach(dia =>{
                const fila = document.createElement("tr");
                fila.innerHTML = 
                `<tr> 
                <td>${document.querySelector("table").rows.length -1}</td>
            <td>${dia.actividades}</td>
            <td>${dia.observaciones}</td>
            <td>${dia.horas}</td>
            
            <td><input type='button' id='edit_button" +
            table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
            "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
            document.querySelector("#data").appendChild(fila);
                
        })
} else if (window.location.href.includes("Camilo")){
    var tareasNuevasCamilo = JSON.parse(localStorage.getItem("tareasCamilo"));
    tareasNuevasCamilo.forEach(dia =>{
                const fila = document.createElement("tr");
                fila.innerHTML = 
                `<tr> 
                <td>${document.querySelector("table").rows.length -1}</td>
            <td>${dia.actividades}</td>
            <td>${dia.observaciones}</td>
            <td>${dia.horas}</td>
            
            <td><input type='button' id='edit_button" +
            table_len + "' value='📝' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len +
            "' value='💾' class='save' onclick='save_row(" + table_len + ")' style='display:none' > </tr>`
            document.querySelector("#data").appendChild(fila);
                
        })
}
    // })

}
function inicializar() {
    cargarJson();
    setTimeout(()=>{
        tareasNuevas();
    },100)
    
}
inicializar();
