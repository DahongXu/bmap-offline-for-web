_jsload2&&_jsload2('buslinesearch', 'x.extend(Kd.prototype,{Qd:function(){for(var a=0,b=this.Pa.length;a<b;a++){var c=this.Pa[a];this[c.method].apply(this,c.arguments)}delete this.Pa},cv:function(a,b,c){a=R.zb(a);return z.qp+"?c="+a.lng+","+a.lat+"&i="+b+","+encodeURIComponent(c)+"&s="+encodeURIComponent("tpl:LinesQuery")},getBusList:function(a){var b=this;this.Jg(this.yd,function(c){c?dd.bb(function(a,c){b.iQ(a,c)},{qt:b.wP,c:c,wd:a},{tb:a}):(this.uc=new Oh({tb:a,city:"",ri:"",Gh:""}),b.sb(5),b.Sa(V.vu,this.uc))})},iQ:function(a,b){this.clearResults(); var c=a.result;if(!a.content||0!=c.error||c.type!=this.yP)this.uc=new Oh({tb:b.tb,city:a.current_city.name,ri:"",Gh:a.current_city.code}),this.sb(7),this.Sa(V.vu,this.uc);else{for(var c=a.content,d=[],e=0,f=c.length;e<f;e++)d.push({name:c[e].name,gk:c[e].uid,Gh:a.current_city.code,Sj:e,GA:b.tb,Si:c[e].poiType||2});this.uc=new Oh({tb:b.tb,city:a.current_city.name,ri:this.cv(P.vb(a.current_city.geo,o).point,a.current_city.code,b.tb),yM:d,Gh:a.current_city.code});this.sb(0);this.Sa(V.vu,this.uc);this.IT(); this.JS(a.current_city.geo,a.current_city.level,a.current_city.code)}},IT:function(){if(this.k.ka.Ha&&this.k.ka.Ha.appendChild&&this.uc&&0<this.uc.Ts()){var a=M("div",{style:"font:12px "+E.fontFamily+";background:#fff"});a.id="divResult"+this.ba;for(var b=this.uc.Ts(),c=[],d=0;d<b;d++){var e=this.uc.AD(d).name;c.push(\'<dl style="margin:3px 3px"><dt><span style="cursor:pointer" onclick=Instance(\\\'\'+this.ba+"\')._selectBusListItem("+d+")><img id=imgBLIcon"+d+" src="+Kd.mv+\' style="border:none" /></span>&nbsp;&nbsp;<a style="color:blue" href="javascript:void(0)" onclick=Instance(\\\'\'+ this.ba+"\')._selectBusListItem("+d+")>"+e+"</a></dt><dd id=ddBLInfo"+d+\' style="display:none;margin:2px 0px"></dd></dl>\')}b="";this.uc.moreResultsUrl&&(b=b+"<div style=\'color:#7777cc;background:#e5ecf9;overflow:hidden;padding:2px;text-align:right\'>"+("<a style=\'color:#7777cc\' href=\'"+this.uc.moreResultsUrl+"\' target=\'_blank\'>\\u5230\\u767e\\u5ea6\\u5730\\u56fe\\u67e5\\u770b&#187;</a>"),b+="&nbsp;</div>");a.innerHTML=c.join("")+b;this.k.ka.Ha.appendChild(a);this.Sa(V.fG,a)}},JS:function(a,b,c){var d=this.k.ka.map; d&&(a=P.vb(a,o).point,this.cB?this.cB!=c&&(d.Dd(a,b),this.cB=c):(d.Dd(a,b),this.cB=c))},vU:function(a){if(this.uc)for(var b=0,c=this.uc.Ts();b<c;b++){var d=x.Dc("ddBLInfo"+b),e=x.Dc("imgBLIcon"+b);b==a?"none"==d.style.display?(d.style.display="block",e.src=Kd.BS):(d.style.display="none",e.src=Kd.mv):(d.style.display="none",e.src=Kd.mv)}},_selectBusListItem:function(a,b){if(!b){var c=x.Dc("ddBLInfo"+a),d=x.Dc("imgBLIcon"+a);if("block"==c.style.display){c.style.display="none";d.src=Kd.mv;return}}if(this.uc&& this.uc[a]&&0<this.uc[a].Xo())this.Ec=this.uc[a],this.sb(0),this.Sa(V.uu,this.Ec),this.II(a),this.HI(a);else{var e=this,c=this.uc.AD(a);dd.bb(function(b,c){e.hQ(b,c,a)},{qt:e.vP,c:c.Gh,uid:c.gk},{name:c.name,Si:c.Si})}},clearResults:function(){delete this.uc;delete this.Ec;delete this.Wi;delete this.b1;this.Kj();this.k.ka.Ha&&(this.k.ka.Ha.innerHTML="")},getBusLine:function(a){a&&("object"==typeof a&&a.gk&&""!=a.gk&&"undefined"!=typeof a.Gh&&""!=a.Gh.toString()&&"undefined"!=typeof a.Sj&&""!=a.Sj.toString()&& "undefined"!=typeof a.GA&&""!=a.GA.toString())&&(this.uc&&0<this.uc.Ts()&&a.Gh==this.uc.Gh&&a.GA==this.uc.keyword)&&this._selectBusListItem(a.Sj,o)},hQ:function(a,b,c){var d=a.result;if(!a.content||!a.content[0]||0!=d.error||d.type!=this.xP)this.Ec=new Ph({name:b.name}),this.sb(7),this.Sa(V.uu,this.Ec);else{var a=a.content[0],e=d="",f="",g={},i=[],d=a.startTime,e=a.endTime,f=a.company;a.geo&&(g=P.vb(a.geo,o),g=new Dc(g.ia));if(a.stations)for(var k=0,l=a.stations.length;k<l;k++)if(a.stations[k].geo){var m= P.vb(a.stations[k].geo,o);i.push({name:a.stations[k].name,position:m.point,gk:a.stations[k].uid})}this.Ec=new Ph({name:b.name,startTime:d,yW:e,CV:f,gZ:g,iO:i,Si:b.Si});this.sb(0);this.Sa(V.uu,this.Ec);this.uc[c]=this.Ec;this.II(c);this.HI(c)}},II:function(a){if(this.k.ka.Ha&&this.k.ka.Ha.appendChild&&this.Ec&&0<this.Ec.Xo()){this.vU(a);var b=x.Dc("ddBLInfo"+a);if(b){var c=[];c.push(\'<table style="width:100%;background:#CDCDCD;font:12px \'+E.fontFamily+\'" cellspacing="1" cellpadding="1" ><tbody>\'); c.push(\'<tr><td style="width:95px;line-height:22px;padding:0px 8px;text-align:left;vertical-align:top;background:#F4F4F4" >\\u9996\\u672b\\u8f66\\u65f6\\u95f4</th><td  style="background:#FFFFFF;line-height:22px;padding:0px 8px" >\'+this.Ec.startTime+"-"+this.Ec.endTime+"</td></tr>");c.push(\'<tr><td style="width:95px;line-height:22px;padding:0px 8px;text-align:left;vertical-align:top;background:#F4F4F4" >\\u6240\\u5c5e\\u516c\\u53f8</th><td  style="background:#FFFFFF;line-height:22px;padding:0px 8px" >\'+this.Ec.company+ "</td></tr>");c.push("</tbody></table>");4==this.Ec.Si?c.push(\'<p style="margin:2px 0px;font:12px \'+E.fontFamily+\';">\\u6cbf\\u7ebf\\u5730\\u94c1\\u7ad9:</p>\'):c.push(\'<p style="margin:2px 0px;font:12px \'+E.fontFamily+\';">\\u6cbf\\u7ebf\\u516c\\u4ea4\\u7ad9\\u70b9:</p>\');c.push(\'<table style="width:100%;font:12px \'+E.fontFamily+\';" ><tbody>\');for(var d=0,e=this.Ec.Xo();d<e;d++)c.push(\'<tr><td style="width:20px">\'+(d+1)+"</th><td><a id=aStop_"+a+"_"+d+\' style="color:blue" href="javascript:void(0)" onclick=Instance(\\\'\'+ this.ba+"\')._selectBusStop("+a+","+d+")>"+this.Ec.dx(d).name+"</a></td></tr>");c.push("</tbody></table>");b.innerHTML=c.join("")}a=x.Dc("divResult"+this.ba);this.Sa(V.eG,a)}},HI:function(a){if(this.k.ka.map&&this.Ec&&0<this.Ec.Xo()){this.Kj();U.Ql(this.k.ka.map,this.Ec.qe());var b=this.Ec.$o();this.Sa(V.wu,b);var c=this;this.Wi=[];for(var d=0,e=this.Ec.Xo();d<e;d++){var f=this.Ec.dx(d).position,g=this.Ec.dx(d).name,f=U.RU(this.k.ka.map,f,g);(function(b,d,e){b.addEventListener("click",function(f){var g= ["<div style=\'font:12px "+E.fontFamily+"\'>"];g.push("<div style=\'margin:10px 1em 24px 0\'><b>"+d+"</b></div>");g.push("</div>");var t=new tc(g.join(""),{title:"",height:0,width:220,margin:[10,10,20,10]});t.addEventListener("open",function(){var b=x.Dc("aStop_"+a+"_"+e);b&&(b.style.backgroundColor="#cccccc")});t.addEventListener("close",function(){var b=x.Dc("aStop_"+a+"_"+e);b&&(b.style.backgroundColor="#ffffff")});g=c.k.ka.map;g.K.km?be.jp(t,g.getCurrentCity().code,{panoInstance:g.P,lngLat:f.target.ha(), titleTip:d,type:"busline"},function(){b.Nb(t)}):b.Nb(t)})})(f,g,d);f.yB=g;this.Wi.push(f)}this.Sa(V.Xp,this.Wi);this.k.ka.Xg&&this.k.ka.map.Ah(b.qe(),{margins:[5,5,5,5]})}},_selectBusStop:function(a,b){if(this.k.ka.map&&this.Wi&&0<this.Wi.length){var c=this.Wi[b];if(c.yB){var d=["<div style=\'font:12px "+E.fontFamily+"\'>"];d.push("<div style=\'margin:10px 1em 24px 0\'><b>"+c.yB+"</b></div>");d.push("</div>");var e=new tc(d.join(""),{title:"",height:0,width:220,margin:[10,10,20,10]});e.addEventListener("open", function(){var c=x.Dc("aStop_"+a+"_"+b);c&&(c.style.backgroundColor="#cccccc")});e.addEventListener("close",function(){var c=x.Dc("aStop_"+a+"_"+b);c&&(c.style.backgroundColor="#ffffff")});d=this.k.ka.map;d.K.km?be.jp(e,d.getCurrentCity().code,{panoInstance:d.P,lngLat:c.ha(),titleTip:c.yB,type:"busline"},function(){c.Nb(e)}):c.Nb(e)}}else{this.uN&&(this.uN.style.backgroundColor="#ffffff");if(d=x.Dc("aStop_"+a+"_"+b))d.style.backgroundColor="#cccccc";this.uN=d}},Kj:function(){this.k.ka.map&&this.k.ka.map.hK()}, sb:function(a){"number"==typeof a?this.Bd=a:delete this.Bd}});function Oh(a){this.keyword=a.tb||"";this.city=a.city;this.moreResultsUrl=a.ri;this.KA=a.yM&&a.yM.slice(0)||[];this.Gh=a.Gh}x.extend(Oh.prototype,{AD:function(a){if(this.KA[a])return this.KA[a]},Ts:function(){return this.KA.length}});var Qh=Oh.prototype;S(Qh,{getNumBusList:Qh.Ts,getBusListItem:Qh.AD});function Ph(a){this.name=a.name||"";this.startTime=a.startTime||"";this.endTime=a.yW||"";this.company=a.CV||"";this.Ti=a.gZ||{};this.AB=a.iO&&a.iO.slice(0)||[];this.Si=a.Si||2}x.extend(Ph.prototype,{dx:function(a){if(this.AB[a])return this.AB[a]},Xo:function(){return this.AB.length},$o:u("Ti"),qe:function(){if(this.Ti.qe())return this.Ti.qe()}});var Rh=Ph.prototype;S(Rh,{getNumBusStations:Rh.Xo,getBusStation:Rh.dx,getPath:Rh.qe,getPolyline:Rh.$o}); ');