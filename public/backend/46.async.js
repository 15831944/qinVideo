(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{qalf:function(e,t,a){"use strict";a.r(t);a("14J3");var n,i,r,c=a("BMrR"),o=(a("jCWc"),a("kPKH")),d=(a("IzEo"),a("bx4M")),s=(a("R9oj"),a("ECub")),h=a("p0pE"),l=a.n(h),u=a("2Taf"),m=a.n(u),y=a("vZ4D"),g=a.n(y),p=a("l4Ni"),f=a.n(p),v=a("ujKo"),D=a.n(v),T=a("MhPg"),M=a.n(T),Y=(a("iQDF"),a("+eQT")),b=a("q1tI"),E=a.n(b),Q=a("MuoO"),w=a("wd/R"),x=a.n(w),C=a("LLXN"),j=a("+n12"),S=a("KTCi"),k=Y["a"].RangePicker,q=(n=Object(Q["connect"])(function(e){var t=e.data,a=e.loading;return{data:t,loading:a.effects["data/queryDataSearch"]}}),n((r=function(e){function t(){var e,a;m()(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=f()(this,(e=D()(t)).call.apply(e,[this].concat(i))),a.state={},a.activeQuery={startTime:"2018-06-24",endTime:"2019-08-08"},a.searchQuery={startTime:"2018-06-24",endTime:"2019-08-08"},a.initSearchData=function(){var e=a.props.dispatch;e({type:"data/queryDataSearch",payload:{query:l()({kind:"search"},a.searchQuery)}})},a.initDataActive=function(){var e=a.props.dispatch;e({type:"data/queryDataActive",payload:{query:l()({kind:"activeVideo"},a.activeQuery)}})},a.onChangeActive=function(e){e.length>0&&(a.activeQuery={startTime:e[0].format("YYYY-MM-DD"),endTime:e[1].format("YYYY-MM-DD")},a.initDataActive())},a.onChangeSearch=function(e){e.length>0&&(a.searchQuery={startTime:e[0].format("YYYY-MM-DD"),endTime:e[1].format("YYYY-MM-DD")},a.initSearchData())},a}return M()(t,e),g()(t,[{key:"componentDidMount",value:function(){this.initSearchData(),this.initDataActive()}},{key:"render",value:function(){var e={xs:24,sm:12,md:12,lg:12,xl:12,style:{marginBottom:24}},t=this.props,a=t.data,n=a.searchData,i=a.activeVideo,r=t.loading,h=Object(j["e"])(n),l=Object(j["a"])(i);return E.a.createElement(c["a"],{gutter:24},E.a.createElement(o["a"],e,E.a.createElement(d["a"],{title:Object(C["formatMessage"])({id:"home.search"}),loading:r,bordered:!1,bodyStyle:{padding:24},style:{marginTop:24},extra:E.a.createElement(k,{style:{width:256,margin:"-5px 16px"},onChange:this.onChangeSearch,defaultValue:[x()(this.searchQuery.startTime),x()(this.searchQuery.endTime)]})},0===h.length?E.a.createElement(s["a"],{style:{height:285}}):E.a.createElement(S["d"],{data:h,height:285}))),E.a.createElement(o["a"],e,E.a.createElement(d["a"],{bordered:!1,title:Object(C["formatMessage"])({id:"home.active"}),bodyStyle:{padding:24},style:{marginTop:24},extra:E.a.createElement(k,{style:{width:256,margin:"-5px 16px"},onChange:this.onChangeActive,defaultValue:[x()(this.activeQuery.startTime),x()(this.activeQuery.endTime)]})},E.a.createElement(S["c"],{hasLegend:!0,subTitle:Object(C["formatMessage"])({id:"home.active.all"}),total:l.reduce(function(e,t){return t.y+e},0),data:l,height:270,lineWidth:4,style:{padding:"8px 0"}}))))}}]),t}(b["Component"]),i=r))||i);t["default"]=q}}]);