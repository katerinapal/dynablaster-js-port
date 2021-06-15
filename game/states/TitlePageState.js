import { sounds } from "..\\..\\system\\Sounds.js";
import { space as Key_space, L as Key_L } from "..\\..\\system\\Key.js";
import { keyboard } from "..\\..\\system\\Keyboard.js";
import { sprites } from "..\\..\\system\\Sprites.js";
import { GamePlayer } from "..\\GamePlayer.js";
import { Rectangle } from "..\\..\\system\\Rectangle.js";
import { Vector2 } from "..\\..\\system\\Vector2.js";
import { canvas } from "..\\..\\main.js";

function TitlePageState(parent) {
  this.game = parent;
}

TitlePageState.prototype.initialize = function () {
};

TitlePageState.prototype.handleInput = function (delta) {
    if (keyboard.pressed(Key_space))
        {
        this.game.gameStateManager.switchTo('stage_number').reset();
        }
    if (keyboard.pressed(Key_L))
        {
        if (this.game.gamePlayer.loadSave())
            {
            this.game.gamePlayer.clearSaveGame();
            this.game.gameStateManager.switchTo('stage_number').reset();
            }
            else
            {
            sounds.play('time_out');
            }
        }
};

TitlePageState.prototype.update = function (delta) {

};

TitlePageState.prototype.draw = function () {
    canvas.drawImage(sprites.start_panel, Vector2.zero, 0, Vector2.zero, new Rectangle(0, 0, canvas.width, canvas.height));
    canvas.drawImage(sprites.keyboard, Vector2.zero, 0, Vector2.zero, new Rectangle(0, 0, canvas.width, canvas.height));
};

TitlePageState.prototype.reset = function () {
    this.game.gamePlayer = new GamePlayer('new');
};

var mod_TitlePageState = TitlePageState;
export { mod_TitlePageState as TitlePageState };
