@extends('layouts.app')
@section('content')
@widget('announce')

<section class="news-section">
    <div class="background-text">{{ __('NEWS') }}</div>
    <div class="container">
        <div class="sticky-section"><span>{{ __('act•art news') }}</span></div>
        <div class="waterfall-wrapper">
            <div class="waterfall" data-entity="post" data-action="add" data-preview="thumbnail" data-category="news" data-limit='{"xs":12,"sm":12,"md":12,"xl":12,"lg":12,"xxl":12}' data-view='{"xs":1,"sm":2,"md":2,"lg":4,"xl":4,"xxl":4}' data-first-limit='{"xs":12,"sm":12,"md":12,"xl":12,"lg":12,"xxl":12}'></div>
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
            <div class="waterfall" data-entity="post" data-action="go" data-preview="waterfall" data-category="blog" data-limit='{"xs":4,"sm":3,"md":3,"xl":4,"lg":4,"xxl":4}' data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":3}' data-first-limit='{"xs":3,"sm":3,"md":3,"xl":3,"lg":3,"xxl":3}'></div>
        </div>
    </div>
</section>
@widget('marquee')
@endsection