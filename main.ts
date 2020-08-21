//% weight=70 icon="\uf075" color=#00FFFF block="KAGA_IoT"
namespace comment {
    let p1 = DigitalPin.P0;
    let p2 = DigitalPin.P16;
    export class KAGA_IoT {
        pin1: DigitalPin;
        pin2: DigitalPin;        
    }
    
    //% blockId=INIT block="初期化"
    export function init() :KAGA_IoT{
        let block = new KAGA_IoT();
        serial.redirect(SerialPin.P0, SerialPin.P1, 9600)
        return block
    }
    //% blockId=SSID block="SSID %string %v"
    export function sendSSID(ssid : number){

    }
}