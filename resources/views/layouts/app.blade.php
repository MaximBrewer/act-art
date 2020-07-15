<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body @yield('body-class')>
    <div id="sitePreloader" class="site-preloader"></div>
    <div>
        <header class="header" id="header">
            <nav>
                <section class="py-2 header-top" id="header-top">
                    <div class="header-content" id="header-content">
                        <div class="header-top-container-wrapper py-2">
                            <div class="container">
                                <div class="row">
                                    <div class="col col-lg-12"></div>
                                    <div class="col col-lg-24">
                                        <div class="header-top-menu">
                                            @php echo menu('topmost', 'menu.topmost');@endphp
                                        </div>
                                    </div>
                                    <div class="col col-lg-24">
                                        <div class="header-top-search d-none d-xxl-block">
                                            <div id="searchForm" class="search-form">
                                                <form action="#">
                                                    <div class="search-container">
                                                        <input type="text" placeholder="{{ __('Поиск..') }}"
                                                            name="search" class="form-control">
                                                        <div class="btn-container">
                                                            <button type="submit" class="btn p-1 btn-link">
                                                                @include('svg.header.lens')
                                                            </button>
                                                            <button type="button"
                                                                class="btn p-1 btn-link close-search-form">
                                                                @include('svg.header.close')
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="row header-wide">
                                <div class="col-md-20 col-30 hide-dark">
                                    <a href="/" class="logo text-decoration-none">
                                        <div class="align-items-center d-none d-md-flex">@include('svg.header.top-logo')
                                        </div>
                                        <div class="align-items-center d-flex d-md-none">
                                            @include('svg.header.small-top-logo')</div>
                                        <div class="text-nowrap ml-4 align-items-center lh-1125rem d-none d-xl-flex">
                                            {!! __('онлайн-аукцион<br>современного искусства') !!}</div>
                                    </a>
                                    {{-- <a href="/" class="logo">@include('svg.header.small-top-logo')</a> --}}
                                </div>
                                <div class="burger-wrapper col-md-20 col-30 hide-dark">
                                    <a href="javascript:void(0)"
                                        class="burger text-decoration-none align-items-center justify-content-between"
                                        id="burgerMenuToggle">
                                        <div>@include('svg.header.top-burger')</div>
                                        <div>{{  __('Меню') }}</div>
                                    </a>
                                </div>
                                <div class="col-md-20 flex-row-reverse right-position d-none d-md-flex">
                                    <div>
                                        <button class="btn btn-default-inverse" type="submit">{!! __('Войти')
                                            !!}</button>
                                    </div>
                                    <div class="header-lang">
                                        <div class="lang-menu mx-3 text-nowrap">
                                            <a href="/lang/ru" @if(App::getLocale()=='ru' ) class="active"
                                                @endif>Rus</a> |
                                            <a href="/lang/en" @if(App::getLocale()=='en' ) class="active"
                                                @endif>Eng</a>
                                        </div>
                                    </div>
                                    <div class="hide-dark-lens">
                                        <a href="javascript:void(0)"
                                            id="searchTopToggle">@include('svg.header.lens')</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="header-full-menu" id="header-full-menu">
                    <div class="container mt-4">
                        <div class="header-bottom-logo">
                            <a href="/" class="header-logo">
                                @include('svg.header.logo')
                                <p class="h5 py-4">{!! __('онлайн-аукцион<br>современного<br>искусства') !!}</p>
                            </a>
                        </div>
                        <div class="row header-bottom-menu flex-row-reverse">
                            <div class="col col-lg-12">
                                @php echo menu('topmost', 'menu.top');@endphp
                            </div>
                            <div class="col col-lg-12">
                                @php echo menu('top4', 'menu.top');@endphp
                            </div>
                            <div class="col col-lg-12">
                                @php echo menu('top3', 'menu.top');@endphp
                            </div>
                            <div class="col col-lg-12">
                                @php echo menu('top2', 'menu.top');@endphp
                            </div>
                            <div class="col col-lg-12">
                                @php echo menu('top1', 'menu.top');@endphp
                            </div>
                        </div>
                    </div>
                </section>
                <div class="mobile-menu-wrapper" id="mobileMenu">
                    <div class="bg close-mobile-menu"></div>
                    <section class="mobile-menu">
                        <div class="d-block">
                            <div class="p-4 d-flex justify-content-between mobile-menu-header">
                                <a href="/" class="logo-mobile d-md-none">@include('svg.header.logo-menu-mobile')</a>
                                <a href="javascript:void(0)"
                                    class="close-tablet d-none d-md-block close-mobile-menu">@include('svg.header.close-tablet')</a>
                                <div class="lang-menu text-nowrap d-none d-md-block">
                                    <a href="/lang/ru" @if(App::getLocale()=='ru' ) class="active" @endif>Rus</a> |
                                    <a href="/lang/en" @if(App::getLocale()=='en' ) class="active" @endif>Eng</a>
                                </div>
                                <a href="javascript:void(0)"
                                    class="close-mobile d-md-none close-mobile-menu">@include('svg.header.close-mobile')</a>
                            </div>
                            <div class="p-4">
                                <div class="menu-1">
                                    @php echo menu('mobile', 'menu.mobile');@endphp
                                </div>
                                <div class="menu-2">
                                    @php echo menu('mobile2', 'menu.mobile');@endphp
                                </div>
                                <div class="menu-3">
                                    @php echo menu('mobile3', 'menu.mobile');@endphp
                                </div>
                            </div>
                        </div>
                        <div class="p-4 d-flex justify-content-between d-md-none">
                            <a href="#">{{  __('Войти')  }}</a>
                            <div class="lang-menu text-nowrap">
                                <a href="/lang/ru" @if(App::getLocale()=='ru' ) class="active" @endif>Rus</a> |
                                <a href="/lang/en" @if(App::getLocale()=='en' ) class="active" @endif>Eng</a>
                            </div>
                        </div>
                    </section>
                </div>
            </nav>
        </header>
        <main id="main">
            @yield('content')
        </main>
    </div>

    {{-- <footer class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="d-flex">
                    <div class="order-2 order-md-1 d-flex">
                        <a href="/" class="footer-logo order-2 order-md-1">
                            @include('svg.footer.logo')
                        </a>
                        <div class="mail-to order-1 order-md-2 d-flex">
                            <div class="mb-1">{{  __('По вопросам сотрудничества:') }}</div>
                            <div class="h5"><a href="mailto:info@act-art.ru">info@act-art.ru</a></div>
                        </div>
                    </div>
                    <div class="order-4 order-md-2 footer-left-menu">
                        @php echo menu('footer-left', 'menu.unstyled');@endphp
                        <div class="d-sm-none">
                            @php echo menu('copyright', 'menu.unstyled');@endphp
                        </div>
                    </div>
                    <div class="order-3 order-md-3 footer-right-menu">
                        @php echo menu('footer-right', 'menu.unstyled');@endphp
                    </div>
                    <div class="order-1 order-md-4 d-flex">
                        <div class="order-2 order-md-1">
                            <form>
                                <div class="form-group">
                                    <label
                                        for="subscribeFooterEmail">{{  __('Узнавайте первым о новых лотах, специальных предложениях, новых выставках в нашей рассылке') }}</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend d-none d-sm-block">
                                            @include('svg.footer.mail')
                                        </div>
                                        <input type="email" class="form-control" aria-describedby="email"
                                            placeholder="{{  __('Ваш E-mail') }}" id="subscribeFooterEmail">
                                    </div>
                                    <small
                                        class="d-none d-sm-block">{{  __('обещаем, мы не будем навязчивыми') }}</small>
                                </div>
                            </form>
                        </div>
                        <div class="order-1 order-md-2 d-flex soc-wr">
                            <div class="d-none d-md-block mr-3 text-nowrap">{{  __('Мы в соцсетях:') }}</div>
                            <div class="mr-3">
                                <a href="#">
                                    @include('svg.footer.facebook')
                                </a>
                            </div>
                            <div class="mr-3">
                                <a href="#">
                                    @include('svg.footer.instagram')
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-24 align-items-center d-flex">
                        <p class="pb-2">
                            {{ __('ООО “ВОЛОН”  © 2020') }}<br>{{ __('При использовании материалов с сайта обязательна ссылка на сайт.') }}
                        </p>
                    </div>
                    <div class="col-md-14 align-items-center d-none d-sm-flex">
                        @php echo menu('copyright', 'menu.unstyled');@endphp
                    </div>
                    <div class="col-md-22 align-items-center">
                        <div class="d-sm-flex">
                            <div class="pb-2">{{  __('Сайт сделан в  ВАША КОМПАНИЯ') }}</div>
                            <div class="pb-2">{{  __('Разработка') }}</div>
                            <div class="pb-2">@include('svg.footer.cp')</div>
                        </div>
                    </div>
                </div>
            </div>
    </footer> --}}

    <!-- Scripts -->
    <script>
        window._translations = {!! cache('translations'); !!};
    </script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>