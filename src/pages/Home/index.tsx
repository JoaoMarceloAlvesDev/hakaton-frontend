import "./index.css";
import ArrowIcon from "../../assets/icons/arrow.svg";
import { useState } from "react";

export default function Home() {
    const [typeLogin, setTypeLogin] = useState("secretaria")

    function veryfi() {
        if (typeLogin == "secretaria") {
            return (
                <>
                    <div className="text-bold">Quem está entrando</div>

                    <div className="input">
                        <input type="text" className="taxt-notbold" placeholder="Escolher" />

                        <img className="arrow" src={ArrowIcon} alt="Seta" />
                    </div>

                    <div className="text-bold">Quem está entrando</div>

                    <div className="input">
                        <input type="text" className="taxt-notbold" placeholder="Escolher" />

                        <img className="arrow" src={ArrowIcon} alt="Seta" />
                    </div>
                </>
            )
        }
    }
    return (
        <div className="container-grid">
            <div className="card">
                <div className="title-top">
                    <div className="text-bold">Seja bem-vindo à SACE</div>
                    <div className="text-notbold">
                        Preencha os dados abaixo para acessar.
                    </div>
                </div>

                <div className="title-mid">
                    <div className="text-bold">Quem está entrando</div>

                    <div className="input">
                        <input type="text" className="taxt-notbold" placeholder="Escolher" />

                        <img className="arrow" src={ArrowIcon} alt="Seta" />
                    </div>

                    {veryfi()}
                </div>



                <div className="section-down text-notbold">O SACE é o Sistema de Acompanhamento do Consumo Escolar da Secretaria Municipal de Educação de Caraguatatuba.</div>
            </div>

            <div className="card"></div>
            <div className="card"></div>
        </div>
    );
}