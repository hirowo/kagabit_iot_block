


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

enum vpin {
    //% block="V0"
    V0 = 0,
    //% block="V1"
    V1 = 1,
    //% block="V2"
    V2 = 2,
    //% block="V3"
    V3 = 3,

}
enum val {
    //% block="Value1"
    Value1 = 1,
    //% block="Value2"
    Value2 = 2,
    //% block="Value3"
    Value3 = 3,
    //% block="Value4"
    Value4 = 4,

}


enum spin {
    //% block="V4"
    V4 = 4,
    //% block="V5"
    V5 = 5,
    //% block="V6"
    V6 = 6,
    //% block="V7"
    V7 = 7,

}



//% weight=70 icon="\uf075" color=#FF0000 block="KAGA_IoT"
namespace KAGA_IoT {
//    let p1 = DigitalPin.P0;
//    let p2 = DigitalPin.P16;
    let error_code : string;
    let recv_data : string;
    let recv_time_data: string;
//   blynkデータ
    let recv_blynk_str: string;
    let rech_blynk_channel: number;
    let recv_blynk_data0: number;
    let recv_blynk_data1: number;
    let recv_blynk_data2: number;
    let recv_blynk_data3: number;

    let connect_flg : number;
    let tme_flg: number;
    let time_data: number;

    interface DeviceState {
        nextCommand: number;
    }
    const MICROBIT_KAGABIT_ERROR_RECIEV_ID = 3757;
    const MICROBIT_KAGABIT_PUBRISH_RECIEV_ID = 3758;
    const MICROBIT_KAGABIT_BLYNK_RECIEV_ID = 3759;

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
            else if (buf.charAt(0) == 'B'){
                if (buf.charAt(1) == '0'){
                    rech_blynk_channel = 0;
                    recv_blynk_str = buf.substr(3);
                    recv_blynk_data0 = parseInt(recv_blynk_str, 10);
                }
                else if (buf.charAt(1) == '1') {
                    rech_blynk_channel = 1;
                    recv_blynk_str = buf.substr(3);
                    recv_blynk_data1 = parseInt(recv_blynk_str, 10);
                }
                else if (buf.charAt(1) == '2') {
                    rech_blynk_channel = 2;
                    recv_blynk_str = buf.substr(3);
                    recv_blynk_data2 = parseInt(recv_blynk_str, 10);
                }
                else if (buf.charAt(1) == '3') {
                    rech_blynk_channel = 3;
                    recv_blynk_str = buf.substr(3);
                    recv_blynk_data3 = parseInt(recv_blynk_str, 10);
                }
                else {
                    rech_blynk_channel = 0;
                    recv_blynk_str = buf.substr(3);
                    recv_blynk_data0 = parseInt(recv_blynk_str, 10);
                }

                control.raiseEvent(
                    MICROBIT_KAGABIT_BLYNK_RECIEV_ID,
                    0
                )

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
    //% blockId=IFTURL 
    //%block="EVENT%String1とKEY%String2を設定する"
    export function SetURL(event: string,key : string): void {
        serial.writeString("EVK");
        serial.writeString(" ");
        serial.writeString(event);
        serial.writeString(" ");
        serial.writeString(key);
        serial.writeString("\n");
    }
    //% blockId=SNDIFT 
    //%block="data%val %numberをIFTTTに送信する"
    export function SendIFT(e: val,data: number): void {
        serial.writeString("SIF");
        serial.writeString(" ");
        serial.writeString(e.toString());
        serial.writeString(" ");
        serial.writeString(data.toString());
        serial.writeString("\n");
    }
    //% blockId=SNDIFTSTR 
    //%block="文字列（半角）%StringをIFTTTに送信する"
    export function SendIFTSTR(data: string): void {
        serial.writeString("SIS");
        serial.writeString(" ");
        serial.writeString(data);
        serial.writeString("\n");
    }

    //% blockId=SEND_AUTH 
    //%block="AUTH_ID%Stringを設定する"
    export function SetAuth(auth: string): void {
        serial.writeString("GTA");
        serial.writeString(" ");
        serial.writeString(auth);
        serial.writeString("\n");
    }
    //% blockId=SEND_TEMPLATE_ID
    //%block="TEMPLATE_ID%Stringを設定する"
    export function SetTempId(template: string): void {
        serial.writeString("GTT");
        serial.writeString(" ");
        serial.writeString(template);
        serial.writeString("\n");
    }
    //% blockId=START_ID
    //%block="BLYNKサービス開始"
    export function StartBlynk(): void {
        serial.writeString("STB");
        serial.writeString("\n");
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
    //% blockID = BLYNK_REC
    //%block="blynkのデータを受信"
    export function blynk_recv(handler: () => void) {
        control.onEvent(
            MICROBIT_KAGABIT_BLYNK_RECIEV_ID,
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
    //% blockId=Read_blynk_ch 
    //%block="受信ピン"       
    export function Readblynk_ch(): number {
        // Add code here

        return rech_blynk_channel;
    }
    //% blockId=Read_blynk_data 
    //%block="BLYNKの受信データを読む %number"       
    export function Readsubblinkdata(e: vpin): number {
        // Add code here
        let i: number;
        if(e == 0){
            i = recv_blynk_data0;
        }
        else if (e == 1) {
            i = recv_blynk_data1;
        }
        else if (e == 2) {
            i = recv_blynk_data2;
        }
        else if (e == 3) {
            i = recv_blynk_data3;
        }
        else {
            i = recv_blynk_data1;
        }

        return i;
    }
    //% blockId=send_blynk_data 
    //%block="BLYNKにデータを送信する %number1 %number2"       
    export function sendblinkdata(e: spin,data:number): void {
        // Add code here
        let i: number;
        serial.writeString("SNB ");
        serial.writeString(e.toString());
        serial.writeString(" ");
        serial.writeString(data.toString());
        serial.writeString("\n");

    }

    //% blockId=ondata 
    //%block="サブスク"       
 //   export function　Readsub() : string {
 //       serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    
 //       })
 //       return serial.readString();
 //   }
}
