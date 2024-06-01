import ReactDOM from "react-dom/client";
import Doi from "./doi";
import Copy from "./copy";
import "@/styles/App.css";
import Translate from "./translate";

// Configurar el documento HTML y el cuerpo
document.documentElement.classList.add("dark");
//document.body.classList.add("bg-neutral-900");

// Crear el elemento raíz para el componente Doi
const rootElement = document.createElement("div");
rootElement.id = "doi-root";
document.body.appendChild(rootElement);

// Crear el contenedor para el componente Copy
const copyElement = document.querySelector(
  '[data-testid="source-info-entry-doi"]>dt'
);

// Renderizar el componente Copy en el contenedor existente
if (copyElement) {
  copyElement.classList.add("w-full");
  const copyRoot = ReactDOM.createRoot(copyElement);
  copyRoot.render(<Copy />);
}

const langElement = document.createElement("div");
if (langElement) {
  const postLang = document.querySelector(
    '[data-testid="publication-information-bar"]'
  );
  postLang?.appendChild(langElement);
  const langRoot = ReactDOM.createRoot(langElement);
  langRoot.render(<Translate />);
}

// Renderizar el componente Doi en el elemento raíz creado
const doiRoot = ReactDOM.createRoot(rootElement);
doiRoot.render(<Doi />);
