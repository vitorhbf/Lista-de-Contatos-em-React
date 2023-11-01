import { StiloContato } from "./styled";
import tel from "../../assets/img/Group.png";
import wpp from "../../assets/img/logos_whatsapp-icon.png";



const Contato = ({ contato, excluirContato, editarContato }) => {
    const { nome, telefone, zap, obs } = contato;

    return (
        <StiloContato>
            <li className="nome" > {nome}</li>
            <li className="telefone">
                <img src={tel} alt="icone telefone" />
                {telefone}
            </li>
            <li className="wpp"> <img src={wpp} alt="icone wpp" /> É WhatsApp: {zap ? "Sim" : "Não"}</li>
            <label htmlFor="">Observações:</label>
            <li className="obs" > {obs}</li>
            <li className="buttons">
                <button className="editar" type="button" onClick={() => { editarContato(contato) }} >Editar</button>
                <button className="deletar" type="button" onClick={() => { excluirContato(telefone) }}>Deletar</button>
            </li>
        </StiloContato>
    );
};

export default Contato;
