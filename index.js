
/**
 * Expose 'theme'
 */

module.exports = Theme;


/**
 * Theme constructor.
 * @param {String} path
 * @api public
 */

function Theme(path){
  this.path = path || '';
  this.link = document.createElement('link');
  this.link.setAttribute('rel', 'stylesheet');
  document.head.appendChild(this.link);
}


/**
 * Import style link.
 * @param  {[type]} value 
 * @api public
 */

Theme.prototype.change = function(value) {
  this.link.setAttribute('href', this.path  + value + '.css');
};