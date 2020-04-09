cordova.define("com.idtechproducts.uniMagPlugin", function(require, exports, module) { 
/* 
 * Cordova plugin for uniMag.
 * Copyright 2019, IDTECH. All tights reserved.
 * version:2.1.
 * 2019-10-30
*/
    //internal area
    function checkHasInDict(key,dict){
        for(var k in dict){
            if (k == key){
               return true;
            }
        }
        return false ;
    };
               
    var s_dict = null;
    function stateChangeNotification(strMSG){
        var strFlag = strMSG.substring(0, 7);
        var nLen = strMSG.length;
        var strInfo = strMSG.substr(8, nLen-8);
        var strNotification = "";
               
        if ("STATECH" == strFlag) //just a state notif
        {
               if("attach" == strInfo)
                    strNotification = "AttachmentNotification";
               else if ("detach" == strInfo)
                    strNotification = "DetachmentNotification";
               else if ("powering" == strInfo)
                    strNotification = "PoweringNotification";
               else if ("connected" == strInfo)
                    strNotification = "DidConnectNotification";
               else if ("disconnect" == strInfo)
                    strNotification = "DidDisconnectNotification";
               else if ("swipe" == strInfo)
                    strNotification = "CardSwipeNotification";
               else if ("processing" == strInfo)
                    strNotification = "CardDataProcessingNotification";
               
               var funcion1 = s_dict[strNotification];
               funcion1();
               return;
        }
        else if ("SWIPEER" == strFlag) //swipe task fail
        {
               strNotification = "CardSwipeFailedNotification";
        }
        else if ("CMNDERR" == strFlag) //CMD task fail
        {
               strNotification = "CMDFailedNotification";
        }
        else if ("CONNECT" == strFlag) //connect task fail
        {
               strNotification = "ConnectFailedNotification";
        }
        else if ("SYSMESG" == strFlag) //from the SDK, message show
        {
               strNotification = "SystemMessageNotification";
        }
               
        var funcionTemp = s_dict[strNotification];
        funcionTemp(strInfo);
        
    };
    function CMD_response_Notification(aryBuffer){
               
            if (checkHasInDict("DidReceiveCmdResponseNotification",s_dict)){
               var funcionTemp = s_dict["DidReceiveCmdResponseNotification"];
               funcionTemp(aryBuffer);
            }
    };
    function card_data_Notification (aryBuffer){
               if (checkHasInDict("DidReceiveCardDataNotification",s_dict)){
                    var funcionTemp = s_dict["DidReceiveCardDataNotification"];
                    funcionTemp(aryBuffer);
               }
               
    };
               
    //interface area
    var Run=require('cordova/exec');
    module.exports=
    {
               
        //common function area
        getSDK_version: function(f_callbk){
               Run(f_callbk,null,"uniMagPlugin","getSDKVersion",[]);
        },
        enableLogging: function(flag){
               Run(null,null,"uniMagPlugin","enableLogging",[flag]);
        },
        initUniMagObj: function(){
               Run(null,null,"uniMagPlugin","initUniMagObj",[]);
        },
        destroyUniMagObj: function(){
               Run(null,null,"uniMagPlugin","destroyUniMagObj",[]);
        },
               
        registerObservers:function(dictionaryCallbaks){
               s_dict = dictionaryCallbaks;
               
               Run(stateChangeNotification,null,"uniMagPlugin","register_stateChange_Notification",[]);
               Run(CMD_response_Notification,null,"uniMagPlugin","register_CMD_response_Notification",[]);
               Run(card_data_Notification,null,"uniMagPlugin","register_card_data_Notification",[]);
        },
        isReaderAttached: function(f_callbk){
               Run(f_callbk,null,"uniMagPlugin","isReaderAttached",[]);
        },
        getConnectionStatus: function(f_callbk){
               Run(f_callbk,null,"uniMagPlugin","getConnectionStatus",[]);
        },
        getRunningTask:function(f_callbk){
               Run(f_callbk,null,"uniMagPlugin","getRunningTask",[]);
        },
        getVolumeLevel:function(f_callbk){
               Run(f_callbk,null,"uniMagPlugin","getVolumeLevel",[]);
        },
        getReaderType:function(f_callbk){
               Run(f_callbk,null,"uniMagPlugin","getReaderType",[]);
        },
        setReaderType:function(type){
               Run(null,null,"uniMagPlugin","setReaderType",[type]);
        },
        setAutoConnect:function(flag){
               Run(null,null,"uniMagPlugin","setAutoConnect",[flag]);
        },
        setSwipeTimeoutDuration:function(nDuration){
               Run(null,null,"uniMagPlugin","setSwipeTimeoutDuration",[nDuration]);
        },
        setAutoAdjustVolume:function(flag){
               Run(null,null,"uniMagPlugin","setAutoAdjustVolume",[flag]);
        },
        setDeferredActivateAudioSession:function(flag){
               Run(null,null,"uniMagPlugin","setDeferredActivateAudioSession",[flag]);
        },
        cancelTask:function(){
               Run(null,null,"uniMagPlugin","cancelTask",[]);
        },
        getFlagByte:function(f_callbk){
               Run(f_callbk,null,"uniMagPlugin","getFlagByte",[]);
        },
               
        //Connect task area
        startUniMag:function(cflag){
               Run(null,null,"uniMagPlugin","startUniMag",[cflag]);
        },
               
        //Swipe task area
        requestSwipe:function(){
               Run(null,null,"uniMagPlugin","requestSwipe",[]);
        },
        
        //CMD area
        sendCommandGetVersion:function(){
               Run(null,null,"uniMagPlugin","sendCommandGetVersion",[]);
        },
        sendCommandGetSettings:function(){
               Run(null,null,"uniMagPlugin","sendCommandGetSettings",[]);
        },
        sendCommandEnableTDES:function(){
               Run(null,null,"uniMagPlugin","sendCommandEnableTDES",[]);
        },
        sendCommandEnableAES:function(){
               Run(null,null,"uniMagPlugin","sendCommandEnableAES",[]);
        },
        sendCommandDefaultGeneralSettings:function(){
               Run(null,null,"uniMagPlugin","sendCommandDefaultGeneralSettings",[]);
        },
        sendCommandGetSerialNumber:function(){
               Run(null,null,"uniMagPlugin","sendCommandGetSerialNumber",[]);
        },
        sendCommandGetNextKSN:function(){
               Run(null,null,"uniMagPlugin","sendCommandGetNextKSN",[]);
        },
        sendCommandEnableErrNotification:function(){
               Run(null,null,"uniMagPlugin","sendCommandEnableErrNotification",[]);
        },
        sendCommandDisableErrNotification:function(){
               Run(null,null,"uniMagPlugin","sendCommandDisableErrNotification",[]);
        },
        sendCommandEnableExpDate:function(){
               Run(null,null,"uniMagPlugin","sendCommandEnableExpDate",[]);
        },
        sendCommandDisableExpDate:function(){
               Run(null,null,"uniMagPlugin","sendCommandDisableExpDate",[]);
        },
        sendCommandEnableForceEncryption:function(){
               Run(null,null,"uniMagPlugin","sendCommandEnableForceEncryption",[]);
        },
        sendCommandDisableForceEncryption:function(){
               Run(null,null,"uniMagPlugin","sendCommandDisableForceEncryption",[]);
        },
        sendCommandSetPrePAN:function(prePAN){
               Run(null,null,"uniMagPlugin","sendCommandSetPrePAN",[prePAN]);
        },
        sendCommandClearBuffer:function(){
               Run(null,null,"uniMagPlugin","sendCommandClearBuffer",[]);
        },
        sendCommandResetBaudRate:function(){
               Run(null,null,"uniMagPlugin","sendCommandResetBaudRate",[]);
        },
        sendCommandCustom:function(hexStr){
               Run(null,null,"uniMagPlugin","sendCommandCustom",[hexStr]);
        }
    };


});
