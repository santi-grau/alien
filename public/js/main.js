/*!
 * jQuery.quark-alien
 * Licensed under MIT
 * @projectDescription MOTHERFUCKINGQUARKALIEN
 */
(function($) {
	$.fn.alien = function( options ) {
		var self = this;
		var prefixes = ['', '-webkit-', '-moz-', '-ms-', '-o-'];
		var spriteSmall = 'data:image/gif;base64,R0lGODlhOAMgAKIHAAAAALUAAWvakvkADwqrBLbtNxAA4QAAACH5BAEAAAcALAAAAAA4AyAAAAP/eLo7fiaySau9FuijAf5gGIzcFp5oI0VG6oJFXAZvbY0DJNn8MtKHAIHQ6wkENFbR9gsOl7Wmkwh9KXHVV6ygwNocOeUSrGuNH+IiOc1b73puMxz9/sgx8aytU/LoXQEPfH8pAyskhCcFAlwjfokggTlDApAiiENUlhdNbJsTTZmfN5hPoxVXD6cUW12qNXlnYXVtdHe1s7ewtrJlvZ6oBmR4vKsZG4PGE2TJygtXiM4KrQDR0g40Agaa0gQBZgXe0l0kwKfeLeFAzujT4uNK2OMHrQfyX8Vq+XO5ULH8vvT1ExjwgjAwEXJcePRongKGDhdAjMhBIsWJDjHOa9hQ/5pGZx+VcYwYUiSDji9K7rFYRWUNly5gppCJQqawBsMysLy4M2PPjT89BgX5kGLFoiSRAj26lOlSlESV8qBZc+hKqUWohtAKgusHmQoPDLmJwasls4TQprVqTO0fP1CjOh0H1+dcoVjx3jWZNyVbv32v7hUcF/Bgw4Vj/p1A5NXCxafctoQ8SnIWy5MDt6V8lnMizEtATz1JEm7iE6KVnp7puWvrsq8fa2agiwJVKoYw/NhNcbcUab6tOQu+bhzxiMfnJR8eXHlz576NP4fOm8fyHtetT8e+nUn3KN8pkCUV/YOp2j6ImwKuntsp4kLcv28vPfh6ZfDvr8ovfxN/5v/29ffJf8YQCKBv+p1gIHgBctegdg8yiKCAl0RYQVgVLEiBJhiCYp8GCY6iHogUEjIiACFacmKKKn6IYomJrAjjHzLu5yKLJt44ox41zocgiQf+QACQKfT4gpGA6Ojdjy9KKCSRSTKZomMeSingeh2mpyR+SPrXpZdb2himj1YW+GWMZ6I55oBp0timmmWikB+URb7JiZ3kxVnnms9kSQ6fCvj5p56M0XbnhKIEOUImOLqJaKOO7sbojjwGmKiZj7qHXhXtXarApkV0miCoDkrKKJeZimmqp2QKeap4h64KaZ6usiqnpbNmiGt/4+maqniCDlpriL1SIGp/Q+65qK3/n4ooKypgLpsiqaE+C2208RHr7LATHLGttO552yK33VYyLrjXnpstr+q+mi6c61YgbqzxvqubtbBWiK699Lo7AbVB4PuvvvXm+8GjFgDMQHYMzAsJwws4nGN58pr7cHgKSDxxdRRovPFvz1iMrXAQiAwvySWzSXG5KnPM8sUrd2xypCDTNrOxGB/gsa8uvxxJzjvjHHPDNwvdM9EEo5xx0VUeHbHIpMKXMNOcQpyyujWHPLLSBlANhdVdf3u011V/R3a14Z1dqtJXY12czW6/DXfcFpAtNSpq3y1e3mDzjXHYP/99tt7/Dt73MsHCJ3fGYmfNeNyL67y10mpDOPTj/5N/AwAL2jT+gwGbR9A55JpzrvCSl0s+ed2Zs0566aJHTXjDCs4ece1W+42x4bkn7bjqB9uOOW2CKj4C6KZ7/kPosWd+PPOjwwwf812fjnpwyDef+RHaiH5E15Ur6xv3nH8ftOXjf++9Nudf7xsLm0cvPfbQW3+k8dlX7zz564PPM3HUk9+9FBdAhRkvAAXE3fRYoL/AwSd/AqQV/ZLnQOJEIHQRDJSfjMc9DJovfOLbDf/Axz4QKjB9SOhf+9z3gxGSb4VOEuERvkFC/31MhiUsIQBM6LsRvPCDgKsUcX5YwiBmQXEu/ODJWqi+GsLwfkNs4g+X6MMPFvFmHJSiEv/phcLylXCAUeyeE6mWRTH+ED1l9CL4iiWsLqqwe1lK4xsZxcaAwYeIa+RhDwOAR/NRkY9WzOMf+8i+QQbSjzf8nAG+sbSWvU8MT2Th83YQyRgyUQA7BKIegxdGQF7RkDkUZCInaYb2pfGMZETiIQvJRRyO0YhGCw4hYbkwVYYSkf/r4g93qMGmyVJ9muxTK0nZSEfuJnvFhBzoNpfM+R0zdM2kIgQ0UMpNntBp1tyjvFrXscwhU2fZrOAxkRfNUdKQkuEUZ9bs9kBogvNWFnRnJBX3zXm2E53X/Bw1yylBfeJzjxGg4Tv/FYZhblN5B92a6xSaULp1s3F1s58lhZP/QSH+rqJlcxrwIPdQdf2po2AaVLeoJbzwlTSEKDMpxCp30nwujqUrvVAdyVGlkaoqchi1KE4lGqXf6YynUBwbUHtKuXSCsTuVjGHdjCrBiCrvbTn9mjVqFtWqaUlmwatpw04nHKpydR2U+ypNnVq7gF2gqulJa8fEOlabLiOrQkMamc7KVE7S1ZEYSCoU1eozmNkRZUMtq5aEE9gK2TFhLctrXXn20b6iyUNYZRNkB3YvnEX2Z5Z17J1quVTBmrWzl/gsaDHbVs2Sgq+mrayuKItXg4gJA4U1rB0k21iDXYyz7GHsa0sLoNmqrLaG8tJkWXvbzN5qtcRV7XCf4VnR/9pWuWyDgGCjO9PJUjdYuKVunTaLqZyJzSg+tdFV64NbVJ1WVeNlT3R9dFjplJc5xm3ue5OEXPDM176ofe5515sbuPK3umNdL6Wcu9zWttcZYAjvfHLiXntQiUsMYDB76/utAq+CBeudjznE+ylamOlfHoZrfOk74u3el8S8xS+B8Zthe/g3cguY1e82TAgJH/gUYMhxiy2RYxuLqcfYHZeDe4wpC/g4EeZQsB4YiGGKMDnEGn6yejvMZHhS+H4lNnF+sbxlLq+Yyzt+MQi4gUa5PTm2xCCyVj8B5ATDmM1tDjKP46zeOMv5iHJr8ybOfGVInDmgb97zn+fxZzTTt//Qx+2zlrucaEY3+ssoDjN3JT3pNwvjPH5iMKITYWfxQFkPdnaAoV0Q6jv/odTKYAGqR8GGTiN50IgzdQ8KfeRPMBAhNN4ErqtsjF3D+gM+zjWwqSTsNNPm0yHISbGHrZBlG9vZz0a2PbYRqFjnmMq/zsKq+ZxqKUuD284Ad7d5/W1vr3rJhTaDnpWxbgQDeRztZve7d6HmMjCQ1O8Wd7KBrO9999jb+P73vV/Q5oETnN/CdkBjcBJvo2Cb3KzO9ik2bQyKX1jiE8e4UVyNYzrLu+Gj4PgqRH6CTluc2QgHOAjs3O80p9zg/n65tK0tcGhrMM4wlylZzu3wdI8atuk5rnjQL35yQRfd6Bp3CM/nTHJdh7rXTx951EvO8qGjvOAtp0Cok671ravc5VjP+QW8Lvaxl7rsF0gAADs=';
		if(this.hasClass('alienated')) return;
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
		function whichAnimationEvent(el){
			var t;
			var animations = {
				'animation':'animationend',
				'OAnimation':'oAnimationEnd',
				'MozAnimation':'animationend',
				'WebkitAnimation':'webkitAnimationEnd'
			}

			for(t in animations){
				if( el.style[t] !== undefined ){
					return animations[t];
				}
			}
		}
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
			var eventTypes = {
				'animation':'animationend',
				'OAnimation':'oAnimationEnd',
				'MozAnimation':'animationend',
				'WebkitAnimation':'webkitAnimationEnd'
			}
			for(t in eventTypes){
				if( blockEl.style[t] !== undefined ){
					blockEl.addEventListener(eventTypes[t], function(){
						setTimeout(function(){
							block.remove();
							alienSmall.remove();
							self.remove();
							stylesheet.remove();
						}, 1000)
						
					
					}, false);
				}
			}
		}
		if(!options || options == 'small') smallAlien();

		this.addClass('alienated');
	};
}(jQuery));