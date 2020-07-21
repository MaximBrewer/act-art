@extends('layouts.app')
{{-- @section('title'){{ 'Act-Art.ru | ' }}{!! $page->getTranslatedAttribute('title') !!}@endsection
@section('description'){!! $page->getTranslatedAttribute('meta_description') !!}@endsection
@section('keywords'){!! $page->getTranslatedAttribute('meta_keywords') !!}@endsection --}}
@section('meta_tags')
@if($page)
<title>{{$page->getTranslatedAttribute('title')}}</title>
<meta name='description' itemprop='description' content='{{$page->getTranslatedAttribute('meta_description')}}' />
<meta name='keywords' content='{{$page->getTranslatedAttribute('meta_keywords')}}' />
<meta property='article:published_time' content='{{$page->created_at}}' />
{{-- <meta property='article:section' content='event' /> --}}
<meta property="og:description" content="{{$page->getTranslatedAttribute('meta_description')}}" />
<meta property="og:title" content="{{$page->getTranslatedAttribute('title')}}" />
<meta property="og:url" content="{{url()->current()}}" />
<meta property="og:type" content="article" />
<meta property="og:locale" content="en-us" />
<meta property="og:locale:alternate" content="en-us" />
<meta property="og:site_name" content="{{env('SITE_URL', 'Act-Art.ru')}}" />
{{-- @foreach($obj->images as $image)
            <meta property="og:image" content="{{$image->url}}" />
@endforeach --}}
<meta property="og:image:url" content="/storage/{{$page->image}}" />
<meta property="og:image:size" content="300" />

{{-- <meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="{{$page->getTranslatedAttribute('title')}}" />
<meta name="twitter:site" content="@BrnBhaskar" /> --}}
@endif
@endsection
@section('content')
<section id="page"@if($page->image) class="dotted"@endif>
    {{-- <div class="background-text d-none d-xl-block">ПРОСТРАНСТВА</div> --}}
    <div class="container">
        <div class="sticky-section d-none d-xl-flex"><span>{!! $page->getTranslatedAttribute('title') !!}</span></div>
        <div class="row pb-2 pb-lg-5">
            <div @if($page->image)class="col-xl-30 col-xxl-28"@else class="col-xl-60"@endif>
                <h2 class="h2">{!! $page->getTranslatedAttribute('title') !!}</h2>
                <hr>
                <p class="sub_h2 d-none d-xl-block">{!! $page->getTranslatedAttribute('excerpt') !!}</p>
            </div>
            @if($page->image)
            <div class="col-xl-30 col-xxl-32 d-none d-xl-block">
                <div class="image-wrapper" style="background-image: url('/storage/{!! $page->image !!}')"></div>
            </div>
            @endif
        </div>
        <div class="row">
            <div class="col-60">
                {!! $page->getTranslatedAttribute('body') !!}
            </div>
        </div>
        <hr>
        @widget('sharing')
    </div>
</section>
@endsection