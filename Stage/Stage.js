/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 198.04217,
        y: -108.34827000000001,
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 256.006005,
        y: 204.204175,
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 198.04217,
        y: -108.34827000000001,
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 256.006005,
        y: 204.20416500000002,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "openMenu" },
        this.whenIReceiveOpenmenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openSettings" },
        this.whenIReceiveOpensettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openApp" },
        this.whenIReceiveOpenapp
      ),
    ];

    this.vars.app = 1;
    this.vars.prevopen = 1;
    this.vars.drag = 1;
    this.vars.x = 0;
  }

  *whenIReceiveOpenmenu() {
    if (this.stage.costumeNumber === 2) {
      this.costume = "backdrop1";
      this.vars.app = this.vars.prevopen;
    } else {
      this.costume = "backdrop2";
      this.vars.app = 0;
    }
  }

  *whenIReceiveOpensettings() {
    if (this.stage.costumeNumber === 4) {
      this.costume = "backdrop1";
      this.vars.app = this.vars.prevopen;
    } else {
      this.costume = "backdrop4";
      this.vars.app = 0;
    }
  }

  *whenIReceiveOpenapp() {
    if (this.costumeNumber === 2 || this.costumeNumber === 4) {
      this.vars.app = 0;
      this.vars.prevopen = 1;
    } else {
      if (this.toNumber(this.vars.app) === 0) {
        this.vars.app = 1;
      } else {
        this.vars.app = 0;
      }
      this.vars.prevopen = this.vars.app;
    }
  }
}
