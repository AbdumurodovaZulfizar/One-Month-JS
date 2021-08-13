			var bars = [
				'Siggys',
				'Blind Tiger',
				'Zum Schneider',
				'One Month',
				'Home Sweet Home',
				'Union Pool'
			];

			var friends = [
				'Mattan',
				'Chris',
				'Lee',
				'Casey',
				'that girl you forgot to text back',
				'Kayne West'
			];

			friends.push("Zulfizar");
			friends[7]= "Zulfizar";

			document.write(friends);

			var randomNumber = Math.floor(Math.random() * bars.length);

			var barname = bars[randomNumber];
			var friendname = friends[randomNumber];
			document.write(`<h2>${Math.random()}</h2>`);
			document.write(`<h1>${randomNumber}</h1>`);
			document.write("How about you go to <strong>" + barname + "</strong> with <strong>" + friendname + "</strong>?");