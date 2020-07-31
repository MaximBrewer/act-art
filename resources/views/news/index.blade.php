@extends('layouts.app')
@section('content')
@widget('announce')

<section id="news">
    <div class="background-text">{{ __('НОВОСТИ') }}</div>
    <div class="container">
        <div class="sticky-section"><span>{{ __('новости act•art') }}</span></div>
        <div class="news-slider-wrapper">
            <div class="news-slider" id="newsSlider" data-category="news"></div>
        </div>
    </div>
</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>


<section class="waterfall-section">
    <div class="background-text">{{ __('БЛОГ') }}</div>
    <div class="container">
        <div class="sticky-section"><span>{{ __('блог act•art') }}</span></div>
        <div class="waterfall-wrapper">
            <div class="waterfall" data-entity="post" data-category="blog" data-count="9" data-type="blog"></div>
        </div>
    </div>
</section>
@widget('marquee')
@endsection