function jokeClick(animal) {
	if (animal == "lion") {
		document.getElementById("lionJoke").textContent = "Why do lions refuse to play cards in the jungle? ... Because there are too many cheetahs!";
	} else if (animal == "panda") {
		document.getElementById("pandaJoke").textContent = "Why do pandas like older movies? ... Because they're in black and white!";
	} else if (animal == "tiger") {
		document.getElementById("tigerJoke").textContent = "Why does the tiger always wear stripes? ... Because he doesn't want to be spotted!";
	} else {
		document.getElementById("elephantJoke").textContent =  "Why does the elephant bring a suitcase with them everywhere they go? ... Because he wanted to pack his trunk!";	
	}
}

function bonusFact(animal) {
    if (animal == "lizard") {
		document.getElementById("lizardFact").textContent = "Some lizards make a clicking sound with their mouth when they are excited.";
	} else if (animal == "turtle") {
		document.getElementById("turtleFact").textContent = "Turtles can live on land and in the water!";
	} else if (animal == "snake") {
		document.getElementById("snakeFact").textContent = "Snakes do not have eyelids!";
	} else if (animal == "chameleon") {
		document.getElementById("chameleonFact").textContent = "Chameleons tongues can be twice as long as their body!";	
	} else if (animal == "salmon") {
		document.getElementById("salmonFact").textContent = "Salmon spend years away from their home and eventually come back to same river that they were born in.";
	} else if (animal == "catfish") {
		document.getElementById("catfishFact").textContent = "Catfish are known for having \"whiskers\".";
	} else if (animal == "clownfish") {
		document.getElementById("clownfishFact").textContent = "Clownfish get their name due to their silly behavior and bright color.";
	} else {
		document.getElementById("flounderFact").textContent = "Flounders can swim on the ocean floor using their flat bodies!";	
	}
}

function question(animal) {
    if (animal == "seagull") {
		document.getElementById("seagullQuestion").textContent = "Have you ever seen a seagull while sitting on the beach?";
	} else if (animal == "penguin") {
		document.getElementById("penguinQuestion").textContent = "Do you think you could live in cold temperatures like penguins do?";
	} else if (animal == "eagle") {
		document.getElementById("eagleQuestion").textContent = "Did you know that eagles are national bird for the United States?";
	} else {
		document.getElementById("hawkQuestion").textContent = "Can you spot the differences between the appearance of a hawk and an eagle?";	
	}
}