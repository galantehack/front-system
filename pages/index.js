import { FormSignIn } from '../components/form_sign_in';
import { Footer } from '../components/layout/footer';
import { Header } from '../components/layout/header';

export default function SignIn() {

  return (
    <div className='sign_in_view'>
      <section className="form cid-rR7qEDwb4F" id="header3-1">
        <div className="mbr-overlay"></div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-7 m-auto">
              <div className="title">
                <h2
                  className="mbr-section-title mbr-regular align-left mbr-fonts-style mbr-white display-2"
                >
                  Fundacion Deporte y Desarrollo Integral
                </h2>
                <p
                  className="mbr-section-subtitle align-left mbr-fonts-style mbr-white block-left display-7"
                >
                  Construcción del plan de Etnodesarrollo y Fortalecimiento para
                  la Población afro del municipio de Chigorodó – Antioquia.
                </p>
              </div>
            </div>
            <FormSignIn />
            <div className="popup-footer popup-footer-one">
              <div className="footer-social float-left">
                <a href="/"><img src={"assets/v1/img/fundacion.png"} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

// styles for the sign_in_view
