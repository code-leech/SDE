/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 36.379926419354746,
        y: 36.37992641935483,
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 36.37991499999998,
        y: 36.379924999999986,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openMenu" },
        this.whenIReceiveOpenmenu
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "backdrop1";
    this.goto(-166, -130);
  }

  *whenthisspriteclicked() {
    this.broadcast("openMenu");
    if (0 === 50) {
      null;
    }
  }

  *whenIReceiveOpenmenu() {
    if (this.stage.costumeNumber === 2) {
      this.costume = "costume1";
    } else {
      this.costume = "costume2";
    }
  }
}
