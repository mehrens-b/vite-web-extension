import { createRoot } from 'react-dom/client';
import './style.css' 
const div = document.createElement('div');
div.id = 'advisees_root';
document.body.appendChild(div);

const rootContainer = document.querySelector('#advisees_root');
if (!rootContainer) throw new Error("Can't find Content root element");
const root = createRoot(rootContainer);
root.render(
  <div>
    <span>Content Loaded</span>
  </div>
);

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}

