import React from "react";

class StepThree extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">PASO 3</span>
                                <div className="step-progress float-right">
                                    <span>3 de 5 completado</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>VIVIENDA</h2>
                                &nbsp;
                                <div role="alert" className="fade alert alert-dark show"><button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">D</button> PILAR 4. BUEN VIVIR</div>
                                <div className="gender-selection">
                                    <h6>D1. La vivienda ocupada por este hogar es:</h6>
                                    <li>Propia Individual &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Propia Familiar&nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Arriendo &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Otros&nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    &nbsp;
                                    <h6>D2. El lote donde está ubicada la vivienda:</h6>
                                    <li>¿Esta debidamente legalizado? &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>¿La vivienda tiene estratificación? &nbsp;
                                        <input type="radio" name="a5_2" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_2" value="2" />No
                                    </li>
                                    <li>¿A que estrato pertenece la vivienda? &nbsp;
                                        <input type="text" id="dbox2" name="name" required minLength="4" maxLength="12" size="10"></input>
                                    </li>
                                    &nbsp;
                                    <h6>D3. Considera que desde su vivienda se puede acceder facilmente a:</h6>
                                    <li>Medios de Transporte (Bus, Taxi, etc.) &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Centros Sociales, Culturales y/o recreacionales&nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Parques, áreas deportivas y/o zonas verdes &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Iglesias, templos, espacios para cultos religiosos&nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    &nbsp;
                                    <h6>D4.¿Cuanto tiempo promedio se gasta y cuál es la forma más frecuente en que se hace el desplazamiento desde su vivienda a la escuela o centro de estudio?</h6>
                                    <li>A pie &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Bicicleta &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Motocicleta &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Carro Particular &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Transporte Público &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Tiempo promedio &nbsp;
                                        <input type="text" id="dbox2" name="name" required minLength="4" maxLength="12" size="10"></input>
                                    </li>
                                    <li>Las condiciones de la institución educativa son adecuadas &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    &nbsp;
                                    <h6>D5.¿Cuanto tiempo promedio se gasta y cuál es la forma más frecuente en que se hace el desplazamiento desde su vivienda a su sitio de trabajo?:</h6>
                                    <li>A pie &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Bicicleta &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Motocicleta &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Carro Particular &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Transporte Público &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Tiempo promedio &nbsp;
                                        <input type="text" id="dbox2" name="name" required minLength="4" maxLength="12" size="10"></input>
                                    </li>
                                    &nbsp;
                                    <h6>D6.¿Cuanto tiempo promedio se gasta y cuál es la forma más frecuente en que se hace el desplazamiento desde su vivienda a la escuela o centro de estudio?</h6>
                                    <li>A pie &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Bicicleta &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Motocicleta &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Carro Particular &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Transporte Público &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    <li>Tiempo promedio &nbsp;
                                        <input type="text" id="dbox2" name="name" required minLength="4" maxLength="12" size="10"></input>
                                    </li>
                                    <li>Las condiciones de la institución de salud son adecuadas &nbsp;
                                        <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_1" value="2" />No
                                    </li>
                                    &nbsp;
                                    <h6>D7.Cuales de los siguientes servicios domiciliarios tiene su vivienda:</h6>
                                    <li>Energía Electrica &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Gas Natura &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Acueducto &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Alcantarillado &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Aseo &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Teléfonia Fija &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Internet &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
                                    </li>
                                    <li>Esta conforme con los servicios &nbsp;
                                        <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                        <input type="radio" name="a5_6" value="2" />No
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

export default StepThree;