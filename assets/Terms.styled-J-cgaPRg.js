import{r as c,j as e,C as d,S as a,L as x,a as n,p as s,s as h,c as f,t as p,v as g}from"./index-fJRsFnJK.js";import{M as u,T as l,I as j,a as C,b as T,B as w,C as y,c as M,d as $,e as b,H as k,N as v,f as B,g as z}from"./Header.styled-8pydLepP.js";const L={instagram:"#e1306c",youtube:"#ff0000",facebook:"#3b5998",discord:"#7289d9"};function S({toggleTheme:o,isDarkTheme:r}){const[i,m]=c.useState(!1),t=()=>{m(!i)};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(l,{toggleTheme:o,isDarkTheme:r}),e.jsx(j,{onClick:t,children:e.jsx(C,{})})]}),e.jsx(T,{$isOpen:i,children:e.jsxs(w,{children:[e.jsx(y,{onClick:t}),e.jsx("nav",{children:e.jsx(M,{children:e.jsx("li",{onClick:t,children:e.jsx($,{href:"/",children:"Home"})})})}),e.jsx(d,{}),e.jsx(b,{children:e.jsx(a,{color:L,onClick:t})})]})})]})}function W({toggleTheme:o,isDarkTheme:r}){return e.jsxs(k,{children:[e.jsx(x,{}),e.jsx("div",{children:e.jsxs(v,{children:[e.jsx(B,{children:e.jsx("li",{children:e.jsx(z,{href:"/",children:"home"})})}),e.jsx(a,{}),e.jsx(l,{toggleTheme:o,isDarkTheme:r})]})}),e.jsx(S,{toggleTheme:o,isDarkTheme:r})]})}const N=n.main`
  margin: 0 auto;
  padding: 4.8rem 0;
  min-height: 100vh;
`,O=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.4rem;
  gap: 4.8rem;
  width: 100%;
  max-width: 90rem;
  background-color: ${o=>o.theme.colors.secondaryBgColor};
  border-radius: 1.2rem;

  @media (min-width: 1440px) {
    max-width: 90rem;
  }
`,E=n.h2`
  color: ${o=>o.theme.colors.mainTextColor};
  text-align: center;
  font-family: DM Sans;
  font-family: ${s};
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1.09;
  letter-spacing: -0.88px;

  @media (min-width: 375px) {
    font-size: 3.2rem;
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }

  @media (min-width: 1440px) {
    font-size: 4.4rem;
  }
`,R=n.h3`
  color: ${o=>o.theme.colors.mainTextColor};
  font-family: ${s};
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.09;

  @media (min-width: 1440px) {
    font-size: 2.4rem;
  }
`,q=n.p`
  border-bottom: 1px solid transparent;
  font-family: ${h};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  color: ${o=>o.theme.colors.mainTextColor};

  @media (min-width: 375px) {
    font-size: 1.6rem;
  }
`,D=n.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: ${o=>o.theme.colors.mainTextColor};

  position: absolute;
  top: -2.8rem;
  left: 1.2rem;
`,A=n.p`
  border-bottom: 1px solid transparent;
  font-family: ${f};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  color: ${o=>o.theme.colors.mainTextColor};
  transition: 0.3s ease-in-out;
`,I=n(p)`
  font-size: 2.4rem;
  color: ${o=>o.theme.colors.mainTextColor};
  transition: 0.3s ease-in-out;
`,G=n(g)`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    ${A} {
      border-bottom: 1px solid ${o=>o.theme.colors.mainTextColor};
    }
  }

  &:hover {
    ${I} {
      color: ${o=>o.theme.colors.accentColor};
    }
  }
`,J=n.strong`
  font-weight: 600;
  line-height: 1.2;
  font-family: ${s};
`,K=n.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,P=n.li`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,Q=n.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;export{I as A,D as L,N as M,W as S,E as T,G as a,A as b,q as c,J as d,K as e,P as f,R as g,O as h,Q as i};
