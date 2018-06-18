// Data template

var context = {	
	"hero": {
		"title": "NS Flex",
		"subtitle": "De makkelijkste manier om te reizen in het OV",
		"button": "Ondek meer"
	},
	
	"section": [
		{
			"order": "reverse",
			"img": "nooitmeer.svg",
			"title": "<b>Nooit meer saldo laden</b>",
			"description": "Check zorgeloos in en uit zonder dat je saldo nodig hebt. In het gehele openbaar vervoer in Nederland.",
			"grid": "1-1",
		},{
			//"order": "reverse",
			"img": "checkout.svg",
			"title": "Vergeet je een keer uit te checken, dan corrigeren we dat <b>automatisch</b>",
			"grid": "1-1",
		},{
			"order": "reverse",
			"img": "invoice.svg",
			"title": "<b>Aan het einde van de maand sturen we je 1 overzichtelijke rekening </b>",
			"label": "<b>NS Flex vanaf € 0 per maand</b>",
			"button": "Bekijk de opties",
			"button-class": "flx-button flx-button--ghost",
			"grid": "1-1",
		},
	],
	
	"abo": {
		"heading": "Je zit nergens aan vast",
		"usps" : [
			{
				"icon": "discount--medium",
				"title": "Een maandje extra korting?",
				"description": "Flex is verkrijgbaar met of zonder onze abonnementen. Je bepaalt per maand of je met extra korting reist.",
				"link": "Meer over flex met een abonnement",
			},{
				"icon": "ns-flex--large",
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

