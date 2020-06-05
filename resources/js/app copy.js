/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
require("./bootstrap-waterfall");
require("backbone");
require("waypoints/src/waypoint");
require("waypoints/src/group");
require("waypoints/src/context");
require("waypoints/src/debug");
require("waypoints/src/adapters/jquery");
require("waypoints/src/shortcuts/inview");
require("waypoints/src/shortcuts/infinite");
require("waypoints/src/shortcuts/sticky");

require("./gallery");

$(".carousel").on("slide.bs.carousel", function(e) {
    $(e.target)
        .find(".carousel-counter .current")
        .text(e.to / 1 + 1);
});

$(document).ready(function() {
    $("#waterfall-container").waterfall();
});

window.Vue = require("vue");
import VueWaypoint from 'vue-waypoint'


var Waterfall = require("vue-waterfall");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: "#app"
// });
var artItems = {};

function getRandomColor() {
    var colors = [
        "rgba(21,174,103,.5)",
        "rgba(245,163,59,.5)",
        "rgba(255,230,135,.5)",
        "rgba(194,217,78,.5)",
        "rgba(195,123,177,.5)",
        "rgba(125,205,244,.5)"
    ];
    return colors[~~(Math.random() * colors.length)];
}

for (i = 0; i < 50; i++) {
    artItems[i] = {
        index: i++,
        style: {
            background:
                getRandomColor() +
                " url('/storage/waterfall/45ef69d5c0084b40fb38fc27fa3c670d.png') no-repeat center center"
        },
        width: 100 + ~~(Math.random() * 50),
        height: 100 + ~~(Math.random() * 50)
    };
}

var app = new Vue({
    el: "#art-waterfall",
    components: {
        waterfall: Waterfall.waterfall,
        "waterfall-slot": Waterfall.waterfallSlot
    },
    data: {
        grow: [3, 2, 1, 2],
        items: artItems,
        isBusy: false
    },
    methods: {
        addItems: function() {
            if (!this.isBusy && this.items.length < 500) {
                this.isBusy = true;
                this.items.push.apply(this.items, ItemFactory.get(50));
            }
        },
        shuffle: function() {
            this.items.sort(function() {
                return Math.random() - 0.5;
            });
        },
        reflowed: function() {
            this.isBusy = false;
        }
    }
});

document.body.addEventListener(
    "click",
    function() {
        app.shuffle();
        // app.$refs.waterfall.$emit('reflow') // manually trigger reflow action
    },
    false
);

window.addEventListener("scroll", function() {
    var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop + window.innerHeight >= document.body.clientHeight) {
        app.addItems();
    }
});
