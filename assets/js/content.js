// *************** app content *****************

var context = {	
	
	// tell page
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	"global": {
		"title": "NS Flex",
		"cta": {
			"url": "https://ns.nl/nsflex/webshop",
			"button": "Ja ik wil NS Flex",
		},
	},
	
	"tell": {
		"hero": {
			"subtitle": "De makkelijkste manier om te reizen in het OV",
			"img": "hakim",
		},		
		"button-cta": "Ja ik wil NS Flex",		
		"section": [
			{
				"order": "order-3",
				"img": "checkout.svg",
				"title": "Check <b>zorgeloos</b> in en uit zonder dat je saldo nodig hebt",
			},{
				"img": "public-transport.svg",
				"title": "Vergeet je een keer uit te checken, dan corrigeren we dat <b>automatisch</b>",
			},{
				"order": "order-3",
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
			"heading": "Jij bepaalt.<br>Op elk moment",
			"description": "Is het wat drukker in de trein? Met NS Flex switch je makkelijk naar 1e klas. Tot wel 15 minuten nadat je hebt ingecheckt. Ook fijn als je telefoon leeg is, want: stopcontacten.",
			"img": "girl-wink.jpg",
			"button": "Hoe werkt het?",
			"list": [
				{"item": "Ga naar Mijn NS"},
				{"item": "Switch van klasse op het dashboard"},
				{"item": "Stel de geldigheidsduur in"},
			],
		},
		
		"abo": {
			"heading": "Je zit nergens aan vast",
			"description": "NS Flex is verkrijgbaar met of zonder abonnement. Je bepaalt per maand of je met extra <b>korting</b> reist. Daarnaast kun je <b>maandelijks opzeggen</b> of je korting aanpassen. Zonder kosten!",
			"more": "Meer over abonnementen",
			"url": "/abonnementen.html",
			"img": "abos-dal.png",
		},
		
		"summary": [
			{
				"icon": "ov-chip",
				"title": "Nooit meer saldo laden",
			},{
				"icon": "factuur",
				"title": "Altijd inzicht in je kosten",
			},{
				"icon": "exit",
				"title": "Je zit nergens aan vast",
			},
		],
		
		"cta": {
			"heading": "<b>NS Flex</b> zonder abonnement<br><b>€ 0 per maand</b>",
			"description": "Je betaalt eenmalig € 10 om je aan te melden",
			"usps": [
				{"usp": "Binnen 1 uur flex reizen als je al een OV&#8209;chipkaart hebt"},
				{"usp": "Binnen 1 week in huis met een nieuwe OV&#8209;chipkaart"},
			],
			"link": "Meer weten over NS Flex",
		},
		
		"testimonial": {
			"quote": "<q>Veel klanten lieten ons weten saldo op hun OV-chipkaart maar gedoe te vinden. Met NS Flex willen we reizen in het OV veel prettiger maken.</q>",	
			"sender": "<b>Marieke van NS Flex</b>",
		},
		
		"faq": {
			"heading": "Nog niet alles duidelijk?",	
			"questions": [
				{"question": "€ 0 per maand, dat klinkt te mooi om waar te zijn. Zit er geen addertje onder het gras?"},
				{"question": "Ik heb al een kortingsabonnement van NS. Kan ik NS Flex nemen?"},
				{"question": "Er staat nog saldo op mijn OV-chipkaart. Wat gebeurt daarmee?"},
			],
		},
	},
	
	
	// abonnementen
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------	
	"abos": {
		"title": "Abonnementen",
		"subtitle": "Nieuw: Flexibele abonnementen",
		"button-cta": "Bekijk abonnementen",
		
		"usps": [
			{
				"icon": "heart.svg",
				"title": "Met NS flex kies je de korting die <b>deze maand</b> bij je past",
			},{
				"icon": "filter.svg",
				"title": "Als je wilt pas je de korting <b>elke maand</b> aan",
			},
		],
		
		"stories": {
			"heading": "Zo heb je altijd de juiste korting",
			"item": [
				{
					"img": "hoewerkt1.jpg",
					"month": "september",
					"title": "Op vakantie",
					"description": "Geen korting nodig",
					"suggestion": "Zet abonnement 1 maand uit",
				},{
					"img": "hoewerkt2.jpg",
					"month": "oktober",
					"title": "Weer aan het werk",
					"description": "Vaker in de spits",
					"suggestion": "Zet Altijd Voordeel aan",
				},{
					"img": "hoewerkt3.jpg",
					"month": "december",
					"title": "Vaak op familiebezoek",
					"description": "Korting op feestdagen",
					"suggestion": "Switchen naar Dal Voordeel",
				},
			],
		},
		
		"costs": {
			"heading": "Je checkt zorgeloos in en uit",
			"description": "We brengen je reiskosten pas aan het einde van je maand in rekening, samen met je abonnement. Je hebt dus nooit meer saldo nodig. Je hebt bovendien <b>altijd inzicht in je reiskosten</b> via Mijn NS.",
		},
		
		"overview": {
			"img": "abos-weekend.png",
			"title": "Al voordeliger als je 1x reist in het weekend",
			"description": "We hebben nieuwe korting toegevoegd: Weekend Voordeel. Daarmee reis je met 40% korting in het weekend. Voor maar € 2 per maand!",
		},
		
		"summary": [
			{
				"icon": "filter--small",
				"title": "Abonnement elke maand <b>aanpassen</b> of <b>uitzetten</b>",
			},{
				"icon": "ov-chip",
				"title": "Check <b>zorgeloos</b> in en uit zonder dat je saldo nodig hebt",
			},{
				"icon": "factuur",
				"title": "Per maand sturen we je 1 <b>overzichtelijke</b> rekening",
			},
		],
		
		"cta": {
			"heading": "Abonnementen van NS Flex",
			"description": "Al vanaf € 2 per maand.<br>Maandelijks aanpassen of uitzetten",
			"link": "Meer weten over NS Flex",
		},
		
		"ros": {
			"title": "Wil je liever geen NS Flex?",
			"subtitle": "Je kunt ook nog steeds kiezen voor onze klassieke abonnementen",
			"description": "Met deze abonnementen zet je vooraf saldo op je kaart. Hiervoor moet je naar een kaartautomaat of een laadpunt. Deze abonnementen zijn niet voor dezelfde prijs maandelijks aanpasbaar.",
			"button-open": "Klassieke abonnementen",
			"button-close": "Verbergen",
		},
	},
	
	
	// sell page
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	"sell": {
		"hero": {
			"img": "hakim",
		},
		
		"price": "€ 0",
		"unit": " / mnd",
		"usps": {
			"heading": "Daarom NS Flex",
			"item": [
				{
					"icon": "heart--small",
					"title": "Nooit meer saldo laden",
					"description": "Je krijgt per maand een overzichtelijke rekening.",
				},{
					"icon": "binoculars",
					"title": "Altijd inzicht in je reiskosten",
					"description": "Inclusief kostenalerts die je zelf instelt (beschikbaar vanaf oktober).",
				},{
					"icon": "filter--small",
					"title": "Je zit nergens aan vast",
					"description": "Je betaalt alleen de reizen die je maakt. Reis je niet, dan kost het je ook niets.",
				},
			],
		},
			
		"chipcards": {
			"img": "girl-bubblegum.jpg",
			"heading": "Je kunt direct inchecken",
			"item": [
				{
					"title": "Met je eigen OV-chipkaart",
					"description": "NS Flex staat binnen een uur klaar bij de kaartautomaat. Je kunt daarna direct inchecken en reizen. Het saldo dat nog op je kaart staat storten we automatisch naar je terug.",
				},{
					"title": "Of gratis nieuwe OV-chipkaart",
					"description": "Kies je voor een gratis nieuwe OV-chipkaart, dan heb je NS Flex binnen een week in huis. Met je nieuwe kaart kun je direct reizen.",
				},
			],
		},
		
		"costs": {
			"heading": "Alles staat voor je klaar",
			"description": "Altijd en overal inzicht in de reiskosten met Mijn NS. Heb je nog geen Mijn NS-account? Wij zetten na je bestelling meteen een voor je klaar. Je hoeft alleen maar op bevestigen te klikken.",
		},
	},
};

var subnav = document.getElementById("subnav");
if (subnav) {
	subnav.innerHTML = Handlebars.templates.subnav(context);
};

var tell = document.getElementById("tell");
if (tell) {
	tell.innerHTML = Handlebars.templates.tell(context);
};

var abos = document.getElementById("abos");
if (abos) {
	abos.innerHTML = Handlebars.templates.abos(context);
};

var sell = document.getElementById("sell");
if (sell) {
	sell.innerHTML = Handlebars.templates.sell(context);
};