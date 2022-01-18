


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
    let error_code : string;
    let recv_data : string;
    let recv_time_data: string;

    let connect_flg : number;
    let tme_flg: number;
    let time_data: number;

    interface DeviceState {
        nextCommand: number;
    }
    const MICROBIT_KAGABIT_ERROR_RECIEV_ID = 3757;
 
    const MICROBIT_KAGABIT_PUBRISH_RECIEV_ID = 3758;
    function readSerial() {
        let buf: string;
        while (true) {
            
           buf = serial.readUntil('\n');

            if(buf.charAt(0) == 'X'){
                error_code = buf.substr(2);
                control.raiseEvent(
                    MICROBIT_KAGABIT_ERROR_RECIEV_ID,
                    0
                )
            }
            else if (buf.charAt(0) == '#') {
                recv_data = buf.substr(2);
                control.raiseEvent(
                    MICROBIT_KAGABIT_PUBRISH_RECIEV_ID,
                    0
                )
            }
            else if (buf.charAt(0) == '$'){
                connect_flg = 1;
            }
            else if (buf.charAt(0) == 'T') {
                recv_time_data = buf.substr(2);
                time_data = parseInt(recv_time_data, 10);
                tme_flg = 1;
            }

            else{
//                basic.showIcon(IconNames.Happy, 1000);
            }

        }
    }
    let deviceState: DeviceState = undefined;
    export class KAGA_IoT {
//        pin1: DigitalPin;
//        pin2: DigitalPin;        
    }
    
    //% blockId=INIT block="初期化　    "
    export function init() : void{
        let block = new KAGA_IoT();
        connect_flg = 0;
        tme_flg = 0;
        serial.redirect(SerialPin.P0, SerialPin.P1, 9600)
        control.inBackground(readSerial);
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
   //% blockId=kakunin 
   //% block="接続を確認"
    export function cconnect() : number{
        
        return connect_flg;
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
    
    //% blockId=Read_timeb 
    //%block="%MyEnumを読む"       
    export function  ReadTime_Block(e: MyEnum): number{
        // Add code here
        let i : number;
        let buf : string;
        let result : string;

        serial.writeString("RT ");
        if (e == 1) {
            serial.writeString("1");
        }
        else if (e == 2) {
            serial.writeString("2");
        }
        else if (e == 3) {
            serial.writeString("3");
        }
        else if (e == 4) {
            serial.writeString("4");
        }
        else if (e == 5) {
            serial.writeString("5");
        }
        else if (e == 6) {
            serial.writeString("6");
        }
        else {

        }
        
        serial.writeString("\n");
        while(tme_flg == 0){
            basic.pause(1000);
        }
        tme_flg = 0;
        return time_data;
    }

    //% blockId=subsuku 
    //%block="データがパブリッシュされました"
    export function subsuku(handler: () => void){
        control.onEvent(
            MICROBIT_KAGABIT_PUBRISH_RECIEV_ID,
            EventBusValue.MICROBIT_EVT_ANY,
            () => {
                handler();
            }

        )
    }
    //% blockId=ERROR 
    //%block="エラーコードを受信"
    export function error_recv(handler: () => void) {
        control.onEvent(
            MICROBIT_KAGABIT_ERROR_RECIEV_ID,
            EventBusValue.MICROBIT_EVT_ANY,
            () => {

                handler();
            }

        )
    }
    //% blockId=Read_error_code 
    //%block="エラーコードを読む"       
    export function ReadEoorcode(): string {
        // Add code here

        return error_code;
    }
    //% blockId=Read_sub_data 
    //%block="サブスクライブしたデータを読む"       
    export function Readsubdata(): string {
        // Add code here

        return recv_data;
    }
    //% blockId=ondata 
    //%block="サブスク"       
 //   export function　Readsub() : string {
 //       serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    
 //       })
 //       return serial.readString();
 //   }
}
