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
      <p><span class="hover-link">
    <div class="hover-card">
        <a href="https://skincaregeeks.com/fair-skin-tone/" target="_blank">Fair skin tone refers to a light complexion characterized by lower melanin levels, making it more sensitive and prone to conditions like sunburn.</a>
      </div>
    </span>
      </p>
      
      <p><strong>Characteristics of Fair Skin:</strong></p>
  
      <p><strong>Melanin Levels:</strong>Fair skin has less melanin, making it lighter. This leads to increased sensitivity to UV radiation and a higher risk of sunburn and skin damage.</p>
      <p><strong>Skin Sensitivity:</strong>People with fair skin often experience redness and irritation more easily. They must choose skincare products carefully to avoid reactions.</p>`
    
    },
    light: {
      title: "Light Skin",
      text: `<p>
        <span class="hover-link">
    <div class="hover-card">
    <a href="https://en.wikipedia.org/wiki/Light_skin" target="_blank">Light skin tone refers to a complexion that is characterized by low levels of melanin, resulting in a pale appearance that can range from ivory to light beige.</a>
    </div>
  </span> 
  </p>

      <p><strong>Characteristics of Light Skin Tone</strong></p>

      <p><strong>Melanin Levels:</strong> Light skin is primarily determined by the amount of melanin present in the skin. Melanin is the pigment responsible for skin color, and lower levels result in lighter skin tones.</p> 
      <p><strong>Fitzpatrick Scale:</strong> Light skin is often categorized as Type I or Type II on the Fitzpatrick scale, which classifies skin types based on their reaction to sun exposure. Type I skin always burns and never tans, while Type II burns easily and tans minimally.</p>`
    },
    medium: {
      title: "Medium Skin",
      text: `<p>
        <span class="hover-link">
          <div class="hover-card">
            <a href="https://www.beautyanswered.com/what-is-medium-skin.htm" target="_blank">Medium skin tone refers to a skin color that is neither too light nor too dark, often characterized by a range of shades from light tan to olive.</a>
          </div>
        </span></p>

      <p><strong>Characteristics of Medium Skin Tone</strong></p>

      <p><strong>Color Range:</strong> Medium skin tones can vary from light tan to olive and caramel shades. They are often described as "tanned" or "golden" and can include undertones that are warm, cool, or neutral.</p> 
      <p><strong>Undertones:</strong> Medium skin tones typically have one of four undertones:</p>
       <p><strong> Warm:</strong> Yellow or golden hues.</p>
        <p><strong>Cool:</strong> Pink or rosy hues.</p>
       <p><strong> Neutral:</strong> A balance between warm and cool tones.</p>
        <p><strong>Olive:</strong> A mix of green and gray hues.</p>`
    },
    tan: {
      title: "Tan Skin",
      text: `<p>
        <span class="hover-link">
        <div class="hover-card">
          <a href="https://duskyskin.com/what-is-tan-skin-tone/" target="_blank">Tan skin tone refers to a range of light to dark brown skin shades that result from sun exposure or natural pigmentation, characterized by warm undertones.</a>
        </div>
        </span></p>

      <p><strong>Characteristics of Tan Skin Tone</strong></p>

      <p><strong>Color Range:</strong> tan skin can vary from light brown to deep mocha,often described as having a sun-kissed appearance. It typically includes shades that are warm golden brown to darker hues.
      <p><strong>Undertones:</strong> Tan skin tones may have yellow, brown, or olive undertones, which can affect how colors appear on the skin and influence makeup choices.</p>`
    },
    deep: {
      title: "Deep Skin",
      text: `<p>
        <span class="hover-link">
          <div class="hover-card">
            <a href="https://claudianour.com/blogs/modest-makeup/deep-skin-tones" target="_blank">Deep skin tone is characterized by a rich, dark color that can range from dark brown to ebony, often with a natural radiance and minimal sunburn risk.</a>
          </div>
        </span></p>

      <p><strong>Characteristics of Deep Skin Tone</strong></p>

      <p><strong>Color Range:</strong> Deep skin toens encompass a variety of shades, from dark brown to ebony.This skin tone typically has a high level of melanin content provides more protection against UV rays.</p>`

    },
    dark: {
      title: "Dark Skin",
      text: `<p>
        <span class="hover-link">
          <div class="hover-card">
            <a href="https://en.wikipedia.org/wiki/Dark_skin" target="_blank">Dark skin tone refers to skin that is rich in melanin, providing natural protection against UV radiation and contributing to a range of cultural and aesthetic identities.</a>
          </div>
        </span></p>

      <p><strong>Characteristics of Dark Skin Tone</strong></p>

      <p><strong>Malanin Content:</strong> Dark skin is characterized by a high concentration of malanin, partiaculary eumelanin,which gives the skin its daker hue.This pigmentation provides better protection against the harmful effects of ultraviolet(UV) radiation,helping to preserve folate levels and reduce the risk of DNA damage.</p>`
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
const STORAGE_KEY = 'chromaTheme';
const body = document.body;
const toggleBtn = document.getElementById('themeToggle');
const icon = toggleBtn.querySelector('i');

(function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') body.classList.add('darkmode');
  updateIcon();
})();

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  localStorage.setItem(STORAGE_KEY, body.classList.contains('darkmode') ? 'dark' : 'light');
  updateIcon();
});

function updateIcon() {
  icon.className = body.classList.contains('darkmode') ? 'fas fa-sun' : 'fas fa-moon';
}

/* ---------- Rating chart (no jQuery) ---------- */
(() => {
  const STORAGE = 'chromaRatings';
  let votes = JSON.parse(localStorage.getItem(STORAGE) || '[]');

  const starPicker = document.getElementById('starPicker');
  const thanksMsg  = document.getElementById('thanksMsg');
  const barsHost   = document.getElementById('bars');

  function renderChart() {
    const counts = [0,0,0,0,0];
    votes.forEach(v => counts[v-1]++);
    const total = counts.reduce((a,b) => a + b, 0);

    barsHost.innerHTML = '';
    [5,4,3,2,1].forEach(stars => {
      const count = counts[stars - 1];
      const pct   = total ? Math.round((count / total) * 100) : 0;
      barsHost.insertAdjacentHTML('beforeend', `
        <div class="barRow">
          <span class="barLabel">${stars}★</span>
          <div class="barTrack">
            <div class="barFill" style="width:${pct}%"></div>
          </div>
          <span class="barPct">${pct}%</span>
        </div>
      `);
    });
  }

  starPicker.addEventListener('click', e => {
    if (!e.target.dataset.s) return;
    const score = +e.target.dataset.s;
    votes.push(score);
    localStorage.setItem(STORAGE, JSON.stringify(votes));
    thanksMsg.textContent = 'Thanks for rating!';
    renderChart();
    [...starPicker.children].forEach((s,i) =>
      s.classList.toggle('filled', i < score));
  });

  renderChart();  // initial paint
})();