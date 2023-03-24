import React from "react";

class StepTwo extends React.Component {
    render() {
        return (
                <div className="multisteps-form__panel" data-animation="slideHorz">
                    {/* div 2 */}
                    <div className="wizard-forms">
                        <div className="inner pb-100 clearfix">
                            <div className="form-content pera-content">
                                <div className="step-inner-content">
                                    <span className="step-no bottom-line">PASO 2</span>
                                    <div className="step-progress float-right">
                                        <span>2 de 5 completado</span>
                                        <div className="step-progress-bar">
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2>PILARES</h2> 
                                    &nbsp;
                                    <div role="alert" className="fade alert alert-dark show"><button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">A</button> PILAR 1. TERRITORIO</div>
                                    <div className="gender-selection">
                                        <h6>A1.¿Conoce los limites Territoriales delConsejo Comunitario?:</h6>

                                        <li><input type="radio" name="a1" value="1" /> Sí</li>
                                        <li><input type="radio" name="a1" value="2" /> No</li>

                                        <h6>A2.¿Su comunidad cuenta con espacios de interacción social?:</h6>

                                        <li><input type="radio" name="a2" value="1" /> Sí</li>
                                        <li><input type="radio" name="a2" value="2" /> No</li>

                                        <h6>A3.¿Estos espacios son suficientes?:</h6>

                                        <li><input type="radio" name="a3" value="1" /> Sí</li>
                                        <li><input type="radio" name="a3" value="2" /> No</li>

                                        <h6>A4.¿Estos espacios son adecuados?:</h6>

                                        <li><input type="radio" name="a4" value="1" /> Sí</li>
                                        <li><input type="radio" name="a4" value="2" /> No</li>

                                        <h6>A5.¿Que Actores y agentes externos reconoce en el territorio?:</h6>

                                        <li>Actores Comunitarios&nbsp;
                                            <input type="radio" name="a5_1" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_1" value="2" />No
                                        </li>
                                        <li>Actores Institucionales &nbsp;
                                            <input type="radio" name="a5_2" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_2" value="2" />No
                                        </li>
                                        <li>Actores Armados &nbsp;
                                            <input type="radio" name="a5_3" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_3" value="2" />No
                                        </li>
                                        <li>Empresas &nbsp;
                                            <input type="radio" name="a5_4" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_4" value="2" />No
                                        </li>
                                        <li>ONG &nbsp;
                                            <input type="radio" name="a5_5" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_5" value="2" />No
                                        </li>
                                        <li>Otras Comunidades &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div role="alert" className="fade alert alert-dark show"><button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">B</button> PILAR 2. IDENTIDAD CULTURAL</div>
                                        <h6>B1.¿Conoce algún suceso historico relevante?:</h6>
                                            <li><input type="radio" name="a1" value="1" /> Sí</li>
                                            <li><input type="radio" name="a1" value="2" /> No</li>
                                        <h6>B2.¿Conoce como fue el proceso de poblamiento de su comunidad?:</h6>
                                            <li><input type="radio" name="a1" value="1" /> Sí</li>
                                            <li><input type="radio" name="a1" value="2" /> No</li>
                                        <h6>B3.¿En su comunidad hay costumbres ancestrales?:</h6>
                                            <li><input type="radio" name="a1" value="1" /> Sí</li>
                                            <li><input type="radio" name="a1" value="2" /> No</li>
                                        <h6>B4.¿Estos espacios son adecuados?:</h6>
                                            <li><input type="radio" name="a1" value="1" /> Sí</li>
                                            <li><input type="radio" name="a1" value="2" /> No</li>
                                        <h6>B5.¿Celebran momentos de alegría, tristeza o perdida en comunidad?:</h6>
                                            <li><input type="radio" name="a1" value="1" /> Sí</li>
                                            <li><input type="radio" name="a1" value="2" /> No</li>
                                        <h6>B6.¿Que Actores y agentes externos reconoce en el territorio?:</h6>
                                        <li>Actores Comunitarios &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Minga &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Mamuncia &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Cambio de Mano &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>
                                            <h8> Préstamo de semilla y tierra</h8>
                                            &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <h6>B7.¿Estaría de acuerdo en incluir una materia de etnoeducación en las clases de sus hijos?:</h6>
                                        <li><input type="radio" name="a1" value="1" /> Sí</li>
                                        <li><input type="radio" name="a1" value="2" /> No</li>
                                        &nbsp;
                                        <div role="alert" className="fade alert alert-dark show"><button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">C</button> PILAR 3. DESARROLLO SUSTENTABLE</div>
                                        <h6>C1.¿Que Actores y agentes externos reconoce en el territorio?:</h6>
                                        <li>Pesca Artesanal &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Cacería Tradicional &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Agricolas &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Patios &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Minería &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Aprovechamiento Forestal &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Ecoturismo &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                        <li>Emprendimiento, comercio y SI NO servicios &nbsp;
                                            <input type="radio" name="a5_6" value="1" />Sí &nbsp;
                                            <input type="radio" name="a5_6" value="2" />No
                                        </li>
                                    </div>
                                </div>
                             </div>
                         </div>
                            {/*<!-- /.inner -->*/}
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

export default StepTwo;