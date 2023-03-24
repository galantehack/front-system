import React from "react";

class StepFive extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">PASO 5</span>
                                <div className="step-progress float-right">
                                    <span>5 de 5 completado</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>FINALIZAR ENCUESTA</h2>
                                <div className="step-content-field">
                                    
                                       
										
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="actions">
                                <ul>
                                    <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> REGRESAR</span></li>
                                    <li><button type="submit" title="NEXT">GUADAR <i className="fa fa-arrow-right"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default StepFive;