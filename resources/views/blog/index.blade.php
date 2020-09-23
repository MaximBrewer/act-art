@extends('layouts.app')
@section('content')
@widget('announce')
<section class="blog-section">
    <div class="background-text">{{ __('BLOG') }}</div>
    <div class="sticky-wrapper">
        <div class="container">
            <div class="waterfall-wrapper">
                <div class="act-waterfall" data-entity="post" data-action="add" data-category="blog"
                    data-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}'
                    data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'
                    data-first-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}' data-tizer-view="news"></div>
            </div>
        </div>
        <div class="sticky-section"><span>{{ __('act•art blog') }}</span></div>
    </div>
</section>
@widget('marquee')
@endsection