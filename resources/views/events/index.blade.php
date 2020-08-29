@extends('layouts.app')
@section('content')
@widget('announce')


<section class="announces" id="exhibitions">
    <div class="background-text">{{ __('Exhibitions') }}</div>
    <div class="container">
        <div class="sticky-section"><span>{{ __('event announcements') }}</span></div>
        <div class="row announce">
            <div class="col-xxl-45 col-xl-40">
                <h2 class="h2">{{ __('EXHIBITIONS') }}</h2>
                <p class="sub_h2 d-none d-xl-block">
                    {{ __('Платформа Акт-Арт представляет три творческих кластера с собственными творческими мастерскими и выставочными галереями. Все кластеры находятся в историческом центре Москвы и далее какой-то текст.') }}
                </p>
                <p class="sub_h2 d-none d-xl-block">
                    {{ __('Все кластеры находятся в историческом центре Москвы и далее какой-то текст. Все кластеры находятся в историческом центре Москвы и далее какой-то текст.') }}
                </p>
            </div>
            <div class="col-xxl-15 col-xl-20 d-none d-xl-block">
                <h3 class="h3">{{ __('Addresses:') }}</h3>
                <dl>
                    @foreach($spaces as $space)
                    @php
                    if($space->type != 'exhibition') continue;
                    @endphp
                    <dt>{{ $space->getTranslatedAttribute('title') }}</dt>
                    <dd>{{ $space->getTranslatedAttribute('address') }}</dd>
                    @endforeach
                </dl>
            </div>
        </div>
        <div class="announce-slider-wrapper">
            <div class="act-waterfall" data-entity="events" data-action="add" data-preview="preview"
                data-category="exhibition" data-limit='{"xs":4,"sm":4,"md":4,"lg":6,"xl":6,"xxl":8}'
                data-view='{"xs":1,"sm":2,"md":2,"lg":6,"xl":3,"xxl":4}'
                data-first-limit='{"xs":4,"sm":4,"md":4,"lg":6,"xl":6,"xxl":8}'></div>
        </div>
    </div>
</section>

<section class="announces bggray" id="workshops">
    <div class="background-text">{{ __('Workshops') }}</div>
    <div class="container">
        <div class="sticky-section"><span>{{ __('event announcements') }}</span></div>
        <div class="row announce">
            <div class="col-xxl-45 col-xl-40">
                <h2 class="h2">{{ __('Workshops') }}</h2>
                <p class="sub_h2 d-none d-xl-block">
                    {{ __('Платформа Акт-Арт представляет три творческих кластера с собственными творческими мастерскими и выставочными галереями. Все кластеры находятся в историческом центре Москвы и далее какой-то текст.') }}
                </p>
                <p class="sub_h2 d-none d-xl-block">
                    {{ __('Все кластеры находятся в историческом центре Москвы и далее какой-то текст. Все кластеры находятся в историческом центре Москвы и далее какой-то текст.') }}
                </p>
            </div>
            <div class="col-xxl-15 col-xl-20 d-none d-xl-block">
                <h3 class="h3">{{ __('Addresses:') }}</h3>
                <dl>
                    @foreach($spaces as $space)
                    @php
                    if($space->type != 'workshop') continue;
                    @endphp
                    <dt>{{ $space->getTranslatedAttribute('title') }}</dt>
                    <dd>{{ $space->getTranslatedAttribute('address') }}</dd>
                    @endforeach
                </dl>
            </div>
        </div>
        <div class="announce-slider-wrapper">
            <div class="act-waterfall" data-entity="events" data-action="add" data-preview="preview" data-category="workshop"
                data-limit='{"xs":4,"sm":4,"md":4,"lg":6,"xl":6,"xxl":8}'
                data-view='{"xs":1,"sm":2,"md":2,"lg":6,"xl":3,"xxl":4}'
                data-first-limit='{"xs":4,"sm":4,"md":4,"lg":6,"xl":6,"xxl":8}'></div>
        </div>
    </div>
</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>


<section class="blog-section">
    <div class="background-text">{{ __('BLOG') }}</div>
    <div class="container">
        <div class="sticky-section"><span>{{ __('act•art blog') }}</span></div>
        <div class="waterfall-wrapper">
            <div class="act-waterfall" data-entity="post" data-action="go" data-preview="waterfall" data-category="blog"
                data-limit=         '{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":3}'
                data-view=          '{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":3}'
                data-first-limit=   '{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":3}'></div>
        </div>
    </div>
</section>
@widget('marquee')
@endsection