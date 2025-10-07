

/* ---------- CONFIG ---------- */

const surface = ['Fair','Light','Tan','Medium','Deep','Dark'];
const sub = {
  Fair:   ['Porcelain','Ivory','Rosy'],
  Light:  ['Beige','Peach','Alabaster'],
  Tan:    ['Golden','Honey','Caramel'],
  Medium: ['Olive','Bronze','Chestnut'],
  Deep:   ['Mahogany','Espresso','Umber'],
  Dark:  ['Onyx','Charcoal','Sable']
};
const undertone = ['Cool','Warm','Neutral'];
const hair   = ['Blonde_cool','Blonde_warm','Red','Light_brown','Dark_brown','Black','Grey_silver'];
const eyes   = ['Blue','Green','Hazel','Light__brown','Dark__brown','Black1','Grey'];


/* tiny grey placeholder so it runs offline */

const skinImgs = {
  Fair : 'img/fair.jpg',
  Light : 'img/light.jpg',
  Tan : 'img/tan.jpg',
  Medium : 'img/medium.jpg',
  Deep : 'img/deep.jpg',
  Dark : 'img/dark.jpg',
  Porcelain : 'img/porcelain.jpg',
  Ivory : 'img/ivory.jpg',
  Rosy : 'img/rosy.jpg',
  Beige : 'img/Beige.jpg',
  Peach : 'img/Peach.jpg',
  Alabaster : 'img/Alabaster.jpg',
  Golden : 'img/olive.jpg',
  Honey : 'img/bronze.jpg',
  Caramel : 'img/chestnut.jpg',
  Olive : 'img/golden.jpg',
  Bronze :'img/Honey.jpg' ,
  Chestnut :'img/caramel.jpg' ,
  Mahogany : 'img/mahogany.jpg',
  Espresso : 'img/espresso.jpg',
  Umber : 'img/umber.jpg',
  Onyx : 'img/onyx.jpg',
  Charcoal : 'img/charcoal.jpg',
  Sable : 'img/sable.jpg',
  Blonde_cool : 'img/Blonde-cool.jpg',
  Blonde_warm : 'img/Blonde-warm.jpg',
  Red : 'img/Red.jpg',
  Light_brown : 'img/Light-brown.jpg',
  Dark_brown : 'img/Dark-brown.jpg', 
  Black : 'img/Black.jpg',
  Grey_silver : 'img/Grey-silver.jpg',
  Blue : 'img/Blue.jpg',
  Green : 'img/Green.jpg',
  Hazel : 'img/Hazel.jpg',
  Light__brown : 'img/Light_brown.jpg',
  Dark__brown : 'img/Dark_brown.jpg',
  Black1 : 'img/Black_eye.jpg',
  Grey : 'img/Grey.jpg',
  Cool : 'img/cool.jpg',
  Neutral : 'img/natural tone.jpg',
  Warm : 'img/warm tone.jpg'
};

/* palette engine – still only needs undertone */

const palettes = {
  Cool:{best:["#0F52BA",     "#4169E1",     "#50C878",     "#01796F",     "#FF0000",     "#DE3163",     "#FF00FF",     "#C154C1",     "#8F00FF",     "#9966CC",     "#CCCCFF",     "#E6E6FA",     "#AFDBF5",     "#F8C8DC",     "#708090",     "#36454F",     "#C0C0C0",     "#FFFFFF",     "#000080",     "#000000"
],
        avoid:['#fb923c','#facc15','#d97706','#dc2626']},

  Warm:{best:["#E2725B",     "#B7410E",     "#FF7F50",     "#FF6347",     "#FF7518",     "#FFDB58",     "#EAA221",     "#C19A6B",     "#9A463D",     "#7B3F00",     "#808000",     "#8A9A5B",     "#B2AC88",     "#FFDAB9",     "#FBCEB1",     "#CC5500",     "#CD7F32",     "#FFD700",     "#FFFDD0",     "#D2B48C"
],
        avoid:['#a855f7','#7dd3fc','#ffffff','#9ca3af']},

  Neutral:{best:["#696969",     "#808080",     "#837060",     "#483C32",     "#BFAFB2",     "#F8E0E7",     "#D4A5A5",     "#B784A7",     "#008080",     "#00A86B",     "#93E9BE",     "#1560BD",     "#191970",     "#B9AEDC",     "#A3989D",     "#99AABB",     "#AAF0D1",     "#708238",     "#3B2F2F",     "#F8F8F0"
],
           avoid:['#ef4444','#a1a1aa']}
};

/* === NEW: step-specific colour contributions === */
const DATA = {
  /* Sub-skin mini-palettes */
  Porcelain: { best:["#50C878",`#0F52BA`,`#0000FF`,`#9B111E`,`#9966CC`,`#800080`,`#B0E0E6`,`#FFC0CB`,`#98FF98`,`#E6E6FA`,`#000080`,`#D3D3D3`,`#FFFDD0`,`#C19A6B`,`#90E4C1`, `#00A86B`
],     avoid:[] },

  Ivory:     { best:[`#50C878`,`#0F52BA`,`#9B111E`,`#9966CC`,`#E4D00A`,`#ADD8E6`,`#FFC0CB`,`#E6E6FA`,`#98FF98`],               avoid:[] },

  Rosy:      { best:[`#4169E1`,`#000080`,`#008080`,`#B0E0E6`,`#228B22`,`#50C878`,`#BCA8D0`,`#9966CC`,`#8E4585`,`#36454F`,`#000000`
],               avoid:[] },

  Beige:     { best:["#000000", "#FFFFFF", "#808080", "#FFFDD0", "#FFC0CB", "#FF0000", "#0000FF", "#008000", "#FFFF00", "#E2725B", "#556B2F", "#FFDB58", "#7B3F00", "#AF6E4D", "#D2B48C"
],               avoid:[] },

  Peach:     { best:["#FFFFFF", "#D3D3D3", "#000080", "#FF7F50", "#FFD700", "#8B0000", "#000000", "#98FF98", "#E6E6FA", "#556B2F", "#5F9EA0", "#AEC6CF", "#FFDB58", "#654321", "#800020", "#E2725B", "#F88379"
],               avoid:[] },

  Alabaster: { best:[`#50C878`,`#0F52BA`,`#9B111E`,`#9966CC`,`#580F41`,`#B0E0E6`,`#FFC0CB`,`#E6E6FA`,`#98FF98`,`#000080`,`#D3D3D3`,`#FFFDD0`,`#C19A6B`,`#F0E68C`,`#FAFAD2`,`#FFE5B4`,`#FF7F50`,`#FFDB58`
],               avoid:[] },

  Golden:    { best:["#ffd700", "fafad2", "#d4af37", "b76e79", "c28840", "cd7f32", "f7e7ce", "ffcc33"],               avoid:[] },

  Honey:     { best:["#E2725B", "#FFDB58", "#556B2F", "#B7410E", "#FFFDD0", "#E4D5B7", "#D3D3D3", "#F88379", "#950714", "#4169E1", "#000080", "#0F52BA", "#50C878", "#00A86B", "#E34234", "#FF6347", "#FFFF00"
],               avoid:[] },

  Caramel:   { best:["#FFDB58",     "#E2725B",     "#556B2F",     "#B7410E",     "#FFFDD0",     "#CC5500",     "#000080",     "#F8E0E7",     "#381819",     "#FFD700"
],               avoid:[] },

  Olive:     { best:[`#556B2F`, `#C19A6B`, `#CC7722`, `#E2725B`, `#50C878`, `#4B0082`, `#0F52BA`,
`#FFFFFF`, `#FFFFF0`, `#FFFDD0`, `#950714`, `#A45A75`, `#F88379`, `#E34234`,
`#FF6347`, `#FF0000`, `#FFDB58`, `#FFD700`, `#01796F`, `#00A86B`
],               avoid:[] },

  Bronze:    { best:["#E2725B", "#FFD700", "#CC7722", "#556B2F", "#50C878", "#580F41", "#0F52BA", "#800020", "#C19A6B", "#F5F5DC", "#FFFDD0", "#002366", "#FF8C00", "#FFD700", "#000080", "#A9A9A9", "#000000"
],               avoid:[] },

  Chestnut:  { best:["#556B2F", "#FFDB58", "#B7410E", "#F0E68C", "#800020", "#0F52BA", "#000000", "#808080", "#C0C0C0"
],               avoid:[] },

  Mahogany:  { best:["#50C878", "#0F52BA", "#800080", "#F0E68C", "#556B2F", "#CC5500", "#000080", "#FFFDD0", "#808080", "#8B4513"
],               avoid:[] },

  Espresso:  { best:["#50C878", "#9B111E", "#0F52BA", "#FFC0CB", "#F5F5DC", "#008080", "#FFDB58", "#CC5500", "#E6E6FA", "#98FF98", "#B0E0E6"
],               avoid:[] },

  Umber:     { best:["#708238", "#8B4513", "#C19A6B", "#CC5500","#FF7F50", "#B22222", "#FF6347","#FFDB58", "#FFC512","#003366", "#50C878", "#FF8C00", "#FFD700","#FAF3E0", "#C19A6B", "#7B3F00"
],               avoid:[] },

  Onyx:      { best:["#50C878", "#9B111E", "#0F52BA", "#9966CC", "#36454F", "#000000", "#000080","#AFDBF5", "#E6E6FA", "#FADADD","#FFD700", "#C0C0C0", "#B87333"
],               avoid:[] },

  Charcoal:  { best:["#FFFFFF", "#DFFF00", "#0047AB", "#6A0DAD", "#50C878", "#FF00FF", "#DC143C", "#C0C0C0", "#008080", "#FF5F00"
],               avoid:[] },

  Sable:     { best:["#FFFFF0", "#FFD700", "#E2725B", "#B7410E", "#556B2F", "#FFDB58", "#B7410E", "#381819", "#800020", "#FFFDD0"
],               avoid:[] },

  /* Hair add-ons */
  Blonde_cool:   { best:["#E6E6FA", "#AFDBF5", "#36454F", "#C0C0C0", "#000080", "#DCAE96", "#708679", "#000000", "#FFFFFF", "#708090"
],           avoid:[] },

  Blonde_warm:   { best:["#F88379", "#C19A6B", "#556B2F", "#B7410E", "#FFFDD0", "#FFDB58", "#E2725B", "#381819", "#000080", "#FFDAB9"
],           avoid:[] },

  Red:           { best:["#228B22", "#008080", "#FFFDD0", "#000080", "#C19A6B", "#800020", "#FFDB58", "#36454F", "#FADADD", "#CD7F32"
],           avoid:[] },

  Light_brown:   { best:["#9CAF88", "#DCAE96", "#D2B1A3", "#000080", "#E2725B", "#FFFDD0", "#808000", "#875D80", "#C19A6B", "#36454F"
],           avoid:[] },

  Dark_brown:    { best:["#800020", "#FFDB58", "#50C878", "#FFFFF0", "#808000", "#B7410E", "#4B0082", "#C19A6B", "#36454F", "#FFFFFF"
],           avoid:[] },

  Black:         { best:["#FFFFFF", "#DC143C", "#4169E1", "#50C878", "#C0C0C0", "#36454F", "#FFC0CB", "#C19A6B", "#FFD700", "#722F37"
],           avoid:[] },

  Grey_silver:   { best:["#36454F", "#E6E6FA", "#AFDBF5", "#800020", "#D6D6D6", "#000080", "#FADADD", "#FFFFFF", "#008080", "#673147"
],           avoid:[] },

  /* Eye add-ons */
  Blue:        { best:["#000080", "#0047AB", "#AFDBF5", "#008080", "#A3989D",
"#C48E96", "#36454F", "#C0C0C0", "#FF7F50", "#C19A6B"
],             avoid:[] },

  Green:       { best:["#50C878", "#228B22", "#808000", "#B7410E", "#800020", "#673147", "#FFDB58", "#D2B1A3", "#7B3F00", "#FFFFF0"
],             avoid:[] },

  Hazel:       { best:["#8A9A5B", "#CD7F32", "#E2725B", "#673147", "#FFBF00", "#FFDAB9", "#9A463D", "#708090", "#FFFDD0", "#FFD700"
],             avoid:[] },

  Light__brown:{ best:["#F5DEB3", "#B7410E", "#9CAF88", "#669999", "#DCAE96", "#808000", "#D2B48C", "#F88379", "#36454F", "#FFFDD0"
],             avoid:[] },

  Dark__brown: { best:["#800020", "#CC5500", "#FFDB58", "#228B22", "#580F41", "#C19A6B", "#381819", "#FFFFF0", "#000080", "#808000"
],             avoid:[] },

  Black1:      { best:["#FFFFFF", "#D6D6D6", "#FADADD", "#AFDBF5", "#C19A6B", "#B7410E", "#4A0000", "#D4AF37", "#36454F", "#E6E6FA"
],             avoid:[] },

  Grey:        { best:["#36454F", "#C0C0C0", "#4682B4", "#DCAE96", "#C8A2C8", "#708679", "#99AABB", "#AAF0D1", "#000000", "#FFFFF0"
],             avoid:[] }
};

/* ---------- MAKE-UP TEXT SUGGESTIONS ---------- */
const MAKEUP_TEXT = {
  Fair: {
    Cool: {
      Foundation: "True cocoa, neutral deep brown, deep almond, sable, soft mocha",
      Blush:      "Golden plum, neutral berry, rich rose, soft auburn, muted raisin",
      Lipstick:   "Balanced wine, dark mauve, deep nude, muted burgundy, brown rose",
      Eyeshadow:  "Rich taupe, rose bronze, neutral brown, copper taupe, deep matte beige"
    },
    Warm: {
      Foundation: "Warm porcelain, golden beige, soft ivory, peachy tan, light caramel",
      Blush:      "Apricot, coral peach, warm rose, golden apricot, soft terracotta",
      Lipstick:   "Warm nude, peachy rose, coral pink, brick rose, burnt sienna",
      Eyeshadow:  "Warm sand, peachy bronze, soft copper, camel, muted gold"
    },
    Neutral: {
      Foundation: "Neutral fair, soft beige, balanced ivory, light almond, muted peach",
      Blush:      "Dusty rose, neutral mauve, muted berry, soft plum, rosewood",
      Lipstick:   "Rose nude, dusty mauve, muted berry, soft plum, rose-brown",
      Eyeshadow:  "Soft taupe, dusty mauve, neutral brown, muted rose, cool beige"
    }
  },

  /* Repeat the same structure for the other 5 surface tones */
  Light: {
    Cool: {
      Foundation: "Cool beige, soft fawn, porcelain beige, light cocoa, neutral sand",
      Blush:      "Mauve rose, cool berry, soft plum, dusty rose, muted raspberry",
      Lipstick:   "Mauve nude, cool rose, berry mauve, soft plum, cool burgundy",
      Eyeshadow:  "Cool taupe, soft mauve, muted plum, grey-brown, slate"
    },
    Warm: {
      Foundation: "Warm beige, golden fawn, soft caramel, light tan, warm sand",
      Blush:      "Warm peach, soft apricot, coral rose, golden rose, soft brick",
      Lipstick:   "Warm rose, peachy nude, coral mauve, soft terracotta, cinnamon",
      Eyeshadow:  "Warm bronze, soft copper, camel, muted peach, golden beige"
    },
    Neutral: {
      Foundation: "Neutral beige, balanced fawn, soft tan, light almond, muted caramel",
      Blush:      "Neutral rose, soft berry, muted apricot, dusty peach, rose-taupe",
      Lipstick:   "Neutral mauve, soft berry, dusty rose, balanced plum, nude-rose",
      Eyeshadow:  "Neutral taupe, soft brown, muted rose, balanced beige, stone"
    }
  },

  Tan: {
    Cool: {
      Foundation: "Cool tan, soft walnut, neutral bronze, medium almond, cocoa",
      Blush:      "Deep berry, cool plum, rich mauve, soft raisin, muted wine",
      Lipstick:   "Berry wine, cool plum, mauve brown, deep berry, cool burgundy",
      Eyeshadow:  "Cool bronze, soft plum, taupe-brown, muted charcoal, cool cocoa"
    },
    Warm: {
      Foundation: "Warm tan, golden bronze, soft caramel, toasted almond, honey",
      Blush:      "Warm coral, soft cinnamon, golden berry, apricot, soft rust",
      Lipstick:   "Warm terracotta, soft brick, coral brown, cinnamon, burnt rose",
      Eyeshadow:  "Warm bronze, copper brown, soft rust, camel, golden khaki"
    },
    Neutral: {
      Foundation: "Neutral tan, balanced bronze, soft walnut, medium almond, muted cocoa",
      Blush:      "Neutral berry, soft plum, muted rose, dusty coral, balanced raisin",
      Lipstick:   "Balanced berry, soft terracotta, muted brick, dusty mauve, rose-brown",
      Eyeshadow:  "Neutral brown, soft bronze, muted taupe, balanced camel, stone"
    }
  },

  Medium: {
    Cool: {
      Foundation: "Cool medium, soft sable, neutral chestnut, rich almond, cocoa",
      Blush:      "Deep plum, cool berry, rich raisin, soft wine, muted burgundy",
      Lipstick:   "Cool wine, deep plum, berry brown, cool burgundy, muted raisin",
      Eyeshadow:  "Cool cocoa, soft charcoal, taupe, muted plum, cool bronze"
    },
    Warm: {
      Foundation: "Warm medium, golden chestnut, soft sienna, toasted almond, bronze",
      Blush:      "Warm berry, soft rust, golden plum, cinnamon, soft copper",
      Lipstick:   "Warm brick, soft rust, copper brown, cinnamon, terracotta",
      Eyeshadow:  "Warm copper, soft bronze, rust, caramel, golden brown"
    },
    Neutral: {
      Foundation: "Neutral medium, balanced chestnut, soft cocoa, rich almond, muted bronze",
      Blush:      "Neutral berry, soft raisin, muted plum, dusty rust, balanced wine",
      Lipstick:   "Balanced berry, soft rust, muted plum, dusty brick, rose-cocoa",
      Eyeshadow:  "Neutral bronze, soft cocoa, muted taupe, balanced khaki, stone"
    }
  },

  Deep: {
    Cool: {
      Foundation: "Cool espresso, neutral mahogany, deep sable, rich cocoa, umber",
      Blush:      "Deep wine, cool raisin, rich plum, soft burgundy, muted berry",
      Lipstick:   "Cool wine, deep plum, rich burgundy, cool raisin, muted wine",
      Eyeshadow:  "Cool espresso, soft charcoal, deep taupe, muted plum, cool cocoa"
    },
    Warm: {
      Foundation: "Warm espresso, golden mahogany, deep sienna, toasted umber, bronze",
      Blush:      "Warm raisin, soft rust, golden plum, deep cinnamon, copper",
      Lipstick:   "Warm rust, deep copper, rich terracotta, cinnamon, brick",
      Eyeshadow:  "Warm espresso, soft copper, rust, deep bronze, caramel"
    },
    Neutral: {
      Foundation: "Neutral espresso, balanced mahogany, deep cocoa, rich umber, muted bronze",
      Blush:      "Neutral raisin, soft rust, muted plum, dusty wine, balanced copper",
      Lipstick:   "Balanced rust, deep plum, muted terracotta, dusty wine, cocoa-rose",
      Eyeshadow:  "Neutral espresso, soft cocoa, muted bronze, balanced rust, stone"
    }
  },

  Dark: {
    Cool: {
      Foundation: "Cool onyx, neutral sable, deep espresso, rich umber, cocoa",
      Blush:      "Deep berry, cool wine, rich raisin, soft plum, muted burgundy",
      Lipstick:   "Cool wine, deep berry, rich burgundy, cool raisin, muted plum",
      Eyeshadow:  "Cool onyx, soft charcoal, deep espresso, muted plum, cool cocoa"
    },
    Warm: {
      Foundation: "Warm onyx, golden sable, deep espresso, toasted umber, bronze",
      Blush:      "Warm raisin, soft copper, golden berry, deep rust, cinnamon",
      Lipstick:   "Warm copper, deep rust, rich terracotta, cinnamon, brick",
      Eyeshadow:  "Warm onyx, soft bronze, rust, deep copper, golden brown"
    },
    Neutral: {
      Foundation: "Neutral onyx, balanced sable, deep espresso, rich umber, muted bronze",
      Blush:      "Neutral raisin, soft copper, muted berry, dusty wine, balanced rust",
      Lipstick:   "Balanced rust, deep berry, muted terracotta, dusty wine, cocoa-bronze",
      Eyeshadow:  "Neutral onyx, soft cocoa, muted bronze, balanced rust, stone"
    }
  }
};

/* ---------- STATE ---------- */

let state = {surface:'',sub:'',undertone:'',hair:'',eyes:''};                 //each time user selets something, the value is saved here

/* ---------- HELPERS ---------- */

function $(id){return document.getElementById(id);}                 //shortcut for not to use document.getElementById(...) everytime
function hide(s){s.classList.add('hidden');}                                             //acll out css class hidden 
function show(s){s.classList.remove('hidden');}

function buildGrid(parent,data,handler){                    //clear current grid, Creates a div.card for each option
  parent.innerHTML='';
  data.forEach(d=>{
    const card=document.createElement('div');
    card.className='card';
    const url= skinImgs[d];
    card.innerHTML = `<img src="${url}" alt="${d}"><span>${d}</span>`;
    card.onclick=()=>handler(d);
    parent.appendChild(card);
  });
}
/* === merge two {best:[],avoid:[]} objects === */
function merge(a,b){
  return {
    best: [...new Set([...a.best, ...b.best])],
    avoid: [...new Set([...a.avoid, ...b.avoid])]
  };
}

function sendEmail(){
  const {surface, sub, undertone, hair, eyes} = state;

  /* grab make-up text */
  const makeup = MAKEUP_TEXT[surface]?.[undertone];
  if(!makeup){
    alert("Please complete all steps first.");
    return;
  }

  /* build plain-text body */
  const body = `
Clothing Colour Results
Surface tone: ${surface}
Sub-tone: ${sub}
Undertone: ${undertone}
Hair: ${hair}
Eyes: ${eyes}

Make-up suggestions
Foundation: ${makeup.Foundation}
Blush: ${makeup.Blush}
Lipstick: ${makeup.Lipstick}
Eyeshadow: ${makeup.Eyeshadow}
`.trim();

  /* open user's mail client */
  const subject = `My colour-match results – ${surface} ${undertone}`;
  const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

/* ---------- FLOW ---------- */

function init(){
  buildGrid($('surfaceGrid'),surface,s=>{                                                //shows clickable image card
    state.surface=s;                                            //when user click a surface it saves to state.surface
    hide($('step1'));show($('step2'));
    buildGrid($('subGrid'),sub[s],sub=>{
      state.sub=sub;                                       //base on selected surface tone it loads related sub tones
      hide($('step2'));show($('step3'));
      buildGrid($('undertoneGrid'),undertone,u=>{
        state.undertone=u;                                                       //user pick save to stste.undertones
        hide($('step3'));show($('step4'));
        buildGrid($('hairGrid'),hair,h=>{
          state.hair=h;
          hide($('step4'));show($('step5'));
          buildGrid($('eyeGrid'),eyes,e=>{
            state.eyes=e;
          });
        });
      });
    });
  });
}

/* ----------  WIZARD NAVIGATION  ---------- */
function goStep(targetStep){
    /* hide everything first */
    [1,2,3,4,5].forEach(n => hide($('step'+n)));
    hide($('result'));

    if(targetStep === 1)      show($('step1'));
    else if(targetStep === 2) show($('step2'));
    else if(targetStep === 3) show($('step3'));
    else if(targetStep === 4) show($('step4'));
    else if(targetStep === 5) show($('step5'));
    else if(targetStep === 6) show($('result'));   // 6 = show result
}

/* OPTIONAL: map left/right arrow keys */
document.addEventListener('keydown', e=>{
    const visible = [1,2,3,4,5].find(n => !$('step'+n).classList.contains('hidden'));
    if(!visible) return;
    if(e.key === 'ArrowLeft'  && visible > 1) goStep(visible - 1);
    if(e.key === 'ArrowRight' && visible < 5) goStep(visible + 1);
});

function generateResult(){
  hide($('step5'));

  /* start with sub-skin */
  let final = DATA[state.sub] || {best:[],avoid:[]};

  /* intersect with undertone palette */
  const undertoneP = palettes[state.undertone];
  final.best = final.best.filter(c => undertoneP.best.includes(c));
  final.avoid = [...new Set([...final.avoid, ...undertoneP.avoid])];

  /* add hair colours */
  final = merge(final, DATA[state.hair] || {});

  /* add eye colours */
  final = merge(final, DATA[state.eyes] || {});

  /* render */
  $('bestSwatches').innerHTML='';
  $('avoidSwatches').innerHTML='';
  final.best.forEach(c=>{
    const s=document.createElement('span');
    s.className='swatch'; s.style.background=c; s.title=c;
    $('bestSwatches').appendChild(s);
  });

  /* === render make-up text === */
  const makeup = MAKEUP_TEXT[state.surface]?.[state.undertone];
  if (makeup) {
    let html = `<h3>Make-up Shade Suggestions</h3>
                <p><strong>Foundation:</strong> ${makeup.Foundation}</p>
                <p><strong>Blush:</strong> ${makeup.Blush}</p>
                <p><strong>Lipstick:</strong> ${makeup.Lipstick}</p>
                <p><strong>Eyeshadow:</strong> ${makeup.Eyeshadow}</p>`;
    $('makeupBox').innerHTML = html;
    show($('makeupBox'));
  }
  
  final.avoid.forEach(c=>{
    const s=document.createElement('span');
    s.className='swatch avoid'; s.style.background=c; s.title=c;
    $('avoidSwatches').appendChild(s);
  });
  show($('result'));

  /* expose colours for e-mail */
  window.bestColors  = final.best.join(', ');
  window.avoidColors = final.avoid.join(', ');

}


function resetQuiz(){                                                                  //stop and restart from step 1
  state={surface:'',sub:'',undertone:'',hair:'',eyes:''};
  ['step2','step3','step4','step5','result'].forEach(id=>hide($(id)));
  show($('step1'));
}

init(); // start

/* ----------  COLOUR-NAME HELPER  ---------- */
/*  built once at start-up                        */
const colorMap = colorNameList.reduce((acc, {name, hex}) => {
  acc[name] = hex;               // key = name, value = hex
  return acc;
}, {});
const nearest = nearestColor.from(colorMap);

function hexToName(hex){
  try {
    return nearest(hex).name;    // e.g.  #FF6B6B  →  "Coral Pink"
  } catch(e){
    return hex.toUpperCase();    // fallback if lookup fails
  }
}

/* ----------  EMAILJS SENDER  ---------- */
function sendViaEmailJS(){
  const name  = $("userName").value.trim();
  const email = $("userEmail").value.trim();
  if(!email){ alert("Enter an e-mail"); return; }

  const {surface, sub, undertone, hair, eyes} = state;
  const makeup = MAKEUP_TEXT[surface]?.[undertone];
  if(!makeup){ alert("Finish quiz"); return; }

  /* turn hex arrays into “Name (Hex)” strings */
  const bestNamed  = window.bestColors
                       .split(', ')
                       .map(h => `${hexToName(h)}`)
                       .join(', ');
  const avoidNamed = window.avoidColors
                       .split(', ')
                       .map(h => `${hexToName(h)}`)
                       .join(', ');

  const params = {
    to_name:      name || "User",
    to_email:     email,
    best_colors:  bestNamed,
    avoid_colors: avoidNamed,
    foundation:   makeup.Foundation,
    blush:        makeup.Blush,
    lipstick:     makeup.Lipstick,
    eyeshadow:    makeup.Eyeshadow
  };

  emailjs.send(
    "service_16ic69y",
    "template_72seiap",
    params,
    "u1djz-ybNOWN7Mi21"
  )
  .then(
    res => alert("Results sent!"),
    err => alert("Send failed: " + JSON.stringify(err))
  );
}