'use strict';

const btns = document.querySelectorAll('.flex-options>button');
const flexItemsContainer = document.querySelector(
  '.flex-items-container'
);
const removeSiblingsActiveAttr = (firstSibling) => {
  let elem = firstSibling;
  do {
    if (elem.nodeType === 3) continue;
    elem.removeAttribute('active');
  } while ((elem = elem.nextSibling));
};

const clickEventHandler = ({
  target: {
    parentNode: { firstChild: firstSibling },
  },
  target,
  target: {
    dataset: { optionValue },
  },
}) => {
  removeSiblingsActiveAttr(firstSibling);
  target.setAttribute('active', '');
  flexItemsContainer.style.flexDirection = optionValue;
};

for (const btn of btns) {
  btn.addEventListener('click', clickEventHandler);
}
btns[0].dispatchEvent(new Event('click'));
