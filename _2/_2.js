/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_2/costumes/costume1.svg", { x: 0, y: 0 }),
    ];

    this.sounds = [new Sound("pop", "./_2/sounds/pop.wav")];

    this.triggers = [];
  }
}
