reqest = new XMLHttpRequest();
reqest.open('GET', 'https://swapi.dev/api/planets/', true);


function createAndAppendRow(name, terrain){
    let table = document.getElementById('planets');
    let new_row = document.createElement('tr');
    let name_td = document.createElement('td');
    let terrain_td = document.createElement('td');

    name_td.innerHTML = name;
    terrain_td.innerHTML = terrain;

    new_row.appendChild(name_td);
    new_row.appendChild(terrain_td);

    table.appendChild(new_row);
}

function onRequestComplete(){
    if(reqest.readyState == XMLHttpRequest.DONE && reqest.status == 200){
        let data = JSON.parse(reqest.responseText);
        for(let planet of data.results){
            createAndAppendRow(planet.name, planet.terrain);    
        }
        
    }
}

reqest.onreadystatechange = onRequestComplete;

reqest.send();
