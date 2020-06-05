/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
// require("./lang.js");
import axios from "axios";
window.axios = axios;

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React, { useRef } from "react";
import { render } from "react-dom";
import HomeGalleries from "./components/HomeGalleries";
import HomeCarousel from "./components/HomeCarousel";

render(<HomeGalleries />, document.getElementById("gallery-holder"));
render(<HomeCarousel />, document.getElementById("bannerCarousel"));
 
 
