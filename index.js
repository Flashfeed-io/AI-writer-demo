$(document).ready(function() {
  $("#cc_writer-demo-concept").click(function() {
    var target = $(this).siblings(".cc_writer-demo-rich-text").first();
    if (target.length) {
      target.empty();
      var text = 'Concept & Storyline:
The story centers around an everyman protagonist, struggling with the all-too-common scenario of stress and overload due to work. Our hero sits in his room, a typical home office environment, at a desk that reflects the chaotic state of his current work-life balance – paper stacks, sticky notes, discarded coffee cups, and a disarray of other items create a visual representation of his professional stress. The atmosphere is palpably tense, resonating with viewers who have been in similar situations. /n Suddenly, a pinging notification from his phone disrupts this scene. It's a message from JANDI, and this simple act marks a pivotal moment of change in his demeanor and environment. As he taps on the notification, the unexpected happens – a burst of confetti showers from the ceiling. But this isn't just any confetti; it magically rearranges the chaos on his desk into a perfectly organized workspace. This whimsical transformation serves as a metaphor, effectively showcasing how the JANDI platform streamlines communication, declutters tasks, and boosts productivity, all with a fun and jovial spirit. /n Takeaway: /n JANDI is more than a CRM tool; it's a lifesaver in a chaotic work world. With its myriad of features and capabilities, JANDI empowers individuals and teams to simplify their communications and workflows, ultimately paving the way for smarter, stress-free work life. /n Visuals: /n The visuals will be a blend of the ordinary and extraordinary, moving from mundane reality to a delightful magical-realism. Initially, we'll capture the chaos in the room with gritty realism. Post the confetti transformation, the visuals will take a bright, crisp turn with vibrant and contrasting colours that pop on screen. Neat graphic overlays will depict the JANDI platform's features, providing visual links to the story unfolding. /n Key Shots: /n Tight close-up of our protagonist's stressed face, the room's clutter reflecting in his eyes. /n A detailed shot of the cluttered desk, showcasing the chaos. /n Dramatic shot of the phone lighting up with the JANDI notification. /n An overhead shot of confetti bursting and cascading down onto the desk. /n The final wide-angle shot showing the transformed, organized workspace. /n Key Settings/Scenes: /n A chaotic home office scene, reflecting the stress of the individual. /n The arrival of the JANDI notification, marking a turn of events. /n The magical confetti shower and transformation scene. /n The final reveal of a neat, organized, JANDI-powered workspace. /n Music and Sound: /n We'll start with a somber, tension-filled music to depict stress. As the JANDI notification arrives, the music will begin to transition towards a hopeful tone. Post confetti transformation, we'll switch to an uplifting, optimistic tune that builds momentum. Sound effects will punctuate key moments: the ping of the notification, the rustle of confetti, the subtle clicks and dings as the platform's features are highlighted. /n Locations Needed: /n We require just one interior location: an individual's home office that initially looks cluttered but can be transformed into a streamlined, efficient workspace. /n Cost Breakdown: /n Our budget needs to account for the following: /n Talent (Actor): The protagonist is critical to our story. We'll need a professional actor who can convincingly portray stress and relief. Cost - $800. /n Set & Props: This includes a desk, chair, assorted papers, and clutter items for the initial chaos. Additionally, we'll need reusable confetti for the transformation scene. Cost - $300. /n Special Effects: The confetti transformation scene could be done with practical effects (dropping confetti from above and cleaning/rearranging the desk quickly off-camera) to save on costs. Cost - $200. /n Cinematography: Renting a professional camera, lights, and a stabilizer for smooth cinematic shots will be key here. Cost - $500. /n Location: Since we're using a home office setup, we could use someone's actual home for free or a low-cost co-working space. Cost - $100. /n Post-Production: This includes editing, color correction, and graphic overlays. Depending on the expertise required, we could hire a freelance editor to keep costs low. Cost - $1,000. /n Sound Design: We'll need to purchase the rights to use a suitable uplifting soundtrack and minimal sound effects. This can be sourced cost-effectively from music libraries. Cost - $200. /n Makeup & Wardrobe: Basic makeup to ensure our actor looks the part and a wardrobe that fits the character. Cost - $150. /n Catering: Providing food and drinks for the cast and crew during the shoot. Cost - $150. /n Miscellaneous: Additional costs that may arise (transportation, unforeseen expenditures). Cost - $200. /n Contingency: A reserve for any unexpected costs that might come up during production. It's typically around 10% of the total budget. Cost - $500.';
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
