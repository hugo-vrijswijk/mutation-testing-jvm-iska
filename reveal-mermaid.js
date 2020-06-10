mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
  },
});

Reveal.addEventListener('ready', function () {
  (async () => {
    document
      .querySelectorAll('.language-mermaid')
      .forEach(function (item, index) {
        mermaidDiv = document.createElement('div');
        mermaidDiv.innerHTML = item.innerHTML;
        mermaidDiv.classList.add('mermaid');
        item.parentNode.replaceWith(mermaidDiv);
      });

    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
  })();
});
