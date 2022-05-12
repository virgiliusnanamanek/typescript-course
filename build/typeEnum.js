"use strict";
//number
var Monts;
(function (Monts) {
    Monts[Monts["Jan"] = 1] = "Jan";
    Monts[Monts["Feb"] = 2] = "Feb";
    Monts[Monts["Mar"] = 3] = "Mar";
    Monts[Monts["Apr"] = 4] = "Apr";
    Monts[Monts["May"] = 5] = "May";
})(Monts || (Monts = {}));
//string
var Bulan;
(function (Bulan) {
    Bulan["Jan"] = "January";
    Bulan["Feb"] = "February";
    Bulan["Mar"] = "March";
    Bulan["Apr"] = "April";
    Bulan["May"] = "May";
})(Bulan || (Bulan = {}));
console.log(Monts);
console.log(Bulan);
