@extends('layouts.app')
@section('content')
@widget('announce')
<div class="sticky-wrapper">
    <section class="blog-section">
        <div class="background-text">{{ __('BLOG') }}</div>
        <div class="container">
            <div class="waterfall-wrapper">
                <div class="act-waterfall" data-entity="post" data-action="add" data-preview="waterfall"
                    data-category="blog" data-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}'
                    data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'
                    data-first-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}'></div>
            </div>
        </div>
    </section>
    <div class="sticky-section"><span>{{ __('act•art blog') }}</span></div>
</div>
@widget('marquee')
@endsection