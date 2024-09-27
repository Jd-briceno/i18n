import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
import './styles.css';

const messages = {
  "es-ES": localeEsMessages,
  "en-US": localeEnMessages,
};

const Index = () => {
  const [locale, setLocale] = useState(navigator.language.startsWith("es") ? "es-ES" : "en-US");

  const pageClass = locale === "es-ES" ? "light-background" : "dark-background";

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className={pageClass}>
        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value="es-ES">Español</option>
          <option value="en-US">English</option>
        </select>
        <JobsList locale={locale} />
      </div>
    </IntlProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));