import styled from "styled-components"

export const StiloContato =  styled.ul `

border: 1px solid black;
border-radius: 5px;
padding: 20px 30px;
width: 16rem;
background-color: white;
color: black;
box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

div{
    display: flex;
    flex-direction: column;
    align-items: left;}

li{
    list-style-type: none;
    padding: 5px 0px;  
}

.nome{
    font-weight: 700;
    font-size: 24px;
    line-height: 29.05px;
}

.telefone{
    font-weight: 1000;
    font-size: 16px;
    display: flex;
    gap: 10px;
}

.wpp{
    display: flex;
    gap: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
}

label{
    font-weight: bold;
}

.obs{
    border: 1px solid black;
    border-radius: 10px;
    background-color: #68AAB166;
    margin: 10px 10px ;
    padding: 10px;
    width: auto;
    margin-left: auto;
}

.editar{

    background-color: #43858C;
    color: white;
}

.deletar{
    border: 1px solid red;
    color: red;
    
}

.buttons{

    display: flex;
    justify-content: space-between;
}

`