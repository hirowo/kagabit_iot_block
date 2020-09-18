//% weight=70 icon="\uf075" color=#00FFFF block="KAGA_IoT"
namespace comment {
//    let p1 = DigitalPin.P0;
//    let p2 = DigitalPin.P16;
    export class KAGA_IoT {
//        pin1: DigitalPin;
//        pin2: DigitalPin;        
    }
    
    //% blockId=INIT block="初期化　%v"
    export function init() : void{
        let block = new KAGA_IoT();
        serial.redirect(SerialPin.P0, SerialPin.P1, 9600)
    }
    //% blockId=SSID block="SSID %string %v"
    export function sendSSID(ssid : string){
        serial.writeString("SS ");
        serial.writeString(ssid);
        serial.writeString("\n");
    }
    //% blockId=PASS block="PASSWORD %string %v"
    export function sendPASS(pass : string){
        serial.writeString("PA ");
        serial.writeString(pass);
        serial.writeString("\n");
    }
   //% blockId=SCONNECT block="接続  %v"
    export function Connect() : void {
        serial.writeString("WS");
        serial.writeString("\n");
    }
     //% blockId=sendsatring block="文字列を表示する %string %v"
    export function SendString(str : string,interval : number) {
        serial.writeString("SSD ");
        serial.writeString(str);
        serial.writeString(interval.toString());
        serial.writeString("\n");
    }
     //% blockId=mdsn block="ホスト名を設定 %string %v"
    export function set_mdsn(str : string) {
        serial.writeString("MD ");
        serial.writeString(str);
        serial.writeString("\n");
    }
    //% blockId=S_web block="webサーバー開始 %v"
    export function start_web() : void {
        serial.writeString("SWEB");
        serial.writeString("\n");
    }
    //% blockId=START_AMB block="Ambientサービスに接続 %String %String %v"
    export function startAmb(ambient_id : string,key : string) {
        serial.writeString("SAMB ");
        serial.writeString(ambient_id);
        serial.writeString(" ");
        serial.writeString(key);
        serial.writeString("\n");
    }
    //% blockId=SET_AMB block="Ambient送信データをセット %String %String %v"
    export function SetAmb(channel : number,data : string) {
        serial.writeString("STA ");
        serial.writeString(channel.toString());
        serial.writeString(" ");
        serial.writeString(data);
        serial.writeString("\n");
    }
    //% blockId=SEND_AMB block="Ambientにデータを送信%v"
    export function SendAmb()  : void{
        serial.writeString("SEA");
        serial.writeString("\n");
    }
        

}