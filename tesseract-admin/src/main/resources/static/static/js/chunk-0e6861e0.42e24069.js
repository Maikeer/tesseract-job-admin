(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e6861e0","chunk-2d0c96ec"],{"23ba":function(e,t,o){"use strict";o.d(t,"c",(function(){return r})),o.d(t,"d",(function(){return c})),o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return l}));var n=o("b775");function r(e){return Object(n["a"])({url:"/tesseract-group/allGroup",method:"get",params:e})}function c(e){return Object(n["a"])({url:"/tesseract-group/groupList",method:"get",params:e})}function a(e){return Object(n["a"])({url:"/tesseract-group/addGroup",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/tesseract-group/deleteGroup",method:"get",params:e})}},"58b5":function(e,t,o){"use strict";o.r(t);o("2a40");t["default"]={}},"740b":function(e,t,o){"use strict";o.d(t,"c",(function(){return r})),o.d(t,"d",(function(){return c})),o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return l}));var n=o("b775");function r(e){return Object(n["a"])({url:"/tesseract-executor/executorList",method:"get",params:e})}function c(e){return Object(n["a"])({url:"/tesseract-executor/executorListNoDetail",method:"get",params:e})}function a(e){return Object(n["a"])({url:"/tesseract-executor/addExecutor",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/tesseract-executor/deleteExecutor",method:"get",params:e})}},a888:function(e,t,o){"use strict";o("c041"),o("40c5"),o("23cc");var n={bind:function(e,t,o){var n=e.querySelector(".el-dialog__header"),r=e.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",r.style.cssText+=";top:0px;";var c=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();n.onmousedown=function(e){var t=e.clientX-n.offsetLeft,a=e.clientY-n.offsetTop,l=r.offsetWidth,u=r.offsetHeight,i=document.body.clientWidth,s=document.body.clientHeight,d=r.offsetLeft,f=i-r.offsetLeft-l,p=r.offsetTop,g=s-r.offsetTop-u,m=c(r,"left"),x=c(r,"top");m.includes("%")?(m=+document.body.clientWidth*(+m.replace(/\%/g,"")/100),x=+document.body.clientHeight*(+x.replace(/\%/g,"")/100)):(m=+m.replace(/\px/g,""),x=+x.replace(/\px/g,"")),document.onmousemove=function(e){var n=e.clientX-t,c=e.clientY-a;-n>d?n=-d:n>f&&(n=f),-c>p?c=-p:c>g&&(c=g),r.style.cssText+=";left:".concat(n+m,"px;top:").concat(c+x,"px;"),o.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},r=function(e){e.directive("el-drag-dialog",n)};window.Vue&&(window["el-drag-dialog"]=n,Vue.use(r)),n.install=r;t["a"]=n},e241:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-row",[o("el-form",{attrs:{inline:!0,model:e.selectInfo}},[e.$store.getters.buttons.contains("/executor/index/select")?o("div",{staticStyle:{display:"inline"}},[o("el-form-item",{attrs:{label:"执行器名称"}},[o("el-input",{attrs:{placeholder:"执行器名称"},model:{value:e.selectInfo.name,callback:function(t){e.$set(e.selectInfo,"name",t)},expression:"selectInfo.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"创建人"}},[o("el-input",{attrs:{placeholder:"创建人"},model:{value:e.selectInfo.creator,callback:function(t){e.$set(e.selectInfo,"creator",t)},expression:"selectInfo.creator"}})],1),e._v(" "),o("el-form-item",[e.$store.getters.buttons.contains("/executor/index/select")?o("el-button",{attrs:{type:"primary"},on:{click:e.getExecutorList}},[e._v("查询\n          ")]):e._e()],1)],1):e._e(),e._v(" "),o("el-form-item",[e.$store.getters.buttons.contains("/executor/index/add")?o("el-button",{attrs:{type:"success"},on:{click:function(t){return e.addExecutorBtn(null)}}},[e._v("新增执行器\n        ")]):e._e()],1)],1)],1),e._v(" "),o("el-row",[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.executorList,border:"",fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.executor.id))])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"名字"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.executor.name))])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.executor.description))])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"执行器组"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.executor.groupName))])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"在线机器"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.executorDetailList,(function(t){return o("span",{staticStyle:{color:"#67C23A","font-weight":"bold"}},[e._v(e._s(t.socket)),o("br")])}))}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"创建者"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.executor.creator))])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"创建时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(0==t.row.executor.createTime?"":e.parseTime(t.row.executor.createTime)))])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.$store.getters.buttons.contains("/executor/index/edit")?o("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-edit"},on:{click:function(o){return e.addExecutorBtn(t.row)}}},[e._v("\n            修改\n          ")]):e._e(),e._v(" "),e.$store.getters.buttons.contains("/executor/index/delete")?o("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(o){return e.deleteExecutor(t.row)}}},[e._v("\n            删除\n          ")]):e._e()]}}])})],1)],1),e._v(" "),o("el-row",[o("el-pagination",{attrs:{total:e.selectInfo.total,"current-page":e.selectInfo.currentPage,"page-size":e.selectInfo.pageSize,align:"center",background:"",layout:"prev, pager, next"},on:{"current-change":e.pageChange}})],1),e._v(" "),o("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{visible:e.dialogTableVisible,title:"执行器信息"},on:{"update:visible":function(t){e.dialogTableVisible=t},dragDialog:e.handleDrag}},[o("el-form",{ref:"executorForm",attrs:{inline:!1,model:e.executorInfo,rules:e.executorRules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"触发器名字",prop:"name"}},[o("el-input",{ref:"name",attrs:{placeholder:"触发器名字"},model:{value:e.executorInfo.name,callback:function(t){e.$set(e.executorInfo,"name",t)},expression:"executorInfo.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"执行器组",prop:"group"}},[o("el-select",{attrs:{placeholder:"执行器组"},model:{value:e.executorInfo.groupId,callback:function(t){e.$set(e.executorInfo,"groupId",t)},expression:"executorInfo.groupId"}},e._l(e.groupList,(function(e){return o("el-option",{attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"触发器描述",prop:"description"}},[o("el-input",{ref:"name",attrs:{placeholder:"触发器描述"},model:{value:e.executorInfo.description,callback:function(t){e.$set(e.executorInfo,"description",t)},expression:"executorInfo.description"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.saveExecutor}},[e._v("保存")])],1)],1)],1)],1)},r=[],c=(o("7cfd"),o("a888")),a=o("740b"),l=o("ed08"),u=o("23ba"),i=(o("58b5"),o("2a40")),s={name:"Executor",directives:{elDragDialog:c["a"]},data:function(){return{listLoading:!0,executorRules:{name:[{required:!0,message:"输入名字",executor:"blur"}],description:[{required:!0,message:"输入执行器描述",executor:"blur"}]},executorList:[],selectInfo:{currentPage:1,pageSize:10,total:0},dialogTableVisible:!1,executorInfo:{name:null,description:null,groupId:null},groupList:[]}},mounted:function(){this.getExecutorList()},methods:{addExecutorBtn:function(e){var t=this;i["a"].clearObject(this.executorInfo),Object(u["c"])().then((function(o){0!=o.length?(t.groupList.splice(0,t.groupList.length),t.groupList=t.groupList.concat(o),t.groupMap=i["a"].listToObjectMap(o,"id"),e?(t.executorInfo.id=e.executor.id,t.executorInfo.name=e.executor.name,t.executorInfo.groupId=e.executor.groupId,t.executorInfo.description=e.executor.description):t.executorInfo.groupId=o[0].id,t.dialogTableVisible=!0):t.$alert("请先创建组")}))},pageChange:function(e){this.selectInfo.currentPage=e,this.getExecutorList()},parseTime:l["d"],getExecutorList:function(){var e=this;Object(a["c"])(this.selectInfo).then((function(t){e.selectInfo.currentPage=t.pageInfo.currentPage,e.selectInfo.pageSize=t.pageInfo.pageSize,e.selectInfo.total=t.pageInfo.total,e.executorList=t.executorList,e.listLoading=!1}))},handleDrag:function(){this.$refs.select.blur()},saveExecutor:function(){var e=this;this.$refs.executorForm.validate((function(t){if(!t)return e.$alert("表单填写错误"),!1;if(null!=e.executorInfo.groupId){var o=e.groupMap.get(e.executorInfo.groupId);e.executorInfo.groupName=o.name,e.executorInfo.mail=o.mail,Object(a["a"])(e.executorInfo).then((function(){e.$alert("保存成功"),e.getExecutorList(),e.dialogTableVisible=!1}))}else e.$alert("请选择组")}))},deleteExecutor:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["b"])({executorId:e.executor.id}).then((function(){t.$alert("保存成功"),t.getExecutorList(),t.dialogTableVisible=!1}))}))}}},d=s,f=o("4e82"),p=Object(f["a"])(d,n,r,!1,null,"28d103ae",null);t["default"]=p.exports}}]);