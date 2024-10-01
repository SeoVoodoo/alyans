import{d as i,l as o,j as a,r as d,n as h,S as m,I as u,P as g,C as v}from"./index-BIeTgQj9.js";const f=t=>a.jsx(p,{children:a.jsx("ul",{children:t.tabs.map((e,r)=>a.jsx(w,{children:a.jsx(C,{active:t.active===e.status,onClick:()=>t.handleTabClick(e.status),children:e.title})},r))})}),p=i.nav`
    margin-top: 60px;

    ul {        
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        justify-content: space-between;
        gap: 2px;
    }    
`,w=i.li`
   
`,C=i.button` 
    width: 100%;
    height: 70px;
    z-index: -1;
    border: none;
    border-radius: 24px 24px 0 0;    
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem);    
    padding: 22px;
    border: 1px solid ${t=>t.active?({theme:e})=>e.color.outline:({theme:e})=>e.color.multiСhannel}; 
    border-bottom: none;      
    
    color: ${({theme:t})=>t.color.multiСhannel};
    background-color: ${({theme:t})=>t.bgCol.default};

    ${t=>!t.active&&o`
        &:hover {
            border: none;
            background: ${({theme:e})=>e.bgCol.btn.primaryHover}; 
            color: ${({theme:e})=>e.color.defaultBtn};
        }
    `}    

    ${t=>t.active&&o`
        color: ${({theme:e})=>e.color.defaultBtn};
        background-color: ${({theme:e})=>e.bgCol.btn.primary};        
    `}    
`,j=t=>{const[e,r]=d.useState(!1),c=()=>{r(n=>!n)},s=h();return a.jsxs($,{isOpenMenu:e,children:[a.jsxs(m,{as:"a",onClick:c,isOpenMenu:e,children:["Все разделы",a.jsx(u,{id:"dropdawn_arrow",width:"14",height:"9",viewBox:"0 0 14 9",stroke:e?s.color.defaultBtn:s.color.primary})]}),a.jsx(k,{isOpenMenu:e,children:a.jsx("ul",{children:t.currentNavigation&&t.currentNavigation.map(n=>a.jsx(y,{children:a.jsx(P,{href:`#${n.href}`,onClick:c,children:n.name})},n.name))})})]})},$=i.div`
    position: relative;
    height: 50px;
    margin-bottom: 30px;    
    
    svg {
        transform: ${t=>t.isOpenMenu?"rotate(-180deg)":"rotate(0)"};
        transition: transform 0.4s ease;
    }

    @media ${({theme:t})=>t.media.tablet} {
        margin-bottom: 10px;
    }
`,k=i.div`    
    position: absolute;
    top: 42px;
    padding: 30px 20px 10px;
    background-color: #fff;
    max-width: 456px;
    width: 100%;
    height: auto;
    border: 1px solid ${({theme:t})=>t.color.primary};
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 20;  
    
    opacity: ${t=>t.isOpenMenu?"1":"0"};
    transform: ${t=>t.isOpenMenu?"scaleY(1)":"scaleY(0)"};
    transform-origin: 0 0;
    transition: .5s ease-in-out;

    @media ${({theme:t})=>t.media.mobile} {
        /* left: 50%;
        transform: translateX(-50%); */
        max-width: 300px;
    }
`,y=i.li`
  margin-bottom: 10px;  
`,P=i.a`
  
  &:hover {
    color: ${({theme:t})=>t.color.primary};
    text-decoration: underline;
  } 
`,x=t=>a.jsx(T,{active:t.active,activePanel:t.activePanel,children:a.jsxs(S,{children:[t.currentNavigation&&a.jsx(j,{currentNavigation:t.currentNavigation}),a.jsxs(B,{children:[a.jsx(M,{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Код по номенклатуре услуг"}),a.jsx("th",{children:t.active==="geneticResearch"||t.activePanel==="geneticResearch"?"Срок выполнения, раб. дн":"Код"}),a.jsx("th",{children:"Наименование услуги"}),a.jsx("th",{children:"Стоимость услуги, руб."})]})}),a.jsx(z,{children:t.currentContent.map(e=>a.jsxs(N,{chapter:e.chapter,id:e.chapter||e.subChapter||e.subSubChapter?e.firstCell:null,subChapter:e.subChapter,subSubChapter:e.subSubChapter,title:e.title,children:[a.jsx(l,{children:e.firstCell}),a.jsx(l,{children:e.secondCell}),a.jsx(l,{children:e.thirdCell}),a.jsx(l,{children:e.fourthСell})]}))})]})]})}),T=i.nav`
  table {
    transform: scale(0);
  }

  ${t=>!t.activePanel&&t.active&&o`       
      table {            
      transform: scale(1);
      transform-origin: 0 0;
      transition: transform 0.5s ease-in-out 0.25s;
      -webkit-transition: transform 0.5s ease-in-out 0.25s;
      -moz-transition: transform 0.5s ease-in-out 0.25s;
    }
  `}  

  ${t=>t.activePanel&&t.active===t.activePanel&&o`
    max-height: 50000px;
    transition: max-height 2s ease-in-out;
    table {            
      transform: scale(1);
      transform-origin: 0 0;
      transition: transform 0.5s ease-in-out 0.25s;
      -webkit-transition: transform 0.5s ease-in-out 0.25s;
      -moz-transition: transform 0.5s ease-in-out 0.25s;
    }
  `}

  ${t=>t.activePanel&&t.active!==t.activePanel&&o`
    overflow: hidden;
    max-height: 0;
    //transition: max-height 0.5s ease-in-out;
  `}    
`,S=i.div`
  width: 100%;
  padding: 20px 40px 40px;
  border: 2px solid ${({theme:t})=>t.color.primary};  
  border-radius: 0 0 24px 24px;
  //outline: 2px solid ${({theme:t})=>t.color.primary};
  margin: 0 auto 100px; 
  overflow-x: auto;

  @media ${({theme:t})=>t.media.tablet} {
    padding: 10px;
  } 

  @media ${({theme:t})=>t.media.mobile} {
    padding: 10px 10px 3px;
    border-radius: 0;
    margin: 0 auto;
  } 
`,B=i.table`
  max-width: 1200px;
  border-collapse: separate;
  overflow: hidden;  
  margin: 0 auto;  
`,M=i.thead`
  tr {
    background-color: rgba(243, 252, 250, 1);
  }

  th {
    padding: 10px 12px;
    border: 1px solid ${({theme:t})=>t.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
  }

  th:last-child {
    max-width: 149px;
  }

  tr:first-child th:first-child { border-top-left-radius: 16px; }
  tr:first-child th:last-child { border-top-right-radius: 16px; }
`,z=i.tbody` 
  td {
    border: 1px solid ${({theme:t})=>t.color.multiСhannel};
  }
`,N=i.tr`  

  td:not(:nth-child(3)) {
    font-weight: 700;
    text-align: center;
  }

  td:nth-child(3) {
    text-align: ${t=>t.chapter||t.subChapter||t.title||t.subSubChapter?"center":"left"};
    font-weight: ${t=>t.chapter||t.subChapter||t.title||t.subSubChapter?"700":"400"};
  }

  td:nth-child(2n) {    
    max-width: 149px;    
  }

  &:last-child td:first-child { border-bottom-left-radius: 16px; }
  &:last-child td:last-child { border-bottom-right-radius: 16px; }  

  ${t=>t.chapter&&o`
    background-color: rgba(231, 236, 240, 1);
  `}

  ${t=>t.subChapter&&o`
    background-color: rgba(253, 215, 173, 1);
  `}

  ${t=>t.subSubChapter&&o`
    background-color: rgba(213, 243, 238, 0.3);
  `}
`,l=i.td`
  padding: 10px; 
  font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem); 
`,D=t=>a.jsxs(I,{children:[a.jsx(f,{tabs:t.tabs,active:t.active,handleTabClick:t.handleTabClick}),a.jsx(x,{currentNavigation:t.navigation,currentContent:t.content,active:t.active})]}),I=i.div`
`,O=t=>{const e=h(),[r,c]=d.useState(""),s=n=>{c(n===r?"":n),t.handleTabClick(n)};return a.jsx(R,{children:a.jsx("ul",{children:t.tabs.map((n,b)=>a.jsxs(_,{children:[a.jsxs(L,{active:r!==""&&t.active===n.status,onClick:()=>s(n.status),children:[n.title,a.jsx(u,{id:r!==""&&t.active===n.status?"arrow_up_tab":"arrow_down_tab",width:"24",height:"24",viewBox:"0 0 24 24",fill:r!==""&&t.active===n.status?e.color.defaultBtn:e.color.multiСhannel})]}),a.jsx(x,{active:r!==""?t.active:"",currentContent:t.content[n.status],currentNavigation:t.navigation[n.status],activePanel:n.status})]},b))})})},R=i.div`
    margin: 30px 0 60px;
    ul {
        display: flex;
        flex-direction: column;
    }    
`,_=i.li`    
`,L=i.button` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;       
    border: 1px solid ${t=>t.active?({theme:e})=>e.color.outline:({theme:e})=>e.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem);    
    padding: 22px;       
    color: ${t=>t.active?({theme:e})=>e.color.defaultBtn:({theme:e})=>e.color.multiСhannel};  
    background-color:  ${t=>t.active?({theme:e})=>e.bgCol.btn.primary:({theme:e})=>e.bgCol.default};
    margin-top: -1px;
`,E=t=>{const[e,r]=d.useState("surova"),c=576,s=n=>{switch(n){case"bebelya":r("bebelya");break;case"geneticResearch":r("geneticResearch");break;default:r("surova")}};return a.jsxs(W,{children:[a.jsx(g,{pageTopPart:t.pricesPage.pageTopPart,windowWidth:t.windowWidth}),a.jsx(v,{children:t.windowWidth>c?a.jsx(D,{tabs:t.pricesPage.tabs,active:e,handleTabClick:s,content:t.pricesPage.content[e],navigation:t.pricesPage.navigation[e]}):a.jsx(O,{tabs:t.pricesPage.tabs,active:e,handleTabClick:s,content:t.pricesPage.content,navigation:t.pricesPage.navigation})})]})},W=i.div`
  width: 100%;
`;export{E as default};
