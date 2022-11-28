// a class for setting up the data from data loader
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmp_altitude,
        bmp_pressure,
        bmp_temperature,
        dig_temperature,
        css_temperature,
        css_eCO2,
        css_TVOC,
        UV,
        accelx,
        accely,
        accelz,
        magneticx,
        magneticy,
        magneticz,
        gyrox,
        gyroy,
        gyroz
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmp_altitude = bmp_altitude;
        this.bmp_pressure = bmp_pressure;
        this.bmp_temperature = bmp_temperature;
        this.dig_temperature = dig_temperature;
        this.css_temperature = css_temperature;
        this.css_eCO2 = css_eCO2;
        this.css_TVOC = css_TVOC;
        this.UV = UV;
        this.accelx = accelx;
        this.accely = accely;
        this.accelz = accelz;
        this.magneticx = magneticx;
        this.magneticy = magneticy;
        this.magneticz = magneticz;
        this.gyrox = gyrox;
        this.gyroy = gyroy;
        this.gyroz = gyroz;
    }
}
// the getData fuction extracts the data from the dataLoader.js file
function getData(){
   var loadedData = loadData();
   return loadedData;
}
// function to setup data in the table
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += " </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
// function to update the data as it shows
function updateDataDisplay(){
    console.log("updateDataDisplay() started");
    //record and display time data.
    theTime = new Date();
    // get an if then statement ? //if true: if false.
    console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) 
    + ":" + (theTime.getSeconds < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()))
    //update table
    document.getElementById("clockTime").innerHTML = theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) 
    + ":" + (theTime.getSeconds < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds())
var timeRead = data[index].time_seconds;
if(timeRead >= 10){
    document.getElementById("dataTable").rows["seconds"].innerHTML =
    dataRow("Time Elapsed", data[index].time_seconds, "");
    document.getElementById("dataTable").rows["latitude"].innerHTML =
    dataRow("latitude", data[index].latitude, "");
    document.getElementById("dataTable").rows["longitude"].innerHTML =
    dataRow("longitude", data[index].longitude, "");
    document.getElementById("dataTable").rows["gps_altitude"].innerHTML =
    dataRow("gps_altitude", data[index].gps_altitude, "");
    document.getElementById("dataTable").rows["bmp_altitude"].innerHTML =
    dataRow("bmp_altitude", data[index].bmp_altitude, "");
    document.getElementById("dataTable").rows["bmp_pressure"].innerHTML =
    dataRow("bmp_pressure", data[index].bmp_pressure, "");
    document.getElementById("dataTable").rows["bmp_temperature"].innerHTML =
    dataRow("bmp_temperature", data[index].bmp_temperature, "");
    document.getElementById("dataTable").rows["dig_temperature"].innerHTML =
    dataRow("dig_temperature", data[index].dig_temperature, "");
    document.getElementById("dataTable").rows["css_temperature"].innerHTML =
    dataRow("css_temperature", data[index].css_temperature, "");
    document.getElementById("dataTable").rows["css_eCO2"].innerHTML =
    dataRow("css_eCO2", data[index].css_eCO2, "");
    document.getElementById("dataTable").rows["css_TVOC"].innerHTML =
    dataRow("css_TVOC", data[index].css_TVOC, "");
    document.getElementById("dataTable").rows["UV"].innerHTML =
    dataRow("UV", data[index].UV, "");
    document.getElementById("dataTable").rows["accelx"].innerHTML =
    dataRow("accelx", data[index].accelx, "");
    document.getElementById("dataTable").rows["accely"].innerHTML =
    dataRow("accely", data[index].accely, "");
    document.getElementById("dataTable").rows["accelz"].innerHTML =
    dataRow("accelz", data[index].accelz, "");
    document.getElementById("dataTable").rows["magneticx"].innerHTML =
    dataRow("magneticx", data[index].magneticx, "");
    document.getElementById("dataTable").rows["magneticy"].innerHTML =
    dataRow("magneticy", data[index].magneticy, "");
    document.getElementById("dataTable").rows["magneticz"].innerHTML =
    dataRow("magneticz", data[index].magneticz, "");
    document.getElementById("dataTable").rows["gyrox"].innerHTML =
    dataRow("gyrox", data[index].gyrox, "");
    document.getElementById("dataTable").rows["gyroy"].innerHTML =
    dataRow("gyroy", data[index].gyroy, "");
    document.getElementById("dataTable").rows["gyroz"].innerHTML =
    dataRow("gyroz", data[index].gyroz, "");
}
if(index < 500){
    index++;
}else{
    index = 0;
}
}