import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Appa from "./Appa/Appa.js";
import Controls from "./Controls/Controls.js";
import Openwindow from "./Openwindow/Openwindow.js";
import _ from "./_/_.js";
import _2 from "./_2/_2.js";
import Mousedetec from "./Mousedetec/Mousedetec.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -166,
    y: -130,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 2,
  }),
  Appa: new Appa({
    x: 0,
    y: -130,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 75,
    visible: true,
    layerOrder: 6,
  }),
  Controls: new Controls({
    x: 166,
    y: -130,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 3,
  }),
  Openwindow: new Openwindow({
    x: 3.9779005524861777,
    y: 2.6519337016574553,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7,
  }),
  _: new _({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  _2: new _2({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  Mousedetec: new Mousedetec({
    x: -3,
    y: 180,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
