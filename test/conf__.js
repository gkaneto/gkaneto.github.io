webpackJsonp([1], {
  12: function(a, e, c) {
    "use strict";
    var d = c(76),
      r = c(77),
      s = c(78),
      g = c(79),
      b = c(80),
      i = c(81),
      t = c(82),
      o = c(83),
      f = c(84),
      x = c(85),
      n = c(86),
      p = c(87),
      _ = c(88),
      l = c(89),
      u = c(90),
      m = c(91),
      j = c(92),
      v = c(93),
      h = c(94),
      y = c(95),
      I = {};
    s.forEach(function(a) {
      I[a.typeId] = a
    });
    var w = {},
      k = {};
    g.locations.forEach(function(a) {
      k[a.id] = a, a.missions.forEach(function(a) {
        return w[a.id] = a
      })
    });
    var S = {
      tutorial: i,
      news: t,
      cards: d,
      cardSets: r,
      cardEffects: x,
      items: s,
      itemsById: I,
      resources: _,
      stores: b,
      story: g,
      intro: o,
      avatar: f,
      locationsById: k,
      missionsById: w,
      levelupDrops: n,
      promoPacks: p,
      sound: l,
      voices: u,
      pvp: m,
      rating: j,
      quests: v,
      se_coffers: h,
      specialEvent: y
    };
    a.exports = {
      get: function(a) {
        return S[a]
      },
      set: function(a, e) {
        return S[a] = e
      }
    }
  },
  136: function(a, e, c) {
    c(12), c(84), c(85), c(77), c(76), c(83), c(78), c(86), c(82), c(87), c(91), c(93), c(92), c(88), c(94), c(137), c(89), c(50), c(95), c(80), c(79), c(81), a.exports = c(90)
  },
  137: function(a, e, c) {
    "use strict";
    a.exports = [{
      id: 1,
      name: "Дешёвый пакт",
      price: {
        denier: 100
      }
    }, {
      id: 2,
      name: "Дорогой пакт",
      price: {
        denier: 500
      }
    }, {
      id: 3,
      name: "Рейтинговый пакт",
      price: {
        denier: 500
      }
    }]
  },
  50: function(a, e, c) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      actions: {
        SA_X2_GEMS: {
          resource: "gems",
          store: "x2gems",
          ui: "SA_X2_GEMS"
        },
        SA_50P_GOLD: {
          resource: "gold",
          store: "p50gold",
          ui: "SA_50P_GOLD"
        },
        SA_50P_ENRG: {
          resource: "energy",
          store: "p50enrg",
          ui: "SA_50P_ENRG"
        }
      }
    }
  },
  76: function(a, e, c) { // CARDS
    "use strict";
    var d;
    d = c(4)._tr, a.exports = [{
      cardId: 1,
      name: d("Water Elemental"),
      cls: 1,
      color: 3,
      rarity: 1,
      baseAttack: 40,
      baseHp: 60,
      tag: "player",
      images: {
        _1x: "cards/ff8960b83559be5a6e12286e690049c4.jpg",
        _2x: "cards/aa5291e56bdf0abe94f5355c4968da03@2x.jpg"
      },
      big: {
        _1x: "cards/aa5291e56bdf0abe94f5355c4968da03@2x.jpg",
        _2x: "cards/big/72846be8c74aeec27031022dd0a9aad2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/2d294fe6e78dc11aecb94153c8f7a256.png",
        _2x: "cards/icons/260fd232a525e4bf7f4c9f842f7a72ca@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/885ca2cdb1ab0b2f9d0c8b6f99a7f954.jpg",
              _2x: "cards/c15d0be79a090aabc36b39ffe1d1e836@2x.jpg"
            },
            big: {
              _1x: "cards/c15d0be79a090aabc36b39ffe1d1e836@2x.jpg",
              _2x: "cards/big/e772be919a174c150e535e1a238fc5bc@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9605039be81ea69e33bb093d5e198a0d.jpg",
              _2x: "cards/059b4866cd2ae35dbf74c2acbe120d2c@2x.jpg"
            },
            big: {
              _1x: "cards/059b4866cd2ae35dbf74c2acbe120d2c@2x.jpg",
              _2x: "cards/big/62a17b1273775b5e4e82684f6e7a05e8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6f0956874505d16cfe74ef2892da26e5.jpg",
              _2x: "cards/5ce902eaacab7992180796c9199fae7c@2x.jpg"
            },
            big: {
              _1x: "cards/5ce902eaacab7992180796c9199fae7c@2x.jpg",
              _2x: "cards/big/9d8ed928e1d2d3769d1028350023059c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3ccbcc6dfa279502123a987261ec4401.jpg",
              _2x: "cards/dc974be16a915aae01a3e52e0279cf85@2x.jpg"
            },
            big: {
              _1x: "cards/dc974be16a915aae01a3e52e0279cf85@2x.jpg",
              _2x: "cards/big/d363dbdb6b111884626971051248ae8c@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 2,
      name: d("Fire Elemental"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 55,
      baseHp: 45,
      tag: "player",
      images: {
        _1x: "cards/4a9ed71de9d916052f3805f517c64516.jpg",
        _2x: "cards/555fbaf882ab69ed3d5fdcb23ce258cc@2x.jpg"
      },
      big: {
        _1x: "cards/555fbaf882ab69ed3d5fdcb23ce258cc@2x.jpg",
        _2x: "cards/big/932ee789ae8662224c991e2cd322efdd@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/20ae37c9ddf87a0fe458d2b1b6774b5c.png",
        _2x: "cards/icons/f189db30c599bb46728cf4f4b147a573@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/99073f91d77157d1186c56be09b53499.jpg",
              _2x: "cards/e5a4c3281c82093767a8835c7792d28a@2x.jpg"
            },
            big: {
              _1x: "cards/e5a4c3281c82093767a8835c7792d28a@2x.jpg",
              _2x: "cards/big/33651ce2b1377325657a05176814766c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/106363e10dc39ed426b5e56b62fd4754.jpg",
              _2x: "cards/bd79b345ef774ab7f7f20c02d98b6096@2x.jpg"
            },
            big: {
              _1x: "cards/bd79b345ef774ab7f7f20c02d98b6096@2x.jpg",
              _2x: "cards/big/2792e291f311718f5c3d42897a8501f9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a679364f3f9344af32faf49c09f0fa95.jpg",
              _2x: "cards/39dee029ec73cecf7dafb47eb6e8fd72@2x.jpg"
            },
            big: {
              _1x: "cards/39dee029ec73cecf7dafb47eb6e8fd72@2x.jpg",
              _2x: "cards/big/27edcce1b6413c4a65b42ddb6250a436@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/23fb2ff07129bdc1886fbe0a182885e6.jpg",
              _2x: "cards/19785f401a542555a00d323d6d9b61d6@2x.jpg"
            },
            big: {
              _1x: "cards/19785f401a542555a00d323d6d9b61d6@2x.jpg",
              _2x: "cards/big/dd3e90e123eef66f0449f7151df92edd@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 3,
      name: d("Thief"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 51,
      baseHp: 51,
      tag: "player",
      images: {
        _1x: "cards/e438d0b7f1b8c3d2267deeb35a6e1b3e.jpg",
        _2x: "cards/e27a38f422eb02b3fb30acc7ecb5c180@2x.jpg"
      },
      big: {
        _1x: "cards/e27a38f422eb02b3fb30acc7ecb5c180@2x.jpg",
        _2x: "cards/big/d9df8b247599b52fd4a190d7135b9cc3@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/16dffcffdea9048d6db13f3ca8e09fb7.png",
        _2x: "cards/icons/18102ac4687d995b2248d57f34587603@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a03bf7f56f6ebedab769d6e9fa0204bb.jpg",
              _2x: "cards/f93b799dbdd3e1bab89454f9303a0585@2x.jpg"
            },
            big: {
              _1x: "cards/f93b799dbdd3e1bab89454f9303a0585@2x.jpg",
              _2x: "cards/big/91e5ef6bc5550e0099c1ca66ab3c968b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cbebbf99baa2432531e830f0125992a3.jpg",
              _2x: "cards/8234b1057cf20a5d63c8eb58f68e56f4@2x.jpg"
            },
            big: {
              _1x: "cards/8234b1057cf20a5d63c8eb58f68e56f4@2x.jpg",
              _2x: "cards/big/08a2bc3ae61a863d4e07901be34054a9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e0ea6ee4b17052162d5dbd5e5d2ede41.jpg",
              _2x: "cards/33b49d0764f7d6f6d035c354cb6460a2@2x.jpg"
            },
            big: {
              _1x: "cards/33b49d0764f7d6f6d035c354cb6460a2@2x.jpg",
              _2x: "cards/big/d2dc07ab349d165d58e036edae45d0be@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/14038c7381e43fa4a28eda0bd645e000.jpg",
              _2x: "cards/a897fdbfea2ca822cd45c7dd5809c0a8@2x.jpg"
            },
            big: {
              _1x: "cards/a897fdbfea2ca822cd45c7dd5809c0a8@2x.jpg",
              _2x: "cards/big/d6f5417c3a5beefc4d074b142d5b4dd5@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 4,
      name: d("Alice"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 50,
      baseHp: 50,
      tag: "player",
      images: {
        _1x: "cards/caf536cdfc19084ba8b3a4bf47ae286d.jpg",
        _2x: "cards/b3ecacab97b26045f7f1faa7a0fdd00c@2x.jpg"
      },
      big: {
        _1x: "cards/b3ecacab97b26045f7f1faa7a0fdd00c@2x.jpg",
        _2x: "cards/big/a502de84d6ec643949ab9db13393ba62@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/ec35ff0a12c1c21ba65dcdbcba8378cc.png",
        _2x: "cards/icons/d2c4f329adfcb8994d954c039b4c6853@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/bdda6d28bf0fe7229230992156f46d01.jpg",
              _2x: "cards/988e4fc582ecbc3b675cdba0d8e8aea7@2x.jpg"
            },
            big: {
              _1x: "cards/988e4fc582ecbc3b675cdba0d8e8aea7@2x.jpg",
              _2x: "cards/big/1dec6b50d8f547278e5fba689c2aefc8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/23602ceac33c5e8ec309cdebfed9e04f.jpg",
              _2x: "cards/49afde03954c5098361bbceceb298890@2x.jpg"
            },
            big: {
              _1x: "cards/49afde03954c5098361bbceceb298890@2x.jpg",
              _2x: "cards/big/a977fe29235fa113320e8b38bb50bc50@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/eb44f061375eb2c01093783483cada66.jpg",
              _2x: "cards/585d41056ed1d7cd72be21c021a6366a@2x.jpg"
            },
            big: {
              _1x: "cards/585d41056ed1d7cd72be21c021a6366a@2x.jpg",
              _2x: "cards/big/279061a6cb2aef2a2e7accbcc6fc159d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/846eabada5f50cd109eb93e99755c13e.jpg",
              _2x: "cards/b51d51588180948ed8c7f38029003a48@2x.jpg"
            },
            big: {
              _1x: "cards/b51d51588180948ed8c7f38029003a48@2x.jpg",
              _2x: "cards/big/3ca0e518d42c2a7e27d537dda7c04a93@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 5,
      name: d("Gatekeeper"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 50,
      baseHp: 50,
      tag: "player",
      images: {
        _1x: "cards/ef395bc981ff282438f289148c203c60.jpg",
        _2x: "cards/a47d87d6fd57cba24991224e87512a71@2x.jpg"
      },
      big: {
        _1x: "cards/a47d87d6fd57cba24991224e87512a71@2x.jpg",
        _2x: "cards/big/c7414a5959b09aa0abd8b17ec2b77ab9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/fa1c590365f1148f13da3897c839f3f0.png",
        _2x: "cards/icons/70fc0d6d510782767dd780548a226380@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/451f4a2411227c4ccff4d8a4acdf4dd9.jpg",
              _2x: "cards/44b2ae4746d5bdd94cab49d146f4b75f@2x.jpg"
            },
            big: {
              _1x: "cards/44b2ae4746d5bdd94cab49d146f4b75f@2x.jpg",
              _2x: "cards/big/dac2c8a061b12c1c4e14ae2c51e5e257@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/24149705538aba8de6395e3cb7056d4b.jpg",
              _2x: "cards/fe46447409e9234d9eaf11add0e8cd0b@2x.jpg"
            },
            big: {
              _1x: "cards/fe46447409e9234d9eaf11add0e8cd0b@2x.jpg",
              _2x: "cards/big/4acd8479dd493d0f72c1fd7318167daa@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/60f1115486ced3d9b96aad07dc033393.jpg",
              _2x: "cards/cfceb9ea3432bc9eb0ad75900b955626@2x.jpg"
            },
            big: {
              _1x: "cards/cfceb9ea3432bc9eb0ad75900b955626@2x.jpg",
              _2x: "cards/big/3f1f80e03fd9e332054db3e461606e93@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/185bf059465383cdc4ae6f811fd66044.jpg",
              _2x: "cards/26e7191faeb87c392dbe91f15ff466ec@2x.jpg"
            },
            big: {
              _1x: "cards/26e7191faeb87c392dbe91f15ff466ec@2x.jpg",
              _2x: "cards/big/6f9a5f994026a4ceaf82c2d42cd78c55@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 6,
      name: d("Mermaid"),
      cls: 1,
      color: 3,
      rarity: 1,
      baseAttack: 35,
      baseHp: 65,
      tag: "player",
      images: {
        _1x: "cards/aa0e4c74e47e1dbf57767c6faf0ce3b3.jpg",
        _2x: "cards/c282c0fc56f41e888e2263612ea2cb3d@2x.jpg"
      },
      big: {
        _1x: "cards/c282c0fc56f41e888e2263612ea2cb3d@2x.jpg",
        _2x: "cards/big/78e7578448ebcadccef9ec5164276a0e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/693b8718141d6658245ef71857052075.png",
        _2x: "cards/icons/38c7c5a51d5708b0c4de783cef0fe236@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/bf34e11fa0853d04ee91ea37e5c4e093.jpg",
              _2x: "cards/9ce3bd724b7b7ae7c7497f57955d93dc@2x.jpg"
            },
            big: {
              _1x: "cards/9ce3bd724b7b7ae7c7497f57955d93dc@2x.jpg",
              _2x: "cards/big/b96487be6915b54270524a9926daf5a3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5438bdce0eb3e3a5c9d7f4882fe29ee6.jpg",
              _2x: "cards/169a7a25ffa37ce1ab8fec307e7ac7ac@2x.jpg"
            },
            big: {
              _1x: "cards/169a7a25ffa37ce1ab8fec307e7ac7ac@2x.jpg",
              _2x: "cards/big/c77f6bf6974330df8d59544dfdc1b15f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7e876216f71cfbe1d5cff701965ccdb2.jpg",
              _2x: "cards/2012b2d590b489f6e34b9635415ab851@2x.jpg"
            },
            big: {
              _1x: "cards/2012b2d590b489f6e34b9635415ab851@2x.jpg",
              _2x: "cards/big/6e54c2abc2b1d5233e70be8008f5da09@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1d2086d7dd604356aea9dd6b620d24c9.jpg",
              _2x: "cards/01c4fa060951aeeb8f873499ed414c41@2x.jpg"
            },
            big: {
              _1x: "cards/01c4fa060951aeeb8f873499ed414c41@2x.jpg",
              _2x: "cards/big/e2a763aeba093bdf7bb45cd4babf9e69@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 7,
      name: d("Tamer"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 40,
      baseHp: 60,
      tag: "player",
      images: {
        _1x: "cards/3ca3b3759274b0f34070ffdf7dc5a74d.jpg",
        _2x: "cards/4a04c5b31df3c0ba513099a43e2d434a@2x.jpg"
      },
      big: {
        _1x: "cards/4a04c5b31df3c0ba513099a43e2d434a@2x.jpg",
        _2x: "cards/big/842279aaaec242dfc1797c2497cdbdd6@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/4650708a33c59434502f1b35dd7bc5e3.png",
        _2x: "cards/icons/3c1a324f5c80a2db802699c773369cbd@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/5c8b880e4e5c4ae7a6eef8fa9411f9ff.jpg",
              _2x: "cards/0c297d7e6dcae4476e7123e7bba4ae3a@2x.jpg"
            },
            big: {
              _1x: "cards/0c297d7e6dcae4476e7123e7bba4ae3a@2x.jpg",
              _2x: "cards/big/153c1d606e055ad9f2bac12ac4cc02c4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1dd1dc7113a1b761efba1c2927e06ce0.jpg",
              _2x: "cards/2c351122d92d213e31ef9fc3a7e42141@2x.jpg"
            },
            big: {
              _1x: "cards/2c351122d92d213e31ef9fc3a7e42141@2x.jpg",
              _2x: "cards/big/3ca54177e2d9e6f85789c749e12ebe43@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/959bc8020e542585dcbeb765f1e654d2.jpg",
              _2x: "cards/146335b8c0ff3afb4ff018ff3cd8ac9c@2x.jpg"
            },
            big: {
              _1x: "cards/146335b8c0ff3afb4ff018ff3cd8ac9c@2x.jpg",
              _2x: "cards/big/511a58df5fb4ff7887c1eaf63feed2a8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/adbb2acd71690181efe6a87e14dd9b96.jpg",
              _2x: "cards/8bce6b70b19640049f9cfa2bad3262be@2x.jpg"
            },
            big: {
              _1x: "cards/8bce6b70b19640049f9cfa2bad3262be@2x.jpg",
              _2x: "cards/big/6c130338f5cf26cacb6677b2881baa42@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 8,
      name: d("Snowhite"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 45,
      baseHp: 55,
      tag: "player",
      images: {
        _1x: "cards/ea126218bbacca111d45f8798ee7a834.jpg",
        _2x: "cards/dc6a3b47de85a0e97352458bd0b875e4@2x.jpg"
      },
      big: {
        _1x: "cards/dc6a3b47de85a0e97352458bd0b875e4@2x.jpg",
        _2x: "cards/big/8e11f4f1a0f91abc69c3347d74d8d5b4@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f445395911b18172d49729945f1b0bab.png",
        _2x: "cards/icons/c7662261e6fbd3f7f24c45810ead3183@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e597139dbcced0f7299fbd4ea0d15ef7.jpg",
              _2x: "cards/5418dd777eca57d334436d1d5a6698b9@2x.jpg"
            },
            big: {
              _1x: "cards/5418dd777eca57d334436d1d5a6698b9@2x.jpg",
              _2x: "cards/big/07ca7bc68ae74242b2864bbe8f6e9875@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/be38f5546d071ec02d700f224eaf830c.jpg",
              _2x: "cards/7faa4348285a3e5050f9dc3fc555834e@2x.jpg"
            },
            big: {
              _1x: "cards/7faa4348285a3e5050f9dc3fc555834e@2x.jpg",
              _2x: "cards/big/a40a4552bb5d7a1f5bc378936c21ab2a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/12292ef281ceedc3e95c4350745941b8.jpg",
              _2x: "cards/852af6dcc613282793db171fc06727cc@2x.jpg"
            },
            big: {
              _1x: "cards/852af6dcc613282793db171fc06727cc@2x.jpg",
              _2x: "cards/big/f3a701323045e000f05260da1a0239b9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/296ac2c803f9c542d47a5f1af70d5935.jpg",
              _2x: "cards/d10648f490026b29d8f01a289781925e@2x.jpg"
            },
            big: {
              _1x: "cards/d10648f490026b29d8f01a289781925e@2x.jpg",
              _2x: "cards/big/227b74ca7e15ec24da8500b02b9ec129@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 9,
      name: d("Ataman"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 65,
      baseHp: 35,
      tag: "player",
      images: {
        _1x: "cards/9f97eb7700d8fddcaa07759f8e9325db.jpg",
        _2x: "cards/4de5d61e4046b97319bd26bd43722b1d@2x.jpg"
      },
      big: {
        _1x: "cards/4de5d61e4046b97319bd26bd43722b1d@2x.jpg",
        _2x: "cards/big/84ecc9caf45efb5ee55fc4b4bed8dc8e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/42685ca0533d12bdf2d15ac5bd668cef.png",
        _2x: "cards/icons/ec5d65cfd4e483283a6aa9c98ab31b01@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/7ce78397db5801d591a9ca92219ed21e.jpg",
              _2x: "cards/19951d61916d90eee74bdda97e449696@2x.jpg"
            },
            big: {
              _1x: "cards/19951d61916d90eee74bdda97e449696@2x.jpg",
              _2x: "cards/big/eae6fb0d63d3bc90f8c22c71c2ff1007@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3deef93657899b410ca1aeceec2a6c62.jpg",
              _2x: "cards/037d0f451650fd4a4a6ad8764146ed71@2x.jpg"
            },
            big: {
              _1x: "cards/037d0f451650fd4a4a6ad8764146ed71@2x.jpg",
              _2x: "cards/big/3309ce47f83d29ff41874577c6bfaa11@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1fe1c7585742855fac9c9c114c0bc25b.jpg",
              _2x: "cards/08d7b120fa54692355819441106b9291@2x.jpg"
            },
            big: {
              _1x: "cards/08d7b120fa54692355819441106b9291@2x.jpg",
              _2x: "cards/big/4b56950468a87b89ee4e9a61582ecb6f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b1b260af45f1e558b6523a8b09d166c0.jpg",
              _2x: "cards/36ac0740050c628497fc28ae3074639b@2x.jpg"
            },
            big: {
              _1x: "cards/36ac0740050c628497fc28ae3074639b@2x.jpg",
              _2x: "cards/big/6d2e13ae84e3c2cdc30fd83db6eb91cf@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 10,
      name: d("Avenger"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 25,
      baseHp: 75,
      tag: "player",
      images: {
        _1x: "cards/98c8e4ae0b4083a3a96057102332d3f5.jpg",
        _2x: "cards/269eb7bd70aeb762410a65dd515aafc3@2x.jpg"
      },
      big: {
        _1x: "cards/269eb7bd70aeb762410a65dd515aafc3@2x.jpg",
        _2x: "cards/big/6ce30352a816d3132b3abfec1f9feb17@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/3cae19af1e488bd80dd044434592599e.png",
        _2x: "cards/icons/d516cebe2cfbf7edf856cd096c222e5b@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/4cac194fbbc9d58052d0706a3dcfd8c6.jpg",
              _2x: "cards/a63747f582476c4b0ef71cf1bfa50150@2x.jpg"
            },
            big: {
              _1x: "cards/a63747f582476c4b0ef71cf1bfa50150@2x.jpg",
              _2x: "cards/big/72cb5810067d898e67801ade6da6a740@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/42d5d15ad6c7fde2363d306fdbff5bde.jpg",
              _2x: "cards/bab936b9818d335aed88d783ad42b27e@2x.jpg"
            },
            big: {
              _1x: "cards/bab936b9818d335aed88d783ad42b27e@2x.jpg",
              _2x: "cards/big/fa3ff616c7fa54e4749385a97ce82a9d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5688df2cf6ddd58d5b3478dcf55a2f46.jpg",
              _2x: "cards/0ae6d3753e35f4f7be61451cf7a9f65e@2x.jpg"
            },
            big: {
              _1x: "cards/0ae6d3753e35f4f7be61451cf7a9f65e@2x.jpg",
              _2x: "cards/big/a93f7c37d922b730175dd84404dd6c17@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e83dcd52f4cb746b24fadcefde2941d1.jpg",
              _2x: "cards/2adddc4b1cdda51262caef40a6bedd7f@2x.jpg"
            },
            big: {
              _1x: "cards/2adddc4b1cdda51262caef40a6bedd7f@2x.jpg",
              _2x: "cards/big/a22c58535d9be2ac6ef4b7676ebcca79@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 11,
      name: d("Undine"),
      cls: 1,
      color: 3,
      rarity: 1,
      baseAttack: 40,
      baseHp: 60,
      tag: "player",
      images: {
        _1x: "cards/3e2b3b76a0de30e561b48eb4862a8486.jpg",
        _2x: "cards/f1f751852bc34223b1835633b23fdbea@2x.jpg"
      },
      big: {
        _1x: "cards/f1f751852bc34223b1835633b23fdbea@2x.jpg",
        _2x: "cards/big/3df70dc81ae6d63b310abba34c1fb8ac@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/d3e8c5fab7ceddcbe270672ccfb4d76c.png",
        _2x: "cards/icons/27caa74caf4de89125493ee875f8e835@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/1fd12b667a6d11a3bf682449572f579a.jpg",
              _2x: "cards/bb9b57200bcf225131ef4e36133c45ad@2x.jpg"
            },
            big: {
              _1x: "cards/bb9b57200bcf225131ef4e36133c45ad@2x.jpg",
              _2x: "cards/big/25d47b6f63138f8b8f709b7bd1640dab@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f7d038232012946e4ed146537b4b7b80.jpg",
              _2x: "cards/9256abfae611d49367f87ed1e34a6316@2x.jpg"
            },
            big: {
              _1x: "cards/9256abfae611d49367f87ed1e34a6316@2x.jpg",
              _2x: "cards/big/14e18873845c92bd259b50e8b0326835@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b9f9dc5eb4588d389f69aa16c30db698.jpg",
              _2x: "cards/bb9f110c84dbaa05b03cbebf3a043649@2x.jpg"
            },
            big: {
              _1x: "cards/bb9f110c84dbaa05b03cbebf3a043649@2x.jpg",
              _2x: "cards/big/23968e7523d91dc4eeeb9c43794332a5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bac2aeb90260e0c846ee0b96859467c4.jpg",
              _2x: "cards/4136bc1c2842f6e5912e0dccaf3c921f@2x.jpg"
            },
            big: {
              _1x: "cards/4136bc1c2842f6e5912e0dccaf3c921f@2x.jpg",
              _2x: "cards/big/068119cbda80642ccd8717861ce8206b@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 12,
      name: d("Cook"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 35,
      baseHp: 65,
      tag: "player",
      images: {
        _1x: "cards/078886acaac61976a7519907c072716e.jpg",
        _2x: "cards/3413b9857f62b7a4e2fe62fc82ed727d@2x.jpg"
      },
      big: {
        _1x: "cards/3413b9857f62b7a4e2fe62fc82ed727d@2x.jpg",
        _2x: "cards/big/cbef5bd98ac8b42d280b8939a82a7162@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/b76544759e735645c26c510db4be04af.png",
        _2x: "cards/icons/c45f7b0fe78d575e939dca65cf879121@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f2f916c887a6b1f176a4504e91003b73.jpg",
              _2x: "cards/9b1925657944b850a6a1233abf0949aa@2x.jpg"
            },
            big: {
              _1x: "cards/9b1925657944b850a6a1233abf0949aa@2x.jpg",
              _2x: "cards/big/d7aa2c3b5d0b7d75e4a7560a31a7d5ff@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7dac6258da75ca3eae7f6de5bb1c8cf4.jpg",
              _2x: "cards/3c72bcba24e8d4466684be3e04050c35@2x.jpg"
            },
            big: {
              _1x: "cards/3c72bcba24e8d4466684be3e04050c35@2x.jpg",
              _2x: "cards/big/67314d452d04b505d23b8cb194540d5b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/73fdd4a0aaefbd5744e5044fc9b8f25b.jpg",
              _2x: "cards/78d6c7cd688d2f9a2c99112329c47845@2x.jpg"
            },
            big: {
              _1x: "cards/78d6c7cd688d2f9a2c99112329c47845@2x.jpg",
              _2x: "cards/big/e44137623b5e27158b94de529979fc27@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4a40cb463f029f6687b42353b565d8e2.jpg",
              _2x: "cards/0322c314cae436cf3e1068a1e52ab0e1@2x.jpg"
            },
            big: {
              _1x: "cards/0322c314cae436cf3e1068a1e52ab0e1@2x.jpg",
              _2x: "cards/big/5d0e291ba694a8d56d8c340b3cb35762@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 13,
      name: d("Earth Elemental"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 35,
      baseHp: 65,
      tag: "player",
      images: {
        _1x: "cards/c29fddf3fd4db2e5503284e013482dee.jpg",
        _2x: "cards/a8ddc8c2da34718ab4c4337f24fbda6b@2x.jpg"
      },
      big: {
        _1x: "cards/a8ddc8c2da34718ab4c4337f24fbda6b@2x.jpg",
        _2x: "cards/big/ea5356c5cfce7d5271018bb199426cff@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/35db55d0933ec90ef5fc85791e948aef.png",
        _2x: "cards/icons/f4c6ca48a9b10982f52d40bb5cbd8093@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/2a3d7a4813db187f74108306d211f1fe.jpg",
              _2x: "cards/79ebfcf9ef69da248a3d71240baa74e8@2x.jpg"
            },
            big: {
              _1x: "cards/79ebfcf9ef69da248a3d71240baa74e8@2x.jpg",
              _2x: "cards/big/d1aa6c2d9bf0b721dd4d7eb28b845392@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9c504fdf7117c6f12725c7aa7671a6d3.jpg",
              _2x: "cards/1d4f2c289bc9ace8dba6d23e29116a70@2x.jpg"
            },
            big: {
              _1x: "cards/1d4f2c289bc9ace8dba6d23e29116a70@2x.jpg",
              _2x: "cards/big/aab865313cbbb4c03f95d79d5244d873@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fe925886c9642e1fc603993c22d7e4d1.jpg",
              _2x: "cards/04702b6d18a180eb307ebfdbf780d3bf@2x.jpg"
            },
            big: {
              _1x: "cards/04702b6d18a180eb307ebfdbf780d3bf@2x.jpg",
              _2x: "cards/big/d26a751f6980e2f259f62173ae036730@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0b9ac5d18f0b837632a5b8b552504a23.jpg",
              _2x: "cards/a26fa9befe6a4dd2574d05f328390270@2x.jpg"
            },
            big: {
              _1x: "cards/a26fa9befe6a4dd2574d05f328390270@2x.jpg",
              _2x: "cards/big/ebea504810bdde3e76b3ad364fe141b6@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 14,
      name: d("Gipsy"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 35,
      baseHp: 65,
      tag: "player",
      images: {
        _1x: "cards/fa2a79093ff29907a1078878f3eba56b.jpg",
        _2x: "cards/26cf91a3d79ff206bae470470f1e197e@2x.jpg"
      },
      big: {
        _1x: "cards/26cf91a3d79ff206bae470470f1e197e@2x.jpg",
        _2x: "cards/big/211899787f2dc79a49dba89419ab3c49@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/4097df2805eb8193321682b49efa6100.png",
        _2x: "cards/icons/c269e03b0a718d95ac0c7744217c28c9@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/8f60c9222d2bed4f9cbcb50c7a5cd00e.jpg",
              _2x: "cards/59e46fe685e3373967413f8646441232@2x.jpg"
            },
            big: {
              _1x: "cards/59e46fe685e3373967413f8646441232@2x.jpg",
              _2x: "cards/big/fe3fe893bc5206d90278d071de4b5d7e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/82b6d7dba6f782c07a8f517814ae1cd8.jpg",
              _2x: "cards/156e270945bcc017d716ff72d1edeeef@2x.jpg"
            },
            big: {
              _1x: "cards/156e270945bcc017d716ff72d1edeeef@2x.jpg",
              _2x: "cards/big/b9cf3c280accb286669c88abb1011921@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0f6563f152881770f5d6082b9ece201e.jpg",
              _2x: "cards/e7e3cf8f3b098c60fbe56cf11c7ee8f3@2x.jpg"
            },
            big: {
              _1x: "cards/e7e3cf8f3b098c60fbe56cf11c7ee8f3@2x.jpg",
              _2x: "cards/big/83b72b10b1d1cb79197612d5f13f21a5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/34aa0da1802c6d73203c39f5da6058cf.jpg",
              _2x: "cards/cea96072cae7b88d8caaceffdaeab18a@2x.jpg"
            },
            big: {
              _1x: "cards/cea96072cae7b88d8caaceffdaeab18a@2x.jpg",
              _2x: "cards/big/515c8634c29542beb0ec90fd4c1269c9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 15,
      name: d("Enchantress"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 50,
      baseHp: 50,
      tag: "player",
      images: {
        _1x: "cards/1d2ac987ad8753d89046758f17d34d81.jpg",
        _2x: "cards/72f2ca8933e98116e4f0e00cbfe1a012@2x.jpg"
      },
      big: {
        _1x: "cards/72f2ca8933e98116e4f0e00cbfe1a012@2x.jpg",
        _2x: "cards/big/b575b971606a430126bd5a33c390a42c@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/668194b9f16f178609d9904b83d7eda3.png",
        _2x: "cards/icons/7663badcab91cd4bdf09eddf671418f7@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/5acf1ace0e9437bde3a7b6d9ecbda964.jpg",
              _2x: "cards/dcacb195d4930de57589d5cd310336a8@2x.jpg"
            },
            big: {
              _1x: "cards/dcacb195d4930de57589d5cd310336a8@2x.jpg",
              _2x: "cards/big/dfa91f8cd4aff6368ec494b18abcd673@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c773a42eec7f3ccda8cba552e8e55eeb.jpg",
              _2x: "cards/386e98724bac03454b4c0626019e5ffe@2x.jpg"
            },
            big: {
              _1x: "cards/386e98724bac03454b4c0626019e5ffe@2x.jpg",
              _2x: "cards/big/38c0ab873bd8087af93fff3546611903@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3c1c5a9d85ee3969a3c7661e0c12ba37.jpg",
              _2x: "cards/31f6ea8022ba22b9d95f4f30ce232abc@2x.jpg"
            },
            big: {
              _1x: "cards/31f6ea8022ba22b9d95f4f30ce232abc@2x.jpg",
              _2x: "cards/big/b0509ccfd6915e2f80e2364adcf34547@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fe50585a31f2b7f3dbb3294ffd834d3a.jpg",
              _2x: "cards/43bd7dbb32405fb41bdab354b2bdc248@2x.jpg"
            },
            big: {
              _1x: "cards/43bd7dbb32405fb41bdab354b2bdc248@2x.jpg",
              _2x: "cards/big/d6873994edc95baf7a226588685b6395@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 16,
      name: d("Twins"),
      cls: 1,
      color: 3,
      rarity: 1,
      baseAttack: 30,
      baseHp: 70,
      tag: "player",
      images: {
        _1x: "cards/b806056546a6ca4c5800e55e3ddda63a.jpg",
        _2x: "cards/f3450fc3892f3e348e05665a8d9020da@2x.jpg"
      },
      big: {
        _1x: "cards/f3450fc3892f3e348e05665a8d9020da@2x.jpg",
        _2x: "cards/big/699dec504c2ea1a264678bdf3ca444c0@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/74f73e5c4b6415872666ad92ba7ed42b.png",
        _2x: "cards/icons/f7f7545ef26dba6a991b0823a1e74922@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/ff8ee868089ea6c4a829f24e6129e761.jpg",
              _2x: "cards/edd3cabe1536062435ce86303f1dd40f@2x.jpg"
            },
            big: {
              _1x: "cards/edd3cabe1536062435ce86303f1dd40f@2x.jpg",
              _2x: "cards/big/80e697116e2ccb3956e153675be4320d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/52fbdb696a441ea9d9835591a299b029.jpg",
              _2x: "cards/ab737c8ec100b12aebca84229efa0287@2x.jpg"
            },
            big: {
              _1x: "cards/ab737c8ec100b12aebca84229efa0287@2x.jpg",
              _2x: "cards/big/0b1b4dc848434bb3edf5b493839d11a0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/aca33728d0d688b5330a9bc2a7c0571a.jpg",
              _2x: "cards/966ad58e39cb7066d97f85c1fb1cb965@2x.jpg"
            },
            big: {
              _1x: "cards/966ad58e39cb7066d97f85c1fb1cb965@2x.jpg",
              _2x: "cards/big/70ce48be4bd307eb71c614d46f1f9f77@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f2dbc64a6b3174d6cc9a8b1bd1234ac5.jpg",
              _2x: "cards/04152db29c388c68c52ad340ace547a8@2x.jpg"
            },
            big: {
              _1x: "cards/04152db29c388c68c52ad340ace547a8@2x.jpg",
              _2x: "cards/big/45bf53849c7114131cb857c59a06c845@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 17,
      name: d("Succub"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 65,
      baseHp: 35,
      tag: "player",
      images: {
        _1x: "cards/fcb085f61ed13a28332e63e0a09a92e1.jpg",
        _2x: "cards/7a8463c7ef7224ff434fe90f2f976141@2x.jpg"
      },
      big: {
        _1x: "cards/7a8463c7ef7224ff434fe90f2f976141@2x.jpg",
        _2x: "cards/big/08bf6ab0f2beb9fc6e473c2ee0f7f3d2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/5f285f6b4dc32e8a2b330fd28ce15270.png",
        _2x: "cards/icons/aa0d92ea92a5bf4b3ced4987ffed41e5@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/fd503012f0db2b3ee8e55677e97adb83.jpg",
              _2x: "cards/4fb39b1b50d0d0ec863b3e6bba371287@2x.jpg"
            },
            big: {
              _1x: "cards/4fb39b1b50d0d0ec863b3e6bba371287@2x.jpg",
              _2x: "cards/big/79e73609434e7a1de1382c785d5243a6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/03d67bfc37735b0ad905b1873d864f28.jpg",
              _2x: "cards/535aa2d1669f188b812cddb55d7b8d1a@2x.jpg"
            },
            big: {
              _1x: "cards/535aa2d1669f188b812cddb55d7b8d1a@2x.jpg",
              _2x: "cards/big/4f01c89eef7b01271ccb747a71d639e0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ec482ca9e5a5ad2c803e49320d9ed31d.jpg",
              _2x: "cards/cb2992a54d3200ed11db85c48685f670@2x.jpg"
            },
            big: {
              _1x: "cards/cb2992a54d3200ed11db85c48685f670@2x.jpg",
              _2x: "cards/big/8021df48d7e55227f2000b095b392a23@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c9753d40f4b754d904ea631c37f011f5.jpg",
              _2x: "cards/e8a55b16273c56417e042f3d5b7a5c60@2x.jpg"
            },
            big: {
              _1x: "cards/e8a55b16273c56417e042f3d5b7a5c60@2x.jpg",
              _2x: "cards/big/0dfc4e7b0508036e402737e0642ec783@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 18,
      name: d("Satyr"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 25,
      baseHp: 75,
      tag: "player",
      images: {
        _1x: "cards/88af0575b44bccd84e8bd835ade00eda.jpg",
        _2x: "cards/8a5dffd59426482e32e2520402b0c72a@2x.jpg"
      },
      big: {
        _1x: "cards/8a5dffd59426482e32e2520402b0c72a@2x.jpg",
        _2x: "cards/big/e2a9f9ad33b80ea63a7d48a66b549228@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f50f6f3072fbcca158bd11541b8e6b32.png",
        _2x: "cards/icons/816e383ad4a6166aa2e9f867d997040c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0c30a4182e65aa623fd91675aa4b1a97.jpg",
              _2x: "cards/b2b7c043cb4415f49fa9e41c5bb4a161@2x.jpg"
            },
            big: {
              _1x: "cards/b2b7c043cb4415f49fa9e41c5bb4a161@2x.jpg",
              _2x: "cards/big/36a6a1df5fa92ef4b23f5dc0cbd759a6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7a382aa271ff5b48471522641ff0fd5d.jpg",
              _2x: "cards/507a5988ffc757959e778a2ae93f99a7@2x.jpg"
            },
            big: {
              _1x: "cards/507a5988ffc757959e778a2ae93f99a7@2x.jpg",
              _2x: "cards/big/02c9a4d19481895fc18aa9c3856c289d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/54fc1dd55b0170947b37b1128ace5db8.jpg",
              _2x: "cards/b25a3381b63ade6555ab2055e4f019e1@2x.jpg"
            },
            big: {
              _1x: "cards/b25a3381b63ade6555ab2055e4f019e1@2x.jpg",
              _2x: "cards/big/92372bfdce043771ce34d9ff3ed9199a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a0898fa0b536d89c4cc8ceb659ac6007.jpg",
              _2x: "cards/e28d100caf296f0ed82acd5f5c79a04d@2x.jpg"
            },
            big: {
              _1x: "cards/e28d100caf296f0ed82acd5f5c79a04d@2x.jpg",
              _2x: "cards/big/98053cdfc76ddbe184f8adc9783fd349@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 19,
      name: d("Shaman"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 55,
      baseHp: 45,
      tag: "player",
      images: {
        _1x: "cards/d5bbd12917a90819e381244271e17007.jpg",
        _2x: "cards/0fe5a53019dc36a1e41011e8f4fab63f@2x.jpg"
      },
      big: {
        _1x: "cards/0fe5a53019dc36a1e41011e8f4fab63f@2x.jpg",
        _2x: "cards/big/239b5afa4e9b76037bd51972a8fa754f@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/cf603693d102f819ec336751370b9c76.png",
        _2x: "cards/icons/815b09fcfa898cb93832bbd8152b4a73@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0e8aa8527a7bde095c85c53faf4c2d73.jpg",
              _2x: "cards/a15bcd1548d288081c19b20fec42f2da@2x.jpg"
            },
            big: {
              _1x: "cards/a15bcd1548d288081c19b20fec42f2da@2x.jpg",
              _2x: "cards/big/9723b150e22bf3a858f2168445bdb9d6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/63c42ab166395c62f2ffac5b8f1efc30.jpg",
              _2x: "cards/7cec7821215a2299161833abe471a6e8@2x.jpg"
            },
            big: {
              _1x: "cards/7cec7821215a2299161833abe471a6e8@2x.jpg",
              _2x: "cards/big/01d641ae986c31857ead6b24efd81318@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b1e202866a154da4cca9299e783928fa.jpg",
              _2x: "cards/50ad8feeec0bb1ca67d2fc6d9177ecee@2x.jpg"
            },
            big: {
              _1x: "cards/50ad8feeec0bb1ca67d2fc6d9177ecee@2x.jpg",
              _2x: "cards/big/0fa6452f17c5963eb72d76d3ab9d068f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ebcd13d619cf628d00771510befab49f.jpg",
              _2x: "cards/3417fec7ff3c01c92dee6de03059ac09@2x.jpg"
            },
            big: {
              _1x: "cards/3417fec7ff3c01c92dee6de03059ac09@2x.jpg",
              _2x: "cards/big/ad2199f3f93c54bdae0cc19e08aa562a@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 20,
      name: d("Slave"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 45,
      baseHp: 55,
      tag: "player",
      images: {
        _1x: "cards/36b4fd59f58f4fdc71f95d1d1e407941.jpg",
        _2x: "cards/7f05c84a0056724314b23bdceb5cdc88@2x.jpg"
      },
      big: {
        _1x: "cards/7f05c84a0056724314b23bdceb5cdc88@2x.jpg",
        _2x: "cards/big/6135d5c98292133412d37c0ca7b21da9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/bf3cf55dcbd761bedc525ca9e062dbf0.png",
        _2x: "cards/icons/df8991c0eeb7112cb3f37341adc1c3f4@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c469739fcc6bb73037b996c408c38599.jpg",
              _2x: "cards/4a6738c167bf1401cce2517d33a07c28@2x.jpg"
            },
            big: {
              _1x: "cards/4a6738c167bf1401cce2517d33a07c28@2x.jpg",
              _2x: "cards/big/337e9f7105503a8efa36523d5dc3dcde@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d50c4705ffba5c7db1f7668c1aa57bff.jpg",
              _2x: "cards/e5bcf0db34b3ac0da82ff61d3b3808fd@2x.jpg"
            },
            big: {
              _1x: "cards/e5bcf0db34b3ac0da82ff61d3b3808fd@2x.jpg",
              _2x: "cards/big/ae8bdcc0789600931d5bbd66992e6fd3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/78dd455135170f6f8b0447c47f590e67.jpg",
              _2x: "cards/b07dcb0b4bce47e8ab06a45ff526d41b@2x.jpg"
            },
            big: {
              _1x: "cards/b07dcb0b4bce47e8ab06a45ff526d41b@2x.jpg",
              _2x: "cards/big/f5cc990bdfa308dd78c76658065e1ef1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/84b7d8930a52d4826fbeb5f6434edd44.jpg",
              _2x: "cards/5a15a4637447130d666d68c785228480@2x.jpg"
            },
            big: {
              _1x: "cards/5a15a4637447130d666d68c785228480@2x.jpg",
              _2x: "cards/big/303cfcbc75cd728e0e60ccdf854a8c96@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 21,
      name: d("Pirate"),
      cls: 1,
      color: 3,
      rarity: 2,
      baseAttack: 75,
      baseHp: 50,
      tag: "player",
      images: {
        _1x: "cards/67f3b49d562054738e1638ffb069f0e7.jpg",
        _2x: "cards/4106e888749b4cd6fdaa7cf93d02a8ca@2x.jpg"
      },
      big: {
        _1x: "cards/4106e888749b4cd6fdaa7cf93d02a8ca@2x.jpg",
        _2x: "cards/big/50dafa4d15434b1eeb1d7f0c5cb39993@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/8114ca1356c6020a58d8c6a3a29ce7ed.png",
        _2x: "cards/icons/ad1bd6d6fd8dad62e6c972290a90f09c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e24944adeca329d97ad0b9db566831cb.jpg",
              _2x: "cards/c33d5a3f4461ebad5bee05cfb18d76b6@2x.jpg"
            },
            big: {
              _1x: "cards/c33d5a3f4461ebad5bee05cfb18d76b6@2x.jpg",
              _2x: "cards/big/ca99acfa3dc9889dca13a50b06de584c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/37a76f3b23527eaa51d11fa71b684c1a.jpg",
              _2x: "cards/9ae0c34ae0b02940635e3d12c432b491@2x.jpg"
            },
            big: {
              _1x: "cards/9ae0c34ae0b02940635e3d12c432b491@2x.jpg",
              _2x: "cards/big/257bc5c723b0b21efcdd4655d615be1e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/263d16f0481d0629f3021120f8030844.jpg",
              _2x: "cards/c118964f5f28cc164fe50ba82577a09e@2x.jpg"
            },
            big: {
              _1x: "cards/c118964f5f28cc164fe50ba82577a09e@2x.jpg",
              _2x: "cards/big/a385c266ecea697bc5ba2006798381b8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2f43c2a9f4db399e1cf81d709b681f7d.jpg",
              _2x: "cards/ba3b7c366e1bbdce9fccf5354c69193e@2x.jpg"
            },
            big: {
              _1x: "cards/ba3b7c366e1bbdce9fccf5354c69193e@2x.jpg",
              _2x: "cards/big/023cf72759223c4a7a15e40daea1b332@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 22,
      name: d("Harpy"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 81.25,
      baseHp: 43.75,
      tag: "player",
      images: {
        _1x: "cards/ddd214b8b15cd4d9aea47cb07aa68726.jpg",
        _2x: "cards/36a14db93d29bab7591e7ed80833b246@2x.jpg"
      },
      big: {
        _1x: "cards/36a14db93d29bab7591e7ed80833b246@2x.jpg",
        _2x: "cards/big/1d2042464924da26ec87caf6d8aec8ea@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/26b331e006affa223583a27d8861dfa3.png",
        _2x: "cards/icons/eae6fe47e7c0dcbce70945970923c96c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e65450bba47cb68079da0bf2db993815.jpg",
              _2x: "cards/dd14fc20ef28ec990935569eb4ac2b57@2x.jpg"
            },
            big: {
              _1x: "cards/dd14fc20ef28ec990935569eb4ac2b57@2x.jpg",
              _2x: "cards/big/3b52c3200137326f044169b16cce651f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5c9e2ba7ff653c897cc9e4fe7cb15dc1.jpg",
              _2x: "cards/0a8d77c2d5170c4263db0c54c5736f44@2x.jpg"
            },
            big: {
              _1x: "cards/0a8d77c2d5170c4263db0c54c5736f44@2x.jpg",
              _2x: "cards/big/61c19a677af1eade7077037a4d48b01c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1e20fcf46b916310575a543171a6ba27.jpg",
              _2x: "cards/9fd1eb53ce92a902eadba33dcc79be6f@2x.jpg"
            },
            big: {
              _1x: "cards/9fd1eb53ce92a902eadba33dcc79be6f@2x.jpg",
              _2x: "cards/big/5560ea432e690de11052300859d3dd6e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2ce7b5900f99cf99cc4299285aa26357.jpg",
              _2x: "cards/ba37bd32bb110c8232fafe282b5ed161@2x.jpg"
            },
            big: {
              _1x: "cards/ba37bd32bb110c8232fafe282b5ed161@2x.jpg",
              _2x: "cards/big/223bd66b9be7659fd012cb00846645b9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 23,
      name: d("Axewoman"),
      cls: 3,
      color: 2,
      rarity: 2,
      baseAttack: 87.5,
      baseHp: 37.5,
      tag: "player",
      images: {
        _1x: "cards/5e1352e2fbecd1bf9b7c55f5efa82fad.jpg",
        _2x: "cards/c91f766b5668de908222a65c8fd8eb22@2x.jpg"
      },
      big: {
        _1x: "cards/c91f766b5668de908222a65c8fd8eb22@2x.jpg",
        _2x: "cards/big/0689ce72c48a52a1aa8f0ba4367c755d@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/d652617a671ca7bb19e9977d9dcd5434.png",
        _2x: "cards/icons/ee6184e28567e5f59b5447f7402d2907@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/28796ba8671c2e4524d31916bc1a7716.jpg",
              _2x: "cards/863b8243218cd4119e507485cf1d7c26@2x.jpg"
            },
            big: {
              _1x: "cards/863b8243218cd4119e507485cf1d7c26@2x.jpg",
              _2x: "cards/big/11931d2497597b7e4084da5e3b7b6642@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9883b4abb49c396c7cfe37b9f5dd33a0.jpg",
              _2x: "cards/0be6bea04114d6fd73e5a826323d3f20@2x.jpg"
            },
            big: {
              _1x: "cards/0be6bea04114d6fd73e5a826323d3f20@2x.jpg",
              _2x: "cards/big/63dbcff398e02bcb308d16991a721161@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/de472f1510760cc255488cb8f6bde771.jpg",
              _2x: "cards/d0f2f560276b996f5b278313d45ddff0@2x.jpg"
            },
            big: {
              _1x: "cards/d0f2f560276b996f5b278313d45ddff0@2x.jpg",
              _2x: "cards/big/d2ff27aa7a32f891d47d5641a4aa8145@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/37b8fcb2743e3c2ad588b3e5544d096a.jpg",
              _2x: "cards/c7c1974a83142d96f02232241c60efa1@2x.jpg"
            },
            big: {
              _1x: "cards/c7c1974a83142d96f02232241c60efa1@2x.jpg",
              _2x: "cards/big/a157d48287b5bd529c47d11e07be7ca6@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 24,
      name: d("Dark Angel"),
      cls: 4,
      color: 5,
      rarity: 2,
      baseAttack: 56.25,
      baseHp: 68.75,
      tag: "player",
      images: {
        _1x: "cards/de1e43a0bdead496e3a7e53c7af83deb.jpg",
        _2x: "cards/ab0937f14b831765662f695974a394bc@2x.jpg"
      },
      big: {
        _1x: "cards/ab0937f14b831765662f695974a394bc@2x.jpg",
        _2x: "cards/big/fa1d4c97a09ea6d20273c415cb895e87@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/c3bbf39e00496981328040da66a61808.png",
        _2x: "cards/icons/6fd87e0c8a0777d0b89fdd8351019507@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0008743b029ab45fc63858f449338e1d.jpg",
              _2x: "cards/402d76b0cef1dde60b2b96e2f87cbfee@2x.jpg"
            },
            big: {
              _1x: "cards/402d76b0cef1dde60b2b96e2f87cbfee@2x.jpg",
              _2x: "cards/big/207ee291a6dbc47d274705b6eeaf7c47@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7bc7a33ac213ae1fd0ec644bb41a0494.jpg",
              _2x: "cards/6175493cb5d2901071916b9bac02f61a@2x.jpg"
            },
            big: {
              _1x: "cards/6175493cb5d2901071916b9bac02f61a@2x.jpg",
              _2x: "cards/big/265099f99a1561fa552e34ab3adb7a38@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9916576c13c0b492da919fd281724195.jpg",
              _2x: "cards/a0b1b69e4d4f96ebed2b25bf1c820782@2x.jpg"
            },
            big: {
              _1x: "cards/a0b1b69e4d4f96ebed2b25bf1c820782@2x.jpg",
              _2x: "cards/big/5e48ca2364c5fa2cee42231b91c40b4c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/be59147d7ae9c268f1b35f2e1666d44b.jpg",
              _2x: "cards/52195498607a7da256c072bcc66bf0e4@2x.jpg"
            },
            big: {
              _1x: "cards/52195498607a7da256c072bcc66bf0e4@2x.jpg",
              _2x: "cards/big/e980855a2921d7c38ba9f0b923bae420@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 25,
      name: d("Arabian Princess"),
      cls: 5,
      color: 4,
      rarity: 2,
      baseAttack: 43.75,
      baseHp: 81.25,
      tag: "player",
      images: {
        _1x: "cards/cac93b8171191e98dc068b6432770123.jpg",
        _2x: "cards/3dcc65aac75d46e91eb8a06130a6f4f0@2x.jpg"
      },
      big: {
        _1x: "cards/3dcc65aac75d46e91eb8a06130a6f4f0@2x.jpg",
        _2x: "cards/big/13f71fdfe27efa45e60db37fb5e1e3be@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/565c64178d90002365578103c5d7cc48.png",
        _2x: "cards/icons/9ac25869d896c98eaa220f7e46876fb3@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/b5055d9ddaa1ab6bf6ea92f9e7cc76e7.jpg",
              _2x: "cards/3dc2bd24f22126ff412a00f8faf3dbbf@2x.jpg"
            },
            big: {
              _1x: "cards/3dc2bd24f22126ff412a00f8faf3dbbf@2x.jpg",
              _2x: "cards/big/ed55b19d87b01ae6144a5ce76ee16952@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/724732ec76f3715f4965cd5547d4eb09.jpg",
              _2x: "cards/a6b1eccf3284a6122a323d3e7fce2844@2x.jpg"
            },
            big: {
              _1x: "cards/a6b1eccf3284a6122a323d3e7fce2844@2x.jpg",
              _2x: "cards/big/854c008fc5dc6e1124ab1349fe2f85b5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c552bd8a41afd6d7f456314424087e0a.jpg",
              _2x: "cards/8dfa8f27f576304aa2eb8bac1467c691@2x.jpg"
            },
            big: {
              _1x: "cards/8dfa8f27f576304aa2eb8bac1467c691@2x.jpg",
              _2x: "cards/big/413645515d7345e92de2255167448484@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4c6c94ffaf44e9497fd1aa7bc3f56b27.jpg",
              _2x: "cards/b32df9b027916bfda11de1bf11e8064e@2x.jpg"
            },
            big: {
              _1x: "cards/b32df9b027916bfda11de1bf11e8064e@2x.jpg",
              _2x: "cards/big/4661c38220ef70940b451afd048c3a4d@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 26,
      name: d("Snow Queen"),
      cls: 1,
      color: 3,
      rarity: 2,
      baseAttack: 68.75,
      baseHp: 56.25,
      tag: "player",
      cset: 1,
      images: {
        _1x: "cards/80e0ccbe3ad52bd9a1551b27dbff5cee.jpg",
        _2x: "cards/f0a4096f58ef20a23dd2838132092641@2x.jpg"
      },
      big: {
        _1x: "cards/f0a4096f58ef20a23dd2838132092641@2x.jpg",
        _2x: "cards/big/0750769c6c5e338d2ece6d78ad2ee4e6@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/d406890c079ff7cc614ab56e27225575.png",
        _2x: "cards/icons/fe4f5da56be39800d8af98103a7b76a7@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f8f225a2faf20dad4507b6f8a57fc4d6.jpg",
              _2x: "cards/d135378bbc4dfa03fbce01e6b394ba40@2x.jpg"
            },
            big: {
              _1x: "cards/d135378bbc4dfa03fbce01e6b394ba40@2x.jpg",
              _2x: "cards/big/c11f994649d4b5a609760031dc3caa10@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7ab52fd370beb9bff4650548ad0a7cc1.jpg",
              _2x: "cards/228b24608259d33ccb09b21fb6e8df72@2x.jpg"
            },
            big: {
              _1x: "cards/228b24608259d33ccb09b21fb6e8df72@2x.jpg",
              _2x: "cards/big/52a33f0eedb2ac8109c03b0911f155b7@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1c76b98da2cf58ad4ac8538cd1d4c8da.jpg",
              _2x: "cards/8c251dc96947d91129173da859acca01@2x.jpg"
            },
            big: {
              _1x: "cards/8c251dc96947d91129173da859acca01@2x.jpg",
              _2x: "cards/big/578977278cd697971b716951f5e82629@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ba46eb7fa9844d41cc563367e0d81c57.jpg",
              _2x: "cards/4872f0c40f37338c77c4722ef97a2ea7@2x.jpg"
            },
            big: {
              _1x: "cards/4872f0c40f37338c77c4722ef97a2ea7@2x.jpg",
              _2x: "cards/big/dd4b30663c090d72fb3926ee90103913@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 27,
      name: d("Sentinel"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 81.25,
      baseHp: 43.75,
      tag: "player",
      images: {
        _1x: "cards/33c05f82ec132b8911ffa6a0d557fb00.jpg",
        _2x: "cards/934a08e15bc0a616b76445907a90e0a4@2x.jpg"
      },
      big: {
        _1x: "cards/934a08e15bc0a616b76445907a90e0a4@2x.jpg",
        _2x: "cards/big/c70474764fa5c08d4cf4c7aa050ff9e2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/b1875304f322585cd74ff29c886a398a.png",
        _2x: "cards/icons/db2aec598ea7e07b6093ff6beee376ee@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a02c0159d394eb236dd407ddae750ee3.jpg",
              _2x: "cards/1a392d39a785b370cedde806a7f7e591@2x.jpg"
            },
            big: {
              _1x: "cards/1a392d39a785b370cedde806a7f7e591@2x.jpg",
              _2x: "cards/big/6593c9d0039a3795ed817147f3a3094e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a787e82ae278814fed5ea0e026941764.jpg",
              _2x: "cards/8a8c8283f5ee5bfe8b8abcd0e2795c12@2x.jpg"
            },
            big: {
              _1x: "cards/8a8c8283f5ee5bfe8b8abcd0e2795c12@2x.jpg",
              _2x: "cards/big/7308006a8d2adbcfefa21674c663d0a3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/176a6e8d0735a363f05e60d5a66c9999.jpg",
              _2x: "cards/c90cb3ff53c21a08a4ed6590b93de957@2x.jpg"
            },
            big: {
              _1x: "cards/c90cb3ff53c21a08a4ed6590b93de957@2x.jpg",
              _2x: "cards/big/033344b3b21fd09655ba81df4dfa3ce9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d79f5bd58ad60cd5c2e0db08c43544a8.jpg",
              _2x: "cards/def11ab292e4d882e285988b286bc66f@2x.jpg"
            },
            big: {
              _1x: "cards/def11ab292e4d882e285988b286bc66f@2x.jpg",
              _2x: "cards/big/0401f6eb7dcd275dca121b34569e7d96@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 28,
      name: d("Leprechaun"),
      cls: 3,
      color: 2,
      rarity: 2,
      baseAttack: 50,
      baseHp: 75,
      tag: "player",
      cset: 2,
      images: {
        _1x: "cards/9f2fe0e5aebc2e61e6e54196929cc3d5.jpg",
        _2x: "cards/5a0da3b070dc2a1055f14d00710a2555@2x.jpg"
      },
      big: {
        _1x: "cards/5a0da3b070dc2a1055f14d00710a2555@2x.jpg",
        _2x: "cards/big/9f022def4df9afc1e5d5ef3260d2bca0@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/8d758c7fa3ecd6de2a9a5afb5e28572e.png",
        _2x: "cards/icons/068c19706ba0fcab573d143cb86b3203@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/652199852ad683983228ae30cd17f6ef.jpg",
              _2x: "cards/7f392d1cf62b6ca58bac427d0576331a@2x.jpg"
            },
            big: {
              _1x: "cards/7f392d1cf62b6ca58bac427d0576331a@2x.jpg",
              _2x: "cards/big/7a19e6b418b51f66cd5a12a535963445@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0329ea18c374219dd61c143e1c79fed4.jpg",
              _2x: "cards/0ed14f0326a9cd7205999ca7d6344758@2x.jpg"
            },
            big: {
              _1x: "cards/0ed14f0326a9cd7205999ca7d6344758@2x.jpg",
              _2x: "cards/big/ea6c201a333f30e17b730ae16085f148@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/540851974df73021fd86a3e782def771.jpg",
              _2x: "cards/1ae9bba8f0d7df040e3d5b0606a5181e@2x.jpg"
            },
            big: {
              _1x: "cards/1ae9bba8f0d7df040e3d5b0606a5181e@2x.jpg",
              _2x: "cards/big/c76a8d18fdcedb123f90e2ad6375e6e2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ae6be883310d49596b11a9a22bf0279d.jpg",
              _2x: "cards/264a01f6681f49d0501fc4dc3fac148f@2x.jpg"
            },
            big: {
              _1x: "cards/264a01f6681f49d0501fc4dc3fac148f@2x.jpg",
              _2x: "cards/big/92d11d6fabcedcef025abdf97e77d186@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 29,
      name: d("Witch"),
      cls: 4,
      color: 5,
      rarity: 2,
      baseAttack: 31.25,
      baseHp: 93.75,
      tag: "player",
      images: {
        _1x: "cards/7687cd1559f8a3b2c393a7a8cc155a96.jpg",
        _2x: "cards/84102c638eb2f50ebe3cb565a255d2c6@2x.jpg"
      },
      big: {
        _1x: "cards/84102c638eb2f50ebe3cb565a255d2c6@2x.jpg",
        _2x: "cards/big/64d8d511d8c7d9e7c2530a14350a0cae@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/186c7bc6b90792979a8e98558d64e481.png",
        _2x: "cards/icons/223e8ab6715289356b51752558914b1a@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/995fd202f85aa87f37a87d0bdcf0044c.jpg",
              _2x: "cards/538b9c0e5a178b6bd4df28f58f9265a7@2x.jpg"
            },
            big: {
              _1x: "cards/538b9c0e5a178b6bd4df28f58f9265a7@2x.jpg",
              _2x: "cards/big/a9520555521449bc20fba34fa3d90992@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/01435fae16f65065862c2de1cb0c861d.jpg",
              _2x: "cards/a4d61f0efbe417f34bc3d3c6fce6c29e@2x.jpg"
            },
            big: {
              _1x: "cards/a4d61f0efbe417f34bc3d3c6fce6c29e@2x.jpg",
              _2x: "cards/big/4b43d2bb4f36311eb3896e4a6a8d5068@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f2e78f6d77898b3a9cd800b890522f1c.jpg",
              _2x: "cards/d1fe2022e59a20df4a031597d69bbfd7@2x.jpg"
            },
            big: {
              _1x: "cards/d1fe2022e59a20df4a031597d69bbfd7@2x.jpg",
              _2x: "cards/big/0184c14c334e23a9f33493a43254db86@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/571c7828d14d0c179c21327a56663d30.jpg",
              _2x: "cards/c5645ec606c8544f888d0e99a68e3538@2x.jpg"
            },
            big: {
              _1x: "cards/c5645ec606c8544f888d0e99a68e3538@2x.jpg",
              _2x: "cards/big/3a7fd3b6e47dd81adfff2e1b9fc9d8e2@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 30,
      name: d("Maid"),
      cls: 5,
      color: 4,
      rarity: 2,
      baseAttack: 37.5,
      baseHp: 87.5,
      tag: "player",
      images: {
        _1x: "cards/3934d0f7d17ee16569657eceacef478e.jpg",
        _2x: "cards/1470c5019bd5dddd3f3515ae763e2a3a@2x.jpg"
      },
      big: {
        _1x: "cards/1470c5019bd5dddd3f3515ae763e2a3a@2x.jpg",
        _2x: "cards/big/af8a7de435a9fe0e9e083b355c2bfb6e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/9ae320d404fb61df1872557e3a2e75be.png",
        _2x: "cards/icons/a1cc0fc2a19a60d939ae243388b42130@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/52a378c2635dc6c9c77ce52f9846c62d.jpg",
              _2x: "cards/4a5ad8ad81300e7bca39dca7f90b1a1d@2x.jpg"
            },
            big: {
              _1x: "cards/4a5ad8ad81300e7bca39dca7f90b1a1d@2x.jpg",
              _2x: "cards/big/116a21dab155c55774270dc10811d02d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/08aa8909b7f3ae0502d62db5d8811042.jpg",
              _2x: "cards/508cc9b298cbe705e49055068cf9910c@2x.jpg"
            },
            big: {
              _1x: "cards/508cc9b298cbe705e49055068cf9910c@2x.jpg",
              _2x: "cards/big/5fb715c2862fa07f47d35f54804a67e5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e699a9bd96605c5825459c849ac53808.jpg",
              _2x: "cards/a201aee334fdb1313efdb220e28705b3@2x.jpg"
            },
            big: {
              _1x: "cards/a201aee334fdb1313efdb220e28705b3@2x.jpg",
              _2x: "cards/big/e145f372607287535d1ecbf6333d6831@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/db0a7b3b46459388648a074fec7e63a3.jpg",
              _2x: "cards/853672c31240fd4b91b4aa9015bf88f1@2x.jpg"
            },
            big: {
              _1x: "cards/853672c31240fd4b91b4aa9015bf88f1@2x.jpg",
              _2x: "cards/big/44d0f46823573217b0e770c71b5e0ee7@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 31,
      name: d("Cinderella"),
      cls: 1,
      color: 3,
      rarity: 2,
      baseAttack: 50,
      baseHp: 75,
      tag: "player",
      images: {
        _1x: "cards/eb7a79697437dff6095c8da3a3014ec1.jpg",
        _2x: "cards/af68ccfc992c932cb10e26ac2162906f@2x.jpg"
      },
      big: {
        _1x: "cards/af68ccfc992c932cb10e26ac2162906f@2x.jpg",
        _2x: "cards/big/a677adae7773f7f95c76546d53d70d3b@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/610957db041a108b8be1003029c72bed.png",
        _2x: "cards/icons/fdbaca4f614530ec443e1505198d5efd@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/678fd6e9d32a69321f3336c2c588de86.jpg",
              _2x: "cards/164077d58bdcf861c0de199c95e0e562@2x.jpg"
            },
            big: {
              _1x: "cards/164077d58bdcf861c0de199c95e0e562@2x.jpg",
              _2x: "cards/big/3a504d20d37e5af12d610a64fa2416f1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b60e78a4a038e98a27590ba7efb11df3.jpg",
              _2x: "cards/784acc80aeef54cef4164d5d572a2558@2x.jpg"
            },
            big: {
              _1x: "cards/784acc80aeef54cef4164d5d572a2558@2x.jpg",
              _2x: "cards/big/617c1ca59aae27fd257ada79cc746dc5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9893cd92c305ae6102f79e87db30c0a8.jpg",
              _2x: "cards/46aa98a1353e670111c0e97bd3f0a66d@2x.jpg"
            },
            big: {
              _1x: "cards/46aa98a1353e670111c0e97bd3f0a66d@2x.jpg",
              _2x: "cards/big/6b30add7a6c5a3ea5f7afc5909f7e4a8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/60b4970f9fddae14e41699e3f96135ff.jpg",
              _2x: "cards/ac66a9dd7a85607ff47e32b552bf286f@2x.jpg"
            },
            big: {
              _1x: "cards/ac66a9dd7a85607ff47e32b552bf286f@2x.jpg",
              _2x: "cards/big/aac41906e07c8c7a362e0300c4309a1a@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 32,
      name: d("Stepmother"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 75,
      baseHp: 50,
      tag: "player",
      images: {
        _1x: "cards/a234eed7eeea4c33f7e94575f5c70654.jpg",
        _2x: "cards/908fbdab5ef7e043ab08f84d0d822c0a@2x.jpg"
      },
      big: {
        _1x: "cards/908fbdab5ef7e043ab08f84d0d822c0a@2x.jpg",
        _2x: "cards/big/a1390d1e8e66e1aefb15a7c72ad509ed@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/2c819ec23b42c927d25aa3fd8adb22cd.png",
        _2x: "cards/icons/1488c8b35cbd7ecac97063ac52699ab0@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a7c8e6b4bf85f298dbf1d6b4e5e6846e.jpg",
              _2x: "cards/f56b5c6d2decac8c9a94c1012b795f22@2x.jpg"
            },
            big: {
              _1x: "cards/f56b5c6d2decac8c9a94c1012b795f22@2x.jpg",
              _2x: "cards/big/47cd53b01699fdd9497fd067d40d3a0c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/986a051adb7c1be07473265201904dba.jpg",
              _2x: "cards/fb50b08615d173ca16d860111c823003@2x.jpg"
            },
            big: {
              _1x: "cards/fb50b08615d173ca16d860111c823003@2x.jpg",
              _2x: "cards/big/7b9bb23beb8cd870bb73f690b9b2e1d0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c716a09d4675d5ab1f2a9c0f60923423.jpg",
              _2x: "cards/472da831e2f5b9d8e79010c175eaf53f@2x.jpg"
            },
            big: {
              _1x: "cards/472da831e2f5b9d8e79010c175eaf53f@2x.jpg",
              _2x: "cards/big/db0516696002db965566900829596a82@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c76ecc8e8620677813c95633c82f3794.jpg",
              _2x: "cards/f7ee905230d118db51bdd170fbf5e170@2x.jpg"
            },
            big: {
              _1x: "cards/f7ee905230d118db51bdd170fbf5e170@2x.jpg",
              _2x: "cards/big/d6cfd4106852bf7762c02dd0a4727716@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 33,
      name: d("Archeress"),
      cls: 3,
      color: 2,
      rarity: 2,
      baseAttack: 68.75,
      baseHp: 56.25,
      tag: "player",
      cset: 2,
      images: {
        _1x: "cards/f5bddf91bf8f89f5b4f892a07de35408.jpg",
        _2x: "cards/b5678a54ff922855d12a8ea45fc140d3@2x.jpg"
      },
      big: {
        _1x: "cards/b5678a54ff922855d12a8ea45fc140d3@2x.jpg",
        _2x: "cards/big/eabb6563d86871823bdc98d6e102fa2c@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/855472ee0347a6e7e56c675edf774e2a.png",
        _2x: "cards/icons/9911022aa544d1cf674e757fcd511d05@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/44432b4f07e57e20ec50b0edaa7ded5e.jpg",
              _2x: "cards/b36556c11b72974c78072154ead6a43e@2x.jpg"
            },
            big: {
              _1x: "cards/b36556c11b72974c78072154ead6a43e@2x.jpg",
              _2x: "cards/big/6f82f70aa7fb5309185405ad75213363@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4b8b74717914afc4754d17e1f6ea68a5.jpg",
              _2x: "cards/3753fb880093e83dc0c41c2960558922@2x.jpg"
            },
            big: {
              _1x: "cards/3753fb880093e83dc0c41c2960558922@2x.jpg",
              _2x: "cards/big/d3f625637b295443a5e45df7242fc6c3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b33113988b9fe53adb1fe4a2319f9bed.jpg",
              _2x: "cards/423fd6a2c7a86c9862b6e5e5d4876a34@2x.jpg"
            },
            big: {
              _1x: "cards/423fd6a2c7a86c9862b6e5e5d4876a34@2x.jpg",
              _2x: "cards/big/c5e7f2b213fe8963e510185ec497c471@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8316d585110d5240023b00824d2b5fe4.jpg",
              _2x: "cards/0f84ab33c8966e77dd169d33f5896f8b@2x.jpg"
            },
            big: {
              _1x: "cards/0f84ab33c8966e77dd169d33f5896f8b@2x.jpg",
              _2x: "cards/big/757a1986c629c037f4b85d52c53127f9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 34,
      name: d("Dark Queen"),
      cls: 4,
      color: 5,
      rarity: 2,
      baseAttack: 68.75,
      baseHp: 56.25,
      tag: "player",
      images: {
        _1x: "cards/f9d66db2fd54bcf38e8eeb4c56d1844e.jpg",
        _2x: "cards/e77b5269ccfc2bf00a3ad6cf149a3e28@2x.jpg"
      },
      big: {
        _1x: "cards/e77b5269ccfc2bf00a3ad6cf149a3e28@2x.jpg",
        _2x: "cards/big/68ae9e6e479a3c994aa33e2b876955be@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/25a5df7d2b45d6e7f4307973b91049fe.png",
        _2x: "cards/icons/3ee5a34ce04d81c7408b8198d06b7ff0@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/cc6efd84d17be782db561ee1f88e13b3.jpg",
              _2x: "cards/c053bc26dbc1d036958f6c81e6a9e726@2x.jpg"
            },
            big: {
              _1x: "cards/c053bc26dbc1d036958f6c81e6a9e726@2x.jpg",
              _2x: "cards/big/583d5b3d43a6a4c29c434477ae433920@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0e8f5e07c9dfe9253791c44ee209596e.jpg",
              _2x: "cards/16edfd9978e07c46435ef635a9d2f0e1@2x.jpg"
            },
            big: {
              _1x: "cards/16edfd9978e07c46435ef635a9d2f0e1@2x.jpg",
              _2x: "cards/big/b0f3ac59b4f489b18863b97a3f8c76d4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b633ee7c6f2cf52babdd0a7f069f6bf2.jpg",
              _2x: "cards/95caa8b9e6d1bb5e7d97f9f31b21313e@2x.jpg"
            },
            big: {
              _1x: "cards/95caa8b9e6d1bb5e7d97f9f31b21313e@2x.jpg",
              _2x: "cards/big/6fb7d3bc8c979a881966da6c6ad6d347@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/00b0a1bf98d62e543827233f76a02e17.jpg",
              _2x: "cards/02077f662563e773fb9a6c7c94d06c61@2x.jpg"
            },
            big: {
              _1x: "cards/02077f662563e773fb9a6c7c94d06c61@2x.jpg",
              _2x: "cards/big/c4ee15f7812210b1ed44e82f6893d7ba@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 35,
      name: d("Waitress"),
      cls: 5,
      color: 4,
      rarity: 2,
      baseAttack: 43.75,
      baseHp: 81.25,
      tag: "player",
      images: {
        _1x: "cards/8157052ef3318faf1575d097e37c86dd.jpg",
        _2x: "cards/e909f46501fad5f4f9563cb1416226a4@2x.jpg"
      },
      big: {
        _1x: "cards/e909f46501fad5f4f9563cb1416226a4@2x.jpg",
        _2x: "cards/big/ad4e355fa8b9b71fad2e01a329bfa56e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/0fdc8cfb9146d6e73d96fc083e69b276.png",
        _2x: "cards/icons/6b2aca35c9b1f14ea977e2242a4cc9eb@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/472090fafdf6c75fb965ae60d19da8fe.jpg",
              _2x: "cards/e04f81508462dad910d63cea6263120e@2x.jpg"
            },
            big: {
              _1x: "cards/e04f81508462dad910d63cea6263120e@2x.jpg",
              _2x: "cards/big/06b25f0d51ec096136c08dfd399e9ea6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/57fa24e66299356d8e1d1d27bfa90067.jpg",
              _2x: "cards/812d980d7fd5a73581bf60493b9ff230@2x.jpg"
            },
            big: {
              _1x: "cards/812d980d7fd5a73581bf60493b9ff230@2x.jpg",
              _2x: "cards/big/6449803c0a5b432a6c5166bfa83e43cf@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e819a44ab8de0f8b582cfe6ff24d7fab.jpg",
              _2x: "cards/9c66a539ed68a96c19fab5850ad38cbd@2x.jpg"
            },
            big: {
              _1x: "cards/9c66a539ed68a96c19fab5850ad38cbd@2x.jpg",
              _2x: "cards/big/7603f316267d3cf7d44fc0f715b9a54a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5402e461ee3986ed5276558f181d4992.jpg",
              _2x: "cards/43a7d60518d92c0f2e82336a8e53f47c@2x.jpg"
            },
            big: {
              _1x: "cards/43a7d60518d92c0f2e82336a8e53f47c@2x.jpg",
              _2x: "cards/big/f039d231a197c74d4d99d90a3f95b355@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 36,
      name: d("Elemental Hunter"),
      cls: 1,
      color: 3,
      rarity: 3,
      baseAttack: 52.5,
      baseHp: 97.5,
      tag: "player",
      images: {
        _1x: "cards/eac7f39d02dfa0d0257f3ca02e478850.jpg",
        _2x: "cards/9057f0fc4f15cf8e3d8a2f9b22a16181@2x.jpg"
      },
      big: {
        _1x: "cards/9057f0fc4f15cf8e3d8a2f9b22a16181@2x.jpg",
        _2x: "cards/big/ae89b383b5a2ef51cc86c8cea43cbea8@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/554ed7e18f7513bb82367b8373ba9010.png",
        _2x: "cards/icons/efc07b78ceed702fc3ed910e1b64396e@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/d5b7513bb07c3e79c418a5343c0fe3f6.jpg",
              _2x: "cards/e0dcfcd3b1d4d883f0e559c695a58043@2x.jpg"
            },
            big: {
              _1x: "cards/e0dcfcd3b1d4d883f0e559c695a58043@2x.jpg",
              _2x: "cards/big/60aed92adb994b483e42f68d03b7ba48@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/04a090f2e0d3d3ea2390ba47a2f4d0e3.jpg",
              _2x: "cards/f3be211cc3461aff9761dff856ebe53b@2x.jpg"
            },
            big: {
              _1x: "cards/f3be211cc3461aff9761dff856ebe53b@2x.jpg",
              _2x: "cards/big/2fd8e24eb814565c3fbaca4b1384d50f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/87e63f97d0c940e79a52b64d2898da8c.jpg",
              _2x: "cards/d150df282c2bfe283cfd84c92d91b50b@2x.jpg"
            },
            big: {
              _1x: "cards/d150df282c2bfe283cfd84c92d91b50b@2x.jpg",
              _2x: "cards/big/261af2eee74da46e6d05fb41db11445a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/37b730ae67662994df64aeb9c78a1848.jpg",
              _2x: "cards/10e9e1719d341dbe9d9a62f612007986@2x.jpg"
            },
            big: {
              _1x: "cards/10e9e1719d341dbe9d9a62f612007986@2x.jpg",
              _2x: "cards/big/0243f245748cf8dc8407bbb8a157fd46@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 37,
      name: d("Savage"),
      cls: 2,
      color: 1,
      rarity: 3,
      baseAttack: 90,
      baseHp: 60,
      tag: "player",
      cset: 3,
      images: {
        _1x: "cards/1eb574bbedda3cb76ca0c392fbb3302c.jpg",
        _2x: "cards/56c1826363e0a9d88bd1d1cefba63ace@2x.jpg"
      },
      big: {
        _1x: "cards/56c1826363e0a9d88bd1d1cefba63ace@2x.jpg",
        _2x: "cards/big/9979742dcb488dce3f15c4ae428f931d@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/bd5d0ad969edde47420440f402748061.png",
        _2x: "cards/icons/ac38e02fdb97dcc8f4902db44ea9785e@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/aff3eef583d14f24914fe637b4c01f89.jpg",
              _2x: "cards/add722fe17e7afcae172fe7f40d88ab7@2x.jpg"
            },
            big: {
              _1x: "cards/add722fe17e7afcae172fe7f40d88ab7@2x.jpg",
              _2x: "cards/big/728a474666249aa13db7aab1fd7692ab@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/01a90cbe5b5c50c31d33b19842331ed4.jpg",
              _2x: "cards/d96e9733d7a4ffe7604231cf6eacbbec@2x.jpg"
            },
            big: {
              _1x: "cards/d96e9733d7a4ffe7604231cf6eacbbec@2x.jpg",
              _2x: "cards/big/0b94fab6123ff871e62d9e6d474e88de@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e31973acc6f4f9fc01874dcdeb64b453.jpg",
              _2x: "cards/7d8f1ba284ea9942ad161db7dd2bf399@2x.jpg"
            },
            big: {
              _1x: "cards/7d8f1ba284ea9942ad161db7dd2bf399@2x.jpg",
              _2x: "cards/big/3cfa6ae9df72fe003caad5d1d3c5bc3b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/41aece18cb5fdd61fe5a1a1150f97107.jpg",
              _2x: "cards/4a2a4e20d5b178816d934aa39b04b6ff@2x.jpg"
            },
            big: {
              _1x: "cards/4a2a4e20d5b178816d934aa39b04b6ff@2x.jpg",
              _2x: "cards/big/478d80fab1804ce205d33ca195fa940a@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 38,
      name: d("Elven Elder"),
      cls: 3,
      color: 2,
      rarity: 3,
      baseAttack: 97.5,
      baseHp: 52.5,
      tag: "player",
      images: {
        _1x: "cards/e11393ec12640ec4f70e47a09d133818.jpg",
        _2x: "cards/f525d69ba612230f152eb941b93d164d@2x.jpg"
      },
      big: {
        _1x: "cards/f525d69ba612230f152eb941b93d164d@2x.jpg",
        _2x: "cards/big/aeaadfb27db36ee8540b563d293c7b85@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f619481f8598860821e3e8d4e698c525.png",
        _2x: "cards/icons/6f23023443d657f485de741e54fc3c6b@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/7df7680949a3b7da3dedb0aa6494eb9f.jpg",
              _2x: "cards/cc373c305fb933d61813e94e57aac11f@2x.jpg"
            },
            big: {
              _1x: "cards/cc373c305fb933d61813e94e57aac11f@2x.jpg",
              _2x: "cards/big/51ed31d78eb8d6886d52b655ac4f406a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3d6498a10f3382591b43dd4e4af0d468.jpg",
              _2x: "cards/82e59fd8dc2a9e2eaa8f8dfa7bb72387@2x.jpg"
            },
            big: {
              _1x: "cards/82e59fd8dc2a9e2eaa8f8dfa7bb72387@2x.jpg",
              _2x: "cards/big/c57a7384bd409bf240d3573fcce86bd8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e38e71da5c3898775824c6aef4c14ddf.jpg",
              _2x: "cards/aa1ec3402ec71c3ba8e484a09b248aa0@2x.jpg"
            },
            big: {
              _1x: "cards/aa1ec3402ec71c3ba8e484a09b248aa0@2x.jpg",
              _2x: "cards/big/b61e41320d4e3259bb7b07a6389e6149@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7ee4bb7dbc9c8e54f8fe352104a1afa8.jpg",
              _2x: "cards/52c65718a407aa6cdf8f4249890b7349@2x.jpg"
            },
            big: {
              _1x: "cards/52c65718a407aa6cdf8f4249890b7349@2x.jpg",
              _2x: "cards/big/e1ca1e0b0009fd648331577343f95ecf@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 39,
      name: d("Dark Priestress"),
      cls: 4,
      color: 5,
      rarity: 3,
      baseAttack: 60,
      baseHp: 90,
      tag: "player",
      images: {
        _1x: "cards/0b43c9f1b3da34583673321e292326a6.jpg",
        _2x: "cards/b647c772b2dd02e6516d8a5c29c53547@2x.jpg"
      },
      big: {
        _1x: "cards/b647c772b2dd02e6516d8a5c29c53547@2x.jpg",
        _2x: "cards/big/f08882b1f410e6bed13629a6e67c1e47@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f027bb531d49d9730be7192b2a30654b.png",
        _2x: "cards/icons/dcf9c4a94bdbd3c395874b4a56072a85@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/3d8526e9a661faf368b462a90b8624a5.jpg",
              _2x: "cards/94433a068129cfc3aa93e8579112f003@2x.jpg"
            },
            big: {
              _1x: "cards/94433a068129cfc3aa93e8579112f003@2x.jpg",
              _2x: "cards/big/995ba9d35ed39064c2d86b3be298337b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c509d277ef353ca95e9a1a498903d1c4.jpg",
              _2x: "cards/d745cefca03d0f3e2f7cab509129a13f@2x.jpg"
            },
            big: {
              _1x: "cards/d745cefca03d0f3e2f7cab509129a13f@2x.jpg",
              _2x: "cards/big/7f8e6f406f8977d71dd36dc413bae757@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d948c8ca4d1f6ecae546066029ce09ce.jpg",
              _2x: "cards/564d02fae2c504b2e9fec5517e6b3577@2x.jpg"
            },
            big: {
              _1x: "cards/564d02fae2c504b2e9fec5517e6b3577@2x.jpg",
              _2x: "cards/big/a7e2fc9ea3f7bf9e9630118121e1dca8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f6639cb83d4d249652c0eb845f5c5c9b.jpg",
              _2x: "cards/6b05f32ff3e8fe4daa592a07d56c6987@2x.jpg"
            },
            big: {
              _1x: "cards/6b05f32ff3e8fe4daa592a07d56c6987@2x.jpg",
              _2x: "cards/big/078c8447c278a869f58e0123e7fa7fad@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 41,
      name: d("Light Angel"),
      cls: 5,
      color: 4,
      rarity: 3,
      baseAttack: 45,
      baseHp: 105,
      tag: "player",
      images: {
        _1x: "cards/bcee20597c24919ee76d0a72720665ad.jpg",
        _2x: "cards/b33be8caea93f1bdc25e6b16c41cc61c@2x.jpg"
      },
      big: {
        _1x: "cards/b33be8caea93f1bdc25e6b16c41cc61c@2x.jpg",
        _2x: "cards/big/1d8188ba4c0042601556ef98c1cb68b0@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/7bedf385c9ef8bf1c7a8489f32a079d0.png",
        _2x: "cards/icons/4a48f1d2c648bff180a68cab1ea62306@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f477837ba8851f440e9aab0b322cea5c.jpg",
              _2x: "cards/aeb25c73f220bd0ac26b868a760b1341@2x.jpg"
            },
            big: {
              _1x: "cards/aeb25c73f220bd0ac26b868a760b1341@2x.jpg",
              _2x: "cards/big/9b1a6475ad3eafd7034507dc85fb94d0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/713ab15d778856dd8c1fc7425c242d4d.jpg",
              _2x: "cards/df16dfb914de8719c0782b2c174681a8@2x.jpg"
            },
            big: {
              _1x: "cards/df16dfb914de8719c0782b2c174681a8@2x.jpg",
              _2x: "cards/big/e13fed1e92ad1add25d9ce99a8185b40@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a8c7e8434727c8614e93ff583fd77e06.jpg",
              _2x: "cards/821fc1ff314dcb125ffbbbe49674ff20@2x.jpg"
            },
            big: {
              _1x: "cards/821fc1ff314dcb125ffbbbe49674ff20@2x.jpg",
              _2x: "cards/big/9e130ae89f6152132443dfba58c9a45f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cc330fc1d44ebe10439e5eef11a55daa.jpg",
              _2x: "cards/f3d5858c1d79cebbff22e51941326411@2x.jpg"
            },
            big: {
              _1x: "cards/f3d5858c1d79cebbff22e51941326411@2x.jpg",
              _2x: "cards/big/2be67b8dfe973947a06cec5038d54aed@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 42,
      name: d("Fairy"),
      cls: 1,
      color: 3,
      rarity: 3,
      baseAttack: 75,
      baseHp: 75,
      tag: "player",
      cset: 1,
      images: {
        _1x: "cards/0e2de49a33cf6797e4d94e273445491c.jpg",
        _2x: "cards/2586b798c161a3d41cbf0cb2e16ca420@2x.jpg"
      },
      big: {
        _1x: "cards/2586b798c161a3d41cbf0cb2e16ca420@2x.jpg",
        _2x: "cards/big/e575fddb44e12a5997e04f3a47d7feaf@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/e15c7e1428fc147b1bf69d18918bf604.png",
        _2x: "cards/icons/5fb655a069671e1ec88c0125a1602ca3@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c7d6951c1fa648f22471a65ad990d1e8.jpg",
              _2x: "cards/f0a83c42e695e70de931c413df82115d@2x.jpg"
            },
            big: {
              _1x: "cards/f0a83c42e695e70de931c413df82115d@2x.jpg",
              _2x: "cards/big/9a931525d06c18acaa828e13d55387c5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bb198c0e04a1a815fa940e1df315441c.jpg",
              _2x: "cards/7173c3c11b976004954cd32591b38bab@2x.jpg"
            },
            big: {
              _1x: "cards/7173c3c11b976004954cd32591b38bab@2x.jpg",
              _2x: "cards/big/a2048c77f72350ace5f66b7b4afaca38@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7ccf50473884af3ae30b6b067280fb89.jpg",
              _2x: "cards/42483d3efec61ba6cc8e931aac194af6@2x.jpg"
            },
            big: {
              _1x: "cards/42483d3efec61ba6cc8e931aac194af6@2x.jpg",
              _2x: "cards/big/a5e40a16debcb014da6f5386e2607d59@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f507ca4a4156a6a3fd1b204fbe9fe2e4.jpg",
              _2x: "cards/b519be829e4bc91dc26f98acadd12e07@2x.jpg"
            },
            big: {
              _1x: "cards/b519be829e4bc91dc26f98acadd12e07@2x.jpg",
              _2x: "cards/big/cd7e093d453cab8d915723849e599647@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 43,
      name: d("Inquisitor"),
      cls: 2,
      color: 1,
      rarity: 3,
      baseAttack: 105,
      baseHp: 45,
      tag: "player",
      cset: 3,
      images: {
        _1x: "cards/c2636aaa719e2b79ab2e51eb84712c85.jpg",
        _2x: "cards/eaa3ad0963700cac39ec48e90f049be4@2x.jpg"
      },
      big: {
        _1x: "cards/eaa3ad0963700cac39ec48e90f049be4@2x.jpg",
        _2x: "cards/big/191deb8ae86d2e5748b0d69733e0bf81@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/9c0fda6e4259de890e3d78260d9fdd81.png",
        _2x: "cards/icons/2487aac1777e88bb0cd580a01123b2df@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/1638c5a87ee10b29200241df3208cafb.jpg",
              _2x: "cards/4960a1b3a4daf65036023be798fcc0bc@2x.jpg"
            },
            big: {
              _1x: "cards/4960a1b3a4daf65036023be798fcc0bc@2x.jpg",
              _2x: "cards/big/98c9ffcd7df26dce40b2f2a6babc5939@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/63d19bc0ba6c0202b48ab90ce0aa1767.jpg",
              _2x: "cards/dc0c2e5fcb5da0584d9089025d004c02@2x.jpg"
            },
            big: {
              _1x: "cards/dc0c2e5fcb5da0584d9089025d004c02@2x.jpg",
              _2x: "cards/big/53fb1bb5cf8f8279fade4887b1f7b5bd@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c522099ee15086f65fc1d04861a039c3.jpg",
              _2x: "cards/03e7d5b0b9a823bba23b06500264a953@2x.jpg"
            },
            big: {
              _1x: "cards/03e7d5b0b9a823bba23b06500264a953@2x.jpg",
              _2x: "cards/big/19ee6d07532e6ec7bf86c7685d9b206b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/448c4ae8f5837aca1ecd83544dd3401d.jpg",
              _2x: "cards/a4b0900da81a154a2cfd9d9c61d158e9@2x.jpg"
            },
            big: {
              _1x: "cards/a4b0900da81a154a2cfd9d9c61d158e9@2x.jpg",
              _2x: "cards/big/74655af94e435124a8dfcd43f7e68eed@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 44,
      name: d("Alchemist"),
      cls: 3,
      color: 2,
      rarity: 3,
      baseAttack: 60,
      baseHp: 90,
      tag: "player",
      images: {
        _1x: "cards/bea2737255af155ef7f2ae7e693f7fde.jpg",
        _2x: "cards/af3e3375597a0f4d1c0c6a98d32cc888@2x.jpg"
      },
      big: {
        _1x: "cards/af3e3375597a0f4d1c0c6a98d32cc888@2x.jpg",
        _2x: "cards/big/30afb719f027cf51260b162b92c40ae9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/82bac19959bd0025b4fe093e9cdd66e2.png",
        _2x: "cards/icons/68346ca7ca7619fcc2eb2a6c9cc02e00@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/b54283c8f21d0ca1751ab163d5015b44.jpg",
              _2x: "cards/c22c1c20e71eef1be396aaa09182fd9e@2x.jpg"
            },
            big: {
              _1x: "cards/c22c1c20e71eef1be396aaa09182fd9e@2x.jpg",
              _2x: "cards/big/e39aba8c85beda44622f8b4090221251@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/dbc55267aeb4bbb066dd7cae1c3f5783.jpg",
              _2x: "cards/28b0db830b2cd15b5ef139874c498024@2x.jpg"
            },
            big: {
              _1x: "cards/28b0db830b2cd15b5ef139874c498024@2x.jpg",
              _2x: "cards/big/9db28db0763ec0b5905e8e4daef6bbc1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f2b159fc30fb8c4d1a0c4b8e041beb62.jpg",
              _2x: "cards/0e1298b328eb409614c1acd4dcdd3373@2x.jpg"
            },
            big: {
              _1x: "cards/0e1298b328eb409614c1acd4dcdd3373@2x.jpg",
              _2x: "cards/big/2d7fe8e0d1c542c829aa7786ba7062c2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/24286903892f81a5ecb89c01fb57e414.jpg",
              _2x: "cards/30e658e77240a8dba54d688c7ba56697@2x.jpg"
            },
            big: {
              _1x: "cards/30e658e77240a8dba54d688c7ba56697@2x.jpg",
              _2x: "cards/big/f7a760895eef300f9860097cb8ba6089@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 45,
      name: d("Vampire"),
      cls: 4,
      color: 5,
      rarity: 3,
      baseAttack: 37.5,
      baseHp: 112.5,
      tag: "player",
      images: {
        _1x: "cards/7c48a184f52ae3c090da263d01e873d4.jpg",
        _2x: "cards/f2cd7ee8c50f72be95776437d958c25b@2x.jpg"
      },
      big: {
        _1x: "cards/f2cd7ee8c50f72be95776437d958c25b@2x.jpg",
        _2x: "cards/big/7206a267032e788146e02e364cc1c075@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/1faf045291ead98f7090dc4c2b966c4a.png",
        _2x: "cards/icons/883d09dab08f9fbf219e5cc006afd893@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/b98a1488d48f5533b1f43ca92507bca4.jpg",
              _2x: "cards/d36c0087171e8375f2de2164b32dec01@2x.jpg"
            },
            big: {
              _1x: "cards/d36c0087171e8375f2de2164b32dec01@2x.jpg",
              _2x: "cards/big/dbfaf4715afcfba634889cf366c6d571@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7069794c48ce98d960085e2343bd4511.jpg",
              _2x: "cards/e7d345862c5f23fab706870a0538ea10@2x.jpg"
            },
            big: {
              _1x: "cards/e7d345862c5f23fab706870a0538ea10@2x.jpg",
              _2x: "cards/big/e81e43b882466afe1368f78f81fb1c10@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/662d060747728a87ed14cfc22a4c080f.jpg",
              _2x: "cards/fe02a0db4e2b21ad5434786a839ac92e@2x.jpg"
            },
            big: {
              _1x: "cards/fe02a0db4e2b21ad5434786a839ac92e@2x.jpg",
              _2x: "cards/big/b9ad15dcc5fb272e5fb91017b7a4422a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e08e4b7497b525ab8b77137dde9b21d2.jpg",
              _2x: "cards/de69efc2b9debc430ea552c27a9ef5bd@2x.jpg"
            },
            big: {
              _1x: "cards/de69efc2b9debc430ea552c27a9ef5bd@2x.jpg",
              _2x: "cards/big/07700cf37bfc58d7b138e7f3c914c8a0@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 46,
      name: d("Driada"),
      cls: 5,
      color: 4,
      rarity: 3,
      baseAttack: 67.5,
      baseHp: 82.5,
      tag: "player",
      images: {
        _1x: "cards/ceb67967fe70b6a622672c101e94390c.jpg",
        _2x: "cards/31e409c24527ab27fc90d0cb73f02a17@2x.jpg"
      },
      big: {
        _1x: "cards/31e409c24527ab27fc90d0cb73f02a17@2x.jpg",
        _2x: "cards/big/1fe3483e4102c1f4e7b3321d233971ac@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/44c34f34e2f617923e187161ebab9acd.png",
        _2x: "cards/icons/6635264330ea3ede90413a93cfe35a9c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/3b1f08380c94e687ea464bd4ef83316f.jpg",
              _2x: "cards/1cb8346aed38c7f0b51c8f8efb393933@2x.jpg"
            },
            big: {
              _1x: "cards/1cb8346aed38c7f0b51c8f8efb393933@2x.jpg",
              _2x: "cards/big/3f7da21bcdd0a333b0bdecc644f841ed@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6f4e8aa793b254e73ce7c8fd6265a7a2.jpg",
              _2x: "cards/622216c12a4a4c07df2a644a66714fa0@2x.jpg"
            },
            big: {
              _1x: "cards/622216c12a4a4c07df2a644a66714fa0@2x.jpg",
              _2x: "cards/big/2bf816891eab0d944b6c01b152f11e18@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8443dba4332ea5d3b8d8a9b7d26063ff.jpg",
              _2x: "cards/38db6328fd57b5341967c2f608b9a56a@2x.jpg"
            },
            big: {
              _1x: "cards/38db6328fd57b5341967c2f608b9a56a@2x.jpg",
              _2x: "cards/big/f611807e2752add4810296ba941287df@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/27d659db9278a87a04a54f0dd0cf777a.jpg",
              _2x: "cards/46a5f711648f3092d2675ae0ce2bd05a@2x.jpg"
            },
            big: {
              _1x: "cards/46a5f711648f3092d2675ae0ce2bd05a@2x.jpg",
              _2x: "cards/big/731e59b092eb21541fc59b85090508ff@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 48,
      name: d("Red Hood"),
      cls: 1,
      color: 1,
      rarity: 4,
      baseAttack: 61.25,
      baseHp: 113.75,
      tag: "player",
      images: {
        _1x: "cards/27c880e1dd56b33d7dcb9e5429e79027.jpg",
        _2x: "cards/116d9ff7a7ef019baaa0ea86904264af@2x.jpg"
      },
      big: {
        _1x: "cards/116d9ff7a7ef019baaa0ea86904264af@2x.jpg",
        _2x: "cards/big/d5c00307ddde3791dc634daaaa0be58a@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/c31c76826aa059bf1f9d73739a46ddda.png",
        _2x: "cards/icons/4ad868334efbdfe0120c0ed54a83f6e6@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/d461e4b4f86607fd85983d92c7bc81a8.jpg",
              _2x: "cards/fc7283d1b3d656a13bf8db75a954dc81@2x.jpg"
            },
            big: {
              _1x: "cards/fc7283d1b3d656a13bf8db75a954dc81@2x.jpg",
              _2x: "cards/big/dce5a615e9ddd426cfd3b46456db8f91@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a057403c79c42c76f8332c0167d72c78.jpg",
              _2x: "cards/be7a4b82ec5a4c38201accdfdb53d43e@2x.jpg"
            },
            big: {
              _1x: "cards/be7a4b82ec5a4c38201accdfdb53d43e@2x.jpg",
              _2x: "cards/big/54508d2c1db7ad1b991f04c746f8c3a9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cfb673470553ae745c7594d7fd5fab57.jpg",
              _2x: "cards/d7822af870862e3c252c289718b845af@2x.jpg"
            },
            big: {
              _1x: "cards/d7822af870862e3c252c289718b845af@2x.jpg",
              _2x: "cards/big/c5c3a72beb9d90f247eed5611a9290ca@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bccc82ef51e6daf6882d5afd0f85bb29.jpg",
              _2x: "cards/539c4b990afa20ff2e7a97376f255478@2x.jpg"
            },
            big: {
              _1x: "cards/539c4b990afa20ff2e7a97376f255478@2x.jpg",
              _2x: "cards/big/b42888771fb95a0cb0d62ab1a6ff7183@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 49,
      name: d("Plague Doctor"),
      cls: 2,
      color: 2,
      rarity: 4,
      baseAttack: 70,
      baseHp: 105,
      tag: "player",
      cset: 2,
      images: {
        _1x: "cards/da601b70eb35052924fdb7d9a90a121a.jpg",
        _2x: "cards/bdae28a52db4a12417551547af329f21@2x.jpg"
      },
      big: {
        _1x: "cards/bdae28a52db4a12417551547af329f21@2x.jpg",
        _2x: "cards/big/b978a3548dd32b420bbd09c1a0587b45@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/a550ef3d1ca5ba6cbf98bb8fa9cff837.png",
        _2x: "cards/icons/c4f0060ef614047953ba1dac632af372@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/22aedaea31af4bcf32429e341aea4e7e.jpg",
              _2x: "cards/ccc0e3d5b075c1820866bcf1ffe5d823@2x.jpg"
            },
            big: {
              _1x: "cards/ccc0e3d5b075c1820866bcf1ffe5d823@2x.jpg",
              _2x: "cards/big/4d476b721039c5a3748f94bdeb0470b0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/da8faf749491274e96ca2330080b9623.jpg",
              _2x: "cards/cb08899c31d205aa4bbe0b6f5743736d@2x.jpg"
            },
            big: {
              _1x: "cards/cb08899c31d205aa4bbe0b6f5743736d@2x.jpg",
              _2x: "cards/big/dfd64bfaa626392c266239d709f83dbd@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/dee89495eda94a6ea1a969e5efddc0e6.jpg",
              _2x: "cards/6adafc15cea6f3c2186c99d5824a21ee@2x.jpg"
            },
            big: {
              _1x: "cards/6adafc15cea6f3c2186c99d5824a21ee@2x.jpg",
              _2x: "cards/big/a0d586ba2c7febe7bca48539b79afe0f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c3b84088c55e5385cf2cae9d55075e62.jpg",
              _2x: "cards/7cd888ef2dfb69eeb43d46dd9fcc3c47@2x.jpg"
            },
            big: {
              _1x: "cards/7cd888ef2dfb69eeb43d46dd9fcc3c47@2x.jpg",
              _2x: "cards/big/7f4bf785d5f7f37af752d4f510626d3d@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 50,
      name: d("Undead Queen"),
      cls: 3,
      color: 5,
      rarity: 4,
      baseAttack: 113.75,
      baseHp: 61.25,
      tag: "player",
      cset: 3,
      images: {
        _1x: "cards/d0baec170cb3a8e69d0000b09e9d1eee.jpg",
        _2x: "cards/6b4d85345357b219826057fd2f9c4c08@2x.jpg"
      },
      big: {
        _1x: "cards/6b4d85345357b219826057fd2f9c4c08@2x.jpg",
        _2x: "cards/big/cac9593b795f787b4dd1b12410ead93b@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/be88fe2cfebf2fff86f7b1619c5a37ed.png",
        _2x: "cards/icons/5846ba36ed6e2275987cf183748b8863@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f39db382c241ddb281c227c2b20dd0a0.jpg",
              _2x: "cards/8831a9ad14a71c436e60e43013374b1e@2x.jpg"
            },
            big: {
              _1x: "cards/8831a9ad14a71c436e60e43013374b1e@2x.jpg",
              _2x: "cards/big/e40e889632a8e6c3c2b06aca867978f4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8bba0da4e3494e22ba4eff6f6151e40e.jpg",
              _2x: "cards/bbefaaaca7ab535a28c3f96909ddb5da@2x.jpg"
            },
            big: {
              _1x: "cards/bbefaaaca7ab535a28c3f96909ddb5da@2x.jpg",
              _2x: "cards/big/70a37d792fe708f475b329eea8efe23e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/149fca6e4b7311e998c316b16f412261.jpg",
              _2x: "cards/38068ebf8bfb52a132efae9b39fff438@2x.jpg"
            },
            big: {
              _1x: "cards/38068ebf8bfb52a132efae9b39fff438@2x.jpg",
              _2x: "cards/big/686cdc924d412a9f79ceeb506933ff22@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/87dfb95ab31d3cc25a2b87a57e4b6b74.jpg",
              _2x: "cards/daf9ef2717f7a0e4ed5954edd03e45ef@2x.jpg"
            },
            big: {
              _1x: "cards/daf9ef2717f7a0e4ed5954edd03e45ef@2x.jpg",
              _2x: "cards/big/771339f03340acad5b03c8b2b6cc2f74@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 51,
      name: d("Cultist"),
      cls: 4,
      color: 4,
      rarity: 4,
      baseAttack: 105,
      baseHp: 70,
      tag: "player",
      images: {
        _1x: "cards/045c1d73837c176877880d1e6f62da6b.jpg",
        _2x: "cards/5a818a233922fff8a2964c08104d00d1@2x.jpg"
      },
      big: {
        _1x: "cards/5a818a233922fff8a2964c08104d00d1@2x.jpg",
        _2x: "cards/big/1b2c668c9c074c88f0fac9108171bfe6@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/e238b6c62c97a49a0c71d9d6e7bbc0df.png",
        _2x: "cards/icons/b63948c0917eaa0b5392b648cc092244@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c448e2df8770768b9c5c906a5523f71d.jpg",
              _2x: "cards/1de09ebaca1efe219060df3f1c242a84@2x.jpg"
            },
            big: {
              _1x: "cards/1de09ebaca1efe219060df3f1c242a84@2x.jpg",
              _2x: "cards/big/0425612332462e6051faf103ea677960@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bdc56ce975ed89d7cb45cf3a5988831f.jpg",
              _2x: "cards/4206ac74fc71ad3847d07996928b919f@2x.jpg"
            },
            big: {
              _1x: "cards/4206ac74fc71ad3847d07996928b919f@2x.jpg",
              _2x: "cards/big/3a3d4c650a31fadca32a43ca0f6c5f1f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/70310797457d1939b2ef34226e968aca.jpg",
              _2x: "cards/49748abcae29e79873d2486f1d65d380@2x.jpg"
            },
            big: {
              _1x: "cards/49748abcae29e79873d2486f1d65d380@2x.jpg",
              _2x: "cards/big/f049ff7ed3066addb0cdde0fd0fc7434@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/dbb76178c744ae8c2d449181af19ade6.jpg",
              _2x: "cards/6f61c1c54702a89d020b9ec2d565a402@2x.jpg"
            },
            big: {
              _1x: "cards/6f61c1c54702a89d020b9ec2d565a402@2x.jpg",
              _2x: "cards/big/57d28bf5e65e3f4de96c1fefb4790886@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 52,
      name: d("Amazon"),
      cls: 5,
      color: 3,
      rarity: 4,
      baseAttack: 87.5,
      baseHp: 87.5,
      tag: "player",
      cset: 1,
      images: {
        _1x: "cards/0ab9940474481275ba02d2952fbfac20.jpg",
        _2x: "cards/dab0817ea91cffe2f0c80eb2cf3d3e26@2x.jpg"
      },
      big: {
        _1x: "cards/dab0817ea91cffe2f0c80eb2cf3d3e26@2x.jpg",
        _2x: "cards/big/272a5b945bc42a9025dd695e95c87079@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/edb30087c3f0273411170750d4db7bce.png",
        _2x: "cards/icons/1953ae7590ce560083ccb1c50b5f7aa0@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/fcff24d1b234c639a86c19452ea38c12.jpg",
              _2x: "cards/312809c2cc6b2aa3b9d79ff967841dc6@2x.jpg"
            },
            big: {
              _1x: "cards/312809c2cc6b2aa3b9d79ff967841dc6@2x.jpg",
              _2x: "cards/big/2b0b7654de1770ddbbda1e9307f90a7b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/63ceb123aef7e0b07388a7a8c13afe0f.jpg",
              _2x: "cards/ee1684f15259ce71e968bd598015b50c@2x.jpg"
            },
            big: {
              _1x: "cards/ee1684f15259ce71e968bd598015b50c@2x.jpg",
              _2x: "cards/big/8a2b36fb5992f00097a8e365fbd29e93@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9f01d4d0eb918b91452d8275ab2c827e.jpg",
              _2x: "cards/8942efdd0c4ac49a7e74cb13d6a20e34@2x.jpg"
            },
            big: {
              _1x: "cards/8942efdd0c4ac49a7e74cb13d6a20e34@2x.jpg",
              _2x: "cards/big/f744fd927f03f28ebb85b88832d10c91@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/be594aadd1a3a1b7ba9d87fc38c053cc.jpg",
              _2x: "cards/7e5356acfafac1deb63fd232f5bbccde@2x.jpg"
            },
            big: {
              _1x: "cards/7e5356acfafac1deb63fd232f5bbccde@2x.jpg",
              _2x: "cards/big/fb5cddb6bbdd3bbe239352a30fe41992@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 53,
      name: d("Succub"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 9,
      baseHp: 38,
      tag: "tutor",
      images: {
        _1x: "cards/fcb085f61ed13a28332e63e0a09a92e1.jpg",
        _2x: "cards/7a8463c7ef7224ff434fe90f2f976141@2x.jpg"
      },
      big: {
        _1x: "cards/7a8463c7ef7224ff434fe90f2f976141@2x.jpg",
        _2x: "cards/big/08bf6ab0f2beb9fc6e473c2ee0f7f3d2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/5f285f6b4dc32e8a2b330fd28ce15270.png",
        _2x: "cards/icons/aa0d92ea92a5bf4b3ced4987ffed41e5@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/fd503012f0db2b3ee8e55677e97adb83.jpg",
              _2x: "cards/4fb39b1b50d0d0ec863b3e6bba371287@2x.jpg"
            },
            big: {
              _1x: "cards/4fb39b1b50d0d0ec863b3e6bba371287@2x.jpg",
              _2x: "cards/big/79e73609434e7a1de1382c785d5243a6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/03d67bfc37735b0ad905b1873d864f28.jpg",
              _2x: "cards/535aa2d1669f188b812cddb55d7b8d1a@2x.jpg"
            },
            big: {
              _1x: "cards/535aa2d1669f188b812cddb55d7b8d1a@2x.jpg",
              _2x: "cards/big/4f01c89eef7b01271ccb747a71d639e0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ec482ca9e5a5ad2c803e49320d9ed31d.jpg",
              _2x: "cards/cb2992a54d3200ed11db85c48685f670@2x.jpg"
            },
            big: {
              _1x: "cards/cb2992a54d3200ed11db85c48685f670@2x.jpg",
              _2x: "cards/big/8021df48d7e55227f2000b095b392a23@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c9753d40f4b754d904ea631c37f011f5.jpg",
              _2x: "cards/e8a55b16273c56417e042f3d5b7a5c60@2x.jpg"
            },
            big: {
              _1x: "cards/e8a55b16273c56417e042f3d5b7a5c60@2x.jpg",
              _2x: "cards/big/0dfc4e7b0508036e402737e0642ec783@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 54,
      name: d("Harpy"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 13.75,
      baseHp: 48.75,
      tag: "tutor",
      images: {
        _1x: "cards/ddd214b8b15cd4d9aea47cb07aa68726.jpg",
        _2x: "cards/36a14db93d29bab7591e7ed80833b246@2x.jpg"
      },
      big: {
        _1x: "cards/36a14db93d29bab7591e7ed80833b246@2x.jpg",
        _2x: "cards/big/1d2042464924da26ec87caf6d8aec8ea@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/26b331e006affa223583a27d8861dfa3.png",
        _2x: "cards/icons/eae6fe47e7c0dcbce70945970923c96c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e65450bba47cb68079da0bf2db993815.jpg",
              _2x: "cards/dd14fc20ef28ec990935569eb4ac2b57@2x.jpg"
            },
            big: {
              _1x: "cards/dd14fc20ef28ec990935569eb4ac2b57@2x.jpg",
              _2x: "cards/big/3b52c3200137326f044169b16cce651f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5c9e2ba7ff653c897cc9e4fe7cb15dc1.jpg",
              _2x: "cards/0a8d77c2d5170c4263db0c54c5736f44@2x.jpg"
            },
            big: {
              _1x: "cards/0a8d77c2d5170c4263db0c54c5736f44@2x.jpg",
              _2x: "cards/big/61c19a677af1eade7077037a4d48b01c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1e20fcf46b916310575a543171a6ba27.jpg",
              _2x: "cards/9fd1eb53ce92a902eadba33dcc79be6f@2x.jpg"
            },
            big: {
              _1x: "cards/9fd1eb53ce92a902eadba33dcc79be6f@2x.jpg",
              _2x: "cards/big/5560ea432e690de11052300859d3dd6e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2ce7b5900f99cf99cc4299285aa26357.jpg",
              _2x: "cards/ba37bd32bb110c8232fafe282b5ed161@2x.jpg"
            },
            big: {
              _1x: "cards/ba37bd32bb110c8232fafe282b5ed161@2x.jpg",
              _2x: "cards/big/223bd66b9be7659fd012cb00846645b9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 55,
      name: d("Thief"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 35,
      baseHp: 35,
      tag: "tutor",
      images: {
        _1x: "cards/e438d0b7f1b8c3d2267deeb35a6e1b3e.jpg",
        _2x: "cards/e27a38f422eb02b3fb30acc7ecb5c180@2x.jpg"
      },
      big: {
        _1x: "cards/e27a38f422eb02b3fb30acc7ecb5c180@2x.jpg",
        _2x: "cards/big/d9df8b247599b52fd4a190d7135b9cc3@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/16dffcffdea9048d6db13f3ca8e09fb7.png",
        _2x: "cards/icons/18102ac4687d995b2248d57f34587603@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a03bf7f56f6ebedab769d6e9fa0204bb.jpg",
              _2x: "cards/f93b799dbdd3e1bab89454f9303a0585@2x.jpg"
            },
            big: {
              _1x: "cards/f93b799dbdd3e1bab89454f9303a0585@2x.jpg",
              _2x: "cards/big/91e5ef6bc5550e0099c1ca66ab3c968b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cbebbf99baa2432531e830f0125992a3.jpg",
              _2x: "cards/8234b1057cf20a5d63c8eb58f68e56f4@2x.jpg"
            },
            big: {
              _1x: "cards/8234b1057cf20a5d63c8eb58f68e56f4@2x.jpg",
              _2x: "cards/big/08a2bc3ae61a863d4e07901be34054a9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e0ea6ee4b17052162d5dbd5e5d2ede41.jpg",
              _2x: "cards/33b49d0764f7d6f6d035c354cb6460a2@2x.jpg"
            },
            big: {
              _1x: "cards/33b49d0764f7d6f6d035c354cb6460a2@2x.jpg",
              _2x: "cards/big/d2dc07ab349d165d58e036edae45d0be@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/14038c7381e43fa4a28eda0bd645e000.jpg",
              _2x: "cards/a897fdbfea2ca822cd45c7dd5809c0a8@2x.jpg"
            },
            big: {
              _1x: "cards/a897fdbfea2ca822cd45c7dd5809c0a8@2x.jpg",
              _2x: "cards/big/d6f5417c3a5beefc4d074b142d5b4dd5@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 56,
      name: d("Fire Elemental"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 42,
      baseHp: 35,
      tag: "tutor",
      images: {
        _1x: "cards/4a9ed71de9d916052f3805f517c64516.jpg",
        _2x: "cards/555fbaf882ab69ed3d5fdcb23ce258cc@2x.jpg"
      },
      big: {
        _1x: "cards/555fbaf882ab69ed3d5fdcb23ce258cc@2x.jpg",
        _2x: "cards/big/932ee789ae8662224c991e2cd322efdd@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/20ae37c9ddf87a0fe458d2b1b6774b5c.png",
        _2x: "cards/icons/f189db30c599bb46728cf4f4b147a573@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/99073f91d77157d1186c56be09b53499.jpg",
              _2x: "cards/e5a4c3281c82093767a8835c7792d28a@2x.jpg"
            },
            big: {
              _1x: "cards/e5a4c3281c82093767a8835c7792d28a@2x.jpg",
              _2x: "cards/big/33651ce2b1377325657a05176814766c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/106363e10dc39ed426b5e56b62fd4754.jpg",
              _2x: "cards/bd79b345ef774ab7f7f20c02d98b6096@2x.jpg"
            },
            big: {
              _1x: "cards/bd79b345ef774ab7f7f20c02d98b6096@2x.jpg",
              _2x: "cards/big/2792e291f311718f5c3d42897a8501f9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a679364f3f9344af32faf49c09f0fa95.jpg",
              _2x: "cards/39dee029ec73cecf7dafb47eb6e8fd72@2x.jpg"
            },
            big: {
              _1x: "cards/39dee029ec73cecf7dafb47eb6e8fd72@2x.jpg",
              _2x: "cards/big/27edcce1b6413c4a65b42ddb6250a436@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/23fb2ff07129bdc1886fbe0a182885e6.jpg",
              _2x: "cards/19785f401a542555a00d323d6d9b61d6@2x.jpg"
            },
            big: {
              _1x: "cards/19785f401a542555a00d323d6d9b61d6@2x.jpg",
              _2x: "cards/big/dd3e90e123eef66f0449f7151df92edd@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 57,
      name: d("Gatekeeper"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 30,
      baseHp: 40,
      tag: "tutor",
      images: {
        _1x: "cards/ef395bc981ff282438f289148c203c60.jpg",
        _2x: "cards/a47d87d6fd57cba24991224e87512a71@2x.jpg"
      },
      big: {
        _1x: "cards/a47d87d6fd57cba24991224e87512a71@2x.jpg",
        _2x: "cards/big/c7414a5959b09aa0abd8b17ec2b77ab9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/fa1c590365f1148f13da3897c839f3f0.png",
        _2x: "cards/icons/70fc0d6d510782767dd780548a226380@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/451f4a2411227c4ccff4d8a4acdf4dd9.jpg",
              _2x: "cards/44b2ae4746d5bdd94cab49d146f4b75f@2x.jpg"
            },
            big: {
              _1x: "cards/44b2ae4746d5bdd94cab49d146f4b75f@2x.jpg",
              _2x: "cards/big/dac2c8a061b12c1c4e14ae2c51e5e257@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/24149705538aba8de6395e3cb7056d4b.jpg",
              _2x: "cards/fe46447409e9234d9eaf11add0e8cd0b@2x.jpg"
            },
            big: {
              _1x: "cards/fe46447409e9234d9eaf11add0e8cd0b@2x.jpg",
              _2x: "cards/big/4acd8479dd493d0f72c1fd7318167daa@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/60f1115486ced3d9b96aad07dc033393.jpg",
              _2x: "cards/cfceb9ea3432bc9eb0ad75900b955626@2x.jpg"
            },
            big: {
              _1x: "cards/cfceb9ea3432bc9eb0ad75900b955626@2x.jpg",
              _2x: "cards/big/3f1f80e03fd9e332054db3e461606e93@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/185bf059465383cdc4ae6f811fd66044.jpg",
              _2x: "cards/26e7191faeb87c392dbe91f15ff466ec@2x.jpg"
            },
            big: {
              _1x: "cards/26e7191faeb87c392dbe91f15ff466ec@2x.jpg",
              _2x: "cards/big/6f9a5f994026a4ceaf82c2d42cd78c55@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 58,
      name: d("Gipsy"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 30,
      baseHp: 70,
      tag: "tutor",
      images: {
        _1x: "cards/fa2a79093ff29907a1078878f3eba56b.jpg",
        _2x: "cards/26cf91a3d79ff206bae470470f1e197e@2x.jpg"
      },
      big: {
        _1x: "cards/26cf91a3d79ff206bae470470f1e197e@2x.jpg",
        _2x: "cards/big/211899787f2dc79a49dba89419ab3c49@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/4097df2805eb8193321682b49efa6100.png",
        _2x: "cards/icons/c269e03b0a718d95ac0c7744217c28c9@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/8f60c9222d2bed4f9cbcb50c7a5cd00e.jpg",
              _2x: "cards/59e46fe685e3373967413f8646441232@2x.jpg"
            },
            big: {
              _1x: "cards/59e46fe685e3373967413f8646441232@2x.jpg",
              _2x: "cards/big/fe3fe893bc5206d90278d071de4b5d7e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/82b6d7dba6f782c07a8f517814ae1cd8.jpg",
              _2x: "cards/156e270945bcc017d716ff72d1edeeef@2x.jpg"
            },
            big: {
              _1x: "cards/156e270945bcc017d716ff72d1edeeef@2x.jpg",
              _2x: "cards/big/b9cf3c280accb286669c88abb1011921@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0f6563f152881770f5d6082b9ece201e.jpg",
              _2x: "cards/e7e3cf8f3b098c60fbe56cf11c7ee8f3@2x.jpg"
            },
            big: {
              _1x: "cards/e7e3cf8f3b098c60fbe56cf11c7ee8f3@2x.jpg",
              _2x: "cards/big/83b72b10b1d1cb79197612d5f13f21a5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/34aa0da1802c6d73203c39f5da6058cf.jpg",
              _2x: "cards/cea96072cae7b88d8caaceffdaeab18a@2x.jpg"
            },
            big: {
              _1x: "cards/cea96072cae7b88d8caaceffdaeab18a@2x.jpg",
              _2x: "cards/big/515c8634c29542beb0ec90fd4c1269c9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 59,
      name: d("Witch"),
      cls: 4,
      color: 5,
      rarity: 2,
      baseAttack: 43.75,
      baseHp: 68.75,
      tag: "tutor",
      images: {
        _1x: "cards/7687cd1559f8a3b2c393a7a8cc155a96.jpg",
        _2x: "cards/84102c638eb2f50ebe3cb565a255d2c6@2x.jpg"
      },
      big: {
        _1x: "cards/84102c638eb2f50ebe3cb565a255d2c6@2x.jpg",
        _2x: "cards/big/64d8d511d8c7d9e7c2530a14350a0cae@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/186c7bc6b90792979a8e98558d64e481.png",
        _2x: "cards/icons/223e8ab6715289356b51752558914b1a@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/995fd202f85aa87f37a87d0bdcf0044c.jpg",
              _2x: "cards/538b9c0e5a178b6bd4df28f58f9265a7@2x.jpg"
            },
            big: {
              _1x: "cards/538b9c0e5a178b6bd4df28f58f9265a7@2x.jpg",
              _2x: "cards/big/a9520555521449bc20fba34fa3d90992@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/01435fae16f65065862c2de1cb0c861d.jpg",
              _2x: "cards/a4d61f0efbe417f34bc3d3c6fce6c29e@2x.jpg"
            },
            big: {
              _1x: "cards/a4d61f0efbe417f34bc3d3c6fce6c29e@2x.jpg",
              _2x: "cards/big/4b43d2bb4f36311eb3896e4a6a8d5068@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f2e78f6d77898b3a9cd800b890522f1c.jpg",
              _2x: "cards/d1fe2022e59a20df4a031597d69bbfd7@2x.jpg"
            },
            big: {
              _1x: "cards/d1fe2022e59a20df4a031597d69bbfd7@2x.jpg",
              _2x: "cards/big/0184c14c334e23a9f33493a43254db86@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/571c7828d14d0c179c21327a56663d30.jpg",
              _2x: "cards/c5645ec606c8544f888d0e99a68e3538@2x.jpg"
            },
            big: {
              _1x: "cards/c5645ec606c8544f888d0e99a68e3538@2x.jpg",
              _2x: "cards/big/3a7fd3b6e47dd81adfff2e1b9fc9d8e2@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 60,
      name: d("Sentinel"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 56.25,
      baseHp: 37.5,
      tag: "tutor",
      images: {
        _1x: "cards/33c05f82ec132b8911ffa6a0d557fb00.jpg",
        _2x: "cards/934a08e15bc0a616b76445907a90e0a4@2x.jpg"
      },
      big: {
        _1x: "cards/934a08e15bc0a616b76445907a90e0a4@2x.jpg",
        _2x: "cards/big/c70474764fa5c08d4cf4c7aa050ff9e2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/b1875304f322585cd74ff29c886a398a.png",
        _2x: "cards/icons/db2aec598ea7e07b6093ff6beee376ee@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a02c0159d394eb236dd407ddae750ee3.jpg",
              _2x: "cards/1a392d39a785b370cedde806a7f7e591@2x.jpg"
            },
            big: {
              _1x: "cards/1a392d39a785b370cedde806a7f7e591@2x.jpg",
              _2x: "cards/big/6593c9d0039a3795ed817147f3a3094e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a787e82ae278814fed5ea0e026941764.jpg",
              _2x: "cards/8a8c8283f5ee5bfe8b8abcd0e2795c12@2x.jpg"
            },
            big: {
              _1x: "cards/8a8c8283f5ee5bfe8b8abcd0e2795c12@2x.jpg",
              _2x: "cards/big/7308006a8d2adbcfefa21674c663d0a3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/176a6e8d0735a363f05e60d5a66c9999.jpg",
              _2x: "cards/c90cb3ff53c21a08a4ed6590b93de957@2x.jpg"
            },
            big: {
              _1x: "cards/c90cb3ff53c21a08a4ed6590b93de957@2x.jpg",
              _2x: "cards/big/033344b3b21fd09655ba81df4dfa3ce9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d79f5bd58ad60cd5c2e0db08c43544a8.jpg",
              _2x: "cards/def11ab292e4d882e285988b286bc66f@2x.jpg"
            },
            big: {
              _1x: "cards/def11ab292e4d882e285988b286bc66f@2x.jpg",
              _2x: "cards/big/0401f6eb7dcd275dca121b34569e7d96@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 61,
      name: d("Water Elemental"),
      cls: 1,
      color: 3,
      rarity: 1,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      images: {
        _1x: "cards/ff8960b83559be5a6e12286e690049c4.jpg",
        _2x: "cards/aa5291e56bdf0abe94f5355c4968da03@2x.jpg"
      },
      big: {
        _1x: "cards/aa5291e56bdf0abe94f5355c4968da03@2x.jpg",
        _2x: "cards/big/72846be8c74aeec27031022dd0a9aad2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/2d294fe6e78dc11aecb94153c8f7a256.png",
        _2x: "cards/icons/260fd232a525e4bf7f4c9f842f7a72ca@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/885ca2cdb1ab0b2f9d0c8b6f99a7f954.jpg",
              _2x: "cards/c15d0be79a090aabc36b39ffe1d1e836@2x.jpg"
            },
            big: {
              _1x: "cards/c15d0be79a090aabc36b39ffe1d1e836@2x.jpg",
              _2x: "cards/big/e772be919a174c150e535e1a238fc5bc@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9605039be81ea69e33bb093d5e198a0d.jpg",
              _2x: "cards/059b4866cd2ae35dbf74c2acbe120d2c@2x.jpg"
            },
            big: {
              _1x: "cards/059b4866cd2ae35dbf74c2acbe120d2c@2x.jpg",
              _2x: "cards/big/62a17b1273775b5e4e82684f6e7a05e8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6f0956874505d16cfe74ef2892da26e5.jpg",
              _2x: "cards/5ce902eaacab7992180796c9199fae7c@2x.jpg"
            },
            big: {
              _1x: "cards/5ce902eaacab7992180796c9199fae7c@2x.jpg",
              _2x: "cards/big/9d8ed928e1d2d3769d1028350023059c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3ccbcc6dfa279502123a987261ec4401.jpg",
              _2x: "cards/dc974be16a915aae01a3e52e0279cf85@2x.jpg"
            },
            big: {
              _1x: "cards/dc974be16a915aae01a3e52e0279cf85@2x.jpg",
              _2x: "cards/big/d363dbdb6b111884626971051248ae8c@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 62,
      name: d("Fire Elemental"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 22.5,
      baseHp: 27.5,
      tag: "bot",
      images: {
        _1x: "cards/4a9ed71de9d916052f3805f517c64516.jpg",
        _2x: "cards/555fbaf882ab69ed3d5fdcb23ce258cc@2x.jpg"
      },
      big: {
        _1x: "cards/555fbaf882ab69ed3d5fdcb23ce258cc@2x.jpg",
        _2x: "cards/big/932ee789ae8662224c991e2cd322efdd@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/20ae37c9ddf87a0fe458d2b1b6774b5c.png",
        _2x: "cards/icons/f189db30c599bb46728cf4f4b147a573@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/99073f91d77157d1186c56be09b53499.jpg",
              _2x: "cards/e5a4c3281c82093767a8835c7792d28a@2x.jpg"
            },
            big: {
              _1x: "cards/e5a4c3281c82093767a8835c7792d28a@2x.jpg",
              _2x: "cards/big/33651ce2b1377325657a05176814766c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/106363e10dc39ed426b5e56b62fd4754.jpg",
              _2x: "cards/bd79b345ef774ab7f7f20c02d98b6096@2x.jpg"
            },
            big: {
              _1x: "cards/bd79b345ef774ab7f7f20c02d98b6096@2x.jpg",
              _2x: "cards/big/2792e291f311718f5c3d42897a8501f9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a679364f3f9344af32faf49c09f0fa95.jpg",
              _2x: "cards/39dee029ec73cecf7dafb47eb6e8fd72@2x.jpg"
            },
            big: {
              _1x: "cards/39dee029ec73cecf7dafb47eb6e8fd72@2x.jpg",
              _2x: "cards/big/27edcce1b6413c4a65b42ddb6250a436@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/23fb2ff07129bdc1886fbe0a182885e6.jpg",
              _2x: "cards/19785f401a542555a00d323d6d9b61d6@2x.jpg"
            },
            big: {
              _1x: "cards/19785f401a542555a00d323d6d9b61d6@2x.jpg",
              _2x: "cards/big/dd3e90e123eef66f0449f7151df92edd@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 63,
      name: d("Thief"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 25,
      baseHp: 25,
      tag: "bot",
      images: {
        _1x: "cards/e438d0b7f1b8c3d2267deeb35a6e1b3e.jpg",
        _2x: "cards/e27a38f422eb02b3fb30acc7ecb5c180@2x.jpg"
      },
      big: {
        _1x: "cards/e27a38f422eb02b3fb30acc7ecb5c180@2x.jpg",
        _2x: "cards/big/d9df8b247599b52fd4a190d7135b9cc3@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/16dffcffdea9048d6db13f3ca8e09fb7.png",
        _2x: "cards/icons/18102ac4687d995b2248d57f34587603@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a03bf7f56f6ebedab769d6e9fa0204bb.jpg",
              _2x: "cards/f93b799dbdd3e1bab89454f9303a0585@2x.jpg"
            },
            big: {
              _1x: "cards/f93b799dbdd3e1bab89454f9303a0585@2x.jpg",
              _2x: "cards/big/91e5ef6bc5550e0099c1ca66ab3c968b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cbebbf99baa2432531e830f0125992a3.jpg",
              _2x: "cards/8234b1057cf20a5d63c8eb58f68e56f4@2x.jpg"
            },
            big: {
              _1x: "cards/8234b1057cf20a5d63c8eb58f68e56f4@2x.jpg",
              _2x: "cards/big/08a2bc3ae61a863d4e07901be34054a9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e0ea6ee4b17052162d5dbd5e5d2ede41.jpg",
              _2x: "cards/33b49d0764f7d6f6d035c354cb6460a2@2x.jpg"
            },
            big: {
              _1x: "cards/33b49d0764f7d6f6d035c354cb6460a2@2x.jpg",
              _2x: "cards/big/d2dc07ab349d165d58e036edae45d0be@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/14038c7381e43fa4a28eda0bd645e000.jpg",
              _2x: "cards/a897fdbfea2ca822cd45c7dd5809c0a8@2x.jpg"
            },
            big: {
              _1x: "cards/a897fdbfea2ca822cd45c7dd5809c0a8@2x.jpg",
              _2x: "cards/big/d6f5417c3a5beefc4d074b142d5b4dd5@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 64,
      name: d("Alice"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 25,
      baseHp: 25,
      tag: "bot",
      images: {
        _1x: "cards/caf536cdfc19084ba8b3a4bf47ae286d.jpg",
        _2x: "cards/b3ecacab97b26045f7f1faa7a0fdd00c@2x.jpg"
      },
      big: {
        _1x: "cards/b3ecacab97b26045f7f1faa7a0fdd00c@2x.jpg",
        _2x: "cards/big/a502de84d6ec643949ab9db13393ba62@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/ec35ff0a12c1c21ba65dcdbcba8378cc.png",
        _2x: "cards/icons/d2c4f329adfcb8994d954c039b4c6853@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/bdda6d28bf0fe7229230992156f46d01.jpg",
              _2x: "cards/988e4fc582ecbc3b675cdba0d8e8aea7@2x.jpg"
            },
            big: {
              _1x: "cards/988e4fc582ecbc3b675cdba0d8e8aea7@2x.jpg",
              _2x: "cards/big/1dec6b50d8f547278e5fba689c2aefc8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/23602ceac33c5e8ec309cdebfed9e04f.jpg",
              _2x: "cards/49afde03954c5098361bbceceb298890@2x.jpg"
            },
            big: {
              _1x: "cards/49afde03954c5098361bbceceb298890@2x.jpg",
              _2x: "cards/big/a977fe29235fa113320e8b38bb50bc50@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/eb44f061375eb2c01093783483cada66.jpg",
              _2x: "cards/585d41056ed1d7cd72be21c021a6366a@2x.jpg"
            },
            big: {
              _1x: "cards/585d41056ed1d7cd72be21c021a6366a@2x.jpg",
              _2x: "cards/big/279061a6cb2aef2a2e7accbcc6fc159d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/846eabada5f50cd109eb93e99755c13e.jpg",
              _2x: "cards/b51d51588180948ed8c7f38029003a48@2x.jpg"
            },
            big: {
              _1x: "cards/b51d51588180948ed8c7f38029003a48@2x.jpg",
              _2x: "cards/big/3ca0e518d42c2a7e27d537dda7c04a93@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 65,
      name: d("Gatekeeper"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 25,
      baseHp: 25,
      tag: "bot",
      images: {
        _1x: "cards/ef395bc981ff282438f289148c203c60.jpg",
        _2x: "cards/a47d87d6fd57cba24991224e87512a71@2x.jpg"
      },
      big: {
        _1x: "cards/a47d87d6fd57cba24991224e87512a71@2x.jpg",
        _2x: "cards/big/c7414a5959b09aa0abd8b17ec2b77ab9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/fa1c590365f1148f13da3897c839f3f0.png",
        _2x: "cards/icons/70fc0d6d510782767dd780548a226380@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/451f4a2411227c4ccff4d8a4acdf4dd9.jpg",
              _2x: "cards/44b2ae4746d5bdd94cab49d146f4b75f@2x.jpg"
            },
            big: {
              _1x: "cards/44b2ae4746d5bdd94cab49d146f4b75f@2x.jpg",
              _2x: "cards/big/dac2c8a061b12c1c4e14ae2c51e5e257@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/24149705538aba8de6395e3cb7056d4b.jpg",
              _2x: "cards/fe46447409e9234d9eaf11add0e8cd0b@2x.jpg"
            },
            big: {
              _1x: "cards/fe46447409e9234d9eaf11add0e8cd0b@2x.jpg",
              _2x: "cards/big/4acd8479dd493d0f72c1fd7318167daa@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/60f1115486ced3d9b96aad07dc033393.jpg",
              _2x: "cards/cfceb9ea3432bc9eb0ad75900b955626@2x.jpg"
            },
            big: {
              _1x: "cards/cfceb9ea3432bc9eb0ad75900b955626@2x.jpg",
              _2x: "cards/big/3f1f80e03fd9e332054db3e461606e93@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/185bf059465383cdc4ae6f811fd66044.jpg",
              _2x: "cards/26e7191faeb87c392dbe91f15ff466ec@2x.jpg"
            },
            big: {
              _1x: "cards/26e7191faeb87c392dbe91f15ff466ec@2x.jpg",
              _2x: "cards/big/6f9a5f994026a4ceaf82c2d42cd78c55@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 66,
      name: d("Mermaid"),
      cls: 1,
      color: 3,
      rarity: 1,
      baseAttack: 17.5,
      baseHp: 32.5,
      tag: "bot",
      images: {
        _1x: "cards/aa0e4c74e47e1dbf57767c6faf0ce3b3.jpg",
        _2x: "cards/c282c0fc56f41e888e2263612ea2cb3d@2x.jpg"
      },
      big: {
        _1x: "cards/c282c0fc56f41e888e2263612ea2cb3d@2x.jpg",
        _2x: "cards/big/78e7578448ebcadccef9ec5164276a0e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/693b8718141d6658245ef71857052075.png",
        _2x: "cards/icons/38c7c5a51d5708b0c4de783cef0fe236@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/bf34e11fa0853d04ee91ea37e5c4e093.jpg",
              _2x: "cards/9ce3bd724b7b7ae7c7497f57955d93dc@2x.jpg"
            },
            big: {
              _1x: "cards/9ce3bd724b7b7ae7c7497f57955d93dc@2x.jpg",
              _2x: "cards/big/b96487be6915b54270524a9926daf5a3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5438bdce0eb3e3a5c9d7f4882fe29ee6.jpg",
              _2x: "cards/169a7a25ffa37ce1ab8fec307e7ac7ac@2x.jpg"
            },
            big: {
              _1x: "cards/169a7a25ffa37ce1ab8fec307e7ac7ac@2x.jpg",
              _2x: "cards/big/c77f6bf6974330df8d59544dfdc1b15f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7e876216f71cfbe1d5cff701965ccdb2.jpg",
              _2x: "cards/2012b2d590b489f6e34b9635415ab851@2x.jpg"
            },
            big: {
              _1x: "cards/2012b2d590b489f6e34b9635415ab851@2x.jpg",
              _2x: "cards/big/6e54c2abc2b1d5233e70be8008f5da09@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1d2086d7dd604356aea9dd6b620d24c9.jpg",
              _2x: "cards/01c4fa060951aeeb8f873499ed414c41@2x.jpg"
            },
            big: {
              _1x: "cards/01c4fa060951aeeb8f873499ed414c41@2x.jpg",
              _2x: "cards/big/e2a763aeba093bdf7bb45cd4babf9e69@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 67,
      name: d("Tamer"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      images: {
        _1x: "cards/3ca3b3759274b0f34070ffdf7dc5a74d.jpg",
        _2x: "cards/4a04c5b31df3c0ba513099a43e2d434a@2x.jpg"
      },
      big: {
        _1x: "cards/4a04c5b31df3c0ba513099a43e2d434a@2x.jpg",
        _2x: "cards/big/842279aaaec242dfc1797c2497cdbdd6@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/4650708a33c59434502f1b35dd7bc5e3.png",
        _2x: "cards/icons/3c1a324f5c80a2db802699c773369cbd@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/5c8b880e4e5c4ae7a6eef8fa9411f9ff.jpg",
              _2x: "cards/0c297d7e6dcae4476e7123e7bba4ae3a@2x.jpg"
            },
            big: {
              _1x: "cards/0c297d7e6dcae4476e7123e7bba4ae3a@2x.jpg",
              _2x: "cards/big/153c1d606e055ad9f2bac12ac4cc02c4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1dd1dc7113a1b761efba1c2927e06ce0.jpg",
              _2x: "cards/2c351122d92d213e31ef9fc3a7e42141@2x.jpg"
            },
            big: {
              _1x: "cards/2c351122d92d213e31ef9fc3a7e42141@2x.jpg",
              _2x: "cards/big/3ca54177e2d9e6f85789c749e12ebe43@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/959bc8020e542585dcbeb765f1e654d2.jpg",
              _2x: "cards/146335b8c0ff3afb4ff018ff3cd8ac9c@2x.jpg"
            },
            big: {
              _1x: "cards/146335b8c0ff3afb4ff018ff3cd8ac9c@2x.jpg",
              _2x: "cards/big/511a58df5fb4ff7887c1eaf63feed2a8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/adbb2acd71690181efe6a87e14dd9b96.jpg",
              _2x: "cards/8bce6b70b19640049f9cfa2bad3262be@2x.jpg"
            },
            big: {
              _1x: "cards/8bce6b70b19640049f9cfa2bad3262be@2x.jpg",
              _2x: "cards/big/6c130338f5cf26cacb6677b2881baa42@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 68,
      name: d("Snowhite"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 12.5,
      baseHp: 37.5,
      tag: "bot",
      images: {
        _1x: "cards/ea126218bbacca111d45f8798ee7a834.jpg",
        _2x: "cards/dc6a3b47de85a0e97352458bd0b875e4@2x.jpg"
      },
      big: {
        _1x: "cards/dc6a3b47de85a0e97352458bd0b875e4@2x.jpg",
        _2x: "cards/big/8e11f4f1a0f91abc69c3347d74d8d5b4@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f445395911b18172d49729945f1b0bab.png",
        _2x: "cards/icons/c7662261e6fbd3f7f24c45810ead3183@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e597139dbcced0f7299fbd4ea0d15ef7.jpg",
              _2x: "cards/5418dd777eca57d334436d1d5a6698b9@2x.jpg"
            },
            big: {
              _1x: "cards/5418dd777eca57d334436d1d5a6698b9@2x.jpg",
              _2x: "cards/big/07ca7bc68ae74242b2864bbe8f6e9875@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/be38f5546d071ec02d700f224eaf830c.jpg",
              _2x: "cards/7faa4348285a3e5050f9dc3fc555834e@2x.jpg"
            },
            big: {
              _1x: "cards/7faa4348285a3e5050f9dc3fc555834e@2x.jpg",
              _2x: "cards/big/a40a4552bb5d7a1f5bc378936c21ab2a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/12292ef281ceedc3e95c4350745941b8.jpg",
              _2x: "cards/852af6dcc613282793db171fc06727cc@2x.jpg"
            },
            big: {
              _1x: "cards/852af6dcc613282793db171fc06727cc@2x.jpg",
              _2x: "cards/big/f3a701323045e000f05260da1a0239b9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/296ac2c803f9c542d47a5f1af70d5935.jpg",
              _2x: "cards/d10648f490026b29d8f01a289781925e@2x.jpg"
            },
            big: {
              _1x: "cards/d10648f490026b29d8f01a289781925e@2x.jpg",
              _2x: "cards/big/227b74ca7e15ec24da8500b02b9ec129@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 69,
      name: d("Ataman"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 32.5,
      baseHp: 17.5,
      tag: "bot",
      images: {
        _1x: "cards/9f97eb7700d8fddcaa07759f8e9325db.jpg",
        _2x: "cards/4de5d61e4046b97319bd26bd43722b1d@2x.jpg"
      },
      big: {
        _1x: "cards/4de5d61e4046b97319bd26bd43722b1d@2x.jpg",
        _2x: "cards/big/84ecc9caf45efb5ee55fc4b4bed8dc8e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/42685ca0533d12bdf2d15ac5bd668cef.png",
        _2x: "cards/icons/ec5d65cfd4e483283a6aa9c98ab31b01@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/7ce78397db5801d591a9ca92219ed21e.jpg",
              _2x: "cards/19951d61916d90eee74bdda97e449696@2x.jpg"
            },
            big: {
              _1x: "cards/19951d61916d90eee74bdda97e449696@2x.jpg",
              _2x: "cards/big/eae6fb0d63d3bc90f8c22c71c2ff1007@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3deef93657899b410ca1aeceec2a6c62.jpg",
              _2x: "cards/037d0f451650fd4a4a6ad8764146ed71@2x.jpg"
            },
            big: {
              _1x: "cards/037d0f451650fd4a4a6ad8764146ed71@2x.jpg",
              _2x: "cards/big/3309ce47f83d29ff41874577c6bfaa11@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1fe1c7585742855fac9c9c114c0bc25b.jpg",
              _2x: "cards/08d7b120fa54692355819441106b9291@2x.jpg"
            },
            big: {
              _1x: "cards/08d7b120fa54692355819441106b9291@2x.jpg",
              _2x: "cards/big/4b56950468a87b89ee4e9a61582ecb6f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b1b260af45f1e558b6523a8b09d166c0.jpg",
              _2x: "cards/36ac0740050c628497fc28ae3074639b@2x.jpg"
            },
            big: {
              _1x: "cards/36ac0740050c628497fc28ae3074639b@2x.jpg",
              _2x: "cards/big/6d2e13ae84e3c2cdc30fd83db6eb91cf@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 70,
      name: d("Avenger"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 15,
      baseHp: 35,
      tag: "bot",
      images: {
        _1x: "cards/98c8e4ae0b4083a3a96057102332d3f5.jpg",
        _2x: "cards/269eb7bd70aeb762410a65dd515aafc3@2x.jpg"
      },
      big: {
        _1x: "cards/269eb7bd70aeb762410a65dd515aafc3@2x.jpg",
        _2x: "cards/big/6ce30352a816d3132b3abfec1f9feb17@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/3cae19af1e488bd80dd044434592599e.png",
        _2x: "cards/icons/d516cebe2cfbf7edf856cd096c222e5b@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/4cac194fbbc9d58052d0706a3dcfd8c6.jpg",
              _2x: "cards/a63747f582476c4b0ef71cf1bfa50150@2x.jpg"
            },
            big: {
              _1x: "cards/a63747f582476c4b0ef71cf1bfa50150@2x.jpg",
              _2x: "cards/big/72cb5810067d898e67801ade6da6a740@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/42d5d15ad6c7fde2363d306fdbff5bde.jpg",
              _2x: "cards/bab936b9818d335aed88d783ad42b27e@2x.jpg"
            },
            big: {
              _1x: "cards/bab936b9818d335aed88d783ad42b27e@2x.jpg",
              _2x: "cards/big/fa3ff616c7fa54e4749385a97ce82a9d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5688df2cf6ddd58d5b3478dcf55a2f46.jpg",
              _2x: "cards/0ae6d3753e35f4f7be61451cf7a9f65e@2x.jpg"
            },
            big: {
              _1x: "cards/0ae6d3753e35f4f7be61451cf7a9f65e@2x.jpg",
              _2x: "cards/big/a93f7c37d922b730175dd84404dd6c17@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e83dcd52f4cb746b24fadcefde2941d1.jpg",
              _2x: "cards/2adddc4b1cdda51262caef40a6bedd7f@2x.jpg"
            },
            big: {
              _1x: "cards/2adddc4b1cdda51262caef40a6bedd7f@2x.jpg",
              _2x: "cards/big/a22c58535d9be2ac6ef4b7676ebcca79@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 71,
      name: d("Undine"),
      cls: 1,
      color: 3,
      rarity: 1,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      images: {
        _1x: "cards/3e2b3b76a0de30e561b48eb4862a8486.jpg",
        _2x: "cards/f1f751852bc34223b1835633b23fdbea@2x.jpg"
      },
      big: {
        _1x: "cards/f1f751852bc34223b1835633b23fdbea@2x.jpg",
        _2x: "cards/big/3df70dc81ae6d63b310abba34c1fb8ac@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/d3e8c5fab7ceddcbe270672ccfb4d76c.png",
        _2x: "cards/icons/27caa74caf4de89125493ee875f8e835@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/1fd12b667a6d11a3bf682449572f579a.jpg",
              _2x: "cards/bb9b57200bcf225131ef4e36133c45ad@2x.jpg"
            },
            big: {
              _1x: "cards/bb9b57200bcf225131ef4e36133c45ad@2x.jpg",
              _2x: "cards/big/25d47b6f63138f8b8f709b7bd1640dab@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f7d038232012946e4ed146537b4b7b80.jpg",
              _2x: "cards/9256abfae611d49367f87ed1e34a6316@2x.jpg"
            },
            big: {
              _1x: "cards/9256abfae611d49367f87ed1e34a6316@2x.jpg",
              _2x: "cards/big/14e18873845c92bd259b50e8b0326835@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b9f9dc5eb4588d389f69aa16c30db698.jpg",
              _2x: "cards/bb9f110c84dbaa05b03cbebf3a043649@2x.jpg"
            },
            big: {
              _1x: "cards/bb9f110c84dbaa05b03cbebf3a043649@2x.jpg",
              _2x: "cards/big/23968e7523d91dc4eeeb9c43794332a5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bac2aeb90260e0c846ee0b96859467c4.jpg",
              _2x: "cards/4136bc1c2842f6e5912e0dccaf3c921f@2x.jpg"
            },
            big: {
              _1x: "cards/4136bc1c2842f6e5912e0dccaf3c921f@2x.jpg",
              _2x: "cards/big/068119cbda80642ccd8717861ce8206b@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 72,
      name: d("Cook"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 17.5,
      baseHp: 32.5,
      tag: "bot",
      images: {
        _1x: "cards/078886acaac61976a7519907c072716e.jpg",
        _2x: "cards/3413b9857f62b7a4e2fe62fc82ed727d@2x.jpg"
      },
      big: {
        _1x: "cards/3413b9857f62b7a4e2fe62fc82ed727d@2x.jpg",
        _2x: "cards/big/cbef5bd98ac8b42d280b8939a82a7162@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/b76544759e735645c26c510db4be04af.png",
        _2x: "cards/icons/c45f7b0fe78d575e939dca65cf879121@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f2f916c887a6b1f176a4504e91003b73.jpg",
              _2x: "cards/9b1925657944b850a6a1233abf0949aa@2x.jpg"
            },
            big: {
              _1x: "cards/9b1925657944b850a6a1233abf0949aa@2x.jpg",
              _2x: "cards/big/d7aa2c3b5d0b7d75e4a7560a31a7d5ff@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7dac6258da75ca3eae7f6de5bb1c8cf4.jpg",
              _2x: "cards/3c72bcba24e8d4466684be3e04050c35@2x.jpg"
            },
            big: {
              _1x: "cards/3c72bcba24e8d4466684be3e04050c35@2x.jpg",
              _2x: "cards/big/67314d452d04b505d23b8cb194540d5b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/73fdd4a0aaefbd5744e5044fc9b8f25b.jpg",
              _2x: "cards/78d6c7cd688d2f9a2c99112329c47845@2x.jpg"
            },
            big: {
              _1x: "cards/78d6c7cd688d2f9a2c99112329c47845@2x.jpg",
              _2x: "cards/big/e44137623b5e27158b94de529979fc27@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4a40cb463f029f6687b42353b565d8e2.jpg",
              _2x: "cards/0322c314cae436cf3e1068a1e52ab0e1@2x.jpg"
            },
            big: {
              _1x: "cards/0322c314cae436cf3e1068a1e52ab0e1@2x.jpg",
              _2x: "cards/big/5d0e291ba694a8d56d8c340b3cb35762@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 73,
      name: d("Earth Elemental"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 17.5,
      baseHp: 32.5,
      tag: "bot",
      images: {
        _1x: "cards/c29fddf3fd4db2e5503284e013482dee.jpg",
        _2x: "cards/a8ddc8c2da34718ab4c4337f24fbda6b@2x.jpg"
      },
      big: {
        _1x: "cards/a8ddc8c2da34718ab4c4337f24fbda6b@2x.jpg",
        _2x: "cards/big/ea5356c5cfce7d5271018bb199426cff@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/35db55d0933ec90ef5fc85791e948aef.png",
        _2x: "cards/icons/f4c6ca48a9b10982f52d40bb5cbd8093@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/2a3d7a4813db187f74108306d211f1fe.jpg",
              _2x: "cards/79ebfcf9ef69da248a3d71240baa74e8@2x.jpg"
            },
            big: {
              _1x: "cards/79ebfcf9ef69da248a3d71240baa74e8@2x.jpg",
              _2x: "cards/big/d1aa6c2d9bf0b721dd4d7eb28b845392@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9c504fdf7117c6f12725c7aa7671a6d3.jpg",
              _2x: "cards/1d4f2c289bc9ace8dba6d23e29116a70@2x.jpg"
            },
            big: {
              _1x: "cards/1d4f2c289bc9ace8dba6d23e29116a70@2x.jpg",
              _2x: "cards/big/aab865313cbbb4c03f95d79d5244d873@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fe925886c9642e1fc603993c22d7e4d1.jpg",
              _2x: "cards/04702b6d18a180eb307ebfdbf780d3bf@2x.jpg"
            },
            big: {
              _1x: "cards/04702b6d18a180eb307ebfdbf780d3bf@2x.jpg",
              _2x: "cards/big/d26a751f6980e2f259f62173ae036730@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0b9ac5d18f0b837632a5b8b552504a23.jpg",
              _2x: "cards/a26fa9befe6a4dd2574d05f328390270@2x.jpg"
            },
            big: {
              _1x: "cards/a26fa9befe6a4dd2574d05f328390270@2x.jpg",
              _2x: "cards/big/ebea504810bdde3e76b3ad364fe141b6@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 74,
      name: d("Gipsy"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 17.5,
      baseHp: 32.5,
      tag: "bot",
      images: {
        _1x: "cards/fa2a79093ff29907a1078878f3eba56b.jpg",
        _2x: "cards/26cf91a3d79ff206bae470470f1e197e@2x.jpg"
      },
      big: {
        _1x: "cards/26cf91a3d79ff206bae470470f1e197e@2x.jpg",
        _2x: "cards/big/211899787f2dc79a49dba89419ab3c49@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/4097df2805eb8193321682b49efa6100.png",
        _2x: "cards/icons/c269e03b0a718d95ac0c7744217c28c9@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/8f60c9222d2bed4f9cbcb50c7a5cd00e.jpg",
              _2x: "cards/59e46fe685e3373967413f8646441232@2x.jpg"
            },
            big: {
              _1x: "cards/59e46fe685e3373967413f8646441232@2x.jpg",
              _2x: "cards/big/fe3fe893bc5206d90278d071de4b5d7e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/82b6d7dba6f782c07a8f517814ae1cd8.jpg",
              _2x: "cards/156e270945bcc017d716ff72d1edeeef@2x.jpg"
            },
            big: {
              _1x: "cards/156e270945bcc017d716ff72d1edeeef@2x.jpg",
              _2x: "cards/big/b9cf3c280accb286669c88abb1011921@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0f6563f152881770f5d6082b9ece201e.jpg",
              _2x: "cards/e7e3cf8f3b098c60fbe56cf11c7ee8f3@2x.jpg"
            },
            big: {
              _1x: "cards/e7e3cf8f3b098c60fbe56cf11c7ee8f3@2x.jpg",
              _2x: "cards/big/83b72b10b1d1cb79197612d5f13f21a5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/34aa0da1802c6d73203c39f5da6058cf.jpg",
              _2x: "cards/cea96072cae7b88d8caaceffdaeab18a@2x.jpg"
            },
            big: {
              _1x: "cards/cea96072cae7b88d8caaceffdaeab18a@2x.jpg",
              _2x: "cards/big/515c8634c29542beb0ec90fd4c1269c9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 75,
      name: d("Enchantress"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 25,
      baseHp: 25,
      tag: "bot",
      images: {
        _1x: "cards/1d2ac987ad8753d89046758f17d34d81.jpg",
        _2x: "cards/72f2ca8933e98116e4f0e00cbfe1a012@2x.jpg"
      },
      big: {
        _1x: "cards/72f2ca8933e98116e4f0e00cbfe1a012@2x.jpg",
        _2x: "cards/big/b575b971606a430126bd5a33c390a42c@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/668194b9f16f178609d9904b83d7eda3.png",
        _2x: "cards/icons/7663badcab91cd4bdf09eddf671418f7@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/5acf1ace0e9437bde3a7b6d9ecbda964.jpg",
              _2x: "cards/dcacb195d4930de57589d5cd310336a8@2x.jpg"
            },
            big: {
              _1x: "cards/dcacb195d4930de57589d5cd310336a8@2x.jpg",
              _2x: "cards/big/dfa91f8cd4aff6368ec494b18abcd673@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c773a42eec7f3ccda8cba552e8e55eeb.jpg",
              _2x: "cards/386e98724bac03454b4c0626019e5ffe@2x.jpg"
            },
            big: {
              _1x: "cards/386e98724bac03454b4c0626019e5ffe@2x.jpg",
              _2x: "cards/big/38c0ab873bd8087af93fff3546611903@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3c1c5a9d85ee3969a3c7661e0c12ba37.jpg",
              _2x: "cards/31f6ea8022ba22b9d95f4f30ce232abc@2x.jpg"
            },
            big: {
              _1x: "cards/31f6ea8022ba22b9d95f4f30ce232abc@2x.jpg",
              _2x: "cards/big/b0509ccfd6915e2f80e2364adcf34547@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fe50585a31f2b7f3dbb3294ffd834d3a.jpg",
              _2x: "cards/43bd7dbb32405fb41bdab354b2bdc248@2x.jpg"
            },
            big: {
              _1x: "cards/43bd7dbb32405fb41bdab354b2bdc248@2x.jpg",
              _2x: "cards/big/d6873994edc95baf7a226588685b6395@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 76,
      name: d("Twins"),
      cls: 1,
      color: 3,
      rarity: 1,
      baseAttack: 15,
      baseHp: 35,
      tag: "bot",
      images: {
        _1x: "cards/b806056546a6ca4c5800e55e3ddda63a.jpg",
        _2x: "cards/f3450fc3892f3e348e05665a8d9020da@2x.jpg"
      },
      big: {
        _1x: "cards/f3450fc3892f3e348e05665a8d9020da@2x.jpg",
        _2x: "cards/big/699dec504c2ea1a264678bdf3ca444c0@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/74f73e5c4b6415872666ad92ba7ed42b.png",
        _2x: "cards/icons/f7f7545ef26dba6a991b0823a1e74922@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/ff8ee868089ea6c4a829f24e6129e761.jpg",
              _2x: "cards/edd3cabe1536062435ce86303f1dd40f@2x.jpg"
            },
            big: {
              _1x: "cards/edd3cabe1536062435ce86303f1dd40f@2x.jpg",
              _2x: "cards/big/80e697116e2ccb3956e153675be4320d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/52fbdb696a441ea9d9835591a299b029.jpg",
              _2x: "cards/ab737c8ec100b12aebca84229efa0287@2x.jpg"
            },
            big: {
              _1x: "cards/ab737c8ec100b12aebca84229efa0287@2x.jpg",
              _2x: "cards/big/0b1b4dc848434bb3edf5b493839d11a0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/aca33728d0d688b5330a9bc2a7c0571a.jpg",
              _2x: "cards/966ad58e39cb7066d97f85c1fb1cb965@2x.jpg"
            },
            big: {
              _1x: "cards/966ad58e39cb7066d97f85c1fb1cb965@2x.jpg",
              _2x: "cards/big/70ce48be4bd307eb71c614d46f1f9f77@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f2dbc64a6b3174d6cc9a8b1bd1234ac5.jpg",
              _2x: "cards/04152db29c388c68c52ad340ace547a8@2x.jpg"
            },
            big: {
              _1x: "cards/04152db29c388c68c52ad340ace547a8@2x.jpg",
              _2x: "cards/big/45bf53849c7114131cb857c59a06c845@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 77,
      name: d("Succub"),
      cls: 2,
      color: 1,
      rarity: 1,
      baseAttack: 32.5,
      baseHp: 17.5,
      tag: "bot",
      images: {
        _1x: "cards/fcb085f61ed13a28332e63e0a09a92e1.jpg",
        _2x: "cards/7a8463c7ef7224ff434fe90f2f976141@2x.jpg"
      },
      big: {
        _1x: "cards/7a8463c7ef7224ff434fe90f2f976141@2x.jpg",
        _2x: "cards/big/08bf6ab0f2beb9fc6e473c2ee0f7f3d2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/5f285f6b4dc32e8a2b330fd28ce15270.png",
        _2x: "cards/icons/aa0d92ea92a5bf4b3ced4987ffed41e5@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/fd503012f0db2b3ee8e55677e97adb83.jpg",
              _2x: "cards/4fb39b1b50d0d0ec863b3e6bba371287@2x.jpg"
            },
            big: {
              _1x: "cards/4fb39b1b50d0d0ec863b3e6bba371287@2x.jpg",
              _2x: "cards/big/79e73609434e7a1de1382c785d5243a6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/03d67bfc37735b0ad905b1873d864f28.jpg",
              _2x: "cards/535aa2d1669f188b812cddb55d7b8d1a@2x.jpg"
            },
            big: {
              _1x: "cards/535aa2d1669f188b812cddb55d7b8d1a@2x.jpg",
              _2x: "cards/big/4f01c89eef7b01271ccb747a71d639e0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ec482ca9e5a5ad2c803e49320d9ed31d.jpg",
              _2x: "cards/cb2992a54d3200ed11db85c48685f670@2x.jpg"
            },
            big: {
              _1x: "cards/cb2992a54d3200ed11db85c48685f670@2x.jpg",
              _2x: "cards/big/8021df48d7e55227f2000b095b392a23@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c9753d40f4b754d904ea631c37f011f5.jpg",
              _2x: "cards/e8a55b16273c56417e042f3d5b7a5c60@2x.jpg"
            },
            big: {
              _1x: "cards/e8a55b16273c56417e042f3d5b7a5c60@2x.jpg",
              _2x: "cards/big/0dfc4e7b0508036e402737e0642ec783@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 78,
      name: d("Satyr"),
      cls: 3,
      color: 2,
      rarity: 1,
      baseAttack: 12.5,
      baseHp: 37.5,
      tag: "bot",
      images: {
        _1x: "cards/88af0575b44bccd84e8bd835ade00eda.jpg",
        _2x: "cards/8a5dffd59426482e32e2520402b0c72a@2x.jpg"
      },
      big: {
        _1x: "cards/8a5dffd59426482e32e2520402b0c72a@2x.jpg",
        _2x: "cards/big/e2a9f9ad33b80ea63a7d48a66b549228@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f50f6f3072fbcca158bd11541b8e6b32.png",
        _2x: "cards/icons/816e383ad4a6166aa2e9f867d997040c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0c30a4182e65aa623fd91675aa4b1a97.jpg",
              _2x: "cards/b2b7c043cb4415f49fa9e41c5bb4a161@2x.jpg"
            },
            big: {
              _1x: "cards/b2b7c043cb4415f49fa9e41c5bb4a161@2x.jpg",
              _2x: "cards/big/36a6a1df5fa92ef4b23f5dc0cbd759a6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7a382aa271ff5b48471522641ff0fd5d.jpg",
              _2x: "cards/507a5988ffc757959e778a2ae93f99a7@2x.jpg"
            },
            big: {
              _1x: "cards/507a5988ffc757959e778a2ae93f99a7@2x.jpg",
              _2x: "cards/big/02c9a4d19481895fc18aa9c3856c289d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/54fc1dd55b0170947b37b1128ace5db8.jpg",
              _2x: "cards/b25a3381b63ade6555ab2055e4f019e1@2x.jpg"
            },
            big: {
              _1x: "cards/b25a3381b63ade6555ab2055e4f019e1@2x.jpg",
              _2x: "cards/big/92372bfdce043771ce34d9ff3ed9199a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a0898fa0b536d89c4cc8ceb659ac6007.jpg",
              _2x: "cards/e28d100caf296f0ed82acd5f5c79a04d@2x.jpg"
            },
            big: {
              _1x: "cards/e28d100caf296f0ed82acd5f5c79a04d@2x.jpg",
              _2x: "cards/big/98053cdfc76ddbe184f8adc9783fd349@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 79,
      name: d("Shaman"),
      cls: 4,
      color: 5,
      rarity: 1,
      baseAttack: 22.5,
      baseHp: 27.5,
      tag: "bot",
      images: {
        _1x: "cards/d5bbd12917a90819e381244271e17007.jpg",
        _2x: "cards/0fe5a53019dc36a1e41011e8f4fab63f@2x.jpg"
      },
      big: {
        _1x: "cards/0fe5a53019dc36a1e41011e8f4fab63f@2x.jpg",
        _2x: "cards/big/239b5afa4e9b76037bd51972a8fa754f@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/cf603693d102f819ec336751370b9c76.png",
        _2x: "cards/icons/815b09fcfa898cb93832bbd8152b4a73@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0e8aa8527a7bde095c85c53faf4c2d73.jpg",
              _2x: "cards/a15bcd1548d288081c19b20fec42f2da@2x.jpg"
            },
            big: {
              _1x: "cards/a15bcd1548d288081c19b20fec42f2da@2x.jpg",
              _2x: "cards/big/9723b150e22bf3a858f2168445bdb9d6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/63c42ab166395c62f2ffac5b8f1efc30.jpg",
              _2x: "cards/7cec7821215a2299161833abe471a6e8@2x.jpg"
            },
            big: {
              _1x: "cards/7cec7821215a2299161833abe471a6e8@2x.jpg",
              _2x: "cards/big/01d641ae986c31857ead6b24efd81318@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b1e202866a154da4cca9299e783928fa.jpg",
              _2x: "cards/50ad8feeec0bb1ca67d2fc6d9177ecee@2x.jpg"
            },
            big: {
              _1x: "cards/50ad8feeec0bb1ca67d2fc6d9177ecee@2x.jpg",
              _2x: "cards/big/0fa6452f17c5963eb72d76d3ab9d068f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ebcd13d619cf628d00771510befab49f.jpg",
              _2x: "cards/3417fec7ff3c01c92dee6de03059ac09@2x.jpg"
            },
            big: {
              _1x: "cards/3417fec7ff3c01c92dee6de03059ac09@2x.jpg",
              _2x: "cards/big/ad2199f3f93c54bdae0cc19e08aa562a@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 80,
      name: d("Slave"),
      cls: 5,
      color: 4,
      rarity: 1,
      baseAttack: 12.5,
      baseHp: 37.5,
      tag: "bot",
      images: {
        _1x: "cards/36b4fd59f58f4fdc71f95d1d1e407941.jpg",
        _2x: "cards/7f05c84a0056724314b23bdceb5cdc88@2x.jpg"
      },
      big: {
        _1x: "cards/7f05c84a0056724314b23bdceb5cdc88@2x.jpg",
        _2x: "cards/big/6135d5c98292133412d37c0ca7b21da9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/bf3cf55dcbd761bedc525ca9e062dbf0.png",
        _2x: "cards/icons/df8991c0eeb7112cb3f37341adc1c3f4@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c469739fcc6bb73037b996c408c38599.jpg",
              _2x: "cards/4a6738c167bf1401cce2517d33a07c28@2x.jpg"
            },
            big: {
              _1x: "cards/4a6738c167bf1401cce2517d33a07c28@2x.jpg",
              _2x: "cards/big/337e9f7105503a8efa36523d5dc3dcde@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d50c4705ffba5c7db1f7668c1aa57bff.jpg",
              _2x: "cards/e5bcf0db34b3ac0da82ff61d3b3808fd@2x.jpg"
            },
            big: {
              _1x: "cards/e5bcf0db34b3ac0da82ff61d3b3808fd@2x.jpg",
              _2x: "cards/big/ae8bdcc0789600931d5bbd66992e6fd3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/78dd455135170f6f8b0447c47f590e67.jpg",
              _2x: "cards/b07dcb0b4bce47e8ab06a45ff526d41b@2x.jpg"
            },
            big: {
              _1x: "cards/b07dcb0b4bce47e8ab06a45ff526d41b@2x.jpg",
              _2x: "cards/big/f5cc990bdfa308dd78c76658065e1ef1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/84b7d8930a52d4826fbeb5f6434edd44.jpg",
              _2x: "cards/5a15a4637447130d666d68c785228480@2x.jpg"
            },
            big: {
              _1x: "cards/5a15a4637447130d666d68c785228480@2x.jpg",
              _2x: "cards/big/303cfcbc75cd728e0e60ccdf854a8c96@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 81,
      name: d("Pirate"),
      cls: 1,
      color: 3,
      rarity: 2,
      baseAttack: 30,
      baseHp: 20,
      tag: "bot",
      images: {
        _1x: "cards/67f3b49d562054738e1638ffb069f0e7.jpg",
        _2x: "cards/4106e888749b4cd6fdaa7cf93d02a8ca@2x.jpg"
      },
      big: {
        _1x: "cards/4106e888749b4cd6fdaa7cf93d02a8ca@2x.jpg",
        _2x: "cards/big/50dafa4d15434b1eeb1d7f0c5cb39993@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/8114ca1356c6020a58d8c6a3a29ce7ed.png",
        _2x: "cards/icons/ad1bd6d6fd8dad62e6c972290a90f09c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e24944adeca329d97ad0b9db566831cb.jpg",
              _2x: "cards/c33d5a3f4461ebad5bee05cfb18d76b6@2x.jpg"
            },
            big: {
              _1x: "cards/c33d5a3f4461ebad5bee05cfb18d76b6@2x.jpg",
              _2x: "cards/big/ca99acfa3dc9889dca13a50b06de584c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/37a76f3b23527eaa51d11fa71b684c1a.jpg",
              _2x: "cards/9ae0c34ae0b02940635e3d12c432b491@2x.jpg"
            },
            big: {
              _1x: "cards/9ae0c34ae0b02940635e3d12c432b491@2x.jpg",
              _2x: "cards/big/257bc5c723b0b21efcdd4655d615be1e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/263d16f0481d0629f3021120f8030844.jpg",
              _2x: "cards/c118964f5f28cc164fe50ba82577a09e@2x.jpg"
            },
            big: {
              _1x: "cards/c118964f5f28cc164fe50ba82577a09e@2x.jpg",
              _2x: "cards/big/a385c266ecea697bc5ba2006798381b8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2f43c2a9f4db399e1cf81d709b681f7d.jpg",
              _2x: "cards/ba3b7c366e1bbdce9fccf5354c69193e@2x.jpg"
            },
            big: {
              _1x: "cards/ba3b7c366e1bbdce9fccf5354c69193e@2x.jpg",
              _2x: "cards/big/023cf72759223c4a7a15e40daea1b332@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 82,
      name: d("Harpy"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 32.5,
      baseHp: 17.5,
      tag: "bot",
      images: {
        _1x: "cards/ddd214b8b15cd4d9aea47cb07aa68726.jpg",
        _2x: "cards/36a14db93d29bab7591e7ed80833b246@2x.jpg"
      },
      big: {
        _1x: "cards/36a14db93d29bab7591e7ed80833b246@2x.jpg",
        _2x: "cards/big/1d2042464924da26ec87caf6d8aec8ea@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/26b331e006affa223583a27d8861dfa3.png",
        _2x: "cards/icons/eae6fe47e7c0dcbce70945970923c96c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e65450bba47cb68079da0bf2db993815.jpg",
              _2x: "cards/dd14fc20ef28ec990935569eb4ac2b57@2x.jpg"
            },
            big: {
              _1x: "cards/dd14fc20ef28ec990935569eb4ac2b57@2x.jpg",
              _2x: "cards/big/3b52c3200137326f044169b16cce651f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5c9e2ba7ff653c897cc9e4fe7cb15dc1.jpg",
              _2x: "cards/0a8d77c2d5170c4263db0c54c5736f44@2x.jpg"
            },
            big: {
              _1x: "cards/0a8d77c2d5170c4263db0c54c5736f44@2x.jpg",
              _2x: "cards/big/61c19a677af1eade7077037a4d48b01c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1e20fcf46b916310575a543171a6ba27.jpg",
              _2x: "cards/9fd1eb53ce92a902eadba33dcc79be6f@2x.jpg"
            },
            big: {
              _1x: "cards/9fd1eb53ce92a902eadba33dcc79be6f@2x.jpg",
              _2x: "cards/big/5560ea432e690de11052300859d3dd6e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2ce7b5900f99cf99cc4299285aa26357.jpg",
              _2x: "cards/ba37bd32bb110c8232fafe282b5ed161@2x.jpg"
            },
            big: {
              _1x: "cards/ba37bd32bb110c8232fafe282b5ed161@2x.jpg",
              _2x: "cards/big/223bd66b9be7659fd012cb00846645b9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 83,
      name: d("Axewoman"),
      cls: 3,
      color: 2,
      rarity: 2,
      baseAttack: 13.5,
      baseHp: 36.5,
      tag: "bot",
      images: {
        _1x: "cards/5e1352e2fbecd1bf9b7c55f5efa82fad.jpg",
        _2x: "cards/c91f766b5668de908222a65c8fd8eb22@2x.jpg"
      },
      big: {
        _1x: "cards/c91f766b5668de908222a65c8fd8eb22@2x.jpg",
        _2x: "cards/big/0689ce72c48a52a1aa8f0ba4367c755d@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/d652617a671ca7bb19e9977d9dcd5434.png",
        _2x: "cards/icons/ee6184e28567e5f59b5447f7402d2907@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/28796ba8671c2e4524d31916bc1a7716.jpg",
              _2x: "cards/863b8243218cd4119e507485cf1d7c26@2x.jpg"
            },
            big: {
              _1x: "cards/863b8243218cd4119e507485cf1d7c26@2x.jpg",
              _2x: "cards/big/11931d2497597b7e4084da5e3b7b6642@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9883b4abb49c396c7cfe37b9f5dd33a0.jpg",
              _2x: "cards/0be6bea04114d6fd73e5a826323d3f20@2x.jpg"
            },
            big: {
              _1x: "cards/0be6bea04114d6fd73e5a826323d3f20@2x.jpg",
              _2x: "cards/big/63dbcff398e02bcb308d16991a721161@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/de472f1510760cc255488cb8f6bde771.jpg",
              _2x: "cards/d0f2f560276b996f5b278313d45ddff0@2x.jpg"
            },
            big: {
              _1x: "cards/d0f2f560276b996f5b278313d45ddff0@2x.jpg",
              _2x: "cards/big/d2ff27aa7a32f891d47d5641a4aa8145@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/37b8fcb2743e3c2ad588b3e5544d096a.jpg",
              _2x: "cards/c7c1974a83142d96f02232241c60efa1@2x.jpg"
            },
            big: {
              _1x: "cards/c7c1974a83142d96f02232241c60efa1@2x.jpg",
              _2x: "cards/big/a157d48287b5bd529c47d11e07be7ca6@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 84,
      name: d("Dark Angel"),
      cls: 4,
      color: 5,
      rarity: 2,
      baseAttack: 22.5,
      baseHp: 27.5,
      tag: "bot",
      images: {
        _1x: "cards/de1e43a0bdead496e3a7e53c7af83deb.jpg",
        _2x: "cards/ab0937f14b831765662f695974a394bc@2x.jpg"
      },
      big: {
        _1x: "cards/ab0937f14b831765662f695974a394bc@2x.jpg",
        _2x: "cards/big/fa1d4c97a09ea6d20273c415cb895e87@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/c3bbf39e00496981328040da66a61808.png",
        _2x: "cards/icons/6fd87e0c8a0777d0b89fdd8351019507@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0008743b029ab45fc63858f449338e1d.jpg",
              _2x: "cards/402d76b0cef1dde60b2b96e2f87cbfee@2x.jpg"
            },
            big: {
              _1x: "cards/402d76b0cef1dde60b2b96e2f87cbfee@2x.jpg",
              _2x: "cards/big/207ee291a6dbc47d274705b6eeaf7c47@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7bc7a33ac213ae1fd0ec644bb41a0494.jpg",
              _2x: "cards/6175493cb5d2901071916b9bac02f61a@2x.jpg"
            },
            big: {
              _1x: "cards/6175493cb5d2901071916b9bac02f61a@2x.jpg",
              _2x: "cards/big/265099f99a1561fa552e34ab3adb7a38@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9916576c13c0b492da919fd281724195.jpg",
              _2x: "cards/a0b1b69e4d4f96ebed2b25bf1c820782@2x.jpg"
            },
            big: {
              _1x: "cards/a0b1b69e4d4f96ebed2b25bf1c820782@2x.jpg",
              _2x: "cards/big/5e48ca2364c5fa2cee42231b91c40b4c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/be59147d7ae9c268f1b35f2e1666d44b.jpg",
              _2x: "cards/52195498607a7da256c072bcc66bf0e4@2x.jpg"
            },
            big: {
              _1x: "cards/52195498607a7da256c072bcc66bf0e4@2x.jpg",
              _2x: "cards/big/e980855a2921d7c38ba9f0b923bae420@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 85,
      name: d("Arabian Princess"),
      cls: 5,
      color: 4,
      rarity: 2,
      baseAttack: 17.5,
      baseHp: 32.5,
      tag: "bot",
      images: {
        _1x: "cards/cac93b8171191e98dc068b6432770123.jpg",
        _2x: "cards/3dcc65aac75d46e91eb8a06130a6f4f0@2x.jpg"
      },
      big: {
        _1x: "cards/3dcc65aac75d46e91eb8a06130a6f4f0@2x.jpg",
        _2x: "cards/big/13f71fdfe27efa45e60db37fb5e1e3be@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/565c64178d90002365578103c5d7cc48.png",
        _2x: "cards/icons/9ac25869d896c98eaa220f7e46876fb3@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/b5055d9ddaa1ab6bf6ea92f9e7cc76e7.jpg",
              _2x: "cards/3dc2bd24f22126ff412a00f8faf3dbbf@2x.jpg"
            },
            big: {
              _1x: "cards/3dc2bd24f22126ff412a00f8faf3dbbf@2x.jpg",
              _2x: "cards/big/ed55b19d87b01ae6144a5ce76ee16952@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/724732ec76f3715f4965cd5547d4eb09.jpg",
              _2x: "cards/a6b1eccf3284a6122a323d3e7fce2844@2x.jpg"
            },
            big: {
              _1x: "cards/a6b1eccf3284a6122a323d3e7fce2844@2x.jpg",
              _2x: "cards/big/854c008fc5dc6e1124ab1349fe2f85b5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c552bd8a41afd6d7f456314424087e0a.jpg",
              _2x: "cards/8dfa8f27f576304aa2eb8bac1467c691@2x.jpg"
            },
            big: {
              _1x: "cards/8dfa8f27f576304aa2eb8bac1467c691@2x.jpg",
              _2x: "cards/big/413645515d7345e92de2255167448484@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4c6c94ffaf44e9497fd1aa7bc3f56b27.jpg",
              _2x: "cards/b32df9b027916bfda11de1bf11e8064e@2x.jpg"
            },
            big: {
              _1x: "cards/b32df9b027916bfda11de1bf11e8064e@2x.jpg",
              _2x: "cards/big/4661c38220ef70940b451afd048c3a4d@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 86,
      name: d("Snow Queen"),
      cls: 1,
      color: 3,
      rarity: 2,
      baseAttack: 22.5,
      baseHp: 27.5,
      tag: "bot",
      cset: 1,
      images: {
        _1x: "cards/80e0ccbe3ad52bd9a1551b27dbff5cee.jpg",
        _2x: "cards/f0a4096f58ef20a23dd2838132092641@2x.jpg"
      },
      big: {
        _1x: "cards/f0a4096f58ef20a23dd2838132092641@2x.jpg",
        _2x: "cards/big/0750769c6c5e338d2ece6d78ad2ee4e6@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/d406890c079ff7cc614ab56e27225575.png",
        _2x: "cards/icons/fe4f5da56be39800d8af98103a7b76a7@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f8f225a2faf20dad4507b6f8a57fc4d6.jpg",
              _2x: "cards/d135378bbc4dfa03fbce01e6b394ba40@2x.jpg"
            },
            big: {
              _1x: "cards/d135378bbc4dfa03fbce01e6b394ba40@2x.jpg",
              _2x: "cards/big/c11f994649d4b5a609760031dc3caa10@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7ab52fd370beb9bff4650548ad0a7cc1.jpg",
              _2x: "cards/228b24608259d33ccb09b21fb6e8df72@2x.jpg"
            },
            big: {
              _1x: "cards/228b24608259d33ccb09b21fb6e8df72@2x.jpg",
              _2x: "cards/big/52a33f0eedb2ac8109c03b0911f155b7@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1c76b98da2cf58ad4ac8538cd1d4c8da.jpg",
              _2x: "cards/8c251dc96947d91129173da859acca01@2x.jpg"
            },
            big: {
              _1x: "cards/8c251dc96947d91129173da859acca01@2x.jpg",
              _2x: "cards/big/578977278cd697971b716951f5e82629@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ba46eb7fa9844d41cc563367e0d81c57.jpg",
              _2x: "cards/4872f0c40f37338c77c4722ef97a2ea7@2x.jpg"
            },
            big: {
              _1x: "cards/4872f0c40f37338c77c4722ef97a2ea7@2x.jpg",
              _2x: "cards/big/dd4b30663c090d72fb3926ee90103913@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 87,
      name: d("Sentinel"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 32.5,
      baseHp: 17.5,
      tag: "bot",
      images: {
        _1x: "cards/33c05f82ec132b8911ffa6a0d557fb00.jpg",
        _2x: "cards/934a08e15bc0a616b76445907a90e0a4@2x.jpg"
      },
      big: {
        _1x: "cards/934a08e15bc0a616b76445907a90e0a4@2x.jpg",
        _2x: "cards/big/c70474764fa5c08d4cf4c7aa050ff9e2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/b1875304f322585cd74ff29c886a398a.png",
        _2x: "cards/icons/db2aec598ea7e07b6093ff6beee376ee@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a02c0159d394eb236dd407ddae750ee3.jpg",
              _2x: "cards/1a392d39a785b370cedde806a7f7e591@2x.jpg"
            },
            big: {
              _1x: "cards/1a392d39a785b370cedde806a7f7e591@2x.jpg",
              _2x: "cards/big/6593c9d0039a3795ed817147f3a3094e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a787e82ae278814fed5ea0e026941764.jpg",
              _2x: "cards/8a8c8283f5ee5bfe8b8abcd0e2795c12@2x.jpg"
            },
            big: {
              _1x: "cards/8a8c8283f5ee5bfe8b8abcd0e2795c12@2x.jpg",
              _2x: "cards/big/7308006a8d2adbcfefa21674c663d0a3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/176a6e8d0735a363f05e60d5a66c9999.jpg",
              _2x: "cards/c90cb3ff53c21a08a4ed6590b93de957@2x.jpg"
            },
            big: {
              _1x: "cards/c90cb3ff53c21a08a4ed6590b93de957@2x.jpg",
              _2x: "cards/big/033344b3b21fd09655ba81df4dfa3ce9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d79f5bd58ad60cd5c2e0db08c43544a8.jpg",
              _2x: "cards/def11ab292e4d882e285988b286bc66f@2x.jpg"
            },
            big: {
              _1x: "cards/def11ab292e4d882e285988b286bc66f@2x.jpg",
              _2x: "cards/big/0401f6eb7dcd275dca121b34569e7d96@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 88,
      name: d("Leprechaun"),
      cls: 3,
      color: 2,
      rarity: 2,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      cset: 2,
      images: {
        _1x: "cards/9f2fe0e5aebc2e61e6e54196929cc3d5.jpg",
        _2x: "cards/5a0da3b070dc2a1055f14d00710a2555@2x.jpg"
      },
      big: {
        _1x: "cards/5a0da3b070dc2a1055f14d00710a2555@2x.jpg",
        _2x: "cards/big/9f022def4df9afc1e5d5ef3260d2bca0@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/8d758c7fa3ecd6de2a9a5afb5e28572e.png",
        _2x: "cards/icons/068c19706ba0fcab573d143cb86b3203@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/652199852ad683983228ae30cd17f6ef.jpg",
              _2x: "cards/7f392d1cf62b6ca58bac427d0576331a@2x.jpg"
            },
            big: {
              _1x: "cards/7f392d1cf62b6ca58bac427d0576331a@2x.jpg",
              _2x: "cards/big/7a19e6b418b51f66cd5a12a535963445@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0329ea18c374219dd61c143e1c79fed4.jpg",
              _2x: "cards/0ed14f0326a9cd7205999ca7d6344758@2x.jpg"
            },
            big: {
              _1x: "cards/0ed14f0326a9cd7205999ca7d6344758@2x.jpg",
              _2x: "cards/big/ea6c201a333f30e17b730ae16085f148@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/540851974df73021fd86a3e782def771.jpg",
              _2x: "cards/1ae9bba8f0d7df040e3d5b0606a5181e@2x.jpg"
            },
            big: {
              _1x: "cards/1ae9bba8f0d7df040e3d5b0606a5181e@2x.jpg",
              _2x: "cards/big/c76a8d18fdcedb123f90e2ad6375e6e2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ae6be883310d49596b11a9a22bf0279d.jpg",
              _2x: "cards/264a01f6681f49d0501fc4dc3fac148f@2x.jpg"
            },
            big: {
              _1x: "cards/264a01f6681f49d0501fc4dc3fac148f@2x.jpg",
              _2x: "cards/big/92d11d6fabcedcef025abdf97e77d186@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 89,
      name: d("Witch"),
      cls: 4,
      color: 5,
      rarity: 2,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      images: {
        _1x: "cards/7687cd1559f8a3b2c393a7a8cc155a96.jpg",
        _2x: "cards/84102c638eb2f50ebe3cb565a255d2c6@2x.jpg"
      },
      big: {
        _1x: "cards/84102c638eb2f50ebe3cb565a255d2c6@2x.jpg",
        _2x: "cards/big/64d8d511d8c7d9e7c2530a14350a0cae@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/186c7bc6b90792979a8e98558d64e481.png",
        _2x: "cards/icons/223e8ab6715289356b51752558914b1a@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/995fd202f85aa87f37a87d0bdcf0044c.jpg",
              _2x: "cards/538b9c0e5a178b6bd4df28f58f9265a7@2x.jpg"
            },
            big: {
              _1x: "cards/538b9c0e5a178b6bd4df28f58f9265a7@2x.jpg",
              _2x: "cards/big/a9520555521449bc20fba34fa3d90992@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/01435fae16f65065862c2de1cb0c861d.jpg",
              _2x: "cards/a4d61f0efbe417f34bc3d3c6fce6c29e@2x.jpg"
            },
            big: {
              _1x: "cards/a4d61f0efbe417f34bc3d3c6fce6c29e@2x.jpg",
              _2x: "cards/big/4b43d2bb4f36311eb3896e4a6a8d5068@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f2e78f6d77898b3a9cd800b890522f1c.jpg",
              _2x: "cards/d1fe2022e59a20df4a031597d69bbfd7@2x.jpg"
            },
            big: {
              _1x: "cards/d1fe2022e59a20df4a031597d69bbfd7@2x.jpg",
              _2x: "cards/big/0184c14c334e23a9f33493a43254db86@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/571c7828d14d0c179c21327a56663d30.jpg",
              _2x: "cards/c5645ec606c8544f888d0e99a68e3538@2x.jpg"
            },
            big: {
              _1x: "cards/c5645ec606c8544f888d0e99a68e3538@2x.jpg",
              _2x: "cards/big/3a7fd3b6e47dd81adfff2e1b9fc9d8e2@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 90,
      name: d("Maid"),
      cls: 5,
      color: 4,
      rarity: 2,
      baseAttack: 15,
      baseHp: 35,
      tag: "bot",
      images: {
        _1x: "cards/3934d0f7d17ee16569657eceacef478e.jpg",
        _2x: "cards/1470c5019bd5dddd3f3515ae763e2a3a@2x.jpg"
      },
      big: {
        _1x: "cards/1470c5019bd5dddd3f3515ae763e2a3a@2x.jpg",
        _2x: "cards/big/af8a7de435a9fe0e9e083b355c2bfb6e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/9ae320d404fb61df1872557e3a2e75be.png",
        _2x: "cards/icons/a1cc0fc2a19a60d939ae243388b42130@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/52a378c2635dc6c9c77ce52f9846c62d.jpg",
              _2x: "cards/4a5ad8ad81300e7bca39dca7f90b1a1d@2x.jpg"
            },
            big: {
              _1x: "cards/4a5ad8ad81300e7bca39dca7f90b1a1d@2x.jpg",
              _2x: "cards/big/116a21dab155c55774270dc10811d02d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/08aa8909b7f3ae0502d62db5d8811042.jpg",
              _2x: "cards/508cc9b298cbe705e49055068cf9910c@2x.jpg"
            },
            big: {
              _1x: "cards/508cc9b298cbe705e49055068cf9910c@2x.jpg",
              _2x: "cards/big/5fb715c2862fa07f47d35f54804a67e5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e699a9bd96605c5825459c849ac53808.jpg",
              _2x: "cards/a201aee334fdb1313efdb220e28705b3@2x.jpg"
            },
            big: {
              _1x: "cards/a201aee334fdb1313efdb220e28705b3@2x.jpg",
              _2x: "cards/big/e145f372607287535d1ecbf6333d6831@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/db0a7b3b46459388648a074fec7e63a3.jpg",
              _2x: "cards/853672c31240fd4b91b4aa9015bf88f1@2x.jpg"
            },
            big: {
              _1x: "cards/853672c31240fd4b91b4aa9015bf88f1@2x.jpg",
              _2x: "cards/big/44d0f46823573217b0e770c71b5e0ee7@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 91,
      name: d("Cinderella"),
      cls: 1,
      color: 3,
      rarity: 2,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      images: {
        _1x: "cards/eb7a79697437dff6095c8da3a3014ec1.jpg",
        _2x: "cards/af68ccfc992c932cb10e26ac2162906f@2x.jpg"
      },
      big: {
        _1x: "cards/af68ccfc992c932cb10e26ac2162906f@2x.jpg",
        _2x: "cards/big/a677adae7773f7f95c76546d53d70d3b@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/610957db041a108b8be1003029c72bed.png",
        _2x: "cards/icons/fdbaca4f614530ec443e1505198d5efd@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/678fd6e9d32a69321f3336c2c588de86.jpg",
              _2x: "cards/164077d58bdcf861c0de199c95e0e562@2x.jpg"
            },
            big: {
              _1x: "cards/164077d58bdcf861c0de199c95e0e562@2x.jpg",
              _2x: "cards/big/3a504d20d37e5af12d610a64fa2416f1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b60e78a4a038e98a27590ba7efb11df3.jpg",
              _2x: "cards/784acc80aeef54cef4164d5d572a2558@2x.jpg"
            },
            big: {
              _1x: "cards/784acc80aeef54cef4164d5d572a2558@2x.jpg",
              _2x: "cards/big/617c1ca59aae27fd257ada79cc746dc5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9893cd92c305ae6102f79e87db30c0a8.jpg",
              _2x: "cards/46aa98a1353e670111c0e97bd3f0a66d@2x.jpg"
            },
            big: {
              _1x: "cards/46aa98a1353e670111c0e97bd3f0a66d@2x.jpg",
              _2x: "cards/big/6b30add7a6c5a3ea5f7afc5909f7e4a8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/60b4970f9fddae14e41699e3f96135ff.jpg",
              _2x: "cards/ac66a9dd7a85607ff47e32b552bf286f@2x.jpg"
            },
            big: {
              _1x: "cards/ac66a9dd7a85607ff47e32b552bf286f@2x.jpg",
              _2x: "cards/big/aac41906e07c8c7a362e0300c4309a1a@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 92,
      name: d("Stepmother"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 30,
      baseHp: 20,
      tag: "bot",
      images: {
        _1x: "cards/a234eed7eeea4c33f7e94575f5c70654.jpg",
        _2x: "cards/908fbdab5ef7e043ab08f84d0d822c0a@2x.jpg"
      },
      big: {
        _1x: "cards/908fbdab5ef7e043ab08f84d0d822c0a@2x.jpg",
        _2x: "cards/big/a1390d1e8e66e1aefb15a7c72ad509ed@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/2c819ec23b42c927d25aa3fd8adb22cd.png",
        _2x: "cards/icons/1488c8b35cbd7ecac97063ac52699ab0@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a7c8e6b4bf85f298dbf1d6b4e5e6846e.jpg",
              _2x: "cards/f56b5c6d2decac8c9a94c1012b795f22@2x.jpg"
            },
            big: {
              _1x: "cards/f56b5c6d2decac8c9a94c1012b795f22@2x.jpg",
              _2x: "cards/big/47cd53b01699fdd9497fd067d40d3a0c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/986a051adb7c1be07473265201904dba.jpg",
              _2x: "cards/fb50b08615d173ca16d860111c823003@2x.jpg"
            },
            big: {
              _1x: "cards/fb50b08615d173ca16d860111c823003@2x.jpg",
              _2x: "cards/big/7b9bb23beb8cd870bb73f690b9b2e1d0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c716a09d4675d5ab1f2a9c0f60923423.jpg",
              _2x: "cards/472da831e2f5b9d8e79010c175eaf53f@2x.jpg"
            },
            big: {
              _1x: "cards/472da831e2f5b9d8e79010c175eaf53f@2x.jpg",
              _2x: "cards/big/db0516696002db965566900829596a82@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c76ecc8e8620677813c95633c82f3794.jpg",
              _2x: "cards/f7ee905230d118db51bdd170fbf5e170@2x.jpg"
            },
            big: {
              _1x: "cards/f7ee905230d118db51bdd170fbf5e170@2x.jpg",
              _2x: "cards/big/d6cfd4106852bf7762c02dd0a4727716@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 93,
      name: d("Archeress"),
      cls: 3,
      color: 2,
      rarity: 2,
      baseAttack: 22.5,
      baseHp: 27.5,
      tag: "bot",
      cset: 2,
      images: {
        _1x: "cards/f5bddf91bf8f89f5b4f892a07de35408.jpg",
        _2x: "cards/b5678a54ff922855d12a8ea45fc140d3@2x.jpg"
      },
      big: {
        _1x: "cards/b5678a54ff922855d12a8ea45fc140d3@2x.jpg",
        _2x: "cards/big/eabb6563d86871823bdc98d6e102fa2c@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/855472ee0347a6e7e56c675edf774e2a.png",
        _2x: "cards/icons/9911022aa544d1cf674e757fcd511d05@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/44432b4f07e57e20ec50b0edaa7ded5e.jpg",
              _2x: "cards/b36556c11b72974c78072154ead6a43e@2x.jpg"
            },
            big: {
              _1x: "cards/b36556c11b72974c78072154ead6a43e@2x.jpg",
              _2x: "cards/big/6f82f70aa7fb5309185405ad75213363@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4b8b74717914afc4754d17e1f6ea68a5.jpg",
              _2x: "cards/3753fb880093e83dc0c41c2960558922@2x.jpg"
            },
            big: {
              _1x: "cards/3753fb880093e83dc0c41c2960558922@2x.jpg",
              _2x: "cards/big/d3f625637b295443a5e45df7242fc6c3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b33113988b9fe53adb1fe4a2319f9bed.jpg",
              _2x: "cards/423fd6a2c7a86c9862b6e5e5d4876a34@2x.jpg"
            },
            big: {
              _1x: "cards/423fd6a2c7a86c9862b6e5e5d4876a34@2x.jpg",
              _2x: "cards/big/c5e7f2b213fe8963e510185ec497c471@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8316d585110d5240023b00824d2b5fe4.jpg",
              _2x: "cards/0f84ab33c8966e77dd169d33f5896f8b@2x.jpg"
            },
            big: {
              _1x: "cards/0f84ab33c8966e77dd169d33f5896f8b@2x.jpg",
              _2x: "cards/big/757a1986c629c037f4b85d52c53127f9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 94,
      name: d("Dark Queen"),
      cls: 4,
      color: 5,
      rarity: 2,
      baseAttack: 25,
      baseHp: 25,
      tag: "bot",
      images: {
        _1x: "cards/f9d66db2fd54bcf38e8eeb4c56d1844e.jpg",
        _2x: "cards/e77b5269ccfc2bf00a3ad6cf149a3e28@2x.jpg"
      },
      big: {
        _1x: "cards/e77b5269ccfc2bf00a3ad6cf149a3e28@2x.jpg",
        _2x: "cards/big/68ae9e6e479a3c994aa33e2b876955be@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/25a5df7d2b45d6e7f4307973b91049fe.png",
        _2x: "cards/icons/3ee5a34ce04d81c7408b8198d06b7ff0@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/cc6efd84d17be782db561ee1f88e13b3.jpg",
              _2x: "cards/c053bc26dbc1d036958f6c81e6a9e726@2x.jpg"
            },
            big: {
              _1x: "cards/c053bc26dbc1d036958f6c81e6a9e726@2x.jpg",
              _2x: "cards/big/583d5b3d43a6a4c29c434477ae433920@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0e8f5e07c9dfe9253791c44ee209596e.jpg",
              _2x: "cards/16edfd9978e07c46435ef635a9d2f0e1@2x.jpg"
            },
            big: {
              _1x: "cards/16edfd9978e07c46435ef635a9d2f0e1@2x.jpg",
              _2x: "cards/big/b0f3ac59b4f489b18863b97a3f8c76d4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b633ee7c6f2cf52babdd0a7f069f6bf2.jpg",
              _2x: "cards/95caa8b9e6d1bb5e7d97f9f31b21313e@2x.jpg"
            },
            big: {
              _1x: "cards/95caa8b9e6d1bb5e7d97f9f31b21313e@2x.jpg",
              _2x: "cards/big/6fb7d3bc8c979a881966da6c6ad6d347@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/00b0a1bf98d62e543827233f76a02e17.jpg",
              _2x: "cards/02077f662563e773fb9a6c7c94d06c61@2x.jpg"
            },
            big: {
              _1x: "cards/02077f662563e773fb9a6c7c94d06c61@2x.jpg",
              _2x: "cards/big/c4ee15f7812210b1ed44e82f6893d7ba@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 95,
      name: d("Waitress"),
      cls: 5,
      color: 4,
      rarity: 2,
      baseAttack: 17.5,
      baseHp: 32.5,
      tag: "bot",
      images: {
        _1x: "cards/8157052ef3318faf1575d097e37c86dd.jpg",
        _2x: "cards/e909f46501fad5f4f9563cb1416226a4@2x.jpg"
      },
      big: {
        _1x: "cards/e909f46501fad5f4f9563cb1416226a4@2x.jpg",
        _2x: "cards/big/ad4e355fa8b9b71fad2e01a329bfa56e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/0fdc8cfb9146d6e73d96fc083e69b276.png",
        _2x: "cards/icons/6b2aca35c9b1f14ea977e2242a4cc9eb@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/472090fafdf6c75fb965ae60d19da8fe.jpg",
              _2x: "cards/e04f81508462dad910d63cea6263120e@2x.jpg"
            },
            big: {
              _1x: "cards/e04f81508462dad910d63cea6263120e@2x.jpg",
              _2x: "cards/big/06b25f0d51ec096136c08dfd399e9ea6@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/57fa24e66299356d8e1d1d27bfa90067.jpg",
              _2x: "cards/812d980d7fd5a73581bf60493b9ff230@2x.jpg"
            },
            big: {
              _1x: "cards/812d980d7fd5a73581bf60493b9ff230@2x.jpg",
              _2x: "cards/big/6449803c0a5b432a6c5166bfa83e43cf@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e819a44ab8de0f8b582cfe6ff24d7fab.jpg",
              _2x: "cards/9c66a539ed68a96c19fab5850ad38cbd@2x.jpg"
            },
            big: {
              _1x: "cards/9c66a539ed68a96c19fab5850ad38cbd@2x.jpg",
              _2x: "cards/big/7603f316267d3cf7d44fc0f715b9a54a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5402e461ee3986ed5276558f181d4992.jpg",
              _2x: "cards/43a7d60518d92c0f2e82336a8e53f47c@2x.jpg"
            },
            big: {
              _1x: "cards/43a7d60518d92c0f2e82336a8e53f47c@2x.jpg",
              _2x: "cards/big/f039d231a197c74d4d99d90a3f95b355@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 96,
      name: d("Elemental Hunter"),
      cls: 1,
      color: 3,
      rarity: 3,
      baseAttack: 17.5,
      baseHp: 32.5,
      tag: "bot",
      images: {
        _1x: "cards/eac7f39d02dfa0d0257f3ca02e478850.jpg",
        _2x: "cards/9057f0fc4f15cf8e3d8a2f9b22a16181@2x.jpg"
      },
      big: {
        _1x: "cards/9057f0fc4f15cf8e3d8a2f9b22a16181@2x.jpg",
        _2x: "cards/big/ae89b383b5a2ef51cc86c8cea43cbea8@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/554ed7e18f7513bb82367b8373ba9010.png",
        _2x: "cards/icons/efc07b78ceed702fc3ed910e1b64396e@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/d5b7513bb07c3e79c418a5343c0fe3f6.jpg",
              _2x: "cards/e0dcfcd3b1d4d883f0e559c695a58043@2x.jpg"
            },
            big: {
              _1x: "cards/e0dcfcd3b1d4d883f0e559c695a58043@2x.jpg",
              _2x: "cards/big/60aed92adb994b483e42f68d03b7ba48@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/04a090f2e0d3d3ea2390ba47a2f4d0e3.jpg",
              _2x: "cards/f3be211cc3461aff9761dff856ebe53b@2x.jpg"
            },
            big: {
              _1x: "cards/f3be211cc3461aff9761dff856ebe53b@2x.jpg",
              _2x: "cards/big/2fd8e24eb814565c3fbaca4b1384d50f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/87e63f97d0c940e79a52b64d2898da8c.jpg",
              _2x: "cards/d150df282c2bfe283cfd84c92d91b50b@2x.jpg"
            },
            big: {
              _1x: "cards/d150df282c2bfe283cfd84c92d91b50b@2x.jpg",
              _2x: "cards/big/261af2eee74da46e6d05fb41db11445a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/37b730ae67662994df64aeb9c78a1848.jpg",
              _2x: "cards/10e9e1719d341dbe9d9a62f612007986@2x.jpg"
            },
            big: {
              _1x: "cards/10e9e1719d341dbe9d9a62f612007986@2x.jpg",
              _2x: "cards/big/0243f245748cf8dc8407bbb8a157fd46@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 97,
      name: d("Savage"),
      cls: 2,
      color: 1,
      rarity: 3,
      baseAttack: 30,
      baseHp: 20,
      tag: "bot",
      cset: 3,
      images: {
        _1x: "cards/1eb574bbedda3cb76ca0c392fbb3302c.jpg",
        _2x: "cards/56c1826363e0a9d88bd1d1cefba63ace@2x.jpg"
      },
      big: {
        _1x: "cards/56c1826363e0a9d88bd1d1cefba63ace@2x.jpg",
        _2x: "cards/big/9979742dcb488dce3f15c4ae428f931d@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/bd5d0ad969edde47420440f402748061.png",
        _2x: "cards/icons/ac38e02fdb97dcc8f4902db44ea9785e@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/aff3eef583d14f24914fe637b4c01f89.jpg",
              _2x: "cards/add722fe17e7afcae172fe7f40d88ab7@2x.jpg"
            },
            big: {
              _1x: "cards/add722fe17e7afcae172fe7f40d88ab7@2x.jpg",
              _2x: "cards/big/728a474666249aa13db7aab1fd7692ab@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/01a90cbe5b5c50c31d33b19842331ed4.jpg",
              _2x: "cards/d96e9733d7a4ffe7604231cf6eacbbec@2x.jpg"
            },
            big: {
              _1x: "cards/d96e9733d7a4ffe7604231cf6eacbbec@2x.jpg",
              _2x: "cards/big/0b94fab6123ff871e62d9e6d474e88de@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e31973acc6f4f9fc01874dcdeb64b453.jpg",
              _2x: "cards/7d8f1ba284ea9942ad161db7dd2bf399@2x.jpg"
            },
            big: {
              _1x: "cards/7d8f1ba284ea9942ad161db7dd2bf399@2x.jpg",
              _2x: "cards/big/3cfa6ae9df72fe003caad5d1d3c5bc3b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/41aece18cb5fdd61fe5a1a1150f97107.jpg",
              _2x: "cards/4a2a4e20d5b178816d934aa39b04b6ff@2x.jpg"
            },
            big: {
              _1x: "cards/4a2a4e20d5b178816d934aa39b04b6ff@2x.jpg",
              _2x: "cards/big/478d80fab1804ce205d33ca195fa940a@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 98,
      name: d("Elven Elder"),
      cls: 3,
      color: 2,
      rarity: 3,
      baseAttack: 17.5,
      baseHp: 32.5,
      tag: "bot",
      images: {
        _1x: "cards/e11393ec12640ec4f70e47a09d133818.jpg",
        _2x: "cards/f525d69ba612230f152eb941b93d164d@2x.jpg"
      },
      big: {
        _1x: "cards/f525d69ba612230f152eb941b93d164d@2x.jpg",
        _2x: "cards/big/aeaadfb27db36ee8540b563d293c7b85@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f619481f8598860821e3e8d4e698c525.png",
        _2x: "cards/icons/6f23023443d657f485de741e54fc3c6b@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/7df7680949a3b7da3dedb0aa6494eb9f.jpg",
              _2x: "cards/cc373c305fb933d61813e94e57aac11f@2x.jpg"
            },
            big: {
              _1x: "cards/cc373c305fb933d61813e94e57aac11f@2x.jpg",
              _2x: "cards/big/51ed31d78eb8d6886d52b655ac4f406a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3d6498a10f3382591b43dd4e4af0d468.jpg",
              _2x: "cards/82e59fd8dc2a9e2eaa8f8dfa7bb72387@2x.jpg"
            },
            big: {
              _1x: "cards/82e59fd8dc2a9e2eaa8f8dfa7bb72387@2x.jpg",
              _2x: "cards/big/c57a7384bd409bf240d3573fcce86bd8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e38e71da5c3898775824c6aef4c14ddf.jpg",
              _2x: "cards/aa1ec3402ec71c3ba8e484a09b248aa0@2x.jpg"
            },
            big: {
              _1x: "cards/aa1ec3402ec71c3ba8e484a09b248aa0@2x.jpg",
              _2x: "cards/big/b61e41320d4e3259bb7b07a6389e6149@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7ee4bb7dbc9c8e54f8fe352104a1afa8.jpg",
              _2x: "cards/52c65718a407aa6cdf8f4249890b7349@2x.jpg"
            },
            big: {
              _1x: "cards/52c65718a407aa6cdf8f4249890b7349@2x.jpg",
              _2x: "cards/big/e1ca1e0b0009fd648331577343f95ecf@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 99,
      name: d("Dark Priestress"),
      cls: 4,
      color: 5,
      rarity: 3,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      images: {
        _1x: "cards/0b43c9f1b3da34583673321e292326a6.jpg",
        _2x: "cards/b647c772b2dd02e6516d8a5c29c53547@2x.jpg"
      },
      big: {
        _1x: "cards/b647c772b2dd02e6516d8a5c29c53547@2x.jpg",
        _2x: "cards/big/f08882b1f410e6bed13629a6e67c1e47@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f027bb531d49d9730be7192b2a30654b.png",
        _2x: "cards/icons/dcf9c4a94bdbd3c395874b4a56072a85@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/3d8526e9a661faf368b462a90b8624a5.jpg",
              _2x: "cards/94433a068129cfc3aa93e8579112f003@2x.jpg"
            },
            big: {
              _1x: "cards/94433a068129cfc3aa93e8579112f003@2x.jpg",
              _2x: "cards/big/995ba9d35ed39064c2d86b3be298337b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c509d277ef353ca95e9a1a498903d1c4.jpg",
              _2x: "cards/d745cefca03d0f3e2f7cab509129a13f@2x.jpg"
            },
            big: {
              _1x: "cards/d745cefca03d0f3e2f7cab509129a13f@2x.jpg",
              _2x: "cards/big/7f8e6f406f8977d71dd36dc413bae757@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d948c8ca4d1f6ecae546066029ce09ce.jpg",
              _2x: "cards/564d02fae2c504b2e9fec5517e6b3577@2x.jpg"
            },
            big: {
              _1x: "cards/564d02fae2c504b2e9fec5517e6b3577@2x.jpg",
              _2x: "cards/big/a7e2fc9ea3f7bf9e9630118121e1dca8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f6639cb83d4d249652c0eb845f5c5c9b.jpg",
              _2x: "cards/6b05f32ff3e8fe4daa592a07d56c6987@2x.jpg"
            },
            big: {
              _1x: "cards/6b05f32ff3e8fe4daa592a07d56c6987@2x.jpg",
              _2x: "cards/big/078c8447c278a869f58e0123e7fa7fad@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 101,
      name: d("Light Angel"),
      cls: 5,
      color: 4,
      rarity: 3,
      baseAttack: 15,
      baseHp: 35,
      tag: "bot",
      images: {
        _1x: "cards/bcee20597c24919ee76d0a72720665ad.jpg",
        _2x: "cards/b33be8caea93f1bdc25e6b16c41cc61c@2x.jpg"
      },
      big: {
        _1x: "cards/b33be8caea93f1bdc25e6b16c41cc61c@2x.jpg",
        _2x: "cards/big/1d8188ba4c0042601556ef98c1cb68b0@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/7bedf385c9ef8bf1c7a8489f32a079d0.png",
        _2x: "cards/icons/4a48f1d2c648bff180a68cab1ea62306@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f477837ba8851f440e9aab0b322cea5c.jpg",
              _2x: "cards/aeb25c73f220bd0ac26b868a760b1341@2x.jpg"
            },
            big: {
              _1x: "cards/aeb25c73f220bd0ac26b868a760b1341@2x.jpg",
              _2x: "cards/big/9b1a6475ad3eafd7034507dc85fb94d0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/713ab15d778856dd8c1fc7425c242d4d.jpg",
              _2x: "cards/df16dfb914de8719c0782b2c174681a8@2x.jpg"
            },
            big: {
              _1x: "cards/df16dfb914de8719c0782b2c174681a8@2x.jpg",
              _2x: "cards/big/e13fed1e92ad1add25d9ce99a8185b40@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a8c7e8434727c8614e93ff583fd77e06.jpg",
              _2x: "cards/821fc1ff314dcb125ffbbbe49674ff20@2x.jpg"
            },
            big: {
              _1x: "cards/821fc1ff314dcb125ffbbbe49674ff20@2x.jpg",
              _2x: "cards/big/9e130ae89f6152132443dfba58c9a45f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cc330fc1d44ebe10439e5eef11a55daa.jpg",
              _2x: "cards/f3d5858c1d79cebbff22e51941326411@2x.jpg"
            },
            big: {
              _1x: "cards/f3d5858c1d79cebbff22e51941326411@2x.jpg",
              _2x: "cards/big/2be67b8dfe973947a06cec5038d54aed@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 102,
      name: d("Fairy"),
      cls: 1,
      color: 3,
      rarity: 3,
      baseAttack: 25,
      baseHp: 25,
      tag: "bot",
      cset: 1,
      images: {
        _1x: "cards/0e2de49a33cf6797e4d94e273445491c.jpg",
        _2x: "cards/2586b798c161a3d41cbf0cb2e16ca420@2x.jpg"
      },
      big: {
        _1x: "cards/2586b798c161a3d41cbf0cb2e16ca420@2x.jpg",
        _2x: "cards/big/e575fddb44e12a5997e04f3a47d7feaf@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/e15c7e1428fc147b1bf69d18918bf604.png",
        _2x: "cards/icons/5fb655a069671e1ec88c0125a1602ca3@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c7d6951c1fa648f22471a65ad990d1e8.jpg",
              _2x: "cards/f0a83c42e695e70de931c413df82115d@2x.jpg"
            },
            big: {
              _1x: "cards/f0a83c42e695e70de931c413df82115d@2x.jpg",
              _2x: "cards/big/9a931525d06c18acaa828e13d55387c5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bb198c0e04a1a815fa940e1df315441c.jpg",
              _2x: "cards/7173c3c11b976004954cd32591b38bab@2x.jpg"
            },
            big: {
              _1x: "cards/7173c3c11b976004954cd32591b38bab@2x.jpg",
              _2x: "cards/big/a2048c77f72350ace5f66b7b4afaca38@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7ccf50473884af3ae30b6b067280fb89.jpg",
              _2x: "cards/42483d3efec61ba6cc8e931aac194af6@2x.jpg"
            },
            big: {
              _1x: "cards/42483d3efec61ba6cc8e931aac194af6@2x.jpg",
              _2x: "cards/big/a5e40a16debcb014da6f5386e2607d59@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f507ca4a4156a6a3fd1b204fbe9fe2e4.jpg",
              _2x: "cards/b519be829e4bc91dc26f98acadd12e07@2x.jpg"
            },
            big: {
              _1x: "cards/b519be829e4bc91dc26f98acadd12e07@2x.jpg",
              _2x: "cards/big/cd7e093d453cab8d915723849e599647@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 103,
      name: d("Inquisitor"),
      cls: 2,
      color: 1,
      rarity: 3,
      baseAttack: 35,
      baseHp: 15,
      tag: "bot",
      cset: 3,
      images: {
        _1x: "cards/c2636aaa719e2b79ab2e51eb84712c85.jpg",
        _2x: "cards/eaa3ad0963700cac39ec48e90f049be4@2x.jpg"
      },
      big: {
        _1x: "cards/eaa3ad0963700cac39ec48e90f049be4@2x.jpg",
        _2x: "cards/big/191deb8ae86d2e5748b0d69733e0bf81@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/9c0fda6e4259de890e3d78260d9fdd81.png",
        _2x: "cards/icons/2487aac1777e88bb0cd580a01123b2df@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/1638c5a87ee10b29200241df3208cafb.jpg",
              _2x: "cards/4960a1b3a4daf65036023be798fcc0bc@2x.jpg"
            },
            big: {
              _1x: "cards/4960a1b3a4daf65036023be798fcc0bc@2x.jpg",
              _2x: "cards/big/98c9ffcd7df26dce40b2f2a6babc5939@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/63d19bc0ba6c0202b48ab90ce0aa1767.jpg",
              _2x: "cards/dc0c2e5fcb5da0584d9089025d004c02@2x.jpg"
            },
            big: {
              _1x: "cards/dc0c2e5fcb5da0584d9089025d004c02@2x.jpg",
              _2x: "cards/big/53fb1bb5cf8f8279fade4887b1f7b5bd@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c522099ee15086f65fc1d04861a039c3.jpg",
              _2x: "cards/03e7d5b0b9a823bba23b06500264a953@2x.jpg"
            },
            big: {
              _1x: "cards/03e7d5b0b9a823bba23b06500264a953@2x.jpg",
              _2x: "cards/big/19ee6d07532e6ec7bf86c7685d9b206b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/448c4ae8f5837aca1ecd83544dd3401d.jpg",
              _2x: "cards/a4b0900da81a154a2cfd9d9c61d158e9@2x.jpg"
            },
            big: {
              _1x: "cards/a4b0900da81a154a2cfd9d9c61d158e9@2x.jpg",
              _2x: "cards/big/74655af94e435124a8dfcd43f7e68eed@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 104,
      name: d("Alchemist"),
      cls: 3,
      color: 2,
      rarity: 3,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      images: {
        _1x: "cards/bea2737255af155ef7f2ae7e693f7fde.jpg",
        _2x: "cards/af3e3375597a0f4d1c0c6a98d32cc888@2x.jpg"
      },
      big: {
        _1x: "cards/af3e3375597a0f4d1c0c6a98d32cc888@2x.jpg",
        _2x: "cards/big/30afb719f027cf51260b162b92c40ae9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/82bac19959bd0025b4fe093e9cdd66e2.png",
        _2x: "cards/icons/68346ca7ca7619fcc2eb2a6c9cc02e00@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/b54283c8f21d0ca1751ab163d5015b44.jpg",
              _2x: "cards/c22c1c20e71eef1be396aaa09182fd9e@2x.jpg"
            },
            big: {
              _1x: "cards/c22c1c20e71eef1be396aaa09182fd9e@2x.jpg",
              _2x: "cards/big/e39aba8c85beda44622f8b4090221251@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/dbc55267aeb4bbb066dd7cae1c3f5783.jpg",
              _2x: "cards/28b0db830b2cd15b5ef139874c498024@2x.jpg"
            },
            big: {
              _1x: "cards/28b0db830b2cd15b5ef139874c498024@2x.jpg",
              _2x: "cards/big/9db28db0763ec0b5905e8e4daef6bbc1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f2b159fc30fb8c4d1a0c4b8e041beb62.jpg",
              _2x: "cards/0e1298b328eb409614c1acd4dcdd3373@2x.jpg"
            },
            big: {
              _1x: "cards/0e1298b328eb409614c1acd4dcdd3373@2x.jpg",
              _2x: "cards/big/2d7fe8e0d1c542c829aa7786ba7062c2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/24286903892f81a5ecb89c01fb57e414.jpg",
              _2x: "cards/30e658e77240a8dba54d688c7ba56697@2x.jpg"
            },
            big: {
              _1x: "cards/30e658e77240a8dba54d688c7ba56697@2x.jpg",
              _2x: "cards/big/f7a760895eef300f9860097cb8ba6089@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 105,
      name: d("Vampire"),
      cls: 4,
      color: 5,
      rarity: 3,
      baseAttack: 12.5,
      baseHp: 37.5,
      tag: "bot",
      images: {
        _1x: "cards/7c48a184f52ae3c090da263d01e873d4.jpg",
        _2x: "cards/f2cd7ee8c50f72be95776437d958c25b@2x.jpg"
      },
      big: {
        _1x: "cards/f2cd7ee8c50f72be95776437d958c25b@2x.jpg",
        _2x: "cards/big/7206a267032e788146e02e364cc1c075@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/1faf045291ead98f7090dc4c2b966c4a.png",
        _2x: "cards/icons/883d09dab08f9fbf219e5cc006afd893@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/b98a1488d48f5533b1f43ca92507bca4.jpg",
              _2x: "cards/d36c0087171e8375f2de2164b32dec01@2x.jpg"
            },
            big: {
              _1x: "cards/d36c0087171e8375f2de2164b32dec01@2x.jpg",
              _2x: "cards/big/dbfaf4715afcfba634889cf366c6d571@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7069794c48ce98d960085e2343bd4511.jpg",
              _2x: "cards/e7d345862c5f23fab706870a0538ea10@2x.jpg"
            },
            big: {
              _1x: "cards/e7d345862c5f23fab706870a0538ea10@2x.jpg",
              _2x: "cards/big/e81e43b882466afe1368f78f81fb1c10@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/662d060747728a87ed14cfc22a4c080f.jpg",
              _2x: "cards/fe02a0db4e2b21ad5434786a839ac92e@2x.jpg"
            },
            big: {
              _1x: "cards/fe02a0db4e2b21ad5434786a839ac92e@2x.jpg",
              _2x: "cards/big/b9ad15dcc5fb272e5fb91017b7a4422a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e08e4b7497b525ab8b77137dde9b21d2.jpg",
              _2x: "cards/de69efc2b9debc430ea552c27a9ef5bd@2x.jpg"
            },
            big: {
              _1x: "cards/de69efc2b9debc430ea552c27a9ef5bd@2x.jpg",
              _2x: "cards/big/07700cf37bfc58d7b138e7f3c914c8a0@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 106,
      name: d("Driada"),
      cls: 5,
      color: 4,
      rarity: 3,
      baseAttack: 22.5,
      baseHp: 27.5,
      tag: "bot",
      images: {
        _1x: "cards/ceb67967fe70b6a622672c101e94390c.jpg",
        _2x: "cards/31e409c24527ab27fc90d0cb73f02a17@2x.jpg"
      },
      big: {
        _1x: "cards/31e409c24527ab27fc90d0cb73f02a17@2x.jpg",
        _2x: "cards/big/1fe3483e4102c1f4e7b3321d233971ac@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/44c34f34e2f617923e187161ebab9acd.png",
        _2x: "cards/icons/6635264330ea3ede90413a93cfe35a9c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/3b1f08380c94e687ea464bd4ef83316f.jpg",
              _2x: "cards/1cb8346aed38c7f0b51c8f8efb393933@2x.jpg"
            },
            big: {
              _1x: "cards/1cb8346aed38c7f0b51c8f8efb393933@2x.jpg",
              _2x: "cards/big/3f7da21bcdd0a333b0bdecc644f841ed@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6f4e8aa793b254e73ce7c8fd6265a7a2.jpg",
              _2x: "cards/622216c12a4a4c07df2a644a66714fa0@2x.jpg"
            },
            big: {
              _1x: "cards/622216c12a4a4c07df2a644a66714fa0@2x.jpg",
              _2x: "cards/big/2bf816891eab0d944b6c01b152f11e18@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8443dba4332ea5d3b8d8a9b7d26063ff.jpg",
              _2x: "cards/38db6328fd57b5341967c2f608b9a56a@2x.jpg"
            },
            big: {
              _1x: "cards/38db6328fd57b5341967c2f608b9a56a@2x.jpg",
              _2x: "cards/big/f611807e2752add4810296ba941287df@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/27d659db9278a87a04a54f0dd0cf777a.jpg",
              _2x: "cards/46a5f711648f3092d2675ae0ce2bd05a@2x.jpg"
            },
            big: {
              _1x: "cards/46a5f711648f3092d2675ae0ce2bd05a@2x.jpg",
              _2x: "cards/big/731e59b092eb21541fc59b85090508ff@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 108,
      name: d("Red Hood"),
      cls: 1,
      color: 1,
      rarity: 4,
      baseAttack: 15,
      baseHp: 35,
      tag: "bot",
      images: {
        _1x: "cards/27c880e1dd56b33d7dcb9e5429e79027.jpg",
        _2x: "cards/116d9ff7a7ef019baaa0ea86904264af@2x.jpg"
      },
      big: {
        _1x: "cards/116d9ff7a7ef019baaa0ea86904264af@2x.jpg",
        _2x: "cards/big/d5c00307ddde3791dc634daaaa0be58a@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/c31c76826aa059bf1f9d73739a46ddda.png",
        _2x: "cards/icons/4ad868334efbdfe0120c0ed54a83f6e6@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/d461e4b4f86607fd85983d92c7bc81a8.jpg",
              _2x: "cards/fc7283d1b3d656a13bf8db75a954dc81@2x.jpg"
            },
            big: {
              _1x: "cards/fc7283d1b3d656a13bf8db75a954dc81@2x.jpg",
              _2x: "cards/big/dce5a615e9ddd426cfd3b46456db8f91@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a057403c79c42c76f8332c0167d72c78.jpg",
              _2x: "cards/be7a4b82ec5a4c38201accdfdb53d43e@2x.jpg"
            },
            big: {
              _1x: "cards/be7a4b82ec5a4c38201accdfdb53d43e@2x.jpg",
              _2x: "cards/big/54508d2c1db7ad1b991f04c746f8c3a9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cfb673470553ae745c7594d7fd5fab57.jpg",
              _2x: "cards/d7822af870862e3c252c289718b845af@2x.jpg"
            },
            big: {
              _1x: "cards/d7822af870862e3c252c289718b845af@2x.jpg",
              _2x: "cards/big/c5c3a72beb9d90f247eed5611a9290ca@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bccc82ef51e6daf6882d5afd0f85bb29.jpg",
              _2x: "cards/539c4b990afa20ff2e7a97376f255478@2x.jpg"
            },
            big: {
              _1x: "cards/539c4b990afa20ff2e7a97376f255478@2x.jpg",
              _2x: "cards/big/b42888771fb95a0cb0d62ab1a6ff7183@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 109,
      name: d("Plague Doctor"),
      cls: 2,
      color: 2,
      rarity: 4,
      baseAttack: 22.5,
      baseHp: 27.5,
      tag: "bot",
      cset: 2,
      images: {
        _1x: "cards/da601b70eb35052924fdb7d9a90a121a.jpg",
        _2x: "cards/bdae28a52db4a12417551547af329f21@2x.jpg"
      },
      big: {
        _1x: "cards/bdae28a52db4a12417551547af329f21@2x.jpg",
        _2x: "cards/big/b978a3548dd32b420bbd09c1a0587b45@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/a550ef3d1ca5ba6cbf98bb8fa9cff837.png",
        _2x: "cards/icons/c4f0060ef614047953ba1dac632af372@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/22aedaea31af4bcf32429e341aea4e7e.jpg",
              _2x: "cards/ccc0e3d5b075c1820866bcf1ffe5d823@2x.jpg"
            },
            big: {
              _1x: "cards/ccc0e3d5b075c1820866bcf1ffe5d823@2x.jpg",
              _2x: "cards/big/4d476b721039c5a3748f94bdeb0470b0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/da8faf749491274e96ca2330080b9623.jpg",
              _2x: "cards/cb08899c31d205aa4bbe0b6f5743736d@2x.jpg"
            },
            big: {
              _1x: "cards/cb08899c31d205aa4bbe0b6f5743736d@2x.jpg",
              _2x: "cards/big/dfd64bfaa626392c266239d709f83dbd@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/dee89495eda94a6ea1a969e5efddc0e6.jpg",
              _2x: "cards/6adafc15cea6f3c2186c99d5824a21ee@2x.jpg"
            },
            big: {
              _1x: "cards/6adafc15cea6f3c2186c99d5824a21ee@2x.jpg",
              _2x: "cards/big/a0d586ba2c7febe7bca48539b79afe0f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c3b84088c55e5385cf2cae9d55075e62.jpg",
              _2x: "cards/7cd888ef2dfb69eeb43d46dd9fcc3c47@2x.jpg"
            },
            big: {
              _1x: "cards/7cd888ef2dfb69eeb43d46dd9fcc3c47@2x.jpg",
              _2x: "cards/big/7f4bf785d5f7f37af752d4f510626d3d@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 110,
      name: d("Undead Queen"),
      cls: 3,
      color: 5,
      rarity: 4,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      cset: 3,
      images: {
        _1x: "cards/d0baec170cb3a8e69d0000b09e9d1eee.jpg",
        _2x: "cards/6b4d85345357b219826057fd2f9c4c08@2x.jpg"
      },
      big: {
        _1x: "cards/6b4d85345357b219826057fd2f9c4c08@2x.jpg",
        _2x: "cards/big/cac9593b795f787b4dd1b12410ead93b@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/be88fe2cfebf2fff86f7b1619c5a37ed.png",
        _2x: "cards/icons/5846ba36ed6e2275987cf183748b8863@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f39db382c241ddb281c227c2b20dd0a0.jpg",
              _2x: "cards/8831a9ad14a71c436e60e43013374b1e@2x.jpg"
            },
            big: {
              _1x: "cards/8831a9ad14a71c436e60e43013374b1e@2x.jpg",
              _2x: "cards/big/e40e889632a8e6c3c2b06aca867978f4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8bba0da4e3494e22ba4eff6f6151e40e.jpg",
              _2x: "cards/bbefaaaca7ab535a28c3f96909ddb5da@2x.jpg"
            },
            big: {
              _1x: "cards/bbefaaaca7ab535a28c3f96909ddb5da@2x.jpg",
              _2x: "cards/big/70a37d792fe708f475b329eea8efe23e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/149fca6e4b7311e998c316b16f412261.jpg",
              _2x: "cards/38068ebf8bfb52a132efae9b39fff438@2x.jpg"
            },
            big: {
              _1x: "cards/38068ebf8bfb52a132efae9b39fff438@2x.jpg",
              _2x: "cards/big/686cdc924d412a9f79ceeb506933ff22@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/87dfb95ab31d3cc25a2b87a57e4b6b74.jpg",
              _2x: "cards/daf9ef2717f7a0e4ed5954edd03e45ef@2x.jpg"
            },
            big: {
              _1x: "cards/daf9ef2717f7a0e4ed5954edd03e45ef@2x.jpg",
              _2x: "cards/big/771339f03340acad5b03c8b2b6cc2f74@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 111,
      name: d("Cultist"),
      cls: 4,
      color: 4,
      rarity: 4,
      baseAttack: 20,
      baseHp: 30,
      tag: "bot",
      images: {
        _1x: "cards/045c1d73837c176877880d1e6f62da6b.jpg",
        _2x: "cards/5a818a233922fff8a2964c08104d00d1@2x.jpg"
      },
      big: {
        _1x: "cards/5a818a233922fff8a2964c08104d00d1@2x.jpg",
        _2x: "cards/big/1b2c668c9c074c88f0fac9108171bfe6@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/e238b6c62c97a49a0c71d9d6e7bbc0df.png",
        _2x: "cards/icons/b63948c0917eaa0b5392b648cc092244@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c448e2df8770768b9c5c906a5523f71d.jpg",
              _2x: "cards/1de09ebaca1efe219060df3f1c242a84@2x.jpg"
            },
            big: {
              _1x: "cards/1de09ebaca1efe219060df3f1c242a84@2x.jpg",
              _2x: "cards/big/0425612332462e6051faf103ea677960@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bdc56ce975ed89d7cb45cf3a5988831f.jpg",
              _2x: "cards/4206ac74fc71ad3847d07996928b919f@2x.jpg"
            },
            big: {
              _1x: "cards/4206ac74fc71ad3847d07996928b919f@2x.jpg",
              _2x: "cards/big/3a3d4c650a31fadca32a43ca0f6c5f1f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/70310797457d1939b2ef34226e968aca.jpg",
              _2x: "cards/49748abcae29e79873d2486f1d65d380@2x.jpg"
            },
            big: {
              _1x: "cards/49748abcae29e79873d2486f1d65d380@2x.jpg",
              _2x: "cards/big/f049ff7ed3066addb0cdde0fd0fc7434@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/dbb76178c744ae8c2d449181af19ade6.jpg",
              _2x: "cards/6f61c1c54702a89d020b9ec2d565a402@2x.jpg"
            },
            big: {
              _1x: "cards/6f61c1c54702a89d020b9ec2d565a402@2x.jpg",
              _2x: "cards/big/57d28bf5e65e3f4de96c1fefb4790886@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 112,
      name: d("Amazon"),
      cls: 5,
      color: 3,
      rarity: 4,
      baseAttack: 25,
      baseHp: 25,
      tag: "bot",
      cset: 1,
      images: {
        _1x: "cards/0ab9940474481275ba02d2952fbfac20.jpg",
        _2x: "cards/dab0817ea91cffe2f0c80eb2cf3d3e26@2x.jpg"
      },
      big: {
        _1x: "cards/dab0817ea91cffe2f0c80eb2cf3d3e26@2x.jpg",
        _2x: "cards/big/272a5b945bc42a9025dd695e95c87079@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/edb30087c3f0273411170750d4db7bce.png",
        _2x: "cards/icons/1953ae7590ce560083ccb1c50b5f7aa0@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/fcff24d1b234c639a86c19452ea38c12.jpg",
              _2x: "cards/312809c2cc6b2aa3b9d79ff967841dc6@2x.jpg"
            },
            big: {
              _1x: "cards/312809c2cc6b2aa3b9d79ff967841dc6@2x.jpg",
              _2x: "cards/big/2b0b7654de1770ddbbda1e9307f90a7b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/63ceb123aef7e0b07388a7a8c13afe0f.jpg",
              _2x: "cards/ee1684f15259ce71e968bd598015b50c@2x.jpg"
            },
            big: {
              _1x: "cards/ee1684f15259ce71e968bd598015b50c@2x.jpg",
              _2x: "cards/big/8a2b36fb5992f00097a8e365fbd29e93@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9f01d4d0eb918b91452d8275ab2c827e.jpg",
              _2x: "cards/8942efdd0c4ac49a7e74cb13d6a20e34@2x.jpg"
            },
            big: {
              _1x: "cards/8942efdd0c4ac49a7e74cb13d6a20e34@2x.jpg",
              _2x: "cards/big/f744fd927f03f28ebb85b88832d10c91@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/be594aadd1a3a1b7ba9d87fc38c053cc.jpg",
              _2x: "cards/7e5356acfafac1deb63fd232f5bbccde@2x.jpg"
            },
            big: {
              _1x: "cards/7e5356acfafac1deb63fd232f5bbccde@2x.jpg",
              _2x: "cards/big/fb5cddb6bbdd3bbe239352a30fe41992@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 113,
      name: d("Lady Storms"),
      cls: 1,
      color: 3,
      rarity: 2,
      baseAttack: 75,
      baseHp: 50,
      tag: "promo",
      images: {
        _1x: "cards/028ad92790c4f2f2a69b3fd22bbf0c2f.jpg",
        _2x: "cards/084a95393e70d7e62c6cb41ab08a685e@2x.jpg"
      },
      big: {
        _1x: "cards/084a95393e70d7e62c6cb41ab08a685e@2x.jpg",
        _2x: "cards/big/ff1538072b740cf8799af81533f1f248@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/6e46461f68115681f1db702fd40d6175.png",
        _2x: "cards/icons/5db91fb1ebcd9455dbbc61dbfe55a136@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c19cd9c4d6fabeefa44afb3133171ea7.jpg",
              _2x: "cards/305c163b0ce77be5a993bdaa896dab88@2x.jpg"
            },
            big: {
              _1x: "cards/305c163b0ce77be5a993bdaa896dab88@2x.jpg",
              _2x: "cards/big/437eb99259ca89cd6c07fef6c9c3b229@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1eba63577411f363b0a08fe1d2045945.jpg",
              _2x: "cards/f01c225617de4ba0c62f07f93607838a@2x.jpg"
            },
            big: {
              _1x: "cards/f01c225617de4ba0c62f07f93607838a@2x.jpg",
              _2x: "cards/big/30673974dc18a678832475710bba36c9@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ebb60b4bfef7a025bb20669babdba822.jpg",
              _2x: "cards/af730a24bd0c5d94246ad2c80cdfe9f6@2x.jpg"
            },
            big: {
              _1x: "cards/af730a24bd0c5d94246ad2c80cdfe9f6@2x.jpg",
              _2x: "cards/big/85b7f7282c67a55d20a1b1b2bfb534b5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2570ea27c0c248e232948cb2829f96da.jpg",
              _2x: "cards/4c40c899c42054c37834e65bd00eaa7d@2x.jpg"
            },
            big: {
              _1x: "cards/4c40c899c42054c37834e65bd00eaa7d@2x.jpg",
              _2x: "cards/big/180b17cf385a1d01ea96a1ad3e9f12cb@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 114,
      name: d("Pharaoh"),
      cls: 2,
      color: 5,
      rarity: 3,
      baseAttack: 60,
      baseHp: 90,
      tag: "promo",
      images: {
        _1x: "cards/4b70ae0fcf836def18bfac7387b304f2.jpg",
        _2x: "cards/f44d450be30d436b48ed0138f5f269f6@2x.jpg"
      },
      big: {
        _1x: "cards/f44d450be30d436b48ed0138f5f269f6@2x.jpg",
        _2x: "cards/big/4a95039d90ef30166931ee3f92c22894@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/e588c8de46847342a92102f58241fbbb.png",
        _2x: "cards/icons/f536efec86426c6f281fd6d09c1dced1@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0f8025f23cf89f9aeab1bf61d196e380.jpg",
              _2x: "cards/931306a2e3d09662f0d41e6885fb0487@2x.jpg"
            },
            big: {
              _1x: "cards/931306a2e3d09662f0d41e6885fb0487@2x.jpg",
              _2x: "cards/big/840fa76efa18e09875cb2b39f765b699@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/54bc4a09528db7d69a64a93e2d689fa5.jpg",
              _2x: "cards/07d0b4c1bf98d6e49137f6d4c4800cef@2x.jpg"
            },
            big: {
              _1x: "cards/07d0b4c1bf98d6e49137f6d4c4800cef@2x.jpg",
              _2x: "cards/big/da95fe29cdfc601d5f8276f7a39c8157@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1886f0fd721474cf1b20740ec141b6ef.jpg",
              _2x: "cards/c7308802e8fdca6efc0093745fe5fd19@2x.jpg"
            },
            big: {
              _1x: "cards/c7308802e8fdca6efc0093745fe5fd19@2x.jpg",
              _2x: "cards/big/7252ad587feb637bc8cae6c480c04f62@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4b4fb7c5ad0ccafbc88eb9411187ac83.jpg",
              _2x: "cards/6b65f790ae92834b369dccc04bb1afda@2x.jpg"
            },
            big: {
              _1x: "cards/6b65f790ae92834b369dccc04bb1afda@2x.jpg",
              _2x: "cards/big/4d35db29f52047b0193460877b277d25@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 115,
      name: d("Geisha"),
      cls: 3,
      color: 4,
      rarity: 3,
      baseAttack: 75,
      baseHp: 75,
      tag: "promo",
      images: {
        _1x: "cards/aa318ebed6b7c1bc5217d7735294aa74.jpg",
        _2x: "cards/adcab0753c4c94a346b3af1c94fe891f@2x.jpg"
      },
      big: {
        _1x: "cards/adcab0753c4c94a346b3af1c94fe891f@2x.jpg",
        _2x: "cards/big/a8fe4f731cc3be3ace8b7d060404527d@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/92fb87372c3c45c4726603449e179573.png",
        _2x: "cards/icons/18eba50edbf69733e0977c84b9522557@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/03c19113b9b14e9bf2c9965b670281d0.jpg",
              _2x: "cards/b7148ce52766c8908590f55743566c77@2x.jpg"
            },
            big: {
              _1x: "cards/b7148ce52766c8908590f55743566c77@2x.jpg",
              _2x: "cards/big/f25aa8a18987863f828e32943766adb8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/9cf03be6f6568f7679574e234402c1c8.jpg",
              _2x: "cards/b05780ad623ff524b85dc91281a78fc8@2x.jpg"
            },
            big: {
              _1x: "cards/b05780ad623ff524b85dc91281a78fc8@2x.jpg",
              _2x: "cards/big/da428b3d0b250db739e9c9ee8886f26c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ae8726b987f45bfd92a325cabc7ed26a.jpg",
              _2x: "cards/75b9bfd7d1da0d0ec2474c5de7781f8b@2x.jpg"
            },
            big: {
              _1x: "cards/75b9bfd7d1da0d0ec2474c5de7781f8b@2x.jpg",
              _2x: "cards/big/9f9e596c14b8531628e9cb071b3e57ea@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8d04386027ceafb52317a6b41e7af653.jpg",
              _2x: "cards/54efe519a312c5b3b055e96963806a0a@2x.jpg"
            },
            big: {
              _1x: "cards/54efe519a312c5b3b055e96963806a0a@2x.jpg",
              _2x: "cards/big/f8c7e7d3d18df7f1763ed2194cd2aa1f@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 116,
      name: d("Lady Lakes"),
      cls: 4,
      color: 3,
      rarity: 3,
      baseAttack: 75,
      baseHp: 75,
      tag: "promo",
      images: {
        _1x: "cards/6968aeebee083134dd0311bc959bc2c4.jpg",
        _2x: "cards/ca7b2686363b3b77275e62cc4c40c4b1@2x.jpg"
      },
      big: {
        _1x: "cards/ca7b2686363b3b77275e62cc4c40c4b1@2x.jpg",
        _2x: "cards/big/45aca76fe9dc2851c94402fcbde16ebc@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/1bfe6aff85337eb0b93658a4488db743.png",
        _2x: "cards/icons/2ae202f00d92ceb895f8dad67252e699@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/7fc2f0d96e8034c06b81609de9aa918b.jpg",
              _2x: "cards/565e3747e02a7eb6412fefeb273ee1d6@2x.jpg"
            },
            big: {
              _1x: "cards/565e3747e02a7eb6412fefeb273ee1d6@2x.jpg",
              _2x: "cards/big/da5b15317b86d12ea7f5aea18a11ec89@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0457a8b684d6af824dfac7a09c439b52.jpg",
              _2x: "cards/2c71257aa89028f2223e934ea1c614ce@2x.jpg"
            },
            big: {
              _1x: "cards/2c71257aa89028f2223e934ea1c614ce@2x.jpg",
              _2x: "cards/big/e634a4989feac693d894d734bc7f1b4a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a2b652bc8348cfc3dc4f225e868608b5.jpg",
              _2x: "cards/019cdf477e2962ff4da652af114dee0f@2x.jpg"
            },
            big: {
              _1x: "cards/019cdf477e2962ff4da652af114dee0f@2x.jpg",
              _2x: "cards/big/5617a61386aace7ed377aa3cb7387cc8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/07ef8bac720304f03c4d08fc1275f976.jpg",
              _2x: "cards/4b46d40ec3d3a64d66d7be85ed92a213@2x.jpg"
            },
            big: {
              _1x: "cards/4b46d40ec3d3a64d66d7be85ed92a213@2x.jpg",
              _2x: "cards/big/04d5fa513417f4560e0a08f4a96245dc@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 117,
      name: d("Overseer"),
      cls: 5,
      color: 5,
      rarity: 2,
      baseAttack: 81.25,
      baseHp: 43.75,
      tag: "promo",
      images: {
        _1x: "cards/1b6d30676abcb87d174d46b6ca23a722.jpg",
        _2x: "cards/1f8fd681304bac2cd12b4b7461a921c6@2x.jpg"
      },
      big: {
        _1x: "cards/1f8fd681304bac2cd12b4b7461a921c6@2x.jpg",
        _2x: "cards/big/dc9d4cedf6e754d4e5eadeb2b144bafa@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/ae44340d758a0fd286a82edcae1fab42.png",
        _2x: "cards/icons/ad1e2c3d47fb8f3a42de1b3afc1a18fa@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/8fa66fb865b761540f9b6253145a9061.jpg",
              _2x: "cards/049a03953cc18c23db5448c18e80d2df@2x.jpg"
            },
            big: {
              _1x: "cards/049a03953cc18c23db5448c18e80d2df@2x.jpg",
              _2x: "cards/big/a03d8c68a701373c7237a95b6f46030d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/61850b001019cd93db5a6012fcf080b5.jpg",
              _2x: "cards/7d6d4d2663d2dff0ea52e72d06990a65@2x.jpg"
            },
            big: {
              _1x: "cards/7d6d4d2663d2dff0ea52e72d06990a65@2x.jpg",
              _2x: "cards/big/1bff2968a454a3a20f8e839bcd83676b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/422b3d2639df542541b714780c8c302d.jpg",
              _2x: "cards/7815be510037f38281c2bb741ebfa635@2x.jpg"
            },
            big: {
              _1x: "cards/7815be510037f38281c2bb741ebfa635@2x.jpg",
              _2x: "cards/big/bbd66ecbab76805314ea3ba70d6c7b1e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3c29f3c2706175d10e77929478f3a417.jpg",
              _2x: "cards/c1cc9d01187c0d2b6baa5dd243b40824@2x.jpg"
            },
            big: {
              _1x: "cards/c1cc9d01187c0d2b6baa5dd243b40824@2x.jpg",
              _2x: "cards/big/d822fa79e4be2dd13ad0976690362057@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 118,
      name: d("Lady of Fire"),
      cls: 1,
      color: 1,
      rarity: 3,
      baseAttack: 90,
      baseHp: 60,
      tag: "promo",
      images: {
        _1x: "cards/2afd7f1bbf1778f64bba54919833828c.jpg",
        _2x: "cards/e296263e8201e5599f61d27f45d8379a@2x.jpg"
      },
      big: {
        _1x: "cards/e296263e8201e5599f61d27f45d8379a@2x.jpg",
        _2x: "cards/big/9310103613cddf0714e144dc3a0bb812@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/3ce3d9c13989a24ffff605e50ab70d3c.png",
        _2x: "cards/icons/cb86ecdf8e2739de8587ac99f7ea07af@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/72dc4415b549b7d4de5beeb7cd725ced.jpg",
              _2x: "cards/f4112b3ef20ba3d9d232dbc3a974ee1f@2x.jpg"
            },
            big: {
              _1x: "cards/f4112b3ef20ba3d9d232dbc3a974ee1f@2x.jpg",
              _2x: "cards/big/0ea0ba7e9ef8f4cc373d6ae183931c69@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/70c675557ea4b9d3c827d926db6ae06f.jpg",
              _2x: "cards/9c72f7d5e84521357a449c0d29919fef@2x.jpg"
            },
            big: {
              _1x: "cards/9c72f7d5e84521357a449c0d29919fef@2x.jpg",
              _2x: "cards/big/7a42cd984670ae2e5bd7658b57718a5e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/844a3b97ceb74cf8ae3095021b4c3846.jpg",
              _2x: "cards/f1080ace3f1a2fe992eb9e1619705419@2x.jpg"
            },
            big: {
              _1x: "cards/f1080ace3f1a2fe992eb9e1619705419@2x.jpg",
              _2x: "cards/big/f320c32e741b1ae41874050c6f993993@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bd7217f311ead973754f057d8e6667c6.jpg",
              _2x: "cards/81c44fa74abee70a6815afb5aa6e7c5b@2x.jpg"
            },
            big: {
              _1x: "cards/81c44fa74abee70a6815afb5aa6e7c5b@2x.jpg",
              _2x: "cards/big/6157ba7c26917d8d6690b92cc30f847a@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 119,
      name: d("Fencer"),
      cls: 2,
      color: 1,
      rarity: 3,
      baseAttack: 67.5,
      baseHp: 82.5,
      tag: "promo",
      images: {
        _1x: "cards/2e70f9102bdbd277d2092c589a9c2ae0.jpg",
        _2x: "cards/89655c5162babe710ba842d984069a8b@2x.jpg"
      },
      big: {
        _1x: "cards/89655c5162babe710ba842d984069a8b@2x.jpg",
        _2x: "cards/big/e5a3fa8d33f7f19a855d0500ee787023@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/e99af84cf17be9e5a235f85acda9a803.png",
        _2x: "cards/icons/bb9964dbf25b1db8215f59dbf86786ca@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/146d01c32c505eac33e2d90058a3c7fa.jpg",
              _2x: "cards/dee9b6fc2474bd45bbb423222970097a@2x.jpg"
            },
            big: {
              _1x: "cards/dee9b6fc2474bd45bbb423222970097a@2x.jpg",
              _2x: "cards/big/86e481bda5e802e8adb07830a35e7160@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fca2855a72a74959bab13d684a5dd90c.jpg",
              _2x: "cards/8a0b005d7d8397f2b8ce83198dccbb42@2x.jpg"
            },
            big: {
              _1x: "cards/8a0b005d7d8397f2b8ce83198dccbb42@2x.jpg",
              _2x: "cards/big/8543c0dc4b9cdf909c3a687a6460faf2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/863f8adafe72be8e9cfebb72f7e83fc9.jpg",
              _2x: "cards/9b8e6eca880bae7010d889e97ea50673@2x.jpg"
            },
            big: {
              _1x: "cards/9b8e6eca880bae7010d889e97ea50673@2x.jpg",
              _2x: "cards/big/1b122a0fea7073f9ed51cc523fa0ecf2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1bb0554550271228a85801f6a15f734c.jpg",
              _2x: "cards/6bd00fd12f2fa736bd2fd07e0345c69b@2x.jpg"
            },
            big: {
              _1x: "cards/6bd00fd12f2fa736bd2fd07e0345c69b@2x.jpg",
              _2x: "cards/big/e5ee66200b20decc5795b24cd9598175@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 120,
      name: d("Heretic"),
      cls: 3,
      color: 1,
      rarity: 3,
      baseAttack: 82.5,
      baseHp: 67.5,
      tag: "promo",
      images: {
        _1x: "cards/c8c444c81101ed220f31cbd5c5f5b167.jpg",
        _2x: "cards/0076fd0f2dd611a4d2716dbefeebc438@2x.jpg"
      },
      big: {
        _1x: "cards/0076fd0f2dd611a4d2716dbefeebc438@2x.jpg",
        _2x: "cards/big/0081368e0fac0b0acc17f8842f16c2f9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/6a478912f46ea6386ff0043fff8556f1.png",
        _2x: "cards/icons/a9ff244d44afc7e40ba79cac21df3b56@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e8951cec4be74b6b2fdc26ff5ffd3789.jpg",
              _2x: "cards/70ef0ef22763d6f41c96ef346dc7078b@2x.jpg"
            },
            big: {
              _1x: "cards/70ef0ef22763d6f41c96ef346dc7078b@2x.jpg",
              _2x: "cards/big/3a73be1e8bc253875111256ef7db6e8f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8e3507c2e32d1e77b5d3954cc0604e32.jpg",
              _2x: "cards/0093081007e72b03cc18d2436cc1040a@2x.jpg"
            },
            big: {
              _1x: "cards/0093081007e72b03cc18d2436cc1040a@2x.jpg",
              _2x: "cards/big/03c1ca1347bd73498b69b2683be0333a@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bd510e453f28a5e8ca33f801246ad9e9.jpg",
              _2x: "cards/c56798b0d76da434ad6a032796a26ffd@2x.jpg"
            },
            big: {
              _1x: "cards/c56798b0d76da434ad6a032796a26ffd@2x.jpg",
              _2x: "cards/big/cc4123e3183fd3f377aa82e3d743127b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0c830e00d58b4367f86c238e4477cb85.jpg",
              _2x: "cards/6b16c5ff951498b530d92fbf78fee717@2x.jpg"
            },
            big: {
              _1x: "cards/6b16c5ff951498b530d92fbf78fee717@2x.jpg",
              _2x: "cards/big/358b4ef83f1abee32e703523b36d2c65@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 121,
      name: d("Adventuress"),
      cls: 4,
      color: 4,
      rarity: 2,
      baseAttack: 87.5,
      baseHp: 37.5,
      tag: "promo",
      images: {
        _1x: "cards/70e7be29f3019d36e4ea9e21e39cff92.jpg",
        _2x: "cards/bdce174002c4103e9845892aa3d199c2@2x.jpg"
      },
      big: {
        _1x: "cards/bdce174002c4103e9845892aa3d199c2@2x.jpg",
        _2x: "cards/big/4bab83542546dec04874b7c7be77502d@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/0c46330c7b64b943cd230d40ad64bf69.png",
        _2x: "cards/icons/4a3f678a97d0f344679a49ec344f4700@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/f651e545d292e2bc8bd73f0793ea42a3.jpg",
              _2x: "cards/3dec2886ece5710695b3611345457952@2x.jpg"
            },
            big: {
              _1x: "cards/3dec2886ece5710695b3611345457952@2x.jpg",
              _2x: "cards/big/96f23127fb74257ee945ee79b0fa29ff@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1854a5f7bb0b67e67cd0a2ef469af77d.jpg",
              _2x: "cards/93949b76b3109d64bb204597fef583e8@2x.jpg"
            },
            big: {
              _1x: "cards/93949b76b3109d64bb204597fef583e8@2x.jpg",
              _2x: "cards/big/dd82b9c8fd4fc92ad1cc117e429a6d4c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7cd1870c66cb7f4013dc16ab69cfe365.jpg",
              _2x: "cards/a4d6719e5d7195dfed65a3fc80f03bd4@2x.jpg"
            },
            big: {
              _1x: "cards/a4d6719e5d7195dfed65a3fc80f03bd4@2x.jpg",
              _2x: "cards/big/6acd657bc269c6980afa87d011a6fdbc@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/494d61c544b75efe7156c98c298346b9.jpg",
              _2x: "cards/56ad86c3a26a3803189df64c698ce205@2x.jpg"
            },
            big: {
              _1x: "cards/56ad86c3a26a3803189df64c698ce205@2x.jpg",
              _2x: "cards/big/eeba67c3b709504a895f6575c4397650@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 122,
      name: d("Lady Snake"),
      cls: 5,
      color: 2,
      rarity: 3,
      baseAttack: 60,
      baseHp: 90,
      tag: "promo",
      images: {
        _1x: "cards/a7b77d919be7b180ca8ff62ff7ca756c.jpg",
        _2x: "cards/3995594c5ae336dc78f37b1ecb0ece4e@2x.jpg"
      },
      big: {
        _1x: "cards/3995594c5ae336dc78f37b1ecb0ece4e@2x.jpg",
        _2x: "cards/big/712cc0b963ee7bdd6e7e1c97cbc7e158@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/766ec21ff67c1fd2286fdceece1a51e5.png",
        _2x: "cards/icons/5b110cd04720c7f3e636f76759602b5e@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a0b14831847b25adb80de1a90b4eb6d9.jpg",
              _2x: "cards/72552d6364c918713de913b63ed1e209@2x.jpg"
            },
            big: {
              _1x: "cards/72552d6364c918713de913b63ed1e209@2x.jpg",
              _2x: "cards/big/63f4716f219c6b6307f1af76ab05bdc5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0d51b7f474dd4548e9b11bee4714b39e.jpg",
              _2x: "cards/e496e227402fb4cfbff22387824e64b5@2x.jpg"
            },
            big: {
              _1x: "cards/e496e227402fb4cfbff22387824e64b5@2x.jpg",
              _2x: "cards/big/372d94cca2c96723060ef653a3351370@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e9bdc9d04066ea21bc76344bd707529d.jpg",
              _2x: "cards/09dbd4a8eafb6fa2be4bb017ad0454ef@2x.jpg"
            },
            big: {
              _1x: "cards/09dbd4a8eafb6fa2be4bb017ad0454ef@2x.jpg",
              _2x: "cards/big/5c2840f026c849a94771b883fc2a20d4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/487c2e28605214c9f9577fa3404f5c38.jpg",
              _2x: "cards/876701f4b9da2e573a745165e890fa4b@2x.jpg"
            },
            big: {
              _1x: "cards/876701f4b9da2e573a745165e890fa4b@2x.jpg",
              _2x: "cards/big/027860133eda14d846f3d93592d771da@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 123,
      name: d("Tribal"),
      cls: 1,
      color: 2,
      rarity: 3,
      baseAttack: 82.5,
      baseHp: 67.5,
      tag: "promo",
      images: {
        _1x: "cards/be86fc2de64af4203809bc67b725e1bb.jpg",
        _2x: "cards/c932e69ee0ac333beee605af5e807554@2x.jpg"
      },
      big: {
        _1x: "cards/c932e69ee0ac333beee605af5e807554@2x.jpg",
        _2x: "cards/big/5c8503d237029c125abbd856cd36dbf8@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/ff3c82fd548bfd4b6b09033f32de1d2c.png",
        _2x: "cards/icons/20062b2c8dc9ff1c2150810f9807abbf@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/d8935ee73534ea35480c11586ed94337.jpg",
              _2x: "cards/cdca6714ba4f3dc6b941392996a6ca95@2x.jpg"
            },
            big: {
              _1x: "cards/cdca6714ba4f3dc6b941392996a6ca95@2x.jpg",
              _2x: "cards/big/2c9f617f514beeba5f374a26dabf77fc@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8879246fc5256de3097e4518161e128d.jpg",
              _2x: "cards/c03c81f0dfbc102e331eace00be7c5b9@2x.jpg"
            },
            big: {
              _1x: "cards/c03c81f0dfbc102e331eace00be7c5b9@2x.jpg",
              _2x: "cards/big/327fc74db7a1468f7dd291a22913e19f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6ca3dcf470c9f2f61a18c1e6e8c7e0d9.jpg",
              _2x: "cards/31874110faeed04d60eea5dccda3323a@2x.jpg"
            },
            big: {
              _1x: "cards/31874110faeed04d60eea5dccda3323a@2x.jpg",
              _2x: "cards/big/c230ea4558a85f15918dc7bc3fbe7595@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/0a42ee2a4a0a3ba9befd2e1e20b1ff1e.jpg",
              _2x: "cards/626ceedf1a97751bc23917c7a791c858@2x.jpg"
            },
            big: {
              _1x: "cards/626ceedf1a97751bc23917c7a791c858@2x.jpg",
              _2x: "cards/big/e19f8e3951adea9afa11f9720225d1c9@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 124,
      name: d("Lone Druid"),
      cls: 2,
      color: 2,
      rarity: 3,
      baseAttack: 60,
      baseHp: 90,
      tag: "promo",
      images: {
        _1x: "cards/cc0f86e3e65813518fc6eadb8d190355.jpg",
        _2x: "cards/8bfea865960a102fd40ea4cb50ae87ee@2x.jpg"
      },
      big: {
        _1x: "cards/8bfea865960a102fd40ea4cb50ae87ee@2x.jpg",
        _2x: "cards/big/72f218a7c6f4742a43b86386d0309a99@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/af2246564b03fe08225f18e1d896e80c.png",
        _2x: "cards/icons/3dc3b401b63bffebb0f3a392b1e34f55@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/742ce9ab6c0815451af2b7137e50d0c2.jpg",
              _2x: "cards/e0a14168edb504aaf1cb51ed43bd4614@2x.jpg"
            },
            big: {
              _1x: "cards/e0a14168edb504aaf1cb51ed43bd4614@2x.jpg",
              _2x: "cards/big/176a3518602ceecf7094762169760d35@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3093d5827df8caad0c098c645547f02e.jpg",
              _2x: "cards/3bdd5855185537166d5b314b15cdbddf@2x.jpg"
            },
            big: {
              _1x: "cards/3bdd5855185537166d5b314b15cdbddf@2x.jpg",
              _2x: "cards/big/9ccae60eb27485d932eafa09cc881e7c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/111f88495fa0ac3a4136710e0109cfda.jpg",
              _2x: "cards/12ca565bb34c0a9ae235aef377388e9c@2x.jpg"
            },
            big: {
              _1x: "cards/12ca565bb34c0a9ae235aef377388e9c@2x.jpg",
              _2x: "cards/big/bba7bac6a979e7c4627453662ac95d02@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/35c7905a397754bfb304c0cb33f4e6e8.jpg",
              _2x: "cards/8d1069c3d8711e2566337f79881bc668@2x.jpg"
            },
            big: {
              _1x: "cards/8d1069c3d8711e2566337f79881bc668@2x.jpg",
              _2x: "cards/big/a93d7fb272ae8bcc3d27a3bedf9b9e0b@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 125,
      name: d("Bard"),
      cls: 3,
      color: 4,
      rarity: 2,
      baseAttack: 43.75,
      baseHp: 81.25,
      tag: "promo",
      images: {
        _1x: "cards/e6f6a4c2405057e01b13068b179b5782.jpg",
        _2x: "cards/19f13d20223790da97a738466fc35352@2x.jpg"
      },
      big: {
        _1x: "cards/19f13d20223790da97a738466fc35352@2x.jpg",
        _2x: "cards/big/16fcd7551fea2e157535260b746c5d92@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/c3d21ed49dbe50902da47ac96d467024.png",
        _2x: "cards/icons/883be913086a8e999730baba8c726b00@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/cdb33abc15bc4c24d6e9aada597bf04a.jpg",
              _2x: "cards/01529a86e35b572862e60aca6cfe1cb3@2x.jpg"
            },
            big: {
              _1x: "cards/01529a86e35b572862e60aca6cfe1cb3@2x.jpg",
              _2x: "cards/big/c449a4d926a26814db857400b45ed461@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/578f987c8c4e33e33b550786ba04964a.jpg",
              _2x: "cards/931913b64bf4af23919e0bf70f3649ea@2x.jpg"
            },
            big: {
              _1x: "cards/931913b64bf4af23919e0bf70f3649ea@2x.jpg",
              _2x: "cards/big/97f234b788e3b67c470445f7faaa1e58@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6b1fa1f57d8f714f1ad29995710679e4.jpg",
              _2x: "cards/1bb86329bdbeb5eb6d7b43033be17e09@2x.jpg"
            },
            big: {
              _1x: "cards/1bb86329bdbeb5eb6d7b43033be17e09@2x.jpg",
              _2x: "cards/big/aecbdd3e504c10dd6002f9b0946aa782@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3840b0dbf4bcaa7e5ce6ebde3a505792.jpg",
              _2x: "cards/100a26f452f955e47b351fa9fd935793@2x.jpg"
            },
            big: {
              _1x: "cards/100a26f452f955e47b351fa9fd935793@2x.jpg",
              _2x: "cards/big/c844109f0915214929b73e4eac001930@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 126,
      name: d("Aqurius"),
      cls: 4,
      color: 3,
      rarity: 3,
      baseAttack: 90,
      baseHp: 60,
      tag: "promo",
      images: {
        _1x: "cards/4b9074162fb10eddecbebe585edc9e16.jpg",
        _2x: "cards/348994c566361b12f38012a82915ae0f@2x.jpg"
      },
      big: {
        _1x: "cards/348994c566361b12f38012a82915ae0f@2x.jpg",
        _2x: "cards/big/eba030ea6c10343d2fc09624f140528e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/c216c331f97ced1c968ca2e6664d2fc1.png",
        _2x: "cards/icons/d3397ed746f7407f620c809df9a75342@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/1e151c9d7a8f186a1ae7c153ca7b431d.jpg",
              _2x: "cards/d656578519ea142361bdc1e46b23f75d@2x.jpg"
            },
            big: {
              _1x: "cards/d656578519ea142361bdc1e46b23f75d@2x.jpg",
              _2x: "cards/big/5f02447a91a44dc229adf846f51db2dd@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/32f68d852c6ae0f93a8a78f8e4bf3e16.jpg",
              _2x: "cards/99e04d51bf609875683f659e3aa33c36@2x.jpg"
            },
            big: {
              _1x: "cards/99e04d51bf609875683f659e3aa33c36@2x.jpg",
              _2x: "cards/big/a9f3ac50867516340e39d20a8a8152f2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/33b3a18ceb578d92d15b0493dca306ac.jpg",
              _2x: "cards/a39d1b56249d45eaa112a21f10932dab@2x.jpg"
            },
            big: {
              _1x: "cards/a39d1b56249d45eaa112a21f10932dab@2x.jpg",
              _2x: "cards/big/470b7148c30f205d31c8dbe8398653b4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/26534ea4856cbf455ac148675df8a464.jpg",
              _2x: "cards/3dcb1ec45243fb53bf26a82dd83e27d6@2x.jpg"
            },
            big: {
              _1x: "cards/3dcb1ec45243fb53bf26a82dd83e27d6@2x.jpg",
              _2x: "cards/big/838209cc7f1547ce26159c3f3a6a4949@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 127,
      name: d("East Genie"),
      cls: 5,
      color: 3,
      rarity: 3,
      baseAttack: 82.5,
      baseHp: 67.5,
      tag: "promo",
      images: {
        _1x: "cards/de3327c84861e10059ba73de385764f7.jpg",
        _2x: "cards/aaf821ea15a2166f5f1850d5f4262bad@2x.jpg"
      },
      big: {
        _1x: "cards/aaf821ea15a2166f5f1850d5f4262bad@2x.jpg",
        _2x: "cards/big/569858b5001ef7fa7c5a52953aa1c399@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/e76bc9dc5d03bc1d60140e95787d3256.png",
        _2x: "cards/icons/7f884deafb0c7095401d118639733785@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c6ef436e035ef94a80e0fd7c9b831457.jpg",
              _2x: "cards/52e40cde4586cf3c45f2259f0381cd92@2x.jpg"
            },
            big: {
              _1x: "cards/52e40cde4586cf3c45f2259f0381cd92@2x.jpg",
              _2x: "cards/big/1de2e382e71a8d26bce22884be7e2584@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d2a1320639720c18d919ae30ad9ade4a.jpg",
              _2x: "cards/167dddbae9d21108217b209da861115f@2x.jpg"
            },
            big: {
              _1x: "cards/167dddbae9d21108217b209da861115f@2x.jpg",
              _2x: "cards/big/f22b1abe1a88aa062cf7a0f90cd7df43@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b49f0cfbbc094c4b0aa74f802ff4cbe1.jpg",
              _2x: "cards/b4205dedb7d153381badef8f6cbbc2e6@2x.jpg"
            },
            big: {
              _1x: "cards/b4205dedb7d153381badef8f6cbbc2e6@2x.jpg",
              _2x: "cards/big/89890ca1310df2f1b7d3e117b6d9007b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e6f9c2594eeb30691a6e59360293ac11.jpg",
              _2x: "cards/d7a42b5c69eb7eaa568facad754c450d@2x.jpg"
            },
            big: {
              _1x: "cards/d7a42b5c69eb7eaa568facad754c450d@2x.jpg",
              _2x: "cards/big/920da1c9196766ac498380c561eb9cf5@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 128,
      name: d("Countess"),
      cls: 1,
      color: 3,
      rarity: 3,
      baseAttack: 82.5,
      baseHp: 67.5,
      tag: "promo",
      images: {
        _1x: "cards/180cce93dec7cf74a28e0effa759c4e1.jpg",
        _2x: "cards/1fdc034e7c1c4b19b81142b75285ed23@2x.jpg"
      },
      big: {
        _1x: "cards/1fdc034e7c1c4b19b81142b75285ed23@2x.jpg",
        _2x: "cards/big/9dce354c197fe3aa3c1f46912bf1d99b@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f7e3178bef880f6d6334f2b2087ba686.png",
        _2x: "cards/icons/f270b5cb5f5d9f8f43f01cbf9e1b8a64@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/2712f9e40965461b8d39ca2dd40c10ca.jpg",
              _2x: "cards/3fa245ed8e64d74dbc4ffa92a9fdfa8a@2x.jpg"
            },
            big: {
              _1x: "cards/3fa245ed8e64d74dbc4ffa92a9fdfa8a@2x.jpg",
              _2x: "cards/big/04434bfc1ff551dd7c9ad080d60ca3aa@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/af2415827edfdd5e3be8d45b28d16bdb.jpg",
              _2x: "cards/1c54356c8fcd1d032bf6e1e8695e5445@2x.jpg"
            },
            big: {
              _1x: "cards/1c54356c8fcd1d032bf6e1e8695e5445@2x.jpg",
              _2x: "cards/big/6a4fa0e56ae62fdd351006fe2aff91f2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b0adbfa520a93b4db5d7d09beac960c1.jpg",
              _2x: "cards/9bda132a647e17cc8124fd710ee91599@2x.jpg"
            },
            big: {
              _1x: "cards/9bda132a647e17cc8124fd710ee91599@2x.jpg",
              _2x: "cards/big/825328f09e6721d07167f6eb114bea4b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/90e0b5a0526699faf5bf4046933bbeea.jpg",
              _2x: "cards/48de2a6ba68337ada6f8216b7b5cbf2a@2x.jpg"
            },
            big: {
              _1x: "cards/48de2a6ba68337ada6f8216b7b5cbf2a@2x.jpg",
              _2x: "cards/big/8a47c34cef4a334740f688204f521cf8@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 129,
      name: d("Warlock"),
      cls: 1,
      color: 5,
      rarity: 4,
      baseAttack: 61.25,
      baseHp: 113.75,
      tag: "promo",
      effect: "Resurrect",
      images: {
        _1x: "cards/600bacfc112afe7fde75dcd08cbdf3de.jpg",
        _2x: "cards/76d02595c2b41fdb41e3b154af264a20@2x.jpg"
      },
      big: {
        _1x: "cards/76d02595c2b41fdb41e3b154af264a20@2x.jpg",
        _2x: "cards/big/9711a795fd4af87fcbf687b802684f7c@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/a90c8a253e597637956b9a2c622e5dee.png",
        _2x: "cards/icons/135814e014d29ada973ab9ba56b8a44d@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/18c36294a5c2594ac37cf06ee3c56d10.jpg",
              _2x: "cards/2f2effe927e6e1f9de5f0bfc6639de9e@2x.jpg"
            },
            big: {
              _1x: "cards/2f2effe927e6e1f9de5f0bfc6639de9e@2x.jpg",
              _2x: "cards/big/e2ee11eb9d43fc3264c72818b287bff3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e6489876ac1dd562c5b5d18f51506569.jpg",
              _2x: "cards/9fb3820b0321fdff4abcae0c7ca273a1@2x.jpg"
            },
            big: {
              _1x: "cards/9fb3820b0321fdff4abcae0c7ca273a1@2x.jpg",
              _2x: "cards/big/dbb502ca8e29ca2b0f53ec312b019f8c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fdd291bed1a459abc8908f639862d018.jpg",
              _2x: "cards/5a5b275f673ccfb560ac8d204b74d64a@2x.jpg"
            },
            big: {
              _1x: "cards/5a5b275f673ccfb560ac8d204b74d64a@2x.jpg",
              _2x: "cards/big/9b4f348a85cb0f8e5d28e4dfd04e93e2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7a052c918436ed3337f71c8a6c1169ac.jpg",
              _2x: "cards/d525c9557abfc75d4fbde02257e70ca4@2x.jpg"
            },
            big: {
              _1x: "cards/d525c9557abfc75d4fbde02257e70ca4@2x.jpg",
              _2x: "cards/big/9c06f4c9d4b6fe0fdd891338e9012d45@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 130,
      name: d("Assassin"),
      cls: 2,
      color: 4,
      rarity: 4,
      baseAttack: 117.25,
      baseHp: 57.75,
      tag: "promo",
      effect: "Rage",
      images: {
        _1x: "cards/e1712a9684eb1ea981ac588de10dc863.jpg",
        _2x: "cards/1c1246b819f2363c59fc744df59df3f0@2x.jpg"
      },
      big: {
        _1x: "cards/1c1246b819f2363c59fc744df59df3f0@2x.jpg",
        _2x: "cards/big/ff604fa4f6a4bca6f845499b558b7b71@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/fdecbb4d51154d35c6a136d919b28ad1.png",
        _2x: "cards/icons/ccca8bd30320596f335b3101f9c30c4f@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/ef23eb15020155dbcc77c818be544beb.jpg",
              _2x: "cards/db3a0be63e4a0890e04ff501e8089bdf@2x.jpg"
            },
            big: {
              _1x: "cards/db3a0be63e4a0890e04ff501e8089bdf@2x.jpg",
              _2x: "cards/big/789e61b794e3d30447cc1d195b8a72b1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7f598fcfc91e0614713eb6efd0761b6a.jpg",
              _2x: "cards/0bde635f015ee624322657012d5704bd@2x.jpg"
            },
            big: {
              _1x: "cards/0bde635f015ee624322657012d5704bd@2x.jpg",
              _2x: "cards/big/d888b8134df902f691e31717af98dbe5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/42d0819ae572f84873916d690023593c.jpg",
              _2x: "cards/b68184e8e1810ef7639b2452bbca635f@2x.jpg"
            },
            big: {
              _1x: "cards/b68184e8e1810ef7639b2452bbca635f@2x.jpg",
              _2x: "cards/big/1fe2690c1081a75ab42f6fc91923c1c1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d121a070b5d854139f75cd30fbe1743c.jpg",
              _2x: "cards/df13d09aba6ad6d8620b9f4f6810a98a@2x.jpg"
            },
            big: {
              _1x: "cards/df13d09aba6ad6d8620b9f4f6810a98a@2x.jpg",
              _2x: "cards/big/86b25638a3b975dbf6dae872ef033deb@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 131,
      name: d("Snow Maiden"),
      cls: 3,
      color: 3,
      rarity: 4,
      baseAttack: 96.25,
      baseHp: 78.75,
      tag: "promo",
      effect: "Freeze",
      images: {
        _1x: "cards/5fbc5b5bca410eae760add73b822b60b.jpg",
        _2x: "cards/137bf0fc6adb006ed0c053a1045259e6@2x.jpg"
      },
      big: {
        _1x: "cards/137bf0fc6adb006ed0c053a1045259e6@2x.jpg",
        _2x: "cards/big/bc46a576b5fea0287470e5a9adf30723@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/fa71da55a9b040e42c9ecb7e56c31439.png",
        _2x: "cards/icons/b793a8a35616c56106a66ba324c2b0bf@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/5b9daa29e35005a3bb36dcee18f80167.jpg",
              _2x: "cards/adba6747504ea89ebea9b469780f71de@2x.jpg"
            },
            big: {
              _1x: "cards/adba6747504ea89ebea9b469780f71de@2x.jpg",
              _2x: "cards/big/4b9c614a82f01024dd8804195e215361@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ebea1da6146c365005774e69a4874ed7.jpg",
              _2x: "cards/2f911b044592b5b09eba86dfabc7e6ab@2x.jpg"
            },
            big: {
              _1x: "cards/2f911b044592b5b09eba86dfabc7e6ab@2x.jpg",
              _2x: "cards/big/25db4fbcb6821961c8cdeb47e9f90405@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/36586ab85ad203bd8e09255c71c92074.jpg",
              _2x: "cards/d4d8dff82f9f5f00e758d2d5f43480a9@2x.jpg"
            },
            big: {
              _1x: "cards/d4d8dff82f9f5f00e758d2d5f43480a9@2x.jpg",
              _2x: "cards/big/bbb81c3e98fb87ee58446c120ad9b7a8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fd37bb5c7a93b7ee3d45e9590ad8d548.jpg",
              _2x: "cards/b107d03c737562a6ff0316b384b7b304@2x.jpg"
            },
            big: {
              _1x: "cards/b107d03c737562a6ff0316b384b7b304@2x.jpg",
              _2x: "cards/big/230e41dac19ed90340a0de5c0d7629ce@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 132,
      name: d("Valkirie"),
      cls: 4,
      color: 1,
      rarity: 4,
      baseAttack: 61.25,
      baseHp: 113.75,
      tag: "promo",
      effect: "Fireball",
      images: {
        _1x: "cards/a9bd2f004dafe27bbeba695aca7adb73.jpg",
        _2x: "cards/0c9024b8d34c08121825d88044505005@2x.jpg"
      },
      big: {
        _1x: "cards/0c9024b8d34c08121825d88044505005@2x.jpg",
        _2x: "cards/big/f4c3c030bb86a9923081c354cbccf94d@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/9b7ef9972a12c63afe79bc4f39627903.png",
        _2x: "cards/icons/5bdffe6ec082554830759d0028ebc9c8@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/b1848edf5ffb2e73390bf6196ed5c22f.jpg",
              _2x: "cards/a1523a2f9b86b8b4826639a894dfaec1@2x.jpg"
            },
            big: {
              _1x: "cards/a1523a2f9b86b8b4826639a894dfaec1@2x.jpg",
              _2x: "cards/big/349ba0c3973e666f4e91e436172f98c7@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5a0ae0c5361650c3020342c402be47c8.jpg",
              _2x: "cards/868678e27d35413dee6807c1dec9143d@2x.jpg"
            },
            big: {
              _1x: "cards/868678e27d35413dee6807c1dec9143d@2x.jpg",
              _2x: "cards/big/990e4e3023dd25a5c2c0791bc9a8ed7d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/dd49aa0e11a88cd1b88ea538834161bf.jpg",
              _2x: "cards/902f6f2032228eafa8b2f217501a4b43@2x.jpg"
            },
            big: {
              _1x: "cards/902f6f2032228eafa8b2f217501a4b43@2x.jpg",
              _2x: "cards/big/9e0fefcdfcea68edae7240174c1be58c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a5e02e22273980728e1c498709da1a2d.jpg",
              _2x: "cards/7cdffe1380c66e157cf43ccf8fb75fac@2x.jpg"
            },
            big: {
              _1x: "cards/7cdffe1380c66e157cf43ccf8fb75fac@2x.jpg",
              _2x: "cards/big/3d860b4b3fda8ae3691cee445f53f30d@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 133,
      name: d("Healer"),
      cls: 5,
      color: 3,
      rarity: 4,
      baseAttack: 66.5,
      baseHp: 108.5,
      tag: "promo",
      effect: "Heal",
      images: {
        _1x: "cards/940e448ea5d892410f0a8055dbd1cda4.jpg",
        _2x: "cards/2939070cbdb84500127db3e8acecfd9f@2x.jpg"
      },
      big: {
        _1x: "cards/2939070cbdb84500127db3e8acecfd9f@2x.jpg",
        _2x: "cards/big/575ad35b9193c5cced0b307fae4fc4ba@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/5e652166f2ede13f771323f9f4716710.png",
        _2x: "cards/icons/24098375b996dab632bb72465df08f4b@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/4695da2fa5e59a5fbd879a2dec4959cb.jpg",
              _2x: "cards/932f3c4774af69b8a1a30b53edbcab19@2x.jpg"
            },
            big: {
              _1x: "cards/932f3c4774af69b8a1a30b53edbcab19@2x.jpg",
              _2x: "cards/big/ddca994f6ac9967a5b78a95b4405e7ee@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7b34c7b9ba6886af1c007c613d0717b8.jpg",
              _2x: "cards/1a83318e5806aa20bbd76341e46411c1@2x.jpg"
            },
            big: {
              _1x: "cards/1a83318e5806aa20bbd76341e46411c1@2x.jpg",
              _2x: "cards/big/a74a78cb306cdff0ca4867e0d361ae0b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b21772121c8c27782fe2d0894bb5ddd6.jpg",
              _2x: "cards/f11e15f4ec41690c8deda439b082b401@2x.jpg"
            },
            big: {
              _1x: "cards/f11e15f4ec41690c8deda439b082b401@2x.jpg",
              _2x: "cards/big/5cfa97e2735a1f7ae6aef48f57fd738b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7f7a67a47c4681f7aacb338849d0f67d.jpg",
              _2x: "cards/c55afd4226be994b70013cd67e35fe52@2x.jpg"
            },
            big: {
              _1x: "cards/c55afd4226be994b70013cd67e35fe52@2x.jpg",
              _2x: "cards/big/d48bf850d4736b07edd2a4a0a9b2ba8c@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 134,
      name: d("Medusa"),
      cls: 1,
      color: 2,
      rarity: 4,
      baseAttack: 70,
      baseHp: 105,
      tag: "promo",
      effect: "Curse",
      images: {
        _1x: "cards/556e93cc3d945feb91512adb2a801484.jpg",
        _2x: "cards/e81a9d1d7c1c28b0924d22ca485a0d57@2x.jpg"
      },
      big: {
        _1x: "cards/e81a9d1d7c1c28b0924d22ca485a0d57@2x.jpg",
        _2x: "cards/big/bde701ca7e68e3667fb57bd94f90ec97@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/0d8accdfd3d973b089a295dacc798abe.png",
        _2x: "cards/icons/cc2b7450350258a4ada0552d7f1bf026@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/d9588fa2e4c777dd5a165bb6236b9397.jpg",
              _2x: "cards/625f7fe123233c505328bea86da3df7c@2x.jpg"
            },
            big: {
              _1x: "cards/625f7fe123233c505328bea86da3df7c@2x.jpg",
              _2x: "cards/big/e9c4da9859785ca671b7ad3450eb884e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7b1c44c3f742bed61188fc6ded4487ee.jpg",
              _2x: "cards/1c2e3cfa3aeec3a872186c0fa44d7d1e@2x.jpg"
            },
            big: {
              _1x: "cards/1c2e3cfa3aeec3a872186c0fa44d7d1e@2x.jpg",
              _2x: "cards/big/4c72a72647cb23ab5842aa761976c848@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/777cc6a95f0bf331d99723d2b16589c3.jpg",
              _2x: "cards/6e4a05262b8270833116c562af1adaad@2x.jpg"
            },
            big: {
              _1x: "cards/6e4a05262b8270833116c562af1adaad@2x.jpg",
              _2x: "cards/big/b0d01e0a4bf64f97ce78a31e11b1879d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4227fab3e2ae27909a6f6db7e2038d31.jpg",
              _2x: "cards/80e1641a05a141827fa14094952af3f3@2x.jpg"
            },
            big: {
              _1x: "cards/80e1641a05a141827fa14094952af3f3@2x.jpg",
              _2x: "cards/big/00884758b9238dffd15bcc87396ab15c@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 135,
      name: d("Warlock"),
      cls: 1,
      color: 5,
      rarity: 4,
      baseAttack: 30.625,
      baseHp: 56.875,
      tag: "bot",
      effect: "Resurrect",
      images: {
        _1x: "cards/600bacfc112afe7fde75dcd08cbdf3de.jpg",
        _2x: "cards/76d02595c2b41fdb41e3b154af264a20@2x.jpg"
      },
      big: {
        _1x: "cards/76d02595c2b41fdb41e3b154af264a20@2x.jpg",
        _2x: "cards/big/9711a795fd4af87fcbf687b802684f7c@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/a90c8a253e597637956b9a2c622e5dee.png",
        _2x: "cards/icons/135814e014d29ada973ab9ba56b8a44d@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/18c36294a5c2594ac37cf06ee3c56d10.jpg",
              _2x: "cards/2f2effe927e6e1f9de5f0bfc6639de9e@2x.jpg"
            },
            big: {
              _1x: "cards/2f2effe927e6e1f9de5f0bfc6639de9e@2x.jpg",
              _2x: "cards/big/e2ee11eb9d43fc3264c72818b287bff3@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e6489876ac1dd562c5b5d18f51506569.jpg",
              _2x: "cards/9fb3820b0321fdff4abcae0c7ca273a1@2x.jpg"
            },
            big: {
              _1x: "cards/9fb3820b0321fdff4abcae0c7ca273a1@2x.jpg",
              _2x: "cards/big/dbb502ca8e29ca2b0f53ec312b019f8c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fdd291bed1a459abc8908f639862d018.jpg",
              _2x: "cards/5a5b275f673ccfb560ac8d204b74d64a@2x.jpg"
            },
            big: {
              _1x: "cards/5a5b275f673ccfb560ac8d204b74d64a@2x.jpg",
              _2x: "cards/big/9b4f348a85cb0f8e5d28e4dfd04e93e2@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7a052c918436ed3337f71c8a6c1169ac.jpg",
              _2x: "cards/d525c9557abfc75d4fbde02257e70ca4@2x.jpg"
            },
            big: {
              _1x: "cards/d525c9557abfc75d4fbde02257e70ca4@2x.jpg",
              _2x: "cards/big/9c06f4c9d4b6fe0fdd891338e9012d45@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 136,
      name: d("Assassin"),
      cls: 2,
      color: 4,
      rarity: 4,
      baseAttack: 58.625,
      baseHp: 28.875,
      tag: "bot",
      effect: "Rage",
      images: {
        _1x: "cards/e1712a9684eb1ea981ac588de10dc863.jpg",
        _2x: "cards/1c1246b819f2363c59fc744df59df3f0@2x.jpg"
      },
      big: {
        _1x: "cards/1c1246b819f2363c59fc744df59df3f0@2x.jpg",
        _2x: "cards/big/ff604fa4f6a4bca6f845499b558b7b71@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/fdecbb4d51154d35c6a136d919b28ad1.png",
        _2x: "cards/icons/ccca8bd30320596f335b3101f9c30c4f@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/ef23eb15020155dbcc77c818be544beb.jpg",
              _2x: "cards/db3a0be63e4a0890e04ff501e8089bdf@2x.jpg"
            },
            big: {
              _1x: "cards/db3a0be63e4a0890e04ff501e8089bdf@2x.jpg",
              _2x: "cards/big/789e61b794e3d30447cc1d195b8a72b1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7f598fcfc91e0614713eb6efd0761b6a.jpg",
              _2x: "cards/0bde635f015ee624322657012d5704bd@2x.jpg"
            },
            big: {
              _1x: "cards/0bde635f015ee624322657012d5704bd@2x.jpg",
              _2x: "cards/big/d888b8134df902f691e31717af98dbe5@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/42d0819ae572f84873916d690023593c.jpg",
              _2x: "cards/b68184e8e1810ef7639b2452bbca635f@2x.jpg"
            },
            big: {
              _1x: "cards/b68184e8e1810ef7639b2452bbca635f@2x.jpg",
              _2x: "cards/big/1fe2690c1081a75ab42f6fc91923c1c1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d121a070b5d854139f75cd30fbe1743c.jpg",
              _2x: "cards/df13d09aba6ad6d8620b9f4f6810a98a@2x.jpg"
            },
            big: {
              _1x: "cards/df13d09aba6ad6d8620b9f4f6810a98a@2x.jpg",
              _2x: "cards/big/86b25638a3b975dbf6dae872ef033deb@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 137,
      name: d("Snow Maiden"),
      cls: 3,
      color: 3,
      rarity: 4,
      baseAttack: 39.375,
      baseHp: 48.125,
      tag: "bot",
      effect: "Freeze",
      images: {
        _1x: "cards/5fbc5b5bca410eae760add73b822b60b.jpg",
        _2x: "cards/137bf0fc6adb006ed0c053a1045259e6@2x.jpg"
      },
      big: {
        _1x: "cards/137bf0fc6adb006ed0c053a1045259e6@2x.jpg",
        _2x: "cards/big/bc46a576b5fea0287470e5a9adf30723@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/fa71da55a9b040e42c9ecb7e56c31439.png",
        _2x: "cards/icons/b793a8a35616c56106a66ba324c2b0bf@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/5b9daa29e35005a3bb36dcee18f80167.jpg",
              _2x: "cards/adba6747504ea89ebea9b469780f71de@2x.jpg"
            },
            big: {
              _1x: "cards/adba6747504ea89ebea9b469780f71de@2x.jpg",
              _2x: "cards/big/4b9c614a82f01024dd8804195e215361@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ebea1da6146c365005774e69a4874ed7.jpg",
              _2x: "cards/2f911b044592b5b09eba86dfabc7e6ab@2x.jpg"
            },
            big: {
              _1x: "cards/2f911b044592b5b09eba86dfabc7e6ab@2x.jpg",
              _2x: "cards/big/25db4fbcb6821961c8cdeb47e9f90405@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/36586ab85ad203bd8e09255c71c92074.jpg",
              _2x: "cards/d4d8dff82f9f5f00e758d2d5f43480a9@2x.jpg"
            },
            big: {
              _1x: "cards/d4d8dff82f9f5f00e758d2d5f43480a9@2x.jpg",
              _2x: "cards/big/bbb81c3e98fb87ee58446c120ad9b7a8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fd37bb5c7a93b7ee3d45e9590ad8d548.jpg",
              _2x: "cards/b107d03c737562a6ff0316b384b7b304@2x.jpg"
            },
            big: {
              _1x: "cards/b107d03c737562a6ff0316b384b7b304@2x.jpg",
              _2x: "cards/big/230e41dac19ed90340a0de5c0d7629ce@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 138,
      name: d("Valkirie"),
      cls: 4,
      color: 1,
      rarity: 4,
      baseAttack: 30.625,
      baseHp: 56.875,
      tag: "bot",
      effect: "Fireball",
      images: {
        _1x: "cards/a9bd2f004dafe27bbeba695aca7adb73.jpg",
        _2x: "cards/0c9024b8d34c08121825d88044505005@2x.jpg"
      },
      big: {
        _1x: "cards/0c9024b8d34c08121825d88044505005@2x.jpg",
        _2x: "cards/big/f4c3c030bb86a9923081c354cbccf94d@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/9b7ef9972a12c63afe79bc4f39627903.png",
        _2x: "cards/icons/5bdffe6ec082554830759d0028ebc9c8@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/b1848edf5ffb2e73390bf6196ed5c22f.jpg",
              _2x: "cards/a1523a2f9b86b8b4826639a894dfaec1@2x.jpg"
            },
            big: {
              _1x: "cards/a1523a2f9b86b8b4826639a894dfaec1@2x.jpg",
              _2x: "cards/big/349ba0c3973e666f4e91e436172f98c7@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/5a0ae0c5361650c3020342c402be47c8.jpg",
              _2x: "cards/868678e27d35413dee6807c1dec9143d@2x.jpg"
            },
            big: {
              _1x: "cards/868678e27d35413dee6807c1dec9143d@2x.jpg",
              _2x: "cards/big/990e4e3023dd25a5c2c0791bc9a8ed7d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/dd49aa0e11a88cd1b88ea538834161bf.jpg",
              _2x: "cards/902f6f2032228eafa8b2f217501a4b43@2x.jpg"
            },
            big: {
              _1x: "cards/902f6f2032228eafa8b2f217501a4b43@2x.jpg",
              _2x: "cards/big/9e0fefcdfcea68edae7240174c1be58c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a5e02e22273980728e1c498709da1a2d.jpg",
              _2x: "cards/7cdffe1380c66e157cf43ccf8fb75fac@2x.jpg"
            },
            big: {
              _1x: "cards/7cdffe1380c66e157cf43ccf8fb75fac@2x.jpg",
              _2x: "cards/big/3d860b4b3fda8ae3691cee445f53f30d@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 139,
      name: d("Healer"),
      cls: 5,
      color: 3,
      rarity: 4,
      baseAttack: 33.25,
      baseHp: 54.25,
      tag: "bot",
      effect: "Heal",
      images: {
        _1x: "cards/940e448ea5d892410f0a8055dbd1cda4.jpg",
        _2x: "cards/2939070cbdb84500127db3e8acecfd9f@2x.jpg"
      },
      big: {
        _1x: "cards/2939070cbdb84500127db3e8acecfd9f@2x.jpg",
        _2x: "cards/big/575ad35b9193c5cced0b307fae4fc4ba@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/5e652166f2ede13f771323f9f4716710.png",
        _2x: "cards/icons/24098375b996dab632bb72465df08f4b@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/4695da2fa5e59a5fbd879a2dec4959cb.jpg",
              _2x: "cards/932f3c4774af69b8a1a30b53edbcab19@2x.jpg"
            },
            big: {
              _1x: "cards/932f3c4774af69b8a1a30b53edbcab19@2x.jpg",
              _2x: "cards/big/ddca994f6ac9967a5b78a95b4405e7ee@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7b34c7b9ba6886af1c007c613d0717b8.jpg",
              _2x: "cards/1a83318e5806aa20bbd76341e46411c1@2x.jpg"
            },
            big: {
              _1x: "cards/1a83318e5806aa20bbd76341e46411c1@2x.jpg",
              _2x: "cards/big/a74a78cb306cdff0ca4867e0d361ae0b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/b21772121c8c27782fe2d0894bb5ddd6.jpg",
              _2x: "cards/f11e15f4ec41690c8deda439b082b401@2x.jpg"
            },
            big: {
              _1x: "cards/f11e15f4ec41690c8deda439b082b401@2x.jpg",
              _2x: "cards/big/5cfa97e2735a1f7ae6aef48f57fd738b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7f7a67a47c4681f7aacb338849d0f67d.jpg",
              _2x: "cards/c55afd4226be994b70013cd67e35fe52@2x.jpg"
            },
            big: {
              _1x: "cards/c55afd4226be994b70013cd67e35fe52@2x.jpg",
              _2x: "cards/big/d48bf850d4736b07edd2a4a0a9b2ba8c@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 140,
      name: d("Medusa"),
      cls: 1,
      color: 2,
      rarity: 4,
      baseAttack: 35,
      baseHp: 140,
      tag: "bot",
      effect: "Curse",
      images: {
        _1x: "cards/556e93cc3d945feb91512adb2a801484.jpg",
        _2x: "cards/e81a9d1d7c1c28b0924d22ca485a0d57@2x.jpg"
      },
      big: {
        _1x: "cards/e81a9d1d7c1c28b0924d22ca485a0d57@2x.jpg",
        _2x: "cards/big/bde701ca7e68e3667fb57bd94f90ec97@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/0d8accdfd3d973b089a295dacc798abe.png",
        _2x: "cards/icons/cc2b7450350258a4ada0552d7f1bf026@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/d9588fa2e4c777dd5a165bb6236b9397.jpg",
              _2x: "cards/625f7fe123233c505328bea86da3df7c@2x.jpg"
            },
            big: {
              _1x: "cards/625f7fe123233c505328bea86da3df7c@2x.jpg",
              _2x: "cards/big/e9c4da9859785ca671b7ad3450eb884e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7b1c44c3f742bed61188fc6ded4487ee.jpg",
              _2x: "cards/1c2e3cfa3aeec3a872186c0fa44d7d1e@2x.jpg"
            },
            big: {
              _1x: "cards/1c2e3cfa3aeec3a872186c0fa44d7d1e@2x.jpg",
              _2x: "cards/big/4c72a72647cb23ab5842aa761976c848@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/777cc6a95f0bf331d99723d2b16589c3.jpg",
              _2x: "cards/6e4a05262b8270833116c562af1adaad@2x.jpg"
            },
            big: {
              _1x: "cards/6e4a05262b8270833116c562af1adaad@2x.jpg",
              _2x: "cards/big/b0d01e0a4bf64f97ce78a31e11b1879d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4227fab3e2ae27909a6f6db7e2038d31.jpg",
              _2x: "cards/80e1641a05a141827fa14094952af3f3@2x.jpg"
            },
            big: {
              _1x: "cards/80e1641a05a141827fa14094952af3f3@2x.jpg",
              _2x: "cards/big/00884758b9238dffd15bcc87396ab15c@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 141,
      name: d("XXXmas Elf"),
      cls: 5,
      color: 2,
      rarity: 4,
      baseAttack: 66.5,
      baseHp: 108.5,
      tag: "promo",
      effect: "Heal",
      images: {
        _1x: "cards/11872cadc1b0da52e53a65c8c3c33c8f.jpg",
        _2x: "cards/f873e2fcfc8eb28cddc86150c1c13b9f@2x.jpg"
      },
      big: {
        _1x: "cards/f873e2fcfc8eb28cddc86150c1c13b9f@2x.jpg",
        _2x: "cards/big/2ca0663948ea8e487cb47b96154a879e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/f854a19507206012795f2163b151e468.png",
        _2x: "cards/icons/c64a08d2aefd1893ab7251fc7d178155@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/787dd2ff4a32f0d0c0418583f4d2a96a.jpg",
              _2x: "cards/3c2dfd378affb1d6b45e8f86a9d2092e@2x.jpg"
            },
            big: {
              _1x: "cards/3c2dfd378affb1d6b45e8f86a9d2092e@2x.jpg",
              _2x: "cards/big/c6244449187b8818fe37c85ba198d511@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/aa2800bec9edfc043eabc1f7dcd9ce82.jpg",
              _2x: "cards/4117afa983c6c0815e85777b1fc982b0@2x.jpg"
            },
            big: {
              _1x: "cards/4117afa983c6c0815e85777b1fc982b0@2x.jpg",
              _2x: "cards/big/bd548376797e0a282442f92ed6951601@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/53e9e8e46b65195e8fe52ae45425c6b8.jpg",
              _2x: "cards/ea8841d8f1706c2ba9e8cf20aea3323b@2x.jpg"
            },
            big: {
              _1x: "cards/ea8841d8f1706c2ba9e8cf20aea3323b@2x.jpg",
              _2x: "cards/big/c84ddc96bfcdb01abfcda3a96d227bfb@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e64c5a41955084a7dd079aa060cca1e8.jpg",
              _2x: "cards/e02f5a035c906aea2f37fdf76f30bd71@2x.jpg"
            },
            big: {
              _1x: "cards/e02f5a035c906aea2f37fdf76f30bd71@2x.jpg",
              _2x: "cards/big/d0d40bad7661d33af42971f831f7e78e@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 142,
      name: d("XXXmas Spirit"),
      cls: 4,
      color: 1,
      rarity: 4,
      baseAttack: 61.25,
      baseHp: 113.75,
      tag: "promo",
      effect: "Resurrect",
      images: {
        _1x: "cards/953a69703f6462d75b126898d9aba580.jpg",
        _2x: "cards/f15c81af33972ed1ab9f309d09e2adb7@2x.jpg"
      },
      big: {
        _1x: "cards/f15c81af33972ed1ab9f309d09e2adb7@2x.jpg",
        _2x: "cards/big/f9ec428aca33446d34a20925e701e1a9@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/220ecf6703623b1e7b557e9236b39033.png",
        _2x: "cards/icons/11b1cdf94af4ac28d51d77d3b5f80abc@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/297f8768254b612c2deb3bb195b2b4ee.jpg",
              _2x: "cards/e8dabc62fbd82d1f38d2c658839abb63@2x.jpg"
            },
            big: {
              _1x: "cards/e8dabc62fbd82d1f38d2c658839abb63@2x.jpg",
              _2x: "cards/big/34d75948ded1b84813f9a2e75a8792b0@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/19194ccc36f4356c49be50f3896d8b19.jpg",
              _2x: "cards/0d0bcb09561e0cb08e438e6dee5f1ff4@2x.jpg"
            },
            big: {
              _1x: "cards/0d0bcb09561e0cb08e438e6dee5f1ff4@2x.jpg",
              _2x: "cards/big/8a3ee04aa5a6a610944ee61a51455ddd@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6ef09270b7d896d8baf2ecc70e73a028.jpg",
              _2x: "cards/c1ddb07c4c675640c40b0bc4723263c2@2x.jpg"
            },
            big: {
              _1x: "cards/c1ddb07c4c675640c40b0bc4723263c2@2x.jpg",
              _2x: "cards/big/78bc04dcd7dc3f00d4af8ff5825066a1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f9ca6d5b01fe314a732e50f1c9774c11.jpg",
              _2x: "cards/04b24b5a0429fffd956fdcd12ebe6423@2x.jpg"
            },
            big: {
              _1x: "cards/04b24b5a0429fffd956fdcd12ebe6423@2x.jpg",
              _2x: "cards/big/d73a858214d832a20341ccc85095351f@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 143,
      name: d("Bone Walker"),
      cls: 1,
      color: 4,
      rarity: 5,
      baseAttack: 146.25,
      baseHp: 78.75,
      tag: "rating",
      effect: "Chilling",
      cset: 1,
      images: {
        _1x: "cards/3e811620efc551eae7797f1cf1410d08.jpg",
        _2x: "cards/149f347e0b806f03818d39163eef6e67@2x.jpg"
      },
      big: {
        _1x: "cards/149f347e0b806f03818d39163eef6e67@2x.jpg",
        _2x: "cards/big/f079e445ad5278c6ccba6e8baa3ee26e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/89c8dcc9627bd59f8e202078d1122b71.png",
        _2x: "cards/icons/a3c0c3db289a16b5d35abc5f5a0151e6@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0f643d5e5beb38c18815b1afa6a89ab8.jpg",
              _2x: "cards/de298496e75beacb51e91716a7de5d70@2x.jpg"
            },
            big: {
              _1x: "cards/de298496e75beacb51e91716a7de5d70@2x.jpg",
              _2x: "cards/big/560df136a44c2aad98f43e8bccde71d4@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/34e1719fa7506d24bbf6c203d57038cc.jpg",
              _2x: "cards/2e6a9b0a30596b6e6f55ade2fa4f7aba@2x.jpg"
            },
            big: {
              _1x: "cards/2e6a9b0a30596b6e6f55ade2fa4f7aba@2x.jpg",
              _2x: "cards/big/f36755951342f88a7d30fa02f2c63f1d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bd9ef5f9b23bbaac0744b7a431aba05d.jpg",
              _2x: "cards/4935b4642aa3af6bb7b8b3c927af35ad@2x.jpg"
            },
            big: {
              _1x: "cards/4935b4642aa3af6bb7b8b3c927af35ad@2x.jpg",
              _2x: "cards/big/c9a0ff2e2ea9c99950b87111d039b3d1@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7c2077faa013a98281b9a724478fb663.jpg",
              _2x: "cards/16ae04d9048029a5afd21f83f7f34673@2x.jpg"
            },
            big: {
              _1x: "cards/16ae04d9048029a5afd21f83f7f34673@2x.jpg",
              _2x: "cards/big/25dda8e7d4c4877e4ddaa2808bfd79c4@2x.jpg"
            }
          }
        }]
      },
      evolveDupes: [1, 1, 1, 1],
      levelupItems: [
        [
          [2502, 1]
        ],
        [
          [2502, 1]
        ],
        [
          [2502, 2]
        ],
        [
          [2502, 2],
          [2504, 2]
        ],
        [
          [2502, 3]
        ],
        [
          [2502, 3]
        ],
        [
          [2502, 4]
        ],
        [
          [2502, 4]
        ],
        [
          [2502, 5],
          [2504, 4]
        ],
        [
          [2502, 5]
        ],
        [
          [2502, 6]
        ],
        [
          [2502, 6]
        ],
        [
          [2502, 7]
        ],
        [
          [2502, 8],
          [2504, 6]
        ],
        [
          [2502, 8]
        ],
        [
          [2502, 8]
        ],
        [
          [2502, 9]
        ],
        [
          [2502, 9]
        ],
        [
          [2502, 10],
          [2504, 8]
        ],
        [
          [2502, 10]
        ],
        [
          [2502, 11]
        ],
        [
          [2502, 11]
        ],
        [
          [2502, 12]
        ],
        [
          [2502, 12],
          [2504, 20]
        ]
      ]
    }, {
      cardId: 144,
      name: d("Harlequin"),
      cls: 1,
      color: 5,
      rarity: 4,
      baseAttack: 96.25,
      baseHp: 78.75,
      tag: "rating",
      effect: "Curse",
      cset: 2,
      images: {
        _1x: "cards/5c5299f9038516c845818af3270cc8ce.jpg",
        _2x: "cards/82f154a5d2a7f6d8d01c779a4edefa6f@2x.jpg"
      },
      big: {
        _1x: "cards/82f154a5d2a7f6d8d01c779a4edefa6f@2x.jpg",
        _2x: "cards/big/a3a60bdfe51009c50e2d0afb4bf9048a@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/731abbe4fbafef09d5e4b65cc2600c2f.png",
        _2x: "cards/icons/6cfe149ab1580044f949c91f3dc488df@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/493d3efe178d187b89685e7d5c19ee5a.jpg",
              _2x: "cards/55e44b91cba1ffac6cc137619fa1f043@2x.jpg"
            },
            big: {
              _1x: "cards/55e44b91cba1ffac6cc137619fa1f043@2x.jpg",
              _2x: "cards/big/b213e61e824921f63caf4f5a846cf2cb@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c09467c991d8486546fa51faa0ae36f0.jpg",
              _2x: "cards/6582ecf284ae5395d7939dd05b1497a8@2x.jpg"
            },
            big: {
              _1x: "cards/6582ecf284ae5395d7939dd05b1497a8@2x.jpg",
              _2x: "cards/big/e307332f83c01e850e0c575318157427@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c212d5ac26e94bb5d4547637410a7f07.jpg",
              _2x: "cards/ffb05c33bc5501f9ae8f1fa0ae085a6f@2x.jpg"
            },
            big: {
              _1x: "cards/ffb05c33bc5501f9ae8f1fa0ae085a6f@2x.jpg",
              _2x: "cards/big/565e3d5e975f2724f4894198de565434@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e4c0b05f5d972d7abdf242b051ac2043.jpg",
              _2x: "cards/6241983b22733dc60ff1693bdb3d11a3@2x.jpg"
            },
            big: {
              _1x: "cards/6241983b22733dc60ff1693bdb3d11a3@2x.jpg",
              _2x: "cards/big/aa3c02061c5b73792d2801db8778186d@2x.jpg"
            }
          }
        }]
      },
      evolveDupes: [1, 1, 1, 1],
      levelupItems: [
        [
          [2501, 1]
        ],
        [
          [2501, 1]
        ],
        [
          [2501, 1]
        ],
        [
          [2501, 2],
          [2503, 1]
        ],
        [
          [2501, 2]
        ],
        [
          [2501, 2]
        ],
        [
          [2501, 3]
        ],
        [
          [2501, 3]
        ],
        [
          [2501, 3],
          [2503, 2]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 5]
        ],
        [
          [2501, 5],
          [2503, 3]
        ],
        [
          [2501, 5]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 7],
          [2503, 4]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7],
          [2503, 5]
        ]
      ]
    }, {
      cardId: 145,
      name: d("Mechanic"),
      cls: 1,
      color: 2,
      rarity: 1,
      baseAttack: 65,
      baseHp: 35,
      tag: "pvp",
      images: {
        _1x: "cards/f7937ebe68dcc6bd76b7b5559277c9bd.jpg",
        _2x: "cards/156da1eacebf320c1547e29f8e678097@2x.jpg"
      },
      big: {
        _1x: "cards/156da1eacebf320c1547e29f8e678097@2x.jpg",
        _2x: "cards/big/23d30cb14784328360b0150d62493bbf@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/81366f9dfc4f510fb724f7c964e19173.png",
        _2x: "cards/icons/cf3a3371ce118618c4e5501abf488c34@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/e769bac7256ce8fa517a97eac5315006.jpg",
              _2x: "cards/132649ede01abafde133856233f69e9f@2x.jpg"
            },
            big: {
              _1x: "cards/132649ede01abafde133856233f69e9f@2x.jpg",
              _2x: "cards/big/80b175945b342b3bbed2b75a14659bbd@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/bb1832bb68853aeefc3c597317d4feff.jpg",
              _2x: "cards/000bed6638b54d18794ea79041bd4c38@2x.jpg"
            },
            big: {
              _1x: "cards/000bed6638b54d18794ea79041bd4c38@2x.jpg",
              _2x: "cards/big/c74861ca77bdd2737ae1545e7d885fac@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/55ddca01f44969afd0ba4917deaa81aa.jpg",
              _2x: "cards/cd9fde1f68f9bcbf44e38bee086186a2@2x.jpg"
            },
            big: {
              _1x: "cards/cd9fde1f68f9bcbf44e38bee086186a2@2x.jpg",
              _2x: "cards/big/1082dc86e139c0b12e91b5238680bb37@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/253aea49511a2f3ea3fbd7d0a32db3b2.jpg",
              _2x: "cards/ec02a9dec62e068f63bede8093880782@2x.jpg"
            },
            big: {
              _1x: "cards/ec02a9dec62e068f63bede8093880782@2x.jpg",
              _2x: "cards/big/7f9c766cb92968dc962aafbbe7f1f486@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 146,
      name: d("Blind Warrior"),
      cls: 2,
      color: 1,
      rarity: 2,
      baseAttack: 68.75,
      baseHp: 56.25,
      tag: "pvp",
      cset: 3,
      images: {
        _1x: "cards/b02611ec0ff77b833a81d699f2b0f179.jpg",
        _2x: "cards/b33a71f29bf55dcae19484e17fb36153@2x.jpg"
      },
      big: {
        _1x: "cards/b33a71f29bf55dcae19484e17fb36153@2x.jpg",
        _2x: "cards/big/f151b71feb0957e5de7b237c9f7dc012@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/908e9667d994dc55ddfa3e3837d22dd7.png",
        _2x: "cards/icons/66fc3d5de65074a481b404ef1c066e45@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/cec37510f47aa4cc45315fb3cb0ff850.jpg",
              _2x: "cards/3e6d44183fed9cdded4288a3a9a5605e@2x.jpg"
            },
            big: {
              _1x: "cards/3e6d44183fed9cdded4288a3a9a5605e@2x.jpg",
              _2x: "cards/big/d658c163a1500ed9af1122a2ece1d15c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1c21a6eda1bde720fed2286e0e5b3f70.jpg",
              _2x: "cards/8f1e3e306dd8631cea92f67447e80071@2x.jpg"
            },
            big: {
              _1x: "cards/8f1e3e306dd8631cea92f67447e80071@2x.jpg",
              _2x: "cards/big/23d18cd7046bfca8659fe698e427411b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6a24872d04a52ccbbc7ea997b68c13b3.jpg",
              _2x: "cards/2e82994ba1ebd05ac65e82d53528e850@2x.jpg"
            },
            big: {
              _1x: "cards/2e82994ba1ebd05ac65e82d53528e850@2x.jpg",
              _2x: "cards/big/f1a9e37875fa8135e34cca233505598e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ec759c66e713c09dc36cbcba1aa61a23.jpg",
              _2x: "cards/9a2d999dfda9e79a4dc07d8a8ad38de7@2x.jpg"
            },
            big: {
              _1x: "cards/9a2d999dfda9e79a4dc07d8a8ad38de7@2x.jpg",
              _2x: "cards/big/021dba61ffbbaa9ea56b04405387019d@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 147,
      name: d("Geomancer"),
      cls: 3,
      color: 3,
      rarity: 2,
      baseAttack: 81.25,
      baseHp: 43.75,
      tag: "pvp",
      cset: 1,
      images: {
        _1x: "cards/3d50822dc18c56669d1348ecfe6b97d6.jpg",
        _2x: "cards/a9b264e932d4af4fbf364cc9ea36839f@2x.jpg"
      },
      big: {
        _1x: "cards/a9b264e932d4af4fbf364cc9ea36839f@2x.jpg",
        _2x: "cards/big/e01293a57146f9ba1934643f19361d1c@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/6f1f12c9b8172535e5b256e8881fbcc0.png",
        _2x: "cards/icons/12229923840cff5e7a2762d05f277b36@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/0e12919306a811553d559ce8bfa325d3.jpg",
              _2x: "cards/211fd211a9ac72d64d1a7654f2327499@2x.jpg"
            },
            big: {
              _1x: "cards/211fd211a9ac72d64d1a7654f2327499@2x.jpg",
              _2x: "cards/big/c31c9b25472ca4e1dbde6e86a9005404@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6cd9d2b9e7d859699b084f950c3a9ef5.jpg",
              _2x: "cards/8ac5793736da729f1563a5568e08fe98@2x.jpg"
            },
            big: {
              _1x: "cards/8ac5793736da729f1563a5568e08fe98@2x.jpg",
              _2x: "cards/big/b8c22651d49483a63c3c956785146503@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c5a7272418a26d82bb35edffe9f7c709.jpg",
              _2x: "cards/fa911a71891e58d69a88466833f67844@2x.jpg"
            },
            big: {
              _1x: "cards/fa911a71891e58d69a88466833f67844@2x.jpg",
              _2x: "cards/big/2a803d792917ddec191dbab4ec054942@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ade695b9ead610d61a5bdcb79a31c5ef.jpg",
              _2x: "cards/23d34fb404ca862e97b19cda179e5d44@2x.jpg"
            },
            big: {
              _1x: "cards/23d34fb404ca862e97b19cda179e5d44@2x.jpg",
              _2x: "cards/big/7ebfc6288c12293583fab1f5c0567052@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 148,
      name: d("Barbarian"),
      cls: 4,
      color: 1,
      rarity: 2,
      baseAttack: 68.75,
      baseHp: 56.25,
      tag: "pvp",
      cset: 3,
      images: {
        _1x: "cards/cdff4b78f1477ea56d293af0ced37ebb.jpg",
        _2x: "cards/556b86d1f0700c28247ed43c1e7fa973@2x.jpg"
      },
      big: {
        _1x: "cards/556b86d1f0700c28247ed43c1e7fa973@2x.jpg",
        _2x: "cards/big/ed039fa815a79a12297801c1df10d473@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/cfb52cf5e833d019cabdb3f9c15649eb.png",
        _2x: "cards/icons/2f2fd0f03ceb8d9c2082bcb6f1fa49ae@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/2d1f427536b2b3a3b2d7aab268946d53.jpg",
              _2x: "cards/1c9c018513736db8f70a1ddb9d7c7b9a@2x.jpg"
            },
            big: {
              _1x: "cards/1c9c018513736db8f70a1ddb9d7c7b9a@2x.jpg",
              _2x: "cards/big/867a2a6c6928750e7aa2210ad4574c06@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2a1e455a9f473e05db78b54f98089a12.jpg",
              _2x: "cards/7d533fec6eec59c0feeed8f7b2acdfae@2x.jpg"
            },
            big: {
              _1x: "cards/7d533fec6eec59c0feeed8f7b2acdfae@2x.jpg",
              _2x: "cards/big/c60ba16a9891c9a6a2e5fd7397926e56@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/fec619dc0e70fca7f4e5f9fe0834c8b7.jpg",
              _2x: "cards/36668a2276a7ab23d5a7737fc1fb16df@2x.jpg"
            },
            big: {
              _1x: "cards/36668a2276a7ab23d5a7737fc1fb16df@2x.jpg",
              _2x: "cards/big/8d43e3b8afebfe9ff3c83ed75ad744bc@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/8300c246de38ef3f7a4962bf6c5a51b3.jpg",
              _2x: "cards/af54d67c21837998474e35763f0e0aca@2x.jpg"
            },
            big: {
              _1x: "cards/af54d67c21837998474e35763f0e0aca@2x.jpg",
              _2x: "cards/big/54de5ed33c1cff3527081a9615664c89@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 149,
      name: d("Forest Spirit"),
      cls: 5,
      color: 2,
      rarity: 3,
      baseAttack: 97.5,
      baseHp: 52.5,
      tag: "pvp",
      cset: 2,
      images: {
        _1x: "cards/b0f6e1c5cb753d23519eac500fb26695.jpg",
        _2x: "cards/724a9d3196a33b3a6c12c95a3a0ae449@2x.jpg"
      },
      big: {
        _1x: "cards/724a9d3196a33b3a6c12c95a3a0ae449@2x.jpg",
        _2x: "cards/big/2b2639501a4806260b4bfffd30924f8a@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/5c4717f41352389aa13f40afcfa884ca.png",
        _2x: "cards/icons/82ef72ca95a85fa66de9cb3c98ab524f@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/00b965f0018f43ea83e364ea93a8b341.jpg",
              _2x: "cards/582ae56bdcbc8596555a039c080e1bfa@2x.jpg"
            },
            big: {
              _1x: "cards/582ae56bdcbc8596555a039c080e1bfa@2x.jpg",
              _2x: "cards/big/d0118a72ba8b6073c74de448aeb80e79@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e5e17cc7ef602619999c30dede91c92f.jpg",
              _2x: "cards/4fbfc88583cc81be14b69673ff7e6872@2x.jpg"
            },
            big: {
              _1x: "cards/4fbfc88583cc81be14b69673ff7e6872@2x.jpg",
              _2x: "cards/big/4a5555d7903bc2c6c8d2918b742f24df@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/a3ccdbca684461d7a4c1bc3e27750d27.jpg",
              _2x: "cards/e6ed67d53a5c936ff077300a33629122@2x.jpg"
            },
            big: {
              _1x: "cards/e6ed67d53a5c936ff077300a33629122@2x.jpg",
              _2x: "cards/big/574e1ec3f42b1f634028fd525a47bb68@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cfd17add0e4adfca40739ed3bd2586d9.jpg",
              _2x: "cards/d0ebe5bf6907edce68b2244bec2ace79@2x.jpg"
            },
            big: {
              _1x: "cards/d0ebe5bf6907edce68b2244bec2ace79@2x.jpg",
              _2x: "cards/big/35d1123cfe13283404afff92856bd338@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 150,
      name: d("Light Elemental"),
      cls: 1,
      color: 4,
      rarity: 4,
      baseAttack: 96.25,
      baseHp: 78.75,
      tag: "pvp",
      cset: 2,
      images: {
        _1x: "cards/cbb2a446e9e45f68a6dbcfcc0cb9af24.jpg",
        _2x: "cards/b44e933dcf652c316aa8d8b028234ba4@2x.jpg"
      },
      big: {
        _1x: "cards/b44e933dcf652c316aa8d8b028234ba4@2x.jpg",
        _2x: "cards/big/701c6f52ec648142db5707a26542a9b2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/ca0f62d2392712cfc8f94853e838de96.png",
        _2x: "cards/icons/a7b184b859d08b67e7997513cd561e0c@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/29b7d63417bfbc41bda5a1e224662c2a.jpg",
              _2x: "cards/bf45cb3286f0e5f0db6496e097049062@2x.jpg"
            },
            big: {
              _1x: "cards/bf45cb3286f0e5f0db6496e097049062@2x.jpg",
              _2x: "cards/big/b8c80de545cf338ec1bec5c6253ed8bf@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ec7f261ffb20bfc2220fb5b8760242e4.jpg",
              _2x: "cards/f73d518fc7b9f5cd69c36c967a882a79@2x.jpg"
            },
            big: {
              _1x: "cards/f73d518fc7b9f5cd69c36c967a882a79@2x.jpg",
              _2x: "cards/big/3efd512b93a20e9efa55863b27a3a59e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f646f77f8ac80fce67fe3c5155a121e1.jpg",
              _2x: "cards/4c0a5a0439b696d31a0c4c2f05979be9@2x.jpg"
            },
            big: {
              _1x: "cards/4c0a5a0439b696d31a0c4c2f05979be9@2x.jpg",
              _2x: "cards/big/14c1bed556f46ed853fe75b41ae0dd29@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/71544ac02a770529069041fddb496f14.jpg",
              _2x: "cards/fcce246d4ca75c70209a9cb73039d67c@2x.jpg"
            },
            big: {
              _1x: "cards/fcce246d4ca75c70209a9cb73039d67c@2x.jpg",
              _2x: "cards/big/7b2841cd04edc257fd9e80bd53f0ac38@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 151,
      name: d("Dark Twins"),
      cls: 2,
      color: 5,
      rarity: 4,
      baseAttack: 113.75,
      baseHp: 61.25,
      tag: "pvp",
      cset: 1,
      images: {
        _1x: "cards/b10e2cb3546d96836db529528e110cf5.jpg",
        _2x: "cards/92c9af457e6fb03bf63d95887c868049@2x.jpg"
      },
      big: {
        _1x: "cards/92c9af457e6fb03bf63d95887c868049@2x.jpg",
        _2x: "cards/big/391a44ac1298118a6ffa349d72f16f32@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/aff1978c8df36b1749e4e973ae25d25f.png",
        _2x: "cards/icons/a086becf1478a013c8fa2c10030692f2@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/ee9bb6745c1b070a6be859c7871b5250.jpg",
              _2x: "cards/839eb03c17d6606d14f7f93a27431889@2x.jpg"
            },
            big: {
              _1x: "cards/839eb03c17d6606d14f7f93a27431889@2x.jpg",
              _2x: "cards/big/d060f888d2bc62bbbb8e9c2c69a5ac8b@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/67ad13276b3eb3c03ce9fbb55eafdcc7.jpg",
              _2x: "cards/040737351f73e2b3697dfb2d5b74e539@2x.jpg"
            },
            big: {
              _1x: "cards/040737351f73e2b3697dfb2d5b74e539@2x.jpg",
              _2x: "cards/big/2b40b2cf1f876160fc220e5256f6c7ae@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3c25598e88f990ac581a123912f1df83.jpg",
              _2x: "cards/9a2368e9455f4bb8905648456892850b@2x.jpg"
            },
            big: {
              _1x: "cards/9a2368e9455f4bb8905648456892850b@2x.jpg",
              _2x: "cards/big/ba5b4d5fb6e4d5a7333a3ca08c738c56@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/20186bbc4a77b131a4318855f34c1b6f.jpg",
              _2x: "cards/462ce7f87c0c51c6dacda1c2f60e3bf6@2x.jpg"
            },
            big: {
              _1x: "cards/462ce7f87c0c51c6dacda1c2f60e3bf6@2x.jpg",
              _2x: "cards/big/1c158b6d90931db415338d78b35d1592@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 152,
      name: d("Oglodi"),
      cls: 1,
      color: 3,
      rarity: 4,
      baseAttack: 113.75,
      baseHp: 61.25,
      tag: "rating",
      effect: "Rage",
      cset: 1,
      images: {
        _1x: "cards/48bde92818f67f47b4a98b9866b0cb8a.jpg",
        _2x: "cards/e4c3b90a597d8dce86b43cee2e3c45d1@2x.jpg"
      },
      big: {
        _1x: "cards/e4c3b90a597d8dce86b43cee2e3c45d1@2x.jpg",
        _2x: "cards/big/bbb079f0c148262f7e5fcd88df3e77c2@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/9e337e5a10bb19229a10ce62a34f0ac7.png",
        _2x: "cards/icons/7ff1a0f5ea277caa9afb46ccbf0fc722@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/df975164f0b5457ce708d649799c0573.jpg",
              _2x: "cards/727631dc6ab318e8fa47b29085b7376c@2x.jpg"
            },
            big: {
              _1x: "cards/727631dc6ab318e8fa47b29085b7376c@2x.jpg",
              _2x: "cards/big/29cfa2f8bfbdaaa6ee7f5b8b9611bdee@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/e2dd8caebd2b1b9b191aaecd6ab398ea.jpg",
              _2x: "cards/9de9d2302f5c5ab7eb433923577cb498@2x.jpg"
            },
            big: {
              _1x: "cards/9de9d2302f5c5ab7eb433923577cb498@2x.jpg",
              _2x: "cards/big/45d08c9ef9490b5f889f1c394fe2161d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2bcd07ec3a2c0d43e5fae071e17cb2fd.jpg",
              _2x: "cards/ab45fe654ef613b10e557d021e918a2a@2x.jpg"
            },
            big: {
              _1x: "cards/ab45fe654ef613b10e557d021e918a2a@2x.jpg",
              _2x: "cards/big/c4ed2a25aa062acd4dd41524ca9a5203@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/7328f890b67e01854338c9833094347c.jpg",
              _2x: "cards/ccc715a35f242c147f6662ba96913158@2x.jpg"
            },
            big: {
              _1x: "cards/ccc715a35f242c147f6662ba96913158@2x.jpg",
              _2x: "cards/big/079e5a1da6cb85d7008dd0b815142e8b@2x.jpg"
            }
          }
        }]
      },
      evolveDupes: [1, 1, 1, 1],
      levelupItems: [
        [
          [2501, 1]
        ],
        [
          [2501, 1]
        ],
        [
          [2501, 1]
        ],
        [
          [2501, 2],
          [2503, 1]
        ],
        [
          [2501, 2]
        ],
        [
          [2501, 2]
        ],
        [
          [2501, 3]
        ],
        [
          [2501, 3]
        ],
        [
          [2501, 3],
          [2503, 2]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 5]
        ],
        [
          [2501, 5],
          [2503, 3]
        ],
        [
          [2501, 5]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 7],
          [2503, 4]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7],
          [2503, 5]
        ]
      ]
    }, {
      cardId: 153,
      name: d("Temptress"),
      cls: 1,
      color: 1,
      rarity: 5,
      baseAttack: 146.25,
      baseHp: 78.75,
      tag: "rating",
      effect: "MassRage",
      cset: 3,
      images: {
        _1x: "cards/3aa23f512251310bd4059eed3dfd3cb5.jpg",
        _2x: "cards/1c93161f9dd627fd92c8c84f6f61a0d7@2x.jpg"
      },
      big: {
        _1x: "cards/1c93161f9dd627fd92c8c84f6f61a0d7@2x.jpg",
        _2x: "cards/big/5aa796e4e0ed8365d49cb2479ff4daa5@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/a10b7e1d1474331f564d08979e07b680.png",
        _2x: "cards/icons/6ac0f78cea858648d7a32c81684c1e2e@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/45df697a2ffc6299faea8df4f52f2433.jpg",
              _2x: "cards/93c823cd6e0f30f7fa0c5023ffda1360@2x.jpg"
            },
            big: {
              _1x: "cards/93c823cd6e0f30f7fa0c5023ffda1360@2x.jpg",
              _2x: "cards/big/731b5c7c99266364cefa96294f5eea3c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/3c78b64d387da890efb805d2859f4551.jpg",
              _2x: "cards/4b9340a825e4b67bc04708378d1b5ba8@2x.jpg"
            },
            big: {
              _1x: "cards/4b9340a825e4b67bc04708378d1b5ba8@2x.jpg",
              _2x: "cards/big/2acb01086901112ccf2d645620c23a94@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ebd93440cab73eced3f4b4f1852e3f60.jpg",
              _2x: "cards/41059492b06ae442e164ea6aced28fba@2x.jpg"
            },
            big: {
              _1x: "cards/41059492b06ae442e164ea6aced28fba@2x.jpg",
              _2x: "cards/big/ec4c2ae0d7f9317a63d935c5baf98a3f@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/30d1a3eb12d94acac062c7fbe9541660.jpg",
              _2x: "cards/862c031911241306e940feb323ab8dcc@2x.jpg"
            },
            big: {
              _1x: "cards/862c031911241306e940feb323ab8dcc@2x.jpg",
              _2x: "cards/big/bf4e729c7497cda2397b8757fcf88ccd@2x.jpg"
            }
          }
        }]
      },
      evolveDupes: [1, 1, 1, 1],
      levelupItems: [
        [
          [2502, 1]
        ],
        [
          [2502, 1]
        ],
        [
          [2502, 2]
        ],
        [
          [2502, 2],
          [2504, 2]
        ],
        [
          [2502, 3]
        ],
        [
          [2502, 3]
        ],
        [
          [2502, 4]
        ],
        [
          [2502, 4]
        ],
        [
          [2502, 5],
          [2504, 4]
        ],
        [
          [2502, 5]
        ],
        [
          [2502, 6]
        ],
        [
          [2502, 6]
        ],
        [
          [2502, 7]
        ],
        [
          [2502, 8],
          [2504, 6]
        ],
        [
          [2502, 8]
        ],
        [
          [2502, 8]
        ],
        [
          [2502, 9]
        ],
        [
          [2502, 9]
        ],
        [
          [2502, 10],
          [2504, 8]
        ],
        [
          [2502, 10]
        ],
        [
          [2502, 11]
        ],
        [
          [2502, 11]
        ],
        [
          [2502, 12]
        ],
        [
          [2502, 12],
          [2504, 20]
        ]
      ]
    }, {
      cardId: 154,
      name: d("Owl"),
      cls: 1,
      color: 5,
      rarity: 4,
      baseAttack: 113.75,
      baseHp: 61.25,
      tag: "rating",
      effect: "Shield",
      cset: 3,
      images: {
        _1x: "cards/6e44f8bb1dc437007801230df033140e.jpg",
        _2x: "cards/5820183120772a484f46b536cc53e0d5@2x.jpg"
      },
      big: {
        _1x: "cards/5820183120772a484f46b536cc53e0d5@2x.jpg",
        _2x: "cards/big/0051c900ddd58a00188c5b135c5d558e@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/2d469a6c8123efb76ac608a874574340.png",
        _2x: "cards/icons/934fffb005e6025925f0874d56a10581@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/494e2c076b59945811ead0f65f51f02d.jpg",
              _2x: "cards/2c0315dc4255a1d6ac514a79e0517cba@2x.jpg"
            },
            big: {
              _1x: "cards/2c0315dc4255a1d6ac514a79e0517cba@2x.jpg",
              _2x: "cards/big/c60d9aafec859ce72a3e6ff8876d0848@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/63f50a8dd29b1d1af473d931b94839a9.jpg",
              _2x: "cards/731ce480f674cc70d2acb021cccd0fb1@2x.jpg"
            },
            big: {
              _1x: "cards/731ce480f674cc70d2acb021cccd0fb1@2x.jpg",
              _2x: "cards/big/62d3efd82939ba56099f16a3cc38144c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/587c115095fbb2d693a4293b98a28b42.jpg",
              _2x: "cards/a6c1d3164160e34cb27fadcb3f8cbee7@2x.jpg"
            },
            big: {
              _1x: "cards/a6c1d3164160e34cb27fadcb3f8cbee7@2x.jpg",
              _2x: "cards/big/d4dfd22d3483b280f74122708580678c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4d7d3a38aa7866f22f87b29c1ea361b4.jpg",
              _2x: "cards/9e83455e5e0926c2900530ed99691a32@2x.jpg"
            },
            big: {
              _1x: "cards/9e83455e5e0926c2900530ed99691a32@2x.jpg",
              _2x: "cards/big/2fa039be5d0534f13800a0ca80eeda1b@2x.jpg"
            }
          }
        }]
      },
      evolveDupes: [1, 1, 1, 1],
      levelupItems: [
        [
          [2501, 1]
        ],
        [
          [2501, 1]
        ],
        [
          [2501, 1]
        ],
        [
          [2501, 2],
          [2503, 1]
        ],
        [
          [2501, 2]
        ],
        [
          [2501, 2]
        ],
        [
          [2501, 3]
        ],
        [
          [2501, 3]
        ],
        [
          [2501, 3],
          [2503, 2]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 4]
        ],
        [
          [2501, 5]
        ],
        [
          [2501, 5],
          [2503, 3]
        ],
        [
          [2501, 5]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 6]
        ],
        [
          [2501, 7],
          [2503, 4]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7]
        ],
        [
          [2501, 7],
          [2503, 5]
        ]
      ]
    }, {
      cardId: 155,
      name: d("Lady Butterfly"),
      cls: 1,
      color: 2,
      rarity: 5,
      baseAttack: 146.25,
      baseHp: 78.75,
      tag: "rating",
      effect: "MassShield",
      cset: 2,
      images: {
        _1x: "cards/254ce60ebb58e61909d677ce776ec62b.jpg",
        _2x: "cards/c0e4f52edeb29574e56d23432a7de543@2x.jpg"
      },
      big: {
        _1x: "cards/c0e4f52edeb29574e56d23432a7de543@2x.jpg",
        _2x: "cards/big/3d68d2c2976aa40a522b790103615aff@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/3de25485e708d553cbdf2d6237115efd.png",
        _2x: "cards/icons/e45dab8f6ac59a34e0a3898e41a2e9b6@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/460d744fb10d91e636948aec490717fb.jpg",
              _2x: "cards/68cf0aa94d9f97a5ba078a46c2a4a606@2x.jpg"
            },
            big: {
              _1x: "cards/68cf0aa94d9f97a5ba078a46c2a4a606@2x.jpg",
              _2x: "cards/big/6101144e679f25ea98c1c0b2cbfda092@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c9944900dfdb3858720d991ec920aea2.jpg",
              _2x: "cards/e73a8fa17727fe5ace4ddac71039b118@2x.jpg"
            },
            big: {
              _1x: "cards/e73a8fa17727fe5ace4ddac71039b118@2x.jpg",
              _2x: "cards/big/0c7d76aa1b4ae71cee0635598aa86e19@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/82166d6f41fd625bf8deb2f74400dbdc.jpg",
              _2x: "cards/e4693311c0888cce9edca89ed1ab969c@2x.jpg"
            },
            big: {
              _1x: "cards/e4693311c0888cce9edca89ed1ab969c@2x.jpg",
              _2x: "cards/big/220f073ef43d60776944f9af72eb8723@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/c7c79a3584363afedb67c20f56501b61.jpg",
              _2x: "cards/3fd3cb81f748bf2a11273b63949a0368@2x.jpg"
            },
            big: {
              _1x: "cards/3fd3cb81f748bf2a11273b63949a0368@2x.jpg",
              _2x: "cards/big/34545ba90eaa6b47379acab3b8809310@2x.jpg"
            }
          }
        }]
      },
      evolveDupes: [1, 1, 1, 1],
      levelupItems: [
        [
          [2502, 1]
        ],
        [
          [2502, 1]
        ],
        [
          [2502, 2]
        ],
        [
          [2502, 2],
          [2504, 2]
        ],
        [
          [2502, 3]
        ],
        [
          [2502, 3]
        ],
        [
          [2502, 4]
        ],
        [
          [2502, 4]
        ],
        [
          [2502, 5],
          [2504, 4]
        ],
        [
          [2502, 5]
        ],
        [
          [2502, 6]
        ],
        [
          [2502, 6]
        ],
        [
          [2502, 7]
        ],
        [
          [2502, 8],
          [2504, 6]
        ],
        [
          [2502, 8]
        ],
        [
          [2502, 8]
        ],
        [
          [2502, 9]
        ],
        [
          [2502, 9]
        ],
        [
          [2502, 10],
          [2504, 8]
        ],
        [
          [2502, 10]
        ],
        [
          [2502, 11]
        ],
        [
          [2502, 11]
        ],
        [
          [2502, 12]
        ],
        [
          [2502, 12],
          [2504, 20]
        ]
      ]
    }, {
      cardId: 156,
      name: d("Outworld Devourer"),
      cls: 1,
      color: 5,
      rarity: 1,
      baseAttack: 65,
      baseHp: 35,
      tag: "darkevent",
      images: {
        _1x: "cards/a51a87a8b5926272edc8b12bea91565d.jpg",
        _2x: "cards/eb3825e7304d15f1592f08786425ab5d@2x.jpg"
      },
      big: {
        _1x: "cards/eb3825e7304d15f1592f08786425ab5d@2x.jpg",
        _2x: "cards/big/076f5dfc09723093a56dec0b5cc2509a@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/fe6461c468160ce71485dd893d93e1ad.png",
        _2x: "cards/icons/ff349ea4339db417a684d2bcaddc43c2@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/95482c18b13eed56bc69b841b32e6165.jpg",
              _2x: "cards/5175264de582dbf82ac014f4276781ab@2x.jpg"
            },
            big: {
              _1x: "cards/5175264de582dbf82ac014f4276781ab@2x.jpg",
              _2x: "cards/big/4561f621ae4d17801525c4d91e80b761@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/43f355ef86d1d928147737028943a725.jpg",
              _2x: "cards/2c5281383e29d19b3c05405781a5c3c2@2x.jpg"
            },
            big: {
              _1x: "cards/2c5281383e29d19b3c05405781a5c3c2@2x.jpg",
              _2x: "cards/big/2cabcea3a083ba76cfd6866d24f4b465@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/1f9277f27492d1f397b9545ddb34ae43.jpg",
              _2x: "cards/dec0930904823f33bae5cc54c86989a1@2x.jpg"
            },
            big: {
              _1x: "cards/dec0930904823f33bae5cc54c86989a1@2x.jpg",
              _2x: "cards/big/4e2d73f3d8e16c8d6db926eae9d88a3c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4cf5aa253f4b30288ae4e9c9a851ddab.jpg",
              _2x: "cards/9853fba55234bbf6b60949ff29a3f32f@2x.jpg"
            },
            big: {
              _1x: "cards/9853fba55234bbf6b60949ff29a3f32f@2x.jpg",
              _2x: "cards/big/c1c7762fb0868cdc5a9dbdd6bd93a80d@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 157,
      name: d("Soul Catcher"),
      cls: 2,
      color: 5,
      rarity: 3,
      baseAttack: 67.5,
      baseHp: 82.5,
      tag: "darkevent",
      images: {
        _1x: "cards/35da54b3a2563a795e2c9e50ba008499.jpg",
        _2x: "cards/3aac33495ad0b422175ff8e7b31347f9@2x.jpg"
      },
      big: {
        _1x: "cards/3aac33495ad0b422175ff8e7b31347f9@2x.jpg",
        _2x: "cards/big/48515895dff0ea1d27e65fe34d08f58b@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/5ed2232bb4e4349026231e85317fc9e6.png",
        _2x: "cards/icons/990193cccd1756c428c3cb368b5246c7@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/2e94f21779f797230b7dd3c10654d26b.jpg",
              _2x: "cards/1932486187d75eabe0ee402e90d940d6@2x.jpg"
            },
            big: {
              _1x: "cards/1932486187d75eabe0ee402e90d940d6@2x.jpg",
              _2x: "cards/big/d9a7fd939acdd446ce3d704b52f7d133@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/877cc058b089fe5c5b95f72d090e2bc1.jpg",
              _2x: "cards/0282323ce49f5bd6cd9f1e402400d76d@2x.jpg"
            },
            big: {
              _1x: "cards/0282323ce49f5bd6cd9f1e402400d76d@2x.jpg",
              _2x: "cards/big/5f89de4ab5d854bd22beea2102e35693@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6ed746c205e240b7f5dac25a512f83bf.jpg",
              _2x: "cards/2bc2d52fe65cb0d10a32bffa3875919d@2x.jpg"
            },
            big: {
              _1x: "cards/2bc2d52fe65cb0d10a32bffa3875919d@2x.jpg",
              _2x: "cards/big/e97dfc158fd3bf9aad14c0e11ec5955e@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/95788ef55d1fea331f210333948f1e5a.jpg",
              _2x: "cards/739f1c7f6ea61a2318f2b8a7da60e7c1@2x.jpg"
            },
            big: {
              _1x: "cards/739f1c7f6ea61a2318f2b8a7da60e7c1@2x.jpg",
              _2x: "cards/big/5f8eb509e133458c641b90a594974031@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 158,
      name: d("Fallen Angel"),
      cls: 3,
      color: 5,
      rarity: 2,
      baseAttack: 87.5,
      baseHp: 37.5,
      tag: "darkevent",
      images: {
        _1x: "cards/36bd58172113c73bdc05227f8f4af786.jpg",
        _2x: "cards/89b3fbcd2f02f148428ffc22c74fe0bb@2x.jpg"
      },
      big: {
        _1x: "cards/89b3fbcd2f02f148428ffc22c74fe0bb@2x.jpg",
        _2x: "cards/big/b334614c277a0fc45c9216916550db96@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/bd86c6b6d1aacdbdd0e6630db71a665b.png",
        _2x: "cards/icons/c11050f0c0947a1ea9f9e60b61bd53e8@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/2fbc8be98d01869152c3efd1833297ef.jpg",
              _2x: "cards/b551a4f5f75198257f54122e793c6708@2x.jpg"
            },
            big: {
              _1x: "cards/b551a4f5f75198257f54122e793c6708@2x.jpg",
              _2x: "cards/big/43be589ef83a2f350caedc0a90350e60@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/d50475fa29cbd8c0d1a591c65ee6fa2f.jpg",
              _2x: "cards/8711a0d201038d908a29da0700040db3@2x.jpg"
            },
            big: {
              _1x: "cards/8711a0d201038d908a29da0700040db3@2x.jpg",
              _2x: "cards/big/23ba5a7aaad5bdfd64064b5bcdf32a76@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/cad51880022ad6baaf0353fa5237c9f0.jpg",
              _2x: "cards/dfc37dab09fd8a8379f8653237c73199@2x.jpg"
            },
            big: {
              _1x: "cards/dfc37dab09fd8a8379f8653237c73199@2x.jpg",
              _2x: "cards/big/bcb13107c2c2cf59a1296a9208d98350@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ee04e0955312acd04b353457328f28bc.jpg",
              _2x: "cards/899661950380fe93892785b9b8535d31@2x.jpg"
            },
            big: {
              _1x: "cards/899661950380fe93892785b9b8535d31@2x.jpg",
              _2x: "cards/big/c548a8bafcb9ce34d305b71a9a470a86@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 159,
      name: d("Swamp Witch"),
      cls: 4,
      color: 5,
      rarity: 2,
      baseAttack: 68.75,
      baseHp: 56.25,
      tag: "darkevent",
      images: {
        _1x: "cards/6787e7bfd60d1c6a6fc567c73a197a96.jpg",
        _2x: "cards/a39143fac73ea10c4a1397709086a181@2x.jpg"
      },
      big: {
        _1x: "cards/a39143fac73ea10c4a1397709086a181@2x.jpg",
        _2x: "cards/big/43711fd4574f6308f39920ef2ba621c8@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/5dfa8c206f978cd45d8190ff7a35b4c7.png",
        _2x: "cards/icons/878f95536dcfed0afccee7d6cc49c2b1@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/a4f7f87d8ff948a9f8737245ed1ed25e.jpg",
              _2x: "cards/5e1b402f261ae32e4b190afdd5eeaad4@2x.jpg"
            },
            big: {
              _1x: "cards/5e1b402f261ae32e4b190afdd5eeaad4@2x.jpg",
              _2x: "cards/big/93562927a45efdb958872ae98a1592cd@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/329811a3455caf2b7e01e4da30c7ce2d.jpg",
              _2x: "cards/6977df28d3468342725ecf3fa1fb0fed@2x.jpg"
            },
            big: {
              _1x: "cards/6977df28d3468342725ecf3fa1fb0fed@2x.jpg",
              _2x: "cards/big/11643407911317240264ede7d6fbf49d@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/f1429b386074e8786f88c6b343bb749c.jpg",
              _2x: "cards/786b2dbd56f4915ae78ecdc5397ae02e@2x.jpg"
            },
            big: {
              _1x: "cards/786b2dbd56f4915ae78ecdc5397ae02e@2x.jpg",
              _2x: "cards/big/6c02f38cb7f9e1f5b1b57d1951f657e7@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/00c818c102b5243c165a1709e35c076b.jpg",
              _2x: "cards/791dc82762217cdd6bb9d554c8b0153d@2x.jpg"
            },
            big: {
              _1x: "cards/791dc82762217cdd6bb9d554c8b0153d@2x.jpg",
              _2x: "cards/big/0497b8127d0ae9cb27453c72c85f3de4@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 160,
      name: d("Moiru"),
      cls: 5,
      color: 5,
      rarity: 1,
      baseAttack: 45,
      baseHp: 55,
      tag: "darkevent",
      images: {
        _1x: "cards/8d544c5ee73a428ae04d2400e77ec214.jpg",
        _2x: "cards/484e327f8433af0106f12b4a57f2960a@2x.jpg"
      },
      big: {
        _1x: "cards/484e327f8433af0106f12b4a57f2960a@2x.jpg",
        _2x: "cards/big/ccb2b6294bffbcfa3fe9517cc263fcba@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/98fc995d80b36b16ed7742cbcac407d9.png",
        _2x: "cards/icons/79b5240b1eeef7aa8fab8933bd52981d@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c5a168d21d458ffb22ab46b068ab784a.jpg",
              _2x: "cards/0e79bfa01ee3f098c4bab0a809900903@2x.jpg"
            },
            big: {
              _1x: "cards/0e79bfa01ee3f098c4bab0a809900903@2x.jpg",
              _2x: "cards/big/9a3c62f30442d112f06d25ef475e5b69@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/acc45fbf85042b40b7b89c7972d20142.jpg",
              _2x: "cards/e386905e73153a6e67d2dda33f49aef2@2x.jpg"
            },
            big: {
              _1x: "cards/e386905e73153a6e67d2dda33f49aef2@2x.jpg",
              _2x: "cards/big/deffef9ad9db19a3d121c6c520e01e25@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/2d505c0d83d42f2cf22230089fb6f4a8.jpg",
              _2x: "cards/4f3b8b49fd7fb6fb2f2e87a5e2fb9eca@2x.jpg"
            },
            big: {
              _1x: "cards/4f3b8b49fd7fb6fb2f2e87a5e2fb9eca@2x.jpg",
              _2x: "cards/big/7b7d479a42621ed69f36a04f0bd17874@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/4ee1fdbf83d87ef97f3ee2edf87534a2.jpg",
              _2x: "cards/25516df279f09f77d5abf7132253af27@2x.jpg"
            },
            big: {
              _1x: "cards/25516df279f09f77d5abf7132253af27@2x.jpg",
              _2x: "cards/big/c161aa2dfc154082672f8b43a3427eb7@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 161,
      name: d("Reaper"),
      cls: 4,
      color: 5,
      rarity: 4,
      baseAttack: 70,
      baseHp: 105,
      tag: "darkevent",
      images: {
        _1x: "cards/1f4e9e01d9405ac84a1dc5b3f98be4e7.jpg",
        _2x: "cards/b0873fa58ef2f2f75e0ce5ed3a59ba02@2x.jpg"
      },
      big: {
        _1x: "cards/b0873fa58ef2f2f75e0ce5ed3a59ba02@2x.jpg",
        _2x: "cards/big/9ecf1173564295f9cca4ab97e90ef1d8@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/790269f4283f263933e5157564cc124e.png",
        _2x: "cards/icons/0b9b32b1c1e1b6b28900bcc451b9854b@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/fc5d16d0cd363962aef1409b2ce75e6b.jpg",
              _2x: "cards/33ade522dd05752b5dd569d835b0439f@2x.jpg"
            },
            big: {
              _1x: "cards/33ade522dd05752b5dd569d835b0439f@2x.jpg",
              _2x: "cards/big/2fa0a17df2cf30e79508f28d93751223@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/66f8a980b4b0bfb612609961140ce4b1.jpg",
              _2x: "cards/723b05a3772a6eae58291086e9824fb4@2x.jpg"
            },
            big: {
              _1x: "cards/723b05a3772a6eae58291086e9824fb4@2x.jpg",
              _2x: "cards/big/d87462199be7094da56402ca1615409c@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/05e34df6dceee552fc6623447a86cf43.jpg",
              _2x: "cards/9c0bfcc1ac16c9be5da9b4369e012a23@2x.jpg"
            },
            big: {
              _1x: "cards/9c0bfcc1ac16c9be5da9b4369e012a23@2x.jpg",
              _2x: "cards/big/00391b2de7b4e0faedd1cc0f6258a665@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/6b35effe4e8fe19b0b6370c12539e273.jpg",
              _2x: "cards/1ce0f6c20dd444d01cafbae4e0504770@2x.jpg"
            },
            big: {
              _1x: "cards/1ce0f6c20dd444d01cafbae4e0504770@2x.jpg",
              _2x: "cards/big/c1fab38193e90d53da8f4b1dbd60c6b8@2x.jpg"
            }
          }
        }]
      }
    }, {
      cardId: 162,
      name: d("Bone Talker"),
      cls: 1,
      color: 5,
      rarity: 5,
      baseAttack: 191.25,
      baseHp: 33.75,
      tag: "darkevent",
      effect: "Silence",
      images: {
        _1x: "cards/56ce0d6d5b64b465d8df0bc6731e12ff.jpg",
        _2x: "cards/58741ed1d3a2b39a9f1cbcd03f620ef7@2x.jpg"
      },
      big: {
        _1x: "cards/58741ed1d3a2b39a9f1cbcd03f620ef7@2x.jpg",
        _2x: "cards/big/33ad2cb39ad1730797db64aa565b0b6c@2x.jpg"
      },
      icons: {
        _1x: "cards/icons/a6c183b848b999e87cc5149eaab61d4c.png",
        _2x: "cards/icons/a7c3015a22f07dd7fb0ca39993a9d964@2x.png"
      },
      evolution: {
        stages: [{
          changes: {
            images: {
              _1x: "cards/c3704ffa228fdab2322301c1410b1751.jpg",
              _2x: "cards/e30d5dcdf2fec4213db0ab1292e15997@2x.jpg"
            },
            big: {
              _1x: "cards/e30d5dcdf2fec4213db0ab1292e15997@2x.jpg",
              _2x: "cards/big/366e232053cece8b8d5841674389da96@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ef7dd4ccd57a4f52df7c0d3ee3f33480.jpg",
              _2x: "cards/e02d42a7d3da4ef7824dcd34ccdb0c3a@2x.jpg"
            },
            big: {
              _1x: "cards/e02d42a7d3da4ef7824dcd34ccdb0c3a@2x.jpg",
              _2x: "cards/big/303aa46b2b7c19c3f9b90023aec951f8@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/ca761730d7dd065d3bd57f62b4f4efe2.jpg",
              _2x: "cards/95fa11e057864f78bc7cc65cf6c36b9a@2x.jpg"
            },
            big: {
              _1x: "cards/95fa11e057864f78bc7cc65cf6c36b9a@2x.jpg",
              _2x: "cards/big/f5bc758d866193d04d46a31623e39029@2x.jpg"
            }
          }
        }, {
          changes: {
            images: {
              _1x: "cards/747176d54b5c01f9c2b2252f00d03420.jpg",
              _2x: "cards/29b13b1bb42dd07baa3c3d3eada3b173@2x.jpg"
            },
            big: {
              _1x: "cards/29b13b1bb42dd07baa3c3d3eada3b173@2x.jpg",
              _2x: "cards/big/4b5cb7a743439e2326191637c1223426@2x.jpg"
            }
          }
        }]
      },
      evolveDupes: [1, 1, 1, 1],
      levelupItems: [
        [
          [2502, 1]
        ],
        [
          [2502, 1]
        ],
        [
          [2502, 2]
        ],
        [
          [2502, 2],
          [2504, 2]
        ],
        [
          [2502, 3]
        ],
        [
          [2502, 3]
        ],
        [
          [2502, 4]
        ],
        [
          [2502, 4]
        ],
        [
          [2502, 5],
          [2504, 4]
        ],
        [
          [2502, 5]
        ],
        [
          [2502, 6]
        ],
        [
          [2502, 6]
        ],
        [
          [2502, 7]
        ],
        [
          [2502, 8],
          [2504, 6]
        ],
        [
          [2502, 8]
        ],
        [
          [2502, 8]
        ],
        [
          [2502, 9]
        ],
        [
          [2502, 9]
        ],
        [
          [2502, 10],
          [2504, 8]
        ],
        [
          [2502, 10]
        ],
        [
          [2502, 11]
        ],
        [
          [2502, 11]
        ],
        [
          [2502, 12]
        ],
        [
          [2502, 12],
          [2504, 20]
        ]
      ]
    }]
  },
  77: function(a, e, c) {
    "use strict";
    var d;
    d = c(4)._tr, a.exports = [{
      id: 1,
      name: d("Fairy"),
      short: "F",
      cls: "set-c",
      color: "#01349a"
    }, {
      id: 2,
      name: d("Nature"),
      short: "N",
      cls: "set-b",
      color: "#016701"
    }, {
      id: 3,
      name: d("Passion"),
      short: "P",
      cls: "set-a",
      color: "#780000"
    }]
  },
  78: function(a, e, c) {
    "use strict";
    var d;
    d = c(4)._tr, a.exports = [{
      typeId: 2001,
      star: 1,
      price: {
        gems: 15
      },
      name: d("Fire elixir"),
      tag: "drop",
      icons: {
        _1x: "__a9aa/img/drops/color_red.jpg",
        _2x: "__bed4/img/drops/color_red@2x.jpg"
      },
      props: {
        cardColor: 1,
        kind: "col"
      }
    }, {
      typeId: 2002,
      star: 2,
      price: {
        gems: 15
      },
      name: d("Fire elixir"),
      tag: "drop",
      icons: {
        _1x: "__a9aa/img/drops/color_red.jpg",
        _2x: "__bed4/img/drops/color_red@2x.jpg"
      },
      props: {
        cardColor: 1,
        kind: "col"
      }
    }, {
      typeId: 2003,
      star: 3,
      price: {
        gems: 15
      },
      name: d("Fire elixir"),
      tag: "drop",
      icons: {
        _1x: "__a9aa/img/drops/color_red.jpg",
        _2x: "__bed4/img/drops/color_red@2x.jpg"
      },
      props: {
        cardColor: 1,
        kind: "col"
      }
    }, {
      typeId: 2004,
      star: 4,
      price: {
        gems: 15
      },
      name: d("Fire elixir"),
      tag: "drop",
      icons: {
        _1x: "__a9aa/img/drops/color_red.jpg",
        _2x: "__bed4/img/drops/color_red@2x.jpg"
      },
      props: {
        cardColor: 1,
        kind: "col"
      }
    }, {
      typeId: 2005,
      star: 5,
      price: {
        gems: 15
      },
      name: d("Fire elixir"),
      tag: "drop",
      icons: {
        _1x: "__a9aa/img/drops/color_red.jpg",
        _2x: "__bed4/img/drops/color_red@2x.jpg"
      },
      props: {
        cardColor: 1,
        kind: "col"
      }
    }, {
      typeId: 2011,
      star: 1,
      price: {
        gems: 15
      },
      name: d("Earth elixir"),
      tag: "drop",
      icons: {
        _1x: "__e791/img/drops/color_green.jpg",
        _2x: "__8641/img/drops/color_green@2x.jpg"
      },
      props: {
        cardColor: 2,
        kind: "col"
      }
    }, {
      typeId: 2012,
      star: 2,
      price: {
        gems: 15
      },
      name: d("Earth elixir"),
      tag: "drop",
      icons: {
        _1x: "__e791/img/drops/color_green.jpg",
        _2x: "__8641/img/drops/color_green@2x.jpg"
      },
      props: {
        cardColor: 2,
        kind: "col"
      }
    }, {
      typeId: 2013,
      star: 3,
      price: {
        gems: 15
      },
      name: d("Earth elixir"),
      tag: "drop",
      icons: {
        _1x: "__e791/img/drops/color_green.jpg",
        _2x: "__8641/img/drops/color_green@2x.jpg"
      },
      props: {
        cardColor: 2,
        kind: "col"
      }
    }, {
      typeId: 2014,
      star: 4,
      price: {
        gems: 15
      },
      name: d("Earth elixir"),
      tag: "drop",
      icons: {
        _1x: "__e791/img/drops/color_green.jpg",
        _2x: "__8641/img/drops/color_green@2x.jpg"
      },
      props: {
        cardColor: 2,
        kind: "col"
      }
    }, {
      typeId: 2015,
      star: 5,
      price: {
        gems: 15
      },
      name: d("Earth elixir"),
      tag: "drop",
      icons: {
        _1x: "__e791/img/drops/color_green.jpg",
        _2x: "__8641/img/drops/color_green@2x.jpg"
      },
      props: {
        cardColor: 2,
        kind: "col"
      }
    }, {
      typeId: 2021,
      star: 1,
      price: {
        gems: 15
      },
      name: d("Water elixir"),
      tag: "drop",
      icons: {
        _1x: "__1e03/img/drops/color_blue.jpg",
        _2x: "__9d39/img/drops/color_blue@2x.jpg"
      },
      props: {
        cardColor: 3,
        kind: "col"
      }
    }, {
      typeId: 2022,
      star: 2,
      price: {
        gems: 15
      },
      name: d("Water elixir"),
      tag: "drop",
      icons: {
        _1x: "__1e03/img/drops/color_blue.jpg",
        _2x: "__9d39/img/drops/color_blue@2x.jpg"
      },
      props: {
        cardColor: 3,
        kind: "col"
      }
    }, {
      typeId: 2023,
      star: 3,
      price: {
        gems: 15
      },
      name: d("Water elixir"),
      tag: "drop",
      icons: {
        _1x: "__1e03/img/drops/color_blue.jpg",
        _2x: "__9d39/img/drops/color_blue@2x.jpg"
      },
      props: {
        cardColor: 3,
        kind: "col"
      }
    }, {
      typeId: 2024,
      star: 4,
      price: {
        gems: 15
      },
      name: d("Water elixir"),
      tag: "drop",
      icons: {
        _1x: "__1e03/img/drops/color_blue.jpg",
        _2x: "__9d39/img/drops/color_blue@2x.jpg"
      },
      props: {
        cardColor: 3,
        kind: "col"
      }
    }, {
      typeId: 2025,
      star: 5,
      price: {
        gems: 15
      },
      name: d("Water elixir"),
      tag: "drop",
      icons: {
        _1x: "__1e03/img/drops/color_blue.jpg",
        _2x: "__9d39/img/drops/color_blue@2x.jpg"
      },
      props: {
        cardColor: 3,
        kind: "col"
      }
    }, {
      typeId: 2031,
      star: 1,
      price: {
        gems: 15
      },
      name: d("Light elixir"),
      tag: "drop",
      icons: {
        _1x: "__2d66/img/drops/color_light.jpg",
        _2x: "__99f1/img/drops/color_light@2x.jpg"
      },
      props: {
        cardColor: 4,
        kind: "col"
      }
    }, {
      typeId: 2032,
      star: 2,
      price: {
        gems: 15
      },
      name: d("Light elixir"),
      tag: "drop",
      icons: {
        _1x: "__2d66/img/drops/color_light.jpg",
        _2x: "__99f1/img/drops/color_light@2x.jpg"
      },
      props: {
        cardColor: 4,
        kind: "col"
      }
    }, {
      typeId: 2033,
      star: 3,
      price: {
        gems: 15
      },
      name: d("Light elixir"),
      tag: "drop",
      icons: {
        _1x: "__2d66/img/drops/color_light.jpg",
        _2x: "__99f1/img/drops/color_light@2x.jpg"
      },
      props: {
        cardColor: 4,
        kind: "col"
      }
    }, {
      typeId: 2034,
      star: 4,
      price: {
        gems: 15
      },
      name: d("Light elixir"),
      tag: "drop",
      icons: {
        _1x: "__2d66/img/drops/color_light.jpg",
        _2x: "__99f1/img/drops/color_light@2x.jpg"
      },
      props: {
        cardColor: 4,
        kind: "col"
      }
    }, {
      typeId: 2035,
      star: 5,
      price: {
        gems: 15
      },
      name: d("Light elixir"),
      tag: "drop",
      icons: {
        _1x: "__2d66/img/drops/color_light.jpg",
        _2x: "__99f1/img/drops/color_light@2x.jpg"
      },
      props: {
        cardColor: 4,
        kind: "col"
      }
    }, {
      typeId: 2041,
      star: 1,
      price: {
        gems: 15
      },
      name: d("Dark elixir"),
      tag: "drop",
      icons: {
        _1x: "__8946/img/drops/color_dark.jpg",
        _2x: "__d12d/img/drops/color_dark@2x.jpg"
      },
      props: {
        cardColor: 5,
        kind: "col"
      }
    }, {
      typeId: 2042,
      star: 2,
      price: {
        gems: 15
      },
      name: d("Dark elixir"),
      tag: "drop",
      icons: {
        _1x: "__8946/img/drops/color_dark.jpg",
        _2x: "__d12d/img/drops/color_dark@2x.jpg"
      },
      props: {
        cardColor: 5,
        kind: "col"
      }
    }, {
      typeId: 2043,
      star: 3,
      price: {
        gems: 15
      },
      name: d("Dark elixir"),
      tag: "drop",
      icons: {
        _1x: "__8946/img/drops/color_dark.jpg",
        _2x: "__d12d/img/drops/color_dark@2x.jpg"
      },
      props: {
        cardColor: 5,
        kind: "col"
      }
    }, {
      typeId: 2044,
      star: 4,
      price: {
        gems: 15
      },
      name: d("Dark elixir"),
      tag: "drop",
      icons: {
        _1x: "__8946/img/drops/color_dark.jpg",
        _2x: "__d12d/img/drops/color_dark@2x.jpg"
      },
      props: {
        cardColor: 5,
        kind: "col"
      }
    }, {
      typeId: 2045,
      star: 5,
      price: {
        gems: 15
      },
      name: d("Dark elixir"),
      tag: "drop",
      icons: {
        _1x: "__8946/img/drops/color_dark.jpg",
        _2x: "__d12d/img/drops/color_dark@2x.jpg"
      },
      props: {
        cardColor: 5,
        kind: "col"
      }
    }, {
      typeId: 2051,
      star: 1,
      price: {
        gems: 15
      },
      name: "Common necklace",
      tag: "drop",
      icons: {
        _1x: "__6d2e/img/drops/rarity_common.jpg",
        _2x: "__97ec/img/drops/rarity_common@2x.jpg"
      },
      props: {
        cardRarity: 1,
        kind: "rar"
      }
    }, {
      typeId: 2052,
      star: 2,
      price: {
        gems: 15
      },
      name: "Common necklace",
      tag: "drop",
      icons: {
        _1x: "__6d2e/img/drops/rarity_common.jpg",
        _2x: "__97ec/img/drops/rarity_common@2x.jpg"
      },
      props: {
        cardRarity: 1,
        kind: "rar"
      }
    }, {
      typeId: 2053,
      star: 3,
      price: {
        gems: 15
      },
      name: "Common necklace",
      tag: "drop",
      icons: {
        _1x: "__6d2e/img/drops/rarity_common.jpg",
        _2x: "__97ec/img/drops/rarity_common@2x.jpg"
      },
      props: {
        cardRarity: 1,
        kind: "rar"
      }
    }, {
      typeId: 2054,
      star: 4,
      price: {
        gems: 15
      },
      name: "Common necklace",
      tag: "drop",
      icons: {
        _1x: "__6d2e/img/drops/rarity_common.jpg",
        _2x: "__97ec/img/drops/rarity_common@2x.jpg"
      },
      props: {
        cardRarity: 1,
        kind: "rar"
      }
    }, {
      typeId: 2055,
      star: 5,
      price: {
        gems: 15
      },
      name: "Common necklace",
      tag: "drop",
      icons: {
        _1x: "__6d2e/img/drops/rarity_common.jpg",
        _2x: "__97ec/img/drops/rarity_common@2x.jpg"
      },
      props: {
        cardRarity: 1,
        kind: "rar"
      }
    }, {
      typeId: 2061,
      star: 1,
      price: {
        gems: 15
      },
      name: "Rare necklace",
      tag: "drop",
      icons: {
        _1x: "__46df/img/drops/rarity_rare.jpg",
        _2x: "__fecd/img/drops/rarity_rare@2x.jpg"
      },
      props: {
        cardRarity: 2,
        kind: "rar"
      }
    }, {
      typeId: 2062,
      star: 2,
      price: {
        gems: 15
      },
      name: "Rare necklace",
      tag: "drop",
      icons: {
        _1x: "__46df/img/drops/rarity_rare.jpg",
        _2x: "__fecd/img/drops/rarity_rare@2x.jpg"
      },
      props: {
        cardRarity: 2,
        kind: "rar"
      }
    }, {
      typeId: 2063,
      star: 3,
      price: {
        gems: 15
      },
      name: "Rare necklace",
      tag: "drop",
      icons: {
        _1x: "__46df/img/drops/rarity_rare.jpg",
        _2x: "__fecd/img/drops/rarity_rare@2x.jpg"
      },
      props: {
        cardRarity: 2,
        kind: "rar"
      }
    }, {
      typeId: 2064,
      star: 4,
      price: {
        gems: 15
      },
      name: "Rare necklace",
      tag: "drop",
      icons: {
        _1x: "__46df/img/drops/rarity_rare.jpg",
        _2x: "__fecd/img/drops/rarity_rare@2x.jpg"
      },
      props: {
        cardRarity: 2,
        kind: "rar"
      }
    }, {
      typeId: 2065,
      star: 5,
      price: {
        gems: 15
      },
      name: "Rare necklace",
      tag: "drop",
      icons: {
        _1x: "__46df/img/drops/rarity_rare.jpg",
        _2x: "__fecd/img/drops/rarity_rare@2x.jpg"
      },
      props: {
        cardRarity: 2,
        kind: "rar"
      }
    }, {
      typeId: 2071,
      star: 1,
      price: {
        gems: 15
      },
      name: "Epic necklace",
      tag: "drop",
      icons: {
        _1x: "__e469/img/drops/rarity_epic.jpg",
        _2x: "__9765/img/drops/rarity_epic@2x.jpg"
      },
      props: {
        cardRarity: 3,
        kind: "rar"
      }
    }, {
      typeId: 2072,
      star: 2,
      price: {
        gems: 15
      },
      name: "Epic necklace",
      tag: "drop",
      icons: {
        _1x: "__e469/img/drops/rarity_epic.jpg",
        _2x: "__9765/img/drops/rarity_epic@2x.jpg"
      },
      props: {
        cardRarity: 3,
        kind: "rar"
      }
    }, {
      typeId: 2073,
      star: 3,
      price: {
        gems: 15
      },
      name: "Epic necklace",
      tag: "drop",
      icons: {
        _1x: "__e469/img/drops/rarity_epic.jpg",
        _2x: "__9765/img/drops/rarity_epic@2x.jpg"
      },
      props: {
        cardRarity: 3,
        kind: "rar"
      }
    }, {
      typeId: 2074,
      star: 4,
      price: {
        gems: 15
      },
      name: "Epic necklace",
      tag: "drop",
      icons: {
        _1x: "__e469/img/drops/rarity_epic.jpg",
        _2x: "__9765/img/drops/rarity_epic@2x.jpg"
      },
      props: {
        cardRarity: 3,
        kind: "rar"
      }
    }, {
      typeId: 2075,
      star: 5,
      price: {
        gems: 15
      },
      name: "Epic necklace",
      tag: "drop",
      icons: {
        _1x: "__e469/img/drops/rarity_epic.jpg",
        _2x: "__9765/img/drops/rarity_epic@2x.jpg"
      },
      props: {
        cardRarity: 3,
        kind: "rar"
      }
    }, {
      typeId: 2081,
      star: 1,
      price: {
        gems: 15
      },
      name: "Legendary necklace",
      tag: "drop",
      icons: {
        _1x: "__9d51/img/drops/rarity_legendary.jpg",
        _2x: "__993c/img/drops/rarity_legendary@2x.jpg"
      },
      props: {
        cardRarity: 4,
        kind: "rar"
      }
    }, {
      typeId: 2082,
      star: 2,
      price: {
        gems: 15
      },
      name: "Legendary necklace",
      tag: "drop",
      icons: {
        _1x: "__9d51/img/drops/rarity_legendary.jpg",
        _2x: "__993c/img/drops/rarity_legendary@2x.jpg"
      },
      props: {
        cardRarity: 4,
        kind: "rar"
      }
    }, {
      typeId: 2083,
      star: 3,
      price: {
        gems: 15
      },
      name: "Legendary necklace",
      tag: "drop",
      icons: {
        _1x: "__9d51/img/drops/rarity_legendary.jpg",
        _2x: "__993c/img/drops/rarity_legendary@2x.jpg"
      },
      props: {
        cardRarity: 4,
        kind: "rar"
      }
    }, {
      typeId: 2084,
      star: 4,
      price: {
        gems: 15
      },
      name: "Legendary necklace",
      tag: "drop",
      icons: {
        _1x: "__9d51/img/drops/rarity_legendary.jpg",
        _2x: "__993c/img/drops/rarity_legendary@2x.jpg"
      },
      props: {
        cardRarity: 4,
        kind: "rar"
      }
    }, {
      typeId: 2085,
      star: 5,
      price: {
        gems: 15
      },
      name: "Legendary necklace",
      tag: "drop",
      icons: {
        _1x: "__9d51/img/drops/rarity_legendary.jpg",
        _2x: "__993c/img/drops/rarity_legendary@2x.jpg"
      },
      props: {
        cardRarity: 4,
        kind: "rar"
      }
    }, {
      typeId: 2091,
      star: 1,
      price: {
        gems: 15
      },
      name: "Wisdom Book",
      tag: "drop",
      icons: {
        _1x: "__1a53/img/drops/class_fairy.jpg",
        _2x: "__8301/img/drops/class_fairy@2x.jpg"
      },
      props: {
        cardClass: 1,
        kind: "cls"
      }
    }, {
      typeId: 2092,
      star: 2,
      price: {
        gems: 15
      },
      name: "Wisdom Book",
      tag: "drop",
      icons: {
        _1x: "__1a53/img/drops/class_fairy.jpg",
        _2x: "__8301/img/drops/class_fairy@2x.jpg"
      },
      props: {
        cardClass: 1,
        kind: "cls"
      }
    }, {
      typeId: 2093,
      star: 3,
      price: {
        gems: 15
      },
      name: "Wisdom Book",
      tag: "drop",
      icons: {
        _1x: "__1a53/img/drops/class_fairy.jpg",
        _2x: "__8301/img/drops/class_fairy@2x.jpg"
      },
      props: {
        cardClass: 1,
        kind: "cls"
      }
    }, {
      typeId: 2094,
      star: 4,
      price: {
        gems: 15
      },
      name: "Wisdom Book",
      tag: "drop",
      icons: {
        _1x: "__1a53/img/drops/class_fairy.jpg",
        _2x: "__8301/img/drops/class_fairy@2x.jpg"
      },
      props: {
        cardClass: 1,
        kind: "cls"
      }
    }, {
      typeId: 2095,
      star: 5,
      price: {
        gems: 15
      },
      name: "Wisdom Book",
      tag: "drop",
      icons: {
        _1x: "__1a53/img/drops/class_fairy.jpg",
        _2x: "__8301/img/drops/class_fairy@2x.jpg"
      },
      props: {
        cardClass: 1,
        kind: "cls"
      }
    }, {
      typeId: 2101,
      star: 1,
      price: {
        gems: 15
      },
      name: "Lixurious Diadem",
      tag: "drop",
      icons: {
        _1x: "__fcc3/img/drops/class_magic.jpg",
        _2x: "__63a5/img/drops/class_magic@2x.jpg"
      },
      props: {
        cardClass: 2,
        kind: "cls"
      }
    }, {
      typeId: 2102,
      star: 2,
      price: {
        gems: 15
      },
      name: "Lixurious Diadem",
      tag: "drop",
      icons: {
        _1x: "__fcc3/img/drops/class_magic.jpg",
        _2x: "__63a5/img/drops/class_magic@2x.jpg"
      },
      props: {
        cardClass: 2,
        kind: "cls"
      }
    }, {
      typeId: 2103,
      star: 3,
      price: {
        gems: 15
      },
      name: "Lixurious Diadem",
      tag: "drop",
      icons: {
        _1x: "__fcc3/img/drops/class_magic.jpg",
        _2x: "__63a5/img/drops/class_magic@2x.jpg"
      },
      props: {
        cardClass: 2,
        kind: "cls"
      }
    }, {
      typeId: 2104,
      star: 4,
      price: {
        gems: 15
      },
      name: "Lixurious Diadem",
      tag: "drop",
      icons: {
        _1x: "__fcc3/img/drops/class_magic.jpg",
        _2x: "__63a5/img/drops/class_magic@2x.jpg"
      },
      props: {
        cardClass: 2,
        kind: "cls"
      }
    }, {
      typeId: 2105,
      star: 5,
      price: {
        gems: 15
      },
      name: "Lixurious Diadem",
      tag: "drop",
      icons: {
        _1x: "__fcc3/img/drops/class_magic.jpg",
        _2x: "__63a5/img/drops/class_magic@2x.jpg"
      },
      props: {
        cardClass: 2,
        kind: "cls"
      }
    }, {
      typeId: 2111,
      star: 1,
      price: {
        gems: 15
      },
      name: "Precious Ring",
      tag: "drop",
      icons: {
        _1x: "__e96c/img/drops/class_rogue.jpg",
        _2x: "__3553/img/drops/class_rogue@2x.jpg"
      },
      props: {
        cardClass: 3,
        kind: "cls"
      }
    }, {
      typeId: 2112,
      star: 2,
      price: {
        gems: 15
      },
      name: "Precious Ring",
      tag: "drop",
      icons: {
        _1x: "__e96c/img/drops/class_rogue.jpg",
        _2x: "__3553/img/drops/class_rogue@2x.jpg"
      },
      props: {
        cardClass: 3,
        kind: "cls"
      }
    }, {
      typeId: 2113,
      star: 3,
      price: {
        gems: 15
      },
      name: "Precious Ring",
      tag: "drop",
      icons: {
        _1x: "__e96c/img/drops/class_rogue.jpg",
        _2x: "__3553/img/drops/class_rogue@2x.jpg"
      },
      props: {
        cardClass: 3,
        kind: "cls"
      }
    }, {
      typeId: 2114,
      star: 4,
      price: {
        gems: 15
      },
      name: "Precious Ring",
      tag: "drop",
      icons: {
        _1x: "__e96c/img/drops/class_rogue.jpg",
        _2x: "__3553/img/drops/class_rogue@2x.jpg"
      },
      props: {
        cardClass: 3,
        kind: "cls"
      }
    }, {
      typeId: 2115,
      star: 5,
      price: {
        gems: 15
      },
      name: "Precious Ring",
      tag: "drop",
      icons: {
        _1x: "__e96c/img/drops/class_rogue.jpg",
        _2x: "__3553/img/drops/class_rogue@2x.jpg"
      },
      props: {
        cardClass: 3,
        kind: "cls"
      }
    }, {
      typeId: 2121,
      star: 1,
      price: {
        gems: 15
      },
      name: "Nature Crown",
      tag: "drop",
      icons: {
        _1x: "__722f/img/drops/class_nature.jpg",
        _2x: "__a4f3/img/drops/class_nature@2x.jpg"
      },
      props: {
        cardClass: 4,
        kind: "cls"
      }
    }, {
      typeId: 2122,
      star: 2,
      price: {
        gems: 15
      },
      name: "Nature Crown",
      tag: "drop",
      icons: {
        _1x: "__722f/img/drops/class_nature.jpg",
        _2x: "__a4f3/img/drops/class_nature@2x.jpg"
      },
      props: {
        cardClass: 4,
        kind: "cls"
      }
    }, {
      typeId: 2123,
      star: 3,
      price: {
        gems: 15
      },
      name: "Nature Crown",
      tag: "drop",
      icons: {
        _1x: "__722f/img/drops/class_nature.jpg",
        _2x: "__a4f3/img/drops/class_nature@2x.jpg"
      },
      props: {
        cardClass: 4,
        kind: "cls"
      }
    }, {
      typeId: 2124,
      star: 4,
      price: {
        gems: 15
      },
      name: "Nature Crown",
      tag: "drop",
      icons: {
        _1x: "__722f/img/drops/class_nature.jpg",
        _2x: "__a4f3/img/drops/class_nature@2x.jpg"
      },
      props: {
        cardClass: 4,
        kind: "cls"
      }
    }, {
      typeId: 2125,
      star: 5,
      price: {
        gems: 15
      },
      name: "Nature Crown",
      tag: "drop",
      icons: {
        _1x: "__722f/img/drops/class_nature.jpg",
        _2x: "__a4f3/img/drops/class_nature@2x.jpg"
      },
      props: {
        cardClass: 4,
        kind: "cls"
      }
    }, {
      typeId: 2131,
      star: 1,
      price: {
        gems: 15
      },
      name: "Fairy Flowers",
      tag: "drop",
      icons: {
        _1x: "__fce3/img/drops/class_casual.jpg",
        _2x: "__32f2/img/drops/class_casual@2x.jpg"
      },
      props: {
        cardClass: 5,
        kind: "cls"
      }
    }, {
      typeId: 2132,
      star: 2,
      price: {
        gems: 15
      },
      name: "Fairy Flowers",
      tag: "drop",
      icons: {
        _1x: "__fce3/img/drops/class_casual.jpg",
        _2x: "__32f2/img/drops/class_casual@2x.jpg"
      },
      props: {
        cardClass: 5,
        kind: "cls"
      }
    }, {
      typeId: 2133,
      star: 3,
      price: {
        gems: 15
      },
      name: "Fairy Flowers",
      tag: "drop",
      icons: {
        _1x: "__fce3/img/drops/class_casual.jpg",
        _2x: "__32f2/img/drops/class_casual@2x.jpg"
      },
      props: {
        cardClass: 5,
        kind: "cls"
      }
    }, {
      typeId: 2134,
      star: 4,
      price: {
        gems: 15
      },
      name: "Fairy Flowers",
      tag: "drop",
      icons: {
        _1x: "__fce3/img/drops/class_casual.jpg",
        _2x: "__32f2/img/drops/class_casual@2x.jpg"
      },
      props: {
        cardClass: 5,
        kind: "cls"
      }
    }, {
      typeId: 2135,
      star: 5,
      price: {
        gems: 15
      },
      name: "Fairy Flowers",
      tag: "drop",
      icons: {
        _1x: "__fce3/img/drops/class_casual.jpg",
        _2x: "__32f2/img/drops/class_casual@2x.jpg"
      },
      props: {
        cardClass: 5,
        kind: "cls"
      }
    }, {
      typeId: 2501,
      star: 5,
      name: "Golden Bra",
      tag: "drop",
      icons: {
        _1x: "__ab89/img/drops/bra_gold.jpg",
        _2x: "__cfb9/img/drops/bra_gold@2x.jpg"
      },
      props: {
        kind: "custom"
      }
    }, {
      typeId: 2502,
      star: 5,
      name: "Mythril Bra",
      tag: "drop",
      icons: {
        _1x: "__5518/img/drops/bra_myth.jpg",
        _2x: "__7e73/img/drops/bra_myth@2x.jpg"
      },
      props: {
        kind: "custom"
      }
    }, {
      typeId: 2503,
      star: 5,
      name: "Fire Dildo",
      tag: "drop",
      icons: {
        _1x: "__c877/img/drops/dildo_red.jpg",
        _2x: "__88f1/img/drops/dildo_red@2x.jpg"
      },
      props: {
        kind: "custom"
      }
    }, {
      typeId: 2504,
      star: 5,
      name: "Life Dildo",
      tag: "drop",
      icons: {
        _1x: "__5056/img/drops/dildo_green.jpg",
        _2x: "__44f4/img/drops/dildo_green@2x.jpg"
      },
      props: {
        kind: "custom"
      }
    }, {
      typeId: 2721,
      name: "Upgrade pack for card #21",
      tag: "upack",
      props: {
        cardId: 21
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2021, 14],
          [2022, 25],
          [2023, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2091, 18],
          [2092, 30],
          [2093, 35]
        ],
        cards: [
          [21, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2722,
      name: "Upgrade pack for card #22",
      tag: "upack",
      props: {
        cardId: 22
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2001, 14],
          [2002, 25],
          [2003, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2101, 18],
          [2102, 30],
          [2103, 35]
        ],
        cards: [
          [22, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2723,
      name: "Upgrade pack for card #23",
      tag: "upack",
      props: {
        cardId: 23
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2011, 14],
          [2012, 25],
          [2013, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2111, 18],
          [2112, 30],
          [2113, 35]
        ],
        cards: [
          [23, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2724,
      name: "Upgrade pack for card #24",
      tag: "upack",
      props: {
        cardId: 24
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2041, 14],
          [2042, 25],
          [2043, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2121, 18],
          [2122, 30],
          [2123, 35]
        ],
        cards: [
          [24, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2725,
      name: "Upgrade pack for card #25",
      tag: "upack",
      props: {
        cardId: 25
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2031, 14],
          [2032, 25],
          [2033, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2131, 18],
          [2132, 30],
          [2133, 35]
        ],
        cards: [
          [25, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2726,
      name: "Upgrade pack for card #26",
      tag: "upack",
      props: {
        cardId: 26
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2021, 14],
          [2022, 25],
          [2023, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2091, 18],
          [2092, 30],
          [2093, 35]
        ],
        cards: [
          [26, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2727,
      name: "Upgrade pack for card #27",
      tag: "upack",
      props: {
        cardId: 27
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2001, 14],
          [2002, 25],
          [2003, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2101, 18],
          [2102, 30],
          [2103, 35]
        ],
        cards: [
          [27, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2728,
      name: "Upgrade pack for card #28",
      tag: "upack",
      props: {
        cardId: 28
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2011, 14],
          [2012, 25],
          [2013, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2111, 18],
          [2112, 30],
          [2113, 35]
        ],
        cards: [
          [28, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2729,
      name: "Upgrade pack for card #29",
      tag: "upack",
      props: {
        cardId: 29
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2041, 14],
          [2042, 25],
          [2043, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2121, 18],
          [2122, 30],
          [2123, 35]
        ],
        cards: [
          [29, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2730,
      name: "Upgrade pack for card #30",
      tag: "upack",
      props: {
        cardId: 30
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2031, 14],
          [2032, 25],
          [2033, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2131, 18],
          [2132, 30],
          [2133, 35]
        ],
        cards: [
          [30, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2731,
      name: "Upgrade pack for card #31",
      tag: "upack",
      props: {
        cardId: 31
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2021, 14],
          [2022, 25],
          [2023, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2091, 18],
          [2092, 30],
          [2093, 35]
        ],
        cards: [
          [31, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2732,
      name: "Upgrade pack for card #32",
      tag: "upack",
      props: {
        cardId: 32
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2001, 14],
          [2002, 25],
          [2003, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2101, 18],
          [2102, 30],
          [2103, 35]
        ],
        cards: [
          [32, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2733,
      name: "Upgrade pack for card #33",
      tag: "upack",
      props: {
        cardId: 33
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2011, 14],
          [2012, 25],
          [2013, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2111, 18],
          [2112, 30],
          [2113, 35]
        ],
        cards: [
          [33, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2734,
      name: "Upgrade pack for card #34",
      tag: "upack",
      props: {
        cardId: 34
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2041, 14],
          [2042, 25],
          [2043, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2121, 18],
          [2122, 30],
          [2123, 35]
        ],
        cards: [
          [34, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2735,
      name: "Upgrade pack for card #35",
      tag: "upack",
      props: {
        cardId: 35
      },
      virtual: 1,
      price: {
        real: 4.99
      },
      pi_code: "crejuu15p1196837",
      reward: {
        i: [
          [2031, 14],
          [2032, 25],
          [2033, 30],
          [2061, 6],
          [2062, 15],
          [2063, 20],
          [2131, 18],
          [2132, 30],
          [2133, 35]
        ],
        cards: [
          [35, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2736,
      name: "Upgrade pack for card #36",
      tag: "upack",
      props: {
        cardId: 36
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2021, 18],
          [2022, 30],
          [2023, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2091, 14],
          [2092, 25],
          [2093, 30]
        ],
        cards: [
          [36, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2737,
      name: "Upgrade pack for card #37",
      tag: "upack",
      props: {
        cardId: 37
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2001, 18],
          [2002, 30],
          [2003, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2101, 14],
          [2102, 25],
          [2103, 30]
        ],
        cards: [
          [37, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2738,
      name: "Upgrade pack for card #38",
      tag: "upack",
      props: {
        cardId: 38
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2011, 18],
          [2012, 30],
          [2013, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2111, 14],
          [2112, 25],
          [2113, 30]
        ],
        cards: [
          [38, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2739,
      name: "Upgrade pack for card #39",
      tag: "upack",
      props: {
        cardId: 39
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2041, 18],
          [2042, 30],
          [2043, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2121, 14],
          [2122, 25],
          [2123, 30]
        ],
        cards: [
          [39, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2741,
      name: "Upgrade pack for card #41",
      tag: "upack",
      props: {
        cardId: 41
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2031, 18],
          [2032, 30],
          [2033, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2131, 14],
          [2132, 25],
          [2133, 30]
        ],
        cards: [
          [41, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2742,
      name: "Upgrade pack for card #42",
      tag: "upack",
      props: {
        cardId: 42
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2021, 18],
          [2022, 30],
          [2023, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2091, 14],
          [2092, 25],
          [2093, 30]
        ],
        cards: [
          [42, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2743,
      name: "Upgrade pack for card #43",
      tag: "upack",
      props: {
        cardId: 43
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2001, 18],
          [2002, 30],
          [2003, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2101, 14],
          [2102, 25],
          [2103, 30]
        ],
        cards: [
          [43, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2744,
      name: "Upgrade pack for card #44",
      tag: "upack",
      props: {
        cardId: 44
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2011, 18],
          [2012, 30],
          [2013, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2111, 14],
          [2112, 25],
          [2113, 30]
        ],
        cards: [
          [44, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2745,
      name: "Upgrade pack for card #45",
      tag: "upack",
      props: {
        cardId: 45
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2041, 18],
          [2042, 30],
          [2043, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2121, 14],
          [2122, 25],
          [2123, 30]
        ],
        cards: [
          [45, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2746,
      name: "Upgrade pack for card #46",
      tag: "upack",
      props: {
        cardId: 46
      },
      virtual: 1,
      price: {
        real: 9.99
      },
      pi_code: "crejuu16p1196838",
      reward: {
        i: [
          [2031, 18],
          [2032, 30],
          [2033, 35],
          [2071, 6],
          [2072, 15],
          [2073, 20],
          [2131, 14],
          [2132, 25],
          [2133, 30]
        ],
        cards: [
          [46, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2748,
      name: "Upgrade pack for card #48",
      tag: "upack",
      props: {
        cardId: 48
      },
      virtual: 1,
      price: {
        real: 19.99
      },
      pi_code: "crejuu17p1196839",
      reward: {
        i: [
          [2001, 22],
          [2002, 35],
          [2003, 40],
          [2081, 6],
          [2082, 15],
          [2083, 20],
          [2091, 10],
          [2092, 20],
          [2093, 25]
        ],
        cards: [
          [48, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2749,
      name: "Upgrade pack for card #49",
      tag: "upack",
      props: {
        cardId: 49
      },
      virtual: 1,
      price: {
        real: 19.99
      },
      pi_code: "crejuu17p1196839",
      reward: {
        i: [
          [2011, 22],
          [2012, 35],
          [2013, 40],
          [2081, 6],
          [2082, 15],
          [2083, 20],
          [2101, 10],
          [2102, 20],
          [2103, 25]
        ],
        cards: [
          [49, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2750,
      name: "Upgrade pack for card #50",
      tag: "upack",
      props: {
        cardId: 50
      },
      virtual: 1,
      price: {
        real: 19.99
      },
      pi_code: "crejuu17p1196839",
      reward: {
        i: [
          [2041, 22],
          [2042, 35],
          [2043, 40],
          [2081, 6],
          [2082, 15],
          [2083, 20],
          [2111, 10],
          [2112, 20],
          [2113, 25]
        ],
        cards: [
          [50, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2751,
      name: "Upgrade pack for card #51",
      tag: "upack",
      props: {
        cardId: 51
      },
      virtual: 1,
      price: {
        real: 19.99
      },
      pi_code: "crejuu17p1196839",
      reward: {
        i: [
          [2031, 22],
          [2032, 35],
          [2033, 40],
          [2081, 6],
          [2082, 15],
          [2083, 20],
          [2121, 10],
          [2122, 20],
          [2123, 25]
        ],
        cards: [
          [51, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 2752,
      name: "Upgrade pack for card #52",
      tag: "upack",
      props: {
        cardId: 52
      },
      virtual: 1,
      price: {
        real: 19.99
      },
      pi_code: "crejuu17p1196839",
      reward: {
        i: [
          [2021, 22],
          [2022, 35],
          [2023, 40],
          [2081, 6],
          [2082, 15],
          [2083, 20],
          [2131, 10],
          [2132, 20],
          [2133, 25]
        ],
        cards: [
          [52, null, null, {
            star: 3
          }]
        ]
      }
    }, {
      typeId: 3e3,
      name: d("Gems x {amount} {suffix}", {
        amount: 20,
        suffix: ""
      }),
      icons: {
        _1x: "__652b/img/icons/ic-ruby01.jpg"
      },
      price: {
        real: 1.99
      },
      amount: 20,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 20,
      reward: {
        r: {
          gems: 20
        }
      },
      pi_code: "crejuu13p1196835",
      props: {}
    }, {
      typeId: 3001,
      name: d("Gems x {amount} {suffix}", {
        amount: 55,
        suffix: ""
      }),
      icons: {
        _1x: "__a4b4/img/icons/ic-ruby02.jpg"
      },
      price: {
        real: 4.99
      },
      amount: 55,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 55,
      reward: {
        r: {
          gems: 55
        }
      },
      pi_code: "crejuu15p1196837",
      props: {
        extra_amount: 5
      }
    }, {
      typeId: 3002,
      name: d("Gems x {amount} {suffix}", {
        amount: 115,
        suffix: ""
      }),
      icons: {
        _1x: "__b4aa/img/icons/ic-ruby03.jpg"
      },
      price: {
        real: 9.99
      },
      amount: 115,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 115,
      reward: {
        r: {
          gems: 115
        }
      },
      pi_code: "crejuu16p1196838",
      props: {
        extra_amount: 15
      }
    }, {
      typeId: 3003,
      name: d("Gems x {amount} {suffix}", {
        amount: 250,
        suffix: ""
      }),
      icons: {
        _1x: "__6182/img/icons/ic-ruby04.jpg"
      },
      price: {
        real: 19.99
      },
      amount: 250,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 250,
      reward: {
        r: {
          gems: 250
        }
      },
      pi_code: "crejuu17p1196839",
      props: {
        extra_amount: 50
      }
    }, {
      typeId: 3004,
      name: d("Gems x {amount} {suffix}", {
        amount: 750,
        suffix: ""
      }),
      icons: {
        _1x: "__20ed/img/icons/ic-ruby05.jpg"
      },
      price: {
        real: 49.99
      },
      amount: 750,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 750,
      reward: {
        r: {
          gems: 750
        }
      },
      pi_code: "crejuu19p1196841",
      props: {
        extra_amount: 250
      }
    }, {
      typeId: 3005,
      name: d("Gems x {amount} {suffix}", {
        amount: 1800,
        suffix: ""
      }),
      icons: {
        _1x: "__d884/img/icons/ic-ruby06.jpg"
      },
      price: {
        real: 99.99
      },
      amount: 1800,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 1800,
      reward: {
        r: {
          gems: 1800
        }
      },
      pi_code: "crejuu20p1196842",
      props: {
        extra_amount: 800
      }
    }, {
      typeId: 3006,
      name: d("Gems x {amount} {suffix}", {
        amount: 40,
        suffix: "(x2)"
      }),
      icons: {
        _1x: "__652b/img/icons/ic-ruby01.jpg"
      },
      price: {
        real: 1.99
      },
      amount: 40,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 40,
      reward: {
        r: {
          gems: 40
        }
      },
      pi_code: "crejuu13p1196835",
      props: {
        old_amount: 20
      }
    }, {
      typeId: 3007,
      name: d("Gems x {amount} {suffix}", {
        amount: 110,
        suffix: "(x2)"
      }),
      icons: {
        _1x: "__a4b4/img/icons/ic-ruby02.jpg"
      },
      price: {
        real: 4.99
      },
      amount: 110,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 110,
      reward: {
        r: {
          gems: 110
        }
      },
      pi_code: "crejuu15p1196837",
      props: {
        old_amount: 55
      }
    }, {
      typeId: 3008,
      name: d("Gems x {amount} {suffix}", {
        amount: 230,
        suffix: "(x2)"
      }),
      icons: {
        _1x: "__b4aa/img/icons/ic-ruby03.jpg"
      },
      price: {
        real: 9.99
      },
      amount: 230,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 230,
      reward: {
        r: {
          gems: 230
        }
      },
      pi_code: "crejuu16p1196838",
      props: {
        old_amount: 115
      }
    }, {
      typeId: 3009,
      name: d("Gems x {amount} {suffix}", {
        amount: 500,
        suffix: "(x2)"
      }),
      icons: {
        _1x: "__6182/img/icons/ic-ruby04.jpg"
      },
      price: {
        real: 19.99
      },
      amount: 500,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 500,
      reward: {
        r: {
          gems: 500
        }
      },
      pi_code: "crejuu17p1196839",
      props: {
        old_amount: 250
      }
    }, {
      typeId: 3010,
      name: d("Gems x {amount} {suffix}", {
        amount: 1500,
        suffix: "(x2)"
      }),
      icons: {
        _1x: "__20ed/img/icons/ic-ruby05.jpg"
      },
      price: {
        real: 49.99
      },
      amount: 1500,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 1500,
      reward: {
        r: {
          gems: 1500
        }
      },
      pi_code: "crejuu19p1196841",
      props: {
        old_amount: 750
      }
    }, {
      typeId: 3011,
      name: d("Gems x {amount} {suffix}", {
        amount: 3600,
        suffix: "(x2)"
      }),
      icons: {
        _1x: "__d884/img/icons/ic-ruby06.jpg"
      },
      price: {
        real: 99.99
      },
      amount: 3600,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 3600,
      reward: {
        r: {
          gems: 3600
        }
      },
      pi_code: "crejuu20p1196842",
      props: {
        old_amount: 1800
      }
    }, {
      typeId: 3012,
      name: d("Gems x {amount} {suffix}", {
        amount: 20,
        suffix: "(50%)"
      }),
      icons: {
        _1x: "__652b/img/icons/ic-ruby01.jpg"
      },
      price: {
        real: .99,
        old: {
          real: 1.99
        }
      },
      amount: 20,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 20,
      reward: {
        r: {
          gems: 20
        }
      },
      pi_code: "crejuu11p1196833",
      props: {}
    }, {
      typeId: 3013,
      name: d("Gems x {amount} {suffix}", {
        amount: 55,
        suffix: "(50%)"
      }),
      icons: {
        _1x: "__a4b4/img/icons/ic-ruby02.jpg"
      },
      price: {
        real: 2.49,
        old: {
          real: 4.99
        }
      },
      amount: 55,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 55,
      reward: {
        r: {
          gems: 55
        }
      },
      pi_code: "crejuu24p1212083",
      props: {
        extra_amount: 5
      }
    }, {
      typeId: 3014,
      name: d("Gems x {amount} {suffix}", {
        amount: 115,
        suffix: "(50%)"
      }),
      icons: {
        _1x: "__b4aa/img/icons/ic-ruby03.jpg"
      },
      price: {
        real: 4.99,
        old: {
          real: 9.99
        }
      },
      amount: 115,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 115,
      reward: {
        r: {
          gems: 115
        }
      },
      pi_code: "crejuu15p1196837",
      props: {
        extra_amount: 15
      }
    }, {
      typeId: 3015,
      name: d("Gems x {amount} {suffix}", {
        amount: 250,
        suffix: "(50%)"
      }),
      icons: {
        _1x: "__6182/img/icons/ic-ruby04.jpg"
      },
      price: {
        real: 9.99,
        old: {
          real: 19.99
        }
      },
      amount: 250,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 250,
      reward: {
        r: {
          gems: 250
        }
      },
      pi_code: "crejuu16p1196838",
      props: {
        extra_amount: 50
      }
    }, {
      typeId: 3016,
      name: d("Gems x {amount} {suffix}", {
        amount: 750,
        suffix: "(50%)"
      }),
      icons: {
        _1x: "__20ed/img/icons/ic-ruby05.jpg"
      },
      price: {
        real: 24.99,
        old: {
          real: 49.99
        }
      },
      amount: 750,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 750,
      reward: {
        r: {
          gems: 750
        }
      },
      pi_code: "crejuu25p1212084",
      props: {
        extra_amount: 250
      }
    }, {
      typeId: 3017,
      name: d("Gems x {amount} {suffix}", {
        amount: 1800,
        suffix: "(50%)"
      }),
      icons: {
        _1x: "__d884/img/icons/ic-ruby06.jpg"
      },
      price: {
        real: 49.99,
        old: {
          real: 99.99
        }
      },
      amount: 1800,
      virtual: 1,
      tag: "real",
      resource: "gems",
      qty: 1800,
      reward: {
        r: {
          gems: 1800
        }
      },
      pi_code: "crejuu19p1196841",
      props: {
        extra_amount: 800
      }
    }, {
      typeId: 3100,
      name: d("Gold x {amount}{suffix}", {
        amount: 1e4,
        suffix: ""
      }),
      icons: {
        _1x: "__bd73/img/icons/ic-gold01.jpg"
      },
      price: {
        gems: 10
      },
      amount: 1e4,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 1e4,
      reward: {
        r: {
          gold: 1e4
        }
      },
      props: {}
    }, {
      typeId: 3101,
      name: d("Gold x {amount}{suffix}", {
        amount: 21500,
        suffix: ""
      }),
      icons: {
        _1x: "__a2d1/img/icons/ic-gold02.jpg"
      },
      price: {
        gems: 20
      },
      amount: 21500,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 21500,
      reward: {
        r: {
          gold: 21500
        }
      },
      props: {
        extra_amount: 1500
      }
    }, {
      typeId: 3102,
      name: d("Gold x {amount}{suffix}", {
        amount: 57e3,
        suffix: ""
      }),
      icons: {
        _1x: "__5d6d/img/icons/ic-gold03.jpg"
      },
      price: {
        gems: 50
      },
      amount: 57e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 57e3,
      reward: {
        r: {
          gold: 57e3
        }
      },
      props: {
        extra_amount: 7e3
      }
    }, {
      typeId: 3103,
      name: d("Gold x {amount}{suffix}", {
        amount: 125e3,
        suffix: ""
      }),
      icons: {
        _1x: "__5e14/img/icons/ic-gold04.jpg"
      },
      price: {
        gems: 100
      },
      amount: 125e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 125e3,
      reward: {
        r: {
          gold: 125e3
        }
      },
      props: {
        extra_amount: 25e3
      }
    }, {
      typeId: 3104,
      name: d("Gold x {amount}{suffix}", {
        amount: 3e5,
        suffix: ""
      }),
      icons: {
        _1x: "__4f46/img/icons/ic-gold05.jpg"
      },
      price: {
        gems: 200
      },
      amount: 3e5,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 3e5,
      reward: {
        r: {
          gold: 3e5
        }
      },
      props: {
        extra_amount: 1e5
      }
    }, {
      typeId: 3105,
      name: d("Gold x {amount}{suffix}", {
        amount: 75e4,
        suffix: ""
      }),
      icons: {
        _1x: "__a422/img/icons/ic-gold06.jpg"
      },
      price: {
        gems: 400
      },
      amount: 75e4,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 75e4,
      reward: {
        r: {
          gold: 75e4
        }
      },
      props: {
        extra_amount: 35e4
      }
    }, {
      typeId: 3106,
      name: d("Gold x {amount}{suffix}", {
        amount: 3e3,
        suffix: ""
      }),
      icons: {
        _1x: "__bd73/img/icons/ic-gold01.jpg"
      },
      price: {
        gems: 20
      },
      amount: 3e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 3e3,
      reward: {
        r: {
          gold: 3e3
        }
      },
      props: {}
    }, {
      typeId: 3107,
      name: d("Gold x {amount}{suffix}", {
        amount: 8e3,
        suffix: ""
      }),
      icons: {
        _1x: "__a2d1/img/icons/ic-gold02.jpg"
      },
      price: {
        gems: 50
      },
      amount: 8e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 8e3,
      reward: {
        r: {
          gold: 8e3
        }
      },
      props: {
        extra_amount: 500
      }
    }, {
      typeId: 3108,
      name: d("Gold x {amount}{suffix}", {
        amount: 16500,
        suffix: ""
      }),
      icons: {
        _1x: "__5d6d/img/icons/ic-gold03.jpg"
      },
      price: {
        gems: 100
      },
      amount: 16500,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 16500,
      reward: {
        r: {
          gold: 16500
        }
      },
      props: {
        extra_amount: 1500
      }
    }, {
      typeId: 3109,
      name: d("Gold x {amount}{suffix}", {
        amount: 36e3,
        suffix: ""
      }),
      icons: {
        _1x: "__5e14/img/icons/ic-gold04.jpg"
      },
      price: {
        gems: 200
      },
      amount: 36e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 36e3,
      reward: {
        r: {
          gold: 36e3
        }
      },
      props: {
        extra_amount: 6e3
      }
    }, {
      typeId: 3110,
      name: d("Gold x {amount}{suffix}", {
        amount: 1e5,
        suffix: ""
      }),
      icons: {
        _1x: "__4f46/img/icons/ic-gold05.jpg"
      },
      price: {
        gems: 500
      },
      amount: 1e5,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 1e5,
      reward: {
        r: {
          gold: 1e5
        }
      },
      props: {
        extra_amount: 25e3
      }
    }, {
      typeId: 3111,
      name: d("Gold x {amount}{suffix}", {
        amount: 25e4,
        suffix: ""
      }),
      icons: {
        _1x: "__a422/img/icons/ic-gold06.jpg"
      },
      price: {
        gems: 1e3
      },
      amount: 25e4,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 25e4,
      reward: {
        r: {
          gold: 25e4
        }
      },
      props: {
        extra_amount: 1e5
      }
    }, {
      typeId: 3112,
      name: d("Gold x {amount}{suffix}", {
        amount: 3e3,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__bd73/img/icons/ic-gold01.jpg"
      },
      price: {
        gems: 10,
        old: {
          gems: 20
        }
      },
      amount: 3e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 3e3,
      reward: {
        r: {
          gold: 3e3
        }
      },
      props: {
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3113,
      name: d("Gold x {amount}{suffix}", {
        amount: 8e3,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__a2d1/img/icons/ic-gold02.jpg"
      },
      price: {
        gems: 25,
        old: {
          gems: 50
        }
      },
      amount: 8e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 8e3,
      reward: {
        r: {
          gold: 8e3
        }
      },
      props: {
        extra_amount: 500,
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3114,
      name: d("Gold x {amount}{suffix}", {
        amount: 16500,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__5d6d/img/icons/ic-gold03.jpg"
      },
      price: {
        gems: 50,
        old: {
          gems: 100
        }
      },
      amount: 16500,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 16500,
      reward: {
        r: {
          gold: 16500
        }
      },
      props: {
        extra_amount: 1500,
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3115,
      name: d("Gold x {amount}{suffix}", {
        amount: 36e3,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__5e14/img/icons/ic-gold04.jpg"
      },
      price: {
        gems: 100,
        old: {
          gems: 200
        }
      },
      amount: 36e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 36e3,
      reward: {
        r: {
          gold: 36e3
        }
      },
      props: {
        extra_amount: 6e3,
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3116,
      name: d("Gold x {amount}{suffix}", {
        amount: 1e5,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__4f46/img/icons/ic-gold05.jpg"
      },
      price: {
        gems: 250,
        old: {
          gems: 500
        }
      },
      amount: 1e5,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 1e5,
      reward: {
        r: {
          gold: 1e5
        }
      },
      props: {
        extra_amount: 25e3,
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3117,
      name: d("Gold x {amount}{suffix}", {
        amount: 25e4,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__a422/img/icons/ic-gold06.jpg"
      },
      price: {
        gems: 500,
        old: {
          gems: 1e3
        }
      },
      amount: 25e4,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 25e4,
      reward: {
        r: {
          gold: 25e4
        }
      },
      props: {
        extra_amount: 1e5,
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3118,
      name: d("Gold x {amount}{suffix}", {
        amount: 6e3,
        suffix: " (x2%)"
      }),
      icons: {
        _1x: "__bd73/img/icons/ic-gold01.jpg"
      },
      price: {
        gems: 20
      },
      amount: 6e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 6e3,
      reward: {
        r: {
          gold: 6e3
        }
      },
      props: {
        old_amount: 3e3
      }
    }, {
      typeId: 3119,
      name: d("Gold x {amount}{suffix}", {
        amount: 16e3,
        suffix: " (x2%)"
      }),
      icons: {
        _1x: "__a2d1/img/icons/ic-gold02.jpg"
      },
      price: {
        gems: 50
      },
      amount: 16e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 16e3,
      reward: {
        r: {
          gold: 16e3
        }
      },
      props: {
        extra_amount: 1e3,
        old_amount: 8e3
      }
    }, {
      typeId: 3120,
      name: d("Gold x {amount}{suffix}", {
        amount: 33e3,
        suffix: " (x2%)"
      }),
      icons: {
        _1x: "__5d6d/img/icons/ic-gold03.jpg"
      },
      price: {
        gems: 100
      },
      amount: 33e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 33e3,
      reward: {
        r: {
          gold: 33e3
        }
      },
      props: {
        extra_amount: 3e3,
        old_amount: 16500
      }
    }, {
      typeId: 3121,
      name: d("Gold x {amount}{suffix}", {
        amount: 72e3,
        suffix: " (x2%)"
      }),
      icons: {
        _1x: "__5e14/img/icons/ic-gold04.jpg"
      },
      price: {
        gems: 200
      },
      amount: 72e3,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 72e3,
      reward: {
        r: {
          gold: 72e3
        }
      },
      props: {
        extra_amount: 12e3,
        old_amount: 36e3
      }
    }, {
      typeId: 3122,
      name: d("Gold x {amount}{suffix}", {
        amount: 2e5,
        suffix: " (x2%)"
      }),
      icons: {
        _1x: "__4f46/img/icons/ic-gold05.jpg"
      },
      price: {
        gems: 500
      },
      amount: 2e5,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 2e5,
      reward: {
        r: {
          gold: 2e5
        }
      },
      props: {
        extra_amount: 5e4,
        old_amount: 1e5
      }
    }, {
      typeId: 3123,
      name: d("Gold x {amount}{suffix}", {
        amount: 5e5,
        suffix: " (x2%)"
      }),
      icons: {
        _1x: "__a422/img/icons/ic-gold06.jpg"
      },
      price: {
        gems: 1e3
      },
      amount: 5e5,
      virtual: 1,
      tag: "gold",
      resource: "gold",
      qty: 5e5,
      reward: {
        r: {
          gold: 5e5
        }
      },
      props: {
        extra_amount: 2e5,
        old_amount: 5e5
      }
    }, {
      typeId: 3150,
      name: d("Energy x {amount}{suffix}", {
        amount: 20,
        suffix: ""
      }),
      icons: {
        _1x: "__5b93/img/icons/ic-energy01.jpg"
      },
      price: {
        gems: 10
      },
      amount: 20,
      virtual: 1,
      tag: "energy",
      resource: "energy",
      qty: 20,
      reward: {
        r: {
          energy: 20
        }
      },
      props: {}
    }, {
      typeId: 3151,
      name: d("Energy x {amount}{suffix}", {
        amount: 50,
        suffix: ""
      }),
      icons: {
        _1x: "__7214/img/icons/ic-energy02.jpg"
      },
      price: {
        gems: 20
      },
      amount: 50,
      virtual: 1,
      tag: "energy",
      resource: "energy",
      qty: 50,
      reward: {
        r: {
          energy: 50
        }
      },
      props: {
        extra_amount: 10
      }
    }, {
      typeId: 3152,
      name: d("Energy x {amount}{suffix}", {
        amount: 120,
        suffix: ""
      }),
      icons: {
        _1x: "__84a9/img/icons/ic-energy03.jpg"
      },
      price: {
        gems: 40
      },
      amount: 120,
      virtual: 1,
      tag: "energy",
      resource: "energy",
      qty: 120,
      reward: {
        r: {
          energy: 120
        }
      },
      props: {
        extra_amount: 40
      }
    }, {
      typeId: 3153,
      name: d("Energy x {amount}{suffix}", {
        amount: 20,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__5b93/img/icons/ic-energy01.jpg"
      },
      price: {
        gems: 5,
        old: {
          gems: 10
        }
      },
      amount: 20,
      virtual: 1,
      tag: "energy",
      resource: "energy",
      qty: 20,
      reward: {
        r: {
          energy: 20
        }
      },
      props: {
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3154,
      name: d("Energy x {amount}{suffix}", {
        amount: 50,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__7214/img/icons/ic-energy02.jpg"
      },
      price: {
        gems: 10,
        old: {
          gems: 20
        }
      },
      amount: 50,
      virtual: 1,
      tag: "energy",
      resource: "energy",
      qty: 50,
      reward: {
        r: {
          energy: 50
        }
      },
      props: {
        extra_amount: 10,
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3155,
      name: d("Energy x {amount}{suffix}", {
        amount: 120,
        suffix: " (50%)"
      }),
      icons: {
        _1x: "__84a9/img/icons/ic-energy03.jpg"
      },
      price: {
        gems: 20,
        old: {
          gems: 40
        }
      },
      amount: 120,
      virtual: 1,
      tag: "energy",
      resource: "energy",
      qty: 120,
      reward: {
        r: {
          energy: 120
        }
      },
      props: {
        extra_amount: 40,
        bannerText: ["50%", "OFF"]
      }
    }, {
      typeId: 3200,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 50,
        suffix: ""
      }),
      icons: {
        _1x: "__c519/img/icons/ic-darkenergy01.jpg"
      },
      price: {
        gems: 100
      },
      amount: 50,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 50,
      reward: {
        r: {
          denier: 50
        },
        p: {
          se: 50
        }
      },
      props: {
        bannerText: ["+50"]
      }
    }, {
      typeId: 3201,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 105,
        suffix: ""
      }),
      icons: {
        _1x: "__c3e5/img/icons/ic-darkenergy02.jpg"
      },
      price: {
        gems: 200
      },
      amount: 105,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 105,
      reward: {
        r: {
          denier: 105
        },
        p: {
          se: 105
        }
      },
      props: {
        extra_amount: 5,
        bannerText: ["+105"]
      }
    }, {
      typeId: 3202,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 220,
        suffix: ""
      }),
      icons: {
        _1x: "__d9f8/img/icons/ic-darkenergy03.jpg"
      },
      price: {
        gems: 400
      },
      amount: 220,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 220,
      reward: {
        r: {
          denier: 220
        },
        p: {
          se: 220
        }
      },
      props: {
        extra_amount: 20,
        bannerText: ["+220"]
      }
    }, {
      typeId: 3203,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 460,
        suffix: ""
      }),
      icons: {
        _1x: "__baeb/img/icons/ic-darkenergy04.jpg"
      },
      price: {
        gems: 800
      },
      amount: 460,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 460,
      reward: {
        r: {
          denier: 460
        },
        p: {
          se: 460
        }
      },
      props: {
        extra_amount: 60,
        bannerText: ["+460"]
      }
    }, {
      typeId: 3204,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 960,
        suffix: ""
      }),
      icons: {
        _1x: "__a467/img/icons/ic-darkenergy05.jpg"
      },
      price: {
        gems: 1600
      },
      amount: 960,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 960,
      reward: {
        r: {
          denier: 960
        },
        p: {
          se: 960
        }
      },
      props: {
        extra_amount: 160,
        bannerText: ["+960"]
      }
    }, {
      typeId: 3205,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 2e3,
        suffix: ""
      }),
      icons: {
        _1x: "__f81c/img/icons/ic-darkenergy06.jpg"
      },
      price: {
        gems: 3200
      },
      amount: 2e3,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 2e3,
      reward: {
        r: {
          denier: 2e3
        },
        p: {
          se: 2e3
        }
      },
      props: {
        extra_amount: 400,
        bannerText: ["+2000"]
      }
    }, {
      typeId: 3206,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 50,
        suffix: ""
      }),
      icons: {
        _1x: "__c519/img/icons/ic-darkenergy01.jpg"
      },
      price: {
        gems: 100
      },
      amount: 50,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 50,
      reward: {
        r: {
          denier: 50
        }
      },
      props: {}
    }, {
      typeId: 3207,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 105,
        suffix: ""
      }),
      icons: {
        _1x: "__c3e5/img/icons/ic-darkenergy02.jpg"
      },
      price: {
        gems: 200
      },
      amount: 105,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 105,
      reward: {
        r: {
          denier: 105
        }
      },
      props: {
        extra_amount: 5
      }
    }, {
      typeId: 3208,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 220,
        suffix: ""
      }),
      icons: {
        _1x: "__d9f8/img/icons/ic-darkenergy03.jpg"
      },
      price: {
        gems: 400
      },
      amount: 220,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 220,
      reward: {
        r: {
          denier: 220
        }
      },
      props: {
        extra_amount: 20
      }
    }, {
      typeId: 3209,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 460,
        suffix: ""
      }),
      icons: {
        _1x: "__baeb/img/icons/ic-darkenergy04.jpg"
      },
      price: {
        gems: 800
      },
      amount: 460,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 460,
      reward: {
        r: {
          denier: 460
        }
      },
      props: {
        extra_amount: 60
      }
    }, {
      typeId: 3210,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 960,
        suffix: ""
      }),
      icons: {
        _1x: "__a467/img/icons/ic-darkenergy05.jpg"
      },
      price: {
        gems: 1600
      },
      amount: 960,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 960,
      reward: {
        r: {
          denier: 960
        }
      },
      props: {
        extra_amount: 160
      }
    }, {
      typeId: 3211,
      name: d("Dark Energy x {amount}{suffix}", {
        amount: 2e3,
        suffix: ""
      }),
      icons: {
        _1x: "__f81c/img/icons/ic-darkenergy06.jpg"
      },
      price: {
        gems: 3200
      },
      amount: 2e3,
      virtual: 1,
      tag: "denier",
      resource: "denier",
      qty: 2e3,
      reward: {
        r: {
          denier: 2e3
        }
      },
      props: {
        extra_amount: 400
      }
    }, {
      typeId: 3950,
      name: d("Novice pack"),
      price: {
        real: .99,
        old: {
          real: 10
        }
      },
      virtual: 1,
      tag: "starter",
      pi_code: "crejuu10p1149464",
      reward: {
        r: {
          gold: 1e4,
          gems: 20
        },
        cards: [
          [113, {
            evolution: {
              currentStage: 1
            }
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3951,
      name: d("King pack"),
      price: {
        real: 19.99,
        old: {
          real: 100
        }
      },
      pi_code: "crejuu6p1143704",
      virtual: 1,
      tag: "starter",
      reward: {
        r: {
          gold: 125e3,
          gems: 250
        },
        cards: [
          [114, {
            evolution: {
              currentStage: 2
            }
          }],
          [115, {
            evolution: {
              currentStage: 2
            }
          }],
          [116, {
            evolution: {
              currentStage: 2
            }
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3952,
      name: d("Novice pack"),
      price: {
        real: .99,
        old: {
          real: 10
        }
      },
      virtual: 1,
      tag: "starter",
      pi_code: "crejuu10p1149464",
      reward: {
        r: {
          gold: 5e3,
          gems: 20
        },
        cards: [
          [113, {
            evolution: {
              currentStage: 2
            }
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3953,
      name: d("King pack"),
      price: {
        real: 19.99,
        old: {
          real: 100
        }
      },
      pi_code: "crejuu6p1143704",
      virtual: 1,
      tag: "starter",
      reward: {
        r: {
          gold: 1e5,
          gems: 250
        },
        cards: [
          [114, {
            evolution: {
              currentStage: 3
            }
          }],
          [115, {
            evolution: {
              currentStage: 3
            }
          }],
          [116, {
            evolution: {
              currentStage: 3
            }
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3954,
      name: d("Novice pack"),
      price: {
        real: .99,
        old: {
          real: 10
        }
      },
      virtual: 1,
      tag: "starter",
      pi_code: "crejuu10p1149464",
      reward: {
        r: {
          gold: 5e3,
          gems: 20
        },
        cards: [
          [113, {
            evolution: {
              currentStage: 1
            }
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3955,
      name: d("King pack"),
      price: {
        real: 19.99,
        old: {
          real: 100
        }
      },
      pi_code: "crejuu6p1143704",
      virtual: 1,
      tag: "starter",
      reward: {
        r: {
          gold: 1e5,
          gems: 250
        },
        cards: [
          [114, {
            evolution: {
              currentStage: 2
            }
          }],
          [115, {
            evolution: {
              currentStage: 2
            }
          }],
          [116, {
            evolution: {
              currentStage: 2
            }
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3956,
      name: d("Novice pack"),
      price: {
        real: .99,
        old: {
          real: 10
        }
      },
      virtual: 1,
      tag: "starter",
      pi_code: "crejuu11p1196833",
      reward: {
        r: {
          gold: 5e3,
          gems: 20
        },
        cards: [
          [31, {
            level: 5,
            evolution: {
              currentStage: 1
            }
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3957,
      name: d("King pack"),
      price: {
        real: 19.99,
        old: {
          real: 100
        }
      },
      pi_code: "crejuu17p1196839",
      virtual: 1,
      tag: "starter",
      reward: {
        r: {
          gold: 1e5,
          gems: 450
        },
        cards: [
          [31, {
            level: 5,
            evolution: {
              currentStage: 2
            }
          }],
          [32, {
            level: 5,
            evolution: {
              currentStage: 2
            }
          }],
          [133, {
            level: 5
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3958,
      name: d("Novice pack"),
      price: {
        real: .99,
        old: {
          real: 10
        }
      },
      virtual: 1,
      tag: "starter",
      pi_code: "crejuu11p1196833",
      reward: {
        r: {
          gold: 5e3,
          gems: 20
        },
        cards: [
          [33, {
            level: 5,
            evolution: {
              currentStage: 1
            }
          }]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 4501,
      name: d("Novice pack"),
      price: {
        real: .99,
        old: {
          real: 10
        }
      },
      virtual: 1,
      tag: "starter",
      pi_code: "crejuu11p1196833",
      reward: {
        r: {
          gold: 5e3,
          gems: 20
        },
        cards: [
          [33, {
            level: 5
          }]
        ],
        i: [
          [2001, 15],
          [2002, 15],
          [2011, 15],
          [2012, 15],
          [2021, 15],
          [2022, 15],
          [2031, 15],
          [2032, 15],
          [2041, 15],
          [2042, 15],
          [2051, 15],
          [2052, 15],
          [2061, 15],
          [2062, 15],
          [2071, 15],
          [2072, 15],
          [2081, 15],
          [2082, 15],
          [2091, 15],
          [2092, 15],
          [2101, 15],
          [2102, 15],
          [2111, 15],
          [2112, 15],
          [2121, 15],
          [2122, 15],
          [2131, 15],
          [2132, 15]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 4502,
      name: d("King pack"),
      price: {
        real: 19.99,
        old: {
          real: 100
        }
      },
      pi_code: "crejuu17p1196839",
      virtual: 1,
      tag: "starter",
      reward: {
        r: {
          gold: 1e5,
          gems: 450
        },
        cards: [
          [133, {
            level: 5
          }]
        ],
        i: [
          [2001, 30],
          [2002, 30],
          [2003, 30],
          [2004, 30],
          [2005, 30],
          [2011, 30],
          [2012, 30],
          [2013, 30],
          [2014, 30],
          [2015, 30],
          [2021, 30],
          [2022, 30],
          [2023, 30],
          [2024, 30],
          [2025, 30],
          [2031, 30],
          [2032, 30],
          [2033, 30],
          [2034, 30],
          [2035, 30],
          [2041, 30],
          [2042, 30],
          [2043, 30],
          [2044, 30],
          [2045, 30],
          [2051, 30],
          [2052, 30],
          [2053, 30],
          [2054, 30],
          [2055, 30],
          [2061, 30],
          [2062, 30],
          [2063, 30],
          [2064, 30],
          [2065, 30],
          [2071, 30],
          [2072, 30],
          [2073, 30],
          [2074, 30],
          [2075, 30],
          [2081, 30],
          [2082, 30],
          [2083, 30],
          [2084, 30],
          [2085, 30],
          [2091, 30],
          [2092, 30],
          [2093, 30],
          [2094, 30],
          [2095, 30],
          [2101, 30],
          [2102, 30],
          [2103, 30],
          [2104, 30],
          [2105, 30],
          [2111, 30],
          [2112, 30],
          [2113, 30],
          [2114, 30],
          [2115, 30],
          [2121, 30],
          [2122, 30],
          [2123, 30],
          [2124, 30],
          [2125, 30],
          [2131, 30],
          [2132, 30],
          [2133, 30],
          [2134, 30],
          [2135, 30],
          [2501, 30],
          [2502, 30],
          [2503, 30],
          [2504, 30]
        ],
        c: {
          ST_PK: "${time}"
        }
      }
    }, {
      typeId: 3960,
      name: d("Master Pack"),
      price: {
        real: 1.99,
        old: {
          real: 3.49
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu2p1143700",
      reward: {
        r: {
          gems: 35
        },
        cards: [
          [117, null, {
            power: "d",
            add: {
              rare: 10
            }
          }]
        ],
        c: {
          "PP_T:1": "${time}"
        }
      },
      props: {
        valueMult: 175,
        tier: 1
      }
    }, {
      typeId: 3961,
      name: d("Casanova Pack"),
      price: {
        real: 19.99,
        old: {
          real: 64.99
        }
      },
      pi_code: "crejuu6p1143704",
      virtual: 1,
      tag: "promo",
      reward: {
        r: {
          gems: 350
        },
        cards: [
          [117, null, {
            power: "d",
            add: {
              rare: 10
            }
          }],
          [118, null, {
            power: "d",
            add: {
              epic: 15
            }
          }],
          [119, null, {
            power: "d",
            add: {
              epic: 15
            }
          }]
        ],
        c: {
          "PP_T:1": "${time}"
        }
      },
      props: {
        valueMult: 350,
        tier: 1
      }
    }, {
      typeId: 3962,
      name: d("{packName} {num}", {
        packName: d("Master Pack"),
        num: "II"
      }),
      price: {
        real: 4.99,
        old: {
          real: 9.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu4p1143702",
      reward: {
        r: {
          gems: 60
        },
        cards: [
          [121, null, {
            power: "d",
            add: {
              rare: 15
            },
            start: {
              evolve: 1
            }
          }]
        ],
        c: {
          "PP_T:2": "${time}"
        }
      },
      props: {
        valueMult: 200,
        tier: 2
      }
    }, {
      typeId: 3963,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "II"
      }),
      price: {
        real: 49.99,
        old: {
          real: 199.99
        }
      },
      pi_code: "crejuu8p1143706",
      virtual: 1,
      tag: "promo",
      reward: {
        r: {
          gems: 750
        },
        cards: [
          [121, null, {
            power: "d",
            add: {
              rare: 15
            },
            start: {
              evolve: 1
            }
          }],
          [122, null, {
            power: "d",
            add: {
              epic: 20
            },
            start: {
              evolve: 1
            }
          }],
          [123, null, {
            power: "d",
            add: {
              epic: 20
            },
            start: {
              evolve: 1
            }
          }]
        ],
        c: {
          "PP_T:2": "${time}"
        }
      },
      props: {
        valueMult: 400,
        tier: 2
      }
    }, {
      typeId: 3964,
      name: d("{packName} {num}", {
        packName: d("Master Pack"),
        num: "III"
      }),
      price: {
        real: 9.99,
        old: {
          real: 34.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu5p1143703",
      reward: {
        r: {
          gems: 120
        },
        cards: [
          [125, null, {
            power: "d",
            add: {
              rare: 25
            },
            start: {
              evolve: 2
            }
          }]
        ],
        c: {
          "PP_T:3": "${time}"
        }
      },
      props: {
        valueMult: 250,
        tier: 3
      }
    }, {
      typeId: 3965,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "III"
      }),
      price: {
        real: 99.99,
        old: {
          real: 449.99
        }
      },
      pi_code: "crejuu9p1143707",
      virtual: 1,
      tag: "promo",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [125, null, {
            power: "d",
            add: {
              rare: 25
            },
            start: {
              evolve: 2
            }
          }],
          [126, null, {
            power: "d",
            add: {
              epic: 35
            },
            start: {
              evolve: 2
            }
          }],
          [127, null, {
            power: "d",
            add: {
              epic: 35
            },
            start: {
              evolve: 2
            }
          }]
        ],
        c: {
          "PP_T:3": "${time}"
        }
      },
      props: {
        valueMult: 450,
        tier: 3
      }
    }, {
      typeId: 3966,
      name: d("Casanova Pack"),
      price: {
        real: 19.99,
        old: {
          real: 70
        }
      },
      pi_code: "crejuu6p1143704",
      virtual: 1,
      tag: "promo",
      reward: {
        r: {
          gems: 300
        },
        cards: [
          [131, null, {
            power: "d",
            add: {
              legendary: 15
            }
          }],
          [119, null, {
            power: "d",
            add: {
              epic: 10
            }
          }],
          [123, null, {
            power: "d",
            add: {
              epic: 10
            }
          }]
        ],
        c: {
          "PP_T:1": "${time}"
        }
      },
      props: {
        valueMult: 350,
        tier: 1
      }
    }, {
      typeId: 3967,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "II"
      }),
      price: {
        real: 49.99,
        old: {
          real: 200
        }
      },
      pi_code: "crejuu8p1143706",
      virtual: 1,
      tag: "promo",
      reward: {
        r: {
          gems: 750
        },
        cards: [
          [141, null, {
            power: "d",
            add: {
              legendary: 20
            },
            start: {
              evolve: 1
            }
          }],
          [116, null, {
            power: "d",
            add: {
              epic: 15
            },
            start: {
              evolve: 1
            }
          }],
          [118, null, {
            power: "d",
            add: {
              epic: 15
            },
            start: {
              evolve: 1
            }
          }],
          [122, null, {
            power: "d",
            add: {
              epic: 15
            },
            start: {
              evolve: 1
            }
          }],
          [126, null, {
            power: "d",
            add: {
              epic: 15
            },
            start: {
              evolve: 1
            }
          }]
        ],
        c: {
          "PP_T:2": "${time}"
        }
      },
      props: {
        valueMult: 400,
        tier: 2
      }
    }, {
      typeId: 3968,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "III"
      }),
      price: {
        real: 99.99,
        old: {
          real: 449.99
        }
      },
      pi_code: "crejuu9p1143707",
      virtual: 1,
      tag: "promo",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [142, null, {
            power: "d",
            add: {
              legendary: 35
            },
            start: {
              evolve: 2
            }
          }],
          [114, null, {
            power: "d",
            add: {
              epic: 25
            },
            start: {
              evolve: 2
            }
          }],
          [120, null, {
            power: "d",
            add: {
              epic: 25
            },
            start: {
              evolve: 2
            }
          }],
          [115, null, {
            power: "d",
            add: {
              epic: 25
            },
            start: {
              evolve: 2
            }
          }],
          [124, null, {
            power: "d",
            add: {
              epic: 25
            },
            start: {
              evolve: 2
            }
          }],
          [127, null, {
            power: "d",
            add: {
              epic: 25
            },
            start: {
              evolve: 2
            }
          }],
          [128, null, {
            power: "d",
            add: {
              epic: 25
            },
            start: {
              evolve: 2
            }
          }]
        ],
        c: {
          "PP_T:3": "${time}"
        }
      },
      props: {
        valueMult: 450,
        tier: 3
      }
    }, {
      typeId: 3970,
      name: d("Casanova Pack"),
      price: {
        real: 9.99,
        old: {
          real: 29.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu16p1196838",
      reward: {
        r: {
          gems: 115
        },
        cards: [
          [133, {
            level: 5
          }],
          [31, {
            level: 5,
            evolution: {
              currentStage: 2
            }
          }],
          [32, {
            level: 5,
            evolution: {
              currentStage: 2
            }
          }]
        ],
        c: {
          "PP_T:1:0": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [31, 32],
          text: d("{num} Rare cards", {
            num: 2
          })
        }, {
          card: 133,
          text: d('Unique Legendary card with spell "{spell}"', {
            spell: d("Heal")
          })
        }],
        valueMult: 300,
        tier: 1
      }
    }, {
      typeId: 3971,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "I"
      }),
      price: {
        real: 19.99,
        old: {
          real: 69.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu17p1196839",
      reward: {
        r: {
          gems: 250
        },
        cards: [
          [133, {
            level: 5
          }, null, {
            star: 2
          }],
          [124, {
            level: 10
          }],
          [119, {
            level: 10
          }]
        ],
        c: {
          "PP_T:1": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [124, 119],
          text: d("{num} Epic cards", {
            num: 2
          })
        }, {
          card: 133,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 2
          })
        }],
        valueMult: 350,
        tier: 1
      }
    }, {
      typeId: 3972,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "II"
      }),
      price: {
        real: 29.99,
        old: {
          real: 69.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu21p1197739",
      reward: {
        r: {
          gems: 350
        },
        cards: [
          [133, {
            level: 5
          }, null, {
            star: 3
          }],
          [127, {
            level: 10
          }],
          [114, {
            level: 10
          }]
        ],
        c: {
          "PP_T:1": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [127, 114],
          text: d("{num} Epic cards", {
            num: 2
          })
        }, {
          card: 133,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 3
          })
        }],
        valueMult: 375,
        tier: 1
      }
    }, {
      typeId: 3973,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "III"
      }),
      price: {
        real: 49.99,
        old: {
          real: 199.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu19p1196841",
      reward: {
        r: {
          gems: 750
        },
        cards: [
          [133, {
            level: 5
          }, null, {
            star: 4
          }],
          [124, {
            level: 10
          }, null, {
            star: 3
          }],
          [119, {
            level: 10
          }, null, {
            star: 3
          }],
          [127, {
            level: 10
          }, null, {
            star: 3
          }],
          [114, {
            level: 10
          }, null, {
            star: 3
          }]
        ],
        c: {
          "PP_T:1": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [124, 119, 127, 114],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 3
          })
        }, {
          card: 133,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 4
          })
        }],
        valueMult: 400,
        tier: 1
      }
    }, {
      typeId: 3974,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "IV"
      }),
      price: {
        real: 99.99,
        old: {
          real: 499.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu20p1196842",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [133, {
            level: 5
          }, null, {
            star: 5
          }],
          [124, {
            level: 10
          }, null, {
            star: 4
          }],
          [119, {
            level: 10
          }, null, {
            star: 4
          }],
          [127, {
            level: 10
          }, null, {
            star: 4
          }],
          [114, {
            level: 10
          }, null, {
            star: 4
          }]
        ],
        c: {
          "PP_T:1": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [124, 119, 127, 114],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 4
          })
        }, {
          card: 133,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 5
          })
        }],
        valueMult: 500,
        tier: 1
      }
    }, {
      typeId: 3975,
      name: d("{packName} {num}", {
        packName: d("Casanova Pack"),
        num: "V"
      }),
      price: {
        real: 99.99,
        old: {
          real: 499.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu20p1196842",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [129, {
            level: 5
          }],
          [124, {
            level: 10
          }, null, {
            star: 5
          }],
          [119, {
            level: 10
          }, null, {
            star: 5
          }],
          [127, {
            level: 10
          }, null, {
            star: 5
          }],
          [114, {
            level: 10
          }, null, {
            star: 5
          }]
        ],
        c: {
          "PP_T:1": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [124, 119, 127, 114],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 5
          })
        }, {
          card: 129,
          text: d('Unique Legendary card with spell "{spell}"', {
            spell: d("Resurrect")
          })
        }],
        valueMult: 500,
        tier: 1
      }
    }, {
      typeId: 3976,
      name: d("Rasputin Pack"),
      price: {
        real: 9.99,
        old: {
          real: 29.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu16p1196838",
      reward: {
        r: {
          gems: 115
        },
        cards: [
          [129, {
            level: 5
          }],
          [29, {
            level: 5,
            evolution: {
              currentStage: 2
            }
          }],
          [30, {
            level: 5,
            evolution: {
              currentStage: 2
            }
          }]
        ],
        c: {
          "PP_T:2:0": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [29, 30],
          text: d("{num} Rare cards", {
            num: 2
          })
        }, {
          card: 129,
          text: d('Unique Legendary card with spell "{spell}"', {
            spell: d("Resurrect")
          })
        }],
        valueMult: 300,
        tier: 2
      }
    }, {
      typeId: 3977,
      name: d("{packName} {num}", {
        packName: d("Rasputin Pack"),
        num: "I"
      }),
      price: {
        real: 19.99,
        old: {
          real: 69.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu17p1196839",
      reward: {
        r: {
          gems: 250
        },
        cards: [
          [129, {
            level: 5
          }, null, {
            star: 2
          }],
          [126, {
            level: 10
          }],
          [128, {
            level: 10
          }]
        ],
        c: {
          "PP_T:2": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [126, 128],
          text: d("{num} Epic cards", {
            num: 2
          })
        }, {
          card: 129,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 2
          })
        }],
        valueMult: 350,
        tier: 2
      }
    }, {
      typeId: 3978,
      name: d("{packName} {num}", {
        packName: d("Rasputin Pack"),
        num: "II"
      }),
      price: {
        real: 29.99,
        old: {
          real: 69.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu21p1197739",
      reward: {
        r: {
          gems: 350
        },
        cards: [
          [129, {
            level: 5
          }, null, {
            star: 3
          }],
          [123, {
            level: 10
          }],
          [116, {
            level: 10
          }]
        ],
        c: {
          "PP_T:2": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [123, 116],
          text: d("{num} Epic cards", {
            num: 2
          })
        }, {
          card: 129,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 3
          })
        }],
        valueMult: 375,
        tier: 2
      }
    }, {
      typeId: 3979,
      name: d("{packName} {num}", {
        packName: d("Rasputin Pack"),
        num: "III"
      }),
      price: {
        real: 49.99,
        old: {
          real: 199.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu19p1196841",
      reward: {
        r: {
          gems: 750
        },
        cards: [
          [129, {
            level: 5
          }, null, {
            star: 4
          }],
          [126, {
            level: 10
          }, null, {
            star: 3
          }],
          [128, {
            level: 10
          }, null, {
            star: 3
          }],
          [123, {
            level: 10
          }, null, {
            star: 3
          }],
          [116, {
            level: 10
          }, null, {
            star: 3
          }]
        ],
        c: {
          "PP_T:2": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [126, 128, 123, 116],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 3
          })
        }, {
          card: 129,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 4
          })
        }],
        valueMult: 400,
        tier: 2
      }
    }, {
      typeId: 3980,
      name: d("{packName} {num}", {
        packName: d("Rasputin Pack"),
        num: "IV"
      }),
      price: {
        real: 99.99,
        old: {
          real: 499.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu20p1196842",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [129, {
            level: 5
          }, null, {
            star: 5
          }],
          [126, {
            level: 10
          }, null, {
            star: 4
          }],
          [128, {
            level: 10
          }, null, {
            star: 4
          }],
          [123, {
            level: 10
          }, null, {
            star: 4
          }],
          [116, {
            level: 10
          }, null, {
            star: 4
          }]
        ],
        c: {
          "PP_T:2": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [126, 128, 123, 116],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 4
          })
        }, {
          card: 129,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 5
          })
        }],
        valueMult: 500,
        tier: 2
      }
    }, {
      typeId: 3981,
      name: d("{packName} {num}", {
        packName: d("Rasputin Pack"),
        num: "V"
      }),
      price: {
        real: 99.99,
        old: {
          real: 499.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu20p1196842",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [131, {
            level: 5
          }],
          [126, {
            level: 10
          }, null, {
            star: 5
          }],
          [128, {
            level: 10
          }, null, {
            star: 5
          }],
          [123, {
            level: 10
          }, null, {
            star: 5
          }],
          [116, {
            level: 10
          }, null, {
            star: 5
          }]
        ],
        c: {
          "PP_T:2": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [126, 128, 123, 116],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 5
          })
        }, {
          card: 131,
          text: d('Unique Legendary card with spell "{spell}"', {
            spell: d("Freeze")
          })
        }],
        valueMult: 500,
        tier: 2
      }
    }, {
      typeId: 3982,
      name: d("Don Juan Pack"),
      price: {
        real: 9.99,
        old: {
          real: 29.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu16p1196838",
      reward: {
        r: {
          gems: 115
        },
        cards: [
          [131, {
            level: 5
          }],
          [34, {
            level: 5,
            evolution: {
              currentStage: 2
            }
          }],
          [25, {
            level: 5,
            evolution: {
              currentStage: 2
            }
          }]
        ],
        c: {
          "PP_T:3:0": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [34, 25],
          text: d("{num} Rare cards", {
            num: 2
          })
        }, {
          card: 131,
          text: d('Unique Legendary card with spell "{spell}"', {
            spell: d("Freeze")
          })
        }],
        valueMult: 300,
        tier: 3
      }
    }, {
      typeId: 3983,
      name: d("{packName} {num}", {
        packName: d("Don Juan Pack"),
        num: "I"
      }),
      price: {
        real: 19.99,
        old: {
          real: 69.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu17p1196839",
      reward: {
        r: {
          gems: 250
        },
        cards: [
          [131, {
            level: 5
          }, null, {
            star: 2
          }],
          [118, {
            level: 10
          }],
          [122, {
            level: 10
          }]
        ],
        c: {
          "PP_T:3": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [118, 122],
          text: d("{num} Epic cards", {
            num: 2
          })
        }, {
          card: 131,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 2
          })
        }],
        valueMult: 350,
        tier: 3
      }
    }, {
      typeId: 3984,
      name: d("{packName} {num}", {
        packName: d("Don Juan Pack"),
        num: "II"
      }),
      price: {
        real: 29.99,
        old: {
          real: 69.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu21p1197739",
      reward: {
        r: {
          gems: 350
        },
        cards: [
          [131, {
            level: 5
          }, null, {
            star: 3
          }],
          [120, {
            level: 10
          }],
          [115, {
            level: 10
          }]
        ],
        c: {
          "PP_T:3": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [120, 115],
          text: d("{num} Epic cards", {
            num: 2
          })
        }, {
          card: 131,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 3
          })
        }],
        valueMult: 375,
        tier: 3
      }
    }, {
      typeId: 3985,
      name: d("{packName} {num}", {
        packName: d("Don Juan Pack"),
        num: "III"
      }),
      price: {
        real: 49.99,
        old: {
          real: 199.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu19p1196841",
      reward: {
        r: {
          gems: 750
        },
        cards: [
          [131, {
            level: 5
          }, null, {
            star: 4
          }],
          [118, {
            level: 10
          }, null, {
            star: 3
          }],
          [122, {
            level: 10
          }, null, {
            star: 3
          }],
          [120, {
            level: 10
          }, null, {
            star: 3
          }],
          [115, {
            level: 10
          }, null, {
            star: 3
          }]
        ],
        c: {
          "PP_T:3": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [118, 122, 120, 115],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 3
          })
        }, {
          card: 131,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 4
          })
        }],
        valueMult: 400,
        tier: 3
      }
    }, {
      typeId: 3986,
      name: d("{packName} {num}", {
        packName: d("Don Juan Pack"),
        num: "IV"
      }),
      price: {
        real: 99.99,
        old: {
          real: 499.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu20p1196842",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [131, {
            level: 5
          }, null, {
            star: 5
          }],
          [118, {
            level: 10
          }, null, {
            star: 4
          }],
          [122, {
            level: 10
          }, null, {
            star: 4
          }],
          [120, {
            level: 10
          }, null, {
            star: 4
          }],
          [115, {
            level: 10
          }, null, {
            star: 4
          }]
        ],
        c: {
          "PP_T:3": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [118, 122, 120, 115],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 4
          })
        }, {
          card: 131,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 5
          })
        }],
        valueMult: 500,
        tier: 3
      }
    }, {
      typeId: 3987,
      name: d("{packName} {num}", {
        packName: d("Don Juan Pack"),
        num: "V"
      }),
      price: {
        real: 99.99,
        old: {
          real: 499.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu20p1196842",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [130, {
            level: 10
          }],
          [118, {
            level: 10
          }, null, {
            star: 5
          }],
          [122, {
            level: 10
          }, null, {
            star: 5
          }],
          [120, {
            level: 10
          }, null, {
            star: 5
          }],
          [115, {
            level: 10
          }, null, {
            star: 5
          }]
        ],
        c: {
          "PP_T:3": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [118, 122, 120, 115],
          text: d("{num} Epic cards dupes up to star {star}", {
            num: 4,
            star: 5
          })
        }, {
          card: 130,
          text: d('Unique Legendary card with spell "{spell}"', {
            spell: d("Rage")
          })
        }],
        valueMult: 500,
        tier: 3
      }
    }, {
      typeId: 3988,
      name: d("Womanizer Pack"),
      price: {
        real: 99.99,
        old: {
          real: 499.99
        }
      },
      virtual: 1,
      tag: "promo",
      pi_code: "crejuu20p1196842",
      reward: {
        r: {
          gems: 1800
        },
        cards: [
          [130, null, null, 83],
          [113, {
            level: 20,
            evolution: {
              currentStage: 4
            }
          }],
          [117, {
            level: 20,
            evolution: {
              currentStage: 4
            }
          }],
          [121, {
            level: 20,
            evolution: {
              currentStage: 4
            }
          }],
          [125, {
            level: 20,
            evolution: {
              currentStage: 4
            }
          }]
        ],
        c: {
          "PP_T:4": 1,
          PP_L: "${time}"
        }
      },
      props: {
        info: [{
          cards: [113, 117, 121, 125],
          text: d("{num} Unique Rare cards of star {star}", {
            num: 4,
            star: 5
          })
        }, {
          card: 130,
          text: d("Unique Legendary card dupes up to star {star}", {
            star: 5
          })
        }],
        valueMult: 500,
        tier: 4
      }
    }, {
      typeId: 4e3,
      name: d("Bronze pack"),
      icons: {
        _1x: "__f596/img/booster/bus-1.png",
        _2x: "__32f6/img/booster/bus-1@2x.png"
      },
      price: {
        gems: 50
      },
      dungeonPrice: {
        gold: 1e4
      },
      tag: "booster",
      virtual: 1,
      reward: {
        cardPack: [
          [4e3, 1]
        ]
      },
      props: {
        grade: "common",
        reroll: {
          price: {
            gems: 25
          },
          coeff: 2
        },
        cards: {
          common: 3,
          rare: 3
        },
        prob: {
          common: 26.67,
          rare: 6.67
        },
        p_add: {
          common: 5,
          rare: 10
        }
      }
    }, {
      typeId: 4001,
      name: d("Silver pack"),
      icons: {
        _1x: "__35ed/img/booster/bus-2.png",
        _2x: "__e96f/img/booster/bus-2@2x.png"
      },
      price: {
        gems: 100
      },
      dungeonPrice: {
        gold: 25e3
      },
      tag: "booster",
      virtual: 1,
      reward: {
        cardPack: [
          [4001, 1]
        ]
      },
      props: {
        grade: "uncommon",
        reroll: {
          price: {
            gems: 50
          },
          coeff: 2
        },
        cards: {
          rare: 2,
          epic: 4
        },
        prob: {
          rare: 10,
          epic: 20
        },
        p_add: {
          rare: 15,
          epic: 20
        }
      }
    }, {
      typeId: 4002,
      name: d("Golden pack"),
      icons: {
        _1x: "__95d8/img/booster/bus-3.png",
        _2x: "__6484/img/booster/bus-3@2x.png"
      },
      price: {
        gems: 200
      },
      tag: "booster",
      virtual: 1,
      reward: {
        cardPack: [
          [4002, 1]
        ]
      },
      props: {
        grade: "rare",
        reroll: {
          price: {
            gems: 100
          },
          coeff: 2
        },
        cards: {
          epic: 3,
          legendary: 3
        },
        prob: {
          epic: 22.22,
          legendary: 11.11
        },
        p_add: {
          epic: 25,
          legendary: 35
        }
      }
    }, {
      typeId: 4003,
      name: d("Epic pack"),
      icons: {
        _1x: "__a7ed/img/booster/bus-4.png",
        _2x: "__54e5/img/booster/bus-4@2x.png"
      },
      price: {
        gems: 150
      },
      tag: "booster",
      virtual: 1,
      reward: {
        cardPack: [
          [4003, 1]
        ]
      },
      props: {
        grade: "epic",
        disabled: !0,
        reroll: {
          price: {
            gems: 75
          },
          coeff: 2
        },
        cards: {
          rare: 1,
          epic: 3,
          legendary: 2
        },
        prob: {
          rare: 5.88,
          epic: 23.53,
          legendary: 11.76
        },
        p_add: {
          rare: 15,
          epic: 20,
          legendary: 25
        }
      }
    }, {
      typeId: 4004,
      name: d("Legendary pack"),
      icons: {
        _1x: "__9119/img/booster/bus-5.png",
        _2x: "__74ac/img/booster/bus-5@2x.png"
      },
      price: {
        gems: 200
      },
      tag: "booster",
      virtual: 1,
      reward: {
        cardPack: [
          [4004, 1]
        ]
      },
      props: {
        grade: "legendary",
        disabled: !0,
        reroll: {
          price: {
            gems: 100
          },
          coeff: 2
        },
        cards: {
          epic: 3,
          legendary: 3
        },
        prob: {
          epic: 23.53,
          legendary: 11.76
        },
        p_add: {
          epic: 25,
          legendary: 30
        }
      }
    }, {
      typeId: 4005,
      name: d("Mythical pack"),
      icons: {
        _1x: "__3dcf/img/booster/bus-6.png",
        _2x: "__f448/img/booster/bus-6@2x.png"
      },
      price: {
        gems: 250
      },
      tag: "booster",
      virtual: 1,
      reward: {
        cardPack: [
          [4005, 1]
        ]
      },
      props: {
        grade: "mythical",
        disabled: !0,
        reroll: {
          price: {
            gems: 125
          },
          coeff: 2
        },
        cards: {
          epic: 1,
          legendary: 5
        },
        prob: {
          epic: 23.53,
          legendary: 11.76
        },
        p_add: {
          epic: 30,
          legendary: 40
        }
      }
    }, {
      typeId: 6e3,
      name: d("Bronze box"),
      icons: {
        _1x: "__f596/img/booster/bus-1.png",
        _2x: "__32f6/img/booster/bus-1@2x.png"
      },
      price: {
        gems: 50
      },
      tag: "lootbox",
      props: {
        grade: "bronze",
        rewardsCount: 4,
        freeBox: 1,
        freeBoxTerm: 28800,
        addReward: {
          p: 10
        },
        infoMain: d("{card} or better guaranteed", {
          card: d("Common card")
        }),
        chancesInfo: [d("{item}: {chance}", {
          item: d("Rare card"),
          chance: d("medium chance")
        }), d("{item}: {chance}", {
          item: d("Epic card"),
          chance: d("small chance")
        }), d("{item}: {quantity}", {
          item: d("Elements for level-up"),
          quantity: d("a little")
        }), d("{item}: {chance}", {
          item: d("Gold"),
          chance: d("medium chance")
        }), d("{item}: {chance}", {
          item: d("Energy"),
          chance: d("medium chance")
        })],
        slots: [
          [{
            t: 1,
            r: 2,
            w: 25,
            plm: .1
          }, {
            t: 1,
            w: 250,
            plm: .25
          }],
          [{
            t: 1,
            r: 2,
            w: 70,
            plm: .1
          }, {
            t: 1,
            w: 700,
            plm: .25
          }, {
            t: 1,
            r: 3,
            w: 7
          }],
          [{
            t: 3,
            q: 1,
            w: 350
          }, {
            t: 3,
            q: 2,
            w: 100
          }, {
            t: 3,
            q: 3,
            w: 50
          }],
          [{
            t: 3,
            q: 4,
            w: 100
          }, {
            t: 3,
            q: 6,
            w: 50
          }, {
            t: 2,
            r: "gold",
            m: 2,
            w: 200
          }, {
            t: 2,
            r: "energy",
            q: 25,
            w: 200
          }, {
            t: 2,
            r: "energy",
            q: 50,
            w: 150
          }]
        ]
      }
    }, {
      typeId: 6001,
      name: d("Silver box"),
      icons: {
        _1x: "__35ed/img/booster/bus-2.png",
        _2x: "__e96f/img/booster/bus-2@2x.png"
      },
      price: {
        gold: 2e4
      },
      tag: "lootbox",
      props: {
        grade: "silver",
        rewardsCount: 7,
        infoMain: d("{card} or better guaranteed", {
          card: d("Rare card")
        }),
        addReward: {
          p: 25
        },
        chancesInfo: [d("{item}: {chance}", {
          item: d("Epic card"),
          chance: d("medium chance")
        }), d("{item}: {chance}", {
          item: d("Legendary card"),
          chance: d("small chance")
        }), d("{item}: {chance}", {
          item: d("Common card"),
          chance: d("high chance")
        }), d("{item}: {quantity}", {
          item: d("Elements for level-up"),
          quantity: d("some")
        }), d("{item}: {chance}", {
          item: d("Gold"),
          chance: d("medium chance")
        }), d("{item}: {chance}", {
          item: d("Energy"),
          chance: d("medium chance")
        })],
        slots: [
          [{
            t: 1,
            r: 3,
            w: 20,
            plm: .1
          }, {
            t: 1,
            r: 4,
            w: 2
          }, {
            t: 1,
            r: 2,
            w: 200,
            plm: .25
          }],
          [{
            t: 1,
            r: 3,
            w: 60,
            plm: .1
          }, {
            t: 1,
            r: 2,
            w: 600,
            plm: .25
          }],
          [{
            t: 1,
            w: 60,
            plm: .4
          }, {
            t: 1,
            r: 2,
            w: 20,
            plm: .25
          }],
          [{
            t: 3,
            q: 2,
            w: 350
          }, {
            t: 3,
            q: 3,
            w: 100
          }, {
            t: 3,
            q: 4,
            w: 50
          }],
          [{
            t: 3,
            q: 4,
            s: 1,
            w: 70
          }, {
            t: 3,
            q: 6,
            s: 1,
            w: 40
          }, {
            t: 2,
            r: "gold",
            m: 3,
            w: 250
          }, {
            t: 2,
            r: "energy",
            q: 25,
            w: 200
          }, {
            t: 2,
            r: "energy",
            q: 50,
            w: 100
          }],
          [{
            t: 3,
            q: 8,
            w: 200
          }, {
            t: 3,
            q: 10,
            w: 100
          }, {
            t: 2,
            r: "gold",
            m: 3,
            w: 50
          }, {
            t: 2,
            r: "energy",
            q: 25,
            w: 50
          }, {
            t: 2,
            r: "energy",
            q: 50,
            w: 30
          }],
          [{
            t: 1,
            w: 50,
            plm: .4
          }, {
            t: 3,
            q: 4,
            s: 1,
            w: 25
          }, {
            t: 3,
            q: 2,
            w: 50
          }]
        ]
      }
    }, {
      typeId: 6002,
      name: d("Golden box"),
      icons: {
        _1x: "__95d8/img/booster/bus-3.png",
        _2x: "__6484/img/booster/bus-3@2x.png"
      },
      price: {
        gems: 100
      },
      tag: "lootbox",
      props: {
        grade: "gold",
        rewardsCount: 10,
        infoMain: d("{card} or better guaranteed", {
          card: d("Epic card")
        }),
        addReward: {
          p: 100
        },
        chancesInfo: [d("{item}: {chance}", {
          item: d("Epic card"),
          chance: d("high chance")
        }), d("{item}: {chance}", {
          item: d("Legendary card"),
          chance: d("medium chance")
        }), d("{item}: {chance}", {
          item: d("Rare card"),
          chance: d("high chance")
        }), d("{item}: {quantity}", {
          item: d("Elements for level-up"),
          quantity: d("plenty")
        }), d("{item}: {chance}", {
          item: d("Gold"),
          chance: d("medium chance")
        }), d("{item}: {chance}", {
          item: d("Energy"),
          chance: d("medium chance")
        })],
        slots: [
          [{
            t: 1,
            r: 4,
            w: 20,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 200,
            plm: .25
          }],
          [{
            t: 1,
            r: 4,
            w: 20,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 200,
            plm: .25
          }],
          [{
            t: 1,
            r: 4,
            w: 50,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 100,
            plm: .25
          }, {
            t: 1,
            r: 2,
            w: 300,
            plm: .4
          }],
          [{
            t: 1,
            r: 4,
            w: 50,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 100,
            plm: .25
          }, {
            t: 1,
            r: 2,
            w: 300,
            plm: .4
          }],
          [{
            t: 1,
            r: 4,
            w: 50,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 100,
            plm: .25
          }, {
            t: 1,
            r: 2,
            w: 300,
            plm: .4
          }],
          [{
            t: 1,
            w: 50,
            plm: .8
          }],
          [{
            t: 3,
            q: 8,
            w: 100
          }, {
            t: 3,
            q: 10,
            w: 50
          }, {
            t: 3,
            q: 12,
            w: 25
          }],
          [{
            t: 3,
            q: 8,
            s: 1,
            w: 70
          }, {
            t: 3,
            q: 10,
            s: 1,
            w: 40
          }, {
            t: 2,
            r: "gold",
            m: 6,
            w: 250
          }],
          [{
            t: 3,
            q: 2,
            s: 1,
            w: 80
          }, {
            t: 3,
            q: 3,
            s: 1,
            w: 40
          }, {
            t: 2,
            r: "energy",
            q: 75,
            w: 250
          }, {
            t: 2,
            r: "energy",
            q: 125,
            w: 150
          }],
          [{
            t: 3,
            q: 4,
            w: 80
          }, {
            t: 3,
            q: 6,
            w: 40
          }, {
            t: 3,
            q: 2,
            s: 1,
            w: 20
          }]
        ]
      }
    }, {
      typeId: 6003,
      cTypeId: 6002,
      name: d("Golden box"),
      icons: {
        _1x: "__95d8/img/booster/bus-3.png",
        _2x: "__6484/img/booster/bus-3@2x.png"
      },
      price: {
        gems: 50,
        old: {
          gems: 100
        }
      },
      tag: "lootbox",
      props: {
        grade: "gold",
        rewardsCount: 10,
        infoMain: d("{card} or better guaranteed", {
          card: d("Epic card")
        }),
        addReward: {
          p: 100
        },
        chancesInfo: [d("{item}: {chance}", {
          item: d("Epic card"),
          chance: d("high chance")
        }), d("{item}: {chance}", {
          item: d("Legendary card"),
          chance: d("medium chance")
        }), d("{item}: {chance}", {
          item: d("Rare card"),
          chance: d("high chance")
        }), d("{item}: {quantity}", {
          item: d("Elements for level-up"),
          quantity: d("plenty")
        }), d("{item}: {chance}", {
          item: d("Gold"),
          chance: d("medium chance")
        }), d("{item}: {chance}", {
          item: d("Energy"),
          chance: d("medium chance")
        })],
        slots: [
          [{
            t: 1,
            r: 4,
            w: 20,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 200,
            plm: .25
          }],
          [{
            t: 1,
            r: 4,
            w: 20,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 200,
            plm: .25
          }],
          [{
            t: 1,
            r: 4,
            w: 50,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 100,
            plm: .25
          }, {
            t: 1,
            r: 2,
            w: 300,
            plm: .4
          }],
          [{
            t: 1,
            r: 4,
            w: 50,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 100,
            plm: .25
          }, {
            t: 1,
            r: 2,
            w: 300,
            plm: .4
          }],
          [{
            t: 1,
            r: 4,
            w: 50,
            plm: .15
          }, {
            t: 1,
            r: 3,
            w: 100,
            plm: .25
          }, {
            t: 1,
            r: 2,
            w: 300,
            plm: .4
          }],
          [{
            t: 1,
            w: 50,
            plm: .8
          }],
          [{
            t: 3,
            q: 8,
            w: 100
          }, {
            t: 3,
            q: 10,
            w: 50
          }, {
            t: 3,
            q: 12,
            w: 25
          }],
          [{
            t: 3,
            q: 8,
            s: 1,
            w: 70
          }, {
            t: 3,
            q: 10,
            s: 1,
            w: 40
          }, {
            t: 2,
            r: "gold",
            m: 6,
            w: 250
          }],
          [{
            t: 3,
            q: 2,
            s: 1,
            w: 80
          }, {
            t: 3,
            q: 3,
            s: 1,
            w: 40
          }, {
            t: 2,
            r: "energy",
            q: 75,
            w: 250
          }, {
            t: 2,
            r: "energy",
            q: 125,
            w: 150
          }],
          [{
            t: 3,
            q: 4,
            w: 80
          }, {
            t: 3,
            q: 6,
            w: 40
          }, {
            t: 3,
            q: 2,
            s: 1,
            w: 20
          }]
        ]
      }
    }, {
      typeId: 6101,
      name: "Silver box x10",
      icons: {
        _1x: "__35ed/img/booster/bus-2.png",
        _2x: "__e96f/img/booster/bus-2@2x.png"
      },
      price: {
        real: 7.49
      },
      pi_code: "crejuu23p1209550",
      virtual: !1,
      reward: {
        c: {
          SA_SALE_BOX: "${time}"
        },
        i: [
          [6001, 10]
        ]
      },
      props: {
        infoMain: d("{card} or better guaranteed", {
          card: d("Rare card")
        }),
        bannerText: d("{gain}% value!", {
          gain: 180
        }),
        boxes: 10
      }
    }, {
      typeId: 6102,
      name: "Golden box x10",
      icons: {
        _1x: "__95d8/img/booster/bus-3.png",
        _2x: "__6484/img/booster/bus-3@2x.png"
      },
      price: {
        real: 19.99
      },
      pi_code: "crejuu17p1196839",
      virtual: !1,
      reward: {
        c: {
          SA_SALE_BOX: "${time}"
        },
        i: [
          [6002, 10]
        ]
      },
      props: {
        infoMain: d("{card} or better guaranteed", {
          card: d("Epic card")
        }),
        bannerText: d("{gain}% value!", {
          gain: 600
        }),
        boxes: 10
      }
    }]
  },
  79: function(a, e, c) { // missions: enemy card decks
    "use strict";
    var d;
    d = c(4)._tr, a.exports = {
      locations: [{
        id: 1,
        name: d("City"),
        missions: [{
          id: 1,
          name: 1,
          cost: {
            energy: 10
          },
          enemy: {
            exp: 0,
            _name: "Guidy",
            voice: "Guidy",
            _avatar_big: {
              "@1x": "__a091/img/avatar/guidy__195@1x.jpg",
              "@2x": "__076c/img/avatar/guidy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__d839/img/avatar/guidy__123@1x.jpg",
              "@2x": "__d0c2/img/avatar/guidy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 2, 7, 4, 5, 1, 6]
              }],
              cards: [{
                id: 1,
                cardId: 53
              }, {
                id: 2,
                cardId: 54
              }, {
                id: 3,
                cardId: 53
              }, {
                id: 4,
                cardId: 122
              }, {
                id: 5,
                cardId: 94
              }, {
                id: 6,
                cardId: 80
              }, {
                id: 7,
                cardId: 96
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 986
              }
            }, {
              r: {
                gold: 896
              }
            }, {
              r: {
                energy: 10
              }
            }],
            win: [{
              r: {
                gold: 896
              }
            }],
            lose: [{
              r: {
                gold: 90
              }
            }]
          },
          pw: 0,
          startComics: [{
            cssClass: "aC01",
            numFrames: 2
          }, {
            cssClass: "aC02",
            numFrames: 3
          }, {
            cssClass: "aC03",
            numFrames: 2
          }, {
            cssClass: "aC04",
            numFrames: 3
          }],
          endComics: [{
            cssClass: "aC05",
            numFrames: 3
          }, {
            cssClass: "aC06",
            numFrames: 3
          }],
          noauto: !0,
          hero_cards: [1, 2, 13],
          enemy_cards: [53, 54, 53]
        }, {
          id: 2,
          prevMission: 1,
          name: 2,
          cost: {
            energy: 10
          },
          enemy: {
            exp: 0,
            _name: "Thief",
            voice: "Thief",
            _avatar_big: {
              "@1x": "__eb1f/img/avatar/thief__195@1x.jpg",
              "@2x": "__b0df/img/avatar/thief__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__d652/img/avatar/thief__123@1x.jpg",
              "@2x": "__b938/img/avatar/thief__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 1, 7, 4, 3, 2, 6]
              }],
              cards: [{
                id: 1,
                cardId: 55
              }, {
                id: 2,
                cardId: 55
              }, {
                id: 3,
                cardId: 55
              }, {
                id: 4,
                cardId: 8
              }, {
                id: 5,
                cardId: 5
              }, {
                id: 6,
                cardId: 25
              }, {
                id: 7,
                cardId: 68
              }]
            }
          },
          rewards: {
            stars: [{
              cards: [
                [3]
              ]
            }, {
              i: [
                [2021, 1]
              ]
            }, {
              r: {
                energy: 10
              }
            }],
            win: [{
              r: {
                gold: 896
              },
              i: [
                [2021, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 90
              }
            }]
          },
          pw: 0,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "You've beaten me, now you can have me."
              }, {
                who: "hero",
                text: "How about a light version?"
              }, {
                who: "enemy",
                text: "With pleasure."
              }]
            }]
          },
          startComics: [{
            cssClass: "aD01",
            numFrames: 3
          }, {
            cssClass: "aD02",
            numFrames: 3
          }, {
            cssClass: "aD03",
            numFrames: 6
          }],
          endComics: [{
            cssClass: "aD04",
            numFrames: 1
          }, {
            cssClass: "aD05",
            numFrames: 2
          }, {
            cssClass: "aD06",
            numFrames: 2
          }],
          hero_cards: [null, 1, null],
          enemy_cards: [55, 55, 55]
        }, {
          id: 3,
          prevMission: 2,
          name: 3,
          cost: {
            energy: 10
          },
          enemy: {
            exp: 0,
            _name: "Avenger",
            voice: "Avenger",
            _avatar_big: {
              "@1x": "__373e/img/avatar/avenger__195@1x.jpg",
              "@2x": "__c027/img/avatar/avenger__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__7dc3/img/avatar/avenger__123@1x.jpg",
              "@2x": "__9664/img/avatar/avenger__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 4, 3, 7, 1, 6, 2]
              }],
              cards: [{
                id: 1,
                cardId: 56
              }, {
                id: 2,
                cardId: 53
              }, {
                id: 3,
                cardId: 56
              }, {
                id: 4,
                cardId: 130
              }, {
                id: 5,
                cardId: 128
              }, {
                id: 6,
                cardId: 24
              }, {
                id: 7,
                cardId: 28
              }]
            }
          },
          rewards: {
            stars: [{
              i: [
                [6001, 1]
              ],
              cards: [
                [3]
              ]
            }, {
              i: [
                [2001, 1]
              ]
            }, {
              r: {
                energy: 10
              }
            }],
            win: [{
              r: {
                gold: 896
              },
              i: [
                [2001, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 90
              }
            }]
          },
          pw: 0,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Don't give me up to the guards! Promise to make it worth your while..."
              }, {
                who: "hero",
                text: "Oh yeah? How?"
              }, {
                who: "enemy",
                text: "With good advice, and by fulfilling a wish."
              }, {
                who: "hero",
                text: "Let's start with the advice."
              }, {
                who: "enemy",
                text: "You're an outsider. If you wish to know your future, pay a visit to the oracle, Zafira Q."
              }]
            }]
          },
          startComics: [{
            cssClass: "aE01",
            numFrames: 4
          }, {
            cssClass: "aE02",
            numFrames: 8
          }, {
            cssClass: "aE03",
            numFrames: 5
          }, {
            cssClass: "aE04",
            numFrames: 3
          }],
          endComics: [{
            cssClass: "aE05",
            numFrames: 3
          }, {
            cssClass: "aE06",
            numFrames: 3
          }],
          hero_cards: [1, 3, 1],
          enemy_cards: [56, 53, 56]
        }, {
          id: 4,
          prevMission: 3,
          name: 4,
          cost: {
            energy: 10
          },
          enemy: {
            exp: 0,
            _name: "Gipsy",
            voice: "Gipsy",
            _avatar_big: {
              "@1x": "__8f70/img/avatar/gipsy__195@1x.jpg",
              "@2x": "__48f5/img/avatar/gipsy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__a40e/img/avatar/gipsy__123@1x.jpg",
              "@2x": "__e9d2/img/avatar/gipsy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 6, 4, 5, 3, 7, 1]
              }],
              cards: [{
                id: 1,
                cardId: 57
              }, {
                id: 2,
                cardId: 58
              }, {
                id: 3,
                cardId: 57
              }, {
                id: 4,
                cardId: 131
              }, {
                id: 5,
                cardId: 24
              }, {
                id: 6,
                cardId: 72
              }, {
                id: 7,
                cardId: 23
              }]
            }
          },
          rewards: {
            stars: [{
              i: [
                [2011, 4]
              ],
              cards: [
                [14]
              ]
            }, {
              r: {
                gems: 25
              }
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 896
              },
              i: [
                [2011, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 90
              }
            }]
          },
          pw: 0,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "You're lacking customer service skills, honey."
              }, {
                who: "enemy",
                text: "Guards! Get rid of them!"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Very well - I will read your future."
              }]
            }]
          },
          startComics: [{
            cssClass: "aF01",
            numFrames: 6
          }],
          endComics: [{
            cssClass: "aF02",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [57, 58, 57]
        }, {
          id: 5,
          prevMission: 4,
          name: 5,
          cost: {
            energy: 12
          },
          enemy: {
            exp: 72,
            _name: "Gipsy",
            voice: "Gipsy",
            _avatar_big: {
              "@1x": "__8f70/img/avatar/gipsy__195@1x.jpg",
              "@2x": "__48f5/img/avatar/gipsy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__a40e/img/avatar/gipsy__123@1x.jpg",
              "@2x": "__e9d2/img/avatar/gipsy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 4, 6, 1, 5, 2, 7]
              }],
              cards: [{
                id: 1,
                cardId: 67,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 78,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 76,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 44
              }, {
                id: 5,
                cardId: 139
              }, {
                id: 6,
                cardId: 92,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 89,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              i: [
                [2051, 8]
              ],
              r: {
                gold: 8e3
              }
            }, {
              i: [
                [2061, 6]
              ]
            }, {
              r: {
                energy: 10
              }
            }],
            win: [{
              r: {
                gold: 999
              },
              i: [
                [2051, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 100
              }
            }]
          },
          pw: 55,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "How dare you doubt me, swine?! I am a licensed specialist! "
              }, {
                who: "enemy",
                text: "Guards, get them out of here!"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "I need details. About the hex. All that stuff gives me the willies."
              }, {
                who: "enemy",
                text: "It won't work. I'm just not inspired."
              }]
            }]
          },
          endComics: [{
            cssClass: "aG01",
            numFrames: 3
          }, {
            cssClass: "aG02",
            numFrames: 2
          }, {
            cssClass: "aG03",
            numFrames: 1
          }, {
            cssClass: "aG04",
            numFrames: 7
          }],
          hero_cards: [1, 2, 28],
          enemy_cards: [67, 78, 76]
        }, {
          id: 6,
          prevMission: 5,
          name: 6,
          cost: {
            energy: 12
          },
          enemy: {
            exp: 72,
            _name: "Fire Elemental",
            voice: "Fire Elemental",
            _avatar_big: {
              "@1x": "__2c8d/img/avatar/f-elemental__195@1x.jpg",
              "@2x": "__d5ab/img/avatar/f-elemental__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__0c1f/img/avatar/f-elemental__123@1x.jpg",
              "@2x": "__0445/img/avatar/f-elemental__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 7, 1, 4, 5, 3, 2]
              }],
              cards: [{
                id: 1,
                cardId: 56
              }, {
                id: 2,
                cardId: 57
              }, {
                id: 3,
                cardId: 56
              }, {
                id: 4,
                cardId: 82
              }, {
                id: 5,
                cardId: 36
              }, {
                id: 6,
                cardId: 19
              }, {
                id: 7,
                cardId: 69
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 2700
              },
              i: [
                [2111, 2]
              ]
            }, {
              r: {
                gold: 1250
              }
            }, {
              r: {
                energy: 10
              }
            }],
            win: [{
              r: {
                gold: 999
              },
              i: [
                [2111, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 100
              }
            }]
          },
          pw: 0,
          startComics: [{
            cssClass: "aH01",
            numFrames: 3
          }, {
            cssClass: "aH02",
            numFrames: 7
          }, {
            cssClass: "aH03",
            numFrames: 2
          }],
          endComics: [{
            cssClass: "aH04",
            numFrames: 1
          }],
          hero_cards: [null, null, null],
          enemy_cards: [56, 57, 56]
        }, {
          id: 7,
          prevMission: 6,
          name: 7,
          cost: {
            energy: 12
          },
          enemy: {
            exp: 159,
            _name: "Slave",
            voice: "Slave",
            _avatar_big: {
              "@1x": "__d3f1/img/avatar/slave__195@1x.jpg",
              "@2x": "__7d0f/img/avatar/slave__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9fa9/img/avatar/slave__123@1x.jpg",
              "@2x": "__d0c4/img/avatar/slave__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 6, 2, 5, 3, 7, 4]
              }],
              cards: [{
                id: 1,
                cardId: 60
              }, {
                id: 2,
                cardId: 54
              }, {
                id: 3,
                cardId: 136
              }, {
                id: 4,
                cardId: 14
              }, {
                id: 5,
                cardId: 80
              }, {
                id: 6,
                cardId: 78
              }, {
                id: 7,
                cardId: 110
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 1521
              }
            }, {
              i: [
                [2101, 1]
              ]
            }, {
              r: {
                energy: 10
              }
            }],
            win: [{
              r: {
                gold: 1014
              },
              i: [
                [2101, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 101
              }
            }]
          },
          pw: 0,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Why do you even protect that hog?"
              }, {
                who: "enemy",
                text: "I've got no choice. He's holding my sisters captive."
              }, {
                who: "hero",
                text: "What kind of sexual deviant is he?"
              }, {
                who: "enemy",
                text: "Pig is a sex mana merchant. He fucks us, then sells the accumulated energy to witches and sorcerers."
              }, {
                who: "hero",
                text: "What the hell is sex mana? Oh, you'll tell me later, after I've rescued the other captives."
              }]
            }]
          },
          startComics: [{
            cssClass: "aI01",
            numFrames: 3
          }, {
            cssClass: "aI02",
            numFrames: 3
          }, {
            cssClass: "aI03",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [60, 54, 136]
        }, {
          id: 8,
          prevMission: 7,
          name: 8,
          cost: {
            energy: 13
          },
          enemy: {
            exp: 159,
            _name: "Piggy",
            voice: "Piggy",
            _avatar_big: {
              "@1x": "__443c/img/avatar/piggy__195@1x.jpg",
              "@2x": "__b806/img/avatar/piggy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__8021/img/avatar/piggy__123@1x.jpg",
              "@2x": "__cf0d/img/avatar/piggy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 5, 4, 6, 3, 2, 7]
              }],
              cards: [{
                id: 1,
                cardId: 72,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 61,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 68,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 25
              }, {
                id: 5,
                cardId: 31
              }, {
                id: 6,
                cardId: 16
              }, {
                id: 7,
                cardId: 33
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 908
              },
              i: [
                [2052, 1]
              ]
            }, {
              i: [
                [2091, 1]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 1014
              },
              i: [
                [2091, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 101
              }
            }]
          },
          pw: 55,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Fight better, damn you! Don't take it easy on him. Or have you forgotten about your sisters that are my prisoners?"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Get lost, you filthy beast!"
              }, {
                who: "enemy",
                text: 'Just you wait, buddy - soon you\'ll be even more "handsome" than me.'
              }, {
                who: "hero",
                text: "What are you talking about?"
              }, {
                who: "enemy",
                text: "Oh, you poor thing. They didn't tell you why you're here, did they? You'll know the truth soon enough - just keep checking yourself in the mirror."
              }]
            }]
          },
          endComics: [{
            cssClass: "aJ01",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [72, 61, 68]
        }, {
          id: 9,
          prevMission: 8,
          name: 9,
          cost: {
            energy: 13
          },
          enemy: {
            exp: 263,
            _name: "Captain",
            voice: "Captain",
            _avatar_big: {
              "@1x": "__6782/img/avatar/capitain__195@1x.jpg",
              "@2x": "__f62e/img/avatar/capitain__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__e008/img/avatar/capitain__123@1x.jpg",
              "@2x": "__4cfb/img/avatar/capitain__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 4, 6, 3, 5, 7, 2]
              }],
              cards: [{
                id: 1,
                cardId: 69,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 87,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 69,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 30
              }, {
                id: 5,
                cardId: 69,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 25
              }, {
                id: 7,
                cardId: 12
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 1655
              }
            }, {
              i: [
                [2121, 3]
              ]
            }, {
              r: {
                energy: 15
              }
            }],
            win: [{
              r: {
                gold: 1103
              },
              i: [
                [2121, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 110
              }
            }]
          },
          pw: 59,
          startComics: [{
            cssClass: "aK01",
            numFrames: 3
          }, {
            cssClass: "aK02",
            numFrames: 4
          }, {
            cssClass: "aK03",
            numFrames: 5
          }],
          endComics: [{
            cssClass: "aK04",
            numFrames: 2
          }, {
            cssClass: "aK05",
            numFrames: 1
          }],
          hero_cards: [null, null, null],
          enemy_cards: [69, 87, 69]
        }, {
          id: 10,
          prevMission: 9,
          name: 10,
          cost: {
            energy: 13
          },
          enemy: {
            exp: 263,
            _name: "Guidy",
            voice: "Guidy",
            _avatar_big: {
              "@1x": "__a091/img/avatar/guidy__195@1x.jpg",
              "@2x": "__076c/img/avatar/guidy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__d839/img/avatar/guidy__123@1x.jpg",
              "@2x": "__d0c2/img/avatar/guidy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 6, 3, 5, 1, 4, 7]
              }],
              cards: [{
                id: 1,
                cardId: 96,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 137,
                level: 3
              }, {
                id: 3,
                cardId: 61,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 55,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 138,
                level: 3
              }, {
                id: 6,
                cardId: 101,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 90,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 1655
              }
            }, {
              i: [
                [2131, 3]
              ]
            }, {
              r: {
                energy: 15
              }
            }],
            win: [{
              r: {
                gold: 1103
              },
              i: [
                [2131, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 110
              }
            }]
          },
          pw: 65,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "What?! You mean she would have fucked me if I'd lost?"
              }, {
                who: "enemy",
                text: "Um... Well, yes..."
              }, {
                who: "hero",
                text: "And you didn't say anything? Were you hoping I'd lose, you little bitch? Get ready for a smackdown!"
              }, {
                who: "enemy",
                text: "Not in the snout..."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Ow, my snout hurts... Did you have to hit so hard? I never doubted for a second that you would win..."
              }, {
                who: "hero",
                text: "Quit your whining. Now, what is this sex mana? And why are all the local dames behaving like crazed nymphos?"
              }, {
                who: "enemy",
                text: "Sex mana is energy generated during sex. You can't see it, but it improves your wellbeing and prolongs your life."
              }, {
                who: "enemy",
                text: "The stronger the male, the more energy is received by the female. This is why all females prefer to screw with males who are stronger than they are."
              }, {
                who: "hero",
                text: "So that's why they're picking fights... What about masturbation and same-sex relations - do they generate sex mana?"
              }, {
                who: "enemy",
                text: "Nope... Also, sex mana can be stored and use for various magical means. But that's something only witches, sorcerers and other magical creatures can do."
              }]
            }]
          },
          startComics: [{
            cssClass: "aL01",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [96, 137, 61]
        }, {
          id: 11,
          prevMission: 10,
          name: 11,
          cost: {
            energy: 13
          },
          enemy: {
            exp: 387,
            _name: "Satyr",
            voice: "Satyr",
            _avatar_big: {
              "@1x": "__bc9f/img/avatar/satyr__195@1x.jpg",
              "@2x": "__4a0e/img/avatar/satyr__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__17ad/img/avatar/satyr__123@1x.jpg",
              "@2x": "__00e8/img/avatar/satyr__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 1, 5, 7, 6, 2, 4]
              }],
              cards: [{
                id: 1,
                cardId: 73,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 78,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 73,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 98,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 77,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 81,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 108,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 1655
              }
            }, {
              i: [
                [2061, 3]
              ]
            }, {
              r: {
                energy: 15
              }
            }],
            win: [{
              r: {
                gold: 1103
              },
              i: [
                [2061, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 110
              }
            }]
          },
          pw: 69,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "You know, during the battle it seemed to me like you've transformed into a disgusting monster."
              }, {
                who: "hero",
                text: "You were hallucinating."
              }, {
                who: "enemy",
                text: "We satyrs have a certain foresight... If I were you, I would go see an oracle."
              }, {
                who: "hero",
                text: "Already have - she was babbling something about a dark hex."
              }, {
                who: "enemy",
                text: "Then you have a problem. Which you should solve. But not before we fuck. Can you guess how I like it?"
              }]
            }]
          },
          startComics: [{
            cssClass: "aM01",
            numFrames: 3
          }, {
            cssClass: "aM02",
            numFrames: 2
          }, {
            cssClass: "aM03",
            numFrames: 3
          }],
          endComics: [{
            cssClass: "aM04",
            numFrames: 1
          }],
          hero_cards: [null, null, null],
          enemy_cards: [73, 78, 73]
        }, {
          id: 12,
          prevMission: 11,
          name: 12,
          cost: {
            energy: 13
          },
          enemy: {
            exp: 387,
            _name: "Gipsy",
            voice: "Gipsy",
            _avatar_big: {
              "@1x": "__8f70/img/avatar/gipsy__195@1x.jpg",
              "@2x": "__48f5/img/avatar/gipsy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__a40e/img/avatar/gipsy__123@1x.jpg",
              "@2x": "__e9d2/img/avatar/gipsy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 5, 7, 4, 6, 1, 3]
              }],
              cards: [{
                id: 1,
                cardId: 76,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 136,
                level: 4
              }, {
                id: 3,
                cardId: 81,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 27
              }, {
                id: 5,
                cardId: 111,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 87,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 108,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 1754
              }
            }, {
              i: [
                [2041, 3]
              ]
            }, {
              r: {
                energy: 15
              }
            }],
            win: [{
              r: {
                gold: 1169
              },
              i: [
                [2041, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 117
              }
            }]
          },
          pw: 75,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "I'm here on urgent business, let me through."
              }, {
                who: "enemy",
                text: "The mistress doesn't want you here. Go away."
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [76, 136, 81]
        }, {
          id: 13,
          prevMission: 12,
          name: 13,
          cost: {
            energy: 13
          },
          enemy: {
            exp: 536,
            _name: "Gipsy",
            voice: "Gipsy",
            _avatar_big: {
              "@1x": "__8f70/img/avatar/gipsy__195@1x.jpg",
              "@2x": "__48f5/img/avatar/gipsy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__a40e/img/avatar/gipsy__123@1x.jpg",
              "@2x": "__e9d2/img/avatar/gipsy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 3, 1, 4, 6, 2, 7]
              }],
              cards: [{
                id: 1,
                cardId: 66,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 74,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 66,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 75,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 112,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 146,
                level: 4
              }, {
                id: 7,
                cardId: 2,
                level: 4
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 1754
              }
            }, {
              i: [
                [2071, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 1169
              },
              i: [
                [2071, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 117
              }
            }]
          },
          pw: 80,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "I want nothing to do with whatever you got yourself into."
              }, {
                who: "hero",
                text: "All I'm asking is to know who put this hex on me."
              }, {
                who: "enemy",
                text: "I hope that the guards will handle you this time. Hey, girls!"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Great gods of the moon, you are a stubborn bastard... Fine, let's have a look into my crystal ball."
              }]
            }]
          },
          startComics: [{
            cssClass: "aN01",
            numFrames: 3
          }],
          endComics: [{
            cssClass: "aN02",
            numFrames: 3
          }, {
            cssClass: "aN03",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [66, 74, 66]
        }, {
          id: 14,
          prevMission: 13,
          name: 14,
          cost: {
            energy: 13
          },
          enemy: {
            exp: 536,
            _name: "Piggy",
            voice: "Piggy",
            _avatar_big: {
              "@1x": "__443c/img/avatar/piggy__195@1x.jpg",
              "@2x": "__b806/img/avatar/piggy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__8021/img/avatar/piggy__123@1x.jpg",
              "@2x": "__cf0d/img/avatar/piggy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 3, 2, 1, 7, 6, 4]
              }],
              cards: [{
                id: 1,
                cardId: 92,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 74,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 74,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 124
              }, {
                id: 5,
                cardId: 135,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 126
              }, {
                id: 7,
                cardId: 115
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 1754
              }
            }, {
              i: [
                [2031, 3]
              ]
            }, {
              r: {
                energy: 15
              }
            }],
            win: [{
              r: {
                gold: 1169
              },
              i: [
                [2031, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 117
              }
            }]
          },
          pw: 85,
          startComics: [{
            cssClass: "aO01",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [92, 74, 74]
        }, {
          id: 15,
          prevMission: 14,
          name: 15,
          cost: {
            energy: 14
          },
          enemy: {
            exp: 715,
            _name: "Piggy",
            voice: "Piggy",
            _avatar_big: {
              "@1x": "__443c/img/avatar/piggy__195@1x.jpg",
              "@2x": "__b806/img/avatar/piggy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__8021/img/avatar/piggy__123@1x.jpg",
              "@2x": "__cf0d/img/avatar/piggy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 6, 5, 7, 4, 3, 2]
              }],
              cards: [{
                id: 1,
                cardId: 78,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 140
              }, {
                id: 3,
                cardId: 93,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 48
              }, {
                id: 6,
                cardId: 75,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 20,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              cards: [
                [2]
              ]
            }, {
              i: [
                [2081, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 1959
              },
              i: [
                [2081, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 196
              }
            }]
          },
          pw: 91,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Here's my proposition. I tell you where to find the Sorceress, and you let me and my harem go our way."
              }, {
                who: "hero",
                text: "No, the girls will stay with me."
              }, {
                who: "enemy",
                text: "You sure you've got the spunk? Anyway, don't say I didn't try the nice way."
              }]
            }]
          },
          startComics: [{
            cssClass: "aP01",
            numFrames: 2
          }, {
            cssClass: "aP02",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [78, 140, 93]
        }, {
          id: 16,
          prevMission: 15,
          name: 16,
          cost: {
            energy: 14
          },
          enemy: {
            exp: 715,
            _name: "Earth Elemental",
            voice: "Earth Elemental",
            _avatar_big: {
              "@1x": "__62de/img/avatar/e-elemental__195@1x.jpg",
              "@2x": "__8454/img/avatar/e-elemental__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__3aca/img/avatar/e-elemental__123@1x.jpg",
              "@2x": "__531f/img/avatar/e-elemental__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 6, 7, 1, 5, 2, 3]
              }],
              cards: [{
                id: 1,
                cardId: 85,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 94,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 76,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 76,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 78,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 17,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 94,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 2939
              }
            }, {
              i: [
                [2022, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 1959
              },
              i: [
                [2022, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 196
              }
            }]
          },
          pw: 97,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Fine, take the girls. You'll find the Sorceress in a green manor by the southern gates."
              }, {
                who: "hero",
                text: "All right, then. I'll let you go, but not before teaching you a lesson."
              }, {
                who: "enemy",
                text: "What lesson?"
              }, {
                who: "hero",
                text: "I life lesson. That life is pain. Here goes!"
              }, {
                who: "enemy",
                text: "Aaaa! Help!"
              }]
            }]
          },
          endComics: [{
            cssClass: "aQ01",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [85, 94, 76]
        }, {
          id: 17,
          prevMission: 16,
          name: 16.1,
          cost: {
            energy: 14
          },
          enemy: {
            exp: 930,
            _name: "Astarta",
            voice: "Astarta",
            _avatar_big: {
              "@1x": "__9109/img/avatar/astarta__195@1x.jpg",
              "@2x": "__d217/img/avatar/astarta__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__93a0/img/avatar/astarta__123@1x.jpg",
              "@2x": "__0b15/img/avatar/astarta__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 5, 7, 4, 6, 3, 2]
              }],
              cards: [{
                id: 1,
                cardId: 73,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 73,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 73,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 94,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 120,
                level: 2
              }, {
                id: 6,
                cardId: 98,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 24,
                level: 4
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 2939
              }
            }, {
              i: [
                [2002, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 1959
              },
              i: [
                [2002, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 196
              }
            }]
          },
          pw: 103,
          startComics: [{
            cssClass: "aR01",
            numFrames: 3
          }, {
            cssClass: "aR02",
            numFrames: 3
          }, {
            cssClass: "aR03",
            numFrames: 3
          }],
          endComics: [{
            cssClass: "aR04",
            numFrames: 3
          }, {
            cssClass: "aR05",
            numFrames: 3
          }, {
            cssClass: "aR06",
            numFrames: 2
          }, {
            cssClass: "aR07",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [73, 73, 73]
        }, {
          id: 18,
          prevMission: 17,
          name: 16.2,
          cost: {
            energy: 14
          },
          enemy: {
            exp: 930,
            _name: "Astarta",
            voice: "Astarta",
            _avatar_big: {
              "@1x": "__9109/img/avatar/astarta__195@1x.jpg",
              "@2x": "__d217/img/avatar/astarta__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__93a0/img/avatar/astarta__123@1x.jpg",
              "@2x": "__0b15/img/avatar/astarta__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 3, 4, 2, 6, 7, 5]
              }],
              cards: [{
                id: 1,
                cardId: 62,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 111,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 135,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 93,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 142
              }, {
                id: 6,
                cardId: 121,
                level: 5
              }, {
                id: 7,
                cardId: 71,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 1680
              },
              i: [
                [2053, 1]
              ]
            }, {
              i: [
                [2012, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 2056
              },
              i: [
                [2012, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 206
              }
            }]
          },
          pw: 110,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "I won't be so easy to deal with. Go on, now, remove the hex!"
              }, {
                who: "enemy",
                text: "You're not just a pervert, you're a psycho! Well, all the worse for you!"
              }]
            }]
          },
          startComics: [{
            cssClass: "aS01",
            numFrames: 3
          }, {
            cssClass: "aS02",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [62, 111, 135]
        }, {
          id: 19,
          prevMission: 16,
          name: 17,
          cost: {
            energy: 14
          },
          enemy: {
            exp: 1188,
            _name: "Astarta",
            voice: "Astarta",
            _avatar_big: {
              "@1x": "__9109/img/avatar/astarta__195@1x.jpg",
              "@2x": "__d217/img/avatar/astarta__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__93a0/img/avatar/astarta__123@1x.jpg",
              "@2x": "__0b15/img/avatar/astarta__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 6, 5, 1, 3, 7, 2]
              }],
              cards: [{
                id: 1,
                cardId: 73,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 101,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 140,
                level: 2
              }, {
                id: 4,
                cardId: 71,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 9,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 130,
                level: 2
              }, {
                id: 7,
                cardId: 139,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              cards: [
                [28, null, null, 7]
              ]
            }, {
              i: [
                [2052, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2056
              },
              i: [
                [2052, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 206
              }
            }]
          },
          pw: 117,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Why are you still here?! What do you want from me?"
              }, {
                who: "hero",
                text: "I told you - I want you to remove your bloody hex!"
              }, {
                who: "enemy",
                text: "I don't know what you mean..."
              }, {
                who: "hero",
                text: "Then I will explain!"
              }, {
                who: "enemy",
                text: "Aaa! Hands off!"
              }]
            }]
          },
          startComics: [{
            cssClass: "aT01",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [73, 101, 140]
        }, {
          id: 20,
          prevMission: 19,
          name: 18,
          cost: {
            energy: 14
          },
          enemy: {
            exp: 1188,
            _name: "Witch",
            voice: "Witch",
            _avatar_big: {
              "@1x": "__993a/img/avatar/witch__195@1x.jpg",
              "@2x": "__3e4b/img/avatar/witch__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__1790/img/avatar/witch__123@1x.jpg",
              "@2x": "__135b/img/avatar/witch__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 7, 1, 2, 5, 3, 4]
              }],
              cards: [{
                id: 1,
                cardId: 138,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 111,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 61,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 55,
                level: 3,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 11,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 37,
                level: 4
              }, {
                id: 7,
                cardId: 69,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3084
              }
            }, {
              i: [
                [2092, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2056
              },
              i: [
                [2092, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 206
              }
            }]
          },
          pw: 124,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Stop! We're not finished yet!"
              }]
            }]
          },
          startComics: [{
            cssClass: "aU01",
            numFrames: 4
          }],
          endComics: [{
            cssClass: "aU02",
            numFrames: 5
          }, {
            cssClass: "aU03",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [138, 111, 61]
        }]
      }, {
        id: 2,
        name: d("Forest"),
        missions: [{
          id: 21,
          prevMission: 20,
          name: 1,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 1498,
            _name: "Witch",
            voice: "Witch",
            _avatar_big: {
              "@1x": "__993a/img/avatar/witch__195@1x.jpg",
              "@2x": "__3e4b/img/avatar/witch__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__1790/img/avatar/witch__123@1x.jpg",
              "@2x": "__135b/img/avatar/witch__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 4, 3, 2, 1, 5, 7]
              }],
              cards: [{
                id: 1,
                cardId: 15,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 29,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 15,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 150,
                level: 3
              }, {
                id: 5,
                cardId: 17,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 16,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 25,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3111
              }
            }, {
              i: [
                [2102, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2074
              },
              i: [
                [2102, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 207
              }
            }]
          },
          pw: 132,
          startComics: [{
            cssClass: "bA01",
            numFrames: 3
          }, {
            cssClass: "bA02",
            numFrames: 4
          }, {
            cssClass: "bA03",
            numFrames: 3
          }, {
            cssClass: "bA04",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [15, 29, 15]
        }, {
          id: 22,
          prevMission: 21,
          name: 2,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 1498,
            _name: "Witch",
            voice: "Witch",
            _avatar_big: {
              "@1x": "__993a/img/avatar/witch__195@1x.jpg",
              "@2x": "__3e4b/img/avatar/witch__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__1790/img/avatar/witch__123@1x.jpg",
              "@2x": "__135b/img/avatar/witch__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 5, 1, 2, 4, 3, 7]
              }],
              cards: [{
                id: 1,
                cardId: 28,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 25,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 28,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 59,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 103,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 67,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 141,
                level: 3
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3111
              }
            }, {
              i: [
                [2112, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2074
              },
              i: [
                [2112, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 207
              }
            }]
          },
          pw: 140,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Katie, sic! Tear those bastards to shreds!"
              }, {
                who: "hero",
                text: "Easy up, girls."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Will you be calm now? Are you always this aggressive or are we just lucky?"
              }, {
                who: "enemy",
                text: "Have you seen yourself and your buddy in the mirror? How would I know you haven't come for my head?"
              }, {
                who: "hero",
                text: "I have seen our reflections, yes - that is why I'm here. I need to find the owner of this vest, and the guide said it could be done by her aura."
              }, {
                who: "enemy",
                text: "If I were you, I would seek out another way to thwart your transformation into a monster."
              }, {
                who: "hero",
                text: "Can't you lift the hex?"
              }, {
                who: "enemy",
                text: "No, only the caster of the hex is capable of lifting it. However, the transformation can be delayed. Go see the Alchemist - she'll be able to brew some kind of an elixir."
              }]
            }]
          },
          endComics: [{
            cssClass: "bB01",
            numFrames: 3
          }, {
            cssClass: "bB02",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [28, 25, 28]
        }, {
          id: 23,
          prevMission: 22,
          name: 3,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 1870,
            _name: "Vampire",
            voice: "Vampire",
            _avatar_big: {
              "@1x": "__6fd1/img/avatar/vampire__195@1x.jpg",
              "@2x": "__3100/img/avatar/vampire__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__3dd1/img/avatar/vampire__123@1x.jpg",
              "@2x": "__ab5e/img/avatar/vampire__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 1, 7, 4, 3, 6, 5]
              }],
              cards: [{
                id: 1,
                cardId: 20,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 45,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 20,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 6,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 105,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 131,
                level: 4
              }, {
                id: 7,
                cardId: 110,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3111
              }
            }, {
              i: [
                [2122, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2074
              },
              i: [
                [2122, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 207
              }
            }]
          },
          pw: 148,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Where am I supposed to find a vampire fang? Should I be going to a dentist instead of a graveyard?"
              }, {
                who: "enemy",
                text: "You've come to the right place, handsome."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "I've got you now!"
              }]
            }]
          },
          startComics: [{
            cssClass: "bC01",
            numFrames: 3
          }, {
            cssClass: "bC02",
            numFrames: 2
          }, {
            cssClass: "bC03",
            numFrames: 2
          }],
          endComics: [{
            cssClass: "bC04",
            numFrames: 1
          }],
          hero_cards: [null, null, null],
          enemy_cards: [20, 45, 20]
        }, {
          id: 24,
          prevMission: 23,
          name: 4,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 1870,
            _name: "Undead",
            voice: "Undead",
            _avatar_big: {
              "@1x": "__2c5c/img/avatar/undead__195@1x.jpg",
              "@2x": "__b9af/img/avatar/undead__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__1f15/img/avatar/undead__123@1x.jpg",
              "@2x": "__2b32/img/avatar/undead__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 6, 2, 7, 5, 3, 1]
              }],
              cards: [{
                id: 1,
                cardId: 24,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 45,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 24,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 101,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 5,
                cardId: 113,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 50,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 13,
                level: 7,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3098
              }
            }, {
              i: [
                [2132, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2065
              },
              i: [
                [2132, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 207
              }
            }]
          },
          pw: 157,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Don't touch my teeth, you maniac! I don't want your blood! I swear on my coffin!"
              }, {
                who: "hero",
                text: "As if I would believe you."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Are you deaf? I'm telling you, I don't want your blood!"
              }, {
                who: "hero",
                text: "Then why did you attack me?"
              }, {
                who: "enemy",
                text: "Attack? I just came by cause I wanted sex. Do you think it's easy for a vampire to find partners?! Some flee at the sight of you while others try to kill you in the process."
              }, {
                who: "hero",
                text: "You have my sympathies. But I still need your fang."
              }, {
                who: "enemy",
                text: "No problem! My fangs grow back every full moon. So, about sex..."
              }, {
                who: "hero",
                text: "Sure, but with one condition - safety first."
              }]
            }]
          },
          endComics: [{
            cssClass: "bD01",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [24, 45, 24]
        }, {
          id: 25,
          prevMission: 24,
          name: 5,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 2315,
            _name: "Gatekeeper",
            voice: "Gatekeeper",
            _avatar_big: {
              "@1x": "__7052/img/avatar/gatekeeper__195@1x.jpg",
              "@2x": "__651c/img/avatar/gatekeeper__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__4179/img/avatar/gatekeeper__123@1x.jpg",
              "@2x": "__baf1/img/avatar/gatekeeper__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 6, 7, 2, 4, 1, 3]
              }],
              cards: [{
                id: 1,
                cardId: 129,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 30,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 45,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 95,
                level: 17,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 5,
                cardId: 50,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 140,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 36,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3098
              }
            }, {
              i: [
                [2062, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2065
              },
              i: [
                [2062, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 207
              }
            }]
          },
          pw: 166,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "I've got the fang, now I need a graveyard flower... There, just past the fence is a whole bed of flowers..."
              }, {
                who: "enemy",
                text: "You've plucked my favorite daisy?! You vandal! Prepare to be torn apart!"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Was there really a need for this? I'd plucked just one measly flower, and now the whole flowerbed is ruined..."
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [129, 30, 45]
        }, {
          id: 26,
          prevMission: 25,
          name: 6,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 2315,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [7, 3, 2, 6, 4, 5, 1]
              }],
              cards: [{
                id: 1,
                cardId: 48,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 27,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 132,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 27,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 55,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 41,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 141,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3098
              }
            }, {
              i: [
                [2042, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 2065
              },
              i: [
                [2042, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 207
              }
            }]
          },
          pw: 175,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Halt! Who goes there? You shouldn't be here. Can't you see the gallows is under guard?"
              }, {
                who: "hero",
                text: "I won't be a moment - all I need is a piece of a nail. The strung-up fella doesn't really need it anymore..."
              }, {
                who: "enemy",
                text: "Can you believe it? He confessed on his own! You, face down on the ground! Your filthy necromancer ass is under arrest."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "A fang, a flower, a nail... I seem to have gotten everything. And now to bring it to the Alchemist. Where are you, guide? We're leaving."
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [48, 27, 132]
        }, {
          id: 27,
          prevMission: 26,
          name: 7,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 2850,
            _name: "Vampire",
            voice: "Vampire",
            _avatar_big: {
              "@1x": "__6fd1/img/avatar/vampire__195@1x.jpg",
              "@2x": "__3100/img/avatar/vampire__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__3dd1/img/avatar/vampire__123@1x.jpg",
              "@2x": "__ab5e/img/avatar/vampire__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 3, 7, 4, 2, 1, 6]
              }],
              cards: [{
                id: 1,
                cardId: 19,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 17,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 19,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 36,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 101,
                level: 16,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 134,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 11,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3108
              }
            }, {
              i: [
                [2072, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2072
              },
              i: [
                [2072, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 207
              }
            }]
          },
          pw: 185,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Your timing sucks."
              }]
            }]
          },
          startComics: [{
            cssClass: "bE01",
            numFrames: 2
          }],
          endComics: [{
            cssClass: "bE02",
            numFrames: 4
          }, {
            cssClass: "bE03",
            numFrames: 5
          }, {
            cssClass: "bE04",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [19, 17, 19]
        }, {
          id: 28,
          prevMission: 27,
          name: 8,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 2850,
            _name: "Vampire",
            voice: "Vampire",
            _avatar_big: {
              "@1x": "__6fd1/img/avatar/vampire__195@1x.jpg",
              "@2x": "__3100/img/avatar/vampire__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__3dd1/img/avatar/vampire__123@1x.jpg",
              "@2x": "__ab5e/img/avatar/vampire__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 7, 4, 3, 2, 5, 1]
              }],
              cards: [{
                id: 1,
                cardId: 9,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 17,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 9,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 95,
                level: 18,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 10,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 139,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 7,
                level: 6,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3108
              }
            }, {
              i: [
                [2032, 3]
              ]
            }, {
              r: {
                energy: 20
              }
            }],
            win: [{
              r: {
                gold: 2072
              },
              i: [
                [2032, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 207
              }
            }]
          },
          pw: 195,
          startComics: [{
            cssClass: "bF01",
            numFrames: 3
          }, {
            cssClass: "bF02",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [9, 17, 9]
        }, {
          id: 29,
          prevMission: 28,
          name: 9,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 3492,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 5, 4, 6, 1, 7, 3]
              }],
              cards: [{
                id: 1,
                cardId: 46,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 17,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 42,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 124,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 88,
                level: 21,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 13,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 59,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3914
              }
            }, {
              i: [
                [2082, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 2609
              },
              i: [
                [2082, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 261
              }
            }]
          },
          pw: 206,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Ready for a rematch?"
              }, {
                who: "hero",
                text: "Yes, but let's raise the stakes."
              }]
            }]
          },
          endComics: [{
            cssClass: "bG01",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [46, 17, 42]
        }, {
          id: 30,
          prevMission: 29,
          name: 9.1,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 3492,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [7, 2, 3, 5, 4, 6, 1]
              }],
              cards: [{
                id: 1,
                cardId: 42,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 16,
                level: 8,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 133,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 114,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 141,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 128,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 134,
                level: 2,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 3914
              }
            }, {
              i: [
                [2023, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 2609
              },
              i: [
                [2023, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 261
              }
            }]
          },
          pw: 213,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "We've no time for you, madam. Get lost."
              }]
            }]
          },
          startComics: [{
            cssClass: "bH01",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [42, 16, 133]
        }, {
          id: 31,
          prevMission: 30,
          name: 9.2,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 3492,
            _name: "Furry",
            voice: "Furry",
            _avatar_big: {
              "@1x": "__ad94/img/avatar/furry__195@1x.jpg",
              "@2x": "__0b59/img/avatar/furry__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__4b32/img/avatar/furry__123@1x.jpg",
              "@2x": "__e6ab/img/avatar/furry__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 6, 4, 2, 5, 1, 7]
              }],
              cards: [{
                id: 1,
                cardId: 42,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 39,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 13,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 14,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 79,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 39,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 99,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4100
              }
            }, {
              i: [
                [2003, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 2733
              },
              i: [
                [2003, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 273
              }
            }]
          },
          pw: 220,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "I still don't understand why you didn't just leave when you could have."
              }, {
                who: "enemy",
                text: "You're no authority to me! I run the local protection racket, and I've come to collect - the Alchemist owes me sex mana."
              }, {
                who: "hero",
                text: "Damn! Even here you've got gangsters... Anyway, horns, there's a new sheriff in town, and he's got the lab under his protection. Any questions?"
              }, {
                who: "enemy",
                text: "Have you lost your damn mind? Do you realize who you're messing with?"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Now who's lost their mind, huh?"
              }, {
                who: "enemy",
                text: "Mrmph..."
              }]
            }]
          },
          endComics: [{
            cssClass: "bI01",
            numFrames: 4
          }, {
            cssClass: "bI02",
            numFrames: 5
          }],
          hero_cards: [null, null, null],
          enemy_cards: [42, 39, 13]
        }, {
          id: 32,
          prevMission: 29,
          name: 10,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 4263,
            _name: "Water Elemental",
            voice: "Water Elemental",
            _avatar_big: {
              "@1x": "__db44/img/avatar/w-elemental__195@1x.jpg",
              "@2x": "__ba9b/img/avatar/w-elemental__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ce10/img/avatar/w-elemental__123@1x.jpg",
              "@2x": "__4db5/img/avatar/w-elemental__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 1, 6, 7, 3, 4, 5]
              }],
              cards: [{
                id: 1,
                cardId: 36,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 43,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 12,
                level: 10,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 85,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 91,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 140,
                level: 3,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 3,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4100
              }
            }, {
              i: [
                [2013, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 2733
              },
              i: [
                [2013, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 273
              }
            }]
          },
          pw: 227,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Oh, relax, this is ordinary magic. And besides, do you plan on taming me or what?"
              }, {
                who: "hero",
                text: "Should I?"
              }, {
                who: "enemy",
                text: "Such are the rules. I won't accept you as a master and won't obey  otherwise."
              }, {
                who: "hero",
                text: "Ok. As you say."
              }]
            }]
          },
          startComics: [{
            cssClass: "bJ01",
            numFrames: 5
          }, {
            cssClass: "bJ02",
            numFrames: 3
          }],
          endComics: [{
            cssClass: "bJ03",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [36, 43, 12]
        }, {
          id: 33,
          prevMission: 32,
          name: 10.1,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 4263,
            _name: "Undine",
            voice: "Undine",
            _avatar_big: {
              "@1x": "__640c/img/avatar/undine__195@1x.jpg",
              "@2x": "__d755/img/avatar/undine__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__49b9/img/avatar/undine__123@1x.jpg",
              "@2x": "__2b9e/img/avatar/undine__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 1, 4, 5, 6, 3, 7]
              }],
              cards: [{
                id: 1,
                cardId: 7,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 41,
                level: 7,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 37,
                level: 7,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 141,
                level: 4,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 55,
                level: 17,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 56,
                level: 13,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 87,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4100
              }
            }, {
              i: [
                [2053, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 2733
              },
              i: [
                [2053, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 273
              }
            }]
          },
          pw: 234,
          startComics: [{
            cssClass: "bK01",
            numFrames: 3
          }, {
            cssClass: "bK02",
            numFrames: 2
          }, {
            cssClass: "bK03",
            numFrames: 3
          }, {
            cssClass: "bK04",
            numFrames: 1
          }],
          endComics: [{
            cssClass: "bK05",
            numFrames: 4
          }, {
            cssClass: "bK06",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [7, 41, 37]
        }, {
          id: 34,
          prevMission: 33,
          name: 10.2,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 5187,
            _name: "Archress",
            voice: "Archress",
            _avatar_big: {
              "@1x": "__e388/img/avatar/archress__195@1x.jpg",
              "@2x": "__5cf9/img/avatar/archress__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__65d0/img/avatar/archress__123@1x.jpg",
              "@2x": "__c341/img/avatar/archress__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 5, 3, 4, 1, 7, 6]
              }],
              cards: [{
                id: 1,
                cardId: 39,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 42,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 13,
                level: 12,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 64,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 137,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 57,
                level: 19,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 144,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4028
              }
            }, {
              i: [
                [2093, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 2685
              },
              i: [
                [2093, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 269
              }
            }]
          },
          pw: 241,
          startComics: [{
            cssClass: "bL01",
            numFrames: 3
          }, {
            cssClass: "bL02",
            numFrames: 2
          }],
          endComics: [{
            cssClass: "bL03",
            numFrames: 1
          }],
          hero_cards: [null, null, null],
          enemy_cards: [39, 42, 13]
        }, {
          id: 35,
          prevMission: 34,
          name: 10.3,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 5187,
            _name: "Elven Queen",
            voice: "Elven Queen",
            _avatar_big: {
              "@1x": "__ee14/img/avatar/e-queen__195@1x.jpg",
              "@2x": "__3e22/img/avatar/e-queen__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__1d1e/img/avatar/e-queen__123@1x.jpg",
              "@2x": "__222b/img/avatar/e-queen__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 1, 7, 3, 2, 5, 6]
              }],
              cards: [{
                id: 1,
                cardId: 22,
                level: 6,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 10,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 27,
                level: 6,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 144,
                level: 5,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 9,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 55,
                level: 13,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 38,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4028
              }
            }, {
              i: [
                [2103, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 2685
              },
              i: [
                [2103, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 269
              }
            }]
          },
          pw: 248,
          startComics: [{
            cssClass: "bM01",
            numFrames: 4
          }, {
            cssClass: "bM02",
            numFrames: 3
          }, {
            cssClass: "bM03",
            numFrames: 2
          }, {
            cssClass: "bM04",
            numFrames: 3
          }, {
            cssClass: "bM05",
            numFrames: 3
          }, {
            cssClass: "bM06",
            numFrames: 3
          }, {
            cssClass: "bM07",
            numFrames: 2
          }],
          endComics: [{
            cssClass: "bM08",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [22, 10, 27]
        }, {
          id: 36,
          prevMission: 35,
          name: 10.4,
          cost: {
            energy: 15
          },
          enemy: {
            exp: 5187,
            _name: "Elven Queen",
            voice: "Elven Queen",
            _avatar_big: {
              "@1x": "__ee14/img/avatar/e-queen__195@1x.jpg",
              "@2x": "__3e22/img/avatar/e-queen__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__1d1e/img/avatar/e-queen__123@1x.jpg",
              "@2x": "__222b/img/avatar/e-queen__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 1, 5, 6, 7, 2, 4]
              }],
              cards: [{
                id: 1,
                cardId: 44,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 38,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 20,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 4,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 5,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 45,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 99,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4259
              }
            }, {
              i: [
                [2113, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 2839
              },
              i: [
                [2113, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 284
              }
            }]
          },
          pw: 255,
          startComics: [{
            cssClass: "bN01",
            numFrames: 4
          }, {
            cssClass: "bN02",
            numFrames: 3
          }, {
            cssClass: "bN03",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [44, 38, 20]
        }, {
          id: 37,
          prevMission: 36,
          name: 10.5,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 6296,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [7, 3, 4, 6, 2, 5, 1]
              }],
              cards: [{
                id: 1,
                cardId: 19,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 41,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 3,
                cardId: 36,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 4,
                cardId: 89,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 76,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 141,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 7,
                cardId: 133,
                level: 6,
                evolution: {
                  currentStage: 1
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4259
              }
            }, {
              i: [
                [2123, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 2839
              },
              i: [
                [2123, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 284
              }
            }]
          },
          pw: 262,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "You're not a bad fighter, but perhaps you've been facing weak opponents? I want you to fight me personally."
              }, {
                who: "hero"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "I suppose your abilities merit a reward. What is it you wish for?"
              }, {
                who: "hero",
                text: "To writhe in ecstasy with you, and then to pass through the wood unmolested."
              }, {
                who: "enemy",
                text: "Then savor the fruits of my hospitality."
              }]
            }]
          },
          endComics: [{
            cssClass: "bO01",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [19, 41, 36]
        }, {
          id: 38,
          prevMission: 32,
          name: 11,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 7627,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [7, 5, 3, 2, 6, 4, 1]
              }],
              cards: [{
                id: 1,
                cardId: 39,
                level: 3,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 36,
                level: 3,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 11,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 23,
                level: 8,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 102,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 122,
                level: 3,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 60,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4259
              }
            }, {
              i: [
                [2133, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 2839
              },
              i: [
                [2133, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 284
              }
            }]
          },
          pw: 269,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Don't come any closer, or I'll eat the pie!"
              }, {
                who: "hero",
                text: "Just don't choke on it..."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "We'll meet again, you dog!"
              }, {
                who: "hero",
                text: "Call me dog one more time! Hey, where are you going?!"
              }]
            }]
          },
          startComics: [{
            cssClass: "bP01",
            numFrames: 4
          }, {
            cssClass: "bP02",
            numFrames: 2
          }, {
            cssClass: "bP03",
            numFrames: 2
          }, {
            cssClass: "bP04",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [39, 36, 11]
        }, {
          id: 39,
          prevMission: 38,
          name: 12,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 9225,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 6, 4, 7, 5, 3, 2]
              }],
              cards: [{
                id: 1,
                cardId: 10,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 37,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 45,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 134,
                level: 7,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 138,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 39,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 128,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4241
              }
            }, {
              i: [
                [2063, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 2827
              },
              i: [
                [2063, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 283
              }
            }]
          },
          pw: 276,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Fine, the babe is yours."
              }]
            }]
          },
          startComics: [{
            cssClass: "bQ01",
            numFrames: 2
          }, {
            cssClass: "bQ02",
            numFrames: 3
          }],
          endComics: [{
            cssClass: "bQ03",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [10, 37, 45]
        }, {
          id: 40,
          prevMission: 39,
          name: 13,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 9225,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 3, 1, 7, 4, 2, 5]
              }],
              cards: [{
                id: 1,
                cardId: 45,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 39,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 15,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 103,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 52,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 6,
                cardId: 17,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 64,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4241
              }
            }, {
              i: [
                [2043, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 2827
              },
              i: [
                [2043, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 283
              }
            }]
          },
          pw: 283,
          startComics: [{
            cssClass: "bR01",
            numFrames: 4
          }, {
            cssClass: "bR02",
            numFrames: 4
          }, {
            cssClass: "bR03",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [45, 39, 15]
        }, {
          id: 41,
          prevMission: 40,
          name: 14,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 11142,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 6, 4, 7, 3, 5, 2]
              }],
              cards: [{
                id: 1,
                cardId: 36,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 17,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 38,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 133,
                level: 8,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 5,
                cardId: 44,
                level: 5,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 75,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 87,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4241
              }
            }, {
              i: [
                [2073, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 2827
              },
              i: [
                [2073, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 283
              }
            }]
          },
          pw: 290,
          hero_cards: [null, null, null],
          enemy_cards: [36, 17, 38]
        }, {
          id: 42,
          prevMission: 41,
          name: 14.1,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 11142,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [7, 2, 6, 3, 1, 4, 5]
              }],
              cards: [{
                id: 1,
                cardId: 48,
                level: 9,
                evolution: {
                  currentStage: 1
                }
              }, {
                id: 2,
                cardId: 41,
                level: 6,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 42,
                level: 6,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 34,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 54,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 27,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 32,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5159
              }
            }, {
              i: [
                [2033, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 3439
              },
              i: [
                [2033, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 344
              }
            }]
          },
          pw: 297,
          hero_cards: [null, null, null],
          enemy_cards: [48, 41, 42]
        }, {
          id: 43,
          prevMission: 42,
          name: 14.2,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 13442,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 4, 7, 6, 1, 2, 3]
              }],
              cards: [{
                id: 1,
                cardId: 33,
                level: 12,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 46,
                level: 6,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 2,
                level: 13,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 104,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 28,
                level: 12,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 37,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 69,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5159
              }
            }, {
              i: [
                [2083, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 3439
              },
              i: [
                [2083, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 344
              }
            }]
          },
          pw: 304,
          hero_cards: [null, null, null],
          enemy_cards: [33, 46, 2]
        }, {
          id: 44,
          prevMission: 43,
          name: 14.3,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 16202,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 1, 6, 2, 7, 3, 4]
              }],
              cards: [{
                id: 1,
                cardId: 24,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 44,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 48,
                level: 3,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 87,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 146,
                level: 14,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 147,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 76,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5159
              }
            }, {
              i: [
                [2024, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 3439
              },
              i: [
                [2024, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 344
              }
            }]
          },
          pw: 311,
          hero_cards: [null, null, null],
          enemy_cards: [24, 44, 48]
        }, {
          id: 45,
          prevMission: 41,
          name: 15,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 19515,
            _name: "Foxy",
            voice: "Foxy",
            _avatar_big: {
              "@1x": "__a754/img/avatar/foxy__195@1x.jpg",
              "@2x": "__71a3/img/avatar/foxy__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9286/img/avatar/foxy__123@1x.jpg",
              "@2x": "__da58/img/avatar/foxy__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 3, 5, 7, 4, 1, 2]
              }],
              cards: [{
                id: 1,
                cardId: 51,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 46,
                level: 8,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 46,
                level: 8,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 95,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 125,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 52,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 78,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5399
              }
            }, {
              i: [
                [2004, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 3599
              },
              i: [
                [2004, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 360
              }
            }]
          },
          pw: 318,
          endComics: [{
            cssClass: "bS01",
            numFrames: 1
          }, {
            cssClass: "bS02",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [51, 46, 46]
        }]
      }, {
        id: 3,
        name: d("Sands"),
        missions: [{
          id: 46,
          prevMission: 45,
          name: 1,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 23490,
            _name: "Elven Queen",
            voice: "Elven Queen",
            _avatar_big: {
              "@1x": "__ee14/img/avatar/e-queen__195@1x.jpg",
              "@2x": "__3e22/img/avatar/e-queen__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__1d1e/img/avatar/e-queen__123@1x.jpg",
              "@2x": "__222b/img/avatar/e-queen__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 7, 1, 6, 2, 3, 5]
              }],
              cards: [{
                id: 1,
                cardId: 26,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 43,
                level: 8,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 23,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 29,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 49,
                level: 4,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 6,
                cardId: 27,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 84,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5399
              }
            }, {
              i: [
                [2014, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 3599
              },
              i: [
                [2014, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 360
              }
            }]
          },
          pw: 325,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "I'll tear you up, tear you up, tear you up!"
              }, {
                who: "hero",
                text: "Cut it out. I'm not a bone, and you're not Lassie."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Relax, girlfriend. It's over now."
              }, {
                who: "enemy",
                text: "I'll tear you up - tear you up - tear you up!"
              }, {
                who: "hero",
                text: "Like a broken record. What's with her?"
              }]
            }]
          },
          startComics: [{
            cssClass: "cA01",
            numFrames: 4
          }],
          endComics: [{
            cssClass: "cA02",
            numFrames: 5
          }, {
            cssClass: "cA03",
            numFrames: 2
          }, {
            cssClass: "cA04",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [26, 43, 23]
        }, {
          id: 47,
          prevMission: 46,
          name: 2,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 23490,
            _name: "Elven Queen",
            voice: "Elven Queen",
            _avatar_big: {
              "@1x": "__ee14/img/avatar/e-queen__195@1x.jpg",
              "@2x": "__3e22/img/avatar/e-queen__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__1d1e/img/avatar/e-queen__123@1x.jpg",
              "@2x": "__222b/img/avatar/e-queen__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 5, 7, 4, 1, 3, 6]
              }],
              cards: [{
                id: 1,
                cardId: 23,
                level: 8,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 33,
                level: 8,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 28,
                level: 8,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 126,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 103,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 97,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 71,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5201
              }
            }, {
              i: [
                [2054, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 3467
              },
              i: [
                [2054, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 347
              }
            }]
          },
          pw: 332,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "That changes everything. Pardon me, but I've gotta go!"
              }, {
                who: "enemy",
                text: "You can't leave just like that!"
              }, {
                who: "hero"
              }]
            }]
          },
          startComics: [{
            cssClass: "cB01",
            numFrames: 3
          }, {
            cssClass: "cB02",
            numFrames: 3
          }, {
            cssClass: "cB03",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [23, 33, 28]
        }, {
          id: 48,
          prevMission: 47,
          name: 3,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 23490,
            _name: "Scheherazade",
            voice: "Scheherazade",
            _avatar_big: {
              "@1x": "__617c/img/avatar/shaherezada__195@1x.jpg",
              "@2x": "__9b4b/img/avatar/shaherezada__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__299b/img/avatar/shaherezada__123@1x.jpg",
              "@2x": "__02e3/img/avatar/shaherezada__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 3, 5, 4, 1, 7, 6]
              }],
              cards: [{
                id: 1,
                cardId: 21,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 21,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 26,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 93,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 53,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 125,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 18,
                level: 18,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5201
              }
            }, {
              i: [
                [2094, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 3467
              },
              i: [
                [2094, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 347
              }
            }]
          },
          pw: 339,
          hero_cards: [null, null, null],
          enemy_cards: [21, 21, 26]
        }, {
          id: 49,
          prevMission: 48,
          name: 4,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 28259,
            _name: "Scheherazade",
            voice: "Scheherazade",
            _avatar_big: {
              "@1x": "__617c/img/avatar/shaherezada__195@1x.jpg",
              "@2x": "__9b4b/img/avatar/shaherezada__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__299b/img/avatar/shaherezada__123@1x.jpg",
              "@2x": "__02e3/img/avatar/shaherezada__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [7, 5, 4, 6, 3, 1, 2]
              }],
              cards: [{
                id: 1,
                cardId: 33,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 29,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 34,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 108,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 71,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 120,
                level: 10,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 147,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5069
              }
            }, {
              i: [
                [2104, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 3379
              },
              i: [
                [2104, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 338
              }
            }]
          },
          pw: 346,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Well, what am I to do with you?"
              }, {
                who: "enemy",
                text: "It's not my fault! It's all the padishah! I used to be his favorite wife. He just loved to hear my stories. And then he grew bored with me!"
              }, {
                who: "hero",
                text: "What does that have to do with me?"
              }, {
                who: "enemy",
                text: "You all leave me..."
              }, {
                who: "hero",
                text: "What the hell! The world is different, but the broads are exactly the same..."
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [33, 29, 34]
        }, {
          id: 50,
          prevMission: 49,
          name: 4.1,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 28259,
            _name: "Scheherazade",
            voice: "Scheherazade",
            _avatar_big: {
              "@1x": "__617c/img/avatar/shaherezada__195@1x.jpg",
              "@2x": "__9b4b/img/avatar/shaherezada__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__299b/img/avatar/shaherezada__123@1x.jpg",
              "@2x": "__02e3/img/avatar/shaherezada__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 2, 3, 7, 1, 4, 6]
              }],
              cards: [{
                id: 1,
                cardId: 21,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 38,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 52,
                level: 6,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 88,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 76,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 35,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 50,
                level: 6,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 5069
              }
            }, {
              i: [
                [2114, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 3379
              },
              i: [
                [2114, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 338
              }
            }]
          },
          pw: 353,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Safe flight!"
              }]
            }]
          },
          startComics: [{
            cssClass: "cC01",
            numFrames: 4
          }, {
            cssClass: "cC02",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [21, 38, 52]
        }, {
          id: 51,
          prevMission: 50,
          name: 4.2,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 33983,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 7, 1, 3, 2, 5, 6]
              }],
              cards: [{
                id: 1,
                cardId: 25,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 34,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 25,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 123,
                level: 12,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 81,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 48,
                level: 7,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 147,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4992
              }
            }, {
              i: [
                [2124, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 3328
              },
              i: [
                [2124, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 333
              }
            }]
          },
          pw: 360,
          hero_cards: [null, null, null],
          enemy_cards: [25, 34, 25]
        }, {
          id: 52,
          prevMission: 51,
          name: 4.3,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 33983,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 1, 7, 5, 3, 2, 4]
              }],
              cards: [{
                id: 1,
                cardId: 35,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 34,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 25,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 84,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 78,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 3,
                level: 14,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 74,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4992
              }
            }, {
              i: [
                [2134, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 3328
              },
              i: [
                [2134, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 333
              }
            }]
          },
          pw: 367,
          hero_cards: [null, null, null],
          enemy_cards: [35, 34, 25]
        }, {
          id: 53,
          prevMission: 52,
          name: 4.4,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 33983,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 4, 3, 5, 7, 6, 1]
              }],
              cards: [{
                id: 1,
                cardId: 21,
                level: 13,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 41,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 31,
                level: 13,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 138,
                level: 23,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 17,
                level: 16,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 20,
                level: 16,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 44,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 4992
              }
            }, {
              i: [
                [2064, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 3328
              },
              i: [
                [2064, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 333
              }
            }]
          },
          pw: 374,
          hero_cards: [null, null, null],
          enemy_cards: [21, 41, 31]
        }, {
          id: 54,
          prevMission: 53,
          name: 4.5,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 40852,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [7, 5, 1, 3, 4, 6, 2]
              }],
              cards: [{
                id: 1,
                cardId: 46,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 38,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 38,
                level: 13,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 133,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 4,
                level: 17,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 73,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 1,
                level: 17,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6534
              }
            }, {
              i: [
                [2044, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 4356
              },
              i: [
                [2044, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 436
              }
            }]
          },
          pw: 381,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "You're a naughty girl - I'm going to have to punish you."
              }]
            }]
          },
          endComics: [{
            cssClass: "cD01",
            numFrames: 1
          }],
          hero_cards: [null, null, null],
          enemy_cards: [46, 38, 38]
        }, {
          id: 55,
          prevMission: 49,
          name: 5,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 40852,
            _name: "East Genie",
            voice: "East Genie",
            _avatar_big: {
              "@1x": "__2e2e/img/avatar/genie__195@1x.jpg",
              "@2x": "__7ab3/img/avatar/genie__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__628f/img/avatar/genie__123@1x.jpg",
              "@2x": "__6f9b/img/avatar/genie__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 6, 7, 5, 3, 2, 1]
              }],
              cards: [{
                id: 1,
                cardId: 44,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 2,
                cardId: 37,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 3,
                cardId: 49,
                level: 9,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 38,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 6,
                level: 18,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 75,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 10,
                level: 18,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6534
              }
            }, {
              i: [
                [2074, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 4356
              },
              i: [
                [2074, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 436
              }
            }]
          },
          pw: 388,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Wait! Genies are supposed to fulfill desires on request."
              }, {
                who: "enemy",
                text: "Not in this story."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "We're lost. Tell us how to get to the Trading Shed."
              }, {
                who: "hero",
                text: "Keep right to the first dune, then turn left and keep going for fifty leagues. Wish fulfilled."
              }]
            }]
          },
          startComics: [{
            cssClass: "cE01",
            numFrames: 3
          }, {
            cssClass: "cE02",
            numFrames: 2
          }, {
            cssClass: "cE03",
            numFrames: 3
          }, {
            cssClass: "cE04",
            numFrames: 4
          }],
          endComics: [{
            cssClass: "cE05",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [44, 37, 49]
        }, {
          id: 56,
          prevMission: 55,
          name: 6,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 49094,
            _name: "East Genie",
            voice: "East Genie",
            _avatar_big: {
              "@1x": "__2e2e/img/avatar/genie__195@1x.jpg",
              "@2x": "__7ab3/img/avatar/genie__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__628f/img/avatar/genie__123@1x.jpg",
              "@2x": "__6f9b/img/avatar/genie__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 4, 2, 3, 5, 1, 7]
              }],
              cards: [{
                id: 1,
                cardId: 38,
                level: 8,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 45,
                level: 8,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 37,
                level: 8,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 129,
                level: 10,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 149,
                level: 8,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 138,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 95,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6468
              }
            }, {
              i: [
                [2034, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4312
              },
              i: [
                [2034, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 431
              }
            }]
          },
          pw: 395,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Here's my wish, then. Shade, palm trees, beach, girls. Right here and now, at the Trading Shed."
              }, {
                who: "enemy",
                text: "Your wish is my command."
              }]
            }]
          },
          endComics: [{
            cssClass: "cF01",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [38, 45, 37]
        }, {
          id: 57,
          prevMission: 56,
          name: 7,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 49094,
            _name: "East Genie",
            voice: "East Genie",
            _avatar_big: {
              "@1x": "__2e2e/img/avatar/genie__195@1x.jpg",
              "@2x": "__7ab3/img/avatar/genie__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__628f/img/avatar/genie__123@1x.jpg",
              "@2x": "__6f9b/img/avatar/genie__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 4, 6, 5, 3, 1, 7]
              }],
              cards: [{
                id: 1,
                cardId: 36,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 45,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 39,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 114,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 5,
                cardId: 89,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 127,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 108,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6468
              }
            }, {
              i: [
                [2084, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4312
              },
              i: [
                [2084, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 431
              }
            }]
          },
          pw: 402,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Tell that to the padishah when you're cooking in boiling oil. Arrest him!"
              }, {
                who: "hero",
                text: "I object! This is barbarism!"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Send help! Quickly!"
              }]
            }]
          },
          startComics: [{
            cssClass: "cG01",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [36, 45, 39]
        }, {
          id: 58,
          prevMission: 57,
          name: 8,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 58985,
            _name: "Assassin",
            voice: "Assassin",
            _avatar_big: {
              "@1x": "__131f/img/avatar/assassin__195@1x.jpg",
              "@2x": "__833f/img/avatar/assassin__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__76aa/img/avatar/assassin__123@1x.jpg",
              "@2x": "__64f2/img/avatar/assassin__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 1, 4, 5, 2, 7, 6]
              }],
              cards: [{
                id: 1,
                cardId: 43,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 41,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 49,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 144,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 5,
                cardId: 135,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 133,
                level: 11,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 33,
                level: 16,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6143
              }
            }, {
              i: [
                [2025, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4095
              },
              i: [
                [2025, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 410
              }
            }]
          },
          pw: 409,
          speech: {
            dialogs: [{
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "So, you got caught?"
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [43, 41, 49]
        }, {
          id: 59,
          prevMission: 58,
          name: 9,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 58985,
            _name: "Assassin",
            voice: "Assassin",
            _avatar_big: {
              "@1x": "__131f/img/avatar/assassin__195@1x.jpg",
              "@2x": "__833f/img/avatar/assassin__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__76aa/img/avatar/assassin__123@1x.jpg",
              "@2x": "__64f2/img/avatar/assassin__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 4, 3, 7, 5, 6, 2]
              }],
              cards: [{
                id: 1,
                cardId: 39,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 39,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 46,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 20,
                level: 22,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 77,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 57,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 98,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6143
              }
            }, {
              i: [
                [2005, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4095
              },
              i: [
                [2005, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 410
              }
            }]
          },
          pw: 416,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "It's too bad you'll be executed - I'd spend a night with you."
              }, {
                who: "hero",
                text: "Let's have that night first, and then we'll see."
              }, {
                who: "enemy",
                text: "Duty first, sex later!"
              }, {
                who: "hero",
                text: "That'll probably be necrophilia in my case. Think!"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Let's see what your fists can do against arrows."
              }, {
                who: "hero",
                text: "How awful..."
              }]
            }]
          },
          endComics: [{
            cssClass: "cH01",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [39, 39, 46]
        }, {
          id: 60,
          prevMission: 59,
          name: 9.1,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 70853,
            _name: "Slave",
            voice: "Slave",
            _avatar_big: {
              "@1x": "__d3f1/img/avatar/slave__195@1x.jpg",
              "@2x": "__7d0f/img/avatar/slave__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9fa9/img/avatar/slave__123@1x.jpg",
              "@2x": "__d0c4/img/avatar/slave__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 3, 7, 2, 6, 5, 4]
              }],
              cards: [{
                id: 1,
                cardId: 42,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 46,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 46,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 149,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 5,
                cardId: 124,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 110,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 105,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6476
              }
            }, {
              i: [
                [2015, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 4317
              },
              i: [
                [2015, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 432
              }
            }]
          },
          pw: 423,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Who's there? Release me at once! I am the padishah's favorite woman!"
              }, {
                who: "hero",
                text: "You're exactly who I'm looking for."
              }, {
                who: "enemy",
                text: "Don't get any closer!"
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Are you mad, woman? I'm here to rescue you."
              }, {
                who: "enemy",
                text: "Ignoble dog! You shall pay for your insolence!"
              }]
            }]
          },
          startComics: [{
            cssClass: "cI01",
            numFrames: 4
          }, {
            cssClass: "cI02",
            numFrames: 4
          }, {
            cssClass: "cI03",
            numFrames: 2
          }, {
            cssClass: "cI04",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [42, 46, 46]
        }, {
          id: 61,
          prevMission: 60,
          name: 9.2,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 70853,
            _name: "Slave",
            voice: "Slave",
            _avatar_big: {
              "@1x": "__d3f1/img/avatar/slave__195@1x.jpg",
              "@2x": "__7d0f/img/avatar/slave__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__9fa9/img/avatar/slave__123@1x.jpg",
              "@2x": "__d0c4/img/avatar/slave__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 6, 7, 2, 4, 5, 1]
              }],
              cards: [{
                id: 1,
                cardId: 43,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 38,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 49,
                level: 12,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 56,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 126,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 83,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 130,
                level: 12,
                evolution: {
                  currentStage: 2
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6476
              }
            }, {
              i: [
                [2055, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 4317
              },
              i: [
                [2055, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 432
              }
            }]
          },
          pw: 430,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "How many times do I have to tell you to relax..."
              }, {
                who: "enemy",
                text: "I will rip out your eyes, filthy kidnapper!"
              }, {
                who: "hero",
                text: "What a wench! Well, you asked for it."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "I admit, you don't look like the one who had kidnapped me. Sorry, it was hard to see in the dark. And I was scared."
              }, {
                who: "hero",
                text: "Who was it, anyway?"
              }, {
                who: "enemy",
                text: "The guy was fat, hairy and very slow. He also had a woman with him... "
              }, {
                who: "enemy",
                text: "Oh no! She's right behind you!"
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [43, 38, 49]
        }, {
          id: 62,
          prevMission: 59,
          name: 10,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 70853,
            _name: "Medusa",
            voice: "Medusa",
            _avatar_big: {
              "@1x": "__0b9c/img/avatar/meduza__195@1x.jpg",
              "@2x": "__9ce9/img/avatar/meduza__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__5f92/img/avatar/meduza__123@1x.jpg",
              "@2x": "__eebf/img/avatar/meduza__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [1, 5, 7, 6, 2, 4, 3]
              }],
              cards: [{
                id: 1,
                cardId: 38,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 45,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 42,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 63,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 34,
                level: 19,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 122,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 79,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6476
              }
            }, {
              i: [
                [2095, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4317
              },
              i: [
                [2095, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 432
              }
            }]
          },
          pw: 437,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "And who the hell are you?"
              }, {
                who: "enemy",
                text: "Come closer, sssweetheart, and I'll tell you..."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Oh shit, you're an actual snake!"
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [38, 45, 42]
        }, {
          id: 63,
          prevMission: 62,
          name: 11,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 85096,
            _name: "Medusa",
            voice: "Medusa",
            _avatar_big: {
              "@1x": "__0b9c/img/avatar/meduza__195@1x.jpg",
              "@2x": "__9ce9/img/avatar/meduza__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__5f92/img/avatar/meduza__123@1x.jpg",
              "@2x": "__eebf/img/avatar/meduza__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 1, 5, 7, 4, 3, 2]
              }],
              cards: [{
                id: 1,
                cardId: 45,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 46,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 45,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 138,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 139,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 89,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 125,
                level: 14,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6860
              }
            }, {
              i: [
                [2105, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4573
              },
              i: [
                [2105, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 457
              }
            }]
          },
          pw: 444,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Pet me, human."
              }, {
                who: "hero",
                text: "Petting is not my thing. I prefer sex."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Who ordered to kidnap the concubine? Speak or I'll have you shaved bald."
              }, {
                who: "enemy",
                text: "The Sssloth. I kidnap women for him..."
              }, {
                who: "hero",
                text: "The Sloth? Does he serve the Sorceress as well?"
              }, {
                who: "enemy",
                text: "I don't know anything elssse. I only kidnap them..."
              }, {
                who: "hero",
                text: "Well, every crime merits a certain punishment."
              }]
            }]
          },
          endComics: [{
            cssClass: "cJ01",
            numFrames: 1
          }, {
            cssClass: "cJ02",
            numFrames: 5
          }, {
            cssClass: "cJ03",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [45, 46, 45]
        }, {
          id: 64,
          prevMission: 63,
          name: 12,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 85096,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 7, 3, 6, 1, 2, 5]
              }],
              cards: [{
                id: 1,
                cardId: 38,
                level: 13,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 36,
                level: 13,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 46,
                level: 13,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 67,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 103,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 48,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 7,
                cardId: 149,
                level: 13,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6860
              }
            }, {
              i: [
                [2115, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4573
              },
              i: [
                [2115, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 457
              }
            }]
          },
          pw: 451,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Ooh la la! What a man!"
              }, {
                who: "hero",
                text: "Listen here, you nympho. Leave the padishah alone. He's a married man."
              }, {
                who: "enemy",
                text: "That's exactly why I want him - for all the sex mana I get from him... No, I think I'll keep using him. And you!"
              }, {
                who: "hero",
                text: "We'll see who'll be using whom."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "You're a capable fella. We'll get along just fine."
              }, {
                who: "hero",
                text: "Not the way you want it, I'm afraid."
              }]
            }]
          },
          startComics: [{
            cssClass: "cK01",
            numFrames: 5
          }, {
            cssClass: "cK02",
            numFrames: 3
          }, {
            cssClass: "cK03",
            numFrames: 2
          }, {
            cssClass: "cK04",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [38, 36, 46]
        }, {
          id: 65,
          prevMission: 64,
          name: 12.1,
          cost: {
            energy: 16
          },
          enemy: {
            exp: 85096,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 6, 4, 3, 7, 2, 1]
              }],
              cards: [{
                id: 1,
                cardId: 45,
                level: 14,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 43,
                level: 14,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 52,
                level: 14,
                evolution: {
                  currentStage: 2
                }
              }, {
                id: 4,
                cardId: 120,
                level: 14,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 5,
                cardId: 3,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 4,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 7,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6860
              }
            }, {
              i: [
                [2125, 3]
              ]
            }, {
              i: [
                [6001, 1]
              ]
            }],
            win: [{
              r: {
                gold: 4573
              },
              i: [
                [2125, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 457
              }
            }]
          },
          pw: 458,
          endComics: [{
            cssClass: "cL01",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [45, 43, 52]
        }, {
          id: 66,
          prevMission: 65,
          name: 12.2,
          cost: {
            energy: 17
          },
          enemy: {
            exp: 102187,
            _name: "Succubus",
            voice: "Succubus",
            _avatar_big: {
              "@1x": "__23f6/img/avatar/succubus__195@1x.jpg",
              "@2x": "__870d/img/avatar/succubus__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__ff41/img/avatar/succubus__123@1x.jpg",
              "@2x": "__e496/img/avatar/succubus__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [5, 4, 2, 3, 7, 1, 6]
              }],
              cards: [{
                id: 1,
                cardId: 37,
                level: 14,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 43,
                level: 14,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 37,
                level: 14,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 130,
                level: 8,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 5,
                cardId: 59,
                level: 21,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 36,
                level: 14,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 20,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 6996
              }
            }, {
              i: [
                [2135, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4664
              },
              i: [
                [2135, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 466
              }
            }]
          },
          pw: 465,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Did you think of a safe word? Once I get going, it can really hurt."
              }, {
                who: "hero",
                text: "Better you skedaddle, you cloven-hoofed beast."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Hey, we didn't agree it would be so rough."
              }]
            }]
          },
          startComics: [{
            cssClass: "cM01",
            numFrames: 3
          }, {
            cssClass: "cM02",
            numFrames: 3
          }, {
            cssClass: "cM03",
            numFrames: 4
          }, {
            cssClass: "cM04",
            numFrames: 3
          }, {
            cssClass: "cM05",
            numFrames: 4
          }],
          hero_cards: [null, null, null],
          enemy_cards: [37, 43, 37]
        }, {
          id: 67,
          prevMission: 64,
          name: 13,
          cost: {
            energy: 17
          },
          enemy: {
            exp: 102187,
            _name: "Amazon",
            voice: "Amazon",
            _avatar_big: {
              "@1x": "__0727/img/avatar/amazonka__195@1x.jpg",
              "@2x": "__8c04/img/avatar/amazonka__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__6261/img/avatar/amazonka__123@1x.jpg",
              "@2x": "__b0dc/img/avatar/amazonka__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [6, 5, 4, 2, 7, 1, 3]
              }],
              cards: [{
                id: 1,
                cardId: 42,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 42,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 52,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 114,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 5,
                cardId: 41,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 96,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 129,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 7137
              }
            }, {
              i: [
                [2065, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4758
              },
              i: [
                [2065, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 476
              }
            }]
          },
          pw: 472,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "What the hell?! Your bird is shitting on me from above!"
              }, {
                who: "enemy",
                text: "What do you know about the art of war? This is a secret move!"
              }, {
                who: "hero",
                text: "The art of war? Let's see what you're going to do when you run out of arrows, and your bird runs out of shit."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "That's it - you'll be washing my T-shirt!"
              }, {
                who: "enemy",
                text: "Wanna be buried in clean clothes, do you?"
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [42, 42, 52]
        }, {
          id: 68,
          prevMission: 67,
          name: 13.1,
          cost: {
            energy: 17
          },
          enemy: {
            exp: 122696,
            _name: "Amazon",
            voice: "Amazon",
            _avatar_big: {
              "@1x": "__0727/img/avatar/amazonka__195@1x.jpg",
              "@2x": "__8c04/img/avatar/amazonka__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__6261/img/avatar/amazonka__123@1x.jpg",
              "@2x": "__b0dc/img/avatar/amazonka__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 2, 5, 7, 1, 6, 4]
              }],
              cards: [{
                id: 1,
                cardId: 38,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 44,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 49,
                level: 9,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 20,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 38,
                level: 15,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 85,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 121,
                level: 17,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 7280
              }
            }, {
              i: [
                [2045, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4853
              },
              i: [
                [2045, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 485
              }
            }]
          },
          pw: 479,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Aren't you bored by this, beautiful? Can you tell me what the issue is?"
              }, {
                who: "enemy",
                text: "Vile hypocrite! How many women have you sold into sex slavery?"
              }, {
                who: "hero",
                text: "Me? Into sex slavery? Whoever told you this?"
              }, {
                who: "enemy",
                text: "Mr Sloth. He paid me to put an end to your villainous crimes."
              }, {
                who: "hero",
                text: "He lied to you. The only one engaged in sex slavery is the Sloth himself."
              }, {
                who: "enemy",
                text: "Don't lie to me. Prepare to die instead."
              }]
            }, {
              lock: {
                name: "won",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "You didn't know that the Sloth, the guy who hired you, is a sex slaver?"
              }, {
                who: "enemy",
                text: "I'm not from around here."
              }, {
                who: "hero",
                text: "Do you at least know where to find the Sloth?"
              }, {
                who: "enemy",
                text: "Yes. He told me where to bring your head for the final payment."
              }, {
                who: "hero",
                text: "What a bastard. All right, take us to him."
              }, {
                who: "enemy",
                text: "Soon. First, I am duty bound to apologize to you for my mistake."
              }]
            }]
          },
          endComics: [{
            cssClass: "cN01",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [38, 44, 49]
        }, {
          id: 69,
          prevMission: 68,
          name: 13.2,
          cost: {
            energy: 17
          },
          enemy: {
            exp: 147308,
            _name: "Sloth",
            voice: "Sloth",
            _avatar_big: {
              "@1x": "__45d8/img/avatar/lenivec__195@1x.jpg",
              "@2x": "__0222/img/avatar/lenivec__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__d466/img/avatar/lenivec__123@1x.jpg",
              "@2x": "__3331/img/avatar/lenivec__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [7, 4, 5, 6, 2, 3, 1]
              }],
              cards: [{
                id: 1,
                cardId: 50,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 50,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 50,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 48,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 5,
                cardId: 29,
                level: 18,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 122,
                level: 16,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 7,
                cardId: 136,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 7425
              }
            }, {
              i: [
                [2075, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 4950
              },
              i: [
                [2075, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 495
              }
            }]
          },
          pw: 486,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "hero",
                text: "Oh, you'll answer for everything. Included my ruined T-shirt."
              }, {
                who: "enemy",
                text: "You... won't... suc-ceed..."
              }]
            }]
          },
          startComics: [{
            cssClass: "cO01",
            numFrames: 3
          }, {
            cssClass: "cO02",
            numFrames: 2
          }],
          hero_cards: [null, null, null],
          enemy_cards: [50, 50, 50]
        }, {
          id: 70,
          prevMission: 67,
          name: 14,
          cost: {
            energy: 17
          },
          enemy: {
            exp: 176841,
            _name: "Sloth",
            voice: "Sloth",
            _avatar_big: {
              "@1x": "__45d8/img/avatar/lenivec__195@1x.jpg",
              "@2x": "__0222/img/avatar/lenivec__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__d466/img/avatar/lenivec__123@1x.jpg",
              "@2x": "__3331/img/avatar/lenivec__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 7, 6, 4, 3, 5, 1]
              }],
              cards: [{
                id: 1,
                cardId: 51,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 51,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 51,
                level: 10,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 95,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 101,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 14,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 118,
                level: 17,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 7574
              }
            }, {
              i: [
                [2035, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 5049
              },
              i: [
                [2035, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 505
              }
            }]
          },
          pw: 493,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Hur-ry up... and fin-ish... with... them... This... is... no... tour-na-ment... Ti-me... is... mo-ney..."
              }, {
                who: "hero",
                text: "Won't you lend a hand instead, you slowpoke..."
              }]
            }]
          },
          hero_cards: [null, null, null],
          enemy_cards: [51, 51, 51]
        }, {
          id: 71,
          prevMission: 70,
          name: 15,
          cost: {
            energy: 17
          },
          enemy: {
            exp: 212281,
            _name: "Sloth",
            voice: "Sloth",
            _avatar_big: {
              "@1x": "__45d8/img/avatar/lenivec__195@1x.jpg",
              "@2x": "__0222/img/avatar/lenivec__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__d466/img/avatar/lenivec__123@1x.jpg",
              "@2x": "__3331/img/avatar/lenivec__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [4, 6, 2, 7, 5, 1, 3]
              }],
              cards: [{
                id: 1,
                cardId: 48,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 48,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 49,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 20,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 85,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 72,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 103,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 7725
              }
            }, {
              i: [
                [2085, 3]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 5150
              },
              i: [
                [2085, 1]
              ]
            }],
            lose: [{
              r: {
                gold: 515
              }
            }]
          },
          pw: 500,
          hero_cards: [null, null, null],
          enemy_cards: [48, 48, 49]
        }, {
          id: 72,
          prevMission: 71,
          name: 16,
          cost: {
            energy: 17
          },
          enemy: {
            exp: 254809,
            _name: "Sloth",
            voice: "Sloth",
            _avatar_big: {
              "@1x": "__45d8/img/avatar/lenivec__195@1x.jpg",
              "@2x": "__0222/img/avatar/lenivec__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__d466/img/avatar/lenivec__123@1x.jpg",
              "@2x": "__3331/img/avatar/lenivec__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [3, 6, 4, 7, 2, 5, 1]
              }],
              cards: [{
                id: 1,
                cardId: 49,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 48,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 50,
                level: 11,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 24,
                level: 20,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 97,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 6,
                cardId: 83,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 43,
                level: 18,
                evolution: {
                  currentStage: 3
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 7880
              }
            }, {
              i: [
                [2055, 6]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 5253
              },
              i: [
                [2055, 2]
              ]
            }],
            lose: [{
              r: {
                gold: 525
              }
            }]
          },
          pw: 507,
          speech: {
            dialogs: [{
              lock: {
                name: "begin",
                value: 1
              },
              phrases: [{
                who: "enemy",
                text: "Keep... that... up! Rip... their... balls... off..."
              }]
            }]
          },
          startComics: [{
            cssClass: "cP01",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [49, 48, 50]
        }, {
          id: 73,
          prevMission: 71,
          name: 16,
          cost: {
            energy: 17
          },
          enemy: {
            exp: 254809,
            _name: "Sloth",
            voice: "Sloth",
            _avatar_big: {
              "@1x": "__45d8/img/avatar/lenivec__195@1x.jpg",
              "@2x": "__0222/img/avatar/lenivec__195@2x.jpg"
            },
            _avatar_small: {
              "@1x": "__d466/img/avatar/lenivec__123@1x.jpg",
              "@2x": "__3331/img/avatar/lenivec__123@2x.jpg"
            },
            cardGame: {
              decks: [{
                cardIds: [2, 3, 7, 5, 1, 6, 4]
              }],
              cards: [{
                id: 1,
                cardId: 50,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 2,
                cardId: 51,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 3,
                cardId: 49,
                level: 12,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 4,
                cardId: 92,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 5,
                cardId: 38,
                level: 19,
                evolution: {
                  currentStage: 3
                }
              }, {
                id: 6,
                cardId: 1,
                level: 25,
                evolution: {
                  currentStage: 4
                }
              }, {
                id: 7,
                cardId: 29,
                level: 21,
                evolution: {
                  currentStage: 4
                }
              }]
            }
          },
          rewards: {
            stars: [{
              r: {
                gold: 8037
              }
            }, {
              i: [
                [2085, 6]
              ]
            }, {
              r: {
                energy: 25
              }
            }],
            win: [{
              r: {
                gold: 5358
              },
              i: [
                [2085, 2]
              ]
            }],
            lose: [{
              r: {
                gold: 536
              }
            }]
          },
          pw: 514,
          endComics: [{
            cssClass: "cQ01",
            numFrames: 5
          }, {
            cssClass: "cQ02",
            numFrames: 3
          }],
          hero_cards: [null, null, null],
          enemy_cards: [50, 51, 49]
        }]
      }]
    }
  },
  80: function(a, e) {
    var c, d;
    d = {
      main: {
        boosters: {
          items: [4e3, 4001, 4002, 4003, 4004, 4005]
        },
        gems: {
          items: [3e3, 3001, 3002, 3003, 3004, 3005]
        },
        gold: {
          items: [3106, 3107, 3108, 3109, 3110, 3111]
        },
        energy: {
          items: [3150, 3151, 3152]
        },
        denier: {
          items: function(a) {
            return a.se_rating.isActive ? [3200, 3201, 3202, 3203, 3204, 3205] : [3206, 3207, 3208, 3209, 3210, 3211]
          },
          className: "dark-energy",
          bannerClassName: "trmnt-cups",
          bannerTextClassName: "price t-cups"
        }
      },
      x2gems: {
        gems: {
          items: [3006, 3007, 3008, 3009, 3010, 3011],
          className: "action-x2",
          sa: "SA_X2_GEMS"
        }
      },
      p50gold: {
        gold: {
          items: [3112, 3113, 3114, 3115, 3116, 3117],
          className: "action-p50off",
          sa: "SA_50P_GOLD"
        }
      },
      p50enrg: {
        energy: {
          items: [3153, 3154, 3155],
          className: "action-p50off",
          sa: "SA_50P_ENRG"
        }
      }
    }, c = "main", a.exports = {
      get: function(a, e) {
        var r, s;
        return null == e && (e = ""), e = e || c, s = d.main, "main" !== e ? (r = d[e] || {}, r[a] || s[a]) : s[a]
      },
      setDefaultBundle: function(a) {
        return null == a && (a = ""), c = a || "main"
      }
    }
  },
  81: function(a, e, c) { // TUTORIAL
    "use strict";
    var d;
    d = c(4)._tr, a.exports = [{
      id: 1,
      stages: {
        stages: [{
          condition: {
            vars: {
              INTRO: {
                gte: 0
              }
            },
            negate: [{
              vars: {
                __MIGRATED: {
                  isSet: !0
                }
              }
            }]
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("Girls are fighting for their masters."),
            cssClass: "tutor-fight-01",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 1
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 1
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("Your girls are in the lower part"),
            cssClass: "tutor-fight-02",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 2
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 2
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("The enemy's are in the upper part"),
            cssClass: "tutor-fight-03 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 3
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 3
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d('Press "Fight" to start the round. The battle is going automatically'),
            cssClass: "tutor-fight-05",
            action: {
              events: [{
                name: "battleStartRound",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTBTL: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 4
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("Every card has 2 main parameters - Attack and HP"),
            cssClass: "tutor-fight-06",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 6
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 6
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("This is HP. If it drops below 1, the card is defeated and doesn't fight in current battle any longer"),
            cssClass: "tutor-fight-07",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 7
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 7
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d('This is Attack. This is how much damage the card can deal. Press "Continue"'),
            cssClass: "tutor-fight-08 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 8
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 8
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            invisible: !0,
            action: {
              events: [{
                name: "battleCardDead",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTBTL: 9
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 9
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("Congratulations! The enemy card is done, and the enemy hero is open now"),
            cssClass: "tutor-fight-09 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 10
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 10
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("When the hero is open, the attacking card deals damage to the hero."),
            cssClass: "tutor-fight-10 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 11
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 11
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            invisible: !0,
            action: {
              events: [{
                name: "battleHeroHurt",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTBTL: 12
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 12
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("You've just dealt quite a damage to the enemy hero. When the enemy hero's HP is 0, you'll win this battle. Click \"Continue\""),
            cssClass: "tutor-fight-11 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTBTL: 13
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTBTL: {
                gte: 13
              }
            }
          }
        }]
      }
    }, {
      id: 2,
      stages: {
        stages: [{
          condition: {
            vars: {
              TUTBTL: {
                gte: 13
              }
            },
            negate: [{
              vars: {
                __MIGRATED: {
                  isSet: !0
                }
              }
            }]
          },
          changes: {
            url: ["/story/1"],
            text: d("This is a location map. The available missions are shown here."),
            cssClass: "tutor-localmap-01 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP: 3
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 3
              }
            }
          },
          changes: {
            url: ["/story/1"],
            text: d("Click the mission."),
            cssClass: "tutor-localmap-02 right",
            action: {
              popupOpen: "BattlePrePopup"
            },
            reward: {
              v: {
                TUTMAP: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 4
              }
            }
          },
          changes: {
            url: ["/story/1"],
            popup: "BattlePrePopup",
            text: d("This is the battle parameters screen."),
            cssClass: "tutor-localmap-03 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP: 5
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 5
              }
            }
          },
          changes: {
            url: ["/story/1"],
            popup: "BattlePrePopup",
            text: d("Here is a short info on the you and the enemy before the battle."),
            cssClass: "tutor-localmap-03-1",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP: 6
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 6
              }
            }
          },
          changes: {
            url: ["/story/1"],
            popup: "BattlePrePopup",
            text: d("Here are the rewards. The more stars you get, the bigger the rewards."),
            cssClass: "tutor-localmap-04 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP: 7
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 7
              }
            }
          },
          changes: {
            url: ["/story/1"],
            popup: "BattlePrePopup",
            text: d("Click to continue with the battle."),
            cssClass: "tutor-localmap-05 right",
            action: {
              popupClose: "BattlePrePopup"
            },
            reward: {
              v: {
                TUTMAP: 8
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 8
              }
            }
          },
          changes: {
            url: ["/story/1"],
            popup: "BattleSettingsPopup",
            text: d("This is the battle cards screen."),
            cssClass: "tutor-localmap-05-1 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP: 9
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 9
              }
            }
          },
          changes: {
            url: ["/story/1"],
            popup: "BattleSettingsPopup",
            text: d("You can see what are the cards enemy's holding and compare them to yours. The enemy cards are at the top, your at the bottom."),
            cssClass: "tutor-localmap-06",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP: 10
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 10
              }
            }
          },
          changes: {
            url: ["/story/1"],
            popup: "BattleSettingsPopup",
            text: d('Every battle takes some energy. Press "Fight" to start the battle.'),
            cssClass: "tutor-localmap-07 right",
            action: {
              popupClose: "BattleSettingsPopup"
            },
            reward: {
              v: {
                TUTMAP: 11
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP: {
                gte: 11
              }
            }
          }
        }]
      }
    }, {
      id: 9,
      stages: {
        stages: [{
          condition: {
            counters: {
              "C:3": 1
            },
            negate: [{
              counters: {
                "M:3": 1
              }
            }, {
              vars: {
                __MIGRATED: {
                  isSet: !0
                }
              }
            }]
          },
          changes: {
            url: ["__any__"],
            text: d("Wow! You just won the heart of a new girl, and she's in your deck now! Let's look at her!"),
            cssClass: "tutor-deckmanager-v03-01 right",
            action: {
              locationChange: "/cards/"
            },
            goal: {
              vars: {
                TUTDM: {
                  gte: 1
                }
              }
            },
            reward: {
              v: {
                TUTDM2: 1
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 1
              }
            }
          },
          changes: {
            url: ["/cards/"],
            text: d("Here's your Harem, where are all the girls whose hearts you won. See the new girl?"),
            cssClass: "tutor-deckmanager-v03-02 right",
            action: {
              clickOk: !0
            },
            goal: {
              vars: {
                TUTDM: {
                  gte: 2
                }
              }
            },
            reward: {
              v: {
                TUTDM2: 2
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 2
              }
            }
          },
          changes: {
            url: ["/cards/"],
            text: d("Let's get the new card to your Deck"),
            cssClass: "tutor-deckmanager-v03-03 right",
            action: {
              popupOpen: "DeckManager"
            },
            goal: {
              vars: {
                TUTDM: {
                  gte: 3
                }
              }
            },
            reward: {
              v: {
                TUTDM2: 3
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 3
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "DeckManager",
            text: d("This is the Deck Manager screen."),
            cssClass: "tutor-deckmanager-v03-04 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTDM2: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 4
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "DeckManager",
            text: d("These are the cards in your deck, which go with you to the battle."),
            cssClass: "tutor-deckmanager-v03-05",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTDM2: 5
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 5
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "DeckManager",
            text: d("These are all your cards."),
            cssClass: "tutor-deckmanager-v03-06",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTDM2: 6
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 6
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "DeckManager",
            text: d("Let's edit your deck."),
            cssClass: "tutor-deckmanager-v03-07 right",
            action: {
              events: [{
                name: "deckEdit",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTDM2: 7
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 7
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "DeckManager",
            text: d("Click this card to remove from the deck."),
            cssClass: "tutor-deckmanager-v03-08",
            action: {
              events: [{
                name: "deckRemoveCard",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTDM2: 8
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 8
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "DeckManager",
            text: d("Click the Thief card to add it to the deck."),
            cssClass: "tutor-deckmanager-v03-09 right",
            action: {
              events: [{
                name: "deckAddCard",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTDM2: 9
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 9
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "DeckManager",
            text: d("The deck can hold 7 cards only."),
            cssClass: "tutor-deckmanager-v03-10 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTDM2: 10
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 10
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "DeckManager",
            text: d("Now let's save the deck."),
            cssClass: "tutor-deckmanager-v03-11",
            action: {
              events: [{
                name: "deckSave",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTDM2: 11
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 11
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "__any__",
            text: d("Good. Remember, you can always change the cards in your Deck"),
            cssClass: "tutor-deckmanager-v03-12",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTDM2: 12
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 12
              }
            }
          },
          changes: {
            url: ["__any__"],
            text: d('You can continue your journey by pressing "Campaign"'),
            cssClass: "tutor-deckmanager-v03-13 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTDM2: 13
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTDM2: {
                gte: 13
              }
            }
          }
        }]
      }
    }, {
      id: 13,
      stages: {
        stages: [{
          condition: {
            counters: {
              "I:6001": 1
            }
          },
          changes: {
            url: ["__any__"],
            text: d("Wow, you've just got a Box, let's open it now!"),
            cssClass: "tutor-buster-v03-01",
            action: {
              popupOpen: "LootboxListPopup"
            },
            reward: {
              v: {
                TUTCP: 1
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTCP: {
                gte: 1
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "LootboxListPopup",
            text: d("This is the Boxes screen. New cards can be found here."),
            cssClass: "tutor-buster-v03-02",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTCP: 2
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTCP: {
                gte: 2
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "LootboxListPopup",
            text: d("You've got one box now. Let's open it!"),
            cssClass: "tutor-buster-v03-03 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTCP: 3
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTCP: {
                gte: 3
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "LootboxListPopup",
            text: d("Let's get new girls, hurry!"),
            cssClass: "tutor-buster-v03-04 right",
            action: {
              events: [{
                name: "lootboxOpen",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTCP: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTCP: {
                gte: 4
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "LootboxPopup",
            cssClass: "",
            action: {
              events: [{
                name: "lootboxCleared",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTCP: 5
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTCP: {
                gte: 5
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "LootboxPopup",
            text: d("Press to finish."),
            cssClass: "tutor-buster-v03-06 right",
            action: {
              popupClose: "LootboxPopup",
              clickOk: !0
            },
            reward: {
              v: {
                TUTCP: 6
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTCP: {
                gte: 6
              }
            }
          }
        }]
      }
    }, {
      id: 5,
      stages: {
        stages: [{
          condition: {
            counters: {
              "M:6": 1
            }
          },
          changes: {
            url: ["__any__"],
            text: d("Now I will teach you how to level up your girls. Let's go."),
            cssClass: "tutor-cardmanager-improve-v03-01 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTLUP: 1
              },
              events: [
                ["showPopup", {
                  type: "CardLevelUpPopup",
                  data: {
                    cardId: 3
                  }
                }]
              ]
            }
          }
        }, {
          condition: {
            vars: {
              TUTLUP: {
                gte: 1
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "CardLevelUpPopup",
            text: d("Here's the Level Up screen. Give her presents to gain her love."),
            cssClass: "tutor-cardmanager-improve-v03-02",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTLUP: 2
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTLUP: {
                gte: 2
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "CardLevelUpPopup",
            text: d("You're lack this rings. You may get them by winning battles or from the boxes. Now let's just buy this trinket."),
            cssClass: "tutor-cardmanager-improve-v03-04",
            action: {
              events: [{
                name: "levelUpBuyItem",
                value: "__any__"
              }],
              clickOk: !0
            },
            reward: {
              v: {
                TUTLUP: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTLUP: {
                gte: 4
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "CardLevelUpPopup",
            text: d("Great! Now we'll add some gold to our present. Girls adore gold!"),
            cssClass: "tutor-cardmanager-improve-v03-05 right",
            action: {
              events: [{
                name: "levelUpDo",
                value: "__any__"
              }],
              clickOk: !0
            },
            reward: {
              v: {
                TUTLUP: 5
              },
              events: [
                ["addMarker", ["//r.remarketingpixel.com/px.gif?akey=3d501f1e79b02f99910dcd62352ffa92", "//main.exoclick.com/tag.php?goal=0f5a7eaa84491f36b603d62a7d0fe561", "//tracker.ero-advertising.com/tracking/rtpixel.php?id=331&uid=88428", "//hubverifyandoptimize.com/tag/1758", "//my.rtmark.net/p.js?f=sync&lr=1&partner=1a3325b4f85b3c6fa7a9ff606a7c5de02d034773faa279ec28109f8a25900e44", "//umekana.ru/5ux0wmjtu147y9mhkh8qi77utq85ol55g79fo06axmjd5pza9j755jx5gy98fwc4js6ejncfby5ad3r0p2?r_id=3714"]]
              ]
            }
          }
        }, {
          condition: {
            vars: {
              TUTLUP: {
                gte: 5
              }
            }
          }
        }]
      }
    }, {
      id: 4,
      stages: {
        stages: [{
          condition: {
            counters: {
              "M:3": 1
            }
          },
          changes: {
            url: ["__any__"],
            text: d("Now I will teach you how to win the trust of your girls. Let's, Seduce one"),
            cssClass: "tutor-cardmanager-evolve-01 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTEV: 1
              },
              events: [
                ["showPopup", {
                  type: "CardEvolvePopup",
                  data: {
                    cardId: 3
                  }
                }]
              ]
            }
          }
        }, {
          condition: {
            vars: {
              TUTEV: {
                gte: 1
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "CardEvolvePopup",
            text: d("Here you can Seduce your girls. Give her more stars and she will open to you."),
            cssClass: "tutor-cardmanager-evolve-v03-02 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTEV: 2
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTEV: {
                gte: 2
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "CardEvolvePopup",
            text: d("Here is how many cards of this kind do you have vs how many do you need to Seduce the girl."),
            cssClass: "tutor-cardmanager-evolve-v03-03",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTEV: 3
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTEV: {
                gte: 3
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "CardEvolvePopup",
            text: d("Come on, let's Seduce this little Thief chick real quick!"),
            cssClass: "tutor-cardmanager-evolve-v03-04 right",
            action: {
              events: [{
                name: "evolveDo",
                value: "__any__"
              }],
              clickOk: !0
            },
            reward: {
              v: {
                TUTEV: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTEV: {
                gte: 4
              }
            }
          }
        }]
      }
    }, {
      id: 10,
      stages: {
        stages: [{
          condition: {
            counters: {
              "M:20": 1
            }
          },
          changes: {
            url: ["__any__"],
            text: d("Wow! You've just conquered the first map!"),
            cssClass: "tutor-globalmap-01 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP2: 1
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP2: {
                gte: 1
              }
            }
          },
          changes: {
            url: ["__any__"],
            text: d("See the world map? It's for the navigation between the locations."),
            cssClass: "tutor-globalmap-02 right",
            action: {
              popupOpen: "GlobalMapPopup"
            },
            reward: {
              v: {
                TUTMAP2: 2
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP2: {
                gte: 2
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "GlobalMapPopup",
            text: d("Now you're here"),
            cssClass: "tutor-globalmap-03 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP2: 3
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP2: {
                gte: 3
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "GlobalMapPopup",
            text: d("Click here to go to the second map."),
            cssClass: "tutor-globalmap-04 right",
            action: {
              popupClose: "GlobalMapPopup"
            },
            reward: {
              v: {
                TUTMAP2: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP2: {
                gte: 4
              }
            }
          },
          changes: {
            url: ["__any__"],
            text: d("Now you're here. Use the global map when you need to go from one location to another."),
            cssClass: "tutor-globalmap-01 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTMAP2: 5
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTMAP2: {
                gte: 5
              }
            }
          }
        }]
      }
    }, {
      id: 14,
      stages: {
        stages: [{
          condition: {
            counters: {
              "M:19": 1
            }
          },
          changes: {
            url: ["__any__"],
            text: d("You've become very powerful. It's time to take part in the Tournament of Heroes of Cum and Petting!"),
            cssClass: "tutor-rating-01 right",
            action: {
              popupOpen: "RatingMainPopup"
            },
            reward: {
              v: {
                TUTRT: 1
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTRT: {
                gte: 1
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "RatingMainPopup",
            text: d("Dames here are especially favor those who brave and strong and the best."),
            cssClass: "tutor-rating-02",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTRT: 2
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTRT: {
                gte: 2
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "RatingMainPopup",
            text: d("Players who get the most Mojo, get the favor of the dames."),
            cssClass: "tutor-rating-03 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTRT: 3
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTRT: {
                gte: 3
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "RatingMainPopup",
            text: d("Dames make their choice once a day."),
            cssClass: "tutor-rating-04 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTRT: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTRT: {
                gte: 4
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "RatingMainPopup",
            text: d("The higher the place in the tournament, the higher the reward."),
            cssClass: "tutor-rating-05 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTRT: 5
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTRT: {
                gte: 5
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "RatingMainPopup",
            text: d("The list of the girls' orders can be seen there. Good luck, Hero!"),
            cssClass: "tutor-rating-06 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTRT: 6
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTRT: {
                gte: 6
              }
            }
          }
        }]
      }
    }, {
      id: 15,
      stages: {
        stages: [{
          condition: {
            counters: {
              "M:10": 1
            }
          },
          changes: {
            url: ["__any__"],
            text: d("Congratulations! You've fought well, and now Duels become available to you. Let's give it a try!"),
            cssClass: "tutor-duel-01 right",
            action: {
              popupOpen: "PVPPopup"
            },
            reward: {
              v: {
                TUTPVP: 1
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 1
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "PVPPopup",
            text: d("Welcome to Duels!"),
            cssClass: "tutor-duel-02",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTPVP: 2
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 2
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "PVPPopup",
            text: d("Let's fight with another fellow player!"),
            cssClass: "tutor-duel-03",
            action: {
              popupOpen: "BattleEnterPopup",
              clickOk: !0
            },
            reward: {
              v: {
                TUTPVP: 3
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 3
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleEnterPopup",
            text: d("In this kind of a battle all seven cards take part. You may pick one of your decks just before the battle."),
            cssClass: "tutor-duel-04",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTPVP: 4
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 4
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleEnterPopup",
            text: d("Let the fight begin!"),
            cssClass: "tutor-duel-05",
            action: {
              clickOk: !0,
              popupClose: "BattleEnterPopup"
            },
            reward: {
              v: {
                TUTPVP: 5
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 5
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "BattleView",
            text: d("When a card dies, one of the rest takes its place."),
            cssClass: "tutor-duel-06",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTPVP: 6
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 6
              }
            }
          },
          changes: {
            url: ["__any__"],
            invisible: !0
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 6
              }
            },
            counters: {
              PVP_WON: 1
            }
          },
          changes: {
            url: ["__any__"],
            popup: "PVPPopup",
            text: d("When you win, you get a chest. Let's open it!"),
            cssClass: "tutor-duel-07",
            action: {
              clickOk: !0,
              events: [{
                name: "pvp.chest.open.start",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTPVP: 7
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 7
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "PVPPopup",
            invisible: !0,
            action: {
              events: [{
                name: "pvp.chest.open",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTPVP: 8
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 8
              }
            }
          },
          changes: {
            url: ["__any__"],
            popup: "PVPPopup",
            text: d("When you win, you get Battle Cups. After certain number of Cups, you move to the next League with more rewards, and unlock new, UNIQUE girls!"),
            cssClass: "tutor-duel-09 right",
            action: {
              clickOk: !0
            },
            reward: {
              v: {
                TUTPVP: 9
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 9
              }
            }
          },
          changes: {
            url: ["__any__"],
            invisible: !0
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 9
              }
            },
            counters: {
              PVP_WON: 3
            }
          },
          changes: {
            url: ["__any__"],
            popup: "PVPPopup",
            text: d("Wow! You've just won 3 battles and unlocked a Star Chest! Let's open it!"),
            cssClass: "tutor-duel-10",
            action: {
              clickOk: !0,
              events: [{
                name: "pvp.starchest.open.start",
                value: "__any__"
              }]
            },
            reward: {
              v: {
                TUTPVP: 10
              }
            }
          }
        }, {
          condition: {
            vars: {
              TUTPVP: {
                gte: 10
              }
            }
          }
        }]
      }
    }]
  },
  82: function(a, e, c) {
    var d;
    d = c(4)._tr, a.exports = {
      id: 10,
      text: [d("Greetings!"), "", d("We decided to change one aspect of the game. From now on, the HP of all the cards increased significantly!"), "", d("We made some tests, and believe it would result in much better gameplay. Also it would open some interesting possibilities for the future."), "", d("Thanks for playing with us!")],
      condition: {
        counters: {
          "M:20": 1
        }
      },
      exclude_ab: ["hpx3:b"]
    }
  },
  83: function(a, e, c) {
    "use strict";
    a.exports = [{
      cssClass: "aB01",
      numFrames: 5
    }, {
      cssClass: "aB02",
      numFrames: 5
    }, {
      cssClass: "aB03",
      numFrames: 3
    }, {
      cssClass: "aB04",
      numFrames: 3
    }, {
      cssClass: "aB05",
      numFrames: 2
    }]
  },
  84: function(a, e, c) {
    "use strict";
    a.exports = {
      _avatar_big: {
        "@1x": "__f081/img/avatar/hero__195@1x.jpg",
        "@2x": "__bc9e/img/avatar/hero__195@2x.jpg"
      },
      _avatar_small: {
        "@1x": "__1f57/img/avatar/hero__123@1x.jpg",
        "@2x": "__afaf/img/avatar/hero__123@2x.jpg"
      }
    }
  },
  85: function(a, e, c) { // habilities
    "use strict";
    var d;
    d = c(4)._tr, a.exports = {
      Dummy: {
        id: "Dummy",
        name: d("Poison"),
        iconAnimName: "card_effect_icon_fireball",
        animName: "fx_fireball2",
        effect: {
          name: "Dummy"
        },
        info: "Dummy effect"
      },
      Heal: {
        id: "Heal",
        name: d("Heal"),
        sound: "Heal",
        icons: {
          _1x: "__9511/img/eff_icon_heal_2.png"
        },
        iconAnimName: "card_effect_icon_hp_plus",
        animName: "fx_hp_plus",
        effect: {
          name: "Heal",
          power: .4
        },
        info: d("Heal all own cards by {n}% of their total HP", {
          n: 40
        })
      },
      Shield: {
        id: "Shield",
        name: d("Shield"),
        sound: "Heal",
        icons: {
          _1x: "__6a26/img/eff_icon_shield_2.png"
        },
        iconAnimName: "card_effect_icon_shield",
        animName: "fx_shield",
        effect: {
          name: "Shield",
          power: .3
        },
        info: d("Decrease any damage to self by {n}%", {
          n: 30
        })
      },
      MassShield: {
        id: "MassShield",
        name: d("Aegis"),
        sound: "Heal",
        icons: {
          _1x: "__2ee1/img/eff_icon_shield2_2.png"
        },
        iconAnimName: "card_effect_icon_shield_all",
        animName: "fx_shield",
        effect: {
          name: "MassShield",
          power: .2
        },
        info: d("Decrease any damage to own cards by {n}%", {
          n: 20
        })
      },
      Curse: {
        id: "Curse",
        name: d("Curse"),
        sound: "Curse",
        term: 1e3,
        icons: {
          _1x: "__1e3d/img/eff_icon_curs_2.png"
        },
        iconAnimName: "card_effect_icon_poison",
        animName: "fx_poision",
        effect: {
          name: "Curse"
        },
        info: d("Decrease the attack of the rival card by 20%")
      },
      Freeze: {
        id: "Freeze",
        name: d("Freeze"),
        sound: "Freeze",
        icons: {
          _1x: "__9d8e/img/eff_icon_friz_2.png"
        },
        iconAnimName: "card_effect_icon_freeze",
        animName: "fx_freeze",
        effect: {
          name: "Freeze"
        },
        info: d("Prevent the attack of the rival card for one turn")
      },
      Rage: {
        id: "Rage",
        name: d("Rage"),
        sound: "Rage",
        term: 1e3,
        icons: {
          _1x: "__38fa/img/eff_icon_rage_2.png"
        },
        iconAnimName: "card_effect_icon_rage",
        animName: "fx_rage",
        effect: {
          name: "Rage",
          power: .2
        },
        info: d("Increase the card's attack by 20%")
      },
      MassRage: {
        id: "MassRage",
        name: d("Vengeance Song"),
        sound: "Rage",
        term: 1e3,
        icons: {
          _1x: "__c83d/img/eff_icon_rage2_2.png"
        },
        iconAnimName: "card_effect_icon_rage_all",
        animName: "fx_rage",
        effect: {
          name: "MassRage",
          power: .15
        },
        info: d("Increase the attack of all own cards by {n}%", {
          n: 15
        })
      },
      Resurrect: {
        id: "Resurrect",
        name: d("Resurrect"),
        sound: "Ressurect",
        icons: {
          _1x: "__7988/img/eff_icon_resu_2.png"
        },
        iconAnimName: "card_effect_icon_resurrection",
        animName: "fx_resurrection",
        effect: {
          name: "Resurrect"
        },
        atRoundStart: !0,
        info: d("Revive a fallen card")
      },
      Fireball: {
        id: "Fireball",
        name: d("Fireball"),
        sound: "Fireball",
        icons: {
          _1x: "__487e/img/eff_icon_fire_2.png"
        },
        iconAnimName: "card_effect_icon_fireball",
        animName: "fx_fireball_e",
        enemyIconAnimName: "card_effect_icon_fireball2",
        effect: {
          name: "Fireball"
        },
        info: d("Throws a fireball that hits all the enemy cards by 50% of the card's attack")
      },
      Chilling: {
        id: "Chilling",
        name: d("Chilling Touch"),
        sound: "Chilling_Touch",
        term: 1e3,
        icons: {
          _1x: "__a1e4/img/eff_icon_ice_2.png"
        },
        iconAnimName: "card_effect_icon_fireball_ice",
        animName: "fx_fireball_e_ice",
        enemyIconAnimName: "card_effect_icon_fireball2_ice",
        effect: {
          name: "Chilling"
        },
        info: d("Decrease the attack of all rival cards by 10%")
      },
      Silence: {
        id: "Silence",
        name: d("Silence"),
        sound: "Chilling_Touch",
        term: 1e3,
        icons: {
          _1x: "__ea33/img/eff_icon_silence.png"
        },
        iconAnimName: "card_effect_icon_silence",
        animName: "fx_silence",
        rivalCardIconAnimName: "card_effect_icon_silence1",
        effect: {
          name: "Silence"
        },
        info: d("Don't allow enemy cards to cast spells while the card is alive"),
        afterRoundStart: !0
      }
    }
  },
  86: function(a, e, c) { // ??? draw card borders?
    "use strict";
    a.exports = [
      [{
        star: 1,
        color: 1,
        cls: 4
      }, {
        star: 1,
        color: 2,
        cls: 3
      }, {
        star: 1,
        color: 3,
        cls: 2
      }, {
        star: 1,
        color: 4,
        cls: 1
      }],
      [{
        star: 1,
        color: 2,
        rarity: 1,
        cls: 5
      }, {
        star: 1,
        color: 3,
        rarity: 1,
        cls: 4
      }, {
        star: 1,
        color: 4,
        rarity: 1,
        cls: 3
      }, {
        star: 1,
        color: 5,
        rarity: 1,
        cls: 2
      }],
      [{
        star: 1,
        color: 3,
        rarity: 2,
        cls: 6
      }, {
        star: 1,
        color: 4,
        rarity: 2,
        cls: 5
      }, {
        star: 1,
        color: 5,
        rarity: 2,
        cls: 4
      }, {
        star: 1,
        color: 6,
        rarity: 2,
        cls: 3
      }],
      [{
        star: 1,
        color: 4,
        rarity: 3,
        cls: 7
      }, {
        star: 1,
        color: 5,
        rarity: 3,
        cls: 6
      }, {
        star: 1,
        color: 6,
        rarity: 3,
        cls: 5
      }, {
        star: 1,
        color: 7,
        rarity: 3,
        cls: 4
      }],
      [{
        star: 2,
        color: 2,
        rarity: 1,
        cls: 4
      }, {
        star: 2,
        color: 3,
        rarity: 1,
        cls: 4
      }, {
        star: 2,
        color: 4,
        rarity: 1,
        cls: 3
      }, {
        star: 2,
        color: 5,
        rarity: 1,
        cls: 2
      }],
      [{
        star: 2,
        color: 3,
        rarity: 2,
        cls: 5
      }, {
        star: 2,
        color: 4,
        rarity: 2,
        cls: 5
      }, {
        star: 2,
        color: 5,
        rarity: 2,
        cls: 4
      }, {
        star: 2,
        color: 6,
        rarity: 2,
        cls: 3
      }],
      [{
        star: 2,
        color: 4,
        rarity: 3,
        cls: 6
      }, {
        star: 2,
        color: 5,
        rarity: 3,
        cls: 6
      }, {
        star: 2,
        color: 6,
        rarity: 3,
        cls: 5
      }, {
        star: 2,
        color: 7,
        rarity: 3,
        cls: 4
      }],
      [{
        star: 2,
        color: 5,
        rarity: 4,
        cls: 7
      }, {
        star: 2,
        color: 6,
        rarity: 4,
        cls: 7
      }, {
        star: 2,
        color: 7,
        rarity: 4,
        cls: 6
      }, {
        star: 2,
        color: 8,
        rarity: 4,
        cls: 5
      }],
      [{
        star: 2,
        color: 6,
        rarity: 5,
        cls: 8
      }, {
        star: 2,
        color: 7,
        rarity: 5,
        cls: 8
      }, {
        star: 2,
        color: 8,
        rarity: 5,
        cls: 7
      }, {
        star: 2,
        color: 9,
        rarity: 5,
        cls: 6
      }],
      [{
        star: 3,
        color: 3,
        rarity: 2,
        cls: 6
      }, {
        star: 3,
        color: 4,
        rarity: 2,
        cls: 5
      }, {
        star: 3,
        color: 5,
        rarity: 2,
        cls: 4
      }, {
        star: 3,
        color: 6,
        rarity: 2,
        cls: 3
      }],
      [{
        star: 3,
        color: 4,
        rarity: 3,
        cls: 7
      }, {
        star: 3,
        color: 5,
        rarity: 3,
        cls: 6
      }, {
        star: 3,
        color: 6,
        rarity: 3,
        cls: 5
      }, {
        star: 3,
        color: 7,
        rarity: 3,
        cls: 4
      }],
      [{
        star: 3,
        color: 5,
        rarity: 4,
        cls: 8
      }, {
        star: 3,
        color: 6,
        rarity: 4,
        cls: 7
      }, {
        star: 3,
        color: 7,
        rarity: 4,
        cls: 6
      }, {
        star: 3,
        color: 8,
        rarity: 4,
        cls: 5
      }],
      [{
        star: 3,
        color: 6,
        rarity: 5,
        cls: 9
      }, {
        star: 3,
        color: 7,
        rarity: 5,
        cls: 8
      }, {
        star: 3,
        color: 8,
        rarity: 5,
        cls: 7
      }, {
        star: 3,
        color: 9,
        rarity: 5,
        cls: 6
      }],
      [{
        star: 3,
        color: 7,
        rarity: 6,
        cls: 10
      }, {
        star: 3,
        color: 8,
        rarity: 6,
        cls: 9
      }, {
        star: 3,
        color: 9,
        rarity: 6,
        cls: 8
      }, {
        star: 3,
        color: 10,
        rarity: 6,
        cls: 7
      }],
      [{
        star: 4,
        color: 4,
        rarity: 3,
        cls: 7
      }, {
        star: 4,
        color: 5,
        rarity: 3,
        cls: 6
      }, {
        star: 4,
        color: 6,
        rarity: 3,
        cls: 5
      }, {
        star: 4,
        color: 7,
        rarity: 3,
        cls: 4
      }],
      [{
        star: 4,
        color: 5,
        rarity: 4,
        cls: 8
      }, {
        star: 4,
        color: 6,
        rarity: 4,
        cls: 7
      }, {
        star: 4,
        color: 7,
        rarity: 4,
        cls: 6
      }, {
        star: 4,
        color: 8,
        rarity: 4,
        cls: 5
      }],
      [{
        star: 4,
        color: 6,
        rarity: 5,
        cls: 9
      }, {
        star: 4,
        color: 7,
        rarity: 5,
        cls: 8
      }, {
        star: 4,
        color: 8,
        rarity: 5,
        cls: 7
      }, {
        star: 4,
        color: 9,
        rarity: 5,
        cls: 6
      }],
      [{
        star: 4,
        color: 7,
        rarity: 6,
        cls: 10
      }, {
        star: 4,
        color: 8,
        rarity: 6,
        cls: 9
      }, {
        star: 4,
        color: 9,
        rarity: 6,
        cls: 8
      }, {
        star: 4,
        color: 10,
        rarity: 6,
        cls: 7
      }],
      [{
        star: 4,
        color: 8,
        rarity: 7,
        cls: 11
      }, {
        star: 4,
        color: 9,
        rarity: 7,
        cls: 10
      }, {
        star: 4,
        color: 10,
        rarity: 7,
        cls: 9
      }, {
        star: 4,
        color: 11,
        rarity: 7,
        cls: 8
      }],
      [{
        star: 5,
        color: 5,
        rarity: 4,
        cls: 8
      }, {
        star: 5,
        color: 6,
        rarity: 4,
        cls: 7
      }, {
        star: 5,
        color: 7,
        rarity: 4,
        cls: 6
      }, {
        star: 5,
        color: 8,
        rarity: 4,
        cls: 5
      }],
      [{
        star: 5,
        color: 6,
        rarity: 5,
        cls: 9
      }, {
        star: 5,
        color: 7,
        rarity: 5,
        cls: 8
      }, {
        star: 5,
        color: 8,
        rarity: 5,
        cls: 7
      }, {
        star: 5,
        color: 9,
        rarity: 5,
        cls: 6
      }],
      [{
        star: 5,
        color: 7,
        rarity: 6,
        cls: 10
      }, {
        star: 5,
        color: 8,
        rarity: 6,
        cls: 9
      }, {
        star: 5,
        color: 9,
        rarity: 6,
        cls: 8
      }, {
        star: 5,
        color: 10,
        rarity: 6,
        cls: 7
      }],
      [{
        star: 5,
        color: 8,
        rarity: 7,
        cls: 11
      }, {
        star: 5,
        color: 9,
        rarity: 7,
        cls: 10
      }, {
        star: 5,
        color: 10,
        rarity: 7,
        cls: 9
      }, {
        star: 5,
        color: 11,
        rarity: 7,
        cls: 8
      }],
      [{
        star: 5,
        color: 9,
        rarity: 8,
        cls: 12
      }, {
        star: 5,
        color: 10,
        rarity: 8,
        cls: 11
      }, {
        star: 5,
        color: 11,
        rarity: 8,
        cls: 10
      }, {
        star: 5,
        color: 12,
        rarity: 8,
        cls: 9
      }]
    ]
  },
  87: function(a, e, c) { // ???
    "use strict";
    a.exports = {
      term: 86400,
      cooldown: 43200,
      tiers: [
        [{
          condition: {
            negate: [{
              either: [{
                counters: {
                  "I:3957": 1
                }
              }, {
                counters: {
                  "I:3970": 1
                }
              }, {
                counters: {
                  "I:3971": 1
                }
              }, {
                counters: {
                  "I:3972": 1
                }
              }, {
                counters: {
                  "I:3973": 1
                }
              }, {
                counters: {
                  "I:3974": 1
                }
              }, {
                counters: {
                  "I:3975": 1
                }
              }, {
                counters: {
                  "M:12": 1
                }
              }]
            }]
          },
          item: 3970
        }, {
          condition: {
            either: [{
              counters: {
                "I:3957": 1
              }
            }, {
              counters: {
                "I:3970": 1
              }
            }, {
              counters: {
                "M:12": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3971": 1
                }
              }, {
                counters: {
                  "I:3972": 1
                }
              }, {
                counters: {
                  "I:3973": 1
                }
              }, {
                counters: {
                  "I:3974": 1
                }
              }, {
                counters: {
                  "I:3975": 1
                }
              }, {
                counters: {
                  "M:19": 1
                }
              }]
            }]
          },
          item: 3971
        }, {
          condition: {
            either: [{
              counters: {
                "I:3971": 1
              }
            }, {
              counters: {
                "M:12": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3972": 1
                }
              }, {
                counters: {
                  "I:3973": 1
                }
              }, {
                counters: {
                  "I:3974": 1
                }
              }, {
                counters: {
                  "I:3975": 1
                }
              }, {
                counters: {
                  "M:27": 1
                }
              }]
            }]
          },
          item: 3972
        }, {
          condition: {
            either: [{
              counters: {
                "I:3972": 1
              }
            }, {
              counters: {
                "M:27": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3973": 1
                }
              }, {
                counters: {
                  "I:3974": 1
                }
              }, {
                counters: {
                  "I:3975": 1
                }
              }, {
                counters: {
                  "M:40": 1
                }
              }]
            }]
          },
          item: 3973
        }, {
          condition: {
            either: [{
              counters: {
                "I:3973": 1
              }
            }, {
              counters: {
                "M:40": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3974": 1
                }
              }, {
                counters: {
                  "I:3975": 1
                }
              }, {
                counters: {
                  "M:55": 1
                }
              }]
            }]
          },
          item: 3974
        }, {
          condition: {
            either: [{
              counters: {
                "I:3974": 1
              }
            }],
            negate: [{
              counters: {
                "I:3975": 1
              }
            }]
          },
          item: 3975
        }],
        [{
          condition: {
            negate: [{
              either: [{
                counters: {
                  "I:3975": 1
                }
              }, {
                counters: {
                  "I:3976": 1
                }
              }, {
                counters: {
                  "I:3977": 1
                }
              }, {
                counters: {
                  "I:3978": 1
                }
              }, {
                counters: {
                  "I:3979": 1
                }
              }, {
                counters: {
                  "I:3980": 1
                }
              }, {
                counters: {
                  "I:3981": 1
                }
              }, {
                counters: {
                  "M:12": 1
                }
              }]
            }]
          },
          item: 3976
        }, {
          condition: {
            either: [{
              counters: {
                "I:3975": 1
              }
            }, {
              counters: {
                "I:3976": 1
              }
            }, {
              counters: {
                "M:12": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3977": 1
                }
              }, {
                counters: {
                  "I:3978": 1
                }
              }, {
                counters: {
                  "I:3979": 1
                }
              }, {
                counters: {
                  "I:3980": 1
                }
              }, {
                counters: {
                  "I:3981": 1
                }
              }, {
                counters: {
                  "M:19": 1
                }
              }]
            }]
          },
          item: 3977
        }, {
          condition: {
            either: [{
              counters: {
                "I:3977": 1
              }
            }, {
              counters: {
                "M:19": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3978": 1
                }
              }, {
                counters: {
                  "I:3979": 1
                }
              }, {
                counters: {
                  "I:3980": 1
                }
              }, {
                counters: {
                  "I:3981": 1
                }
              }, {
                counters: {
                  "M:27": 1
                }
              }]
            }]
          },
          item: 3978
        }, {
          condition: {
            either: [{
              counters: {
                "I:3978": 1
              }
            }, {
              counters: {
                "M:27": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3979": 1
                }
              }, {
                counters: {
                  "I:3980": 1
                }
              }, {
                counters: {
                  "I:3981": 1
                }
              }, {
                counters: {
                  "M:40": 1
                }
              }]
            }]
          },
          item: 3979
        }, {
          condition: {
            either: [{
              counters: {
                "I:3979": 1
              }
            }, {
              counters: {
                "M:40": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3980": 1
                }
              }, {
                counters: {
                  "I:3981": 1
                }
              }, {
                counters: {
                  "M:55": 1
                }
              }]
            }]
          },
          item: 3980
        }, {
          condition: {
            either: [{
              counters: {
                "I:3980": 1
              }
            }],
            negate: [{
              counters: {
                "I:3981": 1
              }
            }]
          },
          item: 3981
        }],
        [{
          condition: {
            negate: [{
              either: [{
                counters: {
                  "I:3981": 1
                }
              }, {
                counters: {
                  "I:3982": 1
                }
              }, {
                counters: {
                  "I:3983": 1
                }
              }, {
                counters: {
                  "I:3984": 1
                }
              }, {
                counters: {
                  "I:3985": 1
                }
              }, {
                counters: {
                  "I:3986": 1
                }
              }, {
                counters: {
                  "I:3987": 1
                }
              }, {
                counters: {
                  "M:12": 1
                }
              }]
            }]
          },
          item: 3982
        }, {
          condition: {
            either: [{
              counters: {
                "I:3981": 1
              }
            }, {
              counters: {
                "I:3982": 1
              }
            }, {
              counters: {
                "M:12": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3983": 1
                }
              }, {
                counters: {
                  "I:3984": 1
                }
              }, {
                counters: {
                  "I:3985": 1
                }
              }, {
                counters: {
                  "I:3986": 1
                }
              }, {
                counters: {
                  "I:3987": 1
                }
              }, {
                counters: {
                  "M:19": 1
                }
              }]
            }]
          },
          item: 3983
        }, {
          condition: {
            either: [{
              counters: {
                "I:3983": 1
              }
            }, {
              counters: {
                "M:19": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3984": 1
                }
              }, {
                counters: {
                  "I:3985": 1
                }
              }, {
                counters: {
                  "I:3986": 1
                }
              }, {
                counters: {
                  "I:3987": 1
                }
              }, {
                counters: {
                  "M:27": 1
                }
              }]
            }]
          },
          item: 3984
        }, {
          condition: {
            either: [{
              counters: {
                "I:3984": 1
              }
            }, {
              counters: {
                "M:27": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3985": 1
                }
              }, {
                counters: {
                  "I:3986": 1
                }
              }, {
                counters: {
                  "I:3987": 1
                }
              }, {
                counters: {
                  "M:40": 1
                }
              }]
            }]
          },
          item: 3985
        }, {
          condition: {
            either: [{
              counters: {
                "I:3985": 1
              }
            }, {
              counters: {
                "M:40": 1
              }
            }],
            negate: [{
              either: [{
                counters: {
                  "I:3986": 1
                }
              }, {
                counters: {
                  "I:3987": 1
                }
              }, {
                counters: {
                  "M:55": 1
                }
              }]
            }]
          },
          item: 3986
        }, {
          condition: {
            either: [{
              counters: {
                "I:3986": 1
              }
            }],
            negate: [{
              counters: {
                "I:3987": 1
              }
            }]
          },
          item: 3987
        }],
        [{
          condition: {
            counters: {
              "I:3975": 1,
              "I:3981": 1,
              "I:3987": 1
            },
            negate: [{
              counters: {
                "I:3988": 1
              }
            }]
          },
          item: 3988
        }]
      ]
    }
  },
  88: function(a, e, c) {
    "use strict";
    var d = c(4),
      r = d._tr;
    a.exports = {
      gold: {
        name: r("Gold"),
        icons: {
          _1x: "__8bb6/img/icons/ic-gold05.jpg"
        }
      },
      energy: {
        name: r("Energy"),
        icons: {
          _1x: "__a0c8/img/icons/ic-energy03.jpg"
        }
      },
      gems: {
        name: r("Gems"),
        icons: {
          _1x: "__977f/img/icons/ic-ruby03.jpg"
        }
      }
    }
  },
  89: function(a, e, c) { // SOUNDS
    "use strict";
    a.exports = {
      sounds: {
        src: ["__067a/sound/sounds.ogg", "__82bb/sound/sounds.m4a", "__c831/sound/sounds.mp3", "__c155/sound/sounds.ac3"],
        sprite: {
          card_add: [0, 371.26984126984127],
          card_death: [2e3, 899.9999999999999],
          card_error: [4e3, 450.00000000000017],
          card_get: [6e3, 1671.927437641723],
          card_hit: [9e3, 843.8548752834461],
          card_hover: [11e3, 71.4512471655322],
          card_leaf: [13e3, 305.19274376417195],
          card_level_up: [15e3, 3448.4807256235827],
          card_new: [2e4, 3e3],
          card_remove: [24e3, 397.07482993197374],
          card_rotate: [26e3, 647.5963718820879],
          click: [28e3, 94.48979591836704],
          click_down_panel: [3e4, 273.0612244897976],
          click_fight: [32e3, 557.9138321995458],
          coins_collect: [34e3, 103.51473922902699],
          crystal_buy: [36e3, 899.9999999999986],
          damage_x2: [38e3, 1188.7528344671168],
          dialogue_close: [41e3, 76.84807256235615],
          dialogue_open: [43e3, 49.31972789115946],
          earth_damage: [45e3, 1648.7074829931955],
          energy_collect: [48e3, 106.78004535147068],
          fight: [5e4, 2931.7687074829946],
          fire_damage: [54e3, 1500],
          frame_change: [57e3, 439.45578231292615],
          loot_get: [59e3, 1926.9387755102016],
          loot_open: [62e3, 3843.0612244898016],
          lose: [67e3, 2900.0000000000055],
          map_world: [71e3, 883.4467120181415],
          message_no_buy: [73e3, 799.9999999999972],
          moon_damage: [75e3, 1304.7619047619037],
          prey: [78e3, 400.0000000000057],
          prize_collect: [8e4, 1217.981859410429],
          star1: [83e3, 700.0000000000028],
          star2: [85e3, 750],
          star3: [87e3, 700.0000000000028],
          start_fight: [89e3, 1974.739229024948],
          sun_damage: [92e3, 1700.0000000000027],
          super_card_rotate: [95e3, 2076.712018140583],
          tip_fight: [99e3, 312.6530612244949],
          tip_show: [101e3, 319.9999999999932],
          water_damage: [103e3, 1613.0385487528401],
          win: [106e3, 2959.4784580498867],
          window_close: [11e4, 304.39909297052736],
          window_show: [112e3, 364.30839002267135]
        }
      },
      voice: {
        src: ["__a1e9/sound/voices.ogg", "__9d1f/sound/voices.m4a", "__ab24/sound/voices.mp3", "__b5f2/sound/voices.ac3"],
        sprite: {
          female_damage_1: [0, 780.5668934240363],
          female_damage_2: [2e3, 416.5079365079363],
          female_damage_3: [4e3, 571.0884353741496],
          fox_hit_1: [6e3, 789.0929705215424],
          fox_hit_2: [8e3, 799.183673469388],
          fox_hit_3: [1e4, 796.1904761904766],
          idler_hit_1: [12e3, 602.3129251700681],
          idler_hit_2: [14e3, 675.8276643990921],
          idler_hit_3: [16e3, 500],
          male_damage_1: [18e3, 408.8662131519278],
          male_damage_2: [2e4, 529.6145124716567],
          male_damage_3: [22e3, 530.6122448979593],
          partner_hit_1: [24e3, 657.9591836734693],
          partner_hit_2: [26e3, 700.5668934240355],
          partner_hit_3: [28e3, 866.6893424036282],
          ram_hit_1: [3e4, 734.6485260770983],
          ram_hit_2: [32e3, 673.4693877551052],
          ram_hit_3: [34e3, 591.927437641722],
          swine_hit_1: [36e3, 657.4376417233552],
          swine_hit_2: [38e3, 654.8526077097492],
          swine_hit_3: [4e4, 722.9478458049882]
        }
      },
      card_effects: {
        src: ["__9a5a/sound/card_effects.ogg", "__98cf/sound/card_effects.m4a", "__ccc3/sound/card_effects.mp3", "__cffe/sound/card_effects.ac3"],
        preload: !1,
        sprite: {
          Chilling_Touch: [0, 1672.8344671201814],
          Curse: [3e3, 1332.743764172336],
          Fireball: [6e3, 1121.6553287981856],
          Freeze: [9e3, 1414.2176870748297],
          Heal: [12e3, 1821.9727891156463],
          Rage: [15e3, 1161.6780045351475],
          Ressurect: [18e3, 1642.4716553287979]
        }
      },
      battle_theme_loop: {
        src: ["__6f1b/sound/battle_theme_loop.ogg", "__3ffd/sound/battle_theme_loop.m4a", "__fa83/sound/battle_theme_loop.mp3", "__0cbe/sound/battle_theme_loop.ac3"],
        sprite: {
          battle_theme_loop: [0, 62307.687074829926, !0]
        }
      },
      comix_theme_loop: {
        src: ["__5c1d/sound/comix_theme_loop.ogg", "__796a/sound/comix_theme_loop.m4a", "__fbb5/sound/comix_theme_loop.mp3", "__2f93/sound/comix_theme_loop.ac3"],
        sprite: {
          comix_theme_loop: [0, 64390.249433106575, !0]
        }
      },
      loot_box_theme_loop: {
        src: ["__fbb3/sound/loot_box_theme_loop.ogg", "__7a4b/sound/loot_box_theme_loop.m4a", "__e8a0/sound/loot_box_theme_loop.mp3", "__1b0a/sound/loot_box_theme_loop.ac3"],
        sprite: {
          loot_box_theme_loop: [0, 30857.14285714286, !0]
        }
      },
      map_theme_loop: {
        src: ["__3187/sound/map_theme_loop.ogg", "__56dc/sound/map_theme_loop.m4a", "__5219/sound/map_theme_loop.mp3", "__ef41/sound/map_theme_loop.ac3"],
        sprite: {
          map_theme_loop: [0, 113454.5351473923, !0]
        }
      },
      map_world_theme_loop: {
        src: ["__bb66/sound/map_world_theme_loop.ogg", "__d5b3/sound/map_world_theme_loop.m4a", "__7571/sound/map_world_theme_loop.mp3", "__b7ac/sound/map_world_theme_loop.ac3"],
        preload: !1,
        sprite: {
          map_world_theme_loop: [0, 19266.34920634921, !0]
        }
      }
    }
  },
  90: function(a, e, c) {
    "use strict";
    a.exports = {
      hits: {
        __self__: ["male_damage_1", "male_damage_2", "male_damage_3"],
        Guidy: ["partner_hit_1", "partner_hit_2", "partner_hit_3"],
        Sloth: ["idler_hit_1", "idler_hit_2", "idler_hit_3"],
        Foxy: ["fox_hit_1", "fox_hit_2", "fox_hit_3"],
        __reserved__: ["ram_hit_1", "ram_hit_2", "ram_hit_3"],
        Piggy: ["swine_hit_1", "swine_hit_2", "swine_hit_3"],
        default: ["female_damage_1", "female_damage_2", "female_damage_3"]
      }
    }
  },
  91: function(a, e, c) { // DUELS CHESTS
    "use strict";
    a.exports = {
      LEAGUES_POINTS: [0, 15, 50, 100, 300, 750, 1e3, 1300, 1600, 2e3, 2500, 3e3],
      POINTS_WIN: [7, 8, 9],
      POINTS_LOSE: 4,
      LEAGUES_CARDS: {
        1: [145],
        3: [146],
        4: [147],
        6: [148],
        7: [149],
        9: [150],
        10: [151]
      },
      STAR_CHESTS: [
        [1, 0],
        [1, 0],
        [2, 0],
        [2, 1],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
        [6, 3],
        [7, 3],
        [9, 3],
        [12, 4],
        [15, 4],
        [18, 5]
      ],
      STAR_CHEST_COOLDOWN: 28800,
      SLOT_PRICES: [150, 250, 450, 800, 1500, 2500, 4e3]
    }
  },
  92: function(a, e, c) { // TOURNAMENTS
    "use strict";
    a.exports = {
      daily: {
        POINTS: {
          evolve: 30,
          levelup: 25
        },
        LOCK: {
          counters: {
            "M:19": 1
          }
        },
        RANKS: [
          [1, 3],
          [4, 20],
          [21, 50],
          [51, 100]
        ],
        TIER_CARDS: [
          [
            [144, 143],
            [144, null],
            [null, null]
          ],
          [
            [152, 153],
            [152, null],
            [null, null]
          ],
          [
            [154, 155],
            [154, null],
            [null, null]
          ]
        ],
        REWARDS: [{
          card0: "c0",
          drops0: {
            i: [
              [2501, 30],
              [2503, 5]
            ]
          },
          card1: "c1",
          drops1: {
            i: [
              [2502, 15],
              [2504, 2]
            ]
          },
          other: {
            i: [
              [6002, 1],
              [6001, 3]
            ],
            r: {
              gold: 5e4,
              gems: 100
            }
          }
        }, {
          card0: "c0",
          drops0: {
            i: [
              [2501, 12],
              [2503, 2]
            ]
          },
          card1: "c1",
          drops1: {
            i: [
              [2502, 8],
              [2504, 1]
            ]
          },
          other: {
            i: [
              [6001, 2]
            ],
            r: {
              gold: 25e3
            }
          }
        }, {
          card0: "c0",
          drops0: {
            i: [
              [2501, 5],
              [2503, 1]
            ]
          },
          card1: "c1",
          drops1: null,
          other: {
            i: [
              [6001, 1]
            ],
            r: {
              gold: 7500
            }
          }
        }],
        REWARD_DATA_NAME: "__RT_REWARD"
      },
      se: {
        LOCK: {
          quests: [53]
        },
        RANKS: [
          [1, 3],
          [4, 20],
          [21, 50],
          [51, 100]
        ],
        REWARDS: [{
          r: {
            pounds: 3
          }
        }, {
          r: {
            pounds: 2
          }
        }, {
          r: {
            pounds: 1
          }
        }],
        REWARD_DATA_NAME: "__RSE_REWARD"
      }
    }
  },
  93: function(a, e, c) { // DARK TOURNAMENT stages
    "use strict";
    a.exports = [{
      id: 1,
      reward: {
        r: {
          denier: 10
        },
        p: {
          se: 10
        }
      },
      title: "Level up a Dark card",
      lock: {
        quests: [53]
      },
      objectives: [{
        condition: {
          counters2: {
            LUP_C5: 1
          }
        },
        isAbsolute: 0,
        show: {
          page: "cards"
        }
      }]
    }, {
      id: 2,
      reward: {
        r: {
          denier: 20
        },
        p: {
          se: 20
        }
      },
      title: "Seduce any cards 3 times",
      objectives: [{
        condition: {
          counters2: {
            SED: 3
          }
        },
        isAbsolute: 0,
        show: {
          page: "cards"
        }
      }],
      lock: {
        quests: [1]
      }
    }, {
      id: 3,
      reward: {
        r: {
          denier: 30
        },
        p: {
          se: 30
        }
      },
      title: "Win Duels 5 times",
      objectives: [{
        condition: {
          counters: {
            PVP_WON: 5
          }
        },
        isAbsolute: 0,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [2]
      }
    }, {
      id: 4,
      reward: {
        r: {
          denier: 40
        },
        p: {
          se: 40
        }
      },
      title: "Win City 16.2",
      objectives: [{
        condition: {
          counters: {
            "M:18": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 18
        }
      }],
      lock: {
        quests: [3]
      }
    }, {
      id: 5,
      reward: {
        r: {
          denier: 50
        },
        p: {
          se: 50
        }
      },
      title: "Open Boxes 4 times",
      objectives: [{
        condition: {
          counters: {
            "LB:A": 4
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [4]
      }
    }, {
      id: 6,
      reward: {
        r: {
          denier: 60
        },
        p: {
          se: 60
        }
      },
      title: "Level up Dark cards 5 times",
      objectives: [{
        condition: {
          counters2: {
            LUP_C5: 5
          }
        },
        isAbsolute: 0,
        show: {
          page: "cards"
        }
      }],
      lock: {
        quests: [5]
      }
    }, {
      id: 7,
      reward: {
        r: {
          denier: 70
        },
        p: {
          se: 70
        }
      },
      title: "Win Forest 5",
      objectives: [{
        condition: {
          counters: {
            "M:25": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 25
        }
      }],
      lock: {
        quests: [6]
      }
    }, {
      id: 8,
      reward: {
        r: {
          denier: 80
        },
        p: {
          se: 80
        }
      },
      title: "Win Duels 10 times",
      objectives: [{
        condition: {
          counters: {
            PVP_WON: 10
          }
        },
        isAbsolute: 0,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [7]
      }
    }, {
      id: 9,
      reward: {
        r: {
          denier: 90
        },
        p: {
          se: 90
        }
      },
      title: "Win Forest 9.2",
      objectives: [{
        condition: {
          counters: {
            "M:31": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 31
        }
      }],
      lock: {
        quests: [8]
      }
    }, {
      id: 10,
      reward: {
        r: {
          denier: 100
        },
        p: {
          se: 100
        }
      },
      title: "Get 30 Rare card duplicates",
      objectives: [{
        condition: {
          counters2: {
            CGT_R2: 30
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [9]
      }
    }, {
      id: 11,
      reward: {
        r: {
          denier: 110
        },
        p: {
          se: 110
        }
      },
      title: "Open chests in Duels 4 times",
      objectives: [{
        condition: {
          counters: {
            PVP_CC: 4
          }
        },
        isAbsolute: 0,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [10]
      }
    }, {
      id: 12,
      reward: {
        r: {
          denier: 120
        },
        p: {
          se: 120
        }
      },
      title: "Win Forest 10.2",
      objectives: [{
        condition: {
          counters: {
            "M:34": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 34
        }
      }],
      lock: {
        quests: [11]
      }
    }, {
      id: 13,
      reward: {
        r: {
          denier: 130
        },
        p: {
          se: 130
        }
      },
      title: "Get 50 Common card duplicates",
      objectives: [{
        condition: {
          counters2: {
            CGT_R1: 50
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [12]
      }
    }, {
      id: 14,
      reward: {
        r: {
          denier: 140
        },
        p: {
          se: 140
        }
      },
      title: "Open Cursed Coffer",
      objectives: [{
        condition: {
          counters2: {
            "SE_CFR:1": 1
          }
        },
        isAbsolute: 0,
        show: {
          page: "event"
        }
      }],
      lock: {
        quests: [13]
      }
    }, {
      id: 15,
      reward: {
        r: {
          denier: 150
        },
        p: {
          se: 150
        }
      },
      title: "Reach Master League I in Duels",
      objectives: [{
        condition: {
          counters: {
            PVP_LG: 4
          }
        },
        isAbsolute: 1,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [14]
      }
    }, {
      id: 16,
      reward: {
        r: {
          denier: 160
        },
        p: {
          se: 160
        }
      },
      title: "Get 10 Epic card duplicates",
      objectives: [{
        condition: {
          counters2: {
            CGT_R3: 10
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [15]
      }
    }, {
      id: 17,
      reward: {
        r: {
          denier: 170
        },
        p: {
          se: 170
        }
      },
      title: "Level up Epic cards 10 times",
      objectives: [{
        condition: {
          counters2: {
            LUP: 10
          }
        },
        isAbsolute: 0,
        show: {
          page: "cards"
        }
      }],
      lock: {
        quests: [16]
      }
    }, {
      id: 18,
      reward: {
        r: {
          denier: 180
        },
        p: {
          se: 180
        }
      },
      title: "Win Forest 14.3",
      objectives: [{
        condition: {
          counters: {
            "M:44": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 44
        }
      }],
      lock: {
        quests: [17]
      }
    }, {
      id: 19,
      reward: {
        r: {
          denier: 190
        },
        p: {
          se: 190
        }
      },
      title: "Open chests in Duels 8 times",
      objectives: [{
        condition: {
          counters: {
            PVP_CC: 8
          }
        },
        isAbsolute: 0,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [18]
      }
    }, {
      id: 20,
      reward: {
        r: {
          denier: 200
        },
        p: {
          se: 200
        }
      },
      title: "Open Darkest Coffer",
      objectives: [{
        condition: {
          counters2: {
            "SE_CFR:2": 1
          }
        },
        isAbsolute: 0,
        show: {
          page: "event"
        }
      }],
      lock: {
        quests: [19]
      }
    }, {
      id: 21,
      reward: {
        r: {
          denier: 210
        },
        p: {
          se: 210
        }
      },
      title: "Get 2 Legendary card duplicates",
      objectives: [{
        condition: {
          counters2: {
            CGT_R4: 2
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [20]
      }
    }, {
      id: 22,
      reward: {
        r: {
          denier: 220
        },
        p: {
          se: 220
        }
      },
      title: "Reach Master League II in Duels",
      objectives: [{
        condition: {
          counters: {
            PVP_LG: 5
          }
        },
        isAbsolute: 1,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [21]
      }
    }, {
      id: 23,
      reward: {
        r: {
          denier: 230
        },
        p: {
          se: 230
        }
      },
      title: "Get 1 Epic Dark card",
      objectives: [{
        condition: {
          counters2: {
            CGT_CR5_3: 1
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [22]
      }
    }, {
      id: 24,
      reward: {
        r: {
          denier: 240
        },
        p: {
          se: 240
        }
      },
      title: "Get 10 Rare Dark card duplicates",
      objectives: [{
        condition: {
          counters2: {
            CGT_CR5_2: 10
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [23]
      }
    }, {
      id: 25,
      reward: {
        r: {
          denier: 250
        },
        p: {
          se: 250
        }
      },
      title: "Seduce any cards 5 times",
      objectives: [{
        condition: {
          counters2: {
            SED: 5
          }
        },
        isAbsolute: 0,
        show: {
          page: "cards"
        }
      }],
      lock: {
        quests: [24]
      }
    }, {
      id: 26,
      reward: {
        r: {
          denier: 260
        },
        p: {
          se: 260
        }
      },
      title: "Spend 3400 Dark Energy",
      objectives: [{
        condition: {
          counters: {
            RW_denier: 3400
          }
        },
        isAbsolute: 1
      }],
      lock: {
        quests: [25]
      }
    }, {
      id: 27,
      reward: {
        r: {
          denier: 270
        },
        p: {
          se: 270
        }
      },
      title: "Reach Master League III in Duels",
      objectives: [{
        condition: {
          counters: {
            PVP_LG: 6
          }
        },
        isAbsolute: 1,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [26]
      }
    }, {
      id: 28,
      reward: {
        r: {
          denier: 280
        },
        p: {
          se: 280
        }
      },
      title: "Level up Epic cards 10 times",
      objectives: [{
        condition: {
          counters2: {
            LUP_R3: 10
          }
        },
        isAbsolute: 0,
        show: {
          page: "cards"
        }
      }],
      lock: {
        quests: [27]
      }
    }, {
      id: 29,
      reward: {
        r: {
          denier: 290
        },
        p: {
          se: 290
        }
      },
      title: "Win Sands 4.5",
      objectives: [{
        condition: {
          counters: {
            "M:54": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 54
        }
      }],
      lock: {
        quests: [28]
      }
    }, {
      id: 30,
      reward: {
        r: {
          denier: 300
        },
        p: {
          se: 300
        }
      },
      title: "Reach Champion League I in Duels",
      objectives: [{
        condition: {
          counters: {
            PVP_LG: 7
          }
        },
        isAbsolute: 1,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [29]
      }
    }, {
      id: 31,
      reward: {
        r: {
          denier: 310
        },
        p: {
          se: 310
        }
      },
      title: "Have 3-star Outworld Devourer or Moiru card",
      objectives: [{
        condition: {
          either: [{
            counters2: {
              SED_156: 2
            }
          }, {
            counters2: {
              SED_160: 2
            }
          }]
        },
        isAbsolute: 1
      }],
      lock: {
        quests: [30]
      }
    }, {
      id: 32,
      reward: {
        r: {
          denier: 320
        },
        p: {
          se: 320
        }
      },
      title: "Have 4-star Epic card",
      objectives: [{
        condition: {
          counters2: {
            STA_4_R3: 1
          }
        },
        isAbsolute: 1,
        show: {
          page: "cards"
        }
      }],
      lock: {
        quests: [31]
      }
    }, {
      id: 33,
      reward: {
        r: {
          denier: 330
        },
        p: {
          se: 330
        }
      },
      title: "Win Sands 9.2",
      objectives: [{
        condition: {
          counters: {
            "M:61": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 61
        }
      }],
      lock: {
        quests: [32]
      }
    }, {
      id: 34,
      reward: {
        r: {
          denier: 340
        },
        p: {
          se: 340
        }
      },
      title: "Reach Champion League II in Duels",
      objectives: [{
        condition: {
          counters: {
            PVP_LG: 8
          }
        },
        isAbsolute: 1,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [33]
      }
    }, {
      id: 35,
      reward: {
        r: {
          denier: 350
        },
        p: {
          se: 350
        }
      },
      title: "Have 3-star Fallen Angel or Swamp Witch card",
      objectives: [{
        condition: {
          either: [{
            counters2: {
              SED_158: 2
            }
          }, {
            counters2: {
              SED_159: 2
            }
          }]
        },
        isAbsolute: 1
      }],
      lock: {
        quests: [34]
      }
    }, {
      id: 36,
      reward: {
        r: {
          denier: 360
        },
        p: {
          se: 360
        }
      },
      title: "Have Soul Catcher card",
      objectives: [{
        condition: {
          counters: {
            "C:160": 1
          }
        },
        isAbsolute: 1
      }],
      lock: {
        quests: [35]
      }
    }, {
      id: 37,
      reward: {
        r: {
          denier: 370
        },
        p: {
          se: 370
        }
      },
      title: "Get 4 Legendary card duplicates",
      objectives: [{
        condition: {
          counters2: {
            CGT_R4: 4
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [36]
      }
    }, {
      id: 38,
      reward: {
        r: {
          denier: 380
        },
        p: {
          se: 380
        }
      },
      title: "Win Sands 12.1",
      objectives: [{
        condition: {
          counters: {
            "M:65": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 65
        }
      }],
      lock: {
        quests: [37]
      }
    }, {
      id: 39,
      reward: {
        r: {
          denier: 390
        },
        p: {
          se: 390
        }
      },
      title: "Reach Champion League III in Duels",
      objectives: [{
        condition: {
          counters: {
            PVP_LG: 9
          }
        },
        isAbsolute: 1
      }],
      lock: {
        quests: [38]
      }
    }, {
      id: 40,
      reward: {
        r: {
          denier: 400
        },
        p: {
          se: 400
        }
      },
      title: "Open Darkest Coffer 3 times",
      objectives: [{
        condition: {
          counters2: {
            "SE_CFR:2": 3
          }
        },
        isAbsolute: 0
      }],
      lock: {
        quests: [39]
      }
    }, {
      id: 41,
      reward: {
        r: {
          denier: 410
        },
        p: {
          se: 410
        }
      },
      title: "Win a prize in the Darkest Tournament",
      objectives: [{
        condition: {
          either: [{
            counters2: {
              "RT_WON:se:1": 1
            }
          }, {
            counters2: {
              "RT_WON:se:2": 1
            }
          }, {
            counters2: {
              "RT_WON:se:3": 1
            }
          }]
        },
        isAbsolute: 1
      }],
      lock: {
        quests: [40]
      }
    }, {
      id: 42,
      reward: {
        r: {
          denier: 420
        },
        p: {
          se: 420
        }
      },
      title: "Open Cursed Coffer 5 times",
      objectives: [{
        condition: {
          counters2: {
            "SE_CFR:1": 5
          }
        },
        isAbsolute: 0
      }],
      lock: {
        quests: [41]
      }
    }, {
      id: 43,
      reward: {
        r: {
          denier: 430
        },
        p: {
          se: 430
        }
      },
      title: "Win Sands 13.2",
      objectives: [{
        condition: {
          counters: {
            "M:69": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 69
        }
      }],
      lock: {
        quests: [42]
      }
    }, {
      id: 44,
      reward: {
        r: {
          denier: 440
        },
        p: {
          se: 440
        }
      },
      title: "Reach Legendary League I in Duels",
      objectives: [{
        condition: {
          counters: {
            PVP_LG: 10
          }
        },
        isAbsolute: 1,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [43]
      }
    }, {
      id: 45,
      reward: {
        r: {
          denier: 450
        },
        p: {
          se: 450
        }
      },
      title: "Open Silver Box 15 times",
      objectives: [{
        condition: {
          counters: {
            "LB:6001": 15
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [44]
      }
    }, {
      id: 46,
      reward: {
        r: {
          denier: 460
        },
        p: {
          se: 460
        }
      },
      title: "Level up Dark cards 15 times",
      objectives: [{
        condition: {
          counters2: {
            LUP_C5: 10
          }
        },
        isAbsolute: 0
      }],
      lock: {
        quests: [45]
      }
    }, {
      id: 47,
      reward: {
        r: {
          denier: 470
        },
        p: {
          se: 470
        }
      },
      title: "Get 10 Legendary card duplicates",
      objectives: [{
        condition: {
          counters2: {
            CGT_R4: 10
          }
        },
        isAbsolute: 0,
        show: {
          popup: "LootboxListPopup"
        }
      }],
      lock: {
        quests: [46]
      }
    }, {
      id: 48,
      reward: {
        r: {
          denier: 480
        },
        p: {
          se: 480
        }
      },
      title: "Have Bone Talker card",
      objectives: [{
        condition: {
          counters: {
            "C:162": 1
          }
        },
        isAbsolute: 1
      }],
      lock: {
        quests: [47]
      }
    }, {
      id: 49,
      reward: {
        r: {
          denier: 490
        },
        p: {
          se: 490
        }
      },
      title: "Reach Legendary League II in Duels",
      objectives: [{
        condition: {
          counters: {
            PVP_LG: 11
          }
        },
        isAbsolute: 1,
        show: {
          popup: "PVPPopup"
        }
      }],
      lock: {
        quests: [48]
      }
    }, {
      id: 50,
      reward: {
        r: {
          denier: 500
        },
        p: {
          se: 500
        }
      },
      title: "Win Sands 16",
      objectives: [{
        condition: {
          counters: {
            "M:73": 1
          }
        },
        isAbsolute: 1,
        show: {
          mission: 73
        }
      }],
      lock: {
        quests: [49]
      }
    }, {
      id: 51,
      reward: {
        cards: [
          [162, {
            evolution: {
              currentStage: 4
            }
          }]
        ]
      },
      title: "Get 7th card",
      hidden: 1,
      lock: {
        quests: [1]
      },
      objectives: [{
        condition: {
          counters: {
            "C:156": 1,
            "C:157": 1,
            "C:158": 1,
            "C:159": 1,
            "C:160": 1,
            "C:161": 1
          }
        },
        isAbsolute: 1
      }]
    }, {
      id: 52,
      hidden: 1,
      lock: {
        counters: {
          "M:15": 1
        }
      },
      objectives: [{
        condition: {
          counters: {
            "M:15": 1
          }
        },
        isAbsolute: 1
      }]
    }, {
      id: 53,
      hidden: 1,
      lock: {
        quests: [52]
      },
      objectives: [{
        condition: {
          counters: {
            GAME_DAY: 1
          }
        },
        isAbsolute: 0
      }]
    }]
  },
  94: function(a, e, c) { // Dark Tounament coffers
    "use strict";
    var d;
    d = c(4)._tr, a.exports = [{
      id: 1,
      name: d("Cursed coffer"),
      price: {
        denier: 100
      },
      icon: "__5a4c/img/chest_dark1.png",
      info: d("3 pickings, unique common card is guaranteed."),
      cardIds: [156, 160]
    }, {
      id: 2,
      name: d("Darkest coffer"),
      price: {
        denier: 500
      },
      icon: "__6f75/img/chest_dark2.png",
      info: d("5 pickings, unique rare card is guaranteed."),
      cardIds: [158, 159]
    }, {
      id: 3,
      name: d("Infernal Coffer"),
      price: {
        pounds: 2
      },
      icon: "__d20c/img/chest_dark3.png",
      info: d("10 pickings, unique rare and common cards are guaranteed, unique legendary card is possible."),
      cardIds: [157, 161]
    }]
  },
  95: function(a, e, c) {
    "use strict";
    var d;
    d = c(4)._tr, a.exports = {
      id: "se1",
      name: d("Darkest Night"),
      lock: {
        quests: [53]
      },
      ttl: 604800,
      buffCards: {
        darkevent: 1.25
      }
    }
  }
}, [136]);
