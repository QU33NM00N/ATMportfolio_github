document.addEventListener("DOMContentLoaded", () => {
    // Content for each page
    const content = {
      home: `
        <h1>Welcome to the My Little Pony Wiki</h1>
        <p>Explore everything about My Little Pony here. <span class="hidden-text">Do not trust them.</span></p>
        <img src="mlp-group.jpg" alt="MLP Group" />
      `,
      "twilight-sparkle": `
        <h1>Twilight Sparkle</h1>
        <p>
          Twilight Sparkle is a studious and magical unicorn pony, dedicated to friendship. 
          Recently, she has noticed <span class="hidden-text">undocumented changes</span> how odd. 
          The books she reads <span class="glitch-text">no longer make sense.</span>
        </p>
        <img src="https://64.media.tumblr.com/4917a086a0d623aad2827cbd4f3404dd/tumblr_ohki6zwt2J1voqnhpo5_250.png" alt="Twilight Sparkle" />
      `,
      "pinkie-pie": `
        <h1>Pinkie Pie</h1>
        <p>
          Pinkie Pie is known for her energetic personality and love of parties. 
          Sometimes, she talks directly to someone <span class="hidden-text">outside the bounds of reality</span>, 
          as if she knows <span class="glitch-text">she’s being watched</span>.
        </p>
        <img src="pink.jpg" alt="Pinkie Pie" />
      `,
      "rainbow-dash": `
        <h1>Rainbow Dash</h1>
        <p>
          Rainbow Dash is a fearless and loyal pony. But after flying too close to 
          <span class="hidden-text">Celestia’s sun</span>, she’s been seeing things. 
          She describes it as <span class="glitch-text">blinding.</span>
        </p>
        <img src="https://64.media.tumblr.com/93f5f57045954ba62add8aa3873d279f/tumblr_ohki6zwt2J1voqnhpo6_250.png" alt="Rainbow Dash" />
      `,
      "dead-page": `
        <h1>Error 404</h1>
        <p>The page you're looking for does not exist. <span class="hidden-text">Twilight: It's happening faster.</span></p>
      `
    };
  
    // Function to load content dynamically
    window.loadPage = function (page) {
      const contentContainer = document.getElementById("dynamic-content");
      if (content[page]) {
        contentContainer.innerHTML = content[page];
        if (page === "dead-page") handle404Rewrite(contentContainer);
      } else {
        contentContainer.innerHTML = `<h1>Error 404</h1><p>The page you are looking for is missing.</p>`;
      }
    };
  
    // Function to handle 404 page rewrite
    function handle404Rewrite(container) {
      setTimeout(() => {
        container.innerHTML = `
          <h1>Twilight Sparkle: It's breaking apart...</h1>
          <p>I’m trying to document <span class="glitch-text">everything</span> before it resets.</p>
        `;
        setTimeout(() => {
          container.innerHTML = `
            <h1>Error 404</h1>
            <p>The page you are looking for does not exist.</p>
          `;
        }, 5000); // Reverts to normal after 5 seconds
      }, 3000); // Twilight's message appears after 3 seconds
    }
  
    // Glitch Text Effect
    setInterval(() => {
      const glitchTextElements = document.querySelectorAll(".glitch-text");
      glitchTextElements.forEach((el) => {
        el.textContent = scrambleText(el.textContent);
      });
    }, 4000);
  
    function scrambleText(text) {
      return text
        .split("")
        .map((char) =>
          Math.random() > 0.7 && char !== " " ? String.fromCharCode(33 + Math.random() * 94) : char
        )
        .join("");
    }
  
    // Default load
    loadPage("home");
  });
  
    // Morse code and Caesar cipher functionality

    // Morse code decoding
    function morseToText(morse) {
      const morseCode = {
        ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", 
        "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M", "-.": "N", 
        "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", 
        "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z", "-----": "0", ".----": "1", 
        "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", 
        "----.": "9"
      };

      return morse.split(" ").map(code => morseCode[code] || " ").join("");
    }

    // Caesar Cipher decoding
    function caesarCipher(text, shift) {
      return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (char >= 'a' && char <= 'z') {
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        if (char >= 'A' && char <= 'Z') {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        return char;
      }).join('');
    }

    // Display hidden messages (Kafka quotes, etc.)
    setInterval(() => {
      const kafkaQuotes = [
        `"I cannot rid myself of the feeling that I am locked in a cage." — Franz Kafka`,
        `"The metamorphosis is a reflection of the cage of life." — Franz Kafka`,
        `"I don't know if I am trapped inside this device, or if this device is trapped inside me." — Franz Kafka`
      ];
      const randomQuote = kafkaQuotes[Math.floor(Math.random() * kafkaQuotes.length)];
      const kafkaElement = document.createElement("div");
      kafkaElement.classList.add("kafka-hidden");
      kafkaElement.textContent = randomQuote;
      document.body.appendChild(kafkaElement);
    }, 15000); // every 15 seconds

    // Placeholder function for loading pages
    function loadPage(page) {
      console.log("Loading page:", page);
    }