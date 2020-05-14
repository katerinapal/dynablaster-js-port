import { sprites } from "..\\system\\Sprites.js";
import { Animation } from "..\\system\\Animation.js";

function Tile (parent, type, position, coordinates, frame) {
    this.type = type;
    this.position = position;
    this.coordinates = coordinates;
    this.frame = frame || 0;

    this.animations = {};
    this.stage = "playing";
    this.animations.playing = new Animation (this, sprites.tiles[this.type], false, 0.2, this.frame);
}

Tile.prototype.update = function (delta) {
    this.animations[this.stage].update(delta, this.position);
};

Tile.prototype.draw = function (delta) {
    this.animations[this.stage].draw(delta);
};

Tile.size = {
    width: 48,
    height: 48
};

var exported_Tile = Tile;
export { exported_Tile as Tile };
