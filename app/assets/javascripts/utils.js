function isSupported() {
  if (window.Turbolinks) {
    return window.Turbolinks.supported;
  } else {
    return false;
  }
}
