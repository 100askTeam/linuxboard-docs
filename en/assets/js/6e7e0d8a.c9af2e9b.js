"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4281],{4853:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=i(5893),s=i(1151);const o={sidebar_position:4},r="\u8bbe\u5907\u6811\u914d\u7f6e",c={id:"TinyVision/part10/DeviceTreeConfiguration",title:"\u8bbe\u5907\u6811\u914d\u7f6e",description:"- usbporttype \u914d\u7f6e\u4e3a0\u662fDevice\u6a21\u5f0f\uff0c1\u662fHost\u6a21\u5f0f 2\u662fOTG\u6a21\u5f0f\u3002",source:"@site/docs/TinyVision/part10/4-DeviceTreeConfiguration.md",sourceDirName:"TinyVision/part10",slug:"/TinyVision/part10/DeviceTreeConfiguration",permalink:"/en/docs/TinyVision/part10/DeviceTreeConfiguration",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/linuxboard-docs/tree/main/docs/TinyVision/part10/4-DeviceTreeConfiguration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"v851seSidebar",previous:{title:"Linux 5.15 \u4ee5\u4e0a\u5185\u6838",permalink:"/en/docs/TinyVision/part10/Linux5.15AndAboveKernel"},next:{title:"TinyVision \u624b\u52a8\u6784\u5efa Linux 6.1 + Debian 12 \u955c\u50cf",permalink:"/en/docs/TinyVision/TinyVision_BuildDebian"}},u={},a=[];function d(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u8bbe\u5907\u6811\u914d\u7f6e",children:"\u8bbe\u5907\u6811\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'&usbc0 {\n\tdevice_type = "usbc0";\n\tusb_port_type = <0x0>;\n\tusb_detect_type = <0x0>;\n\tusb_detect_mode = <0x0>;\n\tusb_id_gpio;\n\tusb_det_vbus_gpio;\n\t/* det_vbus_supply = <&usb_power_supply>; */\n\tusb_regulator_io = "nocare";\n\tusb_wakeup_suspend = <0>;\n\tusb_serial_unique = <0>;\n\tusb_serial_number = "20080411";\n\tstatus = "okay";\n};\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"usb_port_type"})," \u914d\u7f6e\u4e3a0\u662fDevice\u6a21\u5f0f\uff0c1\u662fHost\u6a21\u5f0f 2\u662fOTG\u6a21\u5f0f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"usb_id_gpio"})," \u914d\u7f6e\u5bf9\u5e94\u7684USB ID\u5f15\u811a\uff08TinyVision \u65e0ID\u5f15\u811a\uff09\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"usb_det_vbus_gpio"}),",\uff08TinyVision \u65e0\u68c0\u6d4b\u5f15\u811a\uff09 \u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u914d\u7f6e:"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);