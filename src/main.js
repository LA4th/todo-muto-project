import './style.css'
import { eventListener } from './eventListener.js';
import { transitionSwitchView } from './transitionSwitchView.js';

document.addEventListener('DOMContentLoaded', () => {
  eventListener();
  transitionSwitchView();
});