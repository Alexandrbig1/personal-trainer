import{G as o,a as e,c as i,j as r,b as s}from"./index-fJRsFnJK.js";function l(t){return o({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"}}]})(t)}function h(t){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}const f=e.div`
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`,x=e.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`,v=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${t=>t.theme.colors.mainBgColor};
  background-color: ${t=>t.theme.colors.burgerOverlay};
  z-index: 1000;
  transform: translateX(${t=>t!=null&&t.$isOpen?"0%":"-100%"});
  transition: transform 0.3s ease-in-out;
`,M=e(l)`
  font-size: 2.4rem;
  color: ${t=>t.theme.colors.mainTextColor};
`,b=e(h)`
  color: ${t=>t.theme.colors.mainTextColor};
  font-size: 2.4rem;
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${t=>t.theme.colors.starColor};
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`,k=e.div`
  position: relative;
  left: 0;
  top: 10rem;
  width: 100%;
  max-width: 311px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  padding: 4rem;
  color: ${t=>t.theme.colors.mainTextColor};
  /* background-color: ${t=>t.theme.colors.modalContainerColor}; */
  border-radius: 20px;
  z-index: 500;
`,C=e.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,w=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`,T=e.a`
  color: ${t=>t.theme.colors.mainTextColor};
  font-family: ${i};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
`;function z(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M2 12h1"}},{tag:"path",attr:{d:"M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"}},{tag:"path",attr:{d:"M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"}},{tag:"path",attr:{d:"M9 12h6"}},{tag:"path",attr:{d:"M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"}},{tag:"path",attr:{d:"M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"}},{tag:"path",attr:{d:"M22 12h-1"}}]})(t)}function y(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}},{tag:"path",attr:{d:"M13 17.5v4.5l2 -1.5l2 1.5v-4.5"}},{tag:"path",attr:{d:"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"}},{tag:"path",attr:{d:"M6 9l12 0"}},{tag:"path",attr:{d:"M6 12l3 0"}},{tag:"path",attr:{d:"M6 15l2 0"}}]})(t)}function c(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"}}]})(t)}function d(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"}},{tag:"path",attr:{d:"M6.343 17.657l-1.414 1.414"}},{tag:"path",attr:{d:"M6.343 6.343l-1.414 -1.414"}},{tag:"path",attr:{d:"M17.657 6.343l1.414 -1.414"}},{tag:"path",attr:{d:"M17.657 17.657l1.414 1.414"}},{tag:"path",attr:{d:"M4 12h-2"}},{tag:"path",attr:{d:"M12 4v-2"}},{tag:"path",attr:{d:"M20 12h2"}},{tag:"path",attr:{d:"M12 20v2"}}]})(t)}const g=e.button`
  border: none;
  outline: none;
  background: none;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
`,m=e(d)`
  color: ${t=>t.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.3s;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    background-color: ${t=>t.theme.colors.switcherHoverBg};
  }
`,p=e(c)`
  color: ${t=>t.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.3s;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    background-color: ${t=>t.theme.colors.switcherHoverBg};
  }
`;function $({toggleTheme:t,isDarkTheme:a}){const n=()=>{t()};return r.jsx(g,{type:"button","aria-label":"Change theme",onClick:n,children:a?r.jsx(p,{}):r.jsx(m,{})})}const B=e.header`
  padding: 2.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: top 0.3s ease-in-out;
  position: relative;
  z-index: 100;
`,j=e.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`,L=e.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,H=e.a`
  color: ${t=>t.theme.colors.mainTextColorLowOp};
  font-family: ${s};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  transition: 0.3s linear;

  position: relative;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    background-color: ${t=>t.theme.colors.mainTextColor};
    height: 1px;
    width: 0;
    left: 0;
    bottom: 0;
    transition: 0.3s linear;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: ${t=>t.theme.colors.mainTextColor};
    height: 1px;
    width: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s linear;
  }

  &:hover {
    color: ${t=>t.theme.colors.mainTextColor};
  }

  &:hover:after {
    width: 50%;
  }

  &:hover:before {
    width: 50%;
  }
`;export{k as B,b as C,B as H,f as I,x as M,j as N,$ as T,M as a,v as b,C as c,T as d,w as e,L as f,H as g,h,y as i,z as j};
