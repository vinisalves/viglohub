'use strict';

function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
  if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = 'function' == typeof Map ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ('function' != typeof t)
        throw new TypeError('Super expression must either be null or a function');
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper.prototype = Object.create(t.prototype, {
          constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 },
        })),
        _setPrototypeOf(Wrapper, t)
      );
    }),
    _wrapNativeSuper(t)
  );
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf('[native code]');
  } catch (n) {
    return 'function' == typeof t;
  }
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
customElements.define(
  'compodoc-menu',
  /*#__PURE__*/ (function (_HTMLElement) {
    function _class() {
      var _this;
      _classCallCheck(this, _class);
      _this = _callSuper(this, _class);
      _this.isNormalMode = _this.getAttribute('mode') === 'normal';
      return _this;
    }
    _inherits(_class, _HTMLElement);
    return _createClass(_class, [
      {
        key: 'connectedCallback',
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        },
      },
      {
        key: 'render',
        value: function render(isNormalMode) {
          var tp = lithtml.html(
            '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link">vibro_api documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
              .concat(
                isNormalMode
                  ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                  : '',
                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class="link">\n                                    <a href="properties.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-apps"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#modules-links"'
                  : 'data-bs-target="#xs-modules-links"',
                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                '>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"'
                  : 'data-bs-target="#xs-controllers-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"'
                  : 'id="xs-controllers-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"'
                  : 'data-bs-target="#xs-injectables-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"'
                  : 'id="xs-injectables-links-module-AuthModule-f96dc4aab25bb8a1db6ffee716133a6aec65165ba9b541c08af83a91e863d97ba6d4edc7b6e99f8fe4abd0413dca1b82c4349827232ef0d88456afbc684cb7ab"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/CustomI18nModule.html" data-type="entity-link" >CustomI18nModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-CustomI18nModule-87b5e4431b5c6e9dae6fdc9df9df737b761d69730b86c1fccc410c6aefd95a44c54d875a09b212560728d4565d90bd660b34ce2599b0a4618f2cb1a537d81533"'
                  : 'data-bs-target="#xs-injectables-links-module-CustomI18nModule-87b5e4431b5c6e9dae6fdc9df9df737b761d69730b86c1fccc410c6aefd95a44c54d875a09b212560728d4565d90bd660b34ce2599b0a4618f2cb1a537d81533"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-CustomI18nModule-87b5e4431b5c6e9dae6fdc9df9df737b761d69730b86c1fccc410c6aefd95a44c54d875a09b212560728d4565d90bd660b34ce2599b0a4618f2cb1a537d81533"'
                  : 'id="xs-injectables-links-module-CustomI18nModule-87b5e4431b5c6e9dae6fdc9df9df737b761d69730b86c1fccc410c6aefd95a44c54d875a09b212560728d4565d90bd660b34ce2599b0a4618f2cb1a537d81533"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/CustomI18nService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomI18nService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-FileModule-f9a84706b047a7445d27b2710d57006b547fe7b50478bec6c89166e57cf12f575dd73670e9a79683497fc430c99c841cd76f5dd50ca7da249619600051d3ca5c"'
                  : 'data-bs-target="#xs-injectables-links-module-FileModule-f9a84706b047a7445d27b2710d57006b547fe7b50478bec6c89166e57cf12f575dd73670e9a79683497fc430c99c841cd76f5dd50ca7da249619600051d3ca5c"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-FileModule-f9a84706b047a7445d27b2710d57006b547fe7b50478bec6c89166e57cf12f575dd73670e9a79683497fc430c99c841cd76f5dd50ca7da249619600051d3ca5c"'
                  : 'id="xs-injectables-links-module-FileModule-f9a84706b047a7445d27b2710d57006b547fe7b50478bec6c89166e57cf12f575dd73670e9a79683497fc430c99c841cd76f5dd50ca7da249619600051d3ca5c"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/FollowersModule.html" data-type="entity-link" >FollowersModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-FollowersModule-81df3accaffcda87f994d164a38a70667a01c591ff8414be5f2d59c64106557e343bd68f068436e4afe2a902dd7b0305b1107a04ca712166af6d33773fd48528"'
                  : 'data-bs-target="#xs-injectables-links-module-FollowersModule-81df3accaffcda87f994d164a38a70667a01c591ff8414be5f2d59c64106557e343bd68f068436e4afe2a902dd7b0305b1107a04ca712166af6d33773fd48528"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-FollowersModule-81df3accaffcda87f994d164a38a70667a01c591ff8414be5f2d59c64106557e343bd68f068436e4afe2a902dd7b0305b1107a04ca712166af6d33773fd48528"'
                  : 'id="xs-injectables-links-module-FollowersModule-81df3accaffcda87f994d164a38a70667a01c591ff8414be5f2d59c64106557e343bd68f068436e4afe2a902dd7b0305b1107a04ca712166af6d33773fd48528"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/FollowersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FollowersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/PartnersModule.html" data-type="entity-link" >PartnersModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"'
                  : 'data-bs-target="#xs-controllers-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"'
                  : 'id="xs-controllers-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/PartnerTeamsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnerTeamsController</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="controllers/PartnersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"'
                  : 'data-bs-target="#xs-injectables-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"'
                  : 'id="xs-injectables-links-module-PartnersModule-3d15f6b9047ac9dab7d21662f0c1eb204234049df702b17033e504493e747919913ea1cfe48162a031bb9be6001c68aa912f7db86eac717dd42cf2119d79343d"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/PartnersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/PaymentGatewayModule.html" data-type="entity-link" >PaymentGatewayModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-PaymentGatewayModule-d0d2e41fac0b3f5b1eb408e374384e54b86e16c5cdb6cdadddb5622a179f44cbf553c624a5bbfba9ae24376190a52b603ab0a6e495f428d69ee24d0e1ae6084d"'
                  : 'data-bs-target="#xs-injectables-links-module-PaymentGatewayModule-d0d2e41fac0b3f5b1eb408e374384e54b86e16c5cdb6cdadddb5622a179f44cbf553c624a5bbfba9ae24376190a52b603ab0a6e495f428d69ee24d0e1ae6084d"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-PaymentGatewayModule-d0d2e41fac0b3f5b1eb408e374384e54b86e16c5cdb6cdadddb5622a179f44cbf553c624a5bbfba9ae24376190a52b603ab0a6e495f428d69ee24d0e1ae6084d"'
                  : 'id="xs-injectables-links-module-PaymentGatewayModule-d0d2e41fac0b3f5b1eb408e374384e54b86e16c5cdb6cdadddb5622a179f44cbf553c624a5bbfba9ae24376190a52b603ab0a6e495f428d69ee24d0e1ae6084d"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/PaymentGatewayFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentGatewayFactory</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/PaymentGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentGatewayService</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/StripePaymentGateway.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripePaymentGateway</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/PlansModule.html" data-type="entity-link" >PlansModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ReviewsModule.html" data-type="entity-link" >ReviewsModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-RolesModule-b5c2aed975d1a2a8546a3a0c17f97c8451cd132503d5c94af00a8f3b525e79f498b5374b431cfc317e30f06ffbf5138e6e19650b58d0beddca25de55c70f2d4e"'
                  : 'data-bs-target="#xs-injectables-links-module-RolesModule-b5c2aed975d1a2a8546a3a0c17f97c8451cd132503d5c94af00a8f3b525e79f498b5374b431cfc317e30f06ffbf5138e6e19650b58d0beddca25de55c70f2d4e"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-RolesModule-b5c2aed975d1a2a8546a3a0c17f97c8451cd132503d5c94af00a8f3b525e79f498b5374b431cfc317e30f06ffbf5138e6e19650b58d0beddca25de55c70f2d4e"'
                  : 'id="xs-injectables-links-module-RolesModule-b5c2aed975d1a2a8546a3a0c17f97c8451cd132503d5c94af00a8f3b525e79f498b5374b431cfc317e30f06ffbf5138e6e19650b58d0beddca25de55c70f2d4e"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/TeamsModule.html" data-type="entity-link" >TeamsModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-TeamsModule-a426eac53e8474afc4c618b372e70b091838fba6682f4a5c17ccb06b56c86c7950da418c4eb88057ef163b3a800921c36ad00b042adf2c07691b3d7e990a8bed"'
                  : 'data-bs-target="#xs-injectables-links-module-TeamsModule-a426eac53e8474afc4c618b372e70b091838fba6682f4a5c17ccb06b56c86c7950da418c4eb88057ef163b3a800921c36ad00b042adf2c07691b3d7e990a8bed"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-TeamsModule-a426eac53e8474afc4c618b372e70b091838fba6682f4a5c17ccb06b56c86c7950da418c4eb88057ef163b3a800921c36ad00b042adf2c07691b3d7e990a8bed"'
                  : 'id="xs-injectables-links-module-TeamsModule-a426eac53e8474afc4c618b372e70b091838fba6682f4a5c17ccb06b56c86c7950da418c4eb88057ef163b3a800921c36ad00b042adf2c07691b3d7e990a8bed"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/TeamsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/TransactionsModule.html" data-type="entity-link" >TransactionsModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"'
                  : 'data-bs-target="#xs-controllers-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"'
                  : 'id="xs-controllers-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"'
                  : 'data-bs-target="#xs-injectables-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"'
                  : 'id="xs-injectables-links-module-UsersModule-01700d4729ec8cdd973f85a3d9fc3812ebc8f662b60ede9745eda6d4b77efbb6f84b6cf321beb731e5b6e54afe9798755693d3f6836a1122671ec3255d93aa64"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#entities-links"'
                  : 'data-bs-target="#xs-entities-links"',
                '>\n                                <span class="icon ion-ios-apps"></span>\n                                <span>Entities</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"',
                '>\n                                <li class="link">\n                                    <a href="entities/FileEntity.html" data-type="entity-link" >FileEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/FollowerEntity.html" data-type="entity-link" >FollowerEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/PartnerEntity.html" data-type="entity-link" >PartnerEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/PartnerProfileEntity.html" data-type="entity-link" >PartnerProfileEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/PartnerSettingsEntity.html" data-type="entity-link" >PartnerSettingsEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/ReviewsEntity.html" data-type="entity-link" >ReviewsEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/RoleEntity.html" data-type="entity-link" >RoleEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/SubscriberEntity.html" data-type="entity-link" >SubscriberEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/TagEntity.html" data-type="entity-link" >TagEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/TeamMemberEntity.html" data-type="entity-link" >TeamMemberEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/TeamsEntity.html" data-type="entity-link" >TeamsEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/UserProfileEntity.html" data-type="entity-link" >UserProfileEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/UserSettingsEntity.html" data-type="entity-link" >UserSettingsEntity</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#classes-links"'
                  : 'data-bs-target="#xs-classes-links"',
                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                '>\n                            <li class="link">\n                                <a href="classes/AddManyToOne1731880851697.html" data-type="entity-link" >AddManyToOne1731880851697</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/AddteamMemberDto.html" data-type="entity-link" >AddteamMemberDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/AWSS3.html" data-type="entity-link" >AWSS3</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateCustomerDto.html" data-type="entity-link" >CreateCustomerDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreatePartnerDto.html" data-type="entity-link" >CreatePartnerDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateSubscriptionDto.html" data-type="entity-link" >CreateSubscriptionDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateTeamDto.html" data-type="entity-link" >CreateTeamDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/DigitalOceanSpaces.html" data-type="entity-link" >DigitalOceanSpaces</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/FollowerEntity.html" data-type="entity-link" >FollowerEntity</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/FollowPartnerDto.html" data-type="entity-link" >FollowPartnerDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Init1731534812101.html" data-type="entity-link" >Init1731534812101</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Manytoone1731887989393.html" data-type="entity-link" >Manytoone1731887989393</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/ReviewsEntity.html" data-type="entity-link" >ReviewsEntity</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SetPartnerProfileDto.html" data-type="entity-link" >SetPartnerProfileDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SetUserProfileDto.html" data-type="entity-link" >SetUserProfileDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SetUserSettingsDto.html" data-type="entity-link" >SetUserSettingsDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SignUpPartnerDto.html" data-type="entity-link" >SignUpPartnerDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SoftFieldsForEntities.html" data-type="entity-link" >SoftFieldsForEntities</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UnfollowPartnerDto.html" data-type="entity-link" >UnfollowPartnerDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateCustomerDto.html" data-type="entity-link" >UpdateCustomerDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdatePartnerDto.html" data-type="entity-link" >UpdatePartnerDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateTeamDto.html" data-type="entity-link" >UpdateTeamDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserFollowPartnerDto.html" data-type="entity-link" >UserFollowPartnerDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserProfileEntity.html" data-type="entity-link" >UserProfileEntity</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#guards-links"'
                  : 'data-bs-target="#xs-guards-links"',
                '>\n                            <span class="icon ion-ios-lock"></span>\n                            <span>Guards</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"',
                '>\n                            <li class="link">\n                                <a href="guards/AuthJwtRefreshGuard.html" data-type="entity-link" >AuthJwtRefreshGuard</a>\n                            </li>\n                            <li class="link">\n                                <a href="guards/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>\n                            </li>\n                            <li class="link">\n                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#interfaces-links"'
                  : 'data-bs-target="#xs-interfaces-links"',
                '>\n                            <span class="icon ion-md-information-circle-outline"></span>\n                            <span>Interfaces</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"',
                '>\n                            <li class="link">\n                                <a href="interfaces/CustomerAddressInterface.html" data-type="entity-link" >CustomerAddressInterface</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/CustomerMetadataInterface.html" data-type="entity-link" >CustomerMetadataInterface</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/FileImplInterface.html" data-type="entity-link" >FileImplInterface</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/InvoiceSettingsInterface.html" data-type="entity-link" >InvoiceSettingsInterface</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/PaymentGatewayInterface.html" data-type="entity-link" >PaymentGatewayInterface</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#miscellaneous-links"'
                  : 'data-bs-target="#xs-miscellaneous-links"',
                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"',
                '>\n                            <li class="link">\n                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        ',
              ),
          );
          this.innerHTML = tp.strings;
        },
      },
    ]);
  })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement)),
);
