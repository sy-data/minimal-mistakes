var vorigin = location.origin;
var sdir = "cascade";
var starget = "db2.jsp";
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

function ccv2sendValueRequest(a, b, c) {
    __hR = ccv2getXMLHttpRequest();
    __hM = c ? c : 'GET';
    if (__hM != 'GET' && __hM != 'POST') {
        __hM = 'GET'
    }
    __hP = (a == null || a == '') ? null : a;
    __hU = vURL;
    if (__hM == 'GET' && __hP != null) {
        __hU = __hU + "?" + __hP
    }
    __hR.open(__hM, __hU);
    __hR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    __hR.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (b) {
                    ccv2setSelectObj(b, this.responseXML)
                }
            } else {
                alert("Error")
            }
        }
    }
    __hR.send(__hM == 'POST' ? __hP : null)
}

function ccv2clearSelectObj(a) {
    var b = a
    while (b.childNodes.length > 2) {
        b.removeChild(b.childNodes[2])
    }
}

function ccv2setSelectObj(a, b) {
    ccv2clearSelectObj(a);
    var c = null;
    var d = a._fM.c ? a._fM.c[0].c[0]["@useValue"] : '';
    if(!b){return;}
    for (var i = 0; i < b.getElementsByTagName("cd").length; i++) {
        var f = b.getElementsByTagName("cd")[i].firstChild.nodeValue;
        var g = b.getElementsByTagName("cdnm")[i].firstChild.nodeValue;
        c = document.createElement("option");
        c.value = f;
        c.dv = g;
        c.setAttribute("dv", g);
        if (f == d) {
            c.selected = true
        }
        c.appendChild(document.createTextNode(g));
        a.appendChild(c)
    }
    try {
        a.onchange()
    } catch (e) {}
}

function getcombos() {
    var a = {},
        _dt2 = {},
        _dt3 = {},
        _dt4 = {};
    var b = {},
        _dc2 = {},
        _dc3 = {},
        _dc4 = {};
    var c = {},
        _gd2 = {};
    var d = (typeof getFormWarpRequest == "function" ? getFormWarpRequest() : document.forms["formWarpRequest"]);
    try {
        _dt4 = d._oLstChoicesdept4
    } catch (e) {
        console.log(e);
        return
    }
    try {
        _dt3 = d._oLstChoicesdept3;
        _dt3.onchange = function() {
            ccv2sendValueRequest("sqlType=Lv5" + "&objValue=" + this.options[this.selectedIndex].value, _dt4, "POST")
        }
    } catch (e) {
        console.log(e);
        return
    }
    try {
        _dt2 = d._oLstChoicesdept2;
        _dt2.onchange = function() {
            ccv2sendValueRequest("sqlType=Lv4" + "&objValue=" + this.options[this.selectedIndex].value, _dt3, "POST")
        }
    } catch (e) {
        console.log(e);
        return
    }
    try {
        a = d._oLstChoicesdept1;
        a.onchange = function() {
            ccv2sendValueRequest("sqlType=Lv3" + "&objValue=" + this.options[this.selectedIndex].value, _dt2, "POST")
        };
        ccv2sendValueRequest("sqlType=Lv2" + "&objValue=", a, "POST")
    } catch (e) {
        console.log(e);
        return
    }
    try {
        _dc4 = d._oLstChoicescat4
    } catch (e) {
        console.log(e)
    }
    try {
        _dc3 = d._oLstChoicescat3;
        _dc3.onchange = function() {
            ccv2sendValueRequest("sqlType=Dc4" + "&objValue=" + this.options[this.selectedIndex].value, _dc4, "POST")
        }
    } catch (e) {
        console.log(e)
    }
    try {
        _dc2 = d._oLstChoicescat2;
        _dc2.onchange = function() {
            ccv2sendValueRequest("sqlType=Dc3" + "&objValue=" + this.options[this.selectedIndex].value, _dc3, "POST")
        }
    } catch (e) {
        console.log(e)
    }
    try {
        b = d._oLstChoicescat1;
        b.onchange = function() {
            ccv2sendValueRequest("sqlType=Dc2" + "&objValue=" + this.options[this.selectedIndex].value, _dc2, "POST")
        };
        ccv2sendValueRequest("sqlType=Dc1" + "&objValue=", b, "POST")
    } catch (e) {
        console.log(e)
    }
    try {
        _gd2 = d._oLstChoicesgd2
    } catch (e) {
        console.log(e)
    }
    try {
        c = d._oLstChoicesgd1;
        c.onchange = function() {
            ccv2sendValueRequest("sqlType=gd2" + "&objValue=" + this.options[this.selectedIndex].value, _gd2, "POST")
        };
        ccv2sendValueRequest("sqlType=gd1" + "&objValue=", c, "POST")
    } catch (e) {
        console.log(e)
    }
}
