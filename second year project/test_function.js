/* ---------- CONFIG ---------- */

const surface = ['Fair','Light','Tan','Medium','Deep','Dark'];
const sub = {
  Fair:   ['Porcelain','Ivory','Rosy','Alabaster','Pearl','PalePink'],
  Light:  ['Beige','Peach','Alabaster','Cream','Buff','Sand'],
  Tan:    ['Golden','Honey','Caramel','Amber','Sunkissed','Toasted'],
  Medium: ['Olive','Bronze','Chestnut','Almond','Warm_Sand','Cashew'],
  Deep:   ['Mahogany','Espresso','Umber','Sienna','Cacao','Copper'],
  Dark:   ['Onyx','Charcoal','Sable','Ebony','Deep_Coffee','Midnight']
};
const undertone = ['Cool','Warm','Neutral'];
const hair   = ['Blonde_cool','Blonde_warm','Red','Auburn','Light_brown','Dark_brown','Ash_brown','Black','Jet_Black','Grey_silver'];
const eyes   = ['Blue','Green','Hazel','Light__brown','Dark__brown','Black1','Grey'];

/* ---------- OUTFIT CHECKER VARIABLES ---------- */
let outfitState = {
    itemCount: 0,
    colors: [],
    bestColorsArray: [],
    avoidColorsArray: []
};

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
  PalePink: 'img/pale_pink.jpg',
  Beige : 'img/Beige.jpg',
  Peach : 'img/Peach.jpg',
  Cream: 'img/cream.jpg',
  Alabaster : 'img/Alabaster.jpg',
  Buff : 'img/buff.jpg',
  Sand : 'img/sand.jpg',
  Golden : 'img/olive.jpg',
  Honey : 'img/bronze.jpg',
  Caramel : 'img/caramel.jpg',
  Amber : 'img/amber.jpg',
  Olive : 'img/olive.jpg',
  Bronze :'img/bronze.jpg' ,
  Sunkissed: 'img/sunkissed.jpg',
  Chestnut :'img/chestnut.jpg' ,
  Toasted : 'img/toasted.jpg',
  Almond : 'img/almond.jpg',
  Warm_Sand : 'img/warm-sand.jpg',
  Cashew : 'img/chewness.jpg',
  Mahogany : 'img/mahogany.jpg',
  Espresso : 'img/espresso.jpg',
  Umber : 'img/umber.jpg',
  Sienna : 'img/sienna.jpg',
  Onyx : 'img/onyx.jpg',
  Charcoal : 'img/charcoal.jpg',
  Cacao : 'img/cocoa.jpg',
  Copper : 'img/copper.jpg',
  Sable : 'img/sable.jpg',
  Ebony : 'img/ebony.jpg',
  Deep_Coffee : 'img/deep-coffee.jpg',
  Midnight : 'img/midnight.jpg',
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
  Warm : 'img/warm tone.jpg',
  Auburn: 'img/auburn.jpg',
  Jet_Black: 'img/jet_black.jpg',
  Ash_brown: 'img/ash_brown.jpg',
  Pearl: 'img/pearl.jpg',
};

/* palette engine – still only needs undertone */

const palettes = {
  Cool: {
    best: [
      "#0F52BA", "#4169E1", "#50C878", "#01796F", "#FF0000", // Royal Blue, Emerald, True Red
      "#DE3163", "#FF00FF", "#C154C1", "#8F00FF", "#9966CC", // Cherry, Fuchsia, Violet
      "#CCCCFF", "#E6E6FA", "#AFDBF5", "#F8C8DC", "#708090", // Periwinkle, Lavender, Pastel Pink
      "#36454F", "#C0C0C0", "#FFFFFF", "#000080", "#000000", // Charcoal, Silver, White, Navy, Black
      "#191970", "#4B0082", "#008080", "#E0B0FF", "#00FFFF"  // Midnight Blue, Indigo, Teal, Mauve, Cyan
    ],
    avoid: ["#fb923c", "#facc15", "#d97706", "#dc2626", "#8B4513", "#FFD700", "#556B2F"] // Orange, Mustard, Brown, Gold, Olive
  },

  Warm: {
    best: [
      "#E2725B", "#B7410E", "#FF7F50", "#FF6347", "#FF7518", // Terra Cotta, Rust, Coral, Orange
      "#FFDB58", "#EAA221", "#C19A6B", "#9A463D", "#7B3F00", // Mustard, Goldenrod, Camel, Chocolate
      "#808000", "#8A9A5B", "#B2AC88", "#FFDAB9", "#FBCEB1", // Olive, Sage, Khaki, Peach, Apricot
      "#CC5500", "#CD7F32", "#FFD700", "#FFFDD0", "#D2B48C", // Burnt Orange, Bronze, Gold, Cream, Tan
      "#556B2F", "#8B4513", "#BC8F8F", "#F4A460", "#DAA520"  // Dark Olive, Saddle Brown, Rosy Brown, Sandy Brown
    ],
    avoid: ["#a855f7", "#7dd3fc", "#ffffff", "#9ca3af", "#FF00FF", "#000080", "#C0C0C0"] // Purple, Icy Blue, Stark White, Grey, Fuchsia, Navy, Silver
  },

  Neutral: {
    best: [
      "#5F9EA0", "#BC8F8F", "#8FBC8F", "#BDB76B", "#CD5C5C", // Cadet Blue, Rosy Brown, Sea Green, Khaki, Indian Red
      "#4682B4", "#D2B48C", "#808080", "#2F4F4F", "#A52A2A", // Steel Blue, Tan, Gray, Slate, Brown
      "#E9967A", "#66CDAA", "#778899", "#D8BFD8", "#EEE8AA", // Dark Salmon, Aquamarine, Light Slate Gray, Thistle
      "#F5F5DC", "#FAF0E6", "#708090", "#DAA520", "#556B2F"  // Beige, Linen, Slate Gray, Goldenrod, Dark Olive
    ],
    avoid: ["#FF00FF", "#39FF14", "#FF3131", "#00FFFF", "#000000", "#FFFFFF"] // Neon Fuchsia, Neon Green, Electric Red, Cyan, Pure Black, Stark White
  }
};

// Clashing color pairs (using nearest color names)
const clashingColors = {
    primary: {
        '#FF0000': ['#0000FF', '#008000'], 
        '#0000FF': ['#FFA500', '#FF0000'],
        '#FFFF00': ['#800080', '#FFC0CB'],
        '#FFA500': ['#0000FF', '#800080'], 
        '#008000': ['#FF0000', '#FFC0CB'], 
        '#800080': ['#FFFF00', '#FFA500'],
        '#FFC0CB': ['#008000', '#FFFF00'] 
    },
    secondary: {
        '#00FFFF': ['#FF0000', '#FFA500'],
        '#FF00FF': ['#008000', '#FFFF00'], 
        '#32CD32': ['#800080', '#FFC0CB'], 
        '#4B0082': ['#FFA500', '#FFFF00'], 
        '#40E0D0': ['#FF0000', '#FFC0CB']  
    }
};

const DATA = {
  /* Sub-skin mini-palettes */
  Porcelain: {
    best: [
      "#FFD1DC", "#E0B0FF", "#F0F8FF", "#B0C4DE", "#E6E6FA", "#AFDBF5", "#F8C8DC", "#FFFFFF", "#C0C0C0", "#0F52BA",
      "#4169E1", "#50C878", "#DE3163", "#FF00FF", "#8F00FF", "#9966CC", "#CCCCFF", "#708090", "#36454F", "#000080",
      "#191970", "#4B0082", "#008080", "#00FFFF", "#4682B4", "#5F9EA0", "#D8BFD8", "#B0E0E6", "#778899", "#E6E6FA"
    ],
    avoid: ["#8B4513", "#fb923c", "#facc15", "#d97706", "#dc2626", "#FFD700", "#556B2F", "#808000", "#CD7F32", "#A52A2A"]
  },

  // 1. IVORY (Fair - Warm/Neutral)
  Ivory: {
    best: [
      "#FFFDD0", "#F0E68C", "#EAA221", "#FFD700", "#FFDAB9", "#FBCEB1", "#FF7F50", "#E2725B", "#FFDB58", "#C19A6B",
      "#8A9A5B", "#B2AC88", "#FFF8DC", "#FAEBD7", "#F5F5DC", "#FAF0E6", "#DEB887", "#D2B48C", "#BC8F8F", "#8FBC8F",
      "#CD7F32", "#DAA520", "#B8860B", "#EEE8AA", "#F4A460", "#E9967A", "#FF7518", "#E2725B", "#9A463D", "#8B4513"
    ],
    avoid: ["#000000", "#191970", "#4B0082", "#000080", "#C0C0C0", "#708090", "#36454F", "#FF00FF", "#00FFFF", "#FFFFFF"]
  },

  // 2. ROSY (Fair - Cool/Pinkish)
  Rosy: {
    best: [
      "#FFC0CB", "#FFB6C1", "#FF69B4", "#DB7093", "#C71585", "#E0B0FF", "#D8BFD8", "#EE82EE", "#DA70D6", "#BA55D3",
      "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080", "#4B0082", "#483D8B", "#6A5ACD", "#7B68EE",
      "#E6E6FA", "#CCCCFF", "#B0C4DE", "#ADD8E6", "#87CEEB", "#87CEFA", "#00BFFF", "#1E90FF", "#6495ED", "#4682B4"
    ],
    avoid: ["#FFA500", "#FF8C00", "#FF4500", "#FFD700", "#FFFF00", "#808000", "#556B2F", "#A52A2A", "#8B4513", "#D2691E"]
  },

  // 3. ALABASTER (Fair - Cool/Neutral Clear)
  Alabaster: {
    best: [
      "#F0F8FF", "#E6F0FA", "#B0C4DE", "#778899", "#708090", "#4682B4", "#5F9EA0", "#B0E0E6", "#AFDBF5", "#E0FFFF",
      "#F0FFFF", "#F5FFFA", "#F0F8FF", "#E6E6FA", "#D8BFD8", "#BDB76B", "#8FBC8F", "#BC8F8F", "#D2B48C", "#C0C0C0",
      "#FFFFFF", "#F5F5F5", "#DCDCDC", "#D3D3D3", "#A9A9A9", "#808080", "#696969", "#191970", "#000080", "#000000"
    ],
    avoid: ["#4B5320", "#556B2F", "#808000", "#B8860B", "#DAA520", "#CD853F", "#A0522D", "#8B4513", "#D2691E", "#FF4500"]
  },

  // 4. PEARL (Fair - Cool/Luminous)
  Pearl: {
    best: [
      "#FBFCF8", "#FFF5EE", "#F5F5DC", "#FAF0E6", "#E6E6FA", "#FFF0F5", "#F0F8FF", "#F5FFFA", "#FDF5E6", "#FFFAF0",
      "#FFFFF0", "#F0FFFF", "#F5F5F5", "#D8BFD8", "#E0B0FF", "#B0C4DE", "#ADD8E6", "#B0E0E6", "#AFDBF5", "#F8C8DC",
      "#C0C0C0", "#E5E4E2", "#D3D3D3", "#BCC6CC", "#98AFC7", "#6D929B", "#E6E6FA", "#CCCCFF", "#F0EAD6", "#E9FFDB"
    ],
    avoid: ["#5D3954", "#4E3524", "#3D2B1F", "#2F4F4F", "#004225", "#800000", "#4A0E0E", "#1B1B1B", "#000080", "#8B008B"]
  },

  // 5. PALE PINK (Fair - Soft/Cool)
  PalePink: {
    best: [
      "#FADADD", "#F8C8DC", "#FFB6C1", "#FFC0CB", "#D8BFD8", "#E6E6FA", "#E0B0FF", "#CCCCFF", "#B0C4DE", "#ADD8E6",
      "#AFDBF5", "#B0E0E6", "#F0F8FF", "#F5F5F5", "#C0C0C0", "#BC8F8F", "#D2B48C", "#8FBC8F", "#5F9EA0", "#4682B4",
      "#6495ED", "#7B68EE", "#9370DB", "#BA55D3", "#DB7093", "#FFD1DC", "#FFF0F5", "#E6E6FA", "#F0FFFF", "#FFFFFF"
    ],
    avoid: ["#D2691E", "#A0522D", "#8B4513", "#CD853F", "#B8860B", "#DAA520", "#FF8C00", "#FF4500", "#808000", "#556B2F"]
  },

  // 1. BEIGE (Light - Neutral/Soft)
  Beige: {
    best: [
      "#F5F5DC", "#F5F5F5", "#8FBC8F", "#BC8F8F", "#D2B48C", "#D3D3D3", "#C0C0C0", "#708090", "#5F9EA0", "#4682B4",
      "#BDB76B", "#CD5C5C", "#E9967A", "#66CDAA", "#778899", "#D8BFD8", "#EEE8AA", "#FAF0E6", "#708090", "#DAA520",
      "#556B2F", "#8A9A5B", "#B2AC88", "#FFF8DC", "#FAEBD7", "#F0EAD6", "#E9FFDB", "#98AFC7", "#BCC6CC", "#808080"
    ],
    avoid: ["#FF00FF", "#39FF14", "#FF3131", "#00FFFF", "#000000", "#FFFFFF", "#FF1493", "#0000FF", "#8B0000", "#FFD700"]
  },

  // 2. PEACH (Light - Warm/Glowing)
  Peach: {
    best: [
      "#FFDAB9", "#FF7F50", "#FF6347", "#FF7518", "#E2725B", "#FFDB58", "#EAA221", "#FBCEB1", "#F4A460", "#DAA520",
      "#CD7F32", "#FFD700", "#FFFDD0", "#D2B48C", "#E9967A", "#EE82EE", "#FFB6C1", "#FFA07A", "#FF8C00", "#FFA500",
      "#CD5C5C", "#F0E68C", "#EEE8AA", "#B8860B", "#D2691E", "#BC8F8F", "#FFD1DC", "#FFB7C5", "#E5AA70", "#FFEFD5"
    ],
    avoid: ["#4169E1", "#000080", "#191970", "#4B0082", "#00FFFF", "#708090", "#C0C0C0", "#808080", "#000000", "#FFFFFF"]
  },

  // 3. CREAM (Light - Warm/Delicate)
  Cream: {
    best: [
      "#FFFDD0", "#F0E68C", "#FAF0E6", "#FFF8DC", "#FAEBD7", "#FDF5E6", "#FFFAF0", "#FFFFF0", "#F5F5DC", "#FFE4B5",
      "#FFEFD5", "#FFEBCD", "#FFE4C4", "#FFDEAD", "#F5DEB3", "#DEB887", "#D2B48C", "#BC8F8F", "#DAA520", "#B8860B",
      "#CD7F32", "#E9967A", "#FFA07A", "#FF7F50", "#FFDAB9", "#F4A460", "#8A9A5B", "#B2AC88", "#8FBC8F", "#9ACD32"
    ],
    avoid: ["#000080", "#191970", "#4B0082", "#8B0000", "#000000", "#708090", "#483D8B", "#2F4F4F", "#006400", "#4A0E0E"]
  },

  // 4. BUFF (Light - Neutral/Muted)
  Buff: {
    best: [
      "#F0DC82", "#DEB887", "#D2B48C", "#BC8F8F", "#8A9A5B", "#B2AC88", "#8FBC8F", "#5F9EA0", "#4682B4", "#778899",
      "#708090", "#D3D3D3", "#C0C0C0", "#BDB76B", "#CD5C5C", "#E9967A", "#EEE8AA", "#FAF0E6", "#F5F5DC", "#F0E68C",
      "#E5AA70", "#D2B48C", "#D2691E", "#CD7F32", "#DAA520", "#B8860B", "#9ACD32", "#6B8E23", "#556B2F", "#A0522D"
    ],
    avoid: ["#FF0000", "#FF00FF", "#0000FF", "#00FFFF", "#39FF14", "#FF3131", "#FFFFFF", "#000000", "#4B0082", "#FF1493"]
  },

  // 5. SAND (Light - Neutral/Warm)
  Sand: {
    best: [
      "#C2B280", "#BC8F8F", "#D2B48C", "#8FBC8F", "#8A9A5B", "#B2AC88", "#DEB887", "#F5F5DC", "#FAF0E6", "#F0E68C","#CD7F32", "#DAA520", "#B8860B", "#BDB76B", "#CD5C5C", "#E9967A", "#66CDAA", "#778899", "#708090", "#5F9EA0","#4682B4", "#B0C4DE", "#EEE8AA", "#FFF8DC", "#E5AA70", "#F4A460", "#D2691E", "#A0522D", "#8B4513", "#556B2F"
    ],
    avoid: ["#708090", "#000080", "#191970", "#4B0082", "#FF00FF", "#00FFFF", "#FFFFFF", "#000000", "#FF1493", "#483D8B"]
  },
  
 // 1. GOLDEN
  Golden: {
    best: ["#FFD700", "#DAA520", "#B8860B", "#EEBC1D", "#FFBF00", "#F4A460", "#E2725B", "#B7410E", "#FF7F50", "#FF6347", "#FF7518", "#EAA221", "#C19A6B", "#9A463D", "#7B3F00", "#808000", "#8A9A5B", "#B2AC88", "#CC5500", "#CD7F32", "#BC8F8F", "#B22222", "#006400", "#556B2F", "#8B4513", "#A0522D", "#D2691E", "#CD853F", "#E9967A", "#FFA07A"],
    avoid: ["#E6E6FA", "#CCCCFF", "#AFDBF5", "#F8C8DC", "#C0C0C0", "#FFFFFF", "#a855f7", "#7dd3fc", "#FF00FF", "#000080"]
  },
  // 2. HONEY
  Honey: {
    best: ["#EB9605", "#F9A602", "#E2725B", "#FF7F50", "#FFDAB9", "#FBCEB1", "#F4A460", "#DAA520", "#CD7F32", "#B8860B", "#9A463D", "#8B4513", "#A52A2A", "#D2691E", "#CD853F", "#BC8F8F", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#EAA221", "#C19A6B", "#7B3F00", "#808000", "#8A9A5B", "#B2AC88", "#556B2F", "#A0522D", "#B22222"],
    avoid: ["#CCCCFF", "#B0C4DE", "#E6E6FA", "#AFDBF5", "#F8C8DC", "#FFFFFF", "#C0C0C0", "#00FFFF", "#FF00FF", "#000080"]
  },
  // 3. CARAMEL
  Caramel: {
    best: ["#AF6F09", "#825103", "#A52A2A", "#8B4513", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#DAA520", "#B8860B", "#EAA221", "#C19A6B", "#B2AC88", "#B22222", "#006400", "#228B22", "#483C32", "#5D3A1A", "#3D2B1F", "#654321", "#966919", "#E5AA70"],
    avoid: ["#AFDBF5", "#E0FFFF", "#F0FFFF", "#FFFFFF", "#C0C0C0", "#E6E6FA", "#FF00FF", "#00FFFF", "#708090", "#D3D3D3"]
  },
  // 4. AMBER
  Amber: {
    best: ["#FFBF00", "#FFD700", "#FF8C00", "#FF4500", "#FF7F50", "#E2725B", "#CD7F32", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#D2691E", "#B7410E", "#CC5500", "#EAA221", "#F4A460", "#BC8F8F", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#C19A6B", "#9A463D", "#7B3F00", "#808000", "#8A9A5B", "#B2AC88", "#556B2F", "#B22222"],
    avoid: ["#F8C8DC", "#FFD1DC", "#E6E6FA", "#CCCCFF", "#AFDBF5", "#FFFFFF", "#C0C0C0", "#00FFFF", "#FF00FF", "#000080"]
  },
  // 5. SUNKISSED
  Sunkissed: {
    best: ["#F4A460", "#FF4500", "#FF8C00", "#FFD700", "#FF7F50", "#E2725B", "#CD7F32", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#D2691E", "#B7410E", "#CC5500", "#EAA221", "#FFBF00", "#BC8F8F", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#C19A6B", "#9A463D", "#7B3F00", "#808000", "#8A9A5B", "#B2AC88", "#556B2F", "#B22222"],
    avoid: ["#C0C0C0", "#D3D3D3", "#DCDCDC", "#FFFFFF", "#E6E6FA", "#CCCCFF", "#AFDBF5", "#F8C8DC", "#FF00FF", "#00FFFF"]
  },
  // 6. TOASTED
  Toasted: {
    best: ["#966919", "#4E3524", "#3D2B1F", "#654321", "#8B4513", "#A52A2A", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#DAA520", "#B8860B", "#EAA221", "#C19A6B", "#B2AC88", "#B22222", "#006400", "#228B22", "#483C32", "#5D3A1A", "#AF6F09", "#E5AA70"],
    avoid: ["#FFFFFF", "#F5F5F5", "#DCDCDC", "#D3D3D3", "#E6E6FA", "#CCCCFF", "#AFDBF5", "#F8C8DC", "#FF00FF", "#00FFFF"]
  },

 // 1. OLIVE
  Olive: {
    best: ["#808000", "#B22222", "#CD7F32", "#006400", "#954535", "#3D2B1F", "#556B2F", "#DAA520", "#8B4513", "#A52A2A", "#E2725B", "#B7410E", "#FF7F50", "#FF6347", "#FF7518", "#FFDB58", "#EAA221", "#C19A6B", "#9A463D", "#7B3F00", "#8A9A5B", "#B2AC88", "#FFDAB9", "#FBCEB1", "#CC5500", "#FFFDD0", "#D2B48C", "#5F9EA0", "#BC8F8F", "#8FBC8F"],
    avoid: ["#FFC0CB", "#CCCCFF", "#F0F8FF", "#B0C4DE", "#E6E6FA", "#AFDBF5", "#F8C8DC", "#FF00FF", "#00FFFF", "#FFFFFF"]
  },
  // 2. BRONZE
  Bronze: {
    best: ["#CD7F32", "#804A00", "#A52A2A", "#8B4513", "#7B3F00", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#DAA520", "#B8860B", "#EAA221", "#C19A6B", "#B2AC88", "#B22222", "#006400", "#228B22", "#483C32", "#5D3A1A", "#3D2B1F", "#654321", "#966919", "#AF6F09", "#E5AA70"],
    avoid: ["#CCCCFF", "#AFDBF5", "#E0FFFF", "#F8C8DC", "#FFFFFF", "#C0C0C0", "#E6E6FA", "#FF00FF", "#00FFFF", "#D3D3D3"]
  },
  // 3. CHESTNUT
  Chestnut: {
    best: ["#954535", "#3D2B1F", "#8B4513", "#A52A2A", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#DAA520", "#B8860B", "#EAA221", "#C19A6B", "#B2AC88", "#B22222", "#006400", "#228B22", "#483C32", "#5D3A1A", "#654321", "#966919", "#AF6F09", "#E5AA70"],
    avoid: ["#00FFFF", "#AFDBF5", "#E0FFFF", "#F0FFFF", "#FFFFFF", "#C0C0C0", "#E6E6FA", "#FF00FF", "#0000FF", "#D3D3D3"]
  },
  // 4. ALMOND
  Almond: {
    best: ["#EFDECD", "#D2B48C", "#E5AA70", "#BC8F8F", "#8A9A5B", "#B2AC88", "#8FBC8F", "#5F9EA0", "#4682B4", "#778899", "#708090", "#D3D3D3", "#C0C0C0", "#BDB76B", "#CD5C5C", "#E9967A", "#EEE8AA", "#FAF0E6", "#F5F5DC", "#F0E68C", "#CD7F32", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#556B2F", "#2F4F4F", "#BC8F8F", "#5D3954", "#483C32"],
    avoid: ["#39FF14", "#FF3131", "#FF00FF", "#00FFFF", "#FFFFFF", "#000000", "#FF1493", "#FF0000", "#0000FF", "#4B0082"]
  },
  // 5. WARM SAND
  Warm_Sand: {
    best: ["#E5AA70", "#D2B48C", "#BC8F8F", "#8A9A5B", "#B2AC88", "#8FBC8F", "#5F9EA0", "#4682B4", "#778899", "#708090", "#D3D3D3", "#C0C0C0", "#BDB76B", "#CD5C5C", "#E9967A", "#EEE8AA", "#FAF0E6", "#F5F5DC", "#F0E68C", "#CD7F32", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#556B2F", "#B22222", "#006400", "#BC8F8F", "#CD853F", "#A0522D"],
    avoid: ["#FF3131", "#FF00FF", "#00FFFF", "#FFFFFF", "#000000", "#FF1493", "#FF0000", "#0000FF", "#4B0082", "#483D8B"]
  },
  // 6. CASHEW
  Cashew: {
    best: ["#D2B48C", "#E5AA70", "#BC8F8F", "#8A9A5B", "#B2AC88", "#8FBC8F", "#5F9EA0", "#4682B4", "#778899", "#708090", "#D3D3D3", "#C0C0C0", "#BDB76B", "#CD5C5C", "#E9967A", "#EEE8AA", "#FAF0E6", "#F5F5DC", "#F0E68C", "#CD7F32", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#556B2F", "#B22222", "#006400", "#483C32", "#5D3A1A", "#3D2B1F"],
    avoid: ["#0000FF", "#FF00FF", "#00FFFF", "#FFFFFF", "#000000", "#FF1493", "#FF0000", "#4B0082", "#39FF14", "#FF3131"]
  },

  // 1. MAHOGANY
  Mahogany: {
    best: ["#C04000", "#FFD700", "#8B0000", "#800000", "#A52A2A", "#B22222", "#CD7F32", "#DAA520", "#B8860B", "#E2725B", "#B7410E", "#CC5500", "#A0522D", "#8B4513", "#4E3524", "#3D2B1F", "#006400", "#556B2F", "#008080", "#191970", "#4B0082", "#800080", "#FF8C00", "#BC8F8F", "#9A463D", "#7B3F00", "#966919", "#5D3A1A", "#654321", "#3B271E"],
    avoid: ["#708090", "#D3D3D3", "#F5F5DC", "#E6E6FA", "#AFDBF5", "#F8C8DC", "#CCCCFF", "#E0FFFF", "#FFFFFF", "#C0C0C0"]
  },
  // 2. ESPRESSO
  Espresso: {
    best: ["#3D2B1F", "#008080", "#191970", "#000080", "#000000", "#36454F", "#2F4F4F", "#004225", "#800000", "#4A0E0E", "#4B0082", "#800080", "#C04000", "#8B4513", "#A52A2A", "#DAA520", "#CD7F32", "#556B2F", "#006400", "#01796F", "#0F52BA", "#4169E1", "#50C878", "#DE3163", "#FF0000", "#8B008B", "#483D8B", "#2E8B57", "#2F4F4F", "#3D2B1F"],
    avoid: ["#F5F5DC", "#FFF8DC", "#FAEBD7", "#F0EAD6", "#E9FFDB", "#FFFDD0", "#FFFFFF", "#F8C8DC", "#FFB6C1", "#E6E6FA"]
  },
  // 3. UMBER
  Umber: {
    best: ["#635147", "#4E3524", "#3D2B1F", "#654321", "#8B4513", "#A52A2A", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#DAA520", "#B8860B", "#EAA221", "#C19A6B", "#B2AC88", "#B22222", "#006400", "#228B22", "#483C32", "#5D3A1A", "#AF6F09", "#3B271E"],
    avoid: ["#FFFFFF", "#F5F5F5", "#DCDCDC", "#D3D3D3", "#E6E6FA", "#CCCCFF", "#AFDBF5", "#F8C8DC", "#FF00FF", "#00FFFF"]
  },
  // 4. SIENNA
  Sienna: {
    best: ["#A0522D", "#E2725B", "#B7410E", "#CC5500", "#CD7F32", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#D2691E", "#FF7F50", "#FF6347", "#FF7518", "#EAA221", "#C19A6B", "#9A463D", "#7B3F00", "#808000", "#8A9A5B", "#B2AC88", "#BC8F8F", "#E9967A", "#FFA07A", "#FFDB58", "#556B2F", "#B22222", "#006400", "#483C32", "#5D3A1A", "#3D2B1F"],
    avoid: ["#708090", "#AFDBF5", "#E0FFFF", "#F0FFFF", "#FFFFFF", "#C0C0C0", "#E6E6FA", "#FF00FF", "#00FFFF", "#D3D3D3"]
  },
  // 5. CACAO
  Cacao: {
    best: ["#4E3629", "#3D2B1F", "#654321", "#8B4513", "#A52A2A", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#DAA520", "#B8860B", "#EAA221", "#C19A6B", "#B2AC88", "#B22222", "#006400", "#228B22", "#483C32", "#5D3A1A", "#AF6F09", "#966919", "#3B271E"],
    avoid: ["#FFFFFF", "#F8C8DC", "#FFD1DC", "#E6E6FA", "#CCCCFF", "#AFDBF5", "#C0C0C0", "#00FFFF", "#FF00FF", "#000080"]
  },
  // 6. COPPER
  Copper: {
    best: ["#B87333", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#DAA520", "#B8860B", "#EAA221", "#FFD700", "#FF8C00", "#FF4500", "#FF7F50", "#A52A2A", "#8B4513", "#BC8F8F", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#C19A6B", "#7B3F00", "#808000", "#8A9A5B", "#B2AC88", "#556B2F", "#B22222"],
    avoid: ["#C0C0C0", "#AFDBF5", "#E0FFFF", "#F8C8DC", "#FFFFFF", "#E6E6FA", "#FF00FF", "#00FFFF", "#D3D3D3", "#708090"]
  },
  // 1. ONYX
  Onyx: {
    best: ["#353935", "#000000", "#191970", "#000080", "#36454F", "#2F4F4F", "#004225", "#800000", "#4A0E0E", "#4B0082", "#800080", "#E31D12", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF00FF", "#8F00FF", "#9966CC", "#C0C0C0", "#FFFFFF", "#00FFFF", "#4682B4", "#778899", "#2E8B57", "#8B0000", "#8B008B", "#483D8B", "#00008B"],
    avoid: ["#BDB76B", "#F5F5DC", "#FFF8DC", "#FAEBD7", "#F0EAD6", "#E9FFDB", "#FFFDD0", "#D3D3D3", "#BC8F8F", "#D2B48C"]
  },
  // 2. CHARCOAL
  Charcoal: {
    best: ["#36454F", "#2F4F4F", "#708090", "#191970", "#000080", "#000000", "#C0C0C0", "#FFFFFF", "#00FFFF", "#4682B4", "#5F9EA0", "#778899", "#B0C4DE", "#ADD8E6", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF00FF", "#8F00FF", "#9966CC", "#CCCCFF", "#E6E6FA", "#4B0082", "#800080", "#2E8B57", "#8B0000", "#8B008B", "#483D8B"],
    avoid: ["#A52A2A", "#8B4513", "#D2691E", "#CD853F", "#A0522D", "#B8860B", "#DAA520", "#FF4500", "#808000", "#556B2F"]
  },
  // 3. SABLE
  Sable: {
    best: ["#060606", "#1B1B1B", "#191970", "#000080", "#000000", "#36454F", "#2F4F4F", "#004225", "#800000", "#4A0E0E", "#4B0082", "#800080", "#8B4513", "#A52A2A", "#DAA520", "#CD7F32", "#556B2F", "#006400", "#01796F", "#0F52BA", "#4169E1", "#50C878", "#DE3163", "#FF0000", "#8B008B", "#483D8B", "#2E8B57", "#2F4F4F", "#191970", "#00008B"],
    avoid: ["#D3D3D3", "#BC8F8F", "#D2B48C", "#F5F5DC", "#FFF8DC", "#FAEBD7", "#F0EAD6", "#E9FFDB", "#FFFDD0", "#FFFFFF"]
  },
  // 4. EBONY
  Ebony: {
    best: ["#555D50", "#000000", "#191970", "#000080", "#36454F", "#2F4F4F", "#004225", "#800000", "#4A0E0E", "#4B0082", "#800080", "#FFD700", "#DAA520", "#CD7F32", "#A52A2A", "#8B4513", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF0000", "#8B008B", "#483D8B", "#2E8B57", "#2F4F4F", "#00008B", "#B8860B", "#4E3524", "#006400"],
    avoid: ["#D3D3D3", "#F5F5DC", "#FFF8DC", "#FAEBD7", "#F0EAD6", "#E9FFDB", "#FFFDD0", "#FFFFFF", "#AFDBF5", "#F8C8DC"]
  },
  // 5. DEEP COFFEE
  Deep_Coffee: {
    best: ["#3B271E", "#4E3524", "#3D2B1F", "#654321", "#8B4513", "#A52A2A", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#DAA520", "#B8860B", "#EAA221", "#C19A6B", "#B2AC88", "#B22222", "#006400", "#228B22", "#483C32", "#5D3A1A", "#AF6F09", "#966919"],
    avoid: ["#F5F5DC", "#FFFDD0", "#FFFFFF", "#E6E6FA", "#CCCCFF", "#AFDBF5", "#F8C8DC", "#FF00FF", "#00FFFF", "#D3D3D3"]
  },
  // 6. MIDNIGHT
  Midnight: {
    best: ["#191970", "#000033", "#000080", "#000000", "#36454F", "#2F4F4F", "#004225", "#800000", "#4A0E0E", "#4B0082", "#800080", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF00FF", "#8F00FF", "#9966CC", "#C0C0C0", "#FFFFFF", "#00FFFF", "#4682B4", "#778899", "#2E8B57", "#8B0000", "#8B008B", "#483D8B", "#00008B", "#2F4F4F"],
    avoid: ["#D2B48C", "#F5F5DC", "#FFF8DC", "#FAEBD7", "#F0EAD6", "#E9FFDB", "#FFFDD0", "#D3D3D3", "#BC8F8F", "#BDB76B"]
  },

  /* --- HAIR COLORS --- */
  Blonde_cool: {
    best: ["#B0E0E6", "#E6E6FA", "#ADD8E6", "#B0C4DE", "#F0F8FF", "#CCCCFF", "#AFDBF5", "#F8C8DC", "#E0B0FF", "#D8BFD8", "#F5F5F5", "#C0C0C0", "#778899", "#708090", "#4682B4", "#5F9EA0", "#8FBC8F", "#BC8F8F", "#D2B48C", "#BDB76B", "#FFFFFF", "#AFDBF5", "#87CEEB", "#00BFFF", "#1E90FF", "#6495ED", "#4169E1", "#0F52BA", "#50C878", "#01796F"],
    avoid: ["#FFA500", "#FF8C00", "#FF4500", "#FFD700", "#8B4513", "#D2691E", "#CD853F", "#A0522D", "#B8860B", "#DAA520"]
  },
  Blonde_warm: {
    best: ["#FFD700", "#FF7F50", "#FFDAB9", "#FBCEB1", "#F4A460", "#DAA520", "#B8860B", "#FFFDD0", "#F0E68C", "#EAA221", "#C19A6B", "#9A463D", "#7B3F00", "#808000", "#8A9A5B", "#B2AC88", "#CC5500", "#CD7F32", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#D2B48C", "#A52A2A", "#8B4513", "#CD7F32", "#BC8F8F", "#8FBC8F", "#9ACD32"],
    avoid: ["#4169E1", "#000080", "#191970", "#4B0082", "#FF00FF", "#00FFFF", "#FFFFFF", "#C0C0C0", "#E6E6FA", "#708090"]
  },
  Red: {
    best: ["#006400", "#8B0000", "#228B22", "#556B2F", "#808000", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#D2691E", "#B7410E", "#CC5500", "#EAA221", "#FFD700", "#FF8C00", "#FF4500", "#FF7F50", "#E2725B", "#9A463D", "#7B3F00", "#BC8F8F", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#C19A6B", "#B22222", "#CD7F32", "#8A9A5B"],
    avoid: ["#FF00FF", "#00FFFF", "#AFDBF5", "#F8C8DC", "#E6E6FA", "#CCCCFF", "#FFFFFF", "#C0C0C0", "#000080", "#4B0082"]
  },
  Auburn: {
    best: ["#A52A2A", "#DAA520", "#B8860B", "#8B4513", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#CC5500", "#EAA221", "#FFD700", "#FF8C00", "#FF4500", "#FF7F50", "#E2725B", "#9A463D", "#808000", "#8A9A5B", "#556B2F", "#006400", "#B22222", "#BC8F8F", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#C19A6B", "#483C32"],
    avoid: ["#0000FF", "#00FFFF", "#AFDBF5", "#F8C8DC", "#E6E6FA", "#CCCCFF", "#FFFFFF", "#C0C0C0", "#FF00FF", "#191970"]
  },
  Light_brown: {
    best: ["#D2B48C", "#5F9EA0", "#BC8F8F", "#8FBC8F", "#8A9A5B", "#B2AC88", "#DEB887", "#F5F5DC", "#FAF0E6", "#F0E68C", "#CD7F32", "#DAA520", "#B8860B", "#BDB76B", "#CD5C5C", "#E9967A", "#66CDAA", "#778899", "#708090", "#4682B4", "#B0C4DE", "#EEE8AA", "#FFF8DC", "#E5AA70", "#F4A460", "#D2691E", "#A0522D", "#8B4513", "#556B2F", "#5D3954"],
    avoid: ["#FF0000", "#FF00FF", "#0000FF", "#00FFFF", "#39FF14", "#FF3131", "#FFFFFF", "#000000", "#4B0082", "#FF1493"]
  },
  Dark_brown: {
    best: ["#654321", "#E9967A", "#8B4513", "#A52A2A", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#CC5500", "#EAA221", "#DAA520", "#B8860B", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#006400", "#B22222", "#008080", "#191970", "#4B0082", "#800080", "#3D2B1F", "#4E3524", "#966919", "#AF6F09", "#E5AA70", "#F4A460", "#3B271E"],
    avoid: ["#F0F8FF", "#B0C4DE", "#E6E6FA", "#AFDBF5", "#F8C8DC", "#FFFFFF", "#C0C0C0", "#E0FFFF", "#F0FFFF", "#F5F5DC"]
  },
  Ash_brown: {
    best: ["#708090", "#8FBC8F", "#5F9EA0", "#4682B4", "#778899", "#D3D3D3", "#C0C0C0", "#BDB76B", "#BC8F8F", "#D2B48C", "#8A9A5B", "#B2AC88", "#E6E6FA", "#CCCCFF", "#B0C4DE", "#ADD8E6", "#B0E0E6", "#AFDBF5", "#F8C8DC", "#E0B0FF", "#D8BFD8", "#4B0082", "#800080", "#2F4F4F", "#36454F", "#2E8B57", "#191970", "#000080", "#000000", "#FFFFFF"],
    avoid: ["#FFD700", "#FFA500", "#FF8C00", "#FF4500", "#8B4513", "#D2691E", "#CD853F", "#A0522D", "#B8860B", "#DAA520"]
  },
  Black: {
    best: ["#000000", "#FF0000", "#191970", "#000080", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF00FF", "#8F00FF", "#9966CC", "#36454F", "#2F4F4F", "#C0C0C0", "#FFFFFF", "#00FFFF", "#4682B4", "#778899", "#4B0082", "#800080", "#B22222", "#8B0000", "#008080", "#2E8B57", "#8B008B", "#483D8B", "#00008B", "#191970", "#483C32"],
    avoid: ["#F5F5DC", "#D2B48C", "#FFF8DC", "#FAEBD7", "#F0EAD6", "#E9FFDB", "#FFFDD0", "#BC8F8F", "#BDB76B", "#CD853F"]
  },
  Jet_Black: {
    best: ["#000080", "#FF1493", "#000000", "#FF0000", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF00FF", "#C154C1", "#8F00FF", "#9966CC", "#36454F", "#C0C0C0", "#FFFFFF", "#191970", "#4B0082", "#008080", "#00FFFF", "#4682B4", "#778899", "#2F4F4F", "#800080", "#B22222", "#00008B", "#483D8B", "#2E8B57", "#8B0000", "#191970"],
    avoid: ["#808000", "#F5F5DC", "#D2B48C", "#FFF8DC", "#F0E68C", "#E9967A", "#BC8F8F", "#D2691E", "#CD853F", "#A0522D"]
  },
  Grey_silver: {
    best: ["#C0C0C0", "#4B0082", "#708090", "#36454F", "#191970", "#000080", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF00FF", "#8F00FF", "#9966CC", "#CCCCFF", "#E6E6FA", "#B0C4DE", "#ADD8E6", "#B0E0E6", "#AFDBF5", "#F8C8DC", "#E0B0FF", "#D8BFD8", "#FFFFFF", "#00FFFF", "#4682B4", "#778899", "#2E8B57", "#8B0000", "#8B008B"],
    avoid: ["#A52A2A", "#8B4513", "#D2691E", "#CD853F", "#A0522D", "#B8860B", "#DAA520", "#FF4500", "#808000", "#556B2F"]
  },

  /* --- EYE COLORS --- */
  Blue: {
    best: ["#F0F8FF", "#000080", "#B0E0E6", "#E6E6FA", "#ADD8E6", "#B0C4DE", "#AFDBF5", "#F8C8DC", "#E0B0FF", "#D8BFD8", "#F5F5F5", "#C0C0C0", "#778899", "#708090", "#4682B4", "#5F9EA0", "#8FBC8F", "#BC8F8F", "#D2B48C", "#BDB76B", "#FFFFFF", "#87CEEB", "#00BFFF", "#1E90FF", "#6495ED", "#4169E1", "#0F52BA", "#50C878", "#01796F", "#191970"],
    avoid: ["#8B4513", "#D2691E", "#CD853F", "#A0522D", "#B8860B", "#DAA520", "#FF4500", "#FFA500", "#FF8C00", "#808000"]
  },
  Green: {
    best: ["#E0FFE0", "#228B22", "#006400", "#556B2F", "#808000", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#D2691E", "#B7410E", "#CC5500", "#EAA221", "#FFD700", "#FF8C00", "#FF4500", "#FF7F50", "#E2725B", "#9A463D", "#7B3F00", "#BC8F8F", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#C19A6B", "#B22222", "#CD7F32", "#8A9A5B"],
    avoid: ["#FF00FF", "#C154C1", "#8F00FF", "#9966CC", "#CCCCFF", "#E6E6FA", "#F8C8DC", "#FFB6C1", "#FFFFFF", "#C0C0C0"]
  },
  Hazel: {
    best: ["#BDB76B", "#556B2F", "#808000", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#D2691E", "#CD7F32", "#BC8F8F", "#8A9A5B", "#B2AC88", "#EAA221", "#FFD700", "#FF8C00", "#FF4500", "#FF7F50", "#E2725B", "#9A463D", "#7B3F00", "#006400", "#228B22", "#BC8F8F", "#E9967A", "#FFA07A", "#FF6347", "#FF7518", "#FFDB58", "#C19A6B", "#483C32"],
    avoid: ["#00FFFF", "#AFDBF5", "#E0FFFF", "#F0FFFF", "#FFFFFF", "#C0C0C0", "#E6E6FA", "#FF00FF", "#0000FF", "#D3D3D3"]
  },
  Light__brown: {
    best: ["#DEB887", "#DAA520", "#B8860B", "#D2B48C", "#BC8F8F", "#8A9A5B", "#B2AC88", "#8FBC8F", "#5F9EA0", "#4682B4", "#778899", "#708090", "#D3D3D3", "#C0C0C0", "#BDB76B", "#CD5C5C", "#E9967A", "#EEE8AA", "#FAF0E6", "#F5F5DC", "#F0E68C", "#CD7F32", "#DAA520", "#B8860B", "#A52A2A", "#8B4513", "#556B2F", "#B22222", "#006400", "#CD853F"],
    avoid: ["#4169E1", "#000080", "#191970", "#4B0082", "#FF00FF", "#00FFFF", "#FFFFFF", "#000000", "#FF1493", "#483D8B"]
  },
  Dark__brown: {
    best: ["#8B4513", "#3D2B1F", "#A52A2A", "#7B3F00", "#CD7F32", "#D2691E", "#A0522D", "#B7410E", "#E2725B", "#9A463D", "#CC5500", "#DAA520", "#B8860B", "#BC8F8F", "#8A9A5B", "#556B2F", "#808000", "#006400", "#B22222", "#008080", "#191970", "#4B0082", "#800080", "#4E3524", "#966919", "#AF6F09", "#E5AA70", "#F4A460", "#3B271E", "#2F4F4F"],
    avoid: ["#E0FFFF", "#F0FFFF", "#F5F5DC", "#FFFDD0", "#FFFFFF", "#C0C0C0", "#E6E6FA", "#CCCCFF", "#AFDBF5", "#F8C8DC"]
  },
  Black1: {
    best: ["#000000", "#FFFFFF", "#191970", "#000080", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF00FF", "#8F00FF", "#9966CC", "#36454F", "#C0C0C0", "#00FFFF", "#4682B4", "#778899", "#4B0082", "#800080", "#B22222", "#8B0000", "#008080", "#2E8B57", "#8B008B", "#483D8B", "#00008B", "#191970", "#483C32", "#FF0000", "#2F4F4F"],
    avoid: ["#808080", "#A9A9A9", "#D3D3D3", "#F5F5DC", "#D2B48C", "#BC8F8F", "#BDB76B", "#CD853F", "#A0522D", "#8B4513"]
  },
  Grey: {
    best: ["#708090", "#E6E6FA", "#C0C0C0", "#36454F", "#191970", "#000080", "#0F52BA", "#4169E1", "#50C878", "#01796F", "#DE3163", "#FF00FF", "#8F00FF", "#9966CC", "#CCCCFF", "#B0C4DE", "#ADD8E6", "#B0E0E6", "#AFDBF5", "#F8C8DC", "#E0B0FF", "#D8BFD8", "#FFFFFF", "#00FFFF", "#4682B4", "#778899", "#2E8B57", "#8B0000", "#8B008B", "#483D8B"],
    avoid: ["#D2691E", "#A0522D", "#8B4513", "#CD853F", "#B8860B", "#DAA520", "#FF4500", "#FFA500", "#FF8C00", "#808000"]
  }
};

/* ---------- MAKE-UP TEXT SUGGESTIONS ---------- */
const MAKEUP_TEXT = {
  Fair: {
    Cool: {
      Foundation: "True cocoa, neutral deep brown, deep almond, sable, soft mocha",
      Blush:      "Golden plum, neutral berry, rich rose, soft auburn, muted raisin",
      Lipstick:   "Balanced wine, dark mauve, deep nude, muted burgundy, brown rose",
      Eyeshadow:  "Rich taupe, rose bronze, neutral brown, copper taupe, deep matte beige",
      Haircolor: "Platinum Blonde, Ash Brown, Jet Black, Cool Burgundy/Plum",
      Nails: "Soft Pink, Nude roses, Royal Blue, Navy, Silver, Chrome, Clissix Berry, Cool Red",
      Lenses: "Soft Grey or Muted Blue to keep your look natural and fresh."
    },
    Warm: {
      Foundation: "Warm porcelain, golden beige, soft ivory, peachy tan, light caramel",
      Blush:      "Apricot, coral peach, warm rose, golden apricot, soft terracotta",
      Lipstick:   "Warm nude, peachy rose, coral pink, brick rose, burnt sienna",
      Eyeshadow:  "Warm sand, peachy bronze, soft copper, camel, muted gold",
      Haircolor: "Golden Blonde, Warm Auburn, Copper, Golden Brown, Honey Blonde, Strawberry Blonde, Caramel Highlights",
      Nails: "Coral, Peach, Warm Red, Gold, Bronze, Copper, Terra Cotta, Warm Taupe, Tomato Red",
      Lenses: "Warm honey or golden brown lenses can enhance your natural warmth."
    },
    Neutral: {
      Foundation: "Neutral fair, soft beige, balanced ivory, light almond, muted peach",
      Blush:      "Dusty rose, neutral mauve, muted berry, soft plum, rosewood",
      Lipstick:   "Rose nude, dusty mauve, muted berry, soft plum, rose-brown",
      Eyeshadow:  "Soft taupe, dusty mauve, neutral brown, muted rose, cool beige",
      Haircolor: "Neutral Blonde, Light Brown, Soft Black, Chestnut Brown",
      Nails: "Mauve, Dusty Pink, Soft Brown, Neutral Red, Rose Gold, Champagne, Soft Taupe, Plum, Berry",
      Lenses: "Neutral hazel or soft brown lenses will complement your balanced features."
    }
  },

  /* Repeat the same structure for the other 5 surface tones */
  Light: {
    Cool: {
      Foundation: "Cool beige, soft fawn, porcelain beige, light cocoa, neutral sand",
      Blush:      "Mauve rose, cool berry, soft plum, dusty rose, muted raspberry",
      Lipstick:   "Mauve nude, cool rose, berry mauve, soft plum, cool burgundy",
      Eyeshadow:  "Cool taupe, soft mauve, muted plum, grey-brown, slate",
      Haircolor: "Ash Blonde, Cool Brown, Black, Cool Red, Blue Black",
      Nails: "Plum, Mauve, Cool Red, Silver, Gunmetal, Charcoal, Blue Black, Icy Pink, Cool Berry",
      Lenses: "Cool blue or grey lenses can enhance your natural cool undertones."
    },
    Warm: {
      Foundation: "Warm beige, golden fawn, soft caramel, light tan, warm sand",
      Blush:      "Warm peach, soft apricot, coral rose, golden rose, soft brick",
      Lipstick:   "Warm rose, peachy nude, coral mauve, soft terracotta, cinnamon",
      Eyeshadow:  "Warm bronze, soft copper, camel, muted peach, golden beige",
      Haircolor: "Golden Blonde, Warm Brown, Auburn, Caramel, Honey Highlights",
      Nails: "Coral, Peach, Warm Red, Gold, Bronze, Copper, Terra Cotta, Warm Taupe, Tomato Red",
      Lenses: "Warm amber or honey brown lenses can enhance your natural warmth."
    },
    Neutral: {
      Foundation: "Neutral beige, balanced fawn, soft tan, light almond, muted caramel",
      Blush:      "Neutral rose, soft berry, muted apricot, dusty peach, rose-taupe",
      Lipstick:   "Neutral mauve, soft berry, dusty rose, balanced plum, nude-rose",
      Eyeshadow:  "Neutral taupe, soft brown, muted rose, balanced beige, stone",
      Haircolor: "Neutral Blonde, Light Brown, Soft Black, Chestnut Brown",
      Nails: "Mauve, Dusty Pink, Soft Brown, Neutral Red, Rose Gold, Champagne, Soft Taupe, Plum, Berry",
      Lenses: "Neutral hazel or soft brown lenses will complement your balanced features."
    }
  },

  Tan: {
    Cool: {
      Foundation: "Cool tan, soft walnut, neutral bronze, medium almond, cocoa",
      Blush:      "Deep berry, cool plum, rich mauve, soft raisin, muted wine",
      Lipstick:   "Berry wine, cool plum, mauve brown, deep berry, cool burgundy",
      Eyeshadow:  "Cool bronze, soft plum, taupe-brown, muted charcoal, cool cocoa",
      Haircolor: "Ash Brown, Cool Brown, Black, Cool Red, Blue Black",
      Nails: "Plum, Mauve, Cool Red, Silver, Gunmetal, Charcoal, Blue Black, Icy Pink, Cool Berry",
      Lenses: "Cool grey or deep blue lenses can enhance your cool undertones."
    },
    Warm: {
      Foundation: "Warm tan, golden bronze, soft caramel, toasted almond, honey",
      Blush:      "Warm coral, soft cinnamon, golden berry, apricot, soft rust",
      Lipstick:   "Warm terracotta, soft brick, coral brown, cinnamon, burnt rose",
      Eyeshadow:  "Warm bronze, copper brown, soft rust, camel, golden khaki",
      Haircolor: "Golden Blonde, Warm Brown, Auburn, Caramel, Honey Highlights",
      Nails: "Coral, Peach, Warm Red, Gold, Bronze, Copper, Terra Cotta, Warm Taupe, Tomato Red",
      Lenses: "Warm amber or honey brown lenses can enhance your natural warmth."
    },
    Neutral: {
      Foundation: "Neutral tan, balanced bronze, soft walnut, medium almond, muted cocoa",
      Blush:      "Neutral berry, soft plum, muted rose, dusty coral, balanced raisin",
      Lipstick:   "Balanced berry, soft terracotta, muted brick, dusty mauve, rose-brown",
      Eyeshadow:  "Neutral brown, soft bronze, muted taupe, balanced camel, stone",
      Haircolor: "Neutral Blonde, Light Brown, Soft Black, Chestnut Brown",
      Nails: "Mauve, Dusty Pink, Soft Brown, Neutral Red, Rose Gold, Champagne, Soft Taupe, Plum, Berry",
      Lenses: "Neutral hazel or soft brown lenses will complement your balanced features."
    }
  },

  Medium: {
    Cool: {
      Foundation: "Cool medium, soft sable, neutral chestnut, rich almond, cocoa",
      Blush:      "Deep plum, cool berry, rich raisin, soft wine, muted burgundy",
      Lipstick:   "Cool wine, deep plum, berry brown, cool burgundy, muted raisin",
      Eyeshadow:  "Cool cocoa, soft charcoal, taupe, muted plum, cool bronze",
      Haircolor: "Ash Brown, Cool Brown, Black, Cool Red, Blue Black",
      Nails: "Plum, Mauve, Cool Red, Silver, Gunmetal, Charcoal, Blue Black, Icy Pink, Cool Berry",
      Lenses: "Cool grey or deep blue lenses can enhance your cool undertones."
    },
    Warm: {
      Foundation: "Warm medium, golden chestnut, soft sienna, toasted almond, bronze",
      Blush:      "Warm berry, soft rust, golden plum, cinnamon, soft copper",
      Lipstick:   "Warm brick, soft rust, copper brown, cinnamon, terracotta",
      Eyeshadow:  "Warm copper, soft bronze, rust, caramel, golden brown",
      Haircolor: "Golden Blonde, Warm Brown, Auburn, Caramel, Honey Highlights",
      Nails: "Coral, Peach, Warm Red, Gold, Bronze, Copper, Terra Cotta, Warm Taupe, Tomato Red",
      Lenses: "Warm amber or honey brown lenses can enhance your natural warmth."
    },
    Neutral: {
      Foundation: "Neutral medium, balanced chestnut, soft cocoa, rich almond, muted bronze",
      Blush:      "Neutral berry, soft raisin, muted plum, dusty rust, balanced wine",
      Lipstick:   "Balanced berry, soft rust, muted plum, dusty brick, rose-cocoa",
      Eyeshadow:  "Neutral bronze, soft cocoa, muted taupe, balanced khaki, stone",
      Haircolor: "Neutral Blonde, Light Brown, Soft Black, Chestnut Brown",
      Nails: "Mauve, Dusty Pink, Soft Brown, Neutral Red, Rose Gold, Champagne, Soft Taupe, Plum, Berry",
      Lenses: "Neutral hazel or soft brown lenses will complement your balanced features."
    }
  },

  Deep: {
    Cool: {
      Foundation: "Cool espresso, neutral mahogany, deep sable, rich cocoa, umber",
      Blush:      "Deep wine, cool raisin, rich plum, soft burgundy, muted berry",
      Lipstick:   "Cool wine, deep plum, rich burgundy, cool raisin, muted wine",
      Eyeshadow:  "Cool espresso, soft charcoal, deep taupe, muted plum, cool cocoa",
      Haircolor: "Ash Brown, Cool Brown, Black, Cool Red, Blue Black",
      Nails: "Plum, Mauve, Cool Red, Silver, Gunmetal, Charcoal, Blue Black, Icy Pink, Cool Berry",
      Lenses: "Cool grey or deep blue lenses can enhance your cool undertones."
    },
    Warm: {
      Foundation: "Warm espresso, golden mahogany, deep sienna, toasted umber, bronze",
      Blush:      "Warm raisin, soft rust, golden plum, deep cinnamon, copper",
      Lipstick:   "Warm rust, deep copper, rich terracotta, cinnamon, brick",
      Eyeshadow:  "Warm espresso, soft copper, rust, deep bronze, caramel",
      Haircolor: "Golden Blonde, Warm Brown, Auburn, Caramel, Honey Highlights",
      Nails: "Coral, Peach, Warm Red, Gold, Bronze, Copper, Terra Cotta, Warm Taupe, Tomato Red",
      Lenses: "Warm amber or honey brown lenses can enhance your natural warmth."
    },
    Neutral: {
      Foundation: "Neutral espresso, balanced mahogany, deep cocoa, rich umber, muted bronze",
      Blush:      "Neutral raisin, soft rust, muted plum, dusty wine, balanced copper",
      Lipstick:   "Balanced rust, deep plum, muted terracotta, dusty wine, cocoa-rose",
      Eyeshadow:  "Neutral espresso, soft cocoa, muted bronze, balanced rust, stone",
      Haircolor: "Neutral Blonde, Light Brown, Soft Black, Chestnut Brown",
      Nails: "Mauve, Dusty Pink, Soft Brown, Neutral Red, Rose Gold, Champagne, Soft Taupe, Plum, Berry",
      Lenses: "Neutral hazel or soft brown lenses will complement your balanced features."
    }
  },

  Dark: {
    Cool: {
      Foundation: "Cool onyx, neutral sable, deep espresso, rich umber, cocoa",
      Blush:      "Deep berry, cool wine, rich raisin, soft plum, muted burgundy",
      Lipstick:   "Cool wine, deep berry, rich burgundy, cool raisin, muted plum",
      Eyeshadow:  "Cool onyx, soft charcoal, deep espresso, muted plum, cool cocoa",
      Haircolor: "Ash Brown, Cool Brown, Black, Cool Red, Blue Black",
      Nails: "Plum, Mauve, Cool Red, Silver, Gunmetal, Charcoal, Blue Black, Icy Pink, Cool Berry",
      Lenses: "Cool grey or deep blue lenses can enhance your cool undertones."
    },
    Warm: {
      Foundation: "Warm onyx, golden sable, deep espresso, toasted umber, bronze",
      Blush:      "Warm raisin, soft copper, golden berry, deep rust, cinnamon",
      Lipstick:   "Warm copper, deep rust, rich terracotta, cinnamon, brick",
      Eyeshadow:  "Warm onyx, soft bronze, rust, deep copper, golden brown",
      Haircolor: "Golden Blonde, Warm Brown, Auburn, Caramel, Honey Highlights",
      Nails: "Coral, Peach, Warm Red, Gold, Bronze, Copper, Terra Cotta, Warm Taupe, Tomato Red",
      Lenses: "Warm amber or honey brown lenses can enhance your natural warmth."
    },
    Neutral: {
      Foundation: "Neutral onyx, balanced sable, deep espresso, rich umber, muted bronze",
      Blush:      "Neutral raisin, soft copper, muted berry, dusty wine, balanced rust",
      Lipstick:   "Balanced rust, deep berry, muted terracotta, dusty wine, cocoa-bronze",
      Eyeshadow:  "Neutral onyx, soft cocoa, muted bronze, balanced rust, stone",
      Haircolor: "Neutral Blonde, Light Brown, Soft Black, Chestnut Brown",
      Nails: "Mauve, Dusty Pink, Soft Brown, Neutral Red, Rose Gold, Champagne, Soft Taupe, Plum, Berry",
      Lenses: "Neutral hazel or soft brown lenses will complement your balanced features."
    }
  }
};

/* ---------- SEASONAL COLOR ANALYSIS ---------- */
function getSeasonalResult(surface, undertone, hair, eyes) {
  // Seasonal color analysis mapping
  const seasonalMap = {
    // Clear Winter
    'Fair': {
      'Cool': {
        hair: ['Blonde_cool', 'Black', 'Jet_Black'],
        eyes: ['Blue', 'Grey'],
        result: 'Clear Winter'
      }
    },
    // Soft Summer  
    'Light': {
      'Cool': {
        hair: ['Ash_brown', 'Light_brown'],
        eyes: ['Hazel', 'Light__brown', 'Grey'],
        result: 'Soft Summer'
      }
    },
    // Warm Spring
    'Tan': {
      'Warm': {
        hair: ['Blonde_warm', 'Red', 'Auburn'],
        eyes: ['Green', 'Hazel', 'Light__brown'],
        result: 'Warm Spring'
      }
    },
    // Deep Autumn
    'Medium': {
      'Warm': {
        hair: ['Dark_brown', 'Auburn', 'Red'],
        eyes: ['Dark__brown', 'Hazel'],
        result: 'Deep Autumn'
      }
    },
    // Cool Winter
    'Deep': {
      'Cool': {
        hair: ['Black', 'Jet_Black', 'Dark_brown'],
        eyes: ['Black1', 'Dark__brown', 'Grey'],
        result: 'Cool Winter'
      }
    },
    // Warm Autumn
    'Dark': {
      'Warm': {
        hair: ['Dark_brown', 'Black', 'Auburn'],
        eyes: ['Dark__brown', 'Black1'],
        result: 'Warm Autumn'
      }
    }
  };

  // Default mappings for missing combinations
  const defaultSeasons = {
    'Fair': {
      'Warm': 'Light Spring',
      'Neutral': 'Soft Summer'
    },
    'Light': {
      'Warm': 'Light Spring',
      'Neutral': 'Soft Summer'
    },
    'Tan': {
      'Cool': 'Soft Summer',
      'Neutral': 'Light Spring'
    },
    'Medium': {
      'Cool': 'Cool Winter',
      'Neutral': 'Soft Autumn'
    },
    'Deep': {
      'Warm': 'Deep Autumn',
      'Neutral': 'Cool Winter'
    },
    'Dark': {
      'Cool': 'Cool Winter',
      'Neutral': 'Deep Autumn'
    }
  };

  // Check for specific seasonal match
  if (seasonalMap[surface] && seasonalMap[surface][undertone]) {
    const seasonalData = seasonalMap[surface][undertone];
    if (seasonalData.hair.includes(hair) && seasonalData.eyes.includes(eyes)) {
      return seasonalData.result;
    }
  }

  // Return default seasonal result
  return defaultSeasons[surface]?.[undertone] || 'Soft Autumn';
}

/* ---------- CONFIRMATION POPUP WITH VISUALS ---------- */
function showConfirmationPopup() {
  // Create popup overlay
  const overlay = document.createElement('div');
  overlay.id = 'confirmationOverlay';
  overlay.className = 'confirmation-overlay';
  
  // Get user selections with visual data
  const surfaceImg = skinImgs[state.surface];
  const subImg = skinImgs[state.sub];
  
  const selections = {
    'Surface Tone': { text: state.surface, image: surfaceImg },
    'Sub-tone': { text: state.sub, image: subImg },
    'Undertone': { text: state.undertone, image: skinImgs[state.undertone] },
    'Hair Color': { text: state.hair.replace(/_/g, ' '), image: skinImgs[state.hair] },
    'Eye Color': { text: state.eyes.replace(/_/g, ' '), image: skinImgs[state.eyes] }
  };
  
  // Create popup content with visuals
  const popup = document.createElement('div');
  popup.className = 'confirmation-popup';
  popup.innerHTML = `
    <div class="confirmation-header">
      <h2>Your Profile</h2>
      <p class="confirmation-subtitle">Please review your selections</p>
    </div>
    <div class="confirmation-content">
      <div class="visual-summary">
        ${Object.entries(selections).map(([key, data]) => `
          <div class="visual-item">
            <div class="visual-image">
              <img src="${data.image}" alt="${data.text}" onerror="this.style.display='none'">
            </div>
            <div class="visual-info">
              <span class="visual-label">${key}:</span>
              <span class="visual-value">${data.text}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="confirmation-prompt">
        <p>Are you satisfied with these choices?</p>
      </div>
    </div>
    <div class="confirmation-buttons">
      <button class="btn-yes" onclick="proceedToResults()">
        <i class='bx bx-check'></i> Yes, Show My Results
      </button>
      <button class="btn-no" onclick="retakeQuiz()">
        <i class='bx bx-refresh'></i> No, Let Me Re-take
      </button>
    </div>
  `;
  
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  
  // Show with animation
  setTimeout(() => {
    overlay.classList.add('show');
  }, 10);
}

function proceedToResults() {
  hideConfirmationPopup();
  setTimeout(() => {
    generateEnhancedResult();
  }, 300);
}

function retakeQuiz() {
  hideConfirmationPopup();
  setTimeout(() => {
    resetQuiz();
  }, 300);
}

function hideConfirmationPopup() {
  const overlay = document.getElementById('confirmationOverlay');
  if (overlay) {
    overlay.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  }
}

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
Haircolor: ${makeup.Haircolor}
Nails: ${makeup.Nails}
Lenses: ${makeup.Lenses}
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
    hide($('outfitChecker')); // Add this line

    if(targetStep === 1)      show($('step1'));
    else if(targetStep === 2) show($('step2'));
    else if(targetStep === 3) show($('step3'));
    else if(targetStep === 4) show($('step4'));
    else if(targetStep === 5) show($('step5'));
    else if(targetStep === 6) show($('result'));   // 6 = show result
    else if(targetStep === 7) show($('outfitChecker')); // Add this line for outfit checker
}

/* OPTIONAL: map left/right arrow keys */
document.addEventListener('keydown', e=>{
    const visible = [1,2,3,4,5].find(n => !$('step'+n).classList.contains('hidden'));
    if(!visible) return;
    if(e.key === 'ArrowLeft'  && visible > 1) goStep(visible - 1);
    if(e.key === 'ArrowRight' && visible < 5) goStep(visible + 1);
});

function generateEnhancedResult() {
  hide($('step5'));
  
  // Get seasonal result
  const seasonalResult = getSeasonalResult(state.surface, state.undertone, state.hair, state.eyes);
  
  // Add seasonal header
  const seasonalHeader = document.createElement('div');
  seasonalHeader.className = 'seasonal-header';
  seasonalHeader.innerHTML = `
    <h1 class="seasonal-title">You are a ${seasonalResult}</h1>
    <p class="seasonal-subtitle">Your personalized color analysis</p>
  `;
  
  // Insert at the top of result section
  const resultSection = $('result');
  const existingHeader = resultSection.querySelector('.seasonal-header');
  if (existingHeader) {
    existingHeader.remove();
  }
  resultSection.insertBefore(seasonalHeader, resultSection.firstChild);
  
  // Continue with existing color generation logic...
  let final = DATA[state.sub] || {best:[],avoid:[]};
  
  const undertoneP = palettes[state.undertone];
  final.best = final.best.filter(c => undertoneP.best.includes(c));
  final.avoid = [...new Set([...final.avoid, ...undertoneP.avoid])];
  
  final = merge(final, DATA[state.hair] || {});
  final = merge(final, DATA[state.eyes] || {});
  
  // Render results
  $('bestSwatches').innerHTML='';
  $('avoidSwatches').innerHTML='';
  
  final.best.forEach(c=>{
    const s=document.createElement('span');
    s.className='swatch'; s.style.background=c; s.title=c;
    $('bestSwatches').appendChild(s);
  });
  
  const makeup = MAKEUP_TEXT[state.surface]?.[state.undertone];
  if (makeup) {
    let html = `<h3>Make-up Shade Suggestions</h3>
                <p><strong>Foundation:</strong> ${makeup.Foundation}</p>
                <p><strong>Blush:</strong> ${makeup.Blush}</p>
                <p><strong>Lipstick:</strong> ${makeup.Lipstick}</p>
                <p><strong>Eye shadow:</strong> ${makeup.Eyeshadow}</p>
                <p><strong>Hair color:</strong> ${makeup.Haircolor}</p>
                <p><strong>Nail color:</strong> ${makeup.Nails}</p>
                <p><strong>Contact lenses:</strong> ${makeup.Lenses}</p>`;
    $('makeupBox').innerHTML = html;
    show($('makeupBox'));
  }
  
  final.avoid.forEach(c=>{
    const s=document.createElement('span');
    s.className='swatch avoid'; s.style.background=c; s.title=c;
    $('avoidSwatches').appendChild(s);
  });
  
  show($('result'));
  
  // Scroll to results with animation
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
  
  // Store colors for email
  window.bestColors = final.best.join(', ');
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
    eyeshadow:    makeup.Eyeshadow,
    haircolor:    makeup.Haircolor,
    nails:        makeup.Nails,
    lenses:       makeup.Lenses
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

/* ---------- OUTFIT CHECKER FUNCTIONS ---------- */
function showOutfitChecker() {
    hide($('result'));
    show($('outfitChecker'));
    show($('outfitStep1'));
    hide($('outfitStep2'));
    hide($('outfitStep3'));
    
    // Initialize arrays from stored colors
    outfitState.bestColorsArray = window.bestColors ? window.bestColors.split(', ') : [];
    outfitState.avoidColorsArray = window.avoidColors ? window.avoidColors.split(', ') : [];
}

function selectItemCount(count) {
    outfitState.itemCount = count;
    
    // Update UI
    document.querySelectorAll('.number-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Generate color pickers
    generateColorPickers(count);
    
    // Show next step
    hide($('outfitStep1'));
    show($('outfitStep2'));
}

function generateColorPickers(count) {
    const container = $('colorPickersContainer');
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const pickerItem = document.createElement('div');
        pickerItem.className = 'color-picker-item';
        pickerItem.innerHTML = `
            <label>Item ${i}:</label>
            <input type="color" id="color${i}" class="color-picker" value="#ffffff">
        `;
        container.appendChild(pickerItem);
    }
}

function analyzeOutfit() {
    // Collect colors
    outfitState.colors = [];
    for (let i = 1; i <= outfitState.itemCount; i++) {
        const color = $(`color${i}`).value;
        outfitState.colors.push(color);
    }
    
    // Analyze each color
    const analysis = analyzeColors(outfitState.colors);
    
    // Display results
    displayOutfitResults(analysis);
    
    // Show results step
    hide($('outfitStep2'));
    show($('outfitStep3'));
}

function analyzeColors(colors) {
    const results = [];
    let totalScore = 0;
    let itemScore = 100 / colors.length;
    
    colors.forEach((color, index) => {
        const nearestColor = findNearestColor(color);
        const colorName = hexToName(color);
        
        let status = 'neutral';
        let score = 0;
        let reason = '';
        
        // Check against best colors
        if (outfitState.bestColorsArray.includes(nearestColor)) {
            status = 'best';
            score = itemScore;
            reason = 'Perfect match for your palette!';
        }
        // Check against avoid colors
        else if (outfitState.avoidColorsArray.includes(nearestColor)) {
            status = 'avoid';
            score = itemScore / color.length; // Deduct points based on length
            reason = 'This color clashes with your natural tones';
        }
        // Neutral color
        else {
            status = 'neutral';
            score = itemScore * 0.6; // 60% of possible points
            reason = 'Neutral choice, works adequately';
        }
        
        results.push({
            originalColor: color,
            nearestColor: nearestColor,
            colorName: colorName,
            status: status,
            score: score,
            reason: reason
        });
        
        totalScore += score;
    });
    
    // Check for clashing colors
    const clashPenalty = checkColorHarmony(results);
    totalScore -= clashPenalty;
    
    // Ensure score doesn't go below 0
    totalScore = Math.max(0, totalScore);
    
    return {
        results: results,
        totalScore: Math.round(totalScore),
        clashPenalty: clashPenalty
    };
}

function findNearestColor(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    
    let nearestColor = outfitState.bestColorsArray[0];
    let minDistance = Infinity;
    
    // Check all colors in our palette
    const allColors = [...outfitState.bestColorsArray, ...outfitState.avoidColorsArray];
    
    allColors.forEach(paletteColor => {
        const pr = parseInt(paletteColor.substr(1, 2), 16);
        const pg = parseInt(paletteColor.substr(3, 2), 16);
        const pb = parseInt(paletteColor.substr(5, 2), 16);
        
        // Calculate Euclidean distance
        const distance = Math.sqrt(
            Math.pow(r - pr, 2) + Math.pow(g - pg, 2) + Math.pow(b - pb, 2)
        );
        
        if (distance < minDistance) {
            minDistance = distance;
            nearestColor = paletteColor;
        }
    });
    
    return nearestColor;
}

function checkColorHarmony(results) {
    let penalty = 0;
    const checkedPairs = new Set();
    
    // Check all pairs
    for (let i = 0; i < results.length; i++) {
        for (let j = i + 1; j < results.length; j++) {
            const pairKey = `${i}-${j}`;
            if (checkedPairs.has(pairKey)) continue;
            
            const color1Name = results[i].colorName;
            const color2Name = results[j].colorName;
            
            // Check if they clash
            if (doColorsClash(color1Name, color2Name)) {
                penalty += 10;
                results[i].clash = true;
                results[j].clash = true;
                results[i].clashReason = `Clashes with ${color2Name}`;
                results[j].clashReason = `Clashes with ${color1Name}`;
            }
            
            checkedPairs.add(pairKey);
        }
    }
    
    return penalty;
}

function doColorsClash(color1, color2) {
    // Check primary clashes
    for (const [primary, clashes] of Object.entries(clashingColors.primary)) {
        if (color1.includes(primary) && clashes.some(clash => color2.includes(clash))) {
            return true;
        }
        if (color2.includes(primary) && clashes.some(clash => color1.includes(clash))) {
            return true;
        }
    }
    
    // Check secondary clashes
    for (const [secondary, clashes] of Object.entries(clashingColors.secondary)) {
        if (color1.includes(secondary) && clashes.some(clash => color2.includes(clash))) {
            return true;
        }
        if (color2.includes(secondary) && clashes.some(clash => color1.includes(clash))) {
            return true;
        }
    }
    
    return false;
}

function displayOutfitResults(analysis) {
    const score = analysis.totalScore;
    const percentage = $('scorePercentage');
    const title = $('scoreTitle');
    const description = $('scoreDescription');
    const breakdown = $('outfitBreakdown');
    
    // Update score circle
    percentage.textContent = `${score}%`;
    
    // Remove previous score classes
    const scoreCircle = percentage.parentElement;
    scoreCircle.className = 'score-circle';
    
    // Determine grade and styling
    let grade, message, className;
    if (score >= 76) {
        grade = 'Excellent';
        message = 'You are a Glow Icon! Your outfit perfectly complements your natural colors!';
        className = 'score-excellent';
    } else if (score >= 51) {
        grade = 'Not Bad';
        message = 'Good sense of style! Your outfit works fairly well with your palette.';
        className = 'score-good';
    } else if (score >= 26) {
        grade = 'Fair';
        message = 'You should consider your color choice. Some colors could be better aligned with your natural tones.';
        className = 'score-fair';
    } else {
        grade = 'Poor';
        message = 'Needs a color refresh! Try incorporating more of your best colors.';
        className = 'score-poor';
    }
    
    scoreCircle.classList.add(className);
    title.textContent = `${grade} Match!`;
    description.textContent = message;
    
    // Build breakdown
    breakdown.innerHTML = '<h4>Color Analysis Breakdown:</h4>';
    analysis.results.forEach((result, index) => {
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        
        let statusClass = '';
        let statusText = result.status;
        if (result.clash) {
            statusClass = 'status-clash';
            statusText = 'Clashing';
        } else if (result.status === 'best') {
            statusClass = 'status-best';
        } else if (result.status === 'avoid') {
            statusClass = 'status-avoid';
        }
        
        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div class="breakdown-color" style="background-color: ${result.originalColor};"></div>
                <div>
                    <strong>Item ${index + 1}:</strong> ${result.colorName}
                    <br><small>${result.reason}</small>
                    ${result.clashReason ? `<br><small style="color: #e74c3c;">${result.clashReason}</small>` : ''}
                </div>
            </div>
            <span class="breakdown-status ${statusClass}">${statusText}</span>
        `;
        breakdown.appendChild(item);
    });
    
    if (analysis.clashPenalty > 0) {
        const penaltyItem = document.createElement('div');
        penaltyItem.className = 'breakdown-item';
        penaltyItem.innerHTML = `
            <div>
                <strong>Harmony Penalty:</strong> ${analysis.clashPenalty} points deducted for clashing colors
            </div>
            <span class="breakdown-status status-clash">-${analysis.clashPenalty}</span>
        `;
        breakdown.appendChild(penaltyItem);
    }
}

function resetOutfitChecker() {
    outfitState = {
        itemCount: 0,
        colors: [],
        bestColorsArray: [],
        avoidColorsArray: []
    };
    
    hide($('outfitStep3'));
    show($('outfitStep1'));
    hide($('outfitStep2'));
    
    // Clear selections
    document.querySelectorAll('.number-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
}