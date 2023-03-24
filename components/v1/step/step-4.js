import React from "react";

class StepFour extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">PASO 4</span>
                                <div className="step-progress float-right">
                                    <span>4 de 5 completado</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width:'70%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>SANAMIENTO</h2>
                                &nbsp;
                                <div role="alert" className="fade alert alert-dark show"><button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">E</button> SANEAMIENTO BÁSICO</div>
                                <div className="gender-selection">
                                    <h6>E1. ¿De donde toman principalmente el agua para consumir en la vivienda?</h6>
                                    <li>Acueducto público &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Acueducto comunal o vereda &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Pozo con bomba o aljibe &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Laguna o jagüey &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Rio, quebrada o manantial &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Aguas Lluvias &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Carro tanque &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Agua Embotellada &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    &nbsp;

                                    <h6>E2. ¿La obtención del agua se realiza bajo que regularidad?:</h6>
                                    <li>Acueducto público &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>Horarios Establecido &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>De manera irregular &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    &nbsp;

                                    <h6>E3. ¿En que almacenan el agua para consumo humano?:</h6>
                                    <li>Recipiente o tanque con tapa &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>Recipiente o tranque sin tapa &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>No almacena &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    &nbsp;

                                    <h6>E4. ¿En donde esta ubicado el tanque o recipiente?:</h6>
                                    <li>Interior de la vivienda &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>Exterior de la vivienda bajo techo &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>Exterior de la vivienda sin techo &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    &nbsp;

                                    <h6>E5. ¿Qué hacen con el agua antes de tomarla?:</h6>
                                    <li>La consumen sin tratamiento &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>La hierven previamente &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>La filtran &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>Tratamiento con cloro &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>

                                    &nbsp;
                                    <h6>E6. El servicio sanitario es:</h6>
                                    <li>De uso exclusivo de la familia &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>Compartido con personas de otras familias &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>


                                    &nbsp;
                                    <h6>E7. ¿Cuál es la disposición final de las basuras en el hogar?:</h6>
                                    <li>La recoge el servicio de aseo municipa &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>Quema a campo abierto &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>La botan a campo abierto &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>La entierran &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <li>La tiran a fuentes de agua &nbsp;
                                        <input type="checkbox" name="a5_6" value="1" />
                                    </li>
                                    <h6>E8. ¿Realizan el proceso de separación de los residuos?:</h6>
                                    <li><input type="radio" name="a1" value="1" /> Sí</li>
                                    <li><input type="radio" name="a1" value="2" /> No</li>
                                    &nbsp;

                                    <h6>E9. Respecto al servicio de energía</h6>
                                    <li>Posee el servicio &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Considera bueno el servicio &nbsp;
                                        <input type="radio" name="a5_2" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_2" value="2" />No
                                    </li>
                                    <li>Valor promedio de pago &nbsp;
                                        <input type="text" id="dbox2" name="name" required minLength="4" maxLength="12" size="10"></input>
                                    </li>
                                    &nbsp;

                                    <h6>E10.  Respecto al servicio de Internet:</h6>
                                    <li>Posee el servicio &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Considera bueno el servicio &nbsp;
                                        <input type="radio" name="a5_2" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_2" value="2" />No
                                    </li>
                                    <li>Valor promedio de pago &nbsp;
                                        <input type="text" id="dbox2" name="name" required minLength="4" maxLength="12" size="10"></input>
                                    </li>
                                    &nbsp;
                                    <h6>E11.  Indique si la vivienda esta:</h6>
                                    <li>Construida en barro &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Construida en Paja &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Construida en Material &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Construida en Madera &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Ubicada en zona de alto riesgo &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                </div>
                             </div>
                         </div>
                     </div>
                    <div className="actions">
                        <ul>
                            <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> ANTERIOR </span></li>
                            <li><span className="js-btn-next" title="NEXT">SIGUIENTE <i className="fa fa-arrow-right"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepFour;