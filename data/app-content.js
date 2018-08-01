// *************** app content *****************

var context = {	
	
	// landing page
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	"global": {
		"title": "NS Flex",
		"cta": {
			"url": "https://ns.nl/nsflex/webshop",
			"button": "Ja ik wil NS Flex",
		},
	},
	
	"landing": {
		"hero": {
			"subtitle": "De makkelijkste manier om te reizen in het OV",
		},		
		"button-cta": "Ja ik wil NS Flex",		
		"section": [
			{
				"order": "reverse",
				"img": "checkout.svg",
				"title": "Check <b>zorgeloos</b> in en uit zonder dat je saldo nodig hebt",
			},{
				"img": "public-transport.svg",
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
			"heading": "Jij bepaalt.<br>Op elk moment",
			"description": "Op langere reizen of drukkere trajecten kan het fijn zijn om soms ruimer, rustiger en luxer te reizen. Met NS Flex kun je het tot een kwartier nadat je incheckt nog switchen naar de 1e klas. Je kunt dus in de trein nog beslissen.",
			"img": "girl-blue.jpg",
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
			"url": "/abonnementen.html",
			"img": "abos-dal.png",
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
			"heading": "<b>NS Flex</b> zonder abonnement<br><b>€ 0 per maand</b>",
			"description": "Je betaalt eenmalig € 10 om je aan te melden",
			"usps": [
				{"usp": "Binnen 1 uur flex reizen als je al een OV&#8209;chipkaart hebt"},
				{"usp": "Binnen 1 week in huis met een nieuwe OV&#8209;chipkaart"},
			],
			"link": "Meer weten over NS Flex",
		},
		
		"testimonial": {
			"quote": "<q>Veel klanten lieten ons weten het gedoe met saldo op hun OV-chipkaart vervelend te vinden. We denken dat we met NS Flex reizen met het OV veel prettiger maken.</q>",	
			"sender": "<b>Marieke van NS Flex</b>",
		},
		
		"faq": {
			"heading": "Nog niet helemaal duidelijk?",	
			"questions": [
				{"question": "Dit klinkt te goed om waar te zijn, what’s the catch?"},
				{"question": "Wat kost het?"},
				{"question": "Ik heb al een abonnement, kan ik dan ook NS Flex gebruiken?"},
				{"question": "Wat gebeurt er met het saldo op mijn kaart?"},
				{"question": "Ik heb nog meer vragen..."},
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
				"grid": "max-1",
			},{
				"icon": "flex.svg",
				"title": "Als je wilt pas je de korting <b>elke maand</b> aan",
				"grid": "max-1",
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
					"suggestion": "Abonnement 1 maand uit",
				},{
					"img": "hoewerkt2.jpg",
					"month": "oktober",
					"title": "Weer aan het werk",
					"description": "4 dagen per week naar kantoor",
					"suggestion": "Altijd Voordeel",
				},{
					"img": "hoewerkt3.jpg",
					"month": "december",
					"title": "4x op familiebezoek",
					"description": "Korting in de daluren",
					"suggestion": "Dal Voordeel",
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
			"description": "We hebben een nieuwe korting toegevoegd: Weekend Voordeel. Daarmee reis je met 40% korting in het weekend. Voor maar € 2 per maand!",
		},
		
		"summary": [
			{
				"icon": "filter",
				"title": "Abonnement elke maand <b>aanpassen</b> of <b>uitzetten</b>",
			},{
				"icon": "ov-chip",
				"title": "Check <b>zorgeloos</b> in en uit zonder dat je saldo nodig hebt",
			},{
				"icon": "factuur",
				"title": "Aan het einde van de maand sturen we je 1 <b>overzichtelijke</b> rekening",
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
			"description": "Vind je achteraf betalen te spannend? Dit zijn abonnementen van NS waarbij je van te voren geld op je kaart zet om te kunnen reizen. Vaak zijn deze abonnementen per jaar afsluitbaar.",
			"button-open": "Klassieke abonnementen",
			"button-close": "Verbergen",
		},
	},
	
	
	// sell page
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	"sell": {
		"price": "€ 0",
		"unit": " / mnd",
		"usps": {
			"heading": "Daarom NS Flex",
			"item": [
				{
					"icon": "ov-chip--left",
					"title": "Nooit meer saldo laden",
					"description": "Je krijgt per maand een overzichtelijke rekening.",
				},{
					"icon": "factuur--left",
					"title": "Altijd inzicht in je reiskosten",
					"description": "Inclusief kostenalerts die je zelf instelt (beschikbaar vanaf oktober).",
				},{
					"icon": "exit--left",
					"title": "Je zit nergens aan vast",
					"description": "Je betaalt alleen de reizen die je maakt. Reis je niet, dan kost het je ook niets.",
				},
			],
		},
			
		"chipcards": {
			"img": "boy-blue-baloon.jpg",
			"heading": "Je kunt direct instappen",
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
			"description": "Nog geen Mijn NS-account? Wij zetten na je bestelling meteen een Mijn NS-account voor je klaar. Je hoeft alleen maar op bevestigen te klikken. Zo heb je direct volledig inzicht in je reiskosten.",
		},
	},
};

var landing = document.getElementById("landing");
if (landing) {
	landing.innerHTML = Handlebars.templates.landing(context);
};

var abos = document.getElementById("abos");
if (abos) {
	abos.innerHTML = Handlebars.templates.abos(context);
};

var sell = document.getElementById("sell");
if (sell) {
	sell.innerHTML = Handlebars.templates.sell(context);
};