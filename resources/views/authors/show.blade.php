@extends('layouts.app')
{{-- @section('title'){{ 'Act-Art.ru | ' }}{!! $author->getTranslatedAttribute('title') !!}@endsection
@section('description'){!! $author->getTranslatedAttribute('meta_description') !!}@endsection
@section('keywords'){!! $author->getTranslatedAttribute('meta_keywords') !!}@endsection --}}
@section('meta_tags')
@if($author)
<title>{{$author->getTranslatedAttribute('title')}}</title>
<meta name='description' itemprop='description' content='{{$author->getTranslatedAttribute('meta_description')}}' />
<meta name='keywords' content='{{$author->getTranslatedAttribute('meta_keywords')}}' />
<meta property='article:published_time' content='{{$author->created_at}}' />
{{-- <meta property='article:section' content='event' /> --}}
<meta property="og:description" content="{{$author->getTranslatedAttribute('meta_description')}}" />
<meta property="og:title" content="{{$author->getTranslatedAttribute('title')}}" />
<meta property="og:url" content="{{url()->current()}}" />
<meta property="og:type" content="article" />
<meta property="og:locale" content="en-us" />
<meta property="og:locale:alternate" content="en-us" />
<meta property="og:site_name" content="{{env('SITE_URL', 'Act-Art.ru')}}" />
{{-- @foreach($obj->images as $image)
            <meta property="og:image" content="{{$image->url}}" />
@endforeach --}}
<meta property="og:image:url" content="/storage/{{$author->image}}" />
<meta property="og:image:size" content="300" />

{{-- <meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="{{$author->getTranslatedAttribute('title')}}" />
<meta name="twitter:site" content="@BrnBhaskar" /> --}}
@endif
@endsection
@section('content')
@php
$dir = storage_path("app/public/");
$size = getimagesize($dir . $author->avatar);
@endphp
<section class="author-page">
    <div class="container">
        <div class="row pb-2 pb-lg-5">
            <div class="col-xl-40">
                <h2 class="h2">
                    {!! $author->getTranslatedAttribute('name') !!} {!! $author->getTranslatedAttribute('surname') !!}
                </h2>
                @if(count($author->groups))
                <div class="h5">/{!! $author->groups[0]->getTranslatedAttribute('title') !!}/</div>
                @endif
                <hr>
                <div class="d-none d-xl-block description">{!! $author->getTranslatedAttribute('text') !!}</div>
                <div class="btn-sign">
                    {{ __('You can follow the update of the author\'s collection or leave a request for the purchase of new works') }}
                </div>
                <div class="btn-wrap d-flex">
                    <button type="button" class="btn btn-default">{{ __('Follow') }}</button>
                    <button type="button" class="btn btn-primary">{{ __('Purchase requisition') }}</button>
                </div>
            </div>
            <div class="col-xl-20 d-none d-xl-block photo-block">
                <div class="image-wrapper"
                    style="background-image: url('{!! Voyager::image($author->avatar) !!}');padding-top:{!! 100 * $size[1] / $size[0] !!}%">
                </div>
                @if(count($author->studies))
                <div class="educations">
                    <div class="heading">{{ __('Studies') }}</div>
                    <ul class="list-unstyled">
                        @foreach($author->studies as $study)
                        <li>{{  $study->getTranslatedAttribute('title') }}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                @if(count($author->exhibits))
                <div class="exhibitions">
                    <div class="heading">{{ __('Exhibits') }}</div>
                    <ul class="list-unstyled">
                        @foreach($author->exhibits as $exhibition)
                        <li>{{  $exhibition->getTranslatedAttribute('title') }}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
            </div>
        </div>
    </div>
</section>

<section class="author-works">
    <div class="container">
        <div class="h2">{{ __('Author\'s works') }}</div>
        <div class="author-works-list">
            <div class="act-waterfall" data-entity="lots" data-action="add" data-tizer-view="gallery"
                data-author="{{ $author->id }}" data-limit='{"xs":4,"sm":4,"md":4,"lg":3,"xl":3,"xxl":4}'
                data-view='{"xs":1,"sm":2,"md":2,"lg":3,"xl":3,"xxl":4}' data-sortable='true' data-show-status='true'>
            </div>
        </div>
        <div class="author-works-footer">
            <div class="d-flex justify-content-center">
                <a href="/auctions" class="btn btn-default">{{ __('Closest auctions') }}</a>
                <a href="/gallery" class="btn btn-default">{{ __('Online-Gallery') }}</a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="/authors">{{ __('All authors') }}</a>
            </div>
        </div>
    </div>
</section>

@widget('marquee')

@endsection