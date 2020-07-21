@extends('layouts.app')
@section('content')
@widget('announce')

<section id="news">
    <div class="background-text">НОВОСТИ</div>
    <div class="container">
        <div class="sticky-section"><span>последние заметки</span></div>
        <div class="news-slider-wrapper">
            <div class="news-slider" id="newsSlider"></div>
        </div>
    </div>
</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>


<section id="art">
    <div class="background-text">БЛОГ</div>
    <div class="container">
        <div class="sticky-section"><span>блог</span></div>
        <div class="art-waterfall-wrapper">
            <div class="art-waterfall" id="artWaterfall"></div>
        </div>
    </div>
</section>
@widget('marquee')
@endsection