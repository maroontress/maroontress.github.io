(function() {
  function createNextButton() {
    var placeholder = document.getElementById('toc-placeholder');
    if (placeholder === null) {
      return;
    }
    var parent = placeholder.parentElement;
    if (parent.lastChild === placeholder) {
      return;
    }
    var children = parent.children;
    if (children.item(1) === placeholder) {
      return;
    }
    var next = placeholder.nextElementSibling;
    var anchor = next.firstElementChild;
    var href = anchor.getAttribute('href');
    var html = anchor.innerHTML;
    var div = document.createElement('div');
    div.setAttribute('id', 'next-button');
    div.innerHTML = html;
    div.insertBefore(document.createTextNode("Next ▶ "), div.firstChild);
    var a = document.createElement("a");
    a.setAttribute("href", href);
    a.appendChild(div);
    var main = document.getElementsByTagName("main")[0];
    main.appendChild(a);
  }

  window.addEventListener('DOMContentLoaded', (ev) => {
    createNextButton();
  });
})();
