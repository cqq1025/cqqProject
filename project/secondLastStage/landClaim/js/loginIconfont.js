;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M760.384 441.376l0-103.616c0 0-0.032-241.728-241.728-241.728-241.696 0-241.728 241.728-241.728 241.728l0 103.616L173.312 441.376l0 483.488L864 924.864 864 441.376 760.384 441.376zM553.184 708.064l0 113.184-69.056 0 0-113.184c-20.544-11.968-34.528-34.016-34.528-59.488 0-38.176 30.944-69.088 69.056-69.088 38.112 0 69.056 30.912 69.056 69.088C587.744 674.048 573.76 696.096 553.184 708.064M691.328 441.344 345.984 441.344l0-103.136c0.384-28.928 10.56-173.12 172.672-173.12s172.288 144.192 172.672 172.672L691.328 441.344z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yonghuming" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M653.376 667.904c0.192-0.832 0.32-1.6 0.32-2.496L653.696 589.376c0-1.344-0.32-2.816-0.832-4.096 81.216-54.784 135.616-155.584 135.616-270.656C788.48 140.864 664.704 0 512 0 359.296 0 235.52 140.864 235.52 314.56c0 115.136 54.4 215.808 135.552 270.656C370.624 586.56 370.368 588.032 370.368 589.376l0 76.032c0 0.896 0.064 1.664 0.256 2.496C167.872 717.504 20.032 868.48 20.032 1024l983.872 0C1003.968 868.48 856.128 717.504 653.376 667.904L653.376 667.904z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
