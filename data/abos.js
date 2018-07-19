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
		"heading": "Abonnementen van NS Flex",
		"description": "Nu vanaf € 2 per maand.<br>Maandelijks aanpassen of uitzetten",
		"link": "Meer weten over NS Flex",
	},
	
	"ros": {
		"title": "Wil je liever geen NS Flex?",
		"subtitle": "Je kunt ook nog steeds kiezen voor onze klassieke abonnementen",
		"description": "Vind je achteraf betalen te spannend? Dit zijn abonnementen van NS waarbij je van te voren geld op je kaart zet om te kunnen reizen. Vaak zijn deze abonnementen per jaar afsluitbaar.",
		"button-open": "Klassieke abonnementen",
		"button-close": "Verbergen",
	},
};

var abos = document.getElementById("abos");
if (abos) {
	abos.innerHTML = Handlebars.templates.abos(context_abos);
};

