
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service'

@Injectable()
export class AppDataService {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: LoggerService) {
		this.language = this.getLanguage()
		this.contents = {}
		this.contents.en = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-1.jpg",
				imageForeground: "./public/images/refer-landing-masthead-2.jpg",
				alt: "Masthead image",
				title: "Dishwashers"
			},
			banner: {
				enabled: true,
				link: '/en_CA/2_3_1121/jump-page_may-is-maytag-promo.content.html',
				image: './public/images/banner.jpg',
				ctaText: 'Learn More',
				ctaBackground: './public/images/button-background.png',
				analytics: {
					category: "@category",
					action: "Clicked Footer Banner",
					label: "May-Is-Maytag-Learn-More"
				}
			},
			features: {
				enabled: true,
				title: "Get started here",
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Buying Guide",
						alt: "test",
						desc: "What to look for when buying",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "#",
						type: "cart",
						analytics: {
							category: "@category",
							action: "Clicked Laundry Resources",
							label: "Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Ratings and Reviews",
						alt: "test",
						desc: "See what others are saying",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "http://www.maytag.ca/en_CA/2_3_90/jump-page_best-products.content.html#Dishwashers",
						type: "star",
						analytics: {
							category: "@category",
							action: "Clicked Laundry Resources",
							label: "Ratings and Reviews"
						}
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Find Your Maytag",
						alt: "test",
						desc: "Need help finding your appliance?",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "http://findmy.maytag.ca/#/?category=Dishwashers",
						type: "magnifier",
						analytics: {
							category: "@category",
							action: "Clicked Laundry Resources",
							label: "Find Your MT"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Get more from Maytag<sup>&reg;</sup> dishwashers",
				features: [
					{
						title: "Fingerprint Resistant",
						image: "./public/images/more-features-1.jpg",
						link: "",
						alt: "test",
						text: "Fingerprint Resistant Stainless Steel exterior keeps your dishwasher looking as good on the outside as it works on the inside.",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Get More From Your Laundry",
							label: "Vibration Control Guarantee"
						}
					},
					{
						title: "Most Powerful Motor on the Market*",
						image: "./public/images/more-features-2.jpg",
						link: "",
						alt: "test",
						text: "Maytag<sup>®</sup> dishwashers feature the most powerful motor on the market.<sup>*</sup> From dried-on egg yolk to peanut butter, this motor can handle your dirtiest dishes.",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Get More From Your Laundry",
							label: "10-Year Warranty"
						}
					},
					{
						title: "PowerDry",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3/102290003+112290195/",
						alt: "test",
						text: "The PowerDry option reduces humidity inside the dishwasher, increasing drying power, making this our best drying dishwasher ever.",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Get More From Your Laundry",
							label: "Additional Accessories"
						}
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Built Better",
				videos: [
					{
						id: 'CCtdKj5v99Y',
						thumb: './public/images/video-select-1.jpg',
						title: 'Maytag Dishwashers – What’s Inside Matters',
						alt: "test",
						ctaTitle: 'Maytag Dishwasers – What’s Inside Matters',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Every dish you put inside your dishwasher matters. That's why everything that goes into making a Maytag<sup>&reg;</sup> dishwasher matters - American engineering, durable materials, reliable parts, and powerful performance.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Power Wash"
						}
					},
					{
						id: 'mKQzCIOWLI8',
						thumb: './public/images/video-select-2.jpg',
						title: 'Maytag Dishwashers – PowerBlast<sup>&trade;</sup> Cycle',
						alt: "test",
						ctaTitle: 'Maytag Dishwashers – PowerBlast<sup>&trade;</sup> Cycle',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "The Maytag<sup>&reg;</sup> PowerBlast<sup>&trade;</sup> Cycle can handle whatever you throw at it - from your messiest pans to your favourite glassware. First the PowerBlast<sup>&trade;</sup> Cycle uses high-pressure spray jets and increased temperature to remove tough, stuck-on food. Then, it finishes the job with hot steam to make sure your dishes come out sparkling just the way you like them.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Optimal Dose Dispenser"
						}
					},
					{
						id: 'MXS_UkL6bNI',
						thumb: './public/images/video-select-3.jpg',
						title: 'Maytag Dishwashers – Stainless Steel Chopper',
						alt: "test",
						ctaTitle: 'Maytag Dishwashers – Stainless Steel Chopper',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Skip the scraping and go straight to the dishwasher. The Maytag<sup>&reg;</sup> 4-blade stainless steel chopper has the power to get rid of stuck-on food. It disintegrates the bits of food that come off your plates so they don't end up recirculating and sticking to your dishes and because our system doesn't rely on a filter there's nothing to clean up afterwards.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Washers & Dryers"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Dishwasher options you can depend on',
				nav: {
					text: 'See<br/>All',
					link: 'http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3/102290003/',
					analytics: {
						category: "@category",
						action: "Clicked Laudry Configuration",
						label: "See all Laundry"
					}
				},
				products: [
					{
						image: "./public/images/products/top_controls.jpg",
						thumb: "./public/images/products/top_controls-small.jpg",
                        title: "Top<br/>Controls",
                        alt: "Top Controls",
                        desc: "Hidden controls at the top provide a premium design, with a sturdy handle for a commercial look and feel that looks great in any kitchen. The end of cycle indicator light lets you know what stage of the wash cycle your dishes are in, so you’ll know when they’re done. Also available in fingerprint-resistant stainless steel.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3/102290003+4294965924/",
                        id: "top-controls",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Laundry Configuration",
							label: "High Efficiency Top-Load",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/top_controls_wph.jpg",
						thumb: "./public/images/products/top_controls_wph-small.jpg",
                        title: "Top Controls with<br/>Pocket Handle",
                        alt: "Top Controls with Pocket Handle",
                        desc: "Controls are hidden at the top for a sleek design finish that looks great in any kitchen. The Pocket Handle provides a more traditional style handle that allows for simple, easy access to your dishes. Also available in fingerprint-resistant stainless steel.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3/102290003+4294965924/",
                        id: "top-controls-pocket-handle",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Laundry Configuration",
							label: "High Efficiency Front-Load",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/front_controls.jpg",
						thumb: "./public/images/products/front_controls-small.jpg",
                        title: "Front<br/>Controls",
                        alt: "Front Controls",
                        desc: "This traditional style is designed with controls on the front, with a seamless pocket handle that fits in any home. The end-of-cycle countdown keeps track of the time remaining in the wash cycle so you know the precise time before your dishes are sparkling again.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3/102290003+4294965910/",
                        id: "front-controls",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Laundry Configuration",
							label: "High Efficiency Front-Load",
							learnMore: 'Learn More'
						}
                    }
				]
			},
			legal: {
				enabled: true,
				text: [
					'<sup>*</sup>Among leading brands'
				]
			}
		}

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-1-fr.jpg",
				alt: "test",
				title: "Laveuses et sécheuses"
			},
			banner: {
				enabled: true,
				link: '/fr_CA/2_3_1121/jump-page_may-is-maytag-promo.content.html',
				image: './public/images/banner.jpg',
				ctaText: 'Learn More',
				ctaBackground: './public/images/button-background.png',
				analytics: {
					category: "@category",
					action: "Clicked Footer Banner",
					label: "May-Is-Maytag-Learn-More"
				}
			},
			features: {
				enabled: true,
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Guide d'achat",
						alt: "test",
						desc: "Éléments à considérer lorsque vous magasinez",
						ctaText: "Cliquez ici",
						ctaBackground: "./public/images/button-background.png",
						link: "/other-assets/en_CA/pdf/MT-Laundry-Buying_Guide_FR.pdf",
						type: "cart",
						analytics: {
							category: "@category",
							action: "Clicked Laundry Resources",
							label: "Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Évaluations et commentaires",
						alt: "test",
						desc: "Voyez ce que les autres clients en disent",
						ctaText: "Cliquez ici",
						ctaBackground: "./public/images/button-background.png",
						link: "http://www.maytag.ca/fr_CA/2_3_90/jump-page_best-products.content.html",
						type: "star",
						analytics: {
							category: "@category",
							action: "Clicked Laundry Resources",
							label: "Ratings and Reviews"
						}
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouvez votre électroménager Maytag",
						alt: "test",
						desc: "Vous avez besoin d'aide pour trouver votre duo de lessive?",
						ctaText: "Cliquez ici",
						ctaBackground: "./public/images/button-background.png",
						link: "http://trouvermon.maytag.ca",
						type: "magnifier",
						analytics: {
							category: "@category",
							action: "Clicked Laundry Resources",
							label: "Find Your MT"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Autres avantages des duos de lessive Maytag<sup>&reg;</sup>",
				features: [
					{
						title: "Garantie de contrôle des vibrations",
						image: "./public/images/more-features-2-fr.jpg",
						link: "http://www.maytag.ca/other-assets/fr_CA/pdf/2016_Maytag_VIBRATION_FREE_LIMITED%20GUARANTEE_FR.pdf",
						alt: "test",
						text: "Chez Maytag nous nous ne contentons pas de parler de fiabilité – nous l'appuyons.",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Additional Features",
							label: "FIT System"
						}
					},
					{
						title: "Garantie de 10 ans",
						image: "./public/images/more-features-1-fr.jpg",
						link: "http://www.maytag.ca/fr_CA/2_3_147/jump-page_ten-year-warranty.content.html",
						alt: "test",
						text: "Nous sommes tellement convaincus de la fiabilité des duos de lessive Maytag pour se charger de vos brassées pendant des années que nous les avons accompagnés d'une garantie limitée de 10 ans sur les pièces du moteur à entraînement, du panier de lavage en acier inoxydable et du tambour de la sécheuse. Visitez maytag.ca pour les détails de la garantie.",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Additional Features",
							label: "10-Year Warranty"
						}
					},
					{
						title: "Accessoires supplémentaires",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.maytag.ca/fr_CA/Laundry-1/Laundry_Laundry_Appliances_Laundry_Pedestals-3/102290063/",
						alt: "test",
						text: "",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Additional Features",
							label: "Power Burner"
						}
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Mieux construit",
				videos: [
					{
						image: './public/images/video-thumb-1.jpg',
						thumb: './public/images/video-select-1.jpg',
						title: 'Système PowerWash<sup>&reg;</sup> de Maytag<sup>&reg;</sup>',
						alt: "test",
						ctaTitle: 'Système PowerWash<sup>&reg;</sup> de Maytag<sup>&reg;</sup>',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "Le système PowerWash<sup>&reg;</sup> de Maytag<sup>&reg;</sup> utilise trois fonctions pour vous offrir un excellent nettoyage. Les distributeurs optimaux et le système Power Spray libèrent le détergent automatiquement et au bon moment, procurant aux vêtements un traitement concentré pour venir à bout des taches tenaces. Le programme PowerWash<sup>&reg;</sup> utilise une action de nettoyage supplémentaire pour combattre vos taches en un seul lavage.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Maytag Man Video"
						}
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Appareils de lessive Maytag<sup>&reg;</sup>  - Distributeur de dose optimale',
						alt: "test",
						ctaTitle: 'Appareils de lessive Maytag<sup>&reg;</sup>  - Distributeur de dose optimale',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "Élimine les approximations associées à la lessive. Le distributeur de dose optimale Maytag ajoute automatiquement la quantité exacte de détergent pour un nettoyage efficace. Étant donné qu'il peut contenir  suffisamment de détergent haute efficacité pour laver jusqu’à 12 brassées de lessive, vous n'avez plus besoin d'ajouter du détergent avant chaque lavage*. *D'après une brassée de 8 lb.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Power Pre-Heat Video"
						}
					},
					{
						id: 'KEkbdgfZ87k',
						thumb: './public/images/video-select-3.jpg',
						title: 'Laissez Maytag se charger de toutes vos affaires',
						alt: "test",
						ctaTitle: 'Laissez Maytag se charger de toutes vos affaires',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "La combinaison des laveuses et sécheuses Maytag offre à vos vêtements un nettoyage impeccable.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Evenair Video"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Construit pour nettoyer vos brassées difficiles, offert en 2 puissantes configurations',
				nav: {
					text: 'Tout<br/>Voir',
					link: 'http://www.maytag.ca/fr_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050/',
					analytics: {
						category: "@category",
						action: "Clicked Choose Your Cooking Configuration",
						label: "See all Laundry"
					}
				},
				products: [
					{
						image: "./public/images/products/top_load.png",
						thumb: "./public/images/products/top_load-small.png",
                        title: "Haute efficacité à chargement vertical",
                        alt: "Haute efficacité à chargement vertical",
                        desc: "Vous recherchez une performance optimale? Cette laveuse de style traditionnel a fait l'objet de nombreuses améliorations, offrant aujourd'hui le meilleur nettoyage de l'industrie, optimisé par le système PowerWash<sup>&reg;</sup>! Offerts en capacités moyennes à mégas, jusqu'à 7,1 pi<sup>3</sup> du C.E.I., les duos de lessive à chargement vertical haute efficacité vous permettent d'effectuer davantage de lessive en une seule fois. Recherchez également nos laveuses et sécheuses homologuées ENERGY STAR<sup>&reg;</sup> pour réduire votre consommation d'eau et d'énergie au cours de leur durée de vie - tout en vous assurant un nettoyage optimal pour tout type de brassée.",
                        link: "http://www.maytag.ca/fr_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050+4294965994/",
                        id: "top-load",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Laundry Configuration",
							label: "Front Control",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/front_load.png",
						thumb: "./public/images/products/front_load-small.png",
                        title: "Haute efficacité à chargement frontal",
                        alt: "Haute efficacité à chargement frontal",
                        desc: "Ce style contemporain permet d'économiser de l'espace tout en procurant le meilleur nettoyage de sa catégorie, optimisé par le système PowerWash<sup>&reg;</sup>*. Grâce à des trousses de superposition facultatives et un contrôle perfectionné des vibrations Advanced Vibration Control<sup>&trade;</sup>, cette configuration permet une installation dans des espaces restreints, avec un fonctionnement silencieux. Homologuées ENERGY STAR<sup>&reg;</sup>, les laveuses et sécheuses à chargement frontal à haute efficacité vous permettent de réaliser des économies d’eau et énergie tout en vous assurant un nettoyage optimal.",
                        link: "http://www.maytag.ca/fr_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050+4294965998/",
                        id: "front-load",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Laundry Configuration",
							label: "Rear Control",
							learnMore: 'Learn More'
						}
                    }
				]
			},
			legal: {
				enabled: true,
				text: [
					'<sup>*</sup>Among leading brands'
				]
			}
		}
	}

	get() {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		return this.contents[this.language];
	}

	applyText(obj) {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		if (obj.name in this.contents[this.language]) {
			for (var i in this.contents[this.language][obj.name]) {
				obj[i] = this.contents[this.language][i]
			}
		}
	}

	getLanguage() {
		var url = window.location.href
		if (url.indexOf('/fr_CA') > -1) return 'fr'
		return 'en'
	}
}