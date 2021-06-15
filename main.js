import $ from ".\\lib\\jquery-2.1.3.min.js";
import { Canvas } from ".\\system\\Canvas.js";
import { Game } from ".\\game\\Game.js";
var game;
var canvas;

$(document).ready(function(){

    var requestAnimationFrame = (function () {
        return  window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

canvas = new Canvas('canvas', 'gameArea');
game = new Game();

});

export { canvas };
