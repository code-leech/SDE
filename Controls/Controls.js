/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Controls extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Controls/costumes/costume1.svg", {
        x: 30.67692307692252,
        y: 9.497130282375878,
      }),
      new Costume("costume2", "./Controls/costumes/costume2.svg", {
        x: 30.67692307692252,
        y: 9.497130282375878,
      }),
    ];

    this.sounds = [new Sound("pop", "./Controls/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openSettings" },
        this.whenIReceiveOpensettings
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(166, -130);
  }

  *whenthisspriteclicked() {
    this.broadcast("openSettings");
  }

  *whenIReceiveOpensettings() {
    if (this.stage.costumeNumber === 4) {
      this.costume = "costume1";
    } else {
      this.costume = "costume2";
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (!(this.stage.costumeNumber === 4)) {
        this.costume = "costume1";
      }
      yield;
    }
  }
}
