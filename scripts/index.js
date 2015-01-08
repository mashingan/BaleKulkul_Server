window.onload = function() {
  /*
  function checkInput(type) {
    var input = document.createElement("input");
    input.setAttribute("type", type);
    return input.type == "date";
  }
  */
  var button = document.querySelector('.button');
  var listin = document.querySelectorAll('output');
  var outlis = ['Triwara', 'Pancawara', 'Saptawara', 'Wuku'];
  var date = document.querySelector(".date").value;
  /*
  var supportDate = checkInput("date");
  if(supportDate)
    date = date.match(/(\d+)[^\/|-]/g).reverse().join('-');
  button.onclick = function() {
    var date = document.querySelector(".date").value;
    if(!date) return;
    var data = { 'date': date };
    var req = new XMLHttpRequest();
    req.open('POST', 'http://127.0.0.1:3000/date_property');
    req.onreadystatechange = function() {
      if(req.readyState === 4 && req.status === 200) {
        var type = req.getResponseHeader("Content-Type");
        if(type === "application/json") {
          result = JSON.parse(req.responseText);
          for(var i=0; i<outlis.length; i++) {
            var li = listin[i];
            var perulangan = outlis[i];
            li.innerHTML = perulangan + ": " + result[perulangan];
          }
        }
      }
    };
    req.setRequestHeader("Content-Type",
        "application/x-www-form-urlencoded");
    req.send(encodeFormData(data));
  };
  */
}

/*
function encodeFormData(data) {
  if(!data) return "";
  var pairs = [];
  for(var name in data) {
    if(!data.hasOwnProperty(name)) continue;
    if(typeof data[name] === 'function') continue;
    var value = data[name].toString();
    name = encodeURIComponent(name.replace(" ", "+"));
    value = encodeURIComponent(value.replace(" ", "+"));
    pairs.push(name + "=" + value);
  }
  return pairs.join('&');
}
*/
