/**
 * Extends utils with more useful functions.
 * See bento/utils
 */
import Bento from 'bento';
import Vector2 from 'bento/math/vector2';
import Rectangle from 'bento/math/rectangle';
import Sprite from 'bento/components/sprite';
import Clickable from 'bento/components/clickable';
import Entity from 'bento/entity';
import Utils from 'bento/utils';
import Tween from 'bento/tween';

var utils = {
    /**
     * Wrapper for tweens to simulate a timeout
     */
    timeout: function (time, callback) {
        var tween = new Tween({
            from: 0,
            to: 1,
            in: time,
            ease: 'linear',
            onComplete: callback
        });
        return tween;
    }
};
Utils.extend(Utils, utils);  // this totally would not be allowed if we weren't transpiling back to AMD... :S

export default Utils;