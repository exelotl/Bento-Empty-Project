/**
 * Lucky Kat logo
 * @moduleName LuckyKatLogo
 * @snippet LuckyKatLogo.snippet
LuckyKatLogo({})
 */
import Bento from 'bento';
import Vector2 from 'bento/math/vector2';
import Rectangle from 'bento/math/rectangle';
import Sprite from 'bento/components/sprite';
import Clickable from 'bento/components/clickable';
import Entity from 'bento/entity';
import ClickButton from 'bento/gui/clickbutton';
import Counter from 'bento/gui/counter';
import Text from 'bento/gui/text';
import EventSystem from 'bento/eventsystem';
import Utils from 'bento/utils';
import Tween from 'bento/tween';

export default function (settings) {
    var viewport = Bento.getViewport();
    var entity = new Entity({
        z: 1,
        name: 'luckyKatLogo',
        position: new Vector2(viewport.width / 2, viewport.height / 2),
        components: [
            new Sprite({
                imageName: 'luckykat-160',
                originRelative: new Vector2(0.5, 0.5)
            }),
            new Clickable({
                onClick (data) {
                    // bounce when user click on the lucky cat
                    new Tween({
                        from: 0.25,
                        to: 0,
                        in: 60,
                        ease: 'elastic',
                        decay: 5,
                        oscillations: 3,
                        onUpdate (v, t) {
                            entity.scale.x = 1 + v;
                            entity.scale.y = 1 - v;
                        }
                    });
                }
            })
        ]
    });
    return entity;
};
