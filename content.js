console.log("Code Block Copy Button extension loaded");

function addCopyButton(codeBlock) {
  console.log("Adding copy button to:", codeBlock);

  if (codeBlock.querySelector('.code-block-bottom-bar')) {
    console.log("Bottom bar already exists, skipping");
    return;
  }

  const bottomBar = document.createElement('div');
  bottomBar.className = 'code-block-bottom-bar';

  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy';
  copyButton.className = 'code-block-copy-button';

  copyButton.addEventListener('click', () => {
    const codeElement = codeBlock.querySelector('code') || codeBlock.querySelector('pre');
    const codeText = codeElement ? codeElement.textContent : '';
    navigator.clipboard.writeText(codeText).then(() => {
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);
    });
  });

  bottomBar.appendChild(copyButton);
  codeBlock.appendChild(bottomBar);
  console.log("Copy button added successfully");
}

function addCopyButtonsToCodeBlocks() {
  const codeBlocks = document.querySelectorAll('.ant-highlighter');
  console.log("Found code blocks:", codeBlocks.length);
  codeBlocks.forEach(addCopyButton);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Run the function when the page loads and periodically
window.addEventListener('load', () => {
  console.log("Page loaded, adding copy buttons");
  addCopyButtonsToCodeBlocks();
  
  // Periodically check for new code blocks
  setInterval(addCopyButtonsToCodeBlocks, 2000);
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
  console.log("Window resized, re-adding copy buttons");
  addCopyButtonsToCodeBlocks();
}, 250));

// Use a MutationObserver to handle dynamically added code blocks
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.classList.contains('ant-highlighter')) {
            addCopyButton(node);
          } else {
            const codeBlocks = node.querySelectorAll('.ant-highlighter');
            codeBlocks.forEach(addCopyButton);
          }
        }
      });
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
