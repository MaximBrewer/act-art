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
    <div class="background-text">Галерея</div>
    <div class="container">
        <div class="sticky-section"><span>работы в продаже</span></div>
        <div class="row announce">
            <div class="col col-xl-40 col-xxl-38">
                <h2 class="h2">ОНЛАЙН-ГАЛЕРЕЯ</h2>
                <div class="sub_h1">Постоянно действующая галерея-аукцион в которой вы можете приобрести избранные
                    работы молодых российских авторов. Следите, выбирайте, торгуйтесь, собирайте свою коллекцию.
                    Еженедельное обновление.</div><br><br>
                <a href="#" class="h5 h5_underline">Как купить?</a>
            </div>
        </div>
        <div class="art-waterfall-wrapper">
            <div class="art-waterfall" id="artWaterfall"></div>
        </div>
    </div>
    <div class="dotted-gallery">
        <div class="dotted-bg"></div>
        <svg width="683" height="327" viewBox="0 0 683 327" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M341.766 0C82.3241 0 3.25041 175.809 0 183.307L81.5558 218.728C83.1514 215.245 109.391 159.692 184.032 122.5C180.295 136.259 178.407 150.454 178.418 164.71C178.387 186.006 182.558 207.1 190.693 226.784C198.828 246.469 210.767 264.359 225.828 279.431C240.889 294.504 258.776 306.463 278.467 314.625C298.157 322.787 319.265 326.992 340.584 327H342.771C385.749 327.031 426.982 310.018 457.411 279.699C487.84 249.38 504.976 208.234 505.055 165.301C505.089 151.357 503.321 137.467 499.795 123.975C573.254 161.581 600.617 216.367 602.213 219.673L683 182.244C679.631 174.805 595.475 0 341.766 0ZM435.2 239.686H332.015V136.609H435.2V239.686Z"
                fill="white" />
        </svg>


    </div>

</section>
@widget('marquee')
@endsection