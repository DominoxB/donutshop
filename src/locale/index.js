import { createI18n } from "vue-i18n";
import en from "./en";
import pl from "./pl";
import ru from "./ru";

const messages = {
  en,
  pl,
  ru,
};

const i18n = createI18n({
  locale: "pl", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages

  // something vue-i18n options here ...
});

export default i18n;
