import React from "react";
import { useState } from "react";
import Contato from '../../componentes/contato/index';
import { StiloHome } from "./styled";
import { GlobalStyle } from "../../global/globalStyled";

function Home() {
    const [listaDeContatos, setListaDeContatos] = useState([]);
    const [nome, setNome] = useState('vitor');
    const [telefone, setTelefone] = useState('213');
    const [zap, setZap] = useState(false);
    const [obs, setObs] = useState('32662');


    const adicionarContato = (e) => {
        e.preventDefault();
        setListaDeContatos([...listaDeContatos, { nome, telefone, zap, obs }]);
        removerDados();
    }

    const removerDados = () => {
        setNome('');
        setTelefone('');
        setZap(false);
        setObs('');

    }

    const excluirContato = (telefone) => {
        setListaDeContatos(listaDeContatos.filter((t) => t.telefone !== telefone));
    };

    const editarContato = (contato) => {

        setNome(contato.nome);
        setTelefone(contato.telefone);
        setZap(contato.zap);
        setObs(contato.obs);
        excluirContato(contato.telefone);

    };

    return (
        <StiloHome >
            <div className="formulario" >
                <h1>Adicionar Contato:</h1>
                <label htmlFor="nome">Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} id="nome" />
                <label htmlFor="telefone">Telefone:</label>
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} id="telefone" />
                <div>
                    <label htmlFor="zap">Tem WhatsApp:</label>
                    <input type="checkbox" checked={zap} onChange={(e) => setZap(e.target.checked)} id="zap" />
                </div>
                <label htmlFor="obs">Observações:</label>
                <textarea name="obs" value={obs} onChange={(e) => setObs(e.target.value)} id="obs" cols="30" rows="10"></textarea>
                <button onClick={adicionarContato} type="submit">Salvar</button>
                <button onClick={removerDados} type="reset">Limpar</button>
            </div>
            <h1>Lista de contatos:</h1>
            {listaDeContatos.map((contato, index) => (
                <Contato key={index} contato={contato} excluirContato={excluirContato} editarContato={editarContato} />
            ))}
        </StiloHome>
    );
}

export default Home;