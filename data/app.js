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
			"title": "Check zorgeloos in en uit zonder dat je saldo nodig hebt",
			"grid": "1-1",
		},{
			"img": "checkout.svg",
			"title": "Vergeet je een keer uit te checken, dan corrigeren we dat automatisch",
			"grid": "1-1",
		},{
			"order": "reverse",
			"img": "invoice.svg",
			"title": "Aan het einde van de maand sturen we je 1 overzichtelijke rekening",
			"label": "NS Flex vanaf € 0 per maand",
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
			},{
				"icon": "ns-flex--large",
				"title": "Maandelijks aanpassen",
				"description": "Flex kun je maandelijks opzeggen of aanpassen. Zonder kosten! Wij vertrouwen erop dat je nooit meer zonder wilt.",
			},
		],
		"link": "Meer over abonnementen",
	},
	
	"cta": {
		"heading": "<b>Het kost je (bijna) niets extra</b>",
		"subhead": "NS Flex zonder abonnement <b><br>€ 0,- per maand</b>",
		"description": "Je betaalt eenmalig € 10 om je aan te melden.",
		"button": "Stel samen",
	},
	
	"testimonial": {
		"quote": "<q>Veel klanten lieten ons weten het gedoe met saldo op hun OV-chipkaart vervelend te vinden. We denken dat we met NS Flex reizen met het OV veel prettiger maken.</q>",	
		"sender": "— Marieke, bedenker van NS Flex",
	},
};

var app = document.getElementById("app");
app.innerHTML = Handlebars.templates.app(context);

