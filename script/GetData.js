let ApiKey = "475a3aa7cb5e49118a8183946241210";
// You Can Use Your Own Api Key

function GetData(city) {
  fetch(`http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}`)
    .then((response) => response.json())
    .then((Data) => {
      Data.forEach((element) => {
        console.log(element);
      });
    });
}
