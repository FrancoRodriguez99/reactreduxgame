import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
  name: "hero",
  initialState: {
    name: "l4#2q",
    classes: [["basicHead"], ["none"], ["basicChest"], ["none"], ["basicLegs"]],
    hp: 100,
    lvl: 1,
    dlvl: 1,
    xp: 0,
    chp: 100,
    dmg: 5,
    crit: 5,
    gold: 0,
    alive: true,
    fighting: false,
    loot: [],
    equipedloot: [],
    equipment: [false, false, false, false, false],
  },
  reducers: {
    equipHero: (state, action) => {
      if (state.equipment[parseInt(action.payload[1][0])] === false) {
        state.equipment[parseInt(action.payload[1][0])] = true;
        state.equipedloot.push(state.loot[action.payload[2]]);
        state.loot = state.loot
          .slice(0, parseInt(action.payload[2]))
          .concat(
            state.loot.slice(parseInt(action.payload[2]) + 1, state.loot.length)
          );
        state.classes[parseInt(action.payload[1][0])] = action.payload[1][1];
        const data = action.payload[0].split(" ");
        switch (data[1]) {
          case "hp":
            state.hp = state.hp + parseInt(data[0]);
            break;
          case "dmg":
            state.dmg = state.dmg + parseInt(data[0]);
            break;
          case "crit":
            state.crit = state.crit + parseInt(data[0]);
            break;
          default:
            break;
        }
      }
    },
    unequipHero: (state, action) => {
      state.equipment[
        parseInt(state.equipedloot[action.payload][3][0])
      ] = false;
      const data = state.equipedloot[action.payload][1].split(" ");
      switch (parseInt(state.equipedloot[action.payload][3][0])) {
        case 0:
          state.classes[0] = "basicHead";
          break;
        case 1:
          state.classes[1] = "none";
          break;
        case 2:
          state.classes[2] = "basicChest";
          break;
        case 3:
          state.classes[3] = "none";
          break;
        case 4:
          state.classes[4] = "basicLegs";
          break;
        default:
          break;
      }
      switch (data[1]) {
        case "hp":
          state.hp = state.hp - data[0];
          if (state.chp > state.hp) {
            state.chp = state.hp;
          }

          break;
        case "dmg":
          state.dmg = state.dmg - data[0];
          break;
        case "crit":
          state.crit = state.crit - data[0];
          break;
        default:
          break;
      }
      state.loot.push(state.equipedloot[action.payload]);

      state.equipedloot = state.equipedloot
        .slice(0, action.payload)
        .concat(
          state.equipedloot.slice(action.payload + 1, state.equipedloot.length)
        );
    },
    fightHero: (state) => {
      state.fighting = !state.fighting;
    },
    takeDamage: (state, action) => {
      state.chp = action.payload;
    },
    takeLoot: (state, action) => {
      state.loot.push(action.payload);
    },
    sell: (state, action) => {
      state.loot = state.loot
        .slice(0, parseInt(action.payload[0]))
        .concat(
          state.loot.slice(parseInt(action.payload[0]) + 1, state.loot.length)
        );

      state.gold = state.gold + parseInt(action.payload[1]);
    },
    restoreHealth: (state) => {
      state.chp = state.hp;
    },
    removeGold: (state, action) => {
      state.gold = state.gold - action.payload;
    },
    lvlup: (state, action) => {
      switch (action.payload) {
        case "dmg":
          state.dmg++;
          state.dlvl--;
          break;
        case "hp":
          state.hp++;
          state.dlvl--;
          break;
        case "crit":
          state.crit++;
          state.dlvl--;
          break;
        default:
          console.log(action.payload);
          state.xp += action.payload;
          if (state.xp >= 100) {
            state.lvl++;
            state.dlvl++;
            state.xp = 0;
          }
          break;
      }
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {
  equipHero,
  unequipHero,
  fightHero,
  takeDamage,
  takeLoot,
  sell,
  restoreHealth,
  removeGold,
  lvlup,
  changeName,
} = heroSlice.actions;
export default heroSlice.reducer;
