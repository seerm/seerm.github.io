(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-restcul-restcul"],{1043:function(t,e,s){var i=s("2bed");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s("4f06").default;a("723f5ccc",i,!0,{sourceMap:!1,shadowMode:!1})},"2bed":function(t,e,s){e=t.exports=s("2350")(!1),e.push([t.i,"/* pages/restcul/restcul.wxss */.row[data-v-10752641]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.all[data-v-10752641]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;position:absolute}.restcul[data-v-10752641]{color:#413e3e;width:%?125?%;height:auto;margin-left:%?312?%;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.universeral[data-v-10752641]{color:#413e3e;width:%?125?%;height:auto;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.inuniverseral[data-v-10752641]{color:#413e3e;width:%?125?%;height:%?70?%;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.inuniverseral2[data-v-10752641]{color:#413e3e;width:%?70?%;height:%?70?%;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.text2[data-v-10752641]{color:#413e3e;width:100%;line-height:200%;text-align:center;font-size:%?30?%}.text[data-v-10752641]{color:#413e3e;line-height:250%;text-align:center}.modal-dialog[data-v-10752641]{margin-left:%?130?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.setting[data-v-10752641]{color:#413e3e;width:%?125?%;height:%?70?%;margin-left:%?150?%;margin-top:%?25?%;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.universeralBtn[data-v-10752641]{color:#413e3e;width:%?370?%;height:auto;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.select[data-v-10752641]{width:%?450?%;color:#413e3e;margin-top:%?10?%}.inSelect[data-v-10752641]{color:#413e3e;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%}.pick[data-v-10752641]{color:#413e3e;width:100%;height:auto;line-height:200%;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.inpick[data-v-10752641]{width:100%;height:auto;text-align:left}",""])},6064:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[t.showModal?s("v-uni-view",[s("v-uni-view",{staticClass:"restcul"},[s("v-uni-view",{staticClass:"row",staticStyle:{"flex-direction":"row"}},[s("v-uni-view",[s("v-uni-view",{staticClass:"inuniverseral"},[s("v-uni-image",{staticClass:"inuniverseral2",attrs:{src:"/pic/p"+t.restcul+".png"}})],1),s("v-uni-text",{staticClass:"text2",attrs:{space:"emsp"}},[t._v(t._s(t.restName[(t.restcul-t.restcul%100)/100])+t._s(t.restName[t.restcul%100]))])],1),s("v-uni-view",{staticClass:"setting"},[s("v-uni-image",{staticClass:"inuniverseral2",attrs:{src:"../../static/pic/setting.png"},on:{click:function(e){e=t.$handleEvent(e),t.changeYL(e)}}})],1)],1)],1),s("v-uni-view",{staticClass:"all",staticStyle:{"flex-direction":"row"}},t._l(t.restShow,function(e,i){return s("v-uni-view",{key:i},[s("v-uni-view",{staticClass:"universeral"},[s("v-uni-view",{staticClass:"inuniverseral"},[s("v-uni-image",{staticClass:"inuniverseral2",attrs:{src:"../../static/pic/p"+e+".png"}})],1),s("v-uni-text",{staticClass:"text2",attrs:{space:"emsp"}},[t._v(t._s(t.restName[(e-e%100)/100])+t._s(t.restName[e%100])+"\\n")]),t.isshow[0]?s("v-uni-text",{staticClass:"text2",attrs:{space:"emsp"}},[t._v(t._s(t.attrResultList[i][0])+"\\n")]):t._e(),t.isshow[1]?s("v-uni-text",{staticClass:"text2",attrs:{space:"emsp"}},[t._v(t._s(t.attrResultList[i][1])+"\\n")]):t._e(),t.isshow[2]?s("v-uni-text",{staticClass:"text2",attrs:{space:"emsp"}},[t._v(t._s(t.attrResultList[i][2])+"\\n")]):t._e(),t.isshow[3]?s("v-uni-text",{staticClass:"text2",attrs:{space:"emsp"}},[t._v(t._s(t.attrResultList[i][3])+"\\n")]):t._e()],1)],1)}),1)],1):t._e(),t.showModal?t._e():s("v-uni-view",{staticClass:"modal-dialog"},[s("v-uni-view",[s("v-uni-view",[t._v("选择需要显示的克制系数：")]),s("v-uni-view",{staticClass:"select"},[s("v-uni-checkbox-group",{on:{change:function(e){e=t.$handleEvent(e),t.isshowFun(e)}}},[s("v-uni-label",{staticClass:"inSelect"},[s("v-uni-checkbox",{attrs:{value:"0",checked:t.isshow[0]}}),t._v(t._s(t.restName[(t.restcul-t.restcul%100)/100])+t._s(t.restName[t.restcul%100])+"克制系数")],1),s("v-uni-view"),t.restcul>100?s("v-uni-label",{staticClass:"inSelect"},[s("v-uni-checkbox",{attrs:{value:"1",checked:t.isshow[1]}}),t._v(t._s(t.restName[(t.restcul-t.restcul%100)/100])+"克制系数")],1):t._e(),s("v-uni-view"),t.restcul>100?s("v-uni-label",{staticClass:"inSelect"},[s("v-uni-checkbox",{attrs:{value:"2",checked:t.isshow[2]}}),t._v(t._s(t.restName[t.restcul%100])+"克制系数")],1):t._e(),s("v-uni-view"),s("v-uni-label",{staticClass:"inSelect"},[s("v-uni-checkbox",{attrs:{value:"3",checked:t.isshow[3]}}),t._v(t._s(t.restName[(t.restcul-t.restcul%100)/100])+t._s(t.restName[t.restcul%100])+"被克制系数")],1)],1)],1),s("v-uni-view",[t._v("选择排序方式：")]),s("v-uni-view",{staticClass:"pick"},[s("v-uni-picker",{attrs:{value:t.sortkind,range:t.sortFun},on:{change:function(e){e=t.$handleEvent(e),t.howtosort(e)}}},[s("v-uni-view",{staticClass:"inpick"},[t._v(t._s(t.sort[t.sortkind]))])],1)],1),s("v-uni-text",[t._v("\\n")]),s("v-uni-view",{staticClass:"universeralBtn"},[s("v-uni-button",{staticClass:"btn",attrs:{type:"default",plain:"true",size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.hideModal(e)}}},[t._v("确定")])],1)],1)],1)],1)},a=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},"9a89":function(t,e,s){"use strict";s.r(e);var i=s("6064"),a=s("c136");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("f974");var r=s("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"10752641",null);e["default"]=l.exports},c136:function(t,e,s){"use strict";s.r(e);var i=s("e035"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},e035:function(t,e,s){"use strict";var i=s("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("28a5");var a=i(s("a4bb"));s("ac6a");var n=i(s("e814"));s("55dd");var r={data:function(){return{restcul:0,restName:[],rest:[],restShow:[],showModal:!0,isshow:[!0,!1,!1,!0],sort:[],sortkind:0,attrResultList:[],restraintList:[[.5,2,.5,.5,1,.5,2,1,1,1,1,2,1,1,1,.5,1,1,.5],[.5,.5,2,1,1,1,2,1,1,1,1,1,1,1,1,.5,1,1,1],[2,.5,.5,1,1,2,1,1,2,1,1,1,1,1,1,.5,1,1,1],[2,1,1,1,.5,.5,1,1,1,1,2,1,1,1,1,1,.5,.5,1],[.5,2,1,2,.5,1,0,1,1,1,1,1,2,.5,1,.5,2,1,1],[1,.5,.5,1,.5,.5,1,1,2,1,2,1,1,1,1,1,.5,2,2],[.5,1,2,0,2,2,1,1,1,.5,1,1,.5,1,.5,.5,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,.5,.5,2,1,.5,2,1,.5,1,1,1,1,1,1,.5,2,1,2],[1,1,1,1,1,.5,1,1,1,.5,2,0,1,2,1,1,1,1,1],[1,1,1,1,1,2,1,1,2,.5,.5,1,.5,1,2,2,1,1,1],[0,1,1,1,1,.5,1,1,.5,2,1,.5,2,1,1,.5,1,.5,1],[1,1,1,1,1,.5,1,1,.5,2,1,.5,2,1,1,.5,2,.5,1],[1,1,1,1,2,1,.5,1,1,1,.5,1,1,2,1,2,1,.5,1],[.5,.5,.5,1,.5,1,1,1,2,1,1,1,1,1,2,2,1,2,.5],[2,2,2,1,2,1,1,1,2,1,.5,1,1,.5,.5,1,1,1,2],[1,1,1,2,1,2,1,1,.5,2,1,1,0,1,1,1,1,2,1],[1,1,1,1,1,.5,1,1,.5,.5,1,2,2,2,1,.5,2,1,1],[2,1,1,2,1,.5,1,1,.5,1,1,1,1,2,2,1,1,1,1]]}},components:{},props:{},onLoad:function(t){this.setData({rest:JSON.parse(t.rest),restName:JSON.parse(t.restName),restcul:JSON.parse(t.restcul),restShow:JSON.parse(t.rest)}),console.log("属性",this);var e=this.restName,s=(this.rest,this.restcul);this.sort.push("默认"),this.sort.push(e[(s-s%100)/100]+e[s%100]+"克制系数优先"),this.sort.push(e[(s-s%100)/100]+e[s%100]+"被克制系数优先"),s>100&&(this.sort.push(e[(s-s%100)/100]+"克制系数优先"),this.sort.push(e[s%100]+"克制系数优先"),this.sort.push(e[(s-s%100)/100]+e[s%100]+"&"+e[(s-s%100)/100]+"综合克制系数优先"),this.sort.push(e[(s-s%100)/100]+e[s%100]+"&"+e[s%100]+"综合克制系数优先"),this.sort.push(e[(s-s%100)/100]+"&"+e[s%100]+"综合克制系数优先"),this.sort.push("三系综合克制系数优先")),this.setData({sort:this.sort}),console.log("属性",this),this.cul(-1,-1)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{changeYL:function(){this.setData({showModal:!1})},hideModal:function(){this.setData({showModal:!0}),this.sortFun()},isshowFun:function(t){for(var e=0;e<this.isshow.length;++e)this.isshow[e]=0;for(e=0;e<t.detail.value.length;++e)this.isshow[t.detail.value[e]]=1;this.setData({isshow:this.isshow})},howtosort:function(t){this.setData({sortkind:t.detail.value})},sortFun:function(){console.log("排序");for(var t=0;t<this.attrResultList.length;t++){for(var e=t,s=t+1;s<this.attrResultList.length;s++)this.cmp(this.attrResultList[e],this.attrResultList[s])||(e=s);e!=t&&this.swapArray(t,e)}this.setData({attrResultList:this.attrResultList}),this.setData({restShow:this.restShow})},swapArray:function(t,e){this.attrResultList[t]=this.attrResultList.splice(e,1,this.attrResultList[t])[0],this.restShow[t]=this.restShow.splice(e,1,this.restShow[t])[0]},cul:function(t,e){if(t=(0,n.default)(t),e=(0,n.default)(e),t<=0||e<=0){if(-1==t&&-1==e){var s=this.restcul,i=this.rest;for(t=0;t<i.length;t++){var a=[];a.push(this.cul(s,i[t])),a.push(this.cul((s-s%100)/100,i[t])),a.push(this.cul(s%100,i[t])),a.push(this.cul(i[t],s)),a.push(t),this.attrResultList.push(a)}this.setData({attrResultList:this.attrResultList})}return-1}return t>99?e<99?0==this.cul(t/100,e)?this.cul(t%100,e)/4:0==this.cul(t%100,e)?this.cul(t/100,e)/4:2==this.cul(t/100,e)&&2==this.cul(t%100,e)?4:(this.cul(t/100,e)+this.cul(t%100,e))/2:(this.cul(t/100,e)+this.cul(t%100,e))/2:e>99?0==this.cul(t,e/100)?this.cul(t,e%100)/4:0==this.cul(t,e%100)?this.cul(t,e/100)/4:2==this.cul(t,e/100)&&2==this.cul(t,e%100)?4:(this.cul(t,e/100)+this.cul(t,e%100))/2:this.restraintList[t-1][e-1]},cmp:function(t,e){return 0==this.sortkind?t[4]<e[4]:1==this.sortkind?t[0]==e[0]?t[4]<e[4]:t[0]>e[0]:2==this.sortkind?t[3]==e[3]?t[4]<e[4]:t[3]>e[3]:3==this.sortkind?t[1]==e[1]?t[4]<e[4]:t[1]>e[1]:4==this.sortkind?t[2]==e[2]?t[4]<e[4]:t[2]>e[2]:5==this.sortkind?this.max(t[0],t[1])==this.max(e[0],e[1])?t[4]<e[4]:this.max(t[0],t[1])>this.max(e[0],e[1]):6==this.sortkind?this.max(t[0],t[2])==this.max(e[0],e[2])?t[4]<e[4]:this.max(t[0],t[2])>this.max(e[0],e[2]):7==this.sortkind?this.max(t[1],t[2])==this.max(e[1],e[2])?t[4]<e[4]:this.max(t[1],t[2])>this.max(e[1],e[2]):8!=this.sortkind||(this.max(t[0],this.max(t[1],t[2]))==this.max(e[0],this.max(e[1],e[2]))?t[4]<e[4]:this.max(t[0],this.max(t[1],t[2]))>this.max(e[0],this.max(e[1],e[2])))},max:function(t,e){return t>e?t:e},setData:function(t){var e,s,i=this,n=[];(0,a.default)(t).forEach(function(a){n=a.split("."),e=t[a],s=i.$data,n.forEach(function(t,a){a+1==n.length?i.$set(s,t,e):s[t]||i.$set(s,t,{}),s=s[t]})})}}};e.default=r},f974:function(t,e,s){"use strict";var i=s("1043"),a=s.n(i);a.a}}]);