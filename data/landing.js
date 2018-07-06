// Data template

var context_landing = {	
	"hero": {
		"title": "NS Flex",
		"subtitle": "De makkelijkste manier om te reizen in het OV",
	},
	
	"button-cta-text": "Ja ik wil NS Flex",
	
	"section": [
		{
			"order": "reverse",
			"img": "public-transport.svg",
			"title": "Check <b>zorgeloos</b> in en uit zonder dat je saldo nodig hebt",
		},{
			"img": "checkout.svg",
			"title": "Vergeet je een keer uit te checken, dan corrigeren we dat <b>automatisch</b>",
		},{
			"order": "reverse",
			"img": "invoice.svg",
			"title": "Aan het einde van de maand sturen we je 1 <b>overzichtelijke</b> rekening",
		},
	],
	
	"ov": {
		"heading": "Flexibel in het gehele OV",
		"description": "NS Flex werkt in het hele OV in Nederland. Je kunt ermee betalen in trein, metro, tram en bus. Ga je graag met de fiets? Pak overal in Nederland een OV-fiets of maak gebruik van een bewaakte stalling.",
	},
	
	"costs": {
		"heading": "Inzicht in je reiskosten. Altijd en overal",
		"description": "Zorgen over je maandbedrag? Stel zelf handige alerts in. Dan krijg je een seintje als je het bedrag bereikt dat jij hebt ingesteld.",
		"img": "kostenteller.png",
	},
	
	"first-class": {
		"heading": "Zonder gedoe,<br>reizen met klasse",
		"description": "Op langere reizen of drukkere trajecten kan het fijn zijn om soms ruimer, rustiger en luxer te reizen. Met NS Flex kun je het tot een kwartier nadat je incheckt nog switchen naar de 1e klas. Je kunt dus in de trein nog beslissen.",
		"img": "bike-yellow.jpg",
		"button": "Hoe werk het?",
		"list": [
			{"item": "Ga naar Mijn NS"},
			{"item": "Switch van klasse op het dashboard"},
			{"item": "Stel de geldigheidsduur in"},
		],
	},
	
	"abo": {
		"heading": "Je zit nergens aan vast",
		"description": "Flex is verkrijgbaar met of zonder onze abonnementen. Je bepaalt per maand of je met extra <b>korting</b> reist. Daarnaast kun je <b>maandelijks opzeggen</b> of aanpassen. Zonder kosten!",
		"more": "Meer over abonnementen",
		"img": "abos.png",
	},
	
	"summary": [
		{
			"icon": "ov-chip",
			"title": "Nooit meer saldo laden",
		},{
			"icon": "factuur",
			"title": "1 overzichtelijke rekening van je reizen in het OV",
		},{
			"icon": "exit",
			"title": "Je zit nergens aan vast",
		},
	],
	
	"cta": {
		"heading": "NS Flex<br>Net zo flexibel als jij",
		"description": "Naar keuze te combineren<br>met een flexibel kortingsabonnement",
		"usps": [
			{"usp": "Binnen 1 uur flex reizen als je al een OV&#8209;chipkaart hebt"},
			{"usp": "Binnen 1 week in huis met een nieuwe OV&#8209;chipkaart"},
		],
	},
	
	"testimonial": {
		"quote": "<q>Veel klanten lieten ons weten het gedoe met saldo op hun OV-chipkaart vervelend te vinden. We denken dat we met NS Flex reizen met het OV veel prettiger maken.</q>",	
		"sender": "<b>Marik, projectleider van NS Flex:</b>",
	},
	
	"faq": {
		"heading": "Nog onduidelijkheden?",	
		"questions": [
			{"question": "Dit klinkt te goed om waar te zijn, what’s the catch?"},
			{"question": "Wat kost het?"},
			{"question": "Ik heb al een abonnement, kan ik dan ook NS Flex gebruiken?"},
			{"question": "Wat gebeurt er met het saldo op mijn kaart?"},
			{"question": "Ik heb nog meer vragen..."},
		],
	},
};

var landing = document.getElementById("landing");
if (landing) {
	landing.innerHTML = Handlebars.templates.landing(context_landing);
};

