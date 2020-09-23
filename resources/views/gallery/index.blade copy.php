@extends('layouts.app')
@section('content')
<div id="appGallery"></div>
@endsection

@extends('layouts.app')
@section('content')
@widget('announce')
<div class="sticky-wrapper">
    <section class="gallery-section">
        <div id="appGallery"></div>
        <div class="background-text">{{ __('Gallery') }}</div>
        <div class="container">
            <div class="row announce mb-5">
                <div class="col col-xl-40 col-xxl-38">
                    <h2 class="h1">{{ __('ONLINE-GALLERY') }}</h2>
                    <div class="sub_h1 d-none d-xl-block">
                        {{ __('A permanent gallery-auction where you can purchase selected works of young Russian authors. Follow, choose, bargain, collect your collection. Weekly update.') }}
                    </div>
                    <a href="/how-to-buy" class="h5 h5_underline d-none d-xl-block pt-4">{{ __('How to buy') }}?</a>
                </div>
            </div>
            <div class="popular-categories">
                <h4 class="h4">{{ __('Popular Categories') }}</h4>
                <div class="d-flex justify-content-between categories">
                    @widget('popular_categories')
                </div>
            </div>
            <div class="gallery-works" id="galleryWorksList">
                <div class="h2">{{ __('Works for sale') }}</div>
                <div class="gallery-works-list">
                    <div class="act-waterfall" data-entity="lots" data-action="add"
                        data-limit='{"xs":12,"sm":12,"md":12,"lg":12,"xl":12,"xxl":12}' data-tizer-view="gallery"
                        data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":3}' data-sidebar='true'
                        data-sortable='true' data-gallery='true'></div>
                </div>
            </div>
        </div>
        <div class="dotted-gallery d-none d-xl-block">
            <div class="dotted-bg"></div>
            <svg viewBox="0 0 683 327" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M341.766 0C82.3241 0 3.25041 175.809 0 183.307L81.5558 218.728C83.1514 215.245 109.391 159.692 184.032 122.5C180.295 136.259 178.407 150.454 178.418 164.71C178.387 186.006 182.558 207.1 190.693 226.784C198.828 246.469 210.767 264.359 225.828 279.431C240.889 294.504 258.776 306.463 278.467 314.625C298.157 322.787 319.265 326.992 340.584 327H342.771C385.749 327.031 426.982 310.018 457.411 279.699C487.84 249.38 504.976 208.234 505.055 165.301C505.089 151.357 503.321 137.467 499.795 123.975C573.254 161.581 600.617 216.367 602.213 219.673L683 182.244C679.631 174.805 595.475 0 341.766 0ZM435.2 239.686H332.015V136.609H435.2V239.686Z">
                </path>
            </svg>
        </div>
    </section>
    <div class="sticky-section"><span>{{ __('works for sale') }}</span></div>
</div>
@widget('marquee')
@endsection