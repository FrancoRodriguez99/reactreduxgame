const enemys = [
  //easy enemys
  {
    name: [
      ["Mama's boy", "El niño de Mama"],
      ["Fly Slayer", "Asesino de Moscas"],
      ["Very Angry Child", "Niño muy enojado"],
    ],
    hp: [11, 25],
    dmg: [3, 10],
    crit: [0, 10],
    classes: [
      [
        ["display-row"],
        ["wolf-Head"],
        ["wolf-chest", "wolf-leg-front", "wolf-leg-back"],
        ["none"],
      ],
      [
        ["display-column"],
        ["stone-giant-head"],
        ["stone-giant-chest"],
        ["stone-giant-legs"],
      ],
      [["display-column"], ["meat-flesh-head"], [""], [""]],
    ],
    loot: {
      wolf_chestplate: {
        name: ["Wolf Skin", "Piel de Lobo"],
        stat: "20 hp",
        description: [
          "Increases 20 points of health",
          "Aumenta en 20 los puntos de vida",
        ],
        classes: ["2", "wolf_chestplate"],
        price: "5",
      },
      stone_club: {
        name: ["Stone Club", "Garrote de Piedra"],
        stat: "10 dmg",
        description: ["Increases damage by 10", "Aumenta el daño en 10"],
        classes: ["3", "stone_club"],
        price: "2",
      },
      rusty_sword: {
        name: ["Rusty Sword", "Espada Oxidada"],
        stat: "15 crit",
        description: [
          "Increases Critical Chance by 15%",
          "Aumenta la probabilidad de critico por un 15%",
        ],
        classes: ["3", "rusty_sword"],
        price: "5",
      },
      onion_ring: {
        name: [
          "Very Wide Onion Ring(yummy)",
          "Aro de cebolla muy ancho (delicioso)",
        ],
        stat: "20 hp",
        description: [
          "Increases 20 points of health",
          "Aumenta en 20 los puntos de vida",
        ],
        classes: ["1", "onion_ring"],
        price: "2",
      },
    },
  },
  {
    name: [
      [
        "The guy she tells you not to worry about",
        "El tipo que ella te dice que no te preocupes",
      ],
      ["Pipo", "Pipo"],
      ["My uncle Drunk", "Mi tio borracho"],
    ],
    hp: [25, 50],
    dmg: [10, 20],
    crit: [10, 20],
    classes: [
      [
        ["display-row"],
        ["think-Head"],
        ["think-chest", "think-leg-front", "think-leg-back"],
        ["none"],
      ],
      [
        ["display-column"],
        ["think-giant-head"],
        ["think-giant-chest"],
        ["think-giant-legs"],
      ],
      [["display-column"], ["think-flesh-head"], [""], [""]],
    ],
    loot: {
      iron_helmet: {
        name: ["Iron Helmet", "Casco de Hierro"],
        stat: "50 hp",
        description: [
          "Increases 50 points of health",
          "Aumenta en 50 los puntos de vida",
        ],
        classes: ["0", "iron_helmet"],
        price: "10",
      },
      stone_pike: {
        name: ["Stone Pike", "Lanza de Piedra"],
        stat: "20 dmg",
        description: ["Increases damage by 20", "Aumenta el daño en 20"],
        classes: ["3", "stone_pike"],
        price: "5",
      },
      sword: {
        name: ["Sword", "Espada"],
        stat: "30 crit",
        description: [
          "Increases Critical Chance by 30%",
          "Aumenta la probabilidad de critico por un 30%",
        ],
        classes: ["3", "sword"],
        price: "15",
      },
      necklace: {
        name: ["Just a necklace", "Solamente un collar"],
        stat: "50 hp",
        description: [
          "Increases 50 points of health",
          "Aumenta en 50 los puntos de vida",
        ],
        classes: ["1", "necklace"],
        price: "10",
      },
      pants: {
        name: ["Military Pants", "Pantalones Militares"],
        stat: "50 hp",
        description: [
          "Increases 50 points of health",
          "Aumenta en 50 los puntos de vida",
        ],
        classes: ["4", "mpants"],
        price: "12",
      },
    },
  },
];

export default enemys;
