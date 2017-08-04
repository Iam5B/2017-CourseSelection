var importJs=document.createElement('script'); 
importJs.setAttribute("type","text/JavaScript");
importJs.setAttribute("src", 'http://libs.baidu.com/jquery/2.1.1/jquery.min.js');         
document.getElementsByTagName("head")[0].appendChild(importJs);
var XHR = function(){
     if( typeof XMLHttpRequest == "undefined" ){
          var xhrNames = ["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
          for (var i = 0; i < xhrNames.length; i++){
             try {
                var XHR = new ActiveXObject(xhrNames[i]);
                break;
             } catch(e){}
         }
         if (typeof XHR != undefined)
              return XHR;
         else
            new Error("Ajax not supported!"); 
       } else {
            return new XMLHttpRequest();
      }
}
var myXHR = XHR();
var listresult;
var result=[];
function query(course,yourid,timeout){
	$.post("http://jwgl.ouc.edu.cn/taglib/DataTable.jsp?tableId=3241&type=skbjdm",
		{
			userId:yourid,
			emptyFlag:0,
			nj:2017,
			xn:2016,
			xq:2,
			style:"SKBJDM",
			nj2:2017,
			gradeController:"on",
			sel_role:"ADM000",
			xnxq:"2016-2",
			sel_skbjdm:course
		},
		function(data){
			listresult = data;
			console.log(listresult);
			var JSONresult = listresult.match(/\d{11}/g);
			var j=-1;
			var interval = setInterval(function(){
				j+=2;
				var stunum = JSONresult[j];
				if(j>=JSONresult.length){
					var selector = "[name='skbjdm']:contains("+course+")";
					var q = $(selector).next().next();
					for(i=0;i<q.length;i++){
						result.push(q[i].innerHTML-0);
					} 
					console.log(result);
					clearInterval(interval);
				}
				myXHR.open("post","http://jwgl.ouc.edu.cn/taglib/DataTable.jsp?tableId=6093",false);
				myXHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				myXHR.send("electiveCourseForm.xktype=2&electiveCourseForm.xn=&electiveCourseForm.xq=&electiveCourseForm.xh=&electiveCourseForm.nj=&electiveCourseForm.zydm=&xqdm=&electiveCourseForm.kcdm=&electiveCourseForm.kclb1=&electiveCourseForm.kclb2=&electiveCourseForm.khfs=&electiveCourseForm.skbjdm=&electiveCourseForm.xf=&electiveCourseForm.is_buy_book=&electiveCourseForm.is_cx=&electiveCourseForm.is_yxtj=&electiveCourseForm.xk_points=&xn=2016&xn1=&_xq=&xq_m=2&xq=2&xh="+stunum+"&kcdm=&zc=&electiveCourseForm.xkdetails=&hidOption=&xkh=&kcmc=&kcxf=&kkxq=&kcrkjs=&skfs=&xxyx=&sksj=&skdd=&point_total=&point_used=&point_canused=&text_weight=0&ck_gmjc=on&ck_skbtj=on");
				document.write(myXHR.responseText);
			},timeout)
		}
	)
}

