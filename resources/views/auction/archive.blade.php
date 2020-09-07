@extends('layouts.app')
@section('content')
<section class="auctions-section">
    <div class="container">
        <div class="sticky-section"><span>{{ __('Archive auctions') }}</span></div>
        <div class="row announce mb-5">
            <div class="col col-xl-40 col-xxl-38">
                <h2 class="h1">{{ __('Archive of auctions') }}</h2>
                <div class="sub_h1 d-none d-xl-block">
                    {{ __('Permanent exhibition and sale of works by young authors, on the auction platform. Follow, choose, bargain, collect your collection. Weekly update.') }}
                </div>
            </div>
        </div>
        <div class="act-auctions-list" data-archive="true"></div>
    </div>
</section>
{{-- <section class="auctions-section">
    <div class="container">
        <div class="row announce">
            <div class="col col-xl-40 col-xxl-38">
            </div>
            <div class="col col-xl-20 col-xxl-22 text-center">
                <a href="/auctions/archive" class="btn btn-default">{{ __('ARCHIVE OF AUCTIONS') }}</a>
            </div>
        </div>
    </div>
</section> --}}
{{-- <section class="subscribe-section">
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
            @widget('popular_categories')
        </div>
    </div>
</section> --}}
@widget('marquee')
@endsection