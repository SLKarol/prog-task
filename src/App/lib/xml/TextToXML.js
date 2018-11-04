function TextToXML(sourceText) {
  let re;
  if (window.DOMParser) {
    const parser = new DOMParser();
    re = parser.parseFromString(sourceText, "text/xml");
  } // Internet Explorer
  else {
    re = new window.ActiveXObject("Microsoft.XMLDOM");
    re.async = false;
    re.loadXML(sourceText);
  }
  return re;
}
export default TextToXML;
