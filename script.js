fetch("https://randomuser.me/api/?gender=male")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    document.getElementById("nombre").innerHTML =
      data.results[0].name.first + " " + data.results[0].name.last;

    document.getElementById("imagen").src = data.results[0].picture.large;

    document.getElementById("email").innerHTML =
      "Email: " + data.results[0].email;

    document.getElementById("telefono").innerHTML =
      "Celular: " + data.results[0].cell;

    document.getElementById("direccion").innerHTML =
      "Direccion: " +
      data.results[0].location.street.name +
      " " +
      data.results[0].location.street.number;

    document.getElementById("ciudad").innerHTML =
      "Ciudad: " + data.results[0].location.city;

    document.getElementById("pais").innerHTML =
      "Pais: " + data.results[0].location.country;
  });
