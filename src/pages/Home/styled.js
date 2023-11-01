import styled from "styled-components"


export const StiloHome =  styled.div `
 

display: flex;
flex-direction: column;
height: 700px;
width: 400px;
justify-content: center;
background-color: #68AAB1;
color: white;
overflow: hidden;




.formulario{

    border: 1px solid black; 
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: left;
    padding: 20px;
    width: 100%;
    height: 100%;
    

}

h1{
    text-align: center;
}



input{
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
}

button{
    
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 15px
    
}

textarea{
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    border-radius: 10px;
}

.salvar{
    background-color: #43858C;
    color: white;
    
}

.limpar{
    background-color: white;
    margin-left: 235px;
    
}

.lista{  
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
}

.div1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

#zap{
    margin: 8px 0 50px 5px;
   
}

.hferro{
    height: 150px;
}



`