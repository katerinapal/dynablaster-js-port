import { sprites } from "..\\..\\system\\Sprites.js";
import { Animation } from "..\\..\\system\\Animation.js";
import { Tile } from "..\\Tile.js";

function TileBonus (parent, type, position, coordinates, frame, bonus) {
    this.parent = parent;
    this.type = type;
    this.position = position;
    this.coordinates = coordinates;
    this.frame = frame || 0;
    this.bonus = bonus;
    this.exploded = false;

    this.animations = {};
    this.stage = "playing";
    this.animations.playing = new Animation (this, sprites.bonus[this.bonus], true, 0.2, 0);
    this.animations.activ = new Animation (this, sprites.bonus[this.bonus], true, 0.2);
    this.animations.explosion = new Animation (this, sprites.bonus.explosion, false, 0.05);
    this.activ = false;
}

TileBonus.prototype = Object.create(Tile.prototype);

TileBonus.prototype.update = function (delta) {
    this.animations[this.stage].update(delta, this.position);
    if (this.activ) this.stage = 'activ';
    if (this.exploded) this.stage = 'explosion';

    if (this.animations[this.stage].isEnded)
        {
            this.parent.remove(this.coordinates.x, this.coordinates.y);
        }

};

TileBonus.prototype.explode = function () {
    this.exploded = true;
};

TileBonus.prototype.trigger = function () {
    if (!this.exploded) this.explode();
};

var exported_TileBonus = TileBonus;
export { exported_TileBonus as TileBonus };
