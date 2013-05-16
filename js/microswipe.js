var MicroSwipe = function(o){
	this.id = o.id || '';
	this.delay = o.delay||50;
	this.distance = o.distance||30;
	this.el = document.getElementById(this.id)||o.el;
	this.onBeforeSwipe = o.onBeforeSwipe||function(){};
	this.onSwipeComplete = o.onSwipeComplete||function(){};
	this._addListeners();
	this.originX = 0;
	this.timeThen = 0;
	this.timeElapsed = 0;
	this.direction = '';
}
MicroSwipe.prototype = {
    _addListeners:function(){
		this._bind('touchstart','_onTouchStart');
		this._bind('touchend','_onTouchEnd');
    },
    _bind:function(type,handler){
		var self = this;
        this.el.addEventListener ? this.el.addEventListener(type, function(e){self[handler](e);}, false) : 0;
    },
    _onTouchStart:function(e){
		this.originX = this._getStartPos(e);			    	
		this.timeThen = new Date().getTime();
		this.onBeforeSwipe(e);
    },
    _onTouchEnd:function(e){
		this.destX = this._getEndPos(e);
		this.elapsed = new Date().getTime()-this.timeThen;
		if(this._qualifiesByTime() && this._qualifiesByDistance()){
			this.onSwipeComplete(e,{
                direction:this.direction,
                swipeTime:this.elapsed,
                distance:Math.abs(Math.abs(this.destX) - this.originX)
            });
		}
	},
	_qualifiesByTime:function(){
		return this.elapsed > this.delay ? true : false;
    },
    _qualifiesByDistance:function(){
    	this.direction = (this.destX - this.originX) < 0 ? 'left' : 'right';
    	return Math.abs(Math.abs(this.destX) - this.originX) > this.distance ? true : false;
    },
    _getStartPos:function(e){
    	return e.pageX ? Number(e.pageX) : Number(e.clientX);
    },
    _getEndPos:function(e){
    	return e.changedTouches[0].pageX;
    }
};
try{
    $.fn.microswipe = function(func,opts) {
        var opts = opts||{},
        onBeforeSwipe = opts.onBeforeSwipe||function(){},
        delay = opts.delay||50,
        distance = opts.distance||30;
        $.each(this,function(){
            new MicroSwipe({ 
                el:this, 
                onSwipeComplete:func, 
                'delay':delay,
                'distance':distance,
                'onBeforeSwipe':onBeforeSwipe
            });
        });
        return this;            
    };
}
catch(e){}