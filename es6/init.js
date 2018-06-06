/**
 * Initialization of system and cordova modules
 */
import Bento from 'bento'
import Vector2 from 'bento/math/vector2'
import Rectangle from 'bento/math/rectangle'
import Tween from 'bento/tween'
import EventSystem from 'bento/eventsystem'
import Utils from 'utils'
import Localization from 'modules/localization'

export default function () {
    /**
     * Clears screen with black every tick (android only)
     */
    var clearScreen = function () {
        var canvasDimension = Bento.getViewport();
        var clear = function (data) {
            data.renderer.begin();
            data.renderer.fillRect([0, 0, 0, 1], 0, 0, canvasDimension.width, canvasDimension.height);
            data.renderer.flush();
        };
        if (Utils.isNativeAndroid()) {
            EventSystem.on('preDraw', clear);
        }
    };
    /**
     * Turn off antialiasing for pixel art
     */
    var antiAliasing = function () {
        if (Utils.isCocoonJS() && window.Cocoon) {
            window.Cocoon.Utils.setAntialias(false);
        }
    };
    /**
     * Init localization
     */
    var initLocalization = function () {
        // find system language (language is set in preloader screen)
        Localization.init();

        // clean unused language assets (note: this means you cannot change language after startup)
        if (!Bento.isDev()) {
            Localization.cleanUnusedAssets();
        }
    };

    clearScreen();
    antiAliasing();
    initLocalization();

    /**
     * Start preloader
     */
    Bento.assets.load('preloader', (err) => {
        Bento.screens.show('screens/preloader');
    });
};