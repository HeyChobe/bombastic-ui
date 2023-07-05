import{jsx as n,jsxs as e}from"react/jsx-runtime";import{useState as o,useRef as t}from"react";function r(n,e){void 0===e&&(e={});var o=e.insertAt;if(n&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var a="Button-module_button__2ZuB7";r('.Button-module_button__2ZuB7 {\n  border: 0;\n  padding: 0.7rem 1.1rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 400;\n  color: white;\n  font-size: 1.2rem;\n  transition: ease-in-out 0.2s;\n}\n.Button-module_button__2ZuB7[data-small="true"] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n}\n.Button-module_button__2ZuB7:hover {\n  opacity: 0.8;\n}\n.Button-module_button__2ZuB7[data-ghost="true"]:hover {\n  opacity: 0.7;\n}\n\n/* Background Color */\n.Button-module_button__2ZuB7[data-bg="primary"] {\n  background-color: var(--blue);\n}\n.Button-module_button__2ZuB7[data-bg="secondary"] {\n  background-color: var(--grey2);\n  color: var(--white);\n}\n.Button-module_button__2ZuB7[data-bg="ok"] {\n  background-color: var(--green);\n}\n.Button-module_button__2ZuB7[data-bg="cancel"] {\n  background-color: var(--red);\n}\n.Button-module_button__2ZuB7[data-bg="warning"] {\n  background-color: var(--yellow);\n}\n\n/* Ghost */\n.Button-module_button__2ZuB7[data-bg="primary"].Button-module_button__2ZuB7[data-ghost="true"] {\n  background-color: transparent;\n  border: 1.2px solid var(--blue);\n  color: var(--blue);\n}\n.Button-module_button__2ZuB7[data-bg="secondary"].Button-module_button__2ZuB7[data-ghost="true"] {\n  background-color: transparent;\n  border: 1.2px solid var(--grey2);\n  color: var(--grey2);\n}\n.Button-module_button__2ZuB7[data-bg="ok"].Button-module_button__2ZuB7[data-ghost="true"] {\n  background-color: transparent;\n  border: 1.2px solid var(--green);\n  color: var(--green);\n}\n.Button-module_button__2ZuB7[data-bg="cancel"].Button-module_button__2ZuB7[data-ghost="true"] {\n  background-color: transparent;\n  border: 1.2px solid var(--red);\n  color: var(--red);\n}\n.Button-module_button__2ZuB7[data-bg="warning"].Button-module_button__2ZuB7[data-ghost="true"] {\n  background-color: transparent;\n  border: 1.2px solid var(--yellow);\n  color: var(--yellow);\n}\n');var l={PRIMARY:"primary",SECONDARY:"secondary",OK:"ok",CANCEL:"cancel",WARNING:"warning"};function i(e){var o=e.label,t=void 0===o?"Button":o,r=e.onClick,i=void 0===r?function(){return console.warn("No onClickHandler provided for Button component")}:r,d=e.bg,c=void 0===d?"primary":d,u=e.ghost,_=void 0!==u&&u,s=e.small,m=void 0!==s&&s,h=e.disabled,g=void 0!==h&&h,p={backgroundColor:!Object.values(l).includes(c)?c:void 0},b={backgroundColor:"transparent",color:c,border:"1.2px solid ".concat(c)};return n("button",{style:g?{backgroundColor:"var(--disabled)",border:"1.2px solid var(--grey2)",color:"var(--white)",cursor:"not-allowed"}:_?b:p,className:a,"data-small":m,"data-ghost":_,"data-bg":c,disabled:g,onClick:i,children:t})}var d="Title-module_title__t68i9",c="Title-module_h1__Ty2xw",u="Title-module_h2__XIZby",_="Title-module_h3__Ywqa0",s="Title-module_h4__zqGV2",m="Title-module_h5__-o09-",h="Title-module_h6__QbWVT";r('.Title-module_title__t68i9 {\n  width: 100%;\n  height: auto;\n  margin: 0.5rem 0;\n  font-weight: 600;\n}\n\n.Title-module_h1__Ty2xw {\n  font-size: 2.8rem;\n}\n.Title-module_h2__XIZby {\n  font-size: 2.6rem;\n}\n.Title-module_h3__Ywqa0 {\n  font-size: 2.4rem;\n}\n.Title-module_h4__zqGV2 {\n  font-size: 2.2rem;\n}\n.Title-module_h5__-o09- {\n  font-size: 2rem;\n}\n.Title-module_h6__QbWVT {\n  font-size: 1.8rem;\n}\n\n/* Italic */\n.Title-module_title__t68i9[data-italic="true"] {\n  font-style: italic;\n}\n\n/* Underline */\n.Title-module_title__t68i9[data-underlined="true"] {\n  text-decoration-line: underline;\n}\n\n/* Strong */\n.Title-module_title__t68i9[data-strong="false"] {\n  font-weight: 300;\n}\n\n/* Color */\n.Title-module_title__t68i9[data-color="primary"] {\n  color: var(--black);\n}\n.Title-module_title__t68i9[data-color="secondary"] {\n  color: var(--grey2);\n}\n.Title-module_title__t68i9[data-color="ok"] {\n  color: var(--green);\n}\n.Title-module_title__t68i9[data-color="cancel"] {\n  color: var(--red);\n}\n.Title-module_title__t68i9[data-color="warning"] {\n  color: var(--yellow);\n}\n\n/* Mode */\n.Title-module_title__t68i9[data-mode="left"] {\n  text-align: left;\n}\n.Title-module_title__t68i9[data-mode="right"] {\n  text-align: right;\n}\n.Title-module_title__t68i9[data-mode="center"] {\n  text-align: center;\n}\n.Title-module_title__t68i9[data-mode="justify"] {\n  text-align: justify;\n}\n');var g=["left","right","center","justify"],p={PRIMARY:"primary",SECONDARY:"secondary",OK:"ok",CANCEL:"cancel",WARNING:"warning"};function b(e){var o=e.h,t=void 0===o?1:o,r=e.label,a=void 0===r?"Title":r,l=e.italic,i=void 0!==l&&l,b=e.underlined,v=void 0!==b&&b,x=e.onClick,f=e.color,y=void 0===f?"primary":f,k=e.strong,w=void 0===k||k,C=e.mode,B=void 0===C?"left":C,T={color:!Object.values(p).includes(y)?y:void 0},I=g.includes(B)?B:"left";return t<=1?n("h1",{style:T,"data-mode":I,"data-color":y,"data-italic":i,"data-strong":w,"data-underlined":v,onClick:x,className:"".concat(d," ").concat(c),children:a}):2===t?n("h2",{style:T,"data-mode":I,"data-color":y,"data-italic":i,"data-strong":w,"data-underlined":v,onClick:x,className:"".concat(d,", ").concat(u),children:a}):3===t?n("h3",{style:T,"data-mode":I,"data-color":y,"data-italic":i,"data-strong":w,"data-underlined":v,onClick:x,className:"".concat(d," ").concat(_),children:a}):4===t?n("h4",{style:T,"data-mode":I,"data-color":y,"data-italic":i,"data-strong":w,"data-underlined":v,onClick:x,className:"".concat(d," ").concat(s),children:a}):5===t?n("h5",{style:T,"data-mode":I,"data-color":y,"data-italic":i,"data-strong":w,"data-underlined":v,onClick:x,className:"".concat(d," ").concat(m),children:a}):n("h6",{style:T,"data-mode":I,"data-color":y,"data-italic":i,"data-strong":w,"data-underlined":v,onClick:x,className:"".concat(d," ").concat(h),children:a})}var v="Text-module_text__78lq0",x="Text-module_size_1__69MFt",f="Text-module_size_2__awYFh",y="Text-module_size_3__fflUb";r('.Text-module_text__78lq0 {\n  color: var(--black);\n  font-weight: 300;\n  width: 100%;\n  height: auto;\n}\n\n/* Size */\n.Text-module_size_1__69MFt {\n  font-size: 1.3rem;\n}\n.Text-module_size_2__awYFh {\n  font-size: 1.5rem;\n}\n.Text-module_size_3__fflUb {\n  font-size: 1.7rem;\n}\n\n/* Color */\n.Text-module_text__78lq0[data-color="primary"] {\n  color: var(--black);\n}\n.Text-module_text__78lq0[data-color="secondary"] {\n  color: var(--grey2);\n}\n.Text-module_text__78lq0[data-color="ok"] {\n  color: var(--green);\n}\n.Text-module_text__78lq0[data-color="cancel"] {\n  color: var(--red);\n}\n.Text-module_text__78lq0[data-color="warning"] {\n  color: var(--yellow);\n}\n\n/* Strong */\n.Text-module_text__78lq0[data-strong="true"] {\n  font-weight: 500;\n}\n\n/* Italic */\n.Text-module_text__78lq0[data-italic="true"] {\n  font-style: italic;\n}\n\n/* Underline */\n.Text-module_text__78lq0[data-underlined="true"] {\n  text-decoration-line: underline;\n}\n\n/* Mode */\n.Text-module_text__78lq0[data-mode="left"] {\n  text-align: left;\n}\n.Text-module_text__78lq0[data-mode="right"] {\n  text-align: right;\n}\n.Text-module_text__78lq0[data-mode="center"] {\n  text-align: center;\n}\n.Text-module_text__78lq0[data-mode="justify"] {\n  text-align: justify;\n}\n');var k={PRIMARY:"primary",SECONDARY:"secondary",OK:"ok",CANCEL:"cancel",WARNING:"warning"},w=["left","right","center","justify"];function C(e){var o=e.label,t=void 0===o?"Text":o,r=e.italic,a=void 0!==r&&r,l=e.underlined,i=void 0!==l&&l,d=e.onClick,c=e.color,u=void 0===c?"primary":c,_=e.strong,s=void 0!==_&&_,m=e.size,h=void 0===m?1:m,g=e.mode,p=void 0===g?"left":g,b={color:!Object.values(k).includes(u)?u:void 0},C=w.includes(p)?p:"left";return n("p",h<=1?{style:b,"data-color":u,"data-italic":a,"data-strong":s,"data-underlined":i,"data-mode":C,onClick:d,className:"".concat(v," ").concat(x),children:t}:2===h?{style:b,"data-color":u,"data-italic":a,"data-strong":s,"data-underlined":i,"data-mode":C,onClick:d,className:"".concat(v," ").concat(f),children:t}:{style:b,"data-color":u,"data-italic":a,"data-strong":s,"data-underlined":i,"data-mode":C,onClick:d,className:"".concat(v," ").concat(y),children:t})}var B="InputText-module_input-group__97jrm",T="InputText-module_input__wzAKf",I="InputText-module_user-label__OX-EF";r('.InputText-module_input-group__97jrm {\n  position: relative;\n  margin: 1.5rem 0;\n  width: 100%;\n  min-width: 200px;\n}\n\n.InputText-module_input__wzAKf {\n  border-width: 1.5px;\n  border-style: solid;\n  border-radius: 12px;\n  background: none;\n  padding: 1rem;\n  font-size: 1.1rem;\n  width: 100%;\n  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: "Raleway", sans-serif;\n}\n\n.InputText-module_input__wzAKf:disabled {\n  cursor: not-allowed;\n  background-color: var(--grey);\n}\n\n.InputText-module_user-label__OX-EF {\n  position: absolute;\n  left: 15px;\n  color: var(--grey2);\n  pointer-events: none;\n  transform: translateY(1rem);\n  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  top: 0;\n  font-family: "Raleway", sans-serif;\n}\n\n.InputText-module_input__wzAKf:focus {\n  outline: none;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.InputText-module_input__wzAKf:focus ~ label {\n  transform: translateY(-50%) scale(0.95);\n  background-color: Window;\n  padding: 0 0.2em;\n}\n\n.InputText-module_input__wzAKf:valid {\n  outline: none;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.InputText-module_input__wzAKf:valid ~ label {\n  transform: translateY(-50%) scale(0.95);\n  background-color: Window;\n  padding: 0 0.2em;\n}\n\n/* Color */\n.InputText-module_input__wzAKf[data-color="primary"] {\n  border-color: var(--blue);\n}\n.InputText-module_input__wzAKf[data-color="secondary"] {\n  border-color: var(--grey2);\n}\n.InputText-module_input__wzAKf[data-color="ok"] {\n  border-color: var(--green);\n}\n.InputText-module_input__wzAKf[data-color="cancel"] {\n  border-color: var(--red);\n}\n.InputText-module_input__wzAKf[data-color="warning"] {\n  border-color: var(--yellow);\n}\n.InputText-module_input__wzAKf[data-label-color="dark"] {\n  color: var(--black);\n}\n.InputText-module_input__wzAKf[data-label-color="light"] {\n  color: var(--white);\n}\n.InputText-module_user-label__OX-EF[data-color="dark"] {\n  color: var(--blue);\n}\n.InputText-module_user-label__OX-EF[data-color="light"] {\n  color: var(--grey2);\n}\n.InputText-module_user-label__OX-EF[data-color="ok"] {\n  color: var(--green);\n}\n.InputText-module_user-label__OX-EF[data-color="cancel"] {\n  color: var(--red);\n}\n.InputText-module_user-label__OX-EF[data-color="warning"] {\n  color: var(--yellow);\n}\n');var N={PRIMARY:"primary",SECONDARY:"secondary",OK:"ok",CANCEL:"cancel",WARNING:"warning"},X={DARK:"dark",LIGHT:"light"};function A(o){var t=o.onChange,r=o.value,a=o.placeholder,l=void 0===a?"Type something":a,i=o.color,d=void 0===i?"primary":i,c=o.labelColor,u=void 0===c?"dark":c,_=o.disabled,s=void 0!==_&&_,m=!Object.values(N).includes(d),h=!Object.values(X).includes(u),g={color:m?d:void 0};return e("div",{className:B,children:[n("input",{style:{borderColor:m?d:void 0,color:s?"var(--grey)":h?u:void 0},disabled:s,required:!0,type:"text",autoComplete:"off","data-color":d,"data-label-color":u,className:T,value:r,onChange:t}),n("label",{style:g,"data-color":d,className:I,children:l})]})}var R="Accordion-module_container__YIhlM",z="Accordion-module_title-container__Dw4Ii",j="Accordion-module_text-container__0br76",O="Accordion-module_title__-w5py",S="Accordion-module_text__W3poa",F="Accordion-module_icon__xfHxX";function E(r){var a=r.title,l=void 0===a?"Title":a,i=r.description,d=void 0===i?"This is an example of paragraph":i,c=r.bg,u=void 0===c?"dark":c,_=o(!1),s=_[0],m=_[1],h=t(null);return e("div",{style:{borderBottomColor:"light"!==u?"var(--blue)":"var(--black)",backgroundColor:"light"!==u?"var(--black)":"var(--grey)",borderBottomWidth:s?void 0:"1px"},className:R,children:[e("div",{onClick:function(){h.current&&(h.current.style.rotate=s?"0deg":"180deg",m((function(n){return!n})))},className:z,children:[n("span",{style:"light"!==u?{color:"var(--grey)"}:{color:"var(--black)"},className:O,children:l}),n("svg",{ref:h,className:F,width:"40px",height:"40px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M7 10L12 15L17 10",stroke:"light"!==u?"var(--grey)":"var(--black)",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})]}),n("div",{className:j,style:s?{display:"block"}:{display:"none"},children:n("p",{style:"light"!==u?{color:"var(--grey)"}:{color:"var(--black)"},className:S,children:d})})]})}r(".Accordion-module_container__YIhlM {\n  height: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.Accordion-module_title-container__Dw4Ii,\n.Accordion-module_text-container__0br76 {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Accordion-module_title-container__Dw4Ii {\n  cursor: pointer;\n}\n\n.Accordion-module_title__-w5py {\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  font-size: 1.2rem;\n  font-weight: 500;\n  padding: 1rem 0.5rem;\n}\n\n.Accordion-module_text__W3poa {\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  font-size: 1rem;\n  padding: 0.5rem;\n  font-weight: 300;\n}\n\n.Accordion-module_icon__xfHxX {\n  transition: ease-in 0.15s;\n}\n");var M="ComboBox-module_container__O5sFM",Y="ComboBox-module_select-container__VT7Nv",W="ComboBox-module_label__e2wbc",Z="ComboBox-module_selected__DvYgj",K="ComboBox-module_option-container__WIB8D",L="ComboBox-module_option__E86BE",q="ComboBox-module_label-focus__2OH5D",P="ComboBox-module_icon__ZnjoF",D="ComboBox-module_option-selected__lVX8v";r(".ComboBox-module_container__O5sFM {\n  position: relative;\n  width: 300px;\n  height: auto;\n}\n\n.ComboBox-module_select-container__VT7Nv {\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 6px;\n}\n\n.ComboBox-module_label__e2wbc {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.ComboBox-module_selected__DvYgj {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n}\n\n.ComboBox-module_label__e2wbc,\n.ComboBox-module_selected__DvYgj {\n  padding: 0 1rem;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n\n.ComboBox-module_option-container__WIB8D {\n  list-style: none;\n  cursor: pointer;\n  margin-top: 4px;\n  max-height: 160px;\n  overflow-y: scroll;\n}\n\n.ComboBox-module_option__E86BE {\n  font-size: 0.9rem;\n  padding: 0.5rem 1rem;\n}\n\n.ComboBox-module_label-focus__2OH5D {\n  transform: translate(-6%, -46%) scale(0.7);\n  background-color: Window;\n  height: auto;\n  font-weight: 300;\n  padding: 0 0.4rem;\n}\n\n.ComboBox-module_icon__ZnjoF {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-6px, 10px);\n  cursor: pointer;\n  transition: ease-in 0.15s;\n}\n\n.ComboBox-module_option-selected__lVX8v {\n  background-color: red;\n}\n");var G=[{label:"Option 1",value:1},{label:"Option 2",value:2}];function V(r){var a=r.theme,l=void 0===a?"dark":a,i=r.placeholder,d=void 0===i?"Select an option":i,c=r.themeColor,u=void 0===c?"":c,_=r.labelBgColor,s=void 0===_?"":_,m=r.options,h=void 0===m?G:m,g=r.onChange,p=o(!1),b=p[0],v=p[1],x=o(""),f=x[0],y=x[1],k=t(null),w=""!==s&&b?s:void 0,C=function(n){k.current&&(y(n.target.dataset.value),g(n.target.dataset.value),Array.from(k.current.children).forEach((function(n){n.classList.remove(D)})),n.target.classList.add(D),v(!1))};return e("div",{className:M,children:[e("div",{onClick:function(){return v((function(n){return!n}))},style:""===u?"light"!==l?{borderColor:"var(--black)"}:{borderColor:"var(--grey2)"}:{borderColor:u},className:Y,children:[n("span",{style:""===u?"light"!==l?{color:"var(--black)"}:{color:"var(--grey2)"}:{color:u},className:Z,children:f}),n("svg",{style:b?{rotate:"180deg",transform:"none",marginTop:"7px",marginRight:"6px"}:{rotate:"0deg"},className:P,width:"30px",height:"30px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M7 10L12 15L17 10",stroke:""===u?"light"!==l?"var(--black)":"var(--grey2)":u,strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),n("label",{style:""===u?"light"!==l?{color:"var(--black)",backgroundColor:w}:{color:"var(--grey2)",backgroundColor:w}:{color:u,backgroundColor:w},className:b||""!==f?"".concat(W," ").concat(q):W,children:d})]}),n("div",{ref:k,style:b?{display:"block"}:{display:"none"},className:K,children:h.map((function(e,o){return n("li",{style:"light"!==l?{backgroundColor:"var(--black)",color:"var(--grey)"}:{backgroundColor:"var(--grey)",color:"var(--black)"},"data-value":e.value,className:L,onClick:C,children:e.label},o)}))})]})}var U="Avatar-module_image__ieqGp",H="Avatar-module_letter__rrnqW";r(".Avatar-module_image__ieqGp {\n  border-radius: 50%;\n}\n\n.Avatar-module_letter__rrnqW {\n  display: flex;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n}\n");var Q=["#FF0000","#0000FF","#00FF00","#FFFF00","#FFA500","#FFC0CB","#800080","#808080","#40E0D0","#A52A2A"];function J(e){var o=e.alt,t=void 0===o?"":o,r=e.src,a=void 0===r?"":r,l=e.pointer,i=void 0!==l&&l,d=e.width,c=void 0===d?"100px":d,u=e.height,_=void 0===u?"100px":u,s=e.letter,m=void 0===s?"":s,h=e.bgColor,g=void 0===h?"":h;return a&&""!==a&&!m&&""===m?n("img",{className:U,style:{cursor:i?"pointer":void 0,width:c,height:_},alt:t,src:a}):n("span",{style:{cursor:i?"pointer":void 0,width:c,height:_,backgroundColor:g&&""!==g?g:Q[Math.floor(Math.random()*Q.length)],color:"var(--white)",fontSize:"1.3rem",fontWeight:"500"},className:H,children:m.length<=2?m.toUpperCase():m.slice(0,2).toUpperCase()})}var $="ImageCard-module_container__9xBiT",nn="ImageCard-module_image__8Y540",en="ImageCard-module_info__bKjBd",on="ImageCard-module_title__k3jOS",tn="ImageCard-module_text__4aTBC",rn="ImageCard-module_button__xz9V2";function an(o){var t=o.title,r=void 0===t?"Title":t,a=o.text,l=void 0===a?"Example of text content":a,i=o.titleButton,d=void 0===i?"Go Somewhere":i,c=o.src,u=void 0===c?"":c,_=o.alt,s=void 0===_?"":_,m=o.theme,h=void 0===m?"dark":m,g=o.bgButtonColor,p=void 0===g?"":g;return e("div",{className:$,style:{backgroundColor:"light"!==h?"var(--black)":"var(--grey)"},children:[n("div",{style:{backgroundImage:'url("'.concat(u,'")'),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},role:"img","aria-label":s,className:nn}),e("div",{className:en,style:{color:"light"!==h?"var(--grey)":"var(--black)"},children:[n("span",{className:on,children:r.length<=39?r:r.slice(0,39)+"..."}),n("p",{className:tn,children:l.length<=82?l:l.slice(0,82)+"..."}),n("button",{style:{backgroundColor:""===p?"var(--disabled)":p},className:rn,type:"button",children:d})]})]})}r(".ImageCard-module_container__9xBiT {\n  width: 270px;\n  min-width: 260px;\n  height: auto;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.ImageCard-module_image__8Y540 {\n  width: 100%;\n  height: 180px;\n  background-color: var(--grey2);\n}\n\n.ImageCard-module_info__bKjBd {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.ImageCard-module_title__k3jOS {\n  font-weight: 700;\n  font-size: 1.3rem;\n}\n\n.ImageCard-module_text__4aTBC {\n  font-weight: 500;\n  font-size: 1rem;\n}\n\n.ImageCard-module_button__xz9V2 {\n  font-weight: 500;\n  font-size: 1rem;\n  border: none;\n  margin: 0;\n  padding: 0.5rem;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: ease-in-out 0.2s;\n}\n\n.ImageCard-module_button__xz9V2:hover {\n  opacity: 0.9;\n}\n");var ln="ProgressBar-module_container__Mucrb",dn="ProgressBar-module_progress__J2mNo";function cn(e){var o=e.width,t=void 0===o?"100%":o,r=e.bgColor,a=void 0===r?"":r;return n("div",{className:ln,role:"progressbar","aria-label":"progressBar",children:n("div",{style:{backgroundColor:""!==a?a:"var(--blue)",width:t},className:dn})})}r(".ProgressBar-module_container__Mucrb {\n  width: 100%;\n  height: 20px;\n  border-radius: 20px;\n  overflow: hidden;\n  background-color: var(--disabled);\n}\n\n.ProgressBar-module_progress__J2mNo {\n  height: 100%;\n}\n");var un="Pagination-module_container__9H0mU",_n="Pagination-module_icon__2iCyv",sn="Pagination-module_numbers-container__kUCfw",mn="Pagination-module_page__WjG0l";function hn(t){var r=t.total,a=void 0===r?7:r,l=t.onChange,i=t.page,d=void 0===i?1:i,c=t.bgColor,u=void 0===c?"":c,_=t.numberColor,s=void 0===_?"":_,m=t.currentNumberColor,h=void 0===m?"":m,g=o(d),p=g[0],b=g[1],v=o(Array.from({length:a},(function(){return 1})))[0];return e("div",{className:un,children:[n("svg",{onClick:function(){return b((function(n){return 1===n?n:n-1}))},style:{rotate:"90deg"},className:_n,width:"30px",height:"30px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M7 10L12 15L17 10",stroke:""!==u?u:"var(--blue)",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),n("div",{className:sn,children:v.map((function(e,o){return o+1>=p-1&&o+1<=p+1?n("div",{style:o+1===p?{backgroundColor:""!==u?u:"var(--blue)",color:""!==h?h:"var(--white)"}:{backgroundColor:"var(--grey)",color:""!==s?s:"var(--black)"},className:mn,onClick:function(){var n;(n=o+1)>=1&&n<=a&&(b(n),l(n))},children:o+1}):null}))}),n("svg",{onClick:function(){return b((function(n){return n===a?a:n+1}))},style:{rotate:"-90deg"},className:_n,width:"30px",height:"30px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{d:"M7 10L12 15L17 10",stroke:""!==u?u:"var(--blue)",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})]})}r(".Pagination-module_container__9H0mU {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.Pagination-module_icon__2iCyv {\n  cursor: pointer;\n}\n\n.Pagination-module_numbers-container__kUCfw {\n  padding: 0 1rem;\n  height: 100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Pagination-module_page__WjG0l {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.3rem;\n  cursor: pointer;\n  padding-bottom: 3px;\n  font-weight: 500;\n}\n\n.Pagination-module_page__WjG0l:hover {\n  opacity: 0.9;\n}\n");var gn="Checkbox-module_input__2kt-h";r('.Checkbox-module_input__2kt-h[type="checkbox"][data-color="primary"] {\n  --current-color: var(--blue);\n}\n.Checkbox-module_input__2kt-h[type="checkbox"][data-color="secondary"] {\n  --current-color: var(--grey2);\n}\n.Checkbox-module_input__2kt-h[type="checkbox"][data-color="ok"] {\n  --current-color: var(--green);\n}\n.Checkbox-module_input__2kt-h[type="checkbox"][data-color="cancel"] {\n  --current-color: var(--red);\n}\n.Checkbox-module_input__2kt-h[type="checkbox"][data-color="warning"] {\n  --current-color: var(--yellow);\n}\n\n/* I would like the box-shadow has the same color of the previous element background-color */\n.Checkbox-module_input__2kt-h[type="checkbox"][data-ghost="true"]::before {\n  box-shadow: inset 1em 1em black;\n}\n\n.Checkbox-module_input__2kt-h[type="checkbox"][data-ghost="true"] {\n  border: 0.15em solid transparent;\n  background-color: var(--current-color);\n}\n\n.Checkbox-module_input__2kt-h[type="checkbox"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-progress-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  width: 1.15em;\n  height: 1.15em;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  border: 0.15em solid var(--current-color);\n  cursor: pointer;\n}\n\n.Checkbox-module_input__2kt-h[type="checkbox"]::before {\n  content: "";\n  width: 0.65em;\n  height: 0.65em;\n  -webkit-clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n          clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n  transform: scale(0);\n  transform-origin: center center;\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--current-color);\n}\n\n.Checkbox-module_input__2kt-h[type="checkbox"]:checked::before {\n  transform: scale(1);\n}\n\n.Checkbox-module_input__2kt-h[type="checkbox"]:disabled {\n  /* --current-color: var(--disabled); */\n  color: var(--disabled);\n  cursor: not-allowed;\n}\n');var pn={PRIMARY:"primary",SECONDARY:"secondary",OK:"ok",CANCEL:"cancel",WARNING:"warning"};function bn(e){var o,t=e.onChange,r=e.color,a=void 0===r?"primary":r,l=e.ghost,i=void 0!==l&&l,d=e.checked,c=void 0!==d&&d,u=e.disabled,_=void 0!==u&&u,s=!Object.values(pn).includes(a);return n("input",{type:"checkbox",className:gn,style:s?(o=a,document.documentElement.style.setProperty("--current-color",o),{color:"currentcolor"}):void 0,"data-color":a,"data-ghost":i,checked:c,disabled:_,onChange:t,required:!0})}var vn="Rating-module_rate__IXXr-";r('.Rating-module_rate__IXXr-[data-color="primary"] {\n  --current-color: var(--blue);\n}\n\n.Rating-module_rate__IXXr-[data-color="secondary"] {\n  --current-color: var(--grey2);\n}\n\n.Rating-module_rate__IXXr-[data-color="ok"] {\n  --current-color: var(--green);\n}\n\n.Rating-module_rate__IXXr-[data-color="cancel"] {\n  --current-color: var(--red);\n}\n\n.Rating-module_rate__IXXr-[data-color="warning"] {\n  --current-color: var(--yellow);\n}\n\n.Rating-module_rate__IXXr- {\n  float: left;\n  height: 46px;\n  padding: 0 10px;\n}\n\n.Rating-module_rate__IXXr-:not(:checked) > input {\n  position: absolute;\n  top: -9999px;\n}\n\n.Rating-module_rate__IXXr-:not(:checked) > label {\n  float: right;\n  width: 1em;\n  overflow: hidden;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 30px;\n  color: #ccc;\n}\n\n.Rating-module_rate__IXXr-:not(:checked) > label:before {\n  content: "★ ";\n}\n\n.Rating-module_rate__IXXr- > input:checked ~ label {\n  color: var(--current-color);\n}\n\n.Rating-module_rate__IXXr-:not(:checked) > label:hover,\n.Rating-module_rate__IXXr-:not(:checked) > label:hover ~ label {\n  /* Should be a variant of the current color */\n  color: var(--current-color);\n}\n\n.Rating-module_rate__IXXr- > input:checked + label:hover,\n.Rating-module_rate__IXXr- > input:checked + label:hover ~ label,\n.Rating-module_rate__IXXr- > input:checked ~ label:hover,\n.Rating-module_rate__IXXr- > input:checked ~ label:hover ~ label,\n.Rating-module_rate__IXXr- > label:hover ~ input:checked ~ label {\n  /* Should be a variant of the current color */\n  color: var(--current-color);\n}\n\n.Rating-module_rate__IXXr-[data-disabled="true"],\n.Rating-module_rate__IXXr-[data-disabled="true"] > * {\n  opacity: 0.7;\n  cursor: default;\n}\n\n.Rating-module_rate__IXXr-[data-disabled="true"] label:hover,\n.Rating-module_rate__IXXr-[data-disabled="true"] label:hover ~ label {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #ccc;\n  cursor: default;\n}\n\n.Rating-module_rate__IXXr-[data-readonly="true"] label:hover,\n.Rating-module_rate__IXXr-[data-readonly="true"] label:hover ~ label {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #ccc;\n  cursor: default;\n}\n');var xn={PRIMARY:"primary",SECONDARY:"secondary",OK:"ok",CANCEL:"cancel",WARNING:"warning"};function fn(o){var t,r=o.color,a=void 0===r?"primary":r,l=o.readonly,i=void 0!==l&&l,d=o.disabled,c=void 0!==d&&d,u=o.onChange,_=!Object.values(xn).includes(a);return e("div",{className:vn,style:_?(t=a,document.documentElement.style.setProperty("--current-color",t),{color:"currentcolor"}):void 0,"data-color":a,"data-disabled":c,"data-readonly":i,children:[n("input",{onChange:u,disabled:c||i,type:"radio",id:"star5",name:"rate",value:5}),n("label",{htmlFor:"star5",title:"text",children:"5 stars"}),n("input",{onChange:u,disabled:c||i,type:"radio",id:"star4",name:"rate",value:4}),n("label",{htmlFor:"star4",title:"text",children:"4 stars"}),n("input",{onChange:u,disabled:c||i,type:"radio",id:"star3",name:"rate",value:3}),n("label",{htmlFor:"star3",title:"text",children:"3 stars"}),n("input",{onChange:u,disabled:c||i,type:"radio",id:"star2",name:"rate",value:2}),n("label",{htmlFor:"star2",title:"text",children:"2 stars"}),n("input",{onChange:u,disabled:c||i,type:"radio",id:"star1",name:"rate",value:1}),n("label",{htmlFor:"star1",title:"text",children:"1 star"})]})}var yn="SearchBar-module_wrap__MaOXr",kn="SearchBar-module_search__-8TKj",wn="SearchBar-module_searchTerm__ZIf3B",Cn="SearchBar-module_searchButton__s8NnQ";r('.SearchBar-module_wrap__MaOXr[data-color="primary"] {\n  --current-color: var(--blue);\n}\n.SearchBar-module_wrap__MaOXr[data-color="secondary"] {\n  --current-color: var(--grey2);\n}\n.SearchBar-module_wrap__MaOXr[data-color="ok"] {\n  --current-color: var(--green);\n}\n.SearchBar-module_wrap__MaOXr[data-color="cancel"] {\n  --current-color: var(--red);\n}\n.SearchBar-module_wrap__MaOXr[data-color="warning"] {\n  --current-color: var(--yellow);\n}\n\n.SearchBar-module_search__-8TKj {\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n\n.SearchBar-module_searchTerm__ZIf3B {\n  width: 100%;\n  border: 3px solid var(--current-color);\n  border-right: none;\n  padding: 5px;\n  height: 20px;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  color: #9dbfaf;\n}\n\n.SearchBar-module_searchTerm__ZIf3B:focus {\n  color: var(--current-color);\n}\n\n.SearchBar-module_searchButton__s8NnQ {\n  width: 40px;\n  height: 35px;\n  border: 1px solid var(--current-color);\n  background: var(--current-color);\n  text-align: center;\n  color: #fff;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 4.5px;\n}\n\n.SearchBar-module_searchButton__s8NnQ img {\n  max-width: 100%;\n  max-height: 100%;\n  filter: invert(100%);\n}\n\n.SearchBar-module_wrap__MaOXr {\n  width: 300px;\n}\n');var Bn={PRIMARY:"primary",SECONDARY:"secondary",OK:"ok",CANCEL:"cancel",WARNING:"warning"};function Tn(o){var t,r=o.onChange,a=o.onSubmit,l=o.color,i=void 0===l?"primary":l,d=o.disabled,c=void 0!==d&&d,u=!Object.values(Bn).includes(i);return n("div",{className:yn,"data-color":i,style:u?(t=i,document.documentElement.style.setProperty("--current-color",t),{color:"currentcolor"}):void 0,children:e("div",{className:kn,children:[n("input",{onChange:r,disabled:c,type:"text",required:!0,className:wn,placeholder:"What are you looking for?"}),n("button",{onSubmit:a,disabled:c,className:Cn,children:n("img",{src:"https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.svg",alt:"search"})})]})})}r('@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&family=Roboto:wght@100;300;400;500&display=swap");\n\n:root {\n  --blue: #4096ff;\n  --grey: #f5f5f5;\n  --grey2: #9db2bf;\n  --grey3: #1d4040;\n  --disabled: #cccccc;\n  --green: #4caf50;\n  --red: #f44336;\n  --yellow: #eae509;\n  --white: #fcfcfc;\n  --black: #1d2121;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\np,\nbutton,\nspan,\nselect,\noption,\nlabel,\nli,\ndiv {\n  font-family: "Raleway", sans-serif;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n\nselect {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n');export{E as Accordion,J as Avatar,i as Button,bn as Checkbox,V as ComboBox,an as ImageCard,A as InputText,hn as Pagination,cn as ProgressBar,fn as Rating,Tn as SearchBar,C as Text,b as Title};
