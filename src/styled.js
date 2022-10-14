import styled from "styled-components"


export const MenuInicial = styled.nav`
    background-color: black;
    position: fixed;
    width: 100%;
    top: 0;
    

    ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
    }

    li{
        display: flex;
        
        :first-child{
            font-weight: bold;
            color: #67a;
            font-size: 1.4em;
            align-self: center;
        }
        
        span{
            color:white;
            font-weight: bold;
        }
    }
    
    a{
        text-decoration: none;
        font-size: 1.2em;
        color: white;
        letter-spacing: 1px;
        padding: .7rem;

        ::after{
            content: '';
            width: 0;
            height: 2px;
            position: absolute;
            top: 2.2em;
            transform: translateX(-100%);
            transition: all .6s;
        }

        :hover{
            ::after{
            background-color: white;
            width: 3.5rem;
            }
        }

        :focus{
        color: gray;
        }

        
    }

    @media (max-width: 768px) {
        
        width: 10%;
        height: 100vh;
        transition: all .7s;
        position: fixed;
        top: 0;
        z-index: 1;
        ul{
            flex-direction: column;
            display: none;
            span{
            color: white;
        }
        li{
            transition: background-color .4s;
            width: 100%;
            :nth-child(1){
                color: #67a;
                padding-left: 30%;
                background-color: #fff4;
            }
            :hover{
                background-color: #fff4;
            }
        }
        }
        a{
            white-space: nowrap;
            width: 100%;
            margin: 0 auto;
            ::after{
                display: none;
            }
        }

        :hover{
            width: 40%;
            ul{
                display: flex;
                animation: acender .8s;
            }
            div{
                display: none;
            }
        }  
  }

  @keyframes acender {
    0%{
        opacity: 0;
    }

    25%{
        opacity: .3;
    }
    50%{
        opacity:.6;
    }
    100%{
        opacity: 1;
    }
  }

`

export const MenuCandidato = styled.nav`
  ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    background-color: #fa0;
  }


  a{
    text-decoration: none;
    color: #000;
    font-size: 1.1rem;
    font-weight: bold;

    ::after{
        content: '';
        position: absolute;
        width: 1.2rem;
        top: 2.5rem;
        transform: translateX(-3.2rem);
        height: 2px;
        transition: all .6s;
    }
    :hover{
        ::after{
            width: 3.2rem;
            background-color: #000;
        }
    }
  }

  @media (max-width:768px) {
    ul{
        flex-direction: column;
        width: 8%;
        height: 100vh;
    }
    a{
        ::after{
            display: none;
        }
    }
  }
  
`

export const MenuEmpresa = styled.nav`
    ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    background:linear-gradient(to right, #ccc, #a0f);
  }
  a{
    text-decoration: none;
    color: #000;
    font-size: 1.1rem;
    font-weight: bold;
  }
`

export const Form = styled.form`

width: 70%;
margin: 5vh auto;
border: 1px solid #67a;
border-radius: 10px;
display: flex;
background-color: black;
animation: slide2 1.5s;

legend{
    color: white;
    margin: 0 auto;
    padding-top: 1em;
    font-weight: bold;
    font-size: 1.5em;
    letter-spacing: 1px;
}

fieldset{
    padding: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    
    label{
        align-self: flex-start;
        margin-left: 10vh;
        color: white;
        font-size: 1.2rem;
        padding: 6px;
    }
    input{
        border: 3px solid #67a;
        border-radius: 2em;
        display: block;
        width: 80%;
        color: white;
        padding: 3px;
        transition: transform .5s, box-shadow .5s;
        background-color: black;

        :focus{
            outline: 0;
            transform: scale(1.1);
            border-color : white;
            caret-color: white;
            background-color: #ffffff0f;
        }
    }

    input[type='submit']{
        
        padding: 8px;
        transition: all .5s;
        font-size: 1em;
        border: none;
        color: white;
        font-weight: bold;
        width: 50%;
        border: 2px solid #0f6;
        
        :hover{
            
            font-weight: bold;
            transform: scale(1.1);
            border-color: white;
            cursor: pointer;
            background-color: #ffffff0f;
        }
    }
    
    input[type='checkbox']{

        margin-bottom:.7rem;
        display: flex;
        
    }
        
    textarea{
        resize: none;
        margin: 1.2rem;
        border-radius: 1rem;
        padding: 10px;
        width: 80%;
        background-color: black;
        color: white;
        border: 2px solid yellow;
        outline: 0;
        font-size: 1.1em;
        
    }

    a{
        display: block;
        text-align: center;
        text-decoration: none;
        padding: .7rem;
        color: white;
        letter-spacing: 1px;
        font-weight: bold;
        font-size: 1.1em;
        
        :hover{
            color: #67a;
        }     
    }

    p{
        color: white;
        margin: .7em;

        ::after{
            content: '';
            background-color: white;
            width: 20vh;
            height: 2px;
            position: absolute;
            transform: translate(6px ,.7em);
        }
        ::before{
            content: '';
            background-color: white;
            width: 20vh;
            height: 2px;
            position: absolute;
            transform: translate(-21vh, .7em);
        }
    }

    @media (max-width:768px){

       fieldset{
        width: 100%;
        align-items: center;
       }

       label{
        margin: 0;
        align-self: center;
       }
       
        a{
            
            ::after{
                display: none;
            }
        }
    }
   @keyframes slide2 {
    0%{
        transform: translateX(60%);
        opacity: 0;
    }
    60%{
        opacity: .5;
    }
   }
   
`

export const ParagrafoInicial = styled.p`
    display: none;
    @media (max-width:768px) {
        display: block;
        animation: slide 3s;
        width: 60%;
        font-size: 1.7em;
        margin: 30px auto;

        span{
            color:  #67a;
            border-bottom: 1px solid black;
        }
    }

    @keyframes slide {
        0%{
            opacity: 0;
            transform: translateX(-60%);
        }
        40%{
            opacity: .5;
        }
        
    }
    
`

export const DivTextoLogin = styled.div`
    width: 40%;
    background-color: black;
    border: 3px solid yellow;
    border-bottom: none;
    margin: 1em 1em 0 0;
    border-radius: 2em 2em 0 0;
    
    h2{
        margin-top: 1em;
        padding: .7rem;
        font-size: 2rem;
        color: white;
        text-align: center;
    }
    @media (max-width:768px) {
        display: none;
    }
`



export const TituloLogin = styled.h1`
    margin-top: 15vh;
    color: black;
    animation: slide 2s;
    text-align: center;
    font-size: 2em;
   

    @media (max-width: 768px){
        display: none;
    }
`

export const BotaoGoogle = styled.button`
    color: white;
    border: 2px solid #f00;
    background-color: black;
    padding: .7em;
    width: 50%;
    letter-spacing: 1px;
    border-radius: 2em;
    font-weight: bold;
    transition: transform .5s, box-shadow .5s;
    overflow: hidden;

    :hover{
        border-color: white;
        cursor: pointer;
        transform: scale(1.1);
        background-color: #ffffff0f;
    }

    
`

export const MenuHamburguer = styled.div`
    width: 20px;
    display: none;
    background-color: white;
    height: 3px;
    margin: 2px auto;
    border-radius: 3em;
    transform: translateY(1.4em);

    @media (max-width:768px) {
        display: flex;
    }
`

export const TituloHome = styled.h1`
    margin: 15vh 0 0 10vh;
    color: black;
    padding: 1.2em;
    font-size: 2em;
    animation: slide 2s;
    background: linear-gradient(to right, #3f6, white);
    animation: open 2.5s;
    border-radius:2em 2em 0 2em;
    white-space: nowrap;

    @media (max-width: 768px) {
        margin: 0;
        white-space: normal;
        margin-left: 10vh;
    }

    @keyframes open {
        0%{
            opacity: 0;
            transform: translateX(100vh);
        }
    }
    
`

export const SubtituloHome = styled.h2`
    background: linear-gradient(to left, yellow 60%, white);
    margin: 2em 2em 0 0;
    padding: 2em;
    border-radius: 3em 3em 3em 0;
    animation: slide 2.5s;
    text-align: end;
    white-space: nowrap;

    @keyframes slide {
        0%{
            opacity: 0;
            transform: translateX(-100vh);
        }
    }

    @media (max-width:768px) {
        white-space: normal;
        margin-left: 10vh;
    }
`

export const SubtituloHome2 = styled.h2`
    background: linear-gradient(to right, #32f 50%, white);
    margin:2em 0 0 2em;
    border-radius: 3em 3em 0 3em;
    padding: 2em;
    animation: open 2.5s;

    @media (max-width:768px){
        margin-left: 10vh;
    }
`

export const TituloSuporte = styled.h1`
    text-align: center;
    margin-top: 15vh;
    animation: pop infinite;
`

export const SpanLogin1 = styled.span`
    color: #67a;
    display: block;
    font-size: 2.4rem;
    margin:.7rem 0;
    animation: pop 4s reverse infinite;
    

    @keyframes pop {
        25%{
            transform: translateX(-10px);
            
        }
        40%{
            color: black;
            transform: translateX(10px);

        }
        
    }
`

export const SpanLogin2 = styled.span`
    color: #0f6;
    display: block;
    font-size: 2.4rem;
    margin:.7rem 0;
    animation: pop 4s linear infinite;
`


export const CardVaga = styled.div`

`