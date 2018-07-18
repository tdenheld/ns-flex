// Data template

var context_abos = {	
	"title": "NS Flex",
	"subtitle": "Nieuw: Flexibele abonnementen",
	"button-cta": "Bekijk abonnementen",
	
	"usp": {
		"icon": "kalender.svg",
		"title": "Kies de korting die <b>nu</b> bij je past. Als je wilt, pas je de korting <b>elke maand</b> aan.",
	},
	
	"stories": {
		"heading": "Dat is korting<br>wanneer het jou uitkomt",
		"item": [
			{
				"section": "s2",
				"img": "hoewerkt1.jpg",
				"month": "september",
				"title": "Op vakantie",
				"description": "Geen korting nodig",
				"suggestion": "Abonnement 1 maand uit",
			},{
				"section": "s3",
				"img": "hoewerkt2.jpg",
				"month": "oktober",
				"title": "Weer aan het werk",
				"description": "4 dagen per week naar kantoor",
				"suggestion": "Altijd Voordeel",
			},{
				"section": "s4",
				"img": "hoewerkt3.jpg",
				"month": "december",
				"title": "4x op familiebezoek",
				"description": "Korting in de daluren",
				"suggestion": "Dal Voordeel",
			},
		],
	},
	
	"overview": {
		"img": "abos.png",
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
		"heading": "De abonnementen van NS Flex<br>Net zo flexibel als jij",
		"description": "Nu vanaf € 2<br>Maandelijks aanpassen of uitzetten",
	},
	
	"faq": {
		"heading": "Klinkt dit té goed om waar te zijn?",	
		"description": "Dat klopt, maar er is geen addertje. We geloven dat flexibele abonnementen van deze tijd zijn en hopen dat er hierdoor uiteindelijk meer met de trein gereisd wordt.",
		"questions": [
			{"question": "Hoe werkt NS Flex?"},
			{"question": "Wat kost het?"},
			{"question": "Ik heb al een abonnement, kan ik dan ook NS Flex gebruiken?"},
			{"question": "Wat gebeurt er met het saldo op mijn kaart?"},
			{"question": "Ik heb nog meer vragen..."},
		],
	},
	
	"ros": {
		"heading": "<b>Niet gevonden wat je zocht?</b>",
		"tile": [
			{
				"icon": "subscription--large",
				"category": "Abonnementen op saldo",
				"description": "De oude vertrouwde vaste abonnementen op saldo. Neem het niet. Je bent dom als je dit neemt.",
				"link": "Bekijk meer",
			},{
				"icon": "business-card--large",
				"category": "Zakelijke abonnementen",
				"description": "Ben je ondernemer? NS-Business Card is dé mobiliteitskaart voor ondernemend Nederland.",
				"link": "Bekijk meer",
				"url": "https://www.ns.nl/zakelijk",
			},{
				"icon": "route--large",
				"category": "Traject Vrij abonnement",
				"description": "Met Traject Vrij reist u onbeperkt op 1 traject, elke dag, de hele dag.",
				"link": "Bekijk meer",
				"url": "https://www.ns.nl/abonnementen/traject-vrij.html",
			},
		],
		
		"adds": [
			{
				"category": "Abonnementen op saldo",
				"component": "ros-abos",
				"class": "ros-content--abos",
			},{
				"category": "Extra Voordeel",
				"component": "ros-discount",
			},{
				"category": "Zakelijke abonnementen, Snel regelen en meer",
				"component": "ros-misc",
			},
		],
	},
};

var abos = document.getElementById("abos");
if (abos) {
	abos.innerHTML = Handlebars.templates.abos(context_abos);
};

