var siteLinki = "https://ww1.kodlamakampi.com/";
var xmlLinki = "https://ww1.kodlamakampi.com/durum.xml";
var x = new XMLHttpRequest();
x.open("GET", xmlLinki, true);
x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200) {
        var doc = x.responseXML;
        var hizmet = doc.getElementsByTagName("hizmet")[0].childNodes[0].nodeValue;
        if (hizmet == "Aktif") {
            window.location.replace(siteLinki);
        }
    }
};
x.send(null);
setInterval(() => {
    var x = new XMLHttpRequest();
    x.open("GET", xmlLinki, true);
    x.onreadystatechange = function () {
        if (x.readyState == 4 && x.status == 200) {
            var doc = x.responseXML;
            var hizmet = doc.getElementsByTagName("hizmet")[0].childNodes[0].nodeValue;
            if (hizmet == "Aktif") {
                window.location.replace(siteLinki);
            }
        }
    };
    x.send(null);
}, 10000);