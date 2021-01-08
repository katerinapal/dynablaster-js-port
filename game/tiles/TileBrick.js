import { sprites } from "..\\..\\system\\Sprites.js";
import { Animation } from "..\\..\\system\\Animation.js";
import { Tile } from "..\\Tile.js";

function TileBrick (parent, type, position, coordinates, frame) {
    Tile.call(this, parent, type, position, coordinates, frame);
    this.parent = parent;
    this.position = position;
    this.exploded = false;
    this.onBonus = false;
    this.onExit = false;
    this.sparky = false;

    this.animations.sparky = new Animation (this, sprites.tiles.brick_sparky, true, 0.3);
    this.animations.explosion = new Animation (this, sprites.tiles.brick_explosion, false, 0.05);
}

TileBrick.prototype = Object.create(Tile.prototype);

TileBrick.prototype.update = function (delta) {
    this.animations[this.stage].update(delta, this.position);

    if (!this.exploded)
        {
            if (this.sparky)
                {
                this.stage = "sparky";
                }
        }
        else
        {
            this.stage = "explosion";

        }

    if (this.animations[this.stage].isEnded)
        {
            this.parent.remove(this.coordinates.x, this.coordinates.y);
        }
};

TileBrick.prototype.explode = function () {
    this.exploded = true;
};

TileBrick.prototype.trigger = function () {
    if (!this.exploded) this.explode();
};


var mod_TileBrick = TileBrick;
export { mod_TileBrick as TileBrick };
