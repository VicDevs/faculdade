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
        padding: .8rem;
        :first-child{
            font-weight: bold;
            color: #67a;
            font-size: 1.4em;
            margin-right: 2em;
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
        
        width: 8%;
        height: 100vh;
        transition: all .7s;
        position: fixed;
        top: 0;
        z-index: 1;
        ul{
            flex-direction: column;
            display: none;
            align-items: center;
            span{
            color: white;
        }
        li{
            transition: background-color .4s;
            width: 100%;
            :nth-child(1){
                color: #67a;
                margin: 0;
                background-color: #0013;
            }
            :hover{
                background-color: #0013;
            }
        }
        }
        a{
            white-space: nowrap;
            ::after{
                display: none;
            }
        }

        :hover{
            width: 35%;
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
    background:linear-gradient(to right, #ccc, #fa0);
  }

  a{
    text-decoration: none;
    color: #000;
    font-size: 1.1rem;
    font-weight: bold;
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
box-shadow: 20px 6px 30px gray;
border: 2px solid white;
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
        align-items: center;
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
        border: 2px solid #062;
        :hover{
            
            font-weight: bold;
            transform: scale(1.1);
            border-color: white;
            cursor: pointer;
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
       margin: 10vh auto;

       fieldset{
        width: 100%;
        align-items: center;
       }
       
       }
        a{
            
            ::after{
                display: none;
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
    background-color: white;

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

    :hover{
        border-color: white;
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 2px 2px 20px black;
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
    margin: 15vh 0 0 15vh;
    color: blue;
    font-size: 2em;
    animation: slide 2s;

    ::after{
        content: '';
        width: 46vh;
        height: 10px;
        border-radius: 1em;
        background-color: gray;
        position: absolute;
        transform: translate(-44vh, 3rem);
    }

    @media (max-width: 768px) {
        margin: 0;
        padding: 10px;
        text-align: center;
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

export const TituloSuporte = styled.h1`
    text-align: center;
    margin-top: 15vh;
`

