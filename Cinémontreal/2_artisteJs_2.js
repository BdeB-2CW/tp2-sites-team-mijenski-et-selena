function ins_art() {
    let art_rec = {
    };
    art_rec.id_artiste = document.getElementById("id_artiste").value;
    art_rec.nom = document.getElementById("nom").value;
  
    const URL =
      "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/artiste/";
  
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(act_rec),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }