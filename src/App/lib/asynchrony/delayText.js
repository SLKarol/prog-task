function delayText(delay, text) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
  promise.then(result => {
    return result;
  });
  return promise;
}
export default delayText;
