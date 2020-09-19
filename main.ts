namespace comment {
//    let p1 = DigitalPin.P0;
//    let p2 = DigitalPin.P16;
    export class KAGA_IoT {
//        pin1: DigitalPin;
//        pin2: DigitalPin;        
    }
    
    //% blockId=INIT block="初期化　    "
    export function init() : void{
        let block = new KAGA_IoT();
        serial.redirect(SerialPin.P0, SerialPin.P1, 9600)
    }
    //% blockId=SSID block="SSID %string "
    export function sendSSID(ssid : string){
        serial.writeString("SS ");
        serial.writeString(ssid);
        serial.writeString("\n");
    }
    //% blockId=PASS block="PASSWORD %string"
    export function sendPASS(pass : string){
        serial.writeString("PA ");
        serial.writeString(pass);
        serial.writeString("\n");
    }
   //% blockId=SCONNECT block="接続       "
    export function Connect() : void {
        serial.writeString("WS");
        serial.writeString("\n");
    }
     //% blockId=sendsatring 
     //% block="文字列をwebに表示する %string データ %number"
    export function SendString(str : string,int : number) {
        serial.writeString("SSD ");
        serial.writeString(str);
        serial.writeString(int.toString());
        serial.writeString("\n");
    }
     //% blockId=mdsn block="ホスト名を設定 %string "
    export function set_mdsn(str : string) {
        serial.writeString("MD ");
        serial.writeString(str);
        serial.writeString("\n");
    }
    //% blockId=S_web block="webサーバー開始 "
    export function start_web() : void {
        serial.writeString("SWEB");
        serial.writeString("\n");
    }
    //% blockId=START_AMB 
    //% block="チャネルid %String ライトキー %String "
    export function startAmb(ambient_id : string,key : string) {
        serial.writeString("SAMB ");
        serial.writeString(ambient_id);
        serial.writeString(" ");
        serial.writeString(key);
        serial.writeString("\n");
    }
    //% blockId=SET_AM block="Ambient　チャート番号　%number データ %number "
    export function SetAmb(channel : number,data : number) {
        serial.writeString("STA ");
        serial.writeString(channel.toString());
        serial.writeString(" ");
        serial.writeString(data.toString());
        serial.writeString("\n");
    }
    //% blockId=SEND_AMB block="Ambientにデータを送信"
    export function SendAmb()  : void{
        serial.writeString("SEA");
        serial.writeString("\n");
    }
        

}
