(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2259c9"],{e4ae:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("van-nav-bar",{attrs:{title:"备案项目列表详情","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),l("van-cell-group",[l("van-cell",{attrs:{title:"备案项目编号",value:e.recProjectDetails.number}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"项目名称",value:e.recProjectDetails.name}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"项目所在地",value:e.recProjectDetails.city}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"总投资",value:e.recProjectDetails.pri}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"项目规模及主要内容",label:e.recProjectDetails.text}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"建设单位",value:e.recProjectDetails.unit}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"备案机关",value:e.recProjectDetails.organ}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"备案申报日期",value:e.recProjectDetails.dateDay}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"复核通过日期",value:e.recProjectDetails.review}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"项目起止年限",value:e.recProjectDetails.date_d}})],1),l("van-cell-group",[l("van-cell",{attrs:{title:"项目当前进度",value:e.recProjectDetails.schedule}})],1)],1)},c=[],r={data:function(){return{id:"",recProjectDetails:[]}},created:function(){var e=this;this.id=this.$route.query.id,this.$axios.get("/recProjectDetails/".concat(this.id)).then((function(t){e.recProjectDetails=t.data,console.log(e.recProjectDetails)}))},methods:{onClickLeft:function(){this.$router.go(-1)}}},n=r,i=l("2877"),o=Object(i["a"])(n,a,c,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d2259c9.818a7d1c.js.map