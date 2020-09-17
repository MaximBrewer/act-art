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
                <div class="act-waterfall" data-entity="authors" data-action="add" data-preview="preview"
                    data-limit='{"xs":4,"sm":4,"md":4,"lg":6,"xl":6,"xxl":8}'
                    data-view='{"xs":1,"sm":2,"md":2,"lg":6,"xl":3,"xxl":4}'
                    data-first-limit='{"xs":4,"sm":4,"md":4,"lg":6,"xl":6,"xxl":8}'></div>
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