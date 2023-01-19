import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');
    const element2 = document.createElement('div');

    element2.textContent = myName('Curtis');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return {element, element2};
  }
  
  document.body.appendChild(component().element);
  document.body.appendChild(component().element2)