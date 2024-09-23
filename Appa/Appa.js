/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Appa extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Appa/costumes/costume1.svg", { x: 25, y: 25 }),
      new Costume("costume2", "./Appa/costumes/costume2.svg", { x: 25, y: 25 }),
    ];

    this.sounds = [new Sound("pop", "./Appa/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openApp" },
        this.whenIReceiveOpenapp
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("openApp");
  }

  *whenIReceiveOpenapp() {
    this.costumeNumber++;
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(0, -130);
    this.costume = "costume1";
  }
}
