import React from 'react';
import mail from '../../statics/mail.png';
import heatset from '../../statics/heatset.png';
import logoAlt from '../../statics/logo_alt.png';
import vtex from '../../statics/vtex.png';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="footer-addres">
                <p>Localizacao</p>
                <hr></hr>
                <p>Avenida Andromeda, 2000. Bloco 6 e 8.<br/> Alphavile SP <br/> brasil@corebiz.ag <br/> +55 11 3090 1039</p>
            </div>

            <div className="footer-btn-container">
                <button>
                    <img src={mail} alt="mail"></img> ENTRE EN CONTACTO
                </button>
                <button>
                    <img src={heatset} alt="heatset"></img> FALE CON O NOSSO CONSULTOR ONLINE
                </button>
            </div>

            <div className="copyright">
                <div>
                    <span>Created by</span>
                    <img src={logoAlt} alt="corebiz"></img>
                </div>
                <div>
                    <span>Powered by</span>
                    <img src={vtex} alt="vtex"></img>
                </div>
            </div>
        </footer>
    )
}

export default Footer;