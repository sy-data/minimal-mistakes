var vorigin=location.origin;var sdir="cascade";var starget="200.jsp";var sURL=vorigin+"/"+sdir+"/"+starget;var vURL=sURL;function ccv2getXMLHttpRequest(){if(window.ActiveXObject){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e1){return null}}}else if(window.XMLHttpRequest){return new XMLHttpRequest()}else{return null}}function ccv2sendValueRequest(_p,_o,_m){__hR=ccv2getXMLHttpRequest();__hM=_m?_m:'GET';if(__hM!='GET'&&__hM!='POST'){__hM='GET'}__hP=(_p==null||_p=='')?null:_p;__hU=vURL;if(__hM=='GET'&&__hP!=null){__hU=__hU+"?"+__hP}__hR.open(__hM,__hU);__hR.setRequestHeader('Content-Type','application/x-www-form-urlencoded');__hR.onreadystatechange=function(){if(this.readyState==4){if(this.status==200){if(_o){ccv2setSelectObj(_o,this.responseXML)}}else{alert("Error")}}};__hR.send(__hM=='POST'?__hP:null);} function ccv2clearSelectObj(_o){var __o=_o; while(__o.childNodes.length>2){__o.removeChild(__o.childNodes[2])}}function ccv2setSelectObj(_o,_r){ccv2clearSelectObj(_o);var __o=null;var _v=_o._fM.c?_o._fM.c[0].c[0]["@useValue"]:'';if(!_r){return}for(var i=0;i<_r.getElementsByTagName("cd").length;i++){var cd=_r.getElementsByTagName("cd")[i].firstChild.nodeValue;var cdnm=_r.getElementsByTagName("cdnm")[i].firstChild.nodeValue;__o=document.createElement("option");__o.value=cd;__o.dv=cdnm;__o.setAttribute("dv",cdnm);if(cd==_v){__o.selected=true}__o.appendChild(document.createTextNode(cdnm));_o.appendChild(__o)}try{_o.onchange()}catch(e){}}function getcombos(){var _dt1={},_dt2={},_dt3={},_dt4={};var _dc1={},_dc2={},_dc3={},_dc4={};var _gd1={},_gd2={};var fw=(typeof getFormWarpRequest=="function"?getFormWarpRequest():document.forms["formWarpRequest"]);try{_dt4=fw._oLstChoicesdept4}catch(e){console.log(e);return}try{_dt3=fw._oLstChoicesdept3;_dt3.onchange=function(){ccv2sendValueRequest("sqlType=Lv5"+"&objValue="+this.options[this.selectedIndex].value,_dt4,"POST")}}catch(e){console.log(e);return}try{_dt2=fw._oLstChoicesdept2;_dt2.onchange=function(){ccv2sendValueRequest("sqlType=Lv4"+"&objValue="+this.options[this.selectedIndex].value,_dt3,"POST")}}catch(e){console.log(e);return}try{_dt1=fw._oLstChoicesdept1;_dt1.onchange=function(){ccv2sendValueRequest("sqlType=Lv3"+"&objValue="+this.options[this.selectedIndex].value,_dt2,"POST")};ccv2sendValueRequest("sqlType=Lv2"+"&objValue=",_dt1,"POST")}catch(e){console.log(e);return}try{_dc4=fw._oLstChoicescat4}catch(e){console.log(e);return}try{_dc3=fw._oLstChoicescat3;_dc3.onchange=function(){ccv2sendValueRequest("sqlType=Dc4"+"&objValue="+this.options[this.selectedIndex].value,_dc4,"POST")}}catch(e){console.log(e);return}try{_dc2=fw._oLstChoicescat2;_dc2.onchange=function(){ccv2sendValueRequest("sqlType=Dc3"+"&objValue="+this.options[this.selectedIndex].value,_dc3,"POST")}}catch(e){console.log(e);return}try{_dc1=fw._oLstChoicescat1;_dc1.onchange=function(){ccv2sendValueRequest("sqlType=Dc2"+"&objValue="+this.options[this.selectedIndex].value,_dc2,"POST")};ccv2sendValueRequest("sqlType=Dc1"+"&objValue=",_dc1,"POST")}catch(e){console.log(e);return}try{_gd2=fw._oLstChoicesgd2}catch(e){console.log(e);return}try{_gd1=fw._oLstChoicesgd1;_gd1.onchange=function(){ccv2sendValueRequest("sqlType=gd2"+"&objValue="+this.options[this.selectedIndex].value,_gd2,"POST")};ccv2sendValueRequest("sqlType=gd1"+"&objValue=",_gd1,"POST")}catch(e){console.log(e);return}}





var vorigin = location.origin;
var sdir = "cascade";
var starget = "200.jsp";
var sURL = vorigin + "/" + sdir + "/" + starget;
var vURL = sURL;

function ccv2getXMLHttpRequest() {
    if (window.ActiveXObject) {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e1) {
                return null
            }
        }
    } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest()
    } else {
        return null
    }
}

function ccv2sendValueRequest(_p, _o, _m) {
    __hR = ccv2getXMLHttpRequest();
    __hM = _m ? _m : 'GET';
    if (__hM != 'GET' && __hM != 'POST') {
        __hM = 'GET'
    }
    __hP = (_p == null || _p == '') ? null : _p;
    __hU = vURL;
    if (__hM == 'GET' && __hP != null) {
        __hU = __hU + "?" + __hP
    }
    __hR.open(__hM, __hU);
    __hR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    __hR.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (_o) {
                    ccv2setSelectObj(_o, this.responseXML)
                }
            } else {
                alert("Error")
            }
        }
    }
    __hR.send(__hM == 'POST' ? __hP : null)
}

function ccv2clearSelectObj(_o) {
    var __o = _o
    while (__o.childNodes.length > 2) {
        __o.removeChild(__o.childNodes[2])
    }
}

function ccv2setSelectObj(_o, _r) {
    ccv2clearSelectObj(_o);
    var __o = null;
    var _v = _o._fM.c ? _o._fM.c[0].c[0]["@useValue"] : '';
    if (!_r) {
        return
    }
    for (var i = 0; i < _r.getElementsByTagName("cd").length; i++) {
        var cd = _r.getElementsByTagName("cd")[i].firstChild.nodeValue;
        var cdnm = _r.getElementsByTagName("cdnm")[i].firstChild.nodeValue;
        __o = document.createElement("option");
        __o.value = cd;
        __o.dv = cdnm;
        __o.setAttribute("dv", cdnm);
        if (cd == _v) {
            __o.selected = true
        }
        __o.appendChild(document.createTextNode(cdnm));
        _o.appendChild(__o)
    }
    try {
        _o.onchange()
    } catch (e) {}
}

function getcombos() {
    var _dt1 = {},
        _dt2 = {},
        _dt3 = {},
        _dt4 = {};
    var _dc1 = {},
        _dc2 = {},
        _dc3 = {},
        _dc4 = {};
    var _gd1 = {},
        _gd2 = {};
    var fw = (typeof getFormWarpRequest == "function" ? getFormWarpRequest() : document.forms["formWarpRequest"]);
    try {
        _dt4 = fw._oLstChoicesdept4
    } catch (e) {
        console.log(e);
        
    }
    try {
        _dt3 = fw._oLstChoicesdept3;
        _dt3.onchange = function() {
            ccv2sendValueRequest("sqlType=Lv5" + "&objValue=" + this.options[this.selectedIndex].value, _dt4, "POST")
        }
    } catch (e) {
        console.log(e);
        
    }
    try {
        _dt2 = fw._oLstChoicesdept2;
        _dt2.onchange = function() {
            ccv2sendValueRequest("sqlType=Lv4" + "&objValue=" + this.options[this.selectedIndex].value, _dt3, "POST")
        }
    } catch (e) {
        console.log(e);
        
    }
    try {
        _dt1 = fw._oLstChoicesdept1;
        _dt1.onchange = function() {
            ccv2sendValueRequest("sqlType=Lv3" + "&objValue=" + this.options[this.selectedIndex].value, _dt2, "POST")
        };
        ccv2sendValueRequest("sqlType=Lv2" + "&objValue=", _dt1, "POST")
    } catch (e) {
        console.log(e);
        
    }
    try {
        _dc4 = fw._oLstChoicescat4
    } catch (e) {
        console.log(e)
    }
    try {
        _dc3 = fw._oLstChoicescat3;
        _dc3.onchange = function() {
            ccv2sendValueRequest("sqlType=Dc4" + "&objValue=" + this.options[this.selectedIndex].value, _dc4, "POST")
        }
    } catch (e) {
        console.log(e)
    }
    try {
        _dc2 = fw._oLstChoicescat2;
        _dc2.onchange = function() {
            ccv2sendValueRequest("sqlType=Dc3" + "&objValue=" + this.options[this.selectedIndex].value, _dc3, "POST")
        }
    } catch (e) {
        console.log(e)
    }
    try {
        _dc1 = fw._oLstChoicescat1;
        _dc1.onchange = function() {
            ccv2sendValueRequest("sqlType=Dc2" + "&objValue=" + this.options[this.selectedIndex].value, _dc2, "POST")
        };
        ccv2sendValueRequest("sqlType=Dc1" + "&objValue=", _dc1, "POST")
    } catch (e) {
        console.log(e)
    }
    try {
        _gd2 = fw._oLstChoicesgd2
    } catch (e) {
        console.log(e)
    }
    try {
        _gd1 = fw._oLstChoicesgd1;
        _gd1.onchange = function() {
            ccv2sendValueRequest("sqlType=gd2" + "&objValue=" + this.options[this.selectedIndex].value, _gd2, "POST")
        };
        ccv2sendValueRequest("sqlType=gd1" + "&objValue=", _gd1, "POST")
    } catch (e) {
        console.log(e)
    }
}

