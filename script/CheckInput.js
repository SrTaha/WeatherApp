$(document).ready(function () {
  function CheckField() {
    let InputValue = $("input#cityInput").val();
    if (InputValue.length <= 0) {
      $("p#CityRequire").html("City Require");
    } else {
      GetData(InputValue);
      $("p#CityRequire").html("");
    }
  }

  $(document).keypress(function (e) {
    let key = e.which;
    if (key == 13) {
      CheckField();
    }
  });
});
