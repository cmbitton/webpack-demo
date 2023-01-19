import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.jpg'
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');
  const element2 = document.createElement('div');

  element2.textContent = myName('Curtis');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return { element, element2 };
}

document.body.appendChild(component().element);
document.body.appendChild(component().element2)