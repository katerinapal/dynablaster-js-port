import { sprites } from "..\\..\\system\\Sprites.js";
import { Rectangle } from "..\\..\\system\\Rectangle.js";
import { Vector2 } from "..\\..\\system\\Vector2.js";

function PlayingState(parent) {
    this.game = parent;
}

PlayingState.prototype.initialize = function () {
};

PlayingState.prototype.handleInput = function (delta) {
};

PlayingState.prototype.update = function (delta) {
    this.game.dashboard.update(delta);
    this.game.map.update(delta);
};

PlayingState.prototype.draw = function () {
    canvas.drawImage(sprites.background, Vector2.zero, 0, Vector2.zero, new Rectangle(0, 0, canvas.width, canvas.height));
    this.game.map.draw();
    this.game.dashboard.draw(this.game.map.timer.toString(), this.game.gamePlayer.hiscore, this.game.gamePlayer.score, this.game.gamePlayer.lives, this.game.map.timer.ending);
};

PlayingState.prototype.reset = function () {

};

var exported_PlayingState = PlayingState;
export { exported_PlayingState as PlayingState };
