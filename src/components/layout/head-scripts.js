import React from 'react';
import Helmet from 'react-helmet';

const HeadScripts = () => (
    <Helmet>
        <script defer src="https://scripts.saltbox.tech/dist/v1/js/attribution.js" type="text/javascript" onload="writeAttrToForms()"></script>
        <script defer src="https://scripts.saltbox.tech/dist/v1/js/session-history.js" type="text/javascript" onload="writeSessionHistoryToForms()"></script>
    </Helmet>
);

export default HeadScripts;