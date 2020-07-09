@extends('layouts.app')
@section('content')
<section id="auctionPreview" class="auction-preview" style="background-image: url('/storage/template/img/banner.jpg');background-position: top center;">
    <div class="container">
        <div class="h1">ВОЗМОЖНОСТЬ ВЫБРАТЬ АНОНС аукциона</div>
        <div class="h3">26 мюля 2020 г.  15:00 &nbsp;&nbsp;&nbsp;<a href="#" class="btn btn-default-inverse">подробнее</a></div>
    </div>
</section>

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