(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"9JuW":function(t,e,a){"use strict";a.r(e);a("IzEo");var s=a("bx4M"),i=a("p0pE"),r=a.n(i),o=a("mrSG"),n=a("q1tI"),l=a.n(n),c=a("MuoO"),p=a("WqWh"),u=a("faBS"),y=a("gmfD"),d=a("Qp6+"),h=a("nLTe"),g=class extends n["Component"]{constructor(){super(...arguments),this.state={cate:"allPost",query:{size:21,page:1},filter:{post:""}},this.initData=(t=>{var e=t.query,a=void 0===e?this.state.query:e,s=t.filter,i=void 0===s?this.state.filter:s,o=this.state.cate,n=this.props.dispatch,l=Object(u["b"])({cate:o,query:a,type:"post"});n({type:"post/queryList",payload:{query:r()({},l,i),addon:{type:o}}})}),this.listQuery=(t=>{var e=this.state.query,a=r()({},e,t);this.setState({query:a}),this.initData({query:a})}),this.filterQuery=(t=>{var e=this.state.filter,a=r()({},e,t,{page:1});this.setState({filter:a}),this.initData({filter:a})})}componentDidMount(){this.initData({})}render(){var t=this.state,e=t.cate,a=t.query,i=t.filter,o=this.props,n=o.post,c=o.category,g=o.loadingPost,m=(o.loadingCategory,c[e],n[e]||[]),f=n.total[e]||0,v=r()({},i,Object(u["a"])(c.all));return l.a.createElement("div",null,l.a.createElement(h["a"],{active:"allPost"}),l.a.createElement("div",{className:"container"},l.a.createElement(d["a"],{value:v,onChange:this.filterQuery}),l.a.createElement(s["a"],{bordered:!1,style:{margin:"15px 0"},loading:g},l.a.createElement(y["b"],{list:m}),l.a.createElement(p["a"],{value:r()({},a,{total:f}),onChange:this.listQuery}))))}};g=o["a"]([Object(c["connect"])(t=>{var e=t.post,a=t.category,s=t.loading;return{post:e,category:a,loadingPost:s.models.post,loadingCategory:s.models.category}})],g),e["default"]=g}}]);