(function() {
  function getTocLevel() {
    let defaultTocLevelSet = ['H1', 'H2', 'H3', 'H4', 'H5'];
    let tocLevel = document.getElementById('toc-level');
    if (tocLevel === null) {
      return defaultTocLevelSet;
    }
    let values = tocLevel.getAttribute('data-values');
    if (values === null || values === '') {
      return defaultTocLevelSet;
    }
    return values.split(',');
  }

  function createToc() {
    let targetHeaderSet = new Set(getTocLevel());
    let main = document.getElementsByTagName('main')[0];
    let placeholder = document.getElementById('toc-placeholder');
    let children = main.children;
    let headers = [];
    for (const h of children) {
      let tagName = h.tagName;
      if (!targetHeaderSet.has(tagName)) {
        continue;
      }
      headers.push(h);
    }
    for (const h of headers) {
      let name = document.createElement('a');
      let text = h.textContent;
      name.setAttribute('name', text);
      main.insertBefore(name, h);

      let anchor = document.createElement('a');
      anchor.setAttribute('href', '#' + text);
      anchor.innerHTML = h.textContent;
      let item = document.createElement('li');
      item.setAttribute('class', 'toc-' + h.tagName);
      item.appendChild(anchor);
      placeholder.appendChild(item);
    }
  }

  window.addEventListener('DOMContentLoaded', (ev) => {
    createToc();
  });
})();
