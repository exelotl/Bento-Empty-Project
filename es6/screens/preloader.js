/**
 * Screen description
 */
import Bento from 'bento';
import Vector2 from 'bento/math/vector2';
import Rectangle from 'bento/math/rectangle';
import Sprite from 'bento/components/sprite';
import Clickable from 'bento/components/clickable';
import Fill from 'bento/components/fill';
import Text from 'bento/gui/text';
import Entity from 'bento/entity';
import EventSystem from 'bento/eventsystem';
import Utils from 'bento/utils';
import Screen from 'bento/screen';
import Tween from 'bento/tween';
import LuckyKat from 'entities/luckykatlogo';
import Globals from 'globals';
import Localization from 'modules/localization';
var initPostPreloader = function () {
    // hide cordova splashscreen if exists
    if (navigator.splashscreen) {
        navigator.splashscreen.hide();
    }

    // Localization language is set after localized json files are loaded
    Localization.setLanguage();
};
var onShow = function () {
    /* Screen starts here */
    var viewport = Bento.getViewport();
    var loaded = false;
    var background = new Entity({
        z: 0,
        name: 'background',
        components: [
            new Fill({})
        ]
    });
    var luckyKat = new LuckyKat({});
    var text = Text({
        z: 1,
        name: 'loadingText',
        font: 'font',
        fontSize: 12,
        fontColor: '#fff',
        text: '',
        align: 'left',
        textBaseline: 'top',
        position: new Vector2(0, 0)
    });
    var end = function () {
        if (loaded) {
            Bento.screens.show('screens/main');
        }
    };
    var loadFonts = function () {
        var fonts = Bento.assets.getAssetGroups().preloader.fonts;
        var font;
        if (!fonts) {
            return;
        }
        for (font in fonts) {
            if (!fonts.hasOwnProperty(font)) {
                continue;
            }
            new Text({
                position: new Vector2(1000, 1000),
                text: '.',
                font: font
            });
        }
    };

    initPostPreloader();

    Bento.objects.attach(background);
    Bento.objects.attach(text);
    Bento.objects.attach(luckyKat);

    // preload fonts
    loadFonts();

    // we will now load all other assets
    Bento.assets.loadAllAssets({
        exceptions: ['preloader'], // preloader was already loaded
        onLoaded (current, total) {
            // show how many assets still to be loaded
            text.setText('Loading ' + current + '/' + total);
        },
        onReady () {
            loaded = true;
            end();
        }
    });
};

export default new Screen({
    onShow: onShow
});