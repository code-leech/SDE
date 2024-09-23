/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mousedetec extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Mousedetec/costumes/costume1.svg", {
        x: 131.93404634581103,
        y: 19.85294117647061,
      }),
    ];

    this.sounds = [new Sound("pop", "./Mousedetec/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.effects.ghost = 99;
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      if (this.mouse.down && this.touching(Color.rgb(254, 120, 121))) {
        this.stage.vars.drag = 1;
        this.broadcast("openApp");
      } else {
        this.stage.vars.drag = 0;
        while (!!this.mouse.down) {
          yield;
        }
        this.stage.vars.drag = 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(Color.rgb(254, 120, 121))) {
        this.stage.vars.x = 1;
      } else {
        this.stage.vars.x = 0;
      }
      yield;
    }
  }
}
