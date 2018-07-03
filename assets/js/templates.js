(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['abos'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['landing'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"flx-section flx-section--usps\" id=\"flx-s"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"container ovr-container\">\n		<div class=\"flx-grid flx-grid--1-1 flx-grid--align-center\">\n			<div class=\"flx-section__img flx-grid__"
    + alias4(((helper = (helper = helpers.order || (depth0 != null ? depth0.order : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"order","hash":{},"data":data}) : helper)))
    + " tr tr-500 tr--scale-in\">\n				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.img : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			</div>\n			<div class=\"flx-section__content\">\n				<h3 class=\"flx-section__content-item flx-section__title tr tr-stag\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<img src=\"../media/"
    + container.escapeExpression(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{},"data":data}) : helper)))
    + "\" class=\"img-responsive\" />";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<p class=\"flx-section__content-item flx-section__description tr tr-stag\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>	\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<div class=\"flx-cta__usp\">\n						<span class=\"flx-cta__icon\" include=\"../assets/img/icons/check-round--small.svg\"></span>\n						<span>"
    + container.escapeExpression(((helper = (helper = helpers.usp || (depth0 != null ? depth0.usp : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"usp","hash":{},"data":data}) : helper)))
    + "</span>\n					</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "					<li class=\"collapsibleList__item ovr-collapsibleList__item\">\n						<h3 class=\"collapsibleList__header\" id=\"keuzedagen\" tabindex=\"0\" aria-expanded=\"false\" role=\"button\">"
    + ((stack1 = ((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"question","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>   \n					</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<!------- background images ------->\n<div class=\"flx-bg--fixed\">\n	<div class=\"flx-gradient flx-gradient--light-grey alpha-1\"></div>\n	<div class=\"flx-gradient flx-gradient--cerulean js-bg-1\"></div>\n	<div class=\"flx-gradient flx-gradient--yellow js-bg-2\"></div>\n	<div class=\"flx-bg flx-bg--absolute flx-bg--white js-bg-5\"></div>\n</div>\n\n<!------- hero ------->\n<div class=\"flx-hero js-hero-content\">\n	<div class=\"flx-hero__bg\">\n		<div class=\"ani ani--fade-in\">\n			<div class=\"flx-hero__img\"></div>\n			<div class=\"flx-gradient flx-gradient--cobalt-blue\"></div>\n		</div>\n		<div class=\"flx-hero__flow\" include=\"../media/flow.svg\"></div>\n	</div>\n	<div class=\"ani ani--fade-in-up-small ani--delay-500\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-hero__content\">\n				<h1 class=\"flx-hero__title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hero : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1> \n				<h2 class=\"flx-hero__subtitle\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hero : depth0)) != null ? stack1.subtitle : stack1), depth0))
    + "</h2>\n				<button class=\"button button--nsYellow flx-button--yellow flx-button--rounded\">\n					"
    + ((stack1 = ((helper = (helper = helpers["button-cta-text"] || (depth0 != null ? depth0["button-cta-text"] : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"button-cta-text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n				</button>\n			</div>\n		</div>\n	</div>\n</div>	\n<div class=\"js-scroll-down tr-750\">\n	<div class=\"flx-hero__scrolldown ani ani--fade-in ani--delay-1250\">\n		<div class=\"scroll-down\">\n			<div class=\"scroll-down__icon\">\n				<div class=\"scroll-down__icon-circle\"></div>\n			</div>\n		</div>\n	</div>\n</div>\n		\n<!-- big fat usps with gradient transitions -->\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.section : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<!-- al het OV -->\n<div class=\"flx-section\" id=\"flx-s3\">\n	<div class=\"flx-ov__bg tr tr-500 tr--fade-in\"></div>\n	<div class=\"flx-section__container flx-section__container--large\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-grid flx-grid--2-3\">\n				<div></div>		\n				<div class=\"flx-section__content tr tr-stag\">\n					<div class=\"flx-ov__text-container\">\n						<h3 class=\"flx-section__title tr tr-stag\">\n							<b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ov : depth0)) != null ? stack1.heading : stack1), depth0))
    + "</b>\n						</h3>\n						<p class=\"flx-section__description no-margin tr tr-stag\">\n							"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ov : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n						</p>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<!-- inzicht kosten -->\n<div class=\"flx-section\" id=\"flx-s4\">\n	<div class=\"flx-costs flx-gradient--grey\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-grid flx-grid--1-1-sm\">		\n				<div class=\"flx-costs__content\">\n					<h3 class=\"flx-section__title tr tr-stag\">\n						<b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.costs : depth0)) != null ? stack1.heading : stack1), depth0))
    + "</b>\n					</h3>\n					<p class=\"flx-section__description tr tr-stag\">\n						"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.costs : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n					</p>\n				</div>\n				<div class=\"flx-costs__img tr tr-500 tr--scale-in\">\n					<img src=\"../media/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.costs : depth0)) != null ? stack1.img : stack1), depth0))
    + "\" class=\"img-responsive\" />\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<!-- 1e klas switch -->\n<div class=\"flx-section\" id=\"flx-s5\">\n	<div class=\"flx-section__container flx-bg--white\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-grid flx-grid--1-1 flx-grid--align-center\">\n				<div class=\"flx-section__img flx-section__img--100 tr tr-500 tr--scale-in\">\n					<img src=\"../media/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0["first-class"] : depth0)) != null ? stack1.img : stack1), depth0))
    + "\" class=\"img-responsive\" />\n				</div>		\n				<div class=\"flx-section__content\">\n					<h3 class=\"flx-section__title tr tr-stag\">\n						<b>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0["first-class"] : depth0)) != null ? stack1.heading : stack1), depth0)) != null ? stack1 : "")
    + "</b>\n					</h3>\n					<p class=\"flx-section__description tr tr-stag\">\n						"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0["first-class"] : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\n					</p>\n					<div class=\"tr tr-stag js-more\">\n						<div class=\"btn-more js-more-btn\">\n							<span include=\"../assets/img/icons/plus--small.svg\"></span>\n							Bekijk meer\n						</div>\n						<div class=\"flx-section__description flx-more js-more-content\">\n							A small river named Duden flows by their place and \n							supplies it with the necessary regelialia. It is a \n							paradisematic country, in which roasted parts of sentences \n							fly into your mouth. \n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<!-- abonnementen -->\n<div class=\"flx-section\" id=\"flx-s6\">\n	<div class=\"flx-section__container flx-section__container--no-padding-top flx-bg--white\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-grid flx-grid--1-1 flx-grid--align-center\">\n				<div class=\"flx-section__img flx-section__img--100 flx-grid__reverse tr tr-500 tr--scale-in\">\n					<img src=\"../media/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.abo : depth0)) != null ? stack1.img : stack1), depth0))
    + "\" class=\"img-responsive\" />\n				</div>			\n				<div class=\"flx-section__content\">\n					<h3 class=\"flx-section__title tr tr-stag\"><b>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.abo : depth0)) != null ? stack1.heading : stack1), depth0)) != null ? stack1 : "")
    + "</b></h3>\n					<p class=\"flx-section__description tr tr-stag\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.abo : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n					<div class=\"tr tr-stag\">\n						<button class=\"button flx-button flx-button--ghost flx-button--rounded\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.abo : depth0)) != null ? stack1.more : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<!-- call to action -->\n<div class=\"flx-section\" id=\"flx-s7\">\n	<div class=\"flx-section__container flx-gradient--yellow\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-section__content flx-section__content--center\">\n				<h3 class=\"flx-section__title tr tr-stag\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.cta : depth0)) != null ? stack1.heading : stack1), depth0)) != null ? stack1 : "")
    + "</h3>\n				<h4 class=\"headingM spacer-margin-1 tr tr-stag\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.cta : depth0)) != null ? stack1.subhead : stack1), depth0)) != null ? stack1 : "")
    + "</h4>\n				<p class=\"font-blue spacer-margin-4 tr tr-stag\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.cta : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n				<div class=\"tr tr-stag\">\n					<button class=\"button flx-button--blue flx-button--rounded\">\n						"
    + ((stack1 = ((helper = (helper = helpers["button-cta-text"] || (depth0 != null ? depth0["button-cta-text"] : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"button-cta-text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n					</button>\n				</div>\n			</div>\n			<div class=\"flx-section__divider flx-section__divider--alpha tr tr-500 tr--fade-in\"></div>\n			<div class=\"flx-section__content tr tr-500 tr--fade-in\">\n				<div class=\"flx-cta__usp-grid\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.cta : depth0)) != null ? stack1.usps : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<!-- testimonial -->\n<div class=\"flx-section\" id=\"flx-s8\">\n	<div class=\"flx-section__container flx-section__container--small flx-gradient--grey\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-section__content flx-testimonial__content\">\n				<div class=\"flx-grid flx-grid--align-center flx-grid--max-1 flx-grid--double-col-gap flx-grid--row-gap\">\n					<div class=\"flx-testimonial__img tr tr-500 tr--scale-in\"></div>\n					<div class=\"flx-textimonial__text\">\n						<h3 class=\"headingM spacer-margin-2 tr tr-stag\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.testimonial : depth0)) != null ? stack1.sender : stack1), depth0)) != null ? stack1 : "")
    + "</h3>\n						<p class=\"flx-testimonial__quote tr tr-stag\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.testimonial : depth0)) != null ? stack1.quote : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<!-- faq -->\n<div class=\"flx-section\" id=\"flx-s9\">\n	<div class=\"flx-section__container flx-faq\">\n		<div class=\"container ovr-container\">\n			<div class=\"flx-section__content\">\n				<h3 class=\"flx-section__title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.faq : depth0)) != null ? stack1.heading : stack1), depth0))
    + "</h3>\n				<ul class=\"list collapsibleList is-collapsible\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.faq : depth0)) != null ? stack1.questions : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});
})();