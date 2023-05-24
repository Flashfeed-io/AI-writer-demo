$(document).ready(function() {
  $("#cc_writer-demo-concept").click(function() {
    var target = $(this).siblings(".cc_writer-demo-rich-text").first();
    if (target.length) {
      target.empty();
      var text = ".....";
      animateTyping(target, text);
      $(this).remove();
    }
  });
});

function animateTyping(element, text) {
  var formattedText = formatText(text);
  var lines = formattedText.split('\n');
  var lineIndex = 0;
  var charIndex = 0;
  var interval = setInterval(function() {
    if (lineIndex < lines.length) {
      var line = lines[lineIndex];
      if (charIndex < line.length) {
        var char = line.charAt(charIndex);
        if (char === '<') {
          var endIndex = line.indexOf('>', charIndex);
          var tag = line.substring(charIndex, endIndex + 1);
          applyStyle(element, tag);
          charIndex = endIndex + 1;
        } else {
          element.append(char);
          charIndex++;
        }
      } else {
        element.append('<br>');
        lineIndex++;
        charIndex = 0;
      }
    } else {
      clearInterval(interval);
    }
  }, 50); // Adjust typing speed by changing the interval (in milliseconds)
}

function formatText(text) {
  var formattedText = text;
  formattedText = formattedText.replace(/\[(.*?)\]/g, '<$1>'); // Convert [tag] to HTML tags
  return formattedText;
}

function applyStyle(element, tag) {
  var tagName = tag.substring(1, tag.length - 1);
  var closingTag = '</' + tagName + '>';
  var isClosingTag = (tagName.charAt(0) === '/');
  if (isClosingTag) {
    element.html(function(_, html) {
      return html.replace(closingTag, '');
    });
  } else {
    element.append(tag);
    if (!tag.endsWith('/>')) {
      var content = tag.substring(tag.indexOf('>') + 1);
      element.append(content);
    }
  }
}
