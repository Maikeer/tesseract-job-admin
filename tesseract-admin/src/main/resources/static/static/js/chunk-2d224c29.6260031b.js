(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224c29"],{e206:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",[s("el-form-item",{attrs:{label:"Name"}},[s("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name","string"===typeof t?t.trim():t)},expression:"user.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Email"}},[s("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email","string"===typeof t?t.trim():t)},expression:"user.email"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("Update")])],1)],1)},a=[],l={props:{user:{type:Object,default:function(){return{name:"",email:""}}}},methods:{submit:function(){this.$message({message:"User information has been updated successfully",type:"success",duration:5e3})}}},r=l,u=s("4e82"),i=Object(u["a"])(r,n,a,!1,null,null,null);t["default"]=i.exports}}]);