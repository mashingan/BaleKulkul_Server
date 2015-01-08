var EPOCH = 1900;
var PATTERN = /(\d+)[^\/|-]/g;

/*
 * kabisats:
 *   Calculating how many kabisats' years in time span between
 *   given year and primordial year, Y0
 */
function kabisats(year) {
  return Math.round((year-EPOCH) / 4);
}

function calcdays(date) {
  function months(mth) {
    var days = 0;
    for(var i=1; i<mth; i++) {
      if(extraday.indexOf(i) === -1)
        days += 31;
      else
        days += 30;
    }
    return days;
  }
  var extraday = [0, 2, 4, 6, 7, 9, 11];
  var dayarr = date.match(PATTERN);
  var day = parseInt(dayarr[0]);
  var month = parseInt(dayarr[1]);
  var year = parseInt(dayarr[2]);
  var days = day + months(month) + (year - EPOCH) * 365 +
    kabisats(year);
  return days;
}

function trawatara(day) {
  return ['Pasah', 'Beteng', 'Kajeng'][(day-1) % 3];
}

function pancawara(day) {
    var pancalist = ["Umanis", "Paing", "Pon", "Wage", "Kliwon"];
    return pancalist[(day-1) % 5];
}
function saptawara(day) {
  return  ["Redite", "Coma", "Anggara","Buda", "Wrespati",
          "Sukra", "Saniscara"][(day-1) % 7];
}

function wuku(day) {
  var wukulist = [
    "Sinta", "Landep", "Ukir", "Kulantir", "Tolu",
    "Gumbreg", "Wariga", "Warigadean", "Julungwangi", "Sungsang",
    "Dungulan", "Kuningan", "Langkir", "Medangsya", "Pujut",
    "Pahang", "Krulut", "Merakih", "Tambir", "Medangkungan",
    "Matal", "Uye", "Menail", "Prangbakat", "Bala",
    "Ugu", "Wayang", "Kelawu", "Dukut", "Watugunung"
  ];
  idx = (Math.floor((day-1) / 7) + 12) % 30;
  return wukulist[idx];
}
