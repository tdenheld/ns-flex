(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"flx-section\" id=\"flx-s"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-grid flx-grid--"
    + alias4(((helper = (helper = helpers.grid || (depth0 != null ? depth0.grid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"grid","hash":{},"data":data}) : helper)))
    + "\">\n				<div class=\"flx-section__img flx-section__img--"
    + alias4(((helper = (helper = helpers["img-class"] || (depth0 != null ? depth0["img-class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img-class","hash":{},"data":data}) : helper)))
    + " flx-grid__"
    + alias4(((helper = (helper = helpers.order || (depth0 != null ? depth0.order : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"order","hash":{},"data":data}) : helper)))
    + " tr tr-750 tr--scale-in\">\n					"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.img : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				</div>\n				<div class=\"flx-section__content flx-section__content--"
    + alias4(((helper = (helper = helpers["text-modifier"] || (depth0 != null ? depth0["text-modifier"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text-modifier","hash":{},"data":data}) : helper)))
    + "\">\n					<h3 class=\"flx-section__title tr tr-stag\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n					"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.spacer : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					<p class=\"flx-section__description tr tr-stag\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>					\n				</div>\n			</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.button : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<img src=\"../media/"
    + container.escapeExpression(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive\" />";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"spacer-margin-4\"></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "			<div class=\"flx-section__divider flx-section__divider--alpha\"></div>\n			<div class=\"flx-section__content flx-section__content--center-md-lg\">\n				<p class=\"flx-section__description tr tr-stag\"><b>"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</b></p>\n				<div class=\"spacer-margin-2\"></div>\n				<div class=\"tr tr-stag\">\n					<button class=\"button button--arrowRight\">"
    + ((stack1 = ((helper = (helper = helpers.button || (depth0 != null ? depth0.button : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n				</div>\n			</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"flx-hero flx-hero__size\">\n	<div class=\"ani ani--fade-in\">\n		<div class=\"flx-hero__img\"></div>\n		<div class=\"flx-gradient flx-gradient--vivid-blue\"></div>\n		<div class=\"flx-gradient flx-gradient--cobalt-blue\"></div>\n	</div>\n	<div class=\"flx-hero__flow\" include=\"../media/flow.svg\"></div>\n	\n	<!-- background images for desktop -->\n	<div class=\"flx-gradient flx-gradient--cerulean js-bg-0 hidden-xs hidden-sm\"></div>\n	<div class=\"flx-gradient flx-gradient--light-grey js-bg-1 hidden-xs hidden-sm\"></div>\n	<div class=\"flx-gradient flx-gradient--yellow js-bg-2 hidden-xs hidden-sm\"></div>\n	\n	<div class=\"ani ani--fade-in-up-small ani--delay-500\">\n		<div class=\"js-parallax--back flx-hero__size\">\n			<div class=\"container ovr-container\">\n				<div class=\"flx-hero__content js-hero-content tr-750\">\n					<h1 class=\"flx-hero__title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hero : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1> \n					<h2 class=\"flx-hero__subtitle\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hero : depth0)) != null ? stack1.subtitle : stack1), depth0))
    + "</h2>\n					<div class=\"spacer-margin-2\"></div>\n					<button class=\"button button--nsYellow button--arrowRight hidden-xs\">\n						"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hero : depth0)) != null ? stack1.button : stack1), depth0))
    + "\n					</button>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class=\"ani ani--fade-in ani--delay-1250\">\n		<div class=\"btn-round btn-round--down tr-500 js-hero-scroll-down js-hero-scroll-down--round\">\n			<div include=\"../assets/img/icons/chevron-m--small.svg\"></div>\n		</div>\n	</div>\n</div>\n\n<div class=\"js-parallax--front\">\n	<!-- backgrounds for mobile -->\n	<div class=\"flx-gradient flx-gradient--cerulean js-bg-0 hidden-md hidden-lg\"></div>\n	<div class=\"flx-gradient flx-gradient--light-grey js-bg-1 hidden-md hidden-lg\"></div>\n	<div class=\"flx-gradient flx-gradient--yellow js-bg-2 hidden-md hidden-lg\"></div>\n	\n	<!-- big fat usps with gradient transitions -->\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.section : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	\n	<div class=\"flx-section flx-section--last\" id=\"flx-s3\">\n		<!-- al het OV -->\n		<div class=\"flx-ov\">\n			<div class=\"container ovr-container\">\n				<div class=\"flx-grid flx-grid--1-1\">\n					<div></div>		\n					<div class=\"flx-section__content tr tr-stag\">\n						<div class=\"flx-ov__text\">\n							<h3 class=\"flx-section__title tr tr-stag\"><b>In al het openbaar vervoer</b></h3>\n							<div class=\"spacer-margin-4\"></div>\n							<p class=\"flx-section__description tr tr-stag\">\n								NS Flex werkt in het hele OV in Nederland. Je kunt ermee betalen in trein, metro, tram en bus.\n								Ga je graag met de fiets? Pak overal in Nederland een OV-fiets of maak gebruik van een bewaakte stalling.\n							</p>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		\n		<!-- inzicht kosten -->\n		<div class=\"flx-costs\">\n			<div class=\"container ovr-container\">\n				<div class=\"flx-grid flx-grid--1-1-sm\">		\n					<div class=\"flx-costs__content\">\n						<h3 class=\"flx-section__title\"><b>Inzicht in je reiskosten. Altijd en overal</b></h3>\n						<div class=\"spacer-margin-4\"></div>\n						<p class=\"flx-section__description\">\n							Zorgen over je maandbedrag? Stel zelf handige alerts in. \n							Dan krijg je een seintje als je het bedrag bereikt dat jij hebt ingesteld.\n						</p>\n					</div>\n					<div class=\"flx-costs__img\">\n						<img src=\"../media/kostenteller.png\" class=\"img-responsive\" />\n					</div>\n				</div>\n			</div>\n		</div>\n		\n		<!-- 1e klas switch -->\n		<div class=\"flx-first-class\">\n			<div class=\"container ovr-container\">\n				<div class=\"flx-grid flx-grid--1-1\">\n					<div class=\"flx-section__img flx-section__img--100 hidden-xs hidden-sm\">\n						<img src=\"../media/1eklas.jpg\" class=\"img-responsive\" />\n					</div>		\n					<div class=\"flx-section__content\">\n						<h3 class=\"flx-section__title\"><b>Druk in de trein?</b></h3>\n						<img src=\"../media/1eklas.jpg\" class=\"img-responsive hidden-md hidden-lg\" />\n						<div class=\"spacer-margin-4\"></div>\n						<p class=\"flx-section__description\">\n							Op langere reizen of drukkere trajecten kan het fijn zijn om \n							soms ruimer, rustiger en luxer te reizen. Met NS Flex kun \n							je het tot een kwartier nadat je incheckt nog switchen naar \n							de 1e klas. Je kunt dus in de trein nog beslissen.\n						</p>\n						<div class=\"spacer-margin-4\"></div>\n						<p class=\"flx-section__label\">+ Zo werkt switchen naar 1e klas</p>\n					</div>\n				</div>\n			</div>\n		</div>\n		\n		<!-- abonnementen usps -->\n		<div class=\"flx-abo\">\n			<div class=\"container ovr-container\">			\n				<div class=\"flx-section__content flx-section__content--small\">\n					<h3 class=\"flx-section__title\">\n						<b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.abo : depth0)) != null ? stack1.heading : stack1), depth0))
    + "</b>\n					</h3>\n					<div class=\"spacer-margin-4\"></div>\n					<p class=\"flx-section__description\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.abo : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n					<div class=\"spacer-margin-4\"></div>\n					<button class=\"button flx-button flx-button--ghost\">Meer over abonnementen</button>\n				</div>\n			</div>\n		</div>\n		\n		<!-- call to action -->\n		<div class=\"flx-cta tr tr-1000 tr--fade-in\">\n			<div class=\"container ovr-container\">\n				<div class=\"flx-section__content flx-section__content--center-md-lg\">\n					<h3 class=\"flx-section__title\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.cta : depth0)) != null ? stack1.heading : stack1), depth0)) != null ? stack1 : "")
    + "</h3>\n					<div class=\"spacer-margin-4\"></div>\n					<h4 class=\"headingM spacer-margin-4\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.cta : depth0)) != null ? stack1.subhead : stack1), depth0)) != null ? stack1 : "")
    + "</h4>\n					<p class=\"font-blue\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.cta : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n					<button class=\"button button--arrowRight\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.cta : depth0)) != null ? stack1.button : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n				</div>\n			</div>\n		</div>\n		\n		<!-- testimonial -->\n		<div class=\"flx-testimonial\">\n			<div class=\"container ovr-container\">\n				<div class=\"flx-section__content flx-testimonial__content\">\n					<div class=\"flx-grid flx-grid--max-1 flx-grid--double-col-gap flx-grid--row-gap\">\n						<div class=\"flx-testimonial__img\"></div>\n						<div class=\"flx-textimonial__text\">\n							<h3 class=\"flx-testimonial__quote\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.testimonial : depth0)) != null ? stack1.quote : stack1), depth0)) != null ? stack1 : "")
    + "</h3>\n							<p class=\"flx-testimonial__sender\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.testimonial : depth0)) != null ? stack1.sender : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>	\n	<footer class=\"footer ovr-footer\" data-noindex=\"true\">\n		<div class=\"container\">\n		    <div class=\"grid grid--footer\" data-type=\"bottomfootermenu\">\n		        <div class=\"grid__unit\">\n		            <div class=\"footer__menuContainer\">\n		                <ul class=\"footer__menu list list--horizontal\" data-controller=\"generic/ui/EqualWidth\">\n		                    <li class=\"list__item\">\n		                        <a href=\"/disclaimer.html\" class=\"arrowLink arrowLink--grey\">\n		                        Disclaimer</a>\n		                    </li>\n		                    <li class=\"list__item\">\n		                        <a href=\"/privacy.html\" class=\"arrowLink arrowLink--grey\">\n		                        Privacy</a>\n		                    </li>\n		                    <li class=\"list__item\">\n		                        <a href=\"/bedrijfsinformatie.html\" class=\"arrowLink arrowLink--grey\">\n		                        Bedrijfsinformatie</a>\n		                    </li>\n		                    <li class=\"list__item\">\n		                        <a href=\"/voorwaarden.html\" class=\"arrowLink arrowLink--grey\">\n		                        Voorwaarden en folders</a>\n		                    </li>\n		                </ul>\n		                <div class=\"nslogo nslogo--footer\">\n		                    <a class=\"nslogo__link\" href=\"/\" title=\"Ga naar de homepagina\">\n		                    <img class=\"nslogo__image\" src=\"../assets/img/NS_logo.svg\" height=\"20\" width=\"52\" alt=\"Logo Nederlandse Spoorwegen\" />\n		                    </a>\n		                </div>\n		            </div>\n		        </div>\n		    </div>\n		</div>\n	</footer>\n</div>";
},"useData":true});
})();