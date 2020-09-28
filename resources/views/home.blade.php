@extends('layouts.app')
@section('body-class')class="home"@endsection
@section('title'){{ __('HOME_TITLE') }}@endsection
@section('content')
<section class="home-banner">
    <div class="sticky-wrapper">
        <div class="container">
            <div class="h5 d-xl-none">{{ __('AUCTIONS_BLOCK_TITLE') }}</div>
            <div id="actAuctions" class="carousel"></div>
        </div>
        <div class="sticky-section"><span>{{ __('AUCTIONS_BLOCK_STICKY') }}</span></div>
    </div>
</section>
@widget('marquee')
<section class="gallery-section">
    <div class="sticky-wrapper">
        <div class="container">
            <div class="row announce">
                <div class="col col-md-40 offset-md-20 col-xl-45 offset-xl-15">
                    <h2 class="h1">{{ __('GALLERY_BLOCK_TITLE') }}</h2>
                    <div class="sub_h2 d-none d-xl-block">
                        {{ __('GALLERY_BLOCK_INTROTEXT') }}
                    </div>
                    <a href="/how-to-buy" class="link-how-to-buy">{{ __('GALLERY_BLOCK_HOW_TO_BUY_LINK') }}?</a>
                </div>
            </div>
            <div class="art-waterfall-wrapper">
                <h3 class="d-none d-md-block pb-4">
                    {{ __("GALLERY_BLOCK_LATEST_BIDS") }}:
                    <svg class="hummer" width="42" height="42" viewBox="0 0 42 42" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="25.1066" width="23.6707" height="11.8354" rx="1" transform="rotate(45 25.1066 0)"
                            fill="#FF665E" />
                        <rect x="21.7591" y="16.7378" width="4.73415" height="18.9366"
                            transform="rotate(45 21.7591 16.7378)" fill="#FF665E" />
                    </svg>
                </h3>
                <div class="act-waterfall" data-entity="lots" data-action="none" data-lastbets="true"
                    data-limit='{"xs":6,"sm":6,"md":12,"lg":12,"xl":24,"xxl":24}'
                    data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}' data-tizer-view="lastbets">
                </div>
                <div class="show-more">
                    <div class="dots">•••</div>
                    <a href="/gallery" class="text">{{ __('GALLERY_BLOCK_SHOW_MORE_LINK') }}</a>
                </div>
            </div>
        </div>
        <div class="sticky-section"><span>{{ __('GALLERY_BLOCK_STICKY') }}</span></div>
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
                <div class="announce-slider act-carousel" id="announceSlider" data-entity="events"
                    data-limit='{"xs":4,"sm":4,"md":4,"lg":12,"xl":24,"xxl":24}'
                    data-view='{"xs":1,"sm":1,"md":2,"lg":3,"xl":4,"xxl":4}'
                    data-scroll='{"xs":1,"sm":1,"md":2,"lg":3,"xl":4,"xxl":4}' data-tizer-view="event"
                    data-min-view="md"></div>
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
                <div class="news-slider act-carousel" id="newsSlider" data-entity="posts"
                    data-limit='{"xs":6,"sm":6,"md":12,"lg":12,"xl":24,"xxl":24}'
                    data-view='{"xs":1,"sm":1,"md":3,"lg":3,"xl":4,"xxl":4}'
                    data-scroll='{"xs":1,"sm":1,"md":3,"lg":3,"xl":4,"xxl":4}' data-tizer-view="post"
                    data-min-view="sm"></div>
            </div>
        </div>
        <div class="sticky-section"><span>последние заметки</span></div>
    </div>
</section>


<section id="experts" class="d-none d-sm-none d-md-block">
    <div>
        <div class="sticky-wrapper">
            <div class="container">
                <h2 class="h2">ЭКСПЕРТНЫЙ СОВЕТ</h2>
                <div class="experts-slider-wrapper">
                    <div class="experts-slider act-carousel" id="expertsSlider" data-entity="experts"
                        data-limit='{"xs":96,"sm":96,"md":96,"lg":96,"xl":96,"xxl":96}'
                        data-view='{"xs":1,"sm":1,"md":3,"lg":4,"xl":6,"xxl":6}'
                        data-scroll='{"xs":1,"sm":1,"md":3,"lg":4,"xl":6,"xxl":6}' data-tizer-view="expert"
                        data-min-view="sm"></div>
                </div>
            </div>
            <div class="sticky-section"><span>экспертный совет</span></div>
        </div>
    </div>
</section>

<section class="mb-5">
    <div class="container mb-5">
        <div class="footer-buttons">
            <a href="/auctions" class="btn btn-default">
                {{ __("Смотреть аукционы") }}
            </a>
            <a href="/gallery" class="btn btn-primary">
                {{ __("To Gallery") }}
            </a>
        </div>
    </div>
</section>

@widget('marquee')
@endsection