/*!
 * jQuery.quark-alien
 * Licensed under MIT
 * @projectDescription MOTHERFUCKINGQUARKALIEN
 */
(function($) {
	$.fn.alien = function( options ) {
		if(this.hasClass('alienated')) return;
		var self = this;
		var prefixes = ['', '-webkit-', '-moz-', '-ms-', '-o-'];
		var spriteSmall = 'data:image/gif;base64,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';
		var smallStepAudio = new Audio("data:audio/mp3;base64,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");
		var spriteBig = '';
		var iterationEventTypes = { 'animation':'animationiteration', 'OAnimation':'oAnimationIteration', 'MozAnimation':'animationiteration', 'WebkitAnimation':'webkitAnimationIteration'};
		var endEventTypes = { 'animation':'animationend', 'OAnimation':'oAnimationEnd', 'MozAnimation':'animationend', 'WebkitAnimation':'webkitAnimationEnd'};
		this.addClass('alienated');
		var date = new Date();
		var time = date.getTime();
		var alienSmall = $('<div id="alien-' + time + '" >').appendTo('body');
		var innerSmall = $('<div id="inner"-' + time + ' />').appendTo(alienSmall);
		var alienSmallStepDistance = 24;
		var position = this.css('position');
		if (position !== 'absolute' && position !== 'fixed') position = 'absolute';
		var offset = this.offset();
		var blockWidth = this.width();
		var blockHeight = this.height();
		var alienSmallSteps = Math.floor((offset.left - 32) / alienSmallStepDistance);
		var stylesheet = $("<style>").attr({ id: time, type: "text/css" }).appendTo("head");
		
		var smallAlien = function(){
			var gradientStepWidth = 6;
			var gradientSteps = Math.floor(Math.min(blockWidth/gradientStepWidth/2, blockHeight/gradientStepWidth/2));
			prefixes.forEach(function(prefix){
				var hue = 360;
				var gradientStep = gradientStepWidth;
				var gradientString = ' box-shadow: inset 0 0 0 ' + gradientStep + 'px hsl(360, 100%, 50%)'
				var gradientCss = '@' + prefix + 'keyframes gradient-' + time + ' {';
				for(i=0; i < gradientSteps + 1; i++){
					gradientCss += ' ' + 100 * (i / gradientSteps) + '% {';
						gradientCss += gradientString + '; ';
					gradientCss += '}';
					hue += 8;
					gradientStep += 6;
					gradientString += ', inset 0 0 0 ' + gradientStep + 'px hsl(' + hue + ', 100%, 50%)'
				}
				gradientCss += '}';
				stylesheet.append(gradientCss);
			});
			var block = $('<div id="block-' + time + '" />').appendTo('body');
			block.css({
				'position' : position,
				'left' : offset.left,
				'top' : offset.top,
				'width' : blockWidth,
				'height' : blockHeight
			});
			prefixes.forEach(function(prefix){
				block.css( prefix + 'animation' , 'gradient-' + time + ' ' + 0.05 * gradientSteps + 's steps(' + gradientSteps + ') forwards ' + (1.2 + alienSmallSteps * 0.8) + 's');
			})
			alienSmall.css({
				'width' : 50,
				'height' : 32,
				'top' : offset.top + blockHeight / 2 - 16,
				'margin-left' : -25,
				'position' : 'absolute'
			});
			prefixes.forEach(function(prefix){
				alienSmall.css( prefix + 'animation' , 'smallWalkFire-' + time + ' ' + alienSmallSteps * 0.8 + 's steps(' + alienSmallSteps + ') forwards 0s, smallFire-' + time + ' 0s steps(1) forwards ' + alienSmallSteps * 0.8 + 's');
			})
			innerSmall.css({
				'position' : 'absolute',
				'width' : '100%',
				'height' : '100%',
				'background' : 'url('+spriteSmall+')'
			});
			prefixes.forEach(function(prefix){
				innerSmall.css( prefix + 'animation' , 'smallWalkInner-' + time + ' .8s steps(12) ' + alienSmallSteps + ' forwards 0s, smallFireInner-' + time + ' 1s steps(6) 1 forwards ' + alienSmallSteps * 0.8 + 's');
			})
			prefixes.forEach(function(prefix){
				stylesheet.append(
					'@' + prefix + 'keyframes smallWalkFire-' + time + ' { 0% { left: 0px; } 100% { left: ' + 24 * alienSmallSteps + 'px; } }\n' +
					'@' + prefix + 'keyframes smallFire-' + time + ' { 0% { width: 50px; } 100% { width: 32px; } }\n' +
					'@' + prefix + 'keyframes smallWalkInner-' + time + ' { 0% { background-position: 0px 0px; } 100% { background-position: -600px 0; } }\n' +
					'@' + prefix + 'keyframes smallFireInner-' + time + ' { 0% { background-position: -600px 0px; } 100% { background-position: -792px 0; } }'
				);
			});
			var blockEl = document.getElementById("block-" + time);
			for(t in endEventTypes){
				if( blockEl.style[t] !== undefined ){
					blockEl.addEventListener(endEventTypes[t], function(){
						setTimeout(function(){
							block.remove();
							alienSmall.remove();
							self.remove();
							stylesheet.remove();
						}, 1000)
					}, false);
				}
			}
			var alienEl = document.getElementById("alien-" + time);
			for(t in iterationEventTypes){
				if( alienEl.style[t] !== undefined ){
					alienEl.addEventListener(iterationEventTypes[t], function(){
						smallStepAudio.play()
					}, false);
				}
			}
		}
		if(!options || options == 'small') smallAlien();
		else if(options == 'big') bigAlien();
		else (console.alert('Wrong options for Alien Plugin! Must be "big" or "small"'));
	};
}(jQuery));