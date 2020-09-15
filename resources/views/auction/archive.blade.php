@extends('layouts.app')
@section('content')
<div class="sticky-wrapper">
    <div class="sticky-section"><span>{{ __('Archive auctions') }}</span></div>
    <section class="auctions-section">
        <div class="container">
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
</div>
@widget('marquee')
@endsection