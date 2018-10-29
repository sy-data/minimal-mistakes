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
var PMPT_INIT = "필수선택";
var CASCADE_PAGE = true;


// Message Area
var MSG_TXT_MAXLENGTH = "텍스트 박스에 지정된 길이를 넘었습니다.";



// 0.Common Control Area

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//	setPointer - 마우스 포인터 아이콘을 변경
//
//	1) name : 마우스 포인터명 (default, wait, Etc.)
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function  setPointer(name) {
	var cognosForm = (typeof getFormWarpRequest == "function" ? getFormWarpRequest() : document.forms["formWarpRequest"]);
	cognosForm.style.cursor = name;
}

// 1.Prompt Control Area

// 1.1 Value prompt

// 필수체크



//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//	setValuePrompt - Value Prompt에 값을 지정
//
//	1) index
//  2) init
//  3) seq
//  4) period
//  5) value
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function setValuePrompt(index, init, seq, period, value) {

	var idxPrompt = document.getElementsByTagName('select')[index];
	var strPeriod = "";

	// set index 0 value using init parameter
	if(idxPrompt) {
		idxPrompt.options[0].text = init;
	}
}

// with AJAX ---------------------------------------------------------------------------------------------------
// Commom
//-------------------------------------------------------------------------------------------------------------
// getValuePrompt
//-------------------------------------------------------------------------------------------------------------
function getValuePrompt(index) {

	var idxPrompt = document.getElementsByTagName('select')[index];
	var value = "";

	for(var i=0;i<idxPrompt.options.length;i++) {
		if(idxPrompt.options[i].selected == true) {
			value = idxPrompt.options[i].value
			break;
		}
	}
	return value;
}

//-------------------------------------------------------------------------------------------------------------
// USE PROMPT PAGE, PAGE
// reset (index)
//		1)	index	- Reset을 위한 콤보박스의 인덱스
//		2)	value	- Reset 값
//-------------------------------------------------------------------------------------------------------------
function reset(index, value) {
	var resetValue = document.getElementsByTagName('select')[index];

	resetValue.options.length = 2;
}

//-------------------------------------------------------------------------------------------------------------
// USE PAGE
// setComboValue (val, index)
//		1)	index	- 값 선택을 위한 콤보박스의 인덱스
//		2)	val		- 선택할 값 (프롬프트 페이지에서 페이지로 넘어오는 파라미터 값)
//-------------------------------------------------------------------------------------------------------------
function setComboValue(index, val) {
	var combo = document.getElementsByTagName('select')[index];
	for(var i=0;i<combo.options.length;i++) {
		if(combo.options[i].value == val) {
			combo.options[i].selected = true;
			break;
		}
	}
}

//-------------------------------------------------------------------------------------------------------------
// USE PROMPT PAGE, PAGE
// setChangeValue (index1, index2, type)
//		1) index1	- Cascade 프롬프트의 첫번째 콤보박스 인덱스
//		2) index2	- Cascade 프롬프트의 두번째 콤보박스 인덱스
//		3) type		- JSP 파일에서 사용될 콤보박스2 타입명
//-------------------------------------------------------------------------------------------------------------
function setChangeValue(index1, index2, type) {
	var params = "";
	var idxPrompt = document.getElementsByTagName('select')[index1];

	if (idxPrompt) {
			params = "sqlType=" + type;
			params = params + "&objValue=" + idxPrompt.options[idxPrompt.selectedIndex].value;
	}
	sendValueRequest(params, index2, "POST");
}

//-------------------------------------------------------------------------------------------------------------
// USE PROMPT PAGE, PAGE
// setChangeValue2 (index1, index2, type)
//		1) index1	- Cascade 프롬프트의 첫번째 콤보박스 인덱스
//		2) index2	- Cascade 프롬프트의 두번째 콤보박스 인덱스
//		3) type		- JSP 파일에서 사용될 콤보박스2 타입명
//-------------------------------------------------------------------------------------------------------------
function setChangeValue2(index1, index2, type) {
	var params = "";
	var idxPrompt = document.getElementsByTagName('select')[index1];
	
	if (idxPrompt) {
			params = "sqlType=" + type;
			params = params + "&objValue=" + idxPrompt.options[idxPrompt.selectedIndex].value;
	}
	sendValueRequest(params, index2, "POST");
}

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
	console.log("sendValueRequest("+params+","+obj+","+method+")");
	httpRequest = getXMLHttpRequest();

	var httpMethod = method ? method : 'GET';
	if (httpMethod != 'GET' && httpMethod != 'POST') {
		httpMethod = 'GET';
	}
	var httpParams = (params == null || params == '') ? null : params;
	var httpUrl = URL;
	if (httpMethod == 'GET' && httpParams != null) {
		httpUrl = httpUrl + "?" + httpParams;
	}
	httpRequest.open(httpMethod, httpUrl);
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = function () {
		if(httpRequest.readyState == 4) {
			if(httpRequest.status == 200) {
		      	if (obj) {
		         		setSelectObj(obj);
				}
				} else {
				alert("Error");
			}
		}
	}
	httpRequest.send(httpMethod == 'POST' ? httpParams : null);
}

function clearSelectObj(selObj) {
console.log("clearSelectObj("+selObj+")");
    var sClasses = selObj
    while(sClasses.childNodes.length > 2) {
        sClasses.removeChild(sClasses.childNodes[2]);
    }
}

function setSelectObj(selObj) {
console.log("setSelectObj("+selObj+")");
	clearSelectObj(selObj);
console.log("cleared");
	var res = httpRequest.responseXML;
	var opt = null;
console.log(res);
console.log(selObj.id);
console.log(selObj.innerHTML);
	for(var i=0;i<res.getElementsByTagName("code").length;i++) {

		var cd = res.getElementsByTagName("cd")[i].firstChild.nodeValue;
        var cdnm = res.getElementsByTagName("cdnm")[i].firstChild.nodeValue;

		opt = document.createElement("option");
		opt.value = cd;
		opt.dv = cdnm;
		// 두번째 값을 세팅하는 경우
		//if ( i == 0 ) {
		//	opt.selected = true;
		//}
		opt.appendChild(document.createTextNode(cdnm));
        selObj.appendChild(opt);
		console.log(opt.outerHTML);
    }
console.log("opt set");
console.log(selObj.innerHTML);
}

// setCascade2Init
//-------------------------------------------------------------------------------------------------------------
// USE PROMPT PAGE, PAGE - Cascade가 2단계인 경우 적용
// setCascade2Init (index1, index2, type, param)
//		1) index1	- Cascade 프롬프트의 첫번째 콤보박스 인덱스
//		2) index2	- Cascade 프롬프트의 두번째 콤보박스 인덱스
//		3) type		- JSP 파일에서 사용될 콤보박스2 타입명(sqlType)
//		4) param	- 프롬프트 페이지에서 페이지로 넘어오는 두번째 콤보박스의 값(cognos에서 설정함)
//-------------------------------------------------------------------------------------------------------------
function setCascade2Init(index1, index2, type, param) {

	var idxPrompt = document.getElementsByTagName('select')[index1];

	if (idxPrompt) {
		// 첫번째 콤보박스에 값을 세팅
		setChangeValue(index1, index2, type);
		// 두번째 콤보박스에 값을 세팅
		if(param) {
			setComboValue(index2, param);
		}
		// Event체인지 이벤트 첫번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt.onchange = function () {
			setChangeValue(index1, index2, type);
		}
	}
}

// setCascade3Init
//-------------------------------------------------------------------------------------------------------------
// USE PROMPT PAGE, PAGE - Cascade가 3단계인 경우 적용
// setCascade3Init (index1, index2, index3, type1, type2, param1, param2)
//		1) index1	- Cascade 프롬프트의 첫번째 콤보박스 인덱스
//		2) index2	- Cascade 프롬프트의 두번째 콤보박스 인덱스
//		3) index3	- Cascade 프롬프트의 세번째 콤보박스 인덱스
//		3) type1		- JSP 파일에서 사용될 콤보박스2 타입명(sqlType)
//		4) type2		- JSP 파일에서 사용될 콤보박스3 타입명(sqlType)
//		5) param	1	- 프롬프트 페이지에서 페이지로 넘어오는 두번째 콤보박스의 값(cognos에서 설정함)
//		6) param	2	- 프롬프트 페이지에서 페이지로 넘어오는 세번째 콤보박스의 값(cognos에서 설정함)
//-------------------------------------------------------------------------------------------------------------
function setCascade3Init (index1, index2, index3, type1, type2, param1, param2) {

	var idxPrompt1 = document.getElementsByTagName('select')[index1];
	var idxPrompt2 = document.getElementsByTagName('select')[index2];

	setChangeValue(index1, index2, type1);
	setChangeValue(index2, index3, type2);
	
	if (idxPrompt1) {
		// 첫번째 콤보박스에 값을 세팅
		setChangeValue(index1, index2, type1);
		// 두번째 콤보박스에 값을 세팅
		if(param1) {
			setComboValue(index2, param1);
		}

		// Event체인지 이벤트 첫번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt1.onchange = function () {
			setChangeValue(index1, index2, type1);
			//첫번째 Cascading 시 마지막 콤보는 초기화
			reset(index3, PMPT_INIT);
			setChangeValue(index2, index3, type2);
		}
	}

	if(idxPrompt2) {
		setChangeValue(index2, index3, type2);
		// 세번째 콤보박스에 값을 세팅
		if(param2) {
			setComboValue(index3, param2);
		}
		// Event체인지 이벤트 두번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt2.onchange = function () {
			setChangeValue(index2, index3, type2);
		}
	}
}

// setCascade4Init
//-------------------------------------------------------------------------------------------------------------
// USE PROMPT PAGE, PAGE - Cascade가 3단계인 경우 적용
// setCascade4Init (index1, index2, index3, index4, type1, type2, type3, param1, param2, param3)
//		1) index1	- Cascade 프롬프트의 첫번째 콤보박스 인덱스
//		2) index2	- Cascade 프롬프트의 두번째 콤보박스 인덱스
//		3) index3	- Cascade 프롬프트의 세번째 콤보박스 인덱스
//		4) index4	- Cascade 프롬프트의 네번째 콤보박스 인덱스
//		3) type1		- JSP 파일에서 사용될 콤보박스2 타입명(sqlType)
//		4) type2		- JSP 파일에서 사용될 콤보박스3 타입명(sqlType)
//		5) type3		- JSP 파일에서 사용될 콤보박스4 타입명(sqlType)
//		6) param	1	- 프롬프트 페이지에서 페이지로 넘어오는 두번째 콤보박스의 값(cognos에서 설정함)
//		7) param	2	- 프롬프트 페이지에서 페이지로 넘어오는 세번째 콤보박스의 값(cognos에서 설정함)
//		8) param	2	- 프롬프트 페이지에서 페이지로 넘어오는 네번째 콤보박스의 값(cognos에서 설정함)
//-------------------------------------------------------------------------------------------------------------
function setCascade4Init (index1, index2, index3, index4, type1, type2, type3, param1, param2, param3) {

	var idxPrompt1 = document.getElementsByTagName('select')[index1];
	var idxPrompt2 = document.getElementsByTagName('select')[index2];
	var idxPrompt3 = document.getElementsByTagName('select')[index3];

	setChangeValue(index1, index2, type1);
	setChangeValue(index2, index3, type2);
	setChangeValue(index3, index4, type3);
	
	if (idxPrompt1) {
		// 첫번째 콤보박스에 값을 세팅
		setChangeValue(index1, index2, type1);
		// 두번째 콤보박스에 값을 세팅
		if(param1) {
			setComboValue(index2, param1);
		}
		// Event체인지 이벤트 첫번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt1.onchange = function () {
			setChangeValue(index1, index2, type1);
			//첫번째 Cascading 시 마지막 콤보는 초기화
			reset(index3, PMPT_INIT);
			reset(index4, PMPT_INIT);
		}
	}

	if(idxPrompt2) {
		// 세번째 콤보박스에 값을 세팅
		if(param2) {
			setChangeValue(index2, index3, type2);
			setComboValue(index3, param2);
		}
		// Event체인지 이벤트 두번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt2.onchange = function () {
			setChangeValue(index2, index3, type2);
			reset(index4, PMPT_INIT);
		}
	}

	if(idxPrompt3) {
		// 네번째 콤보박스에 값을 세팅
		if(param3) {
			setChangeValue(index3, index4, type3);
			setComboValue(index4, param3);
		}
		// Event체인지 이벤트 세번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt3.onchange = function () {
			setChangeValue(index3, index4, type3);
		}
	}
}

// setCascade5Init
//-------------------------------------------------------------------------------------------------------------
// USE PROMPT PAGE, PAGE - Cascade가 3단계인 경우 적용
// setCascade4Init (index1, index2, index3, index4, index5, type1, type2, type3, type4, param1, param2, param3, param4)
//		1) index1	- Cascade 프롬프트의 첫번째 콤보박스 인덱스
//		2) index2	- Cascade 프롬프트의 두번째 콤보박스 인덱스
//		3) index3	- Cascade 프롬프트의 세번째 콤보박스 인덱스
//		4) index4	- Cascade 프롬프트의 네번째 콤보박스 인덱스
//		5) index5	- Cascade 프롬프트의 다섯번째 콤보박스 인덱스
//		6) type1		- JSP 파일에서 사용될 콤보박스2 타입명(sqlType)
//		7) type2		- JSP 파일에서 사용될 콤보박스3 타입명(sqlType)
//		8) type3		- JSP 파일에서 사용될 콤보박스4 타입명(sqlType)
//		9) type4		- JSP 파일에서 사용될 콤보박스5 타입명(sqlType)
//		0) param	1	- 프롬프트 페이지에서 페이지로 넘어오는 두번째 콤보박스의 값(cognos에서 설정함)
//		A) param	2	- 프롬프트 페이지에서 페이지로 넘어오는 세번째 콤보박스의 값(cognos에서 설정함)
//		B) param	3	- 프롬프트 페이지에서 페이지로 넘어오는 네번째 콤보박스의 값(cognos에서 설정함)
//		C) param	4	- 프롬프트 페이지에서 페이지로 넘어오는 다섯번째 콤보박스의 값(cognos에서 설정함)
//-------------------------------------------------------------------------------------------------------------
function setCascade5Init (index1, index2, index3, index4, index5, type1, type2, type3, type4, param1, param2, param3, param4) {

	var idxPrompt1 = document.getElementsByTagName('select')[index1];
	var idxPrompt2 = document.getElementsByTagName('select')[index2];
	var idxPrompt3 = document.getElementsByTagName('select')[index3];
	var idxPrompt4 = document.getElementsByTagName('select')[index4];

	setChangeValue(index1, index2, type1);
	setChangeValue(index2, index3, type2);
	setChangeValue(index3, index4, type3);
	setChangeValue(index4, index5, type4);
	
	if (idxPrompt1) {
		// 첫번째 콤보박스에 값을 세팅
		setChangeValue(index1, index2, type1);
		// 두번째 콤보박스에 값을 세팅
		if(param1) {
			setComboValue(index2, param1);
		}
		// Event체인지 이벤트 첫번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt1.onchange = function () {
			setChangeValue(index1, index2, type1);
			//첫번째 Cascading 시 마지막 콤보는 초기화
			//reset(index3, PMPT_INIT);
			//reset(index4, PMPT_INIT);
			//reset(index5, PMPT_INIT);
		}
	}

	if(idxPrompt2) {
		// 세번째 콤보박스에 값을 세팅
		if(param2) {
			setChangeValue(index2, index3, type2);
			setComboValue(index3, param2);
		}
		// Event체인지 이벤트 두번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt2.onchange = function () {
			setChangeValue(index2, index3, type2);
			//reset(index4, PMPT_INIT);
			//reset(index5, PMPT_INIT);
		}
	}

	if(idxPrompt3) {
		// 네번째 콤보박스에 값을 세팅
		if(param3) {
			setChangeValue(index3, index4, type3);
			setComboValue(index4, param3);
		}
		// Event체인지 이벤트 세번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt3.onchange = function () {
			setChangeValue(index3, index4, type3);
			//reset(index5, PMPT_INIT);
		}
	}

	if(idxPrompt4) {
		// 다섯번째 콤보박스에 값을 세팅
		if(param4) {
			setChangeValue(index4, index5, type4);
			setComboValue(index5, param4);
		}
		// Event체인지 이벤트 네번째 콤보박스 이벤트 발생 시 케스케이딩
		idxPrompt4.onchange = function () {
			setChangeValue(index4, index5, type4);
		}
	}
}

function setComboValue2(obj, val) {
	var combo = obj;
	for(var i=0;i<combo.options.length;i++) {
		if(combo.options[i].value == val) {
			combo.options[i].selected = true;
			break;
		}
	}
}



function getcombos(){
	var x = this.gCognosViewer.getOldParameters();
	
	var fw = (typeof getFormWarpRequest == "function" ? getFormWarpRequest() : document.forms["formWarpRequest"]);
	/*
	let flag = false;
	if(!fw._oLstChoicesdept1) flag=true;
	if(!fw._oLstChoicesdept2) flag=true;
	if(!fw._oLstChoicesdept3) flag=true;
	if(!fw._oLstChoicesdept4) flag=true;
	
	if(flag) { alert("!"); return; }
	*/
	if (fw._oLstChoicesdept1) {
		fw._oLstChoicesdept1.onchange = function(){
			params = "sqlType=Lv3";
			params = params + "&objValue=" + fw._oLstChoicesdept1.options[fw._oLstChoicesdept1.selectedIndex].value;
			sendValueRequest(params, fw._oLstChoicesdept2, "POST");
		};
	}
	if (fw._oLstChoicesdept2) {
		fw._oLstChoicesdept2.onchange = function(){
			params = "sqlType=Lv4";
			params = params + "&objValue=" + fw._oLstChoicesdept2.options[fw._oLstChoicesdept2.selectedIndex].value;
			sendValueRequest(params, fw._oLstChoicesdept3, "POST");
		};
	}
	if (fw._oLstChoicesdept3) {
		fw._oLstChoicesdept3.onchange = function(){
			params = "sqlType=Lv5";
			params = params + "&objValue=" + fw._oLstChoicesdept3.options[fw._oLstChoicesdept3.selectedIndex].value;
			sendValueRequest(params, fw._oLstChoicesdept4, "POST");
		};
	}
	if (fw._oLstChoicesdept1) {
			params = "sqlType=Lv2";
			params = params + "&objValue=" + fw._oLstChoicesdept1.options[fw._oLstChoicesdept1.selectedIndex].value;
			sendValueRequest(params, fw._oLstChoicesdept1, "POST");
			
	}
	
	if(x.p_1){
		alert(x.p_1.m_parmValueItems[0].m_useValue);
		setComboValue2(fw._oLstChoicesdept1,x.p_1.m_parmValueItems[0].m_useValue);
	}
	
}
