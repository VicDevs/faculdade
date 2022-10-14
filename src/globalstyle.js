import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
    }
   
   body{
    height: 100vh;
    background: linear-gradient(to top, #ccc, white);
   }
`
export default globalStyle