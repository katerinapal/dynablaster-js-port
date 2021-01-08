import { Points } from ".\\Points.js";
import { GameObjectList } from "..\\system\\GameObjectList.js";

function PointsList(parent) {
      GameObjectList.call(this, parent);
  this.parent = parent;
}

PointsList.prototype = Object.create(GameObjectList.prototype);

PointsList.prototype.add = function (position, val, map) {
    var gameobject = new Points(position, val, map);
    this.gameObjects.push(gameobject);
    gameobject.parent = this;
};


var mod_PointsList = PointsList;
export { mod_PointsList as PointsList };
