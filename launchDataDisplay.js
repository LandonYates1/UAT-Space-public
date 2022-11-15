// a class for setting up the data from data loader
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digitalSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
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
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digitalSensor_temp = digitalSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
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
    msg += "; </td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}