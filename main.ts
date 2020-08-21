//% weight=70 icon="\uf075" color=#00FFFF block="KAGA_IoT"
namespace comment {
    let p1 = DigitalPin.P0;
    let p2 = DigitalPin.P16;
    export class KAGA_IoT {
        pin1: DigitalPin;
        pin2: DigitalPin;        
    }
    
    //% blockId=INIT block="ピン指定 %PIN1 %PIN2"
    export function init(PIN1: DigitalPin, PIN2: DigitalPin) :KAGA_IoT{
        let block = new KAGA_IoT();
        block.pin1 = PIN1;
        block.pin2 = PIN2;
        serial.setBaudRate(BaudRate.BaudRate9600)
        return block
    }
    //% blockId=SSID block="SSID %string %v"

    export function sendSSID(){

    }
}