// Data template

var context = {	
	"hero": {
		"title": "NS Flex",
		"subtitle": "De makkelijkste manier om te reizen in het OV",
		"button": "Ondek meer"
	},
	
	"section": [
		{
			"img": "nooitmeer.svg",
			"title": "<b>Nooit meer saldo laden</b>",
			"description": "Check zorgeloos in en uit zonder dat je saldo nodig hebt.",
			"label": "<b>NS Flex vanaf € 0 per maand</b>",
			"button": "Bekijk de opties",
			"button-class": "flx-button flx-button--ghost",
			"grid": "1-1",
		},{
			"order": "reverse",
			"img": "public-transport.svg",
			"title": "<b>In al het openbaar vervoer</b>",
			"spacer": true,
			"description": "NS Flex is gemakkelijk en werkt in het hele OV in Nederland. Je kunt ermee betalen in trein, metro, tram en bus. Als het druk is, switch je zelfs in de trein nog naar de eerste klas. Het is makkelijker en veiliger dan reizen met je huidige OV-chipkaart.",
			"grid": "1-1",
		},{
			"img": "checkout.svg",
			"title": "Vergeet je een keer uit te checken, dan corrigeren we dat <b>automatisch</b>",
			"spacer": true,
			"description": "Aan het einde van de maand sturen we je één overzichtelijke rekening.",
			"grid": "1-1",
		},{
			"order": "reverse",
			"img": "kostenteller.svg",
			"img-class": "ui-element",
			"title": "<b>Inzicht in je reiskosten. Altijd en overal</b>",
			"spacer": true,
			"description": "Zorgen over je maandbedrag? Stel zelf handige alerts in. Dan krijg je een seintje als je het bedrag bereikt dat jij hebt ingesteld.",
			"grid": "1-1",
		},{
			"text-modifier": "white",
			"title": "<b>Druk in de trein?</b>",
			"spacer": true,
			"description": "Op langere reizen of drukkere trajecten kan het fijn zijn om soms ruimer, rustiger en luxer te reizen. Met NS Flex kun je het tot een kwartier nadat je incheckt nog switchen naar de 1e klas. Je kunt dus in de trein nog beslissen.",
			"label": "Zo werkt switchen naar 1e klas",
			"button": "Bekijk meer",
			"button-class": "button--nsYellow",
			"grid": "2-3",
		},
	],
	
	"abo": {
		"heading": "Je zit nergens aan vast",
		"usps" : [
			{
				"icon": "discount--large",
				"title": "Een maandje extra korting?",
				"description": "Flex is verkrijgbaar met of zonder onze abonnementen. Je bepaalt per maand of je met extra korting reist.",
				"link": "Meer over flex met een abonnement",
			},{
				"icon": "phone--medium",
				"title": "Maandelijks aanpassen",
				"description": "Flex kun je maandelijks opzeggen of aanpassen. Zonder kosten! Wij vertrouwen erop dat je nooit meer zonder wilt.",
			},
		],
	},
	
	"cta": {
		"heading": "<b>Het kost je (bijna) niets extra</b>",
		"subhead": "NS Flex zonder abonnement <b><br>€ 0,- per maand</b>",
		"description": "Je betaald eenmalig € 10 om je aan te melden.",
		"button": "Stel samen",
	},
	
	"testimonial": {
		"quote": "Veel klanten lieten ons weten het gedoe met saldo op hun OV-chipkaart vervelend te vinden. We denken dat we met NS Flex reizen met het OV veel prettiger maken.",	
		"sender": "— Marieke, bedenker van NS Flex",
	},
};

var app = document.getElementById("app");
app.innerHTML = Handlebars.templates.app(context);

