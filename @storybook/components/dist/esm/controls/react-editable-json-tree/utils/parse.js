/**
 * Parse.
 * @param string {String} string to parse
 * @returns {*}
 */
function parse(string) {
  var result = string; // Check if string contains 'function' and start with it to eval it

  if (result.indexOf('function') === 0) {
    return eval("(".concat(result, ")")); // eslint-disable-line no-eval
  }

  try {
    result = JSON.parse(string);
  } catch (e) {// Error
  }

  return result;
}

export default parse;