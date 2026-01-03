  //menu 
  let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
  
  // Skin tone data
  const skinToneInfo = {
    fair: {
      title: "Fair Skin",
      text: `
        <p>Fair skin tone refers to a light complexion characterized by lower melanin levels, making it more sensitive and prone to conditions like sunburn.</p>
      
      <p><strong>Characteristics of Fair Skin:</strong></p>
  
      <p><strong>Melanin Levels:</strong>Fair skin has less melanin, making it lighter. This leads to increased sensitivity to UV radiation and a higher risk of sunburn and skin damage.</p>
      <p><strong>Skin Sensitivity:</strong>People with fair skin often experience redness and irritation more easily. They must choose skincare products carefully to avoid reactions.</p>
      <span class="hover-link">
    <div class="hover-card">
        <a href="https://skincaregeeks.com/fair-skin-tone/" target="_blank">Learn More &rarr;</a>
      </div>
    </span>`
    
    },
    light: {
      title: "Light Skin",
      text: `<p>Light skin tone refers to a complexion that is characterized by low levels of melanin, resulting in a pale appearance that can range from ivory to light beige.
  </p>

      <p><strong>Characteristics of Light Skin Tone</strong></p>

      <p><strong>Melanin Levels:</strong> Light skin is primarily determined by the amount of melanin present in the skin. Melanin is the pigment responsible for skin color, and lower levels result in lighter skin tones.</p> 
      <p><strong>Fitzpatrick Scale:</strong> Light skin is often categorized as Type I or Type II on the Fitzpatrick scale, which classifies skin types based on their reaction to sun exposure. Type I skin always burns and never tans, while Type II burns easily and tans minimally.</p>
      <span class="hover-link">
        <div class="hover-card">
        <a href="https://en.wikipedia.org/wiki/Light_skin" target="_blank">Learn More &rarr;</a>
        </div>
      </span>`
    },
    medium: {
      title: "Medium Skin",
      text: `<p>Medium skin tone refers to a skin color that is neither too light nor too dark, often characterized by a range of shades from light tan to olive.</p>

      <p><strong>Characteristics of Medium Skin Tone</strong></p>

      <p><strong>Color Range:</strong> Medium skin tones can vary from light tan to olive and caramel shades. They are often described as "tanned" or "golden" and can include undertones that are warm, cool, or neutral.</p> 
      <p><strong>Undertones:</strong> Medium skin tones typically have one of four undertones:</p>
       <p><strong> Warm:</strong> Yellow or golden hues.</p>
        <p><strong>Cool:</strong> Pink or rosy hues.</p>
       <p><strong> Neutral:</strong> A balance between warm and cool tones.</p>
        <p><strong>Olive:</strong> A mix of green and gray hues.</p>
        <span class="hover-link">
          <div class="hover-card">
            <a href="https://www.beautyanswered.com/what-is-medium-skin.htm" target="_blank">Learn More &rarr;</a>
          </div>
        </span>`
    },
    tan: {
      title: "Tan Skin",
      text: `<p>Tan skin tone refers to a range of light to dark brown skin shades that result from sun exposure or natural pigmentation, characterized by warm undertones.</p>

      <p><strong>Characteristics of Tan Skin Tone</strong></p>

      <p><strong>Color Range:</strong> tan skin can vary from light brown to deep mocha,often described as having a sun-kissed appearance. It typically includes shades that are warm golden brown to darker hues.
      <p><strong>Undertones:</strong> Tan skin tones may have yellow, brown, or olive undertones, which can affect how colors appear on the skin and influence makeup choices.</p>
      <span class="hover-link">
        <div class="hover-card">
          <a href="https://duskyskin.com/what-is-tan-skin-tone/" target="_blank">Learn More &rarr;</a>
        </div>
        </span>`
    },
    deep: {
      title: "Deep Skin",
      text: `<p>Deep skin tone is characterized by a rich, dark color that can range from dark brown to ebony, often with a natural radiance and minimal sunburn risk.</p>

      <p><strong>Characteristics of Deep Skin Tone</strong></p>

      <p><strong>Color Range:</strong> Deep skin toens encompass a variety of shades, from dark brown to ebony.This skin tone typically has a high level of melanin content provides more protection against UV rays.</p>
      <span class="hover-link">
          <div class="hover-card">
            <a href="https://claudianour.com/blogs/modest-makeup/deep-skin-tones" target="_blank">Learn More &rarr;</a>
          </div>
        </span>`

    },
    dark: {
      title: "Dark Skin",
      text: `<p>Dark skin tone refers to skin that is rich in melanin, providing natural protection against UV radiation and contributing to a range of cultural and aesthetic identities.</p>

      <p><strong>Characteristics of Dark Skin Tone</strong></p>

      <p><strong>Malanin Content:</strong> Dark skin is characterized by a high concentration of malanin, partiaculary eumelanin,which gives the skin its daker hue.This pigmentation provides better protection against the harmful effects of ultraviolet(UV) radiation,helping to preserve folate levels and reduce the risk of DNA damage.</p>
      <span class="hover-link">
          <div class="hover-card">
            <a href="https://en.wikipedia.org/wiki/Dark_skin" target="_blank">Learn More &rarr;</a>
          </div>
        </span>`
    }
  };

  const seasonalInfo = {
    // WINTER GROUP
    "clear-winter": {
        title: "Clear Winter",
        text: `
            <p><strong>Definition:</strong> High contrast with bright, sparkling eyes and cool undertones.</p>
            <p><strong>Pros:</strong> You shine in vivid, saturated colors like Cobalt Blue and True Red. Neon tones look elegant on you.</p>
            <p><strong>Cons:</strong> Pale, earthy, or "muddy" colors like beige or mustard will make you look tired and washed out.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://radiantlydressed.com/clear-winter/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>`
    },
    "cool-winter": {
        title: "Cool Winter",
        text: `
            <p><strong>Definition:</strong> Dominant cool undertones with no warmth. Your skin has a silvery or blueish glow.</p>
            <p><strong>Pros:</strong> Silver jewelry and icy shades (Emerald, Charcoal, Fuchsia) emphasize your natural clarity.</p>
            <p><strong>Cons:</strong> Warm colors like gold, orange, and peach create a sallow or "yellowed" effect on your skin.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://radiantlydressed.com/cool-winter/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },
    "deep-winter": {
        title: "Deep Winter",
        text: `
            <p><strong>Definition:</strong> Dark hair and eyes with cool/neutral skin. You have high depth and intensity.</p>
            <p><strong>Pros:</strong> You look powerful in dark, intense shades like Black, Burgundy, and Deep Navy.</p>
            <p><strong>Cons:</strong> Light pastels and warm earth tones (tan, terracotta) lack the strength to match your features.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://radiantlydressed.com/deep-winter-color-palette/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },

    // SUMMER GROUP
    "light-summer": {
        title: "Light Summer",
        text: `
            <p><strong>Definition:</strong> Very low contrast with cool undertones and light hair/eyes.</p>
            <p><strong>Pros:</strong> Delicate, airy colors like Powder Blue, Mint Green, and Lavender make you look ethereal.</p>
            <p><strong>Cons:</strong> Harsh, dark colors (Black, Dark Brown) overpower your soft features and look heavy.</p>
            span class="hover-link">
                <div class="hover-card">
                    <a href="https://feelgoodcolors.com/seasonal-color-analysis/light-summer/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },
    "cool-summer": {
        title: "Cool Summer",
        text: `
            <p><strong>Definition:</strong> Medium contrast with purely cool, pinkish undertones.</p>
            <p><strong>Pros:</strong> You look best in "muffled" cool colors like Slate Blue, Orchid, and Rose Pink.</p>
            <p><strong>Cons:</strong> Any warm or golden shade (Gold, Orange) clashes with your cool skin and looks artificial.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://radiantlydressed.com/cool-summer-color-palette/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },
    "soft-summer": {
        title: "Soft Summer",
        text: `
            <p><strong>Definition:</strong> Muted, soft features with a blend of cool and neutral undertones.</p>
            <p><strong>Pros:</strong> Greys, Mauve, and Dusty Rose create a smooth, sophisticated look for your skin.</p>
            <p><strong>Cons:</strong> High-saturation colors (Neon, Bright Red) are too distracting and draw attention away from your face.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://stylewithdc.com/blogs/color-guides/soft-summer-a-comprehensive-guide" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },

    // AUTUMN GROUP
    "warm-autumn": {
        title: "Warm Autumn",
        text: `
            <p><strong>Definition:</strong> Golden, glowing skin with warm hair and eyes. Pure warmth is your main feature.</p>
            <p><strong>Pros:</strong> Rich, spicy colors like Pumpkin, Mustard, and Olive Green make your skin radiate.</p>
            <p><strong>Cons:</strong> Cool, icy colors (Silver, Icy Blue) look "separate" from your skin and can make you look pale.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://radiantlydressed.com/warm-autumn-color-palette/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },
    "deep-autumn": {
        title: "Deep Autumn",
        text: `
            <p><strong>Definition:</strong> Dark, rich features with warm/neutral undertones. High intensity and depth.</p>
            <p><strong>Pros:</strong> Deep forest greens, Chocolate browns, and Terracotta bring out your natural richness.</p>
            <p><strong>Cons:</strong> Light pastels and neons look too weak or "neon" against your deep complexion.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://radiantlydressed.com/deep-autumn-color-palette/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },
    "soft-autumn": {
        title: "Soft Autumn",
        text: `
            <p><strong>Definition:</strong> Low contrast with a gentle, muted, and slightly warm appearance.</p>
            <p><strong>Pros:</strong> Earthy, "cloudy" colors like Khaki, Sage, and Salmon Pink look harmoniously beautiful.</p>
            <p><strong>Cons:</strong> Very dark or very bright colors (Black, Magenta) are too aggressive for your soft look.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://theconceptwardrobe.com/colour-analysis-comprehensive-guides/soft-autumn-a-comprehensive-guide" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },

    // SPRING GROUP
    "clear-spring": {
        title: "Clear Spring",
        text: `
            <p><strong>Definition:</strong> Bright, high-contrast features with warm, luminous undertones.</p>
            <p><strong>Pros:</strong> You can carry vibrant, "juicy" colors like Bright Coral, Turquoise, and Apple Green perfectly.</p>
            <p><strong>Cons:</strong> Muted or greyish colors (Grey-Blue, Olive) make your vibrant skin look dull and lifeless.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://radiantlydressed.com/clear-spring/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },
    "warm-spring": {
        title: "Warm Spring",
        text: `
            <p><strong>Definition:</strong> Fresh, warm, and radiant. Your skin often has peach or golden highlights.</p>
            <p><strong>Pros:</strong> Warm gold, Peach, and Daffodil Yellow make your eyes sparkle and your skin glow.</p>
            <p><strong>Cons:</strong> Heavy dark colors or pure cool tones (Royal Blue, Black) make you look washed out.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://dream-wardrobe.com/warm-true-spring-color-palette-and-wardrobe-guide/" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    },
    "light-spring": {
        title: "Light Spring",
        text: `
            <p><strong>Definition:</strong> Fair, translucent skin with light, warm hair and eyes.</p>
            <p><strong>Pros:</strong> Warm pastels like Apricot, Champagne, and Sky Blue highlight your delicate warmth.</p>
            <p><strong>Cons:</strong> Very dark or muddy colors (Burgundy, Navy) look too heavy and shadow your face.</p>
            <span class="hover-link">
                <div class="hover-card">
                    <a href="https://theconceptwardrobe.com/colour-analysis-comprehensive-guides/light-spring-a-comprehensive-guide" target="_blank">Learn More &rarr;</a>
                </div>
            </span>
        `
    }
};

  // Add event listeners to each button
  document.querySelectorAll('.model-card p').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const tone = ['fair', 'light', 'medium', 'tan', 'deep', 'dark'][index];
      document.getElementById('popupTitle').innerText = skinToneInfo[tone].title;
      document.getElementById('popupText').innerHTML = skinToneInfo[tone].text;
      document.getElementById('popup').style.display = 'flex';
    });
  });

  // for Seasonal cards Event Listener
document.querySelectorAll('.seasonal-card').forEach((card) => {
    card.addEventListener('click', () => {
        const seasonKey = card.getAttribute('data-season');
        const info = seasonalInfo[seasonKey];
        
        if (info) {
            document.getElementById('popupTitle').innerText = info.title;
            document.getElementById('popupText').innerHTML = info.text;
            document.getElementById('popup').style.display = 'flex';
        }
    });
});

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  window.addEventListener('scroll', () => {
    const about = document.querySelector('.about-section');
    const top = about.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 100) {
      about.style.opacity = 1;
    }
  });


 /* ---------- Light / Dark mode ---------- */
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;

    // When the switch changes
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        body.classList.add("darkmode");
      } else {
        body.classList.remove("darkmode");
      }
    });

/* ---------- Scroll Animation ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((element, index) => {
        // Add a special staggered delay just for the model cards
        if (element.classList.contains('model-card')) {
            element.style.transitionDelay = `${index * 100}ms`;
        }
        observer.observe(element);
    });
});
