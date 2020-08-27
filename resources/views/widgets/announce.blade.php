@if($auction)
<section class="auction-announce"
    style="background-image: url({{Voyager::image($auction->thumbnail('narrow', 'header_image'))}});background-position: top center;">
    <div class="darkener">
        <div class="container">
            <div class="h1">{!! $auction->getTranslatedAttribute('announce_text') !!}</div>
            <div class="h3">{{ $auction->dateout }} &nbsp;&nbsp;&nbsp;
                <a href="/auctions/{{ $auction->id }}" class="btn btn-default-inverse">{{ __('подробнее') }}</a></div>
        </div>
    </div>
</section>
@endif