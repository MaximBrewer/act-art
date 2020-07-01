<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
</head>

<body @yield('body-class')>
    <div id="sitePreloader" class="site-preloader"></div>
    <div>
        <header class="header" id="header">
            <nav>
                <section class="py-2 header-top" id="header-top">
                    <div class="header-short-content" id="header-top-short">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-20 text-left">
                                    <a href="/" class="logo">@include('svg.header.top-logo')</a>
                                </div>
                                <div class="col-md-20 text-center">
                                    <a href="javascript:void(0)" class="burger text-decoration-none" id="burgerMenuToggle">@include('svg.header.top-burger')&nbsp;&nbsp;&nbsp;&nbsp;{{  __('Меню') }}</a>
                                </div>
                                <div class="col-md-20 text-right">
                                    <a href="javascript:void(0)" id="searchTopToggle">@include('svg.header.lens')</a>
                                    <button class="btn btn-default-inverse" type="submit">{!! __('Войти') !!}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-center container header-full-content" id="header-top-full">
                        <div class="row">
                            <div class="col col-lg-16"></div>
                            <div class="col col-lg-22">
                                <div class="header-top-menu">
                                    @php echo menu('topmost', 'menu.topmost');@endphp
                                </div>
                            </div>
                            <div class="col col-lg-22">
                                <div class="header-top-search">
                                    <form action="/action_page.php">
                                        <div class="search-container">
                                            <input type="text" placeholder="{{ __('Поиск..') }}" name="search"
                                                class="form-control">
                                            <button type="submit" class="btn p-1 btn-link">
                                                @include('svg.header.lens')
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="header-lang d-flex">
                            <div class="lang-menu mx-3 text-nowrap">
                                <a href="/lang/ru" @if(App::getLocale()=='ru' ) class="active" @endif>Rus</a> | <a
                                    href="/lang/en" @if(App::getLocale()=='en' ) class="active" @endif>Eng</a>
                            </div>
                            <div class="header-top-profile">
                                <button class="btn btn-default-inverse" type="submit">{!! __('Войти') !!}</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="header-full-menu" id="header-full-menu">
                    <div class="container mt-5">
                        <div class="header-bottom-logo">
                            <a href="/" class="header-logo">
                                @include('svg.header.logo')
                                <p class="h5 py-4">{!! __('онлайн-аукцион<br>современного<br>искусства') !!}</p>
                            </a>
                        </div>
                        <div class="row header-bottom-menu">
                            <div class="col col-lg-16"></div>
                            <div class="col col-lg-11">
                                @php echo menu('top1', 'menu.top');@endphp
                            </div>
                            <div class="col col-lg-11">
                                @php echo menu('top2', 'menu.top');@endphp
                            </div>
                            <div class="col col-lg-11">
                                @php echo menu('top3', 'menu.top');@endphp
                            </div>
                            <div class="col col-lg-11">
                                @php echo menu('top4', 'menu.top');@endphp
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
        </header>
        <main id="main">
            @yield('content')
        </main>
    </div>

    <footer class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-12">
                        <a href="/" class="footer-logo">
                            @include('svg.footer.logo')
                        </a>
                        <div class="mail-to">
                            {{  __('По вопросам сотрудничества:') }}
                            <a href="mailto:info@act-art.ru">info@act-art.ru</a>
                        </div>
                    </div>
                    <div class="col col-lg-12">
                        @php echo menu('footer-left', 'menu.unstyled');@endphp
                    </div>
                    <div class="col col-lg-14">
                        @php echo menu('footer-right', 'menu.unstyled');@endphp
                        </ul>
                    </div>
                    <div class="col col-lg-22">
                        <form>
                            <div class="form-group">
                                <label
                                    for="subscribeFooterEmail">{{  __('Узнавайте первым о новых лотах, специальных предложениях, актуальных выставках в нашей рассылке') }}</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        @include('svg.footer.mail')
                                    </div>
                                    <input type="email" class="form-control" aria-describedby="email"
                                        id="subscribeFooterEmail">
                                </div>
                                <small>{{  __('обещаем, мы не будем навязчивыми') }}</small>
                            </div>
                        </form>
                        <div class="d-flex">
                            <div class="mr-3 text-nowrap">{{  __('Мы в соцсетях:') }}</div>
                            <div class="mr-3">
                                <a href="#">
                                    @include('svg.footer.facebook')
                                </a>
                            </div>
                            <div class="mr-3">
                                <a href="#">
                                    @include('svg.footer.vk')
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
                    <div class="col col-md-24 align-items-center d-flex">
                        <p>{{ __('ООО “ВОЛОН”  © 2020') }}<br>{{ __('При использовании материалов с сайта обязательна ссылка на сайт.') }}
                        </p>
                    </div>
                    <div class="col col-md-14 align-items-center d-flex">
                        @php echo menu('copyright', 'menu.unstyled');@endphp
                    </div>
                    <div class="col col-md-22 align-items-center d-flex">
                        <div class="d-flex">
                            <div>{{  __('Сайт сделан в  ВАШАКОМПАНИЯ') }}</div>
                            <div>{{  __('Разработка') }}</div>
                            <div>@include('svg.footer.cp')</div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>

    <!-- Scripts -->
    <script>
        window._translations = {!! cache('translations'); !!};
    </script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>