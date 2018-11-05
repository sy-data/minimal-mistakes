//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Copyright (C) 2008 JangSangYeul. All rights reserved.
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Update date : 2018
// user : JangSangYeul
// Version     : 2
// Product     : cognos Analytics 11
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 0.Common control
//		0.1
//
// 1.Prompt control
//		1.1 Value prompt
//		1.2 Text Box prompt
//		1.3 Date prompt
// 2.
//		2.1
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// Statuc Variables Area
var URL = "http://olap.tmoncorp.com/cascade/db2.jsp";

//------------
function getXMLHttpRequest() {
	if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1) { return null; }
		}
	} else if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		return null;
	}
}



function sendValueRequest(params, obj, method) {

//	console.log("sendValueRequest("+params+","+obj._fM.getName()+","+method+")");
	httpRequest = getXMLHttpRequest();
	httpMethod = method ? method : 'GET';
	
	if (httpMethod != 'GET' && httpMethod != 'POST') {
		httpMethod = 'GET';
	}
	httpParams = (params == null || params == '') ? null : params;
	httpUrl = URL;
	
	if (httpMethod == 'GET' && httpParams != null) {
		httpUrl = httpUrl + "?" + httpParams;
	}
	
	httpRequest.open(httpMethod, httpUrl);
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = function () {
//console.log(this.readyState + " | " + this.status);
		if(this.readyState == 4) {
			if(this.status == 200) {
		      	if (obj) {
		         		setSelectObj(obj, this.responseXML);
				}
				} else {
				alert("Error");
			}
		}
	}
	httpRequest.send(httpMethod == 'POST' ? httpParams : null);
//	console.log(obj._fM.getName() + "sended");
}



function clearSelectObj(selObj) {
//console.log("clearSelectObj("+selObj._fM.getName()+")");
    var sClasses = selObj
    while(sClasses.childNodes.length > 2) {
        sClasses.removeChild(sClasses.childNodes[2]);
    }
}

function setSelectObj(selObj,res) {
//console.log("setSelectObj("+selObj._fM.getName()+")");
	clearSelectObj(selObj);
//console.log("cleared");
	
	var opt = null;
//console.log(res);
//console.log(selObj.id);
//console.log(selObj.innerHTML);

	var val = selObj._fM.c?selObj._fM.c[0].c[0]["@useValue"]:'' ;
	
	for(var i=0;i<res.getElementsByTagName("code").length;i++) {

		var cd = res.getElementsByTagName("cd")[i].firstChild.nodeValue;
        var cdnm = res.getElementsByTagName("cdnm")[i].firstChild.nodeValue;

		opt = document.createElement("option");
		opt.value = cd;
		opt.dv = cdnm;
		if(cd==val){ opt.selected = true; }
		// 두번째 값을 세팅하는 경우
		//if ( i == 0 ) {
		//	opt.selected = true;
		//}
		opt.appendChild(document.createTextNode(cdnm));
        selObj.appendChild(opt);
//		console.log(opt.outerHTML);
    }
//console.log("opt set");
//console.log(selObj.innerHTML);
selObj.onchange();
}


function getcombos(){

	var dept1 = {}, dept2 = {}, dept3={}, dept4={};
	var fw = (typeof getFormWarpRequest == "function" ? getFormWarpRequest() : document.forms["formWarpRequest"]);
	
	try{ dept1 = fw._oLstChoicesdept1;} catch(e){ console.log(e); return;}
	try{ dept2 = fw._oLstChoicesdept2;} catch(e){ console.log(e); return;}
	try{ dept3 = fw._oLstChoicesdept3;} catch(e){ console.log(e); return;}
	try{ dept4 = fw._oLstChoicesdept4;} catch(e){ console.log(e); return;}
	
	dept1.onchange = function(){
			sendValueRequest("sqlType=Lv3" + "&objValue=" + this.options[this.selectedIndex].value, dept2, "POST");
		};
	
	dept2.onchange = function(){
			sendValueRequest("sqlType=Lv4" + "&objValue=" + this.options[this.selectedIndex].value, dept3, "POST");
		};
	//if(dept1._fM.c){ sendValueRequest("sqlType=Lv3" + "&objValue=" + dept1._fM.c[0].c[0]["@useValue"], dept2, "POST");}

	dept3.onchange = function(){
			let svr = sendValueRequest("sqlType=Lv5" + "&objValue=" + this.options[this.selectedIndex].value, dept4, "POST");
		};
	//if(dept2._fM.c){ sendValueRequest("sqlType=Lv4" + "&objValue="+ dept2._fM.c[0].c[0]["@useValue"], dept3, "POST");}
//	if(dept3._fM.c){ sendValueRequest("sqlType=Lv5" + "&objValue="+ dept3._fM.c[0].c[0]["@useValue"], dept4, "POST");}

	sendValueRequest("sqlType=Lv2" + "&objValue=", dept1, "POST");

}
