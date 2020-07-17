import { sounds } from "..\\..\\system\\Sounds.js";

import {
    getRandomInt as systemmyHelperjs_getRandomInt,
    pickRandomProperty as systemmyHelperjs_pickRandomProperty,
} from "..\\..\\system\\myHelper.js";

import { Vector2 } from "..\\..\\system\\Vector2.js";
import { Enemy } from "..\\Enemy.js";
import { Map } from "..\\Map.js";
import { DashBoard } from "..\\DashBoard.js";
import { Bonus } from "..\\Bonus.js";
import { canvas } from "..\\..\\main.js";

function StageNumberState(parent) {
  this.game = parent;
  this.time = this.duration = 2;
}

StageNumberState.prototype.initialize = function () {
};

StageNumberState.prototype.handleInput = function (delta) {

};

StageNumberState.prototype.update = function (delta) {
  this.time -= delta;
  if (this.time < 0)
    {
    this.game.gameStateManager.switchTo('game_state_playing');
    sounds.play('stage_start');
    this.time = this.duration;
    }
};

StageNumberState.prototype.draw = function () {
  canvas.drawRectangle(0, 0, canvas.width, canvas.height, "black");
  canvas.drawText("stage: " + this.game.gamePlayer.map, new Vector2(canvas.width/2,canvas.height/2), Vector2.zero, "#f6ed26", "center", "Press Start 2P", "30px" );
};

StageNumberState.prototype.reset = function () {
    var bonuses = 4;
    var mapSize = {
        x : 6 + this.game.gamePlayer.map + systemmyHelperjs_getRandomInt(5, 10),
        y : 6 + this.game.gamePlayer.map + systemmyHelperjs_getRandomInt(0, 5),
    };

    var enemiesCount = mapSize.x * mapSize.y / 15;
    var enemiesList = [];

    while(enemiesList.length <= enemiesCount)
        {
            var chosenEnemy = systemmyHelperjs_pickRandomProperty(Enemy.types);
            if (Enemy.types[chosenEnemy].minMap <= this.game.gamePlayer.map &&
                ((Enemy.types[chosenEnemy].maxMap >= this.game.gamePlayer.map && Enemy.types[chosenEnemy].maxMap > 0) || Enemy.types[chosenEnemy].maxMap === -1) &&
                systemmyHelperjs_getRandomInt(0,9) < Enemy.types[chosenEnemy].prob)
                    enemiesList.push(chosenEnemy);
        }

    this.game.gamePlayer.time = mapSize.x * mapSize.y /2;
    if (this.game.gamePlayer.time > 600) this.game.gamePlayer.time = 599;
    var bricksCount = mapSize.x * mapSize.y / 5;

    if (bricksCount < bonuses) bricksCount = bonuses;
    this.game.bonus = undefined;
    this.game.dashboard = undefined;
    this.game.map = undefined;

    this.game.bonus = new Bonus(this.game.gamePlayer, bonuses);
    this.game.dashboard = new DashBoard();
    this.game.map = new Map(mapSize.x, mapSize.y, bricksCount, enemiesList, this.game);
};

var exported_StageNumberState = StageNumberState;
export { exported_StageNumberState as StageNumberState };
