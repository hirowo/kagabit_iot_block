
enum MyEnum {
    //% block="年"
    ONE = 1　,
    //% block="月"
    TWO = 2 ,
    //% block="日"
    THREE= 3,
    //% block="時間"
    FOUR = 4,
    //% block="分"
    HUN = 5,
    //% block="秒"
    BYOU = 6

}



//% weight=70 icon="\uf075" color=#FF0000 block="KAGA_IoT"
namespace KAGA_IoT {
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

   //% blockId=SCONNECT 
   //% block="SSID %string1 PASSWORD %string2 に接続"
    export function SConnect(ssid : string,pass : string) {
        serial.writeString("SS ");
        serial.writeString(ssid);
        serial.writeString("\n");
        serial.writeString("PA ");
        serial.writeString(pass);
        serial.writeString("\n");
        serial.writeString("WS");
        serial.writeString("\n");
    }
   //% blockId=sendtag 
   //% block="タグを送信する %string "
 //   export function Sendtag(str : string) {
 //       serial.writeString("SSD ");
 //       serial.writeString(str);
 //       serial.writeString("\n");
 //   }    
//     //% blockId=sendsatring 
//     //% block="文字列をwebに表示する %string データ %number"
//    export function SendString(str : string,int : number) {
//        serial.writeString("SSD ");
//        serial.writeString(str);
//        serial.writeString(int.toString());
 //       serial.writeString("\n");
//    }
 //    //% blockId=mdsn block="ホスト名を設定 %string "
 //   export function set_mdsn(str : string) {
//        serial.writeString("MD ");
//        serial.writeString(str);
//        serial.writeString("\n");
//    }
//    //% blockId=S_web block="webサーバー開始 "
//    export function start_web() : void {
//        serial.writeString("SWEB");
//        serial.writeString("\n");
//    }
    //% blockId=START_AMB 
    //% block="チャネルid %String1 ライトキー %String2"
    export function startAmb(ambient_id : string,key : string) {
        serial.writeString("SAMB ");
        serial.writeString(ambient_id);
        serial.writeString(" ");
        serial.writeString(key);
        serial.writeString("\n");
    }
    //% blockId=SET_AM 
    //% block="Ambient チャート番号 %number1 データ %number2 "
    export function SetAmb(channel : number,data : number) {
        serial.writeString("STA ");
        serial.writeString(channel.toString());
        serial.writeString(" ");
        serial.writeString(data.toString());
        serial.writeString("\n");
    }
    //% blockId=SEND_AMB block="Ambientにデータを送信"
    export function SendAmb()  : void{
        serial.writeString("SEA ");
        serial.writeString("\n");
    }
    //% blockId=SET_MQTT 
    //%block="MQTTサーバーアドレス指定　%String "
    export function SetMqtt(m_address : string) {
        serial.writeString("SMT ");
        serial.writeString(m_address);
        serial.writeString("\n");
    }
    //% blockId=PUB_MQTT 
    //%block="トピックを指定　%String データをパブリッシュ %number"
    export function PubMqtt(topic : string,data : number) {
        serial.writeString("PUB ");
        serial.writeString(topic);
        serial.writeString(" ");
        serial.writeString(data.toString());
        serial.writeString("\n");
    }       
    //% blockId=SUB_MQTT 
    //%block="トピックを指定　%Stringからサブスクライブする"
    export function SubMqtt(topic : string){
        serial.writeString("SUB ");
        serial.writeString(topic);
        serial.writeString("\n");
    }       
    //% blockId=Get_time 
    //%block="時間を取得する"
    export function Gettime() : void{
        serial.writeString("TG");
        serial.writeString("\n");
    }
    //% blockId=Read_time 
    //%block="%MyEnumを読む"       
    export function ReadTime(e: MyEnum) : String {
        // Add code here
        serial.writeString("RT ");
        if(e == 1){
            serial.writeString("1");
        }
        else if(e == 2){
            serial.writeString("2");
        }
        else if(e == 3){
            serial.writeString("3");
        }
        else if(e == 4){
            serial.writeString("4");
        }
        else if(e == 5){
            serial.writeString("5");
        }
        else if(e == 6){
            serial.writeString("6");
        }
        else {

        }
        serial.writeString("\n");
 
        return serial.readString();
    }
}
