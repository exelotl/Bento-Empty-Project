/**
 * Main screen
 */
import Bento from 'bento';
import Vector2 from 'bento/math/vector2';
import Rectangle from 'bento/math/rectangle';
import Sprite from 'bento/components/sprite';
import Clickable from 'bento/components/clickable';
import Entity from 'bento/entity';
import EventSystem from 'bento/eventsystem';
import ClickButton from 'bento/gui/clickbutton';
import Counter from 'bento/gui/counter';
import Text from 'bento/gui/text';
import Utils from 'bento/utils';
import Screen from 'bento/screen';
import Tween from 'bento/tween';
import LuckyKat from 'entities/luckykatlogo';
import Globals from 'globals';

var onShow = function () {
    /* Screen starts here */
    var viewport = Bento.getViewport();
    var background = new Entity({
        z: 0,
        name: 'background',
        position: new Vector2(viewport.width / 2, viewport.height / 2),
        components: [
            new Sprite({
                imageName: 'background',
                originRelative: new Vector2(0.5, 0.5),
            })
        ]
    });
   
    var luckyKat = new LuckyKat({});

    Bento.objects.attach(background);
    Bento.objects.attach(luckyKat);
};

export default new Screen({
    onShow
});