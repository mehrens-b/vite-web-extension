import { createRoot } from 'react-dom/client';
import './style.css' 
import Advisees from '@pages/content/Advisees';
const div = document.createElement('div');
div.id = 'advisees_root';
document.getElementById("inner-center")?.prepend(div);
//document.body.appendChild(div);

const rootContainer = document.querySelector('#advisees_root');
if (!rootContainer) throw new Error("Can't find Content root element");
const root = createRoot(rootContainer);
root.render(
  <div>
    <Advisees />
  </div>
);

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}

