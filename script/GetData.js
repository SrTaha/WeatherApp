let ApiKey = "475a3aa7cb5e49118a8183946241210";
// You Can Use Your Own Api Key

function GetData(city) {
  fetch(`https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}`)
    .then((response) => response.json())
    .then((Data) => {
      console.log(Data["current"]);
      ShowData(Data["current"]);
    });
}

function ShowData(weather) {
  console.log(weather);
}
