import '../public/assets/v1/css/animate.min.css';
import '../public/assets/v1/css/bootstrap-datepicker.css';
import '../public/assets/v1/css/bootstrap.min.css';
import '../public/assets/v1/css/fontawesome-all.css';

// v1
import '../public/assets/v1/scss/style.scss';
import '../public/assets/v1/css/footer.css';
import '../public/assets/v1/css/header.css';
import '../public/assets/v1/css/sign_in_view.css';
import '../public/assets/v1/vendor/font-awesome/css/font-awesome.css';
import '../public/assets/v1/vendor/web/assets/mobirise-icons2/mobirise2.css';
import '../public/assets/v1/vendor/web/assets/mobirise-icons/mobirise-icons.css';
import '../public/assets/v1/vendor/tether/tether.min.css';
import '../public/assets/v1/vendor/bootstrap/css/bootstrap.min.css';
import '../public/assets/v1/vendor/bootstrap/css/bootstrap-grid.min.css';
import '../public/assets/v1/vendor/bootstrap/css/bootstrap-reboot.min.css';
import '../public/assets/v1/vendor/formstyler/jquery.formstyler.theme.css';
import '../public/assets/v1/vendor/datepicker/jquery.datetimepicker.min.css';
import '../public/assets/v1/vendor/dropdown/css/style.css';
import '../public/assets/v1/vendor/socicon/css/styles.css';
import '../public/assets/v1/vendor/theme/css/style.css';
import '../public/assets/v1/vendor/recaptcha.css';
import '../public/assets/v1/vendor/mobirise/css/mbr-additional.css';

// rtl
// import '../public/assets/v1/rtl/scss/style.scss';

// v2
// import '../public/assets/v2/scss/style.scss';
// rtl
// import '../public/assets/v2/rtl/scss/style.scss';

// v3
// import '../public/assets/v3/scss/style.scss';
// rtl
// import '../public/assets/v3/rtl/scss/style.scss';

import { useEffect } from "react";

function NeonApp({ Component, pageProps }) {
    useEffect(() => {
        require("../public/assets/v1/js/jquery-3.3.1.min.js");
        require("../public/assets/v1/js/jquery.validate.min.js");
        require("../public/assets/v1/js/bootstrap-datepicker.min.js");

        // v1
        require("../public/assets/v1/js/main.js");

        // v2
        // require("../public/assets/v2/js/main.js");

        // v3
        // require("../public/assets/v3/js/main.js");
    }, []);

    return <Component {...pageProps} />
}

export default NeonApp