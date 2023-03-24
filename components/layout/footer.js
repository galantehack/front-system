export const Footer = () => {
  return (
    <section className="footer">
      <div className="foot-container">
        <div className="row">
          <div className="media-container-row mbr-white col-lg-12">
            <div className="row-copirayt col-sm-12 col-md-12 col-lg-6">
              <span className="align-left display-7 text-gray">
                2023 © <a href="/" className="link mbr-white">Menco Engineering</a> - Todos los derechos reservados
              </span>
            </div>
            <div className="row-links col-md-12 col-lg-6">
              <ul className="foot-menu">
                <li className="foot-menu-item mbr-fonts-style display-7">
                  <a className="text-white" href="/" target="_blank">Sobre nosotros</a>
                </li>
                <li className="foot-menu-item mbr-fonts-style display-7">
                  <a className="text-white" href="/" target="_blank">Política de privacidad
                  </a>
                </li>
                <li className="foot-menu-item mbr-fonts-style display-7">
                  <a className="text-white" href="/" target="_blank">Política de cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}