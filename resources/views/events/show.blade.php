@extends('layouts.app')
{{-- @section('title'){{ 'Act-Art.ru | ' }}{!! $event->getTranslatedAttribute('title') !!}@endsection
@section('description'){!! $event->getTranslatedAttribute('meta_description') !!}@endsection
@section('keywords'){!! $event->getTranslatedAttribute('meta_keywords') !!}@endsection --}}
@section('meta_tags')
@if($event)
<title>{{$event->getTranslatedAttribute('title')}}</title>
<meta name='description' itemprop='description' content='{{$event->getTranslatedAttribute('meta_description')}}' />
<meta name='keywords' content='{{$event->getTranslatedAttribute('meta_keywords')}}' />
<meta property='article:published_time' content='{{$event->created_at}}' />
{{-- <meta property='article:section' content='event' /> --}}
<meta property="og:description" content="{{$event->getTranslatedAttribute('meta_description')}}" />
<meta property="og:title" content="{{$event->getTranslatedAttribute('title')}}" />
<meta property="og:url" content="{{url()->current()}}" />
<meta property="og:type" content="article" />
<meta property="og:locale" content="en-us" />
<meta property="og:locale:alternate" content="en-us" />
<meta property="og:site_name" content="{{env('SITE_URL', 'Act-Art.ru')}}" />
{{-- @foreach($obj->images as $image)
            <meta property="og:image" content="{{$image->url}}" />
@endforeach --}}
<meta property="og:image:url" content="/storage/{{$event->image}}" />
<meta property="og:image:size" content="300" />

{{-- <meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="{{$event->getTranslatedAttribute('title')}}" />
<meta name="twitter:site" content="@BrnBhaskar" /> --}}
@endif
@endsection
@section('content')
<div class="sticky-wrapper">
    <section id="page">
        {{-- <div class="background-text">ПРОСТРАНСТВА</div> --}}
        <div class="container">
            <div class="row pb-2 pb-lg-5">
                <div class="col-xl-30 col-xxl-28">
                    <h2 class="h2">{!! $event->getTranslatedAttribute('title') !!}</h2>
                    <hr>
                    <p class="sub_h2 d-none d-xl-block">{!! $event->getTranslatedAttribute('excerpt') !!}</p>
                </div>
                <div class="col-xl-30 col-xxl-32 d-none d-xl-block">
                    <div class="image-wrapper" style="background-image: url('/storage/{!! $event->image !!}')"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-60">
                    {!! $event->getTranslatedAttribute('body') !!}
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
    <div class="sticky-section"><span>{!! $event->getTranslatedAttribute('title') !!}</span></div>
</div>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>

<section class="announces">
    <div class="container">
        <div class="h2">{{ __('See also') }}</div>
        <div class="announce-slider-wrapper">
            <div class="announce-slider act-carousel" data-entity="events"
                data-limit='{"xs":4,"sm":4,"md":4,"lg":12,"xl":24,"xxl":24}'
                data-view='{"xs":1,"sm":1,"md":2,"lg":3,"xl":4,"xxl":4}'
                data-scroll='{"xs":1,"sm":1,"md":2,"lg":3,"xl":4,"xxl":4}' data-tizer-view="event" data-min-view="md">
            </div>
        </div>
    </div>
</section>

@widget('marquee')

@endsection