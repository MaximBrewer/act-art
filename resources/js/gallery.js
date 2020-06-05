function animateGallery(t) {
    var e = Gallery.galInner;
    requestAnimationFrame(function i() {
        var n = e.clientWidth,
            s = Gallery.winWidth,
            o = getTranslateX(e),
            r = Gallery.step,
            a = Math.abs((o - s) / n),
            l = getTranslateX(e),
            c = Gallery.visibleFlag;
        if (a > Gallery.loadingPercent)
            if (!Gallery.loading) {
                t.loadPhoto();
                a = Math.abs(o - s) / e.clientWidth;
            }
        if (a > 1) a = 1;
        t.moveLeft(l, r);
        if (a < 1 && 1 === c) requestAnimationFrame(i);
    });
}

function getTranslateX(t) {
    var e = t.style.transform;
    if ("" === e) return 0;
    var i = e.replace(/translate3d|\(|\)/g, "").split(",");
    return parseInt(i[0]);
}

if (document.getElementById("gallery")) {
    var PhotoItemModel = Backbone.Model.extend({
            defaults: {
                ID: "1",
                PATH: "img/g3.jpg",
                ARTICLE: "#gallery",
                TAG: "F",
                TITLE: "P",
                SIZE: 1,
                PROPS: "1,1"
            }
        }),
        PhotoCollection = Backbone.Collection.extend({ model: PhotoItemModel }),
        PhotoItemView = Backbone.View.extend({
            tagName: "div",
            className: "picture",
            template: _.template($("#photoItemTemplate").html()),
            initialize: function() {
                this.render();
            },
            render: function() {
                var t = this.model.toJSON(),
                    e = t.SIZE,
                    i = t.PROPS,
                    n = t.PATH,
                    s = "background-image: url(" + n + ");";
                return (
                    this.$el
                        .html(this.template(this.model.toJSON()))
                        .attr({ "data-size": e, "data-props": i, style: s }),
                    this
                );
            }
        }),
        GalleryView = Backbone.View.extend({
            tagName: "div",
            className: "gallery-body",
            initialize: function() {
                this.render();
            },
            render: function() {
                return (
                    this.collection.each(function(t) {
                        var e = new PhotoItemView({ model: t, id: t.id });
                        this.$el.append(e.render().$el);
                    }, this),
                    this
                );
            },
            makeGrids: function() {
                return Gallery.initGrids(this.$el);
            }
        });
}
Gallery = {
    stopFlag: 0,
    visibleFlag: 0,
    loading: !1,
    loadingPercent: 0.3,
    width: 0,
    winWidth: document.body.clientWidth,
    galInner: document.querySelector(".gallery-inner"),
    step: 2,
    animate: function() {
        animateGallery({
            loadPhoto: function() {
                if (((Gallery.loading = !0), !Gallery.stopFlag)) {
                    var t = function(t) {
                        for (
                            var e = document.querySelectorAll(t), i = 0, n = 0;
                            n < e.length;
                            n++
                        )
                            i += e[n].offsetWidth;
                        return i;
                    };
                    $.ajax({
                        url:
                            "/api/get_gallery_items/?" +
                            Math.random()
                                .toString(36)
                                .substring(2, 15) +
                            Math.random()
                                .toString(36)
                                .substring(2, 15),
                        dataType: "json",
                        success: function(e) {
                            Gallery.stopFlag = parseInt(e.stopFlag);
                            var i = $(Gallery.galInner),
                                n = new PhotoCollection(e.gallery),
                                s = new GalleryView({ collection: n });
                            i.append(s.makeGrids());
                            var o = t(".gallery-body");
                            i.width(o),
                                (Gallery.width = o),
                                (Gallery.loading = !1);
                        }
                    });
                }
            },
            moveLeft: function(t, e) {
                var i = t - e;
                Gallery.galInner.style.transform =
                    "translate3d(" + i + "px, 0px, 0px)";
            }
        });
    },
    initGrids: function(t, e) {
        var i = function(t) {
            var e = [0, 0];
            return (
                t.each(function() {
                    var t = this.dataset.props.split(",");
                    (e[0] += parseInt(t[0])), (e[1] += parseInt(t[1]));
                }),
                e
            );
        };
        void 0 === e && (e = 250);
        var n = t,
            s = n.find(".picture"),
            o = i(s),
            r = Math.floor((o[0] / 3) * 1.13),
            a = r * e;
        return (
            n.width(a),
            n.parent().width(a),
            n
                .BlocksIt({ offsetX: 0, offsetY: 0, numOfCol: r })
                .queue(function() {
                    s.each(function() {
                        var t = $(this).data("props"),
                            e = t.split(",");
                        tileSides($(this), e[0], e[1]);
                    }),
                        n.BlocksIt({ offsetX: 0, offsetY: 0, numOfCol: r }),
                        $(this).dequeue();
                }),
            n.height(3 * e),
            Gallery.correctGallery(),
            $(document).trigger("gallery.initialized"),
            n
        );
    },
    initPane: function(t) {
        Gallery.width = t.find(".gallery-inner").width();
    },
    correctGallery: function() {
        // var t = $("#gallery"),
        //     e = t.find(".gallery-body"),
        //     i = t.find(".picture");
        // if (t.length && e.length && i.length) {
        //     var n = e.height(),
        //         s = e.offset().top,
        //         o = s + n;
        //     i.each(function() {
        //         var t = $(this),
        //             e = t.height(),
        //             i = t.offset().top,
        //             n = e + i,
        //             s = o - n;
        //         if (s < 0) {
        //             var r = e - Math.abs(s);
        //             t.height(r);
        //         }
        //     });
        // }
    },
    hoverEffects: {
        on: function(t) {
            t.parents(".lookFullSize").addClass("hovered");
        },
        off: function(t) {
            t.parents(".lookFullSize").removeClass("hovered");
        }
    }
};

$(function() {
    var t = $(".gallery-holder");
    t.length &&
        (!device.mobile() || $(window).width() > 500) &&
        (Gallery.initGrids($(".gallery-body:first-child"), 250),
        new Waypoint.Inview({
            element: document.getElementById("gallery-holder"),
            enter: function(t) {
                (Gallery.visibleFlag = 1), Gallery.animate();
            },
            exited: function(t) {
                Gallery.visibleFlag = 0;
            }
        }),
        $(document.getElementById("gallery-holder")).hover(
            function() {
                Gallery.step = 1;
            },
            function() {
                Gallery.step = 2;
            }
        )),
        $(document).on("mouseenter", ".lookFullSize .ico-holder", function() {
            Gallery.hoverEffects.on($(this));
        }),
        $(document).on("mouseleave", ".lookFullSize .ico-holder", function() {
            Gallery.hoverEffects.off($(this));
        });
});
function tileSides(t, e, i, n) {
    var s,
        o,
        r = "px";
    return (
        void 0 !== n && (r = "px !important"),
        (s = $(t).width()),
        0 == s &&
            (s = $(t)
                .parent()
                .width()),
        0 == s &&
            setTimeout(function() {
                tileSides(t, e, i, n);
            }, 50),
        (o = (s * i) / e),
        $(t).css("height", o + r),
        $(t)
    );
}
if (
    (function() {
        var t, e, i, n, s, o, r, a, l, c;
        (e = window.device),
            (t = {}),
            (window.device = t),
            (n = window.document.documentElement),
            (c = window.navigator.userAgent.toLowerCase()),
            (t.ios = function() {
                return t.iphone() || t.ipod() || t.ipad();
            }),
            (t.iphone = function() {
                return !t.windows() && s("iphone");
            }),
            (t.ipod = function() {
                return s("ipod");
            }),
            (t.ipad = function() {
                return s("ipad");
            }),
            (t.android = function() {
                return !t.windows() && s("android");
            }),
            (t.androidPhone = function() {
                return t.android() && s("mobile");
            }),
            (t.androidTablet = function() {
                return t.android() && !s("mobile");
            }),
            (t.blackberry = function() {
                return s("blackberry") || s("bb10") || s("rim");
            }),
            (t.blackberryPhone = function() {
                return t.blackberry() && !s("tablet");
            }),
            (t.blackberryTablet = function() {
                return t.blackberry() && s("tablet");
            }),
            (t.windows = function() {
                return s("windows");
            }),
            (t.windowsPhone = function() {
                return t.windows() && s("phone");
            }),
            (t.windowsTablet = function() {
                return t.windows() && s("touch") && !t.windowsPhone();
            }),
            (t.fxos = function() {
                return (s("(mobile;") || s("(tablet;")) && s("; rv:");
            }),
            (t.fxosPhone = function() {
                return t.fxos() && s("mobile");
            }),
            (t.fxosTablet = function() {
                return t.fxos() && s("tablet");
            }),
            (t.meego = function() {
                return s("meego");
            }),
            (t.cordova = function() {
                return window.cordova && "file:" === location.protocol;
            }),
            (t.nodeWebkit = function() {
                return "object" == typeof window.process;
            }),
            (t.mobile = function() {
                return (
                    t.androidPhone() ||
                    t.iphone() ||
                    t.ipod() ||
                    t.windowsPhone() ||
                    t.blackberryPhone() ||
                    t.fxosPhone() ||
                    t.meego()
                );
            }),
            (t.tablet = function() {
                return (
                    t.ipad() ||
                    t.androidTablet() ||
                    t.blackberryTablet() ||
                    t.windowsTablet() ||
                    t.fxosTablet()
                );
            }),
            (t.desktop = function() {
                return !t.tablet() && !t.mobile();
            }),
            (t.television = function() {
                var t;
                for (
                    television = [
                        "googletv",
                        "viera",
                        "smarttv",
                        "internet.tv",
                        "netcast",
                        "nettv",
                        "appletv",
                        "boxee",
                        "kylo",
                        "roku",
                        "dlnadoc",
                        "roku",
                        "pov_tv",
                        "hbbtv",
                        "ce-html"
                    ],
                        t = 0;
                    t < television.length;

                ) {
                    if (s(television[t])) return !0;
                    t++;
                }
                return !1;
            }),
            (t.portrait = function() {
                return window.innerHeight / window.innerWidth > 1;
            }),
            (t.landscape = function() {
                return window.innerHeight / window.innerWidth < 1;
            }),
            (t.noConflict = function() {
                return (window.device = e), this;
            }),
            (s = function(t) {
                return -1 !== c.indexOf(t);
            }),
            (r = function(t) {
                var e;
                return (e = new RegExp(t, "i")), n.className.match(e);
            }),
            (i = function(t) {
                var e = null;
                r(t) ||
                    ((e = n.className.replace(/^\s+|\s+$/g, "")),
                    (n.className = e + " " + t));
            }),
            (l = function(t) {
                r(t) && (n.className = n.className.replace(" " + t, ""));
            }),
            t.ios()
                ? t.ipad()
                    ? i("ios ipad tablet")
                    : t.iphone()
                    ? i("ios iphone mobile")
                    : t.ipod() && i("ios ipod mobile")
                : t.android()
                ? i(t.androidTablet() ? "android tablet" : "android mobile")
                : t.blackberry()
                ? i(
                      t.blackberryTablet()
                          ? "blackberry tablet"
                          : "blackberry mobile"
                  )
                : t.windows()
                ? i(
                      t.windowsTablet()
                          ? "windows tablet"
                          : t.windowsPhone()
                          ? "windows mobile"
                          : "desktop"
                  )
                : t.fxos()
                ? i(t.fxosTablet() ? "fxos tablet" : "fxos mobile")
                : t.meego()
                ? i("meego mobile")
                : t.nodeWebkit()
                ? i("node-webkit")
                : t.television()
                ? i("television")
                : t.desktop() && i("desktop"),
            t.cordova() && i("cordova"),
            (o = function() {
                t.landscape()
                    ? (l("portrait"), i("landscape"))
                    : (l("landscape"), i("portrait"));
            }),
            (a = Object.prototype.hasOwnProperty.call(
                window,
                "onorientationchange"
            )
                ? "orientationchange"
                : "resize"),
            window.addEventListener
                ? window.addEventListener(a, o, !1)
                : window.attachEvent
                ? window.attachEvent(a, o)
                : (window[a] = o),
            o(),
            "function" == typeof define &&
            "object" == typeof define.amd &&
            define.amd
                ? define(function() {
                      return t;
                  })
                : "undefined" != typeof module && module.exports
                ? (module.exports = t)
                : (window.device = t);
    }.call(this),
    "undefined" == typeof jQuery)
)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+(function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1))
        throw new Error(
            "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
        );
})(jQuery);
(function($) {
    //BlocksIt default options
    var blocksOptions = {
        numOfCol: 5,
        offsetX: 5,
        offsetY: 5,
        blockElement: "div"
    };

    //dynamic variable
    var container, colwidth;
    var blockarr = [];

    //ie indexOf fix
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt /*, from*/) {
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = from < 0 ? Math.ceil(from) : Math.floor(from);
            if (from < 0) from += len;

            for (; from < len; from++) {
                if (from in this && this[from] === elt) return from;
            }
            return -1;
        };
    }

    //create empty blockarr
    var createEmptyBlockarr = function() {
        //empty blockarr
        blockarr = [];
        for (var i = 0; i < blocksOptions.numOfCol; i++) {
            blockarrPush("empty-" + i, i, 0, 1, -blocksOptions.offsetY);
        }
    };

    //add new block to blockarr
    var blockarrPush = function(id, x, y, width, height) {
        //define block object based on block width
        for (var i = 0; i < width; i++) {
            var block = new Object();
            block.x = x + i;
            block.size = width;
            block.endY = y + height + blocksOptions.offsetY * 2;

            blockarr.push(block);
        }
    };

    //remove block from blockarr
    var blockarrRemove = function(x, num) {
        for (var i = 0; i < num; i++) {
            //remove block beside
            var index = getBlockIndex(x + i, "x");
            blockarr.splice(index, 1);
        }
    };

    //retrieve block index based on block's x position
    var getBlockIndex = function(value, type) {
        for (var i = 0; i < blockarr.length; i++) {
            var obj = blockarr[i];
            if (type == "x" && obj.x == value) {
                return i;
            } else if (type == "endY" && obj.endY == value) {
                return i;
            }
        }
    };

    //get height from blockarr range based on block.x and size
    //retrun min and max height
    var getHeightArr = function(x, size) {
        var temparr = [];
        for (var i = 0; i < size; i++) {
            temparr.push(blockarr[getBlockIndex(x + i, "x")].endY);
        }
        var min = Math.min.apply(Math, temparr);
        var max = Math.max.apply(Math, temparr);

        return [min, max, temparr.indexOf(min)];
    };

    //get block x and y position
    var getBlockPostion = function(size) {
        //if block width is not default 1
        //extra algorithm check
        if (size > 1) {
            //prevent extra loop
            var arrlimit = blockarr.length - size;
            //define temp variable
            var defined = false;
            var tempHeight, tempIndex;

            for (var i = 0; i < blockarr.length; i++) {
                var obj = blockarr[i];
                var x = obj.x;

                //check for block within range only
                if (x >= 0 && x <= arrlimit) {
                    var heightarr = getHeightArr(x, size);

                    //get shortest group blocks
                    if (!defined) {
                        defined = true;
                        tempHeight = heightarr;
                        tempIndex = x;
                    } else {
                        if (heightarr[1] < tempHeight[1]) {
                            tempHeight = heightarr;
                            tempIndex = x;
                        }
                    }
                }
            }
            return [tempIndex, tempHeight[1]];
        } else {
            //simple check for block with width 1
            tempHeight = getHeightArr(0, blockarr.length);
            return [tempHeight[2], tempHeight[0]];
        }
    };

    //set block position
    var setPosition = function(obj, index) {
        //check block size
        if (!obj.data("size") || obj.data("size") < 0) {
            obj.data("size", 1);
        } else if (obj.data("size") > blocksOptions.numOfCol) {
            obj.data("size", blocksOptions.numOfCol);
        }

        //define block data
        var pos = getBlockPostion(obj.data("size"));
        var blockWidth =
            colwidth * obj.data("size") - (obj.outerWidth() - obj.width());

        //update style first before get object height
        obj.css({
            width: blockWidth - blocksOptions.offsetX * 2,
            left: pos[0] * colwidth,
            top: pos[1],
            position: "absolute"
        });

        var blockHeight = obj.outerHeight();

        //modify blockarr for new block
        blockarrRemove(pos[0], obj.data("size"));
        blockarrPush(
            obj.attr("id"),
            pos[0],
            pos[1],
            obj.data("size"),
            blockHeight
        );
    };

    $.fn.BlocksIt = function(options) {
        //BlocksIt options
        if (options && typeof options === "object") {
            $.extend(blocksOptions, options);
        }

        container = $(this);
        colwidth = container.width() / blocksOptions.numOfCol;

        //create empty blockarr
        createEmptyBlockarr();

        container.children(blocksOptions.blockElement).each(function(e) {
            setPosition($(this), e);
        });

        //set final height of container
        var heightarr = getHeightArr(0, blockarr.length);
        container.height(heightarr[1] + blocksOptions.offsetY);

        return this;
    };
})(jQuery);