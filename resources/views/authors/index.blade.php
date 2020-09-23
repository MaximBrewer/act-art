@extends('layouts.app')
@section('content')
@widget('announce')


<div class="sticky-wrapper">
    <section class="authors">
        <div class="background-text">{{ __('Authors') }}</div>
        <div class="container">
            <div class="row announce">
                <div class="col-xxl-45 col-xl-40">
                    <h2 class="h2">{{ __('Authors') }}</h2>
                </div>
            </div>
            <div class="announce-slider-wrapper">
                <div class="act-waterfall" data-entity="authors" data-action="add"
                    data-limit='{"xs":24,"sm":24,"md":24,"lg":24,"xl":24,"xxl":24}'
                    data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'
                    data-tizer-view="author"></div>
            </div>
        </div>
    </section>
    <div class="sticky-section"><span>{{ __('authors') }}</span></div>
</div>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>

@widget('marquee')
@endsection