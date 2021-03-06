// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Text$Rebolt = require("rebolt/src/components/text.js");
var View$Rebolt = require("rebolt/src/components/view.js");
var Style$Rebolt = require("rebolt/src/style.js");
var NavigationConfig$MyReasonReactNativeApp = require("./NavigationConfig.js");

var component = ReasonReact.statelessComponent("Home");

var continer = Style$Rebolt.style(/* :: */[
      Style$Rebolt.flex(1),
      /* :: */[
        Style$Rebolt.justifyContent(/* Center */2),
        /* :: */[
          Style$Rebolt.alignItems(/* Center */2),
          /* [] */0
        ]
      ]
    ]);

function button(color) {
  return Style$Rebolt.style(/* :: */[
              Style$Rebolt.flex(1),
              /* :: */[
                Style$Rebolt.justifyContent(/* Center */2),
                /* :: */[
                  Style$Rebolt.paddingHorizontal(/* Pt */Block.__(0, [20])),
                  /* :: */[
                    Style$Rebolt.maxHeight(/* Pt */Block.__(0, [40])),
                    /* :: */[
                      Style$Rebolt.marginTop(/* Pt */Block.__(0, [16])),
                      /* :: */[
                        Style$Rebolt.backgroundColor(/* String */Block.__(0, [color])),
                        /* :: */[
                          Style$Rebolt.borderRadius(20),
                          /* :: */[
                            Style$Rebolt.width(/* Pt */Block.__(0, [100])),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var buttonText = Style$Rebolt.style(/* :: */[
      Style$Rebolt.textAlign(/* Center */3),
      /* [] */0
    ]);

var title = Style$Rebolt.style(/* :: */[
      Style$Rebolt.fontSize(/* Float */Block.__(0, [20])),
      /* [] */0
    ]);

var Styles = /* module */[
  /* continer */continer,
  /* button */button,
  /* buttonText */buttonText,
  /* title */title
];

function make(nav, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(/* None */0, /* None */0, Curry.app(NavigationConfig$MyReasonReactNativeApp.StackNavigator[/* Screen */3][/* make */0], [
                              nav,
                              /* None */0,
                              /* Some */["Home"],
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              (function () {
                                  return ReasonReact.element(/* None */0, /* None */0, View$Rebolt.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[continer], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* array */[ReasonReact.element(/* None */0, /* None */0, Text$Rebolt.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[title], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["Home screen"]))]));
                                })
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
