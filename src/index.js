function updateKansasCityTime() {
  let kansasCityElement = document.querySelector("#kansas-city");
  let kansasCityDateElement = kansasCityElement.querySelector(".date");
  let kansasCityTimeElement = kansasCityElement.querySelector(".time");
  let kansasCityTime = moment().tz("America/Chicago");

  kansasCityDateElement.innerHTML = kansasCityTime.format("MMMM DO YYYY");
  kansasCityTimeElement.innerHTML = kansasCityTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

setInterval(updateKansasCityTime);

function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM DO YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>]");
}

setInterval(updateParisTime, 1000);
