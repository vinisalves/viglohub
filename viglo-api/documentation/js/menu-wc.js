'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">vibro_api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"' :
                                            'id="xs-controllers-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"' :
                                        'id="xs-injectables-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomI18nModule.html" data-type="entity-link" >CustomI18nModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CustomI18nModule-87b5e4431b5c6e9dae6fdc9df9df737b761d69730b86c1fccc410c6aefd95a44c54d875a09b212560728d4565d90bd660b34ce2599b0a4618f2cb1a537d81533"' : 'data-bs-target="#xs-injectables-links-module-CustomI18nModule-87b5e4431b5c6e9dae6fdc9df9df737b761d69730b86c1fccc410c6aefd95a44c54d875a09b212560728d4565d90bd660b34ce2599b0a4618f2cb1a537d81533"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CustomI18nModule-87b5e4431b5c6e9dae6fdc9df9df737b761d69730b86c1fccc410c6aefd95a44c54d875a09b212560728d4565d90bd660b34ce2599b0a4618f2cb1a537d81533"' :
                                        'id="xs-injectables-links-module-CustomI18nModule-87b5e4431b5c6e9dae6fdc9df9df737b761d69730b86c1fccc410c6aefd95a44c54d875a09b212560728d4565d90bd660b34ce2599b0a4618f2cb1a537d81533"' }>
                                        <li class="link">
                                            <a href="injectables/CustomI18nService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomI18nService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FileModule-f9a84706b047a7445d27b2710d57006b547fe7b50478bec6c89166e57cf12f575dd73670e9a79683497fc430c99c841cd76f5dd50ca7da249619600051d3ca5c"' : 'data-bs-target="#xs-injectables-links-module-FileModule-f9a84706b047a7445d27b2710d57006b547fe7b50478bec6c89166e57cf12f575dd73670e9a79683497fc430c99c841cd76f5dd50ca7da249619600051d3ca5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileModule-f9a84706b047a7445d27b2710d57006b547fe7b50478bec6c89166e57cf12f575dd73670e9a79683497fc430c99c841cd76f5dd50ca7da249619600051d3ca5c"' :
                                        'id="xs-injectables-links-module-FileModule-f9a84706b047a7445d27b2710d57006b547fe7b50478bec6c89166e57cf12f575dd73670e9a79683497fc430c99c841cd76f5dd50ca7da249619600051d3ca5c"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FollowersModule.html" data-type="entity-link" >FollowersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FollowersModule-81df3accaffcda87f994d164a38a70667a01c591ff8414be5f2d59c64106557e343bd68f068436e4afe2a902dd7b0305b1107a04ca712166af6d33773fd48528"' : 'data-bs-target="#xs-injectables-links-module-FollowersModule-81df3accaffcda87f994d164a38a70667a01c591ff8414be5f2d59c64106557e343bd68f068436e4afe2a902dd7b0305b1107a04ca712166af6d33773fd48528"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FollowersModule-81df3accaffcda87f994d164a38a70667a01c591ff8414be5f2d59c64106557e343bd68f068436e4afe2a902dd7b0305b1107a04ca712166af6d33773fd48528"' :
                                        'id="xs-injectables-links-module-FollowersModule-81df3accaffcda87f994d164a38a70667a01c591ff8414be5f2d59c64106557e343bd68f068436e4afe2a902dd7b0305b1107a04ca712166af6d33773fd48528"' }>
                                        <li class="link">
                                            <a href="injectables/FollowersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FollowersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PartnersModule.html" data-type="entity-link" >PartnersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"' : 'data-bs-target="#xs-controllers-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"' :
                                            'id="xs-controllers-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"' }>
                                            <li class="link">
                                                <a href="controllers/PartnerTeamsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnerTeamsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PartnersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"' : 'data-bs-target="#xs-injectables-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"' :
                                        'id="xs-injectables-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"' }>
                                        <li class="link">
                                            <a href="injectables/PartnersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentGatewayModule.html" data-type="entity-link" >PaymentGatewayModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentGatewayModule-d0d2e41fac0b3f5b1eb408e374384e54b86e16c5cdb6cdadddb5622a179f44cbf553c624a5bbfba9ae24376190a52b603ab0a6e495f428d69ee24d0e1ae6084d"' : 'data-bs-target="#xs-injectables-links-module-PaymentGatewayModule-d0d2e41fac0b3f5b1eb408e374384e54b86e16c5cdb6cdadddb5622a179f44cbf553c624a5bbfba9ae24376190a52b603ab0a6e495f428d69ee24d0e1ae6084d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentGatewayModule-d0d2e41fac0b3f5b1eb408e374384e54b86e16c5cdb6cdadddb5622a179f44cbf553c624a5bbfba9ae24376190a52b603ab0a6e495f428d69ee24d0e1ae6084d"' :
                                        'id="xs-injectables-links-module-PaymentGatewayModule-d0d2e41fac0b3f5b1eb408e374384e54b86e16c5cdb6cdadddb5622a179f44cbf553c624a5bbfba9ae24376190a52b603ab0a6e495f428d69ee24d0e1ae6084d"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentGatewayFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentGatewayFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaymentGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentGatewayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StripePaymentGateway.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripePaymentGateway</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlansModule.html" data-type="entity-link" >PlansModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReviewsModule.html" data-type="entity-link" >ReviewsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-b5c2aed975d1a2a8546a3a0c17f97c8451cd132503d5c94af00a8f3b525e79f498b5374b431cfc317e30f06ffbf5138e6e19650b58d0beddca25de55c70f2d4e"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-b5c2aed975d1a2a8546a3a0c17f97c8451cd132503d5c94af00a8f3b525e79f498b5374b431cfc317e30f06ffbf5138e6e19650b58d0beddca25de55c70f2d4e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-b5c2aed975d1a2a8546a3a0c17f97c8451cd132503d5c94af00a8f3b525e79f498b5374b431cfc317e30f06ffbf5138e6e19650b58d0beddca25de55c70f2d4e"' :
                                        'id="xs-injectables-links-module-RolesModule-b5c2aed975d1a2a8546a3a0c17f97c8451cd132503d5c94af00a8f3b525e79f498b5374b431cfc317e30f06ffbf5138e6e19650b58d0beddca25de55c70f2d4e"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TeamsModule.html" data-type="entity-link" >TeamsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TeamsModule-a426eac53e8474afc4c618b372e70b091838fba6682f4a5c17ccb06b56c86c7950da418c4eb88057ef163b3a800921c36ad00b042adf2c07691b3d7e990a8bed"' : 'data-bs-target="#xs-injectables-links-module-TeamsModule-a426eac53e8474afc4c618b372e70b091838fba6682f4a5c17ccb06b56c86c7950da418c4eb88057ef163b3a800921c36ad00b042adf2c07691b3d7e990a8bed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeamsModule-a426eac53e8474afc4c618b372e70b091838fba6682f4a5c17ccb06b56c86c7950da418c4eb88057ef163b3a800921c36ad00b042adf2c07691b3d7e990a8bed"' :
                                        'id="xs-injectables-links-module-TeamsModule-a426eac53e8474afc4c618b372e70b091838fba6682f4a5c17ccb06b56c86c7950da418c4eb88057ef163b3a800921c36ad00b042adf2c07691b3d7e990a8bed"' }>
                                        <li class="link">
                                            <a href="injectables/TeamsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionsModule.html" data-type="entity-link" >TransactionsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"' :
                                            'id="xs-controllers-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"' :
                                        'id="xs-injectables-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/FileEntity.html" data-type="entity-link" >FileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FollowersEntity.html" data-type="entity-link" >FollowersEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PartnerEntity.html" data-type="entity-link" >PartnerEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PartnerProfileEntity.html" data-type="entity-link" >PartnerProfileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PartnerSettingsEntity.html" data-type="entity-link" >PartnerSettingsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ReviewsEntity.html" data-type="entity-link" >ReviewsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RolesEntity.html" data-type="entity-link" >RolesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SubscribersEntity.html" data-type="entity-link" >SubscribersEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TagsEntity.html" data-type="entity-link" >TagsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TeamMemberEntity.html" data-type="entity-link" >TeamMemberEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TeamsEntity.html" data-type="entity-link" >TeamsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserProfileEntity.html" data-type="entity-link" >UserProfileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserSettingsEntity.html" data-type="entity-link" >UserSettingsEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddManyToOne1731880851697.html" data-type="entity-link" >AddManyToOne1731880851697</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddteamMemberDto.html" data-type="entity-link" >AddteamMemberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AWSS3.html" data-type="entity-link" >AWSS3</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCustomerDto.html" data-type="entity-link" >CreateCustomerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePartnerDto.html" data-type="entity-link" >CreatePartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriptionDto.html" data-type="entity-link" >CreateSubscriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeamDto.html" data-type="entity-link" >CreateTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DigitalOceanSpaces.html" data-type="entity-link" >DigitalOceanSpaces</a>
                            </li>
                            <li class="link">
                                <a href="classes/FollowersEntity.html" data-type="entity-link" >FollowersEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/FollowPartnerDto.html" data-type="entity-link" >FollowPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Init1731534812101.html" data-type="entity-link" >Init1731534812101</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Manytoone1731887989393.html" data-type="entity-link" >Manytoone1731887989393</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReviewsEntity.html" data-type="entity-link" >ReviewsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetPartnerProfileDto.html" data-type="entity-link" >SetPartnerProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetUserProfileDto.html" data-type="entity-link" >SetUserProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetUserSettingsDto.html" data-type="entity-link" >SetUserSettingsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpPartnerDto.html" data-type="entity-link" >SignUpPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SoftFieldsForEntities.html" data-type="entity-link" >SoftFieldsForEntities</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnfollowPartnerDto.html" data-type="entity-link" >UnfollowPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCustomerDto.html" data-type="entity-link" >UpdateCustomerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePartnerDto.html" data-type="entity-link" >UpdatePartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeamDto.html" data-type="entity-link" >UpdateTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserFollowPartnerDto.html" data-type="entity-link" >UserFollowPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileEntity.html" data-type="entity-link" >UserProfileEntity</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthJwtRefreshGuard.html" data-type="entity-link" >AuthJwtRefreshGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CustomerAddressInterface.html" data-type="entity-link" >CustomerAddressInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerMetadataInterface.html" data-type="entity-link" >CustomerMetadataInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileImplInterface.html" data-type="entity-link" >FileImplInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InvoiceSettingsInterface.html" data-type="entity-link" >InvoiceSettingsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentGatewayInterface.html" data-type="entity-link" >PaymentGatewayInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});