module.exports = {
  config: {
    previewTitle: {
      title: "Preview Title Font Family",
      type: "string",
      default: '"Source Sans Pro", "Source Han Sans", "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
    },
    previewBody: {
      title: "Preview Body Font Family",
      type: "string",
      default: '"Source Serif Pro", "Source Han Serif", "Helvetica Neue", Georgia, serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    previewCode: {
      title: "Preview Code Font Family",
      type: "string",
      default: '"Source Code Pro", "Source Han Mono", SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace',
    },
    previewMaxWidth: {
      title: "Preview Max Width (use your own unit)",
      type: "string",
      default: "50em",
    },
    editorMaxWidth: {
      title: "Editor Max Width (use your own unit)",
      type: "string",
      default: "50em",
    },
  },

  activate() {
    document.body.classList.add('style-override');
    inkdrop.config.observe("style-override.previewTitle", function(newValue) {
      document.documentElement.style.setProperty("--inkdrop-style-override-preview-title", newValue);
    });
    inkdrop.config.observe("style-override.previewBody", function(newValue) {
      document.documentElement.style.setProperty("--inkdrop-style-override-preview-body", newValue);
    });
    inkdrop.config.observe("style-override.previewCode", function(newValue) {
      document.documentElement.style.setProperty("--inkdrop-style-override-preview-code", newValue);
    });
    inkdrop.config.observe("style-override.previewMaxWidth", function(newValue) {
      document.documentElement.style.setProperty("--inkdrop-style-override-preview-max-width", newValue);
    });
    inkdrop.config.observe("style-override.editorMaxWidth", function(newValue) {
      document.documentElement.style.setProperty("--inkdrop-style-override-editor-max-width", newValue);
    });
  },

  deactivate() {
    document.body.classList.remove('style-override');
  }

};
