import React from "react";

class StepOne extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel js-active" data-animation="slideHorz" >
                {/* div 1 */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                 <div className="col-md-4">
                 <label className=" text-center relative-position">
                    <img src={"/assets/v1/img/logo_fundei.png"} alt="" />
                    </label>
                </div>
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no">PASO 1</span>
                                <h2>CUESTIONARIO</h2>
                                <p>
                                CARACTERIZACIÓN POBLACIÓN AFRO DEL MUNICIPIO DE CHIGORODÓ 2023.
                                </p>
                                <div className="step-box">
                                    <div className="row">
                                    <h3>Nucleo Familiar</h3>
                                    </div>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div role="alert" className="fade alert alert-dark show"><h5>&nbsp;IDENTIFICACIÓN DE LA FICHA</h5></div> 
                                <div className="col-md-4">
                                    <div className="wizard-form-input position-relative form-group has-float-label">
                                        <input type="text" className="form-control" name="name" placeholder="Direccion" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="wizard-form-input position-relative form-group has-float-label">
                                        <input type="text" className="form-control" name="name" placeholder="Barrio" />
                                    </div>
                                </div>
                                <h6>LEA LAS PREGUNTAS Y LAS POSIBLES RESPUESTAS TAL Y COMO ESTÁN EN EL CUESTIONARIO. MARQUE SÓLO UNA OPCIÓN DE RESPUESTA.</h6>
                                &nbsp;
                                    <li><input type="radio" name="lea" value="1" /> SI</li>
                                    <li><input type="radio" name="lea" value="2" /> NO</li>
                                 &nbsp;
                            </div>
                        </div>
                    </div>
                    
                    {/* /.inner */}
                    <div className="actions">
                        <ul>
                            <li className="disable" aria-disabled="true">
                                <span className="js-btn-next" title="NEXT">
                                    Anterior <i className="fa fa-arrow-right" />
                                </span>
                            </li>
                            <li>
                                <span className="js-btn-next" title="NEXT">
                                    Siguiente <i className="fa fa-arrow-right" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >

        );
    }
}

export default StepOne;