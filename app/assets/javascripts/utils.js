function isSupported() {
  if (window.Turbolinks) {
    return window.Turbolinks.supported;
  } else {
    return false;
  }
}

function matches(element, selector) {
  var elements = (element.document || element.ownerDocument).querySelectorAll(selector);

  var index = 0;
  while (elements[index] && elements[index] !== element) {
    ++index;
  }

  return Boolean(elements[index]);
}

function closest(element, selector) {
  while (element && element.nodeType === 1) {
    if (matches(element, selector)) {
      return element;
    }
    element = element.parentNode;
  }
  return null;
}
