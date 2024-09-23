/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Openwindow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("white", "./Openwindow/costumes/white.svg", {
        x: 160,
        y: 132.53152,
      }),
      new Costume("white2", "./Openwindow/costumes/white2.svg", {
        x: 160,
        y: 132.53152,
      }),
      new Costume("costume2", "./Openwindow/costumes/costume2.svg", {
        x: 160,
        y: 132.53152,
      }),
    ];

    this.sounds = [new Sound("pop", "./Openwindow/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.app = 0;
    /* TODO: Implement sensing_setdragmode */ null;
    this.moveBehind();
    this.visible = false;
    /* TODO: Implement sensing_setdragmode */ null;
    this.goto(0, 0);
    while (true) {
      if (this.toNumber(this.stage.vars.app) === 1) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.toNumber(this.stage.vars.drag) === 1) {
        /* TODO: Implement sensing_setdragmode */ null;
      } else {
        /* TODO: Implement sensing_setdragmode */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toNumber(this.stage.vars.x) === 1) {
        this.costume = "costume2";
      } else {
        this.costume = "white";
      }
      yield;
    }
  }
}
