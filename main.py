@namespace
class comment:
    # let p1 = DigitalPin.P0;
    # let p2 = DigitalPin.P16;
    # pin1: DigitalPin;
    # pin2: DigitalPin;        
    class KAGA_IoT(Enum):
    # % blockId=INIT block="初期化　    "
    def init():
        block = KAGA_IoT()
        serial.redirect(SerialPin.P0, SerialPin.P1, 9600)
    # % blockId=SSID block="SSID %string "
    def sendSSID(ssid: str):
        serial.write_string("SS ")
        serial.write_string(ssid)
        serial.write_string("\n")
    # % blockId=PASS block="PASSWORD %string"
    def sendPASS(pass: str):
        serial.write_string("PA ")
        serial.write_string(pass)
        serial.write_string("\n")
    # % blockId=SCONNECT block="接続       "
    def Connect():
        serial.write_string("WS")
        serial.write_string("\n")
    # % blockId=sendsatring block="文字列をwebに表示する %string データ%number"
    def SendString(str: str, int: number):
        serial.write_string("SSD ")
        serial.write_string(str)
        serial.write_string(int.to_string())
        serial.write_string("\n")
    # % blockId=mdsn block="ホスト名を設定 %string "
    def set_mdsn(str: str):
        serial.write_string("MD ")
        serial.write_string(str)
        serial.write_string("\n")
    # % blockId=S_web block="webサーバー開始 "
    def start_web():
        serial.write_string("SWEB")
        serial.write_string("\n")
    # % blockId=START_AMB block="チャネルid %String ライトキー %String "
    def startAmb(ambient_id: str, key: str):
        serial.write_string("SAMB ")
        serial.write_string(ambient_id)
        serial.write_string(" ")
        serial.write_string(key)
        serial.write_string("\n")
    # % blockId=SET_AM block="Ambient　チャート番号　%number データ %number "
    def SetAmb(channel: number, data: number):
        serial.write_string("STA ")
        serial.write_string(channel.to_string())
        serial.write_string(" ")
        serial.write_string(data.to_string())
        serial.write_string("\n")
    # % blockId=SEND_AMB block="Ambientにデータを送信"
    def SendAmb():
        serial.write_string("SEA")
        serial.write_string("\n")