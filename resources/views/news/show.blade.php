@extends('layouts.app')
{{-- @section('title'){{ 'Act-Art.ru | ' }}{!! $post->getTranslatedAttribute('title') !!}@endsection
@section('description'){!! $post->getTranslatedAttribute('meta_description') !!}@endsection
@section('keywords'){!! $post->getTranslatedAttribute('meta_keywords') !!}@endsection --}}
@section('meta_tags')
@if($post)
<title>{{$post->getTranslatedAttribute('title')}}</title>
<meta name='description' itemprop='description' content='{{$post->getTranslatedAttribute('meta_description')}}' />
<meta name='keywords' content='{{$post->getTranslatedAttribute('meta_keywords')}}' />
<meta property='article:published_time' content='{{$post->created_at}}' />
{{-- <meta property='article:section' content='event' /> --}}
<meta property="og:description" content="{{$post->getTranslatedAttribute('meta_description')}}" />
<meta property="og:title" content="{{$post->getTranslatedAttribute('title')}}" />
<meta property="og:url" content="{{url()->current()}}" />
<meta property="og:type" content="article" />
<meta property="og:locale" content="en-us" />
<meta property="og:locale:alternate" content="en-us" />
<meta property="og:site_name" content="{{env('SITE_URL', 'Act-Art.ru')}}" />
{{-- @foreach($obj->images as $image)
            <meta property="og:image" content="{{$image->url}}" />
@endforeach --}}
<meta property="og:image:url" content="/storage/{{$post->image}}" />
<meta property="og:image:size" content="300" />

{{-- <meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="{{$post->getTranslatedAttribute('title')}}" />
<meta name="twitter:site" content="@BrnBhaskar" /> --}}
@endif
@endsection
@section('content')
<section id="page">
    {{-- <div class="background-text">ПРОСТРАНСТВА</div> --}}
    <div class="container">
        <div class="sticky-section"><span>{!! $post->getTranslatedAttribute('title') !!}</span></div>
        <div class="row pb-2 pb-lg-5">
            <div class="col-xl-30 col-xxl-28">
                <h2 class="h2">{!! $post->getTranslatedAttribute('title') !!}</h2>
                <hr>
                <p class="sub_h2 d-none d-xl-block">{!! $post->getTranslatedAttribute('excerpt') !!}</p>
            </div>
            <div class="col-xl-30 col-xxl-32 d-none d-xl-block">
                <div class="image-wrapper" style="background-image: url('/storage/{!! $post->image !!}')"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-60">
                {!! $post->getTranslatedAttribute('body') !!}
            </div>
        </div>
        <hr>
        <div class="sharing">
            <p>{{  __('Liked? Share with your friends!') }}</p>
            <script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
            <script src="https://yastatic.net/share2/share.js"></script>
            <div class="ya-share2"
                data-services="collections,vkontakte,facebook,odnoklassniki,moimir,twitter,blogger,delicious,digg,reddit,evernote,linkedin">
            </div>
        </div>
    </div>
</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>

<section class="blog-section">
    <div class="container">
        <div class="waterfall-wrapper">
            <div class="act-waterfall" data-entity="post" data-action="add" data-preview="waterfall" data-category="blog"
                data-limit=         '{"xs":2,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'
                data-view=          '{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'
                data-first-limit=   '{"xs":2,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}'></div>
        </div>
    </div>
</section>

@widget('marquee')

@endsection