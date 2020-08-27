@extends('layouts.app')
@section('content')
<section class="auction-header"
    style="background-image: url({{Voyager::image($auction->thumbnail('big', 'header_image'))}});background-position: top center;">
    <div class="darkener">
        <div class="container">
            <div class="h1">{!! $auction->getTranslatedAttribute('announce_text') !!}</div>
            <div class="button"><a href="/auctions/{{ $auction->id }}/online" class="btn btn-danger btn-lg" type="button">{{ __("ПРИНЯТЬ УЧАСТИЕ") }}</a></div>
            <div class="date">{{ $auction->dateout }}</div>
        </div>
    </div>
</section>


<section class="auction-section">
    <div class="container">
        <div class="sticky-section"><span>{!! $auction->getTranslatedAttribute('title') !!}</span></div>
        <div class="waterfall-wrapper">
            <div class="act-waterfall" data-entity="post" data-action="add" data-preview="waterfall" data-category="blog"
                data-limit='{"xs":4,"sm":3,"md":3,"xl":4,"lg":4,"xxl":4}'
                data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":3}'
                data-first-limit='{"xs":3,"sm":3,"md":3,"xl":3,"lg":3,"xxl":3}'></div>
        </div>
    </div>
</section>
@endsection