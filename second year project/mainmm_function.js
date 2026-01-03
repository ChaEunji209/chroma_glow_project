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
      <p>Fair skin tone သည် မယ်လနင် (melanin) ပါဝင်မှု နည်းသော အသားအရေကို ရည်ညွှန်းပြီး၊ ၎င်းသည် ပိုမို ထိခိုက်လွယ်ကာ နေလောင်ခြင်း (sunburn) ကဲ့သို့သော အခြေအနေများ ဖြစ်ပွားနိုင်ခြေ ပိုများသည်။</p>
      
      <p><strong>Fair Skin ၏ လက္ခဏာများ :</strong></p>
  
      <p><strong>မယ်လနင် ပမာဏ: </strong>Fair skin တွင် မယ်လနင် ပါ ဝင်မှု နည်းပါးခြင်းကြောင့် အသားအရည် ဖျော့ပြီး UV ကြောင့် အသားရည် ထိခိုက်ခြင်း၊ နေလောင်ခြင်းများ ပိုမို ဖြစ်လွယ်ပါသည်။</p>
      <p><strong>အသားရည် ထိခိုက်နိုင်မှု အခြေအနေ : </strong>Fair skin tone ကို ပိုင်ဆိုင်ထားသော သူများသည် တစ်ခါတရံတွင် အသားရည် နီမြန်းခြင်းနှင့် ယားယံခြင်းများ ပိုမို လွယ်ကူစွာ ဖြစ်ပွားတတ်ပါသည်။ထို ကဲ့သို့သောသူများသည် skincare ထုတ်ကုန်များ ရွေးခြယ်ရာတွင် သတိထား၍ သေချာစွာ ရွေးဝယ်သင့်သည်။</p>
      <span class="hover-link">
    <div class="hover-card">
        <a href="https://skincaregeeks.com/fair-skin-tone/" target="_blank">ပိုမိုလေ့လာရန် &rarr;</a>
      </div>
    </span>`
    
    },
    light: {
      title: "Light Skin",
      text: `<p>Light skin tone ဆိုသည်မှာ မယ်လနင် (melanin) ပါဝင်မှု နည်းပါးသော အသားအရေကို ရည်ညွှန်းပြီး၊ ၎င်းသည် ဆင်စွယ်ရောင်မှ အညိုနုရောင် (light beige) အထိ ရှိနိုင်သော အရောင်ဖျော့သည့် အသားရည် အရောင်များကို ဆိုလိုသည်။ </p>

      <p><strong>Light Skin Tone ၏ လက္ခဏာများ :</strong></p>

      <p><strong>မယ်လနင် ပမာဏ:</strong> အသားအရေ ဖြူခြင်းကို အဓိကအားဖြင့် အရေပြားထဲတွင် ပါဝင်သော မယ်လနင် (melanin) ပမာဏက ဆုံးဖြတ်သည်။ မယ်လနင်သည် အသားအရေ အရောင်ကို ဖြစ်ပေါ်စေသည့် ဆိုးဆေးဖြစ်ပြီး၊ ၎င်း၏ ပမာဏ နည်းပါးလေ အသားအရေ အရောင် ပိုမိုဖျော့တော့လေ ဖြစ်သည်။</p> 
      <p><strong>နေလောင် ဒဏ် ခံနိုင်မှု ပမာဏ:</strong> Light skin ကို ပံမှန်အားဖြင့် နေလောင်သော ပုံစံနှင် အနေအထားကို လိုက်၍ Type I နှင့် Type II ဟူ၍ ခွဲခြားနိုင်သည်။ Type I သည် နေလောင်သော်လည်း အသားရောင် ညိုသွားခြင်း ပြောင်းလဲသွားခြင်း မရှိပါ။Type II သည် အလွယ်တကူ နေလောင်နိုင်ပြီး အသားရောင် အလွယ်တကူ ပြောင်းလဲ နိုင်သည်။</p>
      <span class="hover-link">
    <div class="hover-card">
    <a href="https://en.wikipedia.org/wiki/Light_skin" target="_blank">ပိုမိုလေ့လာရန် &rarr;</a>
    </div>
  </span>`
    },
    medium: {
      title: "Medium Skin",
      text: `<p>Medium skin tone သည် မညိုလွန်း မဖြူလွန်းသော အလယ်အလတ် အသားအရေကိ ဆိုလိုသည်။ ထို အသားရောင်ကို အညိုနုရောင်မှ သံလွင်ရောင်အထိ အရိပ်အမျိုးမျိုးဖြင့် ဖော်ပြလေ့ရှိသည်။</p>

      <p><strong>Medium Skin Tone ၏ လက္ခဏာများ :</strong></p>

      <p><strong>အရောင် အမျိုးအစား :</strong> Medium skin tones များသည် အညိုနုရောင် (light tan)၊ သံလွင်ရောင် (olive) နှင့် ကာရာမဲလ်ရောင် (caramel) အရိပ်အမျိုးမျိုးအထိ ကွဲပြားနိုင်ပါသည်။ ၎င်းတို့ကို မကြာခဏဆိုသလို 'နေရောင်ခံထားသော' (tanned) သို့မဟုတ် 'ရွှေရောင်' (golden) ဟု ဖော်ပြလေ့ရှိပြီး warm undertones၊ cool undertonese၊  သို့မဟုတ် neutral undertones များ ပါဝင်နိုင်သည်။</p> 
      <p><strong>Undertones:</strong> Medium skin tones များသည် ပုံမှန် အားဖြင့် အောက်ပါ undertones 4 ခုထဲမှ တစ် ခု ဖြစ်နိုင်သည်။</p>
       <p><strong> Warm:</strong> အဝါရောင်(Yellow) သို့မဟုတ် ရွှေရောင်များ (golden hues).</p>
        <p><strong>Cool:</strong> အပန်း (Pink) သို့မဟုတ် နီတွေးတွေး (rosy hues).</p>
       <p><strong> Neutral:</strong> warm tone နှင့် cool tone အကြား မျှတသော အရောင်။</p>
        <p><strong>Olive:</strong> အစိမ်း (green) နှင့် ခဲ (gray) ရောနေသော အရောင်။</p>
        <span class="hover-link">
          <div class="hover-card">
            <a href="https://www.beautyanswered.com/what-is-medium-skin.htm" target="_blank">ပိုမိုလေ့လာရန် &rarr;</a>
          </div>
        </span>`
    },
    tan: {
      title: "Tan Skin",
      text: `<p>အသားအရေ ညိုရောင် (Tan skin tone) ဆိုသည်မှာ နေရောင်ခြည်နှင့် ထိတွေ့ခြင်း သို့မဟုတ် သဘာဝ မယ်လနင် (pigmentation) ကြောင့် ဖြစ်ပေါ်လာသော အညိုဖျော့မှ အညိုရင့်အထိရှိသည့် အသားအရေ အရိပ်အမျိုးမျိုးကို ရည်ညွှန်းပြီး၊များသော အားဖြင့် warm undertones များ ပါဝင်ပါသည်။</p>

      <p><strong>Tan Skin Tone ၏ လက္ခဏာများ :</strong></p>

      <p><strong>အရောင် အမျိုးအစားများ :</strong> အသားအရေ ညိုရောင် (Tan skin) သည် အညိုဖျော့မှ မိုကာ (mocha) ရင့်ရောင်အထိ ကွဲပြားနိုင်ပြီး၊ sun-kissed အရောင်ရှိသည်ဟု မကြာခဏ ဖော်ပြလေ့ရှိသည်။ ၎င်းတွင် နွေးထွေးသော ရွှေအညိုရောင်မှသည် ပိုမိုရင့်သော အရောင်အသွေးများအထိ ပါဝင်လေ့ရှိသည်။
      <p><strong>Undertones:</strong> Tan skin tones တွင် အဝါရောင်၊ အညိုရောင် နှင့် သံလွင်ရောင် undertones များ ရှိတတ်သည်။ ထို undertones များပေါ်လိုက်၍ အသားအရောင်နှင့် makeup အရာင် ရွေးခြယ် မှုများ ကွာခြားသွားနိုင်သည်။</p>
      <span class="hover-link">
        <div class="hover-card">
          <a href="https://duskyskin.com/what-is-tan-skin-tone/" target="_blank">ပိုမိုလေ့လာရန် &rarr;</a>
        </div>
        </span>`
    },
    deep: {
      title: "Deep Skin",
      text: `<p>အသားအရေ ရင့်ရောင် (Deep skin tone) သည် အညိုရင့်ရောင်မှ ကျောက်မီးသွေးရောင် (ebony) အထိ ရှိနိုင်သော ပြည့်ဝသည့် အရောင်ရင့်ကို ဖော်ပြပြီး၊ သဘာဝအတိုင်း တောက်ပမှုရှိကာ နေလောင်ကျွမ်းနိုင်ခြေ အနည်းဆုံး ဖြစ်သည်။</p>

      <p><strong>Deep Skin Tone ၏ လက္ခဏာများ :</strong></p>

      <p><strong>အရောင် အမျိုးအစား :</strong>အသားအရေ ရင့်ရောင် (Deep skin tones) များတွင် အညိုရင့်ရောင်မှ ကျောက်မီးသွေးရောင် (ebony) အထိ အရိပ်အမျိုးမျိုး ပါဝင်သည်။ ဤအသားအရေတွင် မယ်လနင် (melanin) ပါဝင်မှု မြင့်မားသောကြောင့် ခရမ်းလွန်ရောင်ခြည် (UV rays) ကို ပိုမိုကာကွယ်ပေးနိုင်သည်။</p>
      <span class="hover-link">
          <div class="hover-card">
            <a href="https://claudianour.com/blogs/modest-makeup/deep-skin-tones" target="_blank">ပိုမိုလေ့လာရန် &rarr;</a>
          </div>
        </span>`

    },
    dark: {
      title: "Dark Skin",
      text: `<p>အသားအရေ မည်းညိုခြင်း (Dark skin tone) သည် မယ်လနင် (melanin) ကြွယ်ဝစွာ ပါဝင်သည့် အသားအရေကို ရည်ညွှန်းပြီး၊ ၎င်းသည် ခရမ်းလွန်ရောင်ခြည် (UV radiation) ကို သဘာဝအတိုင်း ကာကွယ်ပေးနိုင်ခြင်းအပြင်၊ ယဉ်ကျေးမှုနှင့် အလှအပဆိုင်ရာ လက္ခဏာရပ်မျိုးစုံကိုလည်း ပံ့ပိုးပေးပါသည်။</p>

      <p><strong>Dark Skin Tone ၏ လက္ခဏာများ :</strong></p>

      <p><strong>မယ်လနင် ပါဝင်မှုနှုန်း :</strong>အသားအရေ မည်းညိုခြင်းသည် မယ်လနင် (melanin)၊ အထူးသဖြင့် ယူမယ်လနင် (eumelanin) ပမာဏ မြင့်မားစွာ ပါဝင်ခြင်း၏ လက္ခဏာရပ်ဖြစ်ပြီး ၎င်းက အသားအရေကို အရောင်ရင့်စေပါသည်။ ဤအရောင်ခြယ်ပစ္စည်း (pigmentation) သည် ခရမ်းလွန်ရောင်ခြည် (UV radiation) ၏ ဆိုးကျိုးများမှ ပိုမိုကောင်းမွန်စွာ ကာကွယ်ပေးနိုင်ခြင်း၊ ဖောလိတ်ဓာတ် (folate levels) ကို ထိန်းသိမ်းပေးနိုင်ခြင်းနှင့် DNA ပျက်စီးနိုင်ခြေကို လျှော့ချပေးနိုင်ခြင်း စသည့် အကျိုးကျေးဇူးများ ရှိပါသည်။</p>
      <span class="hover-link">
          <div class="hover-card">
            <a href="https://en.wikipedia.org/wiki/Dark_skin" target="_blank">ပိုမိုလေ့လာရန် &rarr;</a>
          </div>
        </span>`
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
