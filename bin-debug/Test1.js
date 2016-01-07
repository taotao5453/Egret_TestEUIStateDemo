var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var Test1 = (function (_super) {
        __extends(Test1, _super);
        function Test1() {
            _super.call(this);
            this.stateName = "red";
            this.skinName = "Test1Skin";
            egret.callLater(this.init, this);
        }
        var d = __define,c=Test1;p=c.prototype;
        p.init = function () {
            this.touchEnabled = true;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        };
        p.touchHandler = function (e) {
            this.invalidateState();
        };
        /**
         * 覆盖父类的函数
         * */
        p.getCurrentState = function () {
            if (this.stateName == "blue") {
                this.stateName = "green";
            }
            else if (this.stateName == "green") {
                this.stateName = "red";
            }
            else {
                this.stateName = "blue";
            }
            console.log("this.stateName=" + this.stateName);
            return this.stateName;
        };
        return Test1;
    })(eui.Component);
    game.Test1 = Test1;
    egret.registerClass(Test1,"game.Test1");
})(game || (game = {}));
