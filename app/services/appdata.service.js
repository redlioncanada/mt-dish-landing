System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var AppDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AppDataService = (function () {
                function AppDataService(logger) {
                    this.logger = logger;
                    this.language = this.getLanguage();
                    this.contents = {};
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
                                    link: "/other-assets/en_CA/pdf/MT-DishBuyingGuide-EN.pdf",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Resources",
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
                                        action: "Clicked Dish Resources",
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
                                        action: "Clicked Dish Resources",
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
                                        action: "Clicked Get More From Your Dish",
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
                                        action: "Clicked Get More From Your Dish",
                                        label: "10-Year Warranty"
                                    }
                                },
                                {
                                    title: "PowerDry",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "",
                                    alt: "test",
                                    text: "The PowerDry option reduces humidity inside the dishwasher, increasing drying power, making this our best drying dishwasher ever.",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Get More From Your Dish",
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
                                        label: "Inside Matters Video"
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
                                        label: "PowerBlast Video"
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
                                        label: "Stainless Steel Video"
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
                                    label: "See all Dish"
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
                                        action: "Clicked Dish Configuration",
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
                                        action: "Clicked Dish Configuration",
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
                                        action: "Clicked Dish Configuration",
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
                    };
                    this.contents.fr = {
                        masthead: {
                            enabled: true,
                            image: "./public/images/refer-landing-masthead-1-fr.jpg",
                            alt: "test",
                            title: "Lave-Vaisselle"
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
                            title: "Commencez ici",
                            features: [
                                {
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Guide d'achat",
                                    alt: "test",
                                    desc: "Éléments à considérer lorsque vous magasinez",
                                    ctaText: "Cliquez ici",
                                    ctaBackground: "./public/images/button-background.png",
                                    link: "/other-assets/en_CA/pdf/MT-DishBuyingGuide-FR.pdf",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Resources",
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
                                        action: "Clicked Dish Resources",
                                        label: "Ratings and Reviews"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Trouvez votre lave-vaisselle Maytag",
                                    alt: "test",
                                    desc: "Vous avez besoin d'aide pour trouver votre duo de lessive?",
                                    ctaText: "Cliquez ici",
                                    ctaBackground: "./public/images/button-background.png",
                                    link: "http://trouvermon.maytag.ca/#/?category=Dishwashers",
                                    type: "magnifier",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Resources",
                                        label: "Find Your MT"
                                    }
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Tirez le meilleur parti des lave-vaisselle Maytag<sup>&reg;</sup>",
                            features: [
                                {
                                    title: "Acier inoxydable résistant aux traces de doigt",
                                    image: "./public/images/more-features-2-fr.jpg",
                                    link: "",
                                    alt: "test",
                                    text: "L’extérieur en acier inoxydable résistant aux traces de doigts fait que votre lave-vaisselle est aussi beau à l'extérieur qu'il est fonctionnel à l'intérieur.",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Additional Features",
                                        label: "FIT System"
                                    }
                                },
                                {
                                    title: "Le moteur le plus puissant",
                                    image: "./public/images/more-features-1-fr.jpg",
                                    link: "",
                                    alt: "test",
                                    text: "Les lave-vaisselle Maytag<sup>&reg;</sup> sont dotés du moteur le plus puissant sur le marché*. Des jaunes d'œufs collés au beurre d’arachides, ce moteur se charge de vos assiettes les plus sales. ",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Additional Features",
                                        label: "10-Year Warranty"
                                    }
                                },
                                {
                                    title: "Séchage PowerDry",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "",
                                    alt: "test",
                                    text: "L’option PowerDry réduit l’humidité à l’intérier du lave-vaisselle et utilise une puissance de séchage accrue, pour une excellente efficacité de séchage dans votre lave-vaisselle.",
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
                                    title: 'Lave-vaisselle Maytag – C’est ce qui est à l’intérieur qui compte',
                                    alt: "test",
                                    ctaTitle: 'Lave-vaisselle Maytag – C’est ce qui est à l’intérieur qui compte',
                                    ctaText: 'Voir',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "Chaque assiette que vous placez dans votre lave-vaisselle compte. C’est la raison pour laquelle chaque pièce de fabrication des lave-vaisselle Maytag<sup>&reg;</sup> est importante. Ces derniers sont conçus aux États-Unis, avec des matériaux durables, des pièces fiables et une performance de pointe.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "Inside Matters Video"
                                    }
                                },
                                {
                                    image: './public/images/video-thumb-2.jpg',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Lave-vaisselle Maytag – Programme PowerBlast<sup>&trade;</sup>',
                                    alt: "test",
                                    ctaTitle: 'Lave-vaisselle Maytag – Programme PowerBlast<sup>&trade;</sup>',
                                    ctaText: 'Voir',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "Le programme PowerBlast<sup>&trade;</sup> de Maytag<sup>&reg;</sup> nettoie efficacement tout ce que vous y mettez, de vos casseroles les plus souillées à vos verres favoris. Le programme PowerBlast<sup>&trade;</sup> utilise d’abord des jets à haute pression afin de retirer les aliments collés et incrustés. Puis il termine avec de la vapeur chaude afin que vos assiettes ressortent étincelantes, comme vous les aimez.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "PowerBlast Video"
                                    }
                                },
                                {
                                    id: '',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Lave-vaisselle Maytag – Broyeur en acier inoxydable',
                                    alt: "test",
                                    ctaTitle: 'Lave-vaisselle Maytag – Broyeur en acier inoxydable',
                                    ctaText: 'Voir',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "Plus besoin de récurer, vous pouvez mettre vos assiettes directement dans le lave-vaisselle. Le broyeur en acier inoxydable Maytag<sup>&reg;</sup> à 4 lames est suffisamment puissant pour pulvériser les aliments collés. Il désintègre les particules alimentaires qui se détachent de votre vaisselle, leur évitant ainsi de recirculer et de s’y recoller. Grâce à ce système sans filtre, aucun nettoyage n’est nécessaire après le lavage.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "Stainless Steel Video"
                                    }
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Des options de lavage sur lesquelles vous pouvez compter.',
                            nav: {
                                text: 'Tout<br/>voir',
                                link: '#',
                                analytics: {
                                    category: "@category",
                                    action: "Clicked Laudry Configuration",
                                    label: "See all Dish"
                                }
                            },
                            products: [
                                {
                                    image: "./public/images/products/top_controls.jpg",
                                    thumb: "./public/images/products/top_controls-small.jpg",
                                    title: "Commandes<br/>dissimulées",
                                    alt: "Commandes dissimulées",
                                    desc: "Les commandes discrètement placées sur le haut du lave-vaisselle lui donnent une allure de gamme supérieure et la poignée robuste offre une apparence et un toucher professionnel qui mettra en valeur toute cuisine. Le voyant lumineux de fin de programme vous indique également la progression du lavage de votre vaisselle. Ce modèle est également offert en acier inoxydable résistant aux traces de doigts.",
                                    link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3/102290003+4294965996/",
                                    id: "top-controls",
                                    ctaText: "En savoir plus",
                                    ctaBackground: "./public/images/button-background.png",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Configuration",
                                        label: "High Efficiency Top-Load",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/top_controls_wph.jpg",
                                    thumb: "./public/images/products/top_controls_wph-small.jpg",
                                    title: "Commandes dissimulées avec<br/>poignée encastrée",
                                    alt: "Commandes dissimulées avec poignée encastrée",
                                    desc: "Les commandes sont discrètement placées sur le haut du lave-vaisselle, offrant un style élégant à toute cuisine. La poignée encastrée d’un style plus traditionnel permet un accès facile et pratique à vos assiettes. Ce modèle est également offert en acier inoxydable résistant aux traces de doigts.",
                                    link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3/102290003+4294965996/",
                                    id: "top-controls-pocket-handle",
                                    ctaText: "En savoir plus",
                                    ctaBackground: "./public/images/button-background.png",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Configuration",
                                        label: "High Efficiency Front-Load",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/front_controls.jpg",
                                    thumb: "./public/images/products/front_controls-small.jpg",
                                    title: "Commandes<br/>frontales",
                                    alt: "Commandes frontales",
                                    desc: "Ce modèle de style traditionnel est conçu avec des commandes sur le devant et une poignée encastrée discrète, s’harmonisant parfaitement dans toute cuisine. Le compte à rebours du programme indique précisément lorsque votre vaisselle est prête.",
                                    link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Dishwashers_and_Kitchen_Cleaning_Dishwashers-3/102290003+4294965995/",
                                    id: "front-controls",
                                    ctaText: "En savoir plus",
                                    ctaBackground: "./public/images/button-background.png",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Configuration",
                                        label: "High Efficiency Front-Load",
                                        learnMore: 'Learn More'
                                    }
                                }
                            ]
                        },
                        legal: {
                            enabled: true,
                            text: [
                                '<sup>*</sup>Parmi les marques dominantes'
                            ]
                        }
                    };
                }
                AppDataService.prototype.get = function () {
                    if (!(this.language in this.contents)) {
                        this.logger.error('Language does not exist');
                    }
                    return this.contents[this.language];
                };
                AppDataService.prototype.applyText = function (obj) {
                    if (!(this.language in this.contents)) {
                        this.logger.error('Language does not exist');
                    }
                    if (obj.name in this.contents[this.language]) {
                        for (var i in this.contents[this.language][obj.name]) {
                            obj[i] = this.contents[this.language][i];
                        }
                    }
                };
                AppDataService.prototype.getLanguage = function () {
                    var url = window.location.href;
                    if (url.indexOf('/fr_CA') > -1)
                        return 'fr';
                    return 'en';
                };
                AppDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AppDataService);
                return AppDataService;
            }());
            exports_1("AppDataService", AppDataService);
        }
    }
});
//# sourceMappingURL=appdata.service.js.map