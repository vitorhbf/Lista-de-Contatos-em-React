import { StiloContato } from "./styled.js";

const Contato = ({ contato, excluirContato, editarContato }) => {
    const { nome, telefone, zap, obs } = contato;

    return (
        <StiloContato>
            <li>Nome: {nome}</li>
            <li>Telefone: {telefone}</li>
            <li>Tem WhatsApp: {zap ? "Sim" : "Não"}</li>
            <li>Observações: {obs}</li>
            <li>
                <button type="button" onClick={() => { editarContato(contato) }} >Editar</button>
                <button type="button" onClick={() => { excluirContato(telefone) }}>Deletar</button>
            </li>
        </StiloContato>
    );
};

export default Contato;
