module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class Test1 extends eui.Component{
    	
        private stateName: string = "red";
		public constructor() {
            super();
            this.skinName = "Test1Skin";
            egret.callLater(this.init,this);
		}
		
        private init(): void { 
            this.touchEnabled = true;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        }
        
        private touchHandler(e): void { 
            this.invalidateState();
        }
        
        /**
         * 覆盖父类的函数
         * */
        public getCurrentState(): string { 
            if(this.stateName == "blue") {
                this.stateName =  "green";
            } else if(this.stateName == "green") {
                this.stateName =  "red";
            } else{
                this.stateName = "blue";
            }
            console.log("this.stateName=" + this.stateName);
            return this.stateName;
        }
        
	}
}
