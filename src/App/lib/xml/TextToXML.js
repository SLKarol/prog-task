function TextToXML(sourceText) {
  let dom = null;
  if (window.DOMParser) {
    try {
      dom = new DOMParser().parseFromString(sourceText, "text/xml");
    } catch (e) {
      dom = null;
    }
  } // Internet Explorer
  else if (window.ActiveXObject) {
    try {
      dom = new window.ActiveXObject("Microsoft.XMLDOM");
      dom.async = false;
      if (!dom.loadXML(sourceText)) {
        console.error(dom.parseError.reason + dom.parseError.srcText);
        dom = null;
      }
    } catch (e) {
      dom = null;
    }
  } else {
    console.error("cannot parse xml string!");
  }
  return dom;
}
export default TextToXML;
