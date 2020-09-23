@extends('layouts.app')
@section('content')
@widget('announce')

<section class="news-section">
    <div class="background-text">{{ __('NEWS') }}</div>
    <div class="sticky-wrapper">
        <div class="container">
            <div class="waterfall-wrapper">
                <div class="act-waterfall" data-entity="post" data-action="add" data-category="news"
                    data-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}'
                    data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'
                    data-first-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}' data-tizer-view="news"></div>
            </div>
        </div>
        <div class="sticky-section"><span>{{ __('act•art news') }}</span></div>
    </div>
</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>


<section class="blog-section">
    <div class="background-text">{{ __('BLOG') }}</div>
    <div class="sticky-wrapper">
        <div class="container">
            <div class="waterfall-wrapper">
                <div class="act-waterfall" data-entity="post" data-action="none" data-category="blog"
                    data-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}'
                    data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'
                    data-first-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}' data-tizer-view="blog"></div>
            </div>
        </div>
        <div class="sticky-section"><span>{{ __('act•art blog') }}</span></div>
    </div>
</section>
@widget('marquee')
@endsection