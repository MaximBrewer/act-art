@extends('layouts.app')

@section('body-class')class="home"@endsection
@section('title'){{ __('Act-Art.ru | онлайн-аукцион современного искусства') }}@endsection

@section('content')
<section class="home-banner">
    <div class="background-text d-none d-xl-block">{{ __('АУКЦИОНЫ') }}</div>
    <div class="container">
        <div class="h5 d-xl-none">{{ __('АУКЦИОНЫ') }}</div>
        <div class="sticky-section d-none d-xl-flex"><span>{{ __('ближайшие аукционы') }}</span></div>
        <div id="bannerCarousel" class="carousel"></div>
    </div>
</section>


<section id="art">
    <div class="background-text d-none d-xl-block">{{ __('Галерея') }}</div>
    <div class="container">
        <div class="sticky-section d-none d-xl-flex"><span>{{ __('работы в продаже') }}</span></div>
        <div class="row announce">
            <div class="col col-xl-40 col-xxl-38">
                <h2 class="h2">{{ __('ОНЛАЙН-ГАЛЕРЕЯ') }}</h2>
                <div class="sub_h1 d-none d-xl-block">{{ __('Постоянно действующая галерея-аукцион в которой вы можете приобрести избранные работы молодых российских авторов. Следите, выбирайте, торгуйтесь, собирайте свою коллекцию. Еженедельное обновление.') }}</div>
                <a href="/how-to-buy" class="h5 h5_underline d-none d-xl-block">{{ __('Как купить?') }}</a>
            </div>
        </div>
        <div class="art-waterfall-wrapper">
            <div class="art-waterfall" id="artWaterfall"></div>
        </div>
    </div>
    <div class="dotted-gallery d-none d-xl-block">
        <div class="dotted-bg"></div>
        @include('svg.home.art-logo')
    </div>
</section>


<section id="popularCategories" class="d-none d-sm-none d-md-block">
    <div class="pt-5 mb-5">
        <div class="container">
            <h3 class="py-4">{{ __('Популярные категории') }}</h3>
            <div class="py-4 d-flex justify-content-between categories">
                @foreach($categories as $category)
                <a href="/gallery/category/{{ $category->id }}" class="text-decoration-none d-flex justify-content-center align-items-center"
                    style="background-image: url('{{ Voyager::image($category->thumbnail('preview', 'image')) }}')">
                    <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">{{ $category->getTranslatedAttribute('title') }}</p>
                </a>
                @endforeach
            </div>
            <div class="d-flex mt-5 justify-content-center align-items-end">
                <a href="/gallery" class="btn btn-xl btn-primary">{{ __('СМОТРЕТЬ ВСЕ РАБОТЫ') }}</a>
            </div>
        </div>
    </div>
</section>

<section id="homeAbout">
    <div class="dotted-bg"></div>
    <div class="background-text d-none d-xl-block">
        @include('svg.home.about-logo')
    </div>
    <div class="background-logo">
        @include('svg.home.about-bg-logo')
    </div>
    <div class="container">
        <div class="sticky-section d-none d-xl-flex"><span>о проекте</span></div>
        <div class="row">
            <div class="col-xl-20">
            </div>
            <div class="col-xl-40">
                <h2 class="h2">ПЛАТФОРМА<span class="d-xl-none"> ACT•ART</h2>
                <hr>
                <p class="sub_h2">Платформа Act-Art – независимый социально-ориентированный коммерческий проект. Наша
                    цель – популяризация современного российского искуства в России и мире. Мы помогаем молодым и
                    именитым авторам найти своего зрителя и ценителя, делая процесс приобретения произведений
                    максимально удобным и демократичным.</p>
                <p class="sub_h2">Являясь куратором возрождённого легендарного творческого объединения “ВсекоХудожник”,
                    платформа Аct-Art эксклюзивно представляет лучшие работы его авторов. Часть вырученных на аукционах
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
</section>

@widget('marquee')


<section id="announces">
    <div class="background-text d-none d-xl-block">ПРОСТРАНСТВА</div>
    <div class="container">
        <div class="sticky-section d-none d-xl-flex"><span>анонсы мероприятий</span></div>
        <div class="row announce">
            <div class="col-xl-40 col-xxl-38">
                <h2 class="h2">ВЫСТАВКИ <span>и</span>&nbsp;МАСТЕРСКИЕ</h2>
                <p class="sub_h2 d-none d-xl-block">Платформа Акт-Арт представляет три творческих кластера с
                    собственными творческими
                    мастерскими и выставочными галереями.
                    Все кластеры находятся в историческом центре Москвы и далее какой-то текст.</p>
                <p class="sub_h2 d-none d-xl-block">Все кластеры находятся в историческом центре Москвы и далее какой-то
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
</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>


<section id="news">
    <div class="background-text d-none d-xl-block">НОВОСТИ</div>
    <div class="container">
        <div class="h5 d-xl-none">БЛОГ И НОВОСТИ</div>
        <div class="sticky-section d-none d-xl-flex"><span>последние заметки</span></div>
        <div class="news-slider-wrapper">
            <div class="news-slider" id="newsSlider"></div>
        </div>
    </div>
</section>


<section id="experts" class="d-none d-sm-none d-md-block">
    <div class="container">
        <div class="sticky-section d-none d-xl-flex"><span>экспертный совет</span></div>
        <h2 class="h2">ЭКСПЕРТНЫЙ СОВЕТ</h2>
        <div class="experts-slider-wrapper">
            <div class="experts-slider" id="expertsSlider"></div>
        </div>
    </div>
</section>


@widget('marquee')
@endsection