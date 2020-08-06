@extends('layouts.app')
@section('content')
@widget('announce')

<section class="news-section">
    <div class="background-text">{{ __('НОВОСТИ') }}</div>
    <div class="container">
        <div class="sticky-section"><span>{{ __('новости act•art') }}</span></div>
        <div class="waterfall-wrapper">
            <div class="waterfall" data-entity="post" data-preview="thumbnail" data-category="news" data-count='{"xs":12,"sm":12,"md":12,"xl":12,"lg":12,"xxl":12}' data-view='{"xs":1,"sm":2,"md":2,"lg":4,"xl":4,"xxl":4}' data-first-count='{"xs":4,"sm":2,"md":2,"xl":4,"lg":4,"xxl":4}'></div>
        </div>
    </div>
</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>


<section class="blog-section">
    <div class="background-text">{{ __('БЛОГ') }}</div>
    <div class="container">
        <div class="sticky-section"><span>{{ __('блог act•art') }}</span></div>
        <div class="waterfall-wrapper">
            <div class="waterfall" data-entity="post" data-preview="waterfall" data-category="blog" data-count='{"xs":4,"sm":3,"md":3,"xl":4,"lg":4,"xxl":4}' data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":3}' data-first-count='{"xs":12,"sm":12,"md":12,"xl":12,"lg":12,"xxl":12}'></div>
        </div>
    </div>
</section>
@widget('marquee')
@endsection