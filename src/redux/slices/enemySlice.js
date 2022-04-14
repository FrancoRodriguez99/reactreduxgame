import { createSlice } from "@reduxjs/toolkit";
import enemys from "../../constants/enemys/enemysdata";

export const enemySlice = createSlice({
  name: "enemy",
  initialState: {
    id: 404,
    name: "",
    classes: [["none"], ["none"], ["none"], ["none"], ["none"]],
    hp: 0,
    dmg: 0,
    crit: 0,
    loot: [],
    alive: false,
  },
  reducers: {
    generateEnemy: (state) => {
      state.name =
        enemys[state.id].name[
          Math.floor(Math.random() * enemys[state.id].name.length)
        ];
      state.classes =
        enemys[state.id].classes[
          Math.floor(Math.random() * enemys[state.id].classes.length)
        ];
      state.hp = Math.floor(
        Math.random() * (enemys[state.id].hp[1] - enemys[state.id].hp[0] + 1) +
          enemys[state.id].hp[0]
      );
      state.dmg = Math.floor(
        Math.random() *
          (enemys[state.id].dmg[1] - enemys[state.id].dmg[0] + 1) +
          enemys[state.id].dmg[0]
      );
      state.crit = Math.floor(
        Math.random() *
          (enemys[state.id].crit[1] - enemys[state.id].crit[0] + 1) +
          enemys[state.id].crit[0]
      );
      let keys = Object.keys(enemys[state.id].loot);
      state.loot =
        enemys[state.id].loot[keys[Math.floor(Math.random() * keys.length)]];
      state.alive = true;
    },
    changeEnemyDif: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { generateEnemy, eTakeDamage, changeEnemyDif } =
  enemySlice.actions;
export default enemySlice.reducer;
