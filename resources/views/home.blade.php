@extends('layouts.app')
@section('body-class')class="home"@endsection
@section('title'){{ __('Act-Art.ru | online auction of contemporary art') }}@endsection
@section('content')
<div class="sticky-wrapper">
    <section class="home-banner">
        <div class="container">
            <div class="h5 d-xl-none">{{ __('Auctions') }}</div>
            <div id="actAuctions" class="carousel"></div>
        </div>
    </section>
    <div class="sticky-section"><span>{{ __('closest auctions') }}</span></div>
</div>
@widget('marquee')
<section class="gallery-section">
    <div class="sticky-wrapper">
        <div class="container">
            <div class="row announce">
                <div class="col col-md-40 offset-md-20 col-xl-45 offset-xl-15">
                    <h2 class="h1">{{ __('ONLINE-GALLERY') }}</h2>
                    <div class="sub_h2 d-none d-xl-block">
                        {{ __('Постоянно действующая галерея-аукцион в которой вы можете приобрести избранные работы молодых российских авторов. Следите, выбирайте, торгуйтесь, собирайте свою коллекцию. Еженедельное обновление. Постоянно действующая галерея-аукцион в которой вы можете приобрести избранные работы молодых российских авторов. Следите, выбирайте, торгуйтесь, собирайте свою коллекцию. Еженедельное обновление.') }}
                    </div>
                    <a href="/how-to-buy" class="link-how-to-buy">{{ __('How to buy') }}?</a>
                </div>
            </div>
            <div class="art-waterfall-wrapper">
                <h3 class="d-none d-md-block pb-4">
                    {{ __("Latest bids") }}:
                    <svg class="hummer" width="42" height="42" viewBox="0 0 42 42" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="25.1066" width="23.6707" height="11.8354" rx="1" transform="rotate(45 25.1066 0)"
                            fill="#FF665E" />
                        <rect x="21.7591" y="16.7378" width="4.73415" height="18.9366"
                            transform="rotate(45 21.7591 16.7378)" fill="#FF665E" />
                    </svg>
                </h3>
                <div class="act-waterfall" data-entity="lots" data-action="none" data-preview="preview"
                    data-lastbets="true" data-limit='{"xs":12,"sm":12,"md":12,"lg":12,"xl":12,"xxl":12}'
                    data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'>
                </div>
                <div class="show-more">
                    <div class="dots">•••</div>
                    <a href="/gallery" class="text">{{ __('Show more') }}</a>
                </div>
            </div>
        </div>
        <div class="sticky-section"><span>{{ __('works for sale') }}</span></div>
    </div>
</section>
<section class="d-none d-md-block popular-categories-section">
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
</section>

<section id="homeAbout">
    <div class="background-text">
        @include('svg.home.about-logo')
    </div>
    <div class="sticky-wrapper">
        <div class="dotted-bg"></div>
        <div class="background-logo">
            @include('svg.home.about-bg-logo')
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-20">
                </div>
                <div class="col-xl-40">
                    <h2 class="h2">{{ __('О ПЛАТФОРМЕ') }}</h2>
                    <hr>
                    <p class="sub_h2">Платформа Act-Art – независимый социально-ориентированный коммерческий проект.
                        Наша
                        цель – популяризация современного российского искуства в России и мире. Мы помогаем молодым и
                        именитым авторам найти своего зрителя и ценителя, делая процесс приобретения произведений
                        максимально удобным и демократичным.</p>
                    <p class="sub_h2">Являясь куратором возрождённого легендарного творческого объединения
                        “ВсекоХудожник”,
                        платформа Аct-Art эксклюзивно представляет лучшие работы его авторов. Часть вырученных на
                        аукционах
                        средств идёт на обеспечение и развитие мастерских, выставок, поддержку творческих проектов,
                        образовательные инициативы для горожан.</p>
                    <ul class="list-unstyled d-md-flex justify-content-between">
                        <li class="h5 h5_underline"><a href="/about">Подробнее о&nbsp;платформе</a></li>
                        <li class="h5 h5_underline"><a href="/spaces#exhibitions">Выставочные пространства</a></li>
                        <li class="h5 h5_underline"><a href="/spaces#workshops">Мастерские «ВсекоХудожник»</a></li>
                    </ul>
                </div>
            </div>
            <div class="rolling-strings d-none">
                <div class="row">
                    <div class="col col-md-50 align-self-end">
                        <div class="d-flex" style="transform:translateX(40%)">
                            <div class="h7">образование</div>
                            <div class="h7">поддержка</div>
                            <div class="h7">поддержка</div>
                        </div>
                        <div class="d-flex" style="transform:translateX(30%)">
                            <div class="h7">искусство</div>
                            <div class="h7">ОБЩЕСТВО</div>
                            <div class="h7">словослово</div>
                        </div>
                        <div class="d-flex" style="transform:translateX(55%)">
                            <div class="h7">ОТВЕТСТВЕННОСТЬ</div>
                            <div class="h7">просвещение</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-section"><span>{{ __('о проекте') }}</span></div>
    </div>
</section>

@widget('marquee')


<section id="announces">
    <div class="sticky-wrapper">
        <div class="container">
            <div class="row announce">
                <div class="col-xl-40 col-xxl-38">
                    <h2 class="h2">ВЫСТАВКИ <span>и</span>&nbsp;МАСТЕРСКИЕ</h2>
                    <p class="sub_h2 d-none d-xl-block">Платформа Акт-Арт представляет три творческих кластера с
                        собственными творческими
                        мастерскими и выставочными галереями.
                        Все кластеры находятся в историческом центре Москвы и далее какой-то текст.</p>
                    <p class="sub_h2 d-none d-xl-block">Все кластеры находятся в историческом центре Москвы и далее
                        какой-то
                        текст. Все
                        кластеры находятся в историческом центре Москвы и далее какой-то текст.</p>
                </div>
                <div class="col-xl-20 col-xxl-22 d-none d-xl-block">
                    <h3 class="h3">Адреса:</h3>
                    <dl>
                        <dt>Акт-Арт Фрунзенская</dt>
                        <dd>Фрунзенская набережная, 1</dd>
                        <dt>Акт-Арт Пречистенка</dt>
                        <dd>Пречистенка, 24</dd>
                        <dt>Акт-Арт Солянка</dt>
                        <dd>Пречистенка, 24</dd>
                    </dl>
                </div>
            </div>
            <div class="announce-slider-wrapper">
                <div class="announce-slider" id="announceSlider"></div>
            </div>
        </div>
        <div class="sticky-section"><span>анонсы мероприятий</span></div>
    </div>
</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>


<section id="news">
    <div class="background-text">НОВОСТИ</div>
    <div class="sticky-wrapper">
        <div class="container">
            <div class="h5 d-xl-none">БЛОГ И НОВОСТИ</div>
            <div class="news-slider-wrapper">
                <div class="news-slider" id="newsSlider"></div>
            </div>
        </div>
        <div class="sticky-section"><span>последние заметки</span></div>
    </div>
</section>


<section id="experts" class="d-none d-sm-none d-md-block">
    <div class="sticky-wrapper">
        <div class="container">
            <h2 class="h2">ЭКСПЕРТНЫЙ СОВЕТ</h2>
            <div class="experts-slider-wrapper">
                <div class="experts-slider" id="expertsSlider"></div>
            </div>
        </div>
        <div class="sticky-section"><span>экспертный совет</span></div>
    </div>
</section>


@widget('marquee')
@endsection