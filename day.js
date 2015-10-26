function Day(doy, dow, dom, month){
	var self = this;
	this.doy = doy;
	this.dow = dow;
	this.dom = dom;
	this.month = month;
	this.eventsArray = [];
	this.available = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
	
	this.pushEvent = function(name, start, end, color){
		self.eventsArray.push(new Event(name, start, end, color));
	}

}