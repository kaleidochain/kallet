(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92ffbd02"],{"1b81":function(e,t,n){e.exports=n.p+"img/dapps.0b88c1ea.svg"},"2c51":function(e,t,n){"use strict";t["a"]={tabs:[{name:"dashboard",onlineOnly:!1,routes:["/interface/dashboard","/interface"],icons:{active:n("5416"),inactive:n("f85d")},titleKey:"interface.dashboard",children:[]},{name:"send-transaction",onlineOnly:!1,routes:["/interface/send-transaction","/interface/send-offline","/interface/send-offline/generate-info","/interface/send-offline/generate-tx","/interface/send-offline/send-tx","/interface/nft-manager"],icons:{active:n("e909"),inactive:n("534d")},titleKey:"interface.txSideMenuTitle",children:[{name:"send-transaction",routes:["/interface/send-transaction"],icons:{active:"",inactive:""},titleKey:"common.sendTx"},{name:"send-offline",routes:["/interface/send-offline","/interface/send-offline/generate-info","/interface/send-offline/generate-tx","/interface/send-offline/send-tx"],icons:{active:"",inactive:""},titleKey:"common.offline"},{name:"nft-manager",onlineOnly:!0,routes:["/interface/nft-manager"],icons:{active:"",inactive:""},titleKey:"common.ntfManager"}]},{name:"dapps",onlineOnly:!0,routes:["/interface/dapps","/interface/dapps/manage-ens","/interface/dapps/manage-ens/auction","/interface/dapps/manage-ens/bid","/interface/dapps/manage-ens/owned","/interface/dapps/manage-ens/reveal","/interface/dapps/manage-ens/forbidden","/interface/dapps/manage-ens/finalize","/interface/dapps/manage-ens/manage","/interface/dapps/manage-ens/fifs","/interface/dapps/manage-ens/claim","/interface/dapps/manage-ens/dns-error","/interface/dapps/manage-ens/no-txt-setup","/interface/dapps/manage-ens/transfer-registrar","/interface/dapps/manage-ens/create-commitment","/interface/dapps/manage-ens/permanent-registration","/interface/dapps/domain-sale","/interface/dapps/schedule-transaction","/interface/dapps/maker-dai"],icons:{active:n("9f99"),inactive:n("1b81")},titleKey:"common.dapps",children:[]},{name:"contracts",onlineOnly:!0,routes:["/interface/interact-with-contract","/interface/deploy-contract"],icons:{active:n("97e2"),inactive:n("d40c")},titleKey:"interface.txSideMenuContract",children:[{name:"interact-with-contract",routes:["/interface/interact-with-contract"],icons:{active:"",inactive:""},titleKey:"common.interactWcontract"},{name:"deploy-contract",routes:["/interface/deploy-contract"],icons:{active:"",inactive:""},titleKey:"common.depContract"}]},{name:"messages",onlineOnly:!1,routes:["/interface/sign-message","/interface/verify-message"],icons:{active:n("722d"),inactive:n("4561")},titleKey:"interface.txSideMenuMessage",children:[{name:"sign-message",routes:["/interface/sign-message"],icons:{active:"",inactive:""},titleKey:"common.signMessage"},{name:"verify-message",routes:["/interface/verify-message"],icons:{active:"",inactive:""},titleKey:"common.verifyMessage"}]}]}},4561:function(e,t,n){e.exports=n.p+"img/message.62d92682.svg"},"534d":function(e,t,n){e.exports=n.p+"img/send.5c17b4bb.svg"},5416:function(e,t,n){e.exports=n.p+"img/dashboard-active.2cf649ea.svg"},"55c1":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-container-title"},[n("div",{staticClass:"desktop-title"},[n("h2",[e._v(e._s(e.title)+" "),e._t("default")],2),e._t("right"),n("div",{staticClass:"side-menu-button"},[n("round-button",{attrs:{title:e.$t("common.menu")},nativeOn:{click:function(t){return e.toggleSideMenu(t)}}})],1)],2),n("div",{staticClass:"mobile-title"},[n("mobile-menu",{attrs:{title:e.title}})],1)])},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"round-button"},[n("button",[e._v(e._s(e.title))])])},r=[],c={props:{title:{type:String,default:function(){return{}}}},data:function(){return{}}},o=c,f=(n("5dc5"),n("2877")),l=Object(f["a"])(o,i,r,!1,null,"575ca241",null),d=l.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-mobile-menu"},[n("div",{staticClass:"mobile-menu-container"},[n("b-dropdown",{attrs:{text:e.title}},e._l(e.tabData,function(t,a){return n("div",{key:t.name+a,staticClass:"dropdown-menu-item",class:t.onlineOnly&&!e.online?"disabled-item":""},[n("div",{staticClass:"cat-title",class:e.isTabActive(t.routes)?"active":"",on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[n("p",[e._v(e._s(e.$t(t.titleKey)))]),t.children.length?n("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}}):e._e()]),t.children.length?n("div",{staticClass:"sub-menu"},e._l(t.children,function(t,a){return n("b-dropdown-item",{key:t.name+a,class:e.isTabActive(t.routes)?"active":"",on:{click:function(n){return n.preventDefault(),e.tabAction(t)}}},[e._v("\n            "+e._s(e.$t(t.titleKey))+"\n          ")])}),1):e._e()])}),0),e._m(0)],1)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"menu-small-title"},[e._v("\n      MENU "),n("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])}],p=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("bd86")),g=n("2c51"),v=n("2f62");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(p["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={props:{title:{type:String,default:""}},data:function(){return{tabData:g["a"].tabs}},computed:h({},Object(v["b"])(["online"])),methods:{isTabActive:function(e){return e.includes(this.$route.path)},tabAction:function(e){e.hasOwnProperty("children")&&0!==e.children.length||this.$router.push({path:e.routes[0]})}}},O=y,_=(n("ad40"),Object(f["a"])(O,u,m,!1,null,null,null)),w=_.exports,x={components:{"round-button":d,"mobile-menu":w},props:{title:{type:String,default:""}},data:function(){return{}},methods:{toggleSideMenu:function(){this.$store.commit("TOGGLE_SIDEMENU")}}},C=x,j=(n("ffab"),Object(f["a"])(C,a,s,!1,null,"3a726a99",null)),M=j.exports;n.d(t,"a",function(){return M})},"55e2":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"verify-content-container"},[n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[e._v("Signature:")]),n("div",{staticClass:"copy-buttons"},[n("span",{on:{click:e.deleteInput}},[e._v(e._s(e.$t("common.clear")))]),n("span",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])])])]),n("div",{staticClass:"the-form signature"},[n("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"signature",staticClass:"custom-textarea-1",attrs:{name:"signature"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),n("div",[""!==e.message&&!0===e.showMessage?n("p",{staticClass:"success-message"},[e._v("\n        "+e._s(JSON.parse(e.message).address)+"\n        "+e._s(e.$t("interface.verifiedMessage"))+":\n        "),JSON.parse(e.message).msg.length>20?n("br"):e._e(),n("b",[e._v(e._s(JSON.parse(e.message).msg))])]):e._e(),e.errors.has("signature")?n("p",[e._v(e._s(e.errors.first("signature")))]):e._e()])]),n("div",{staticClass:"submit-button-container"},[n("div",{staticClass:"buttons"},[n("button",{class:[e.errors.has("signature")||""===e.message?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.verifyMessage}},[e._v("\n        "+e._s(e.$t("common.verifyMessage"))+"\n      ")])])])])},s=[],i=n("f29f"),r=i["a"],c=(n("5b3d"),n("2877")),o=Object(c["a"])(r,a,s,!1,null,"70b69d08",null),f=o.exports;n.d(t,"a",function(){return f})},"5b3d":function(e,t,n){"use strict";var a=n("be01"),s=n.n(a);s.a},"5dc5":function(e,t,n){"use strict";var a=n("d3c8"),s=n.n(a);s.a},"6be4":function(e,t,n){},"722d":function(e,t,n){e.exports=n.p+"img/message-active.c96fee31.svg"},"97e2":function(e,t,n){e.exports=n.p+"img/contract-active.fb040b49.svg"},"9f20":function(e,t,n){},"9f99":function(e,t,n){e.exports=n.p+"img/dapps-active.19387e9d.svg"},ad40:function(e,t,n){"use strict";var a=n("9f20"),s=n.n(a);s.a},bb65:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign-message-container"},[n("interface-container-title",{attrs:{title:e.$t("common.verifyMessage")}}),n("verify-message-input"),n("div",{staticClass:"content-container"},[n("div",{staticClass:"submit-button-container"},[n("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},s=[],i=n("539d"),r=n("55c1"),c=n("55e2"),o={name:"VerifyMessage",components:{"interface-bottom-text":i["a"],"interface-container-title":r["a"],"verify-message-input":c["a"]}},f=o,l=(n("dfb1"),n("2877")),d=Object(l["a"])(f,a,s,!1,null,"7755a897",null),u=d.exports;n.d(t,"default",function(){return u})},be01:function(e,t,n){},d3c8:function(e,t,n){},d40c:function(e,t,n){e.exports=n.p+"img/contract.e3d5f51a.svg"},da63:function(e,t,n){},dfb1:function(e,t,n){"use strict";var a=n("6be4"),s=n.n(a);s.a},e909:function(e,t,n){e.exports=n.p+"img/send-active.9046d05b.svg"},f29f:function(e,t,n){"use strict";(function(e){n("8e6e"),n("ac6a"),n("456d"),n("6b54"),n("a481");var a=n("bd86"),s=n("ce96"),i=n("2f62"),r=n("b671");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t["a"]={props:{signature:{type:String,default:""}},data:function(){return{message:this.signature,showMessage:!1}},computed:o({},Object(i["b"])(["web3"])),watch:{message:function(e){this.message=e},signature:function(e){this.message=e}},methods:{copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInput:function(){this.showMessage=!1,this.message=""},verifyMessage:function(){try{var t=JSON.parse(this.message),n=Object(r["hashPersonalMessage"])(Object(r["toBuffer"])(t.msg)),a=e.from(t.sig.replace("0x",""),"hex");if(65!==a.length)return void s["d"].responseHandler("Something went wrong!",s["d"].ERROR);a[64]=0===a[64]||1===a[64]?a[64]+27:a[64],"1"===t.version&&(n=this.web3.utils.sha3(t.msg));var i=Object(r["ecrecover"])(n,a[64],a.slice(0,32),a.slice(32,64));t.address.replace("0x","")!==Object(r["pubToAddress"])(i).toString("hex")?(this.showMessage=!1,s["d"].responseHandler("Signer address is different from the derived address!",s["d"].ERROR)):this.showMessage=!0}catch(c){s["d"].responseHandler(c,s["d"].ERROR)}}}}}).call(this,n("1c35").Buffer)},f85d:function(e,t,n){e.exports=n.p+"img/dashboard.d841dabb.svg"},ffab:function(e,t,n){"use strict";var a=n("da63"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-92ffbd02.550e35de.js.map