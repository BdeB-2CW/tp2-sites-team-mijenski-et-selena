function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const act_ul = document.getElementById("acteurs");
//const URL = "http://localhost:8080/ords/hr2/employees"; si la bd est locale
const URL =
  "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/acteur/";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let acteurs = data.items; //.results;
    return acteurs.map(function (acteur) {
      
                                    let li = createNode("li"),
                                      span = createNode("span");
                                    span.innerHTML = `${acteur.id_acteur} ${acteur.nom}`;
                                    append(li, span);
                                    append(act_ul, li);
                                  
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
