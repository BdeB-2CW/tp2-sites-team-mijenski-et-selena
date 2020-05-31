function ins_film() {
    let film_rec = {
    };
    film_rec.id_film = document.getElementById("id_film").value;
    film_rec.titre = document.getElementById("titre").value;
  
    const URL =
      "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/film/";
  
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(film_rec),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }