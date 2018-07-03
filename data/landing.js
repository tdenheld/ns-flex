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
			"img": "nooitmeer.svg",
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
		"heading": "Flexibel in al het OV",
		"description": "NS Flex werkt in het hele OV in Nederland. Je kunt ermee betalen in trein, metro, tram en bus. Ga je graag met de fiets? Pak overal in Nederland een OV-fiets of maak gebruik van een bewaakte stalling.",
	},
	
	"costs": {
		"heading": "Inzicht in je reiskosten. Altijd en overal",
		"description": "Zorgen over je maandbedrag? Stel zelf handige alerts in. Dan krijg je een seintje als je het bedrag bereikt dat jij hebt ingesteld.",
		"img": "kostenteller.png",
	},
	
	"first-class": {
		"heading": "Zonder gedoe,<br>reizen in stijl",
		"description": "Op langere reizen of drukkere trajecten kan het fijn zijn om soms ruimer, rustiger en luxer te reizen. Met NS Flex kun je het tot een kwartier nadat je incheckt nog switchen naar de 1e klas. Je kunt dus in de trein nog beslissen.",
		"img": "oma.jpg",
	},
	
	"abo": {
		"heading": "Je zit nergens aan vast",
		"description": "Flex is verkrijgbaar met of zonder onze abonnementen. Je bepaalt per maand of je met extra <b>korting</b> reist. Daarnaast kun je <b>maandelijks opzeggen</b> of aanpassen. Zonder kosten!",
		"more": "Meer over abonnementen",
		"img": "abos.png",
	},
	
	"cta": {
		"heading": "<b>NS Flex</b> zonder abonnement",
		"subhead": "<b>Je betaalt eenmalig € 10</b>",
		"description": "Naar keuze te combineren met een flexibel kortingsabonnement",
		"usps": [
			{"usp": "Nooit meer saldo laden"},
			{"usp": "Automatische correctie vergeten check-uit"},
			{"usp": "1 overzichtelijke rekening"},
			{"usp": "In de trein switchen naar 1e klas"},
			{"usp": "Flexibel in het gehele OV"},
			{"usp": "Maandelijks opzeggen of aanpassen"},
			{"usp": "Altijd en overal inzicht in je reiskosten"},
			{"usp": "Gemakkelijk reizen met korting"},
		],
	},
	
	"testimonial": {
		"quote": "<q>Veel klanten lieten ons weten het gedoe met saldo op hun OV-chipkaart vervelend te vinden. We denken dat we met NS Flex reizen met het OV veel prettiger maken.</q>",	
		"sender": "<b>Marik, projectleider van NS Flex:</b>",
	},
	
	"faq": {
		"heading": "Nog onduidelijkheden?",	
		"questions": [
			{"question": "Hoe bestel ik NS Flex?"},
			{"question": "Wat krijg ik als ik bestel?"},
			{"question": "Wanneer wordt mijn factuur afgeschreven?"},
			{"question": "Hoe komt het dat het € 0 is?"},
			{"question": "Is dit geen oplichting? Wat is de truc?"},
		],
	},
};

var landing = document.getElementById("landing");
landing.innerHTML = Handlebars.templates.landing(context_landing);

