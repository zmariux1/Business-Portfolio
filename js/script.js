// ===================== toggle icon navbar ===================== 
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

// ===================== scroll section active link ===================== 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    };
  });
  // ===================== Sticky nav bar ===================== 
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100)

  // ===================== REMOVE taggle Icon & NavBar when clicked NavBar link ===================== 
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active")
};


// ===================== Scroll Reveal ===================== 


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".heading", { origin: "top" });
ScrollReveal().reveal(".home_msg_top h3", { origin: "bottom" });
ScrollReveal().reveal("", { origin: "left" });
ScrollReveal().reveal(".about_white h3, .contact_desinqDeformed_details", { origin: "right" });



ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 500
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal(".home_msg_top h1", { origin: "bottom" });
ScrollReveal().reveal("", { origin: "left" });
ScrollReveal().reveal("", { origin: "right" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 3000,
  delay: 1300
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal(".extraH1, .home_selling_div", { origin: "bottom" });
ScrollReveal().reveal(".submitBtn", { origin: "left" });
ScrollReveal().reveal(".pozitioning_imgText h3", { origin: "right" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 5000,
  delay: 300
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal(".home_selling_div", { origin: "bottom" });
ScrollReveal().reveal("", { origin: "left" });
ScrollReveal().reveal("", { origin: "right" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 2000
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal(".home_msg_bot h1, .about_gray_bot", { origin: "bottom" });
ScrollReveal().reveal("", { origin: "left" });
ScrollReveal().reveal("", { origin: "right" });



ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 3500
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal(".home_selling_div", { origin: "bottom" });
ScrollReveal().reveal("", { origin: "left" });
ScrollReveal().reveal("", { origin: "right" });


// portfolio delay presentation  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 600
});
ScrollReveal().reveal(".project_trigger1", { origin: "bottom" });
ScrollReveal().reveal(".contact_names", { origin: "left" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 800
});
ScrollReveal().reveal(".project_trigger2", { origin: "bottom" });
ScrollReveal().reveal(".contact_email_div", { origin: "left" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 900
});
ScrollReveal().reveal(".project_trigger3", { origin: "bottom" });
ScrollReveal().reveal(".contact_phone_div", { origin: "left" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 1000
});
ScrollReveal().reveal(".project_trigger4", { origin: "bottom" });
ScrollReveal().reveal(".contact_message_div", { origin: "left" });



// ===================== typed js ===================== 
// const strings = ["Web Developer ", "Frontend Dev ", "Backend Dev "];
// const outputElement = document.getElementById('output');
// let currentIndex = 0;

// function displayWordByLetter() {
//   const word = strings[currentIndex];
//   let i = 0;
//   let intervalId = setInterval(() => {
//     const currentLetters = word.slice(0, i + 1);
//     outputElement.textContent = currentLetters;
//     i++;

//     if (i >= word.length) {
//       clearInterval(intervalId);
//       setTimeout(() => {
//         removeWordByLetter(word);
//       }, 250); // Delay of 1 second before removing the word
//     }
//   }, 250); // Delay of 1 second between letters
// }

// function removeWordByLetter(word) {
//   let i = word.length;
//   let intervalId = setInterval(() => {
//     const currentLetters = word.slice(0, i);
//     outputElement.textContent = currentLetters;
//     i--;

//     if (i < 0) {
//       clearInterval(intervalId);
//       currentIndex++;

//       if (currentIndex >= strings.length) {
//         currentIndex = 0; // Restart from the beginning if all words are displayed
//       }

//       setTimeout(() => {
//         displayWordByLetter();
//       }, 100); // Delay of 1 second before displaying the next word
//     }
//   }, 100); // Delay of 1 second between letters
// }

// displayWordByLetter();





// xxxxxxxxxxxxxxxxxxxx toggle details in protfolio xxxxxxxxxxxxxxxxxxxx 
document.addEventListener('DOMContentLoaded', function() {
  const details = document.querySelector('.anItem');
  const hiddenPresentation = details.querySelector('.hiddenPresentation');
  
  hiddenPresentation.addEventListener('click', function(event) {
    // Stop the event from bubbling up to avoid unintended behavior
    event.stopPropagation();
    
    // Toggle the open state of the <details> element
    details.open = !details.open;
  });
});


// xxxxxxxxxxxxxxxxxxxx open only one protfolio item opened xxxxxxxxxxxxxxxxxxxx 
document.querySelectorAll('.anItem').forEach(detail => {
  detail.addEventListener('click', function() {
    document.querySelectorAll('.anItem').forEach(d => {
      if (d !== detail) {
        d.removeAttribute('open');
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
  var trigger1 = document.querySelector('.project_trigger1');
  var target1 = document.querySelector('.side_project1');
  var trigger2 = document.querySelector('.project_trigger2');
  var target2 = document.querySelector('.side_project2');
  var trigger3 = document.querySelector('.project_trigger3');
  var target3 = document.querySelector('.side_project3');
  var trigger4 = document.querySelector('.project_trigger4');
  var target4 = document.querySelector('.side_project4');

  var targets = [target1, target2, target3, target4];

  trigger1.addEventListener('click', function() {
    targets.forEach(function(target) {
      // Check if the target doesn't have 'hide' class, add it
      if (!target.classList.contains('transition_effect_hide')) {
        target.classList.add('transition_effect_hide');
      }
    });
    target1.classList.toggle('transition_effect_hide');
  });
  trigger2.addEventListener('click', function() {
    targets.forEach(function(target) {
      // Check if the target doesn't have 'hide' class, add it
      if (!target.classList.contains('transition_effect_hide')) {
        target.classList.add('transition_effect_hide');
      }
    });
    target2.classList.toggle('transition_effect_hide');
  });
  trigger3.addEventListener('click', function() {
    targets.forEach(function(target) {
      // Check if the target doesn't have 'hide' class, add it
      if (!target.classList.contains('transition_effect_hide')) {
        target.classList.add('transition_effect_hide');
      }
    });
    target3.classList.toggle('transition_effect_hide');
  });
  trigger4.addEventListener('click', function() {
    targets.forEach(function(target) {
      // Check if the target doesn't have 'hide' class, add it
      if (!target.classList.contains('transition_effect_hide')) {
        target.classList.add('transition_effect_hide');
      }
    });
    target4.classList.toggle('transition_effect_hide');
  });
});

