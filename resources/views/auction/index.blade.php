@extends('layouts.app')
@section('content')
<section class="auctions-section regular-list" id="regularAuctionsList">
    <div class="container">
        <div class="sticky-section"><span>{{ __('regular auctions') }}</span></div>
        <div class="row announce mb-5">
            <div class="col col-xl-40 col-xxl-38">
                <h2 class="h1">{{ __('Regular auctions') }}</h2>
                <div class="sub_h1 d-none d-xl-block">
                    {{ __('Permanent exhibition and sale of works by young authors, on the auction platform. Follow, choose, bargain, collect your collection. Weekly update.') }}
                </div>
            </div>
            <div class="col col-xl-20 col-xxl-22 d-none d-xl-block">
                <a class="see-other" href="#" onclick="scrollToElement(this);return false;"
                    data-id="specialAuctionsList">
                    <div class="text-14">{{  __("see also:") }}</div>
                    <div class="h5">{{  __('Themed auctions') }}</div>
                    <svg viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 17.8378L18 32.4324L33 17.8378" stroke="white" stroke-width="8" />
                        <path d="M17.5947 30.8108L17.5947 -2.2471e-05" stroke="white" stroke-width="8" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="act-auctions-list" data-attr="regular"></div>
    </div>
</section>
<section class="auctions-section special-list" id="specialAuctionsList">
    <div class="container">
        <div class="sticky-section"><span>{{ __('themed auctions') }}</span></div>
        <div class="row announce mb-5">
            <div class="col col-xl-40 col-xxl-38">
                <h2 class="h1">{{ __('Themed auctions') }}</h2>
                <div class="sub_h1 d-none d-xl-block">
                    {{ __('Permanent exhibition and sale of works by young authors, on the auction platform. Follow, choose, bargain, collect your collection. Weekly update.') }}
                </div>
            </div>
            <div class="col col-xl-20 col-xxl-22 d-none d-xl-block">
                <a class="see-other" href="#" onclick="scrollToElement(this);return false;"
                    data-id="regularAuctionsList">
                    <div class="text-14">{{  __("see also:") }}</div>
                    <div class="h5">{{  __('Regular auctions') }}</div>
                    <svg viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33 20.5946L18 6L3 20.5946" stroke="white" stroke-width="8" />
                        <path d="M18.4053 7.62158L18.4053 38.4324" stroke="white" stroke-width="8" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="act-auctions-list" data-attr="special"></div>
    </div>
</section>
<section class="auctions-section">
    <div class="container">
        <div class="row announce">
            <div class="col col-xl-40 col-xxl-38">
            </div>
            <div class="col col-xl-20 col-xxl-22 text-center">
                <a href="/auctions/archive" class="btn btn-default">{{ __('ARCHIVE OF AUCTIONS') }}</a>
            </div>
        </div>
    </div>
</section>
<section class="subscribe-section">
    <div class="container">
        <div class="row announce justify-content-center">
            <div class="col col-xl-40">
                <div class="text-center">
                    @widget('subscribe')
                </div>
            </div>
        </div>
    </div>
</section>
<section class="auctions-section d-none d-md-block">
    <div class="container">
        <div class="row announce justify-content-center">
            <div class="col col-xl-40">
                <div class="text-center sub_h1">
                    {{ __('You can also purchase selected works by contemporary Russian authors in our permanent online gallery.') }}
                </div>
            </div>
        </div>
    </div>
</section>
<section class="d-none d-md-block popular-categories-section">
    <div class="pt-5 mb-5">
        <div class="container">
            <div class="popular-categories">
                <h4 class="h4">{{ __('Popular Categories') }}</h4>
                <div class="d-flex justify-content-between categories">
                    @widget('popular_categories')
                </div>
                <div class="d-flex justify-content-center align-items-end">
                    <a href="/gallery" class="btn btn-default">{{ __('VIEW ALL WORKS') }}</a>
                </div>
            </div>
        </div>
    </div>
</section>
@widget('marquee')
@endsection