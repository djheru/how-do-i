import {flow, partialRight} from 'lodash';

/**
 * Get the first element matching the selector
 */
export function first(selector) {
  let list = document.querySelectorAll(selector);
  return list.length > 0 ? list[0] : undefined;
}

/**
 * Create an element appender function
 *
 * @param {HTMLElement} parent
 * @param {HTMLElement} child
 * @return {Function}
 */
export function appender(parent, child) {
  return function() {
    parent.appendChild(child);
  }
}

/**
 * Apply attributes to an element
 *
 * @param {HTMLElement} element
 * @param {Object} attrs
 * @return {HTMLElement}
 */
export function attrs(element, attrs) {
  if (attrs) {
    for (let k of Object.keys(attrs)) {
      element[k] = attrs[k];
    }
  }
  return element;
}

/**
 * Add a text node to the element
 *
 * @param {HTMLElement} element
 * @param {String} text
 * @return {HTMLElement}
 */
export function text(element, text) {
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  return element;
}

/**
 * Create an HTMLElement
 *
 * @param {String}
 * @return {HTMLElement}
 */
export function elem(tag) {
  return document.createElement(tag);
}

/**
 * Create an html element
 *
 * @param {String} tag
 * @param {Object} attributes
 * @param {String} txt
 * @return {HTMLElement}
 */
export function createElement(tag, attributes, txt) {
  let setAttrs = partialRight(attrs, attributes);
  let setText = partialRight(text, txt);
  return flow(elem, setAttrs, setText)(tag);
}
