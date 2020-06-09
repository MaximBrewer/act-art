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

<body>
    <div>
        <header class="header" id="header">
            <nav>
                <section class="bg-dark py-2" id="header-top">
                    <div class="header-center container">
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
                                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <ellipse cx="11.3137" cy="12.3138" rx="8" ry="8"
                                                        transform="rotate(-45 11.3137 12.3138)" stroke-width="3" />
                                                    <path d="M23.7782 24.7782L16 17.0001" stroke-width="3" />
                                                </svg>
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
                                <button class="btn btn-inverse" type="submit">{!! __('Войти') !!}</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="my-5">
                    <div class="container">
                        <div class="header-bottom-logo">
                            <a href="/" class="header-logo">
                                <svg width="379" height="50" viewBox="0 0 379 50" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M95.7067 20.8394C95.6629 10.2778 87.0459 1.29473 76.4208 1.29473H72.0393C61.385 1.29473 52.7461 10.3288 52.7461 20.9339V30.3026C52.7461 40.9078 61.385 49.84 72.0393 49.84H76.4208C87.0459 49.84 95.6556 40.9659 95.7067 30.3971H83.9789V39.9549H64.766V11.2816H83.9789V20.8394H95.7067Z"
                                        fill="#2C5770" />
                                    <path
                                        d="M280.635 11.2816V1.73116H247.044V11.2816H268.63V18.9118C265.876 17.0734 262.635 16.0935 259.319 16.0969H254.251C249.797 16.0969 245.525 17.8595 242.375 20.9969C239.225 24.1343 237.456 28.3896 237.456 32.8266C237.456 42.057 244.97 49.8327 254.251 49.8327H259.319C263.414 49.8215 267.359 48.2916 270.383 45.5412C271.259 46.78 272.422 47.7907 273.773 48.4882C275.124 49.1857 276.624 49.5496 278.145 49.549H285.448V39.9549H280.635V11.2816ZM268.645 39.9113H249.607V25.6837H268.645V39.9113Z"
                                        fill="#2C5770" />
                                    <path
                                        d="M27.7496 1.73116H2.39535V10.7507C3.95057 11.1016 5.54006 11.2797 7.13468 11.2816H10.0557C13.2587 11.2888 16.4211 10.5671 19.3015 9.17161C22.1819 7.77614 24.7043 5.74377 26.6762 3.22956L29.5972 17.9153C27.2288 16.663 24.589 16.0063 21.9076 16.0023H16.7959C12.3414 16.0023 8.06931 17.7649 4.9195 20.9023C1.76968 24.0398 0.000132932 28.295 0.000132932 32.732C-0.0175878 37.2014 1.73703 41.4969 4.88236 44.6843C8.02768 47.8718 12.3093 49.6933 16.7959 49.7527H21.9076C24.3837 49.73 26.8239 49.1597 29.0516 48.0829C31.2794 47.0061 33.2392 45.4498 34.7893 43.5263L35.9942 49.5127H47.9703L38.3675 1.73116H27.7496ZM12.0127 39.8749V25.6183H31.1745L34.0444 39.8749H12.0127Z"
                                        fill="#2C5770" />
                                    <path
                                        d="M184.695 0C152.622 0 142.866 21.6613 142.465 22.5851L152.542 26.9494C152.739 26.5202 155.982 19.6756 165.205 15.0931C164.743 16.7884 164.51 18.5373 164.511 20.2939C164.513 25.5881 166.626 30.6648 170.385 34.4076C174.144 38.1505 179.241 40.2531 184.556 40.2531H184.834C190.136 40.2532 195.223 38.1605 198.98 34.4334C202.737 30.7062 204.858 25.6482 204.879 20.3666C204.88 18.6632 204.661 16.9668 204.229 15.3186C213.277 19.952 216.687 26.7021 216.884 27.1094L226.86 22.4978C226.436 21.5377 216.045 0 184.695 0ZM196.24 29.5316H183.497V16.8315H196.24V29.5316Z"
                                        fill="#2C5770" />
                                    <path
                                        d="M98.3429 11.1289H110.37V40.0058C110.37 42.5137 111.37 44.9188 113.151 46.6922C114.931 48.4655 117.346 49.4617 119.863 49.4617H127.166V39.9549H122.368V11.1289H134.366V1.57114H98.3429V11.1289Z"
                                        fill="#2C5770" />
                                    <path
                                        d="M366.987 1.73116H342.999V11.2816H354.997V37.5691C354.997 44.1664 360.364 50 366.987 50V11.2816H379V1.73116H366.987Z"
                                        fill="#2C5770" />
                                    <path
                                        d="M338.201 18.4536C338.201 14.0166 336.431 9.76134 333.282 6.62391C330.132 3.48648 325.86 1.72389 321.405 1.72389H295.021V49.5127H307.012V35.176H316.14L317.126 40.0058C318.586 46.014 323.275 49.4617 328.532 49.4617H335.835V39.9549H329.146L327.882 33.8886C330.939 32.6161 333.549 30.4718 335.385 27.7254C337.221 24.979 338.201 21.7532 338.201 18.4536ZM326.13 25.5528H307.019V11.2816H326.13V25.5528Z"
                                        fill="#2C5770" />
                                </svg>
                                <p class="h5 py-4">{!! __('онлайн-аукцион<br>современного<br>искусства') !!}</p>
                            </a>
                        </div>
                        <div class="row header-bottom-menu">
                            <div class="col col-lg-16"></div>
                            <div class="col col-lg-11">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-header"><a
                                            href="#">{{ __('Аукционы') }}</a></li>
                                    <li class="list-group-item"><a href="#">{{ __('Регулярные') }}</a></li>
                                    <li class="list-group-item"><a href="#">{{ __('Тематические') }}</a></li>
                                    <li class="list-group-item"><a href="#">{{ __('Архив') }}</a></li>
                                </ul>
                            </div>
                            <div class="col col-lg-11">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-header"><a
                                            href="#">{{ __('Онлайн-галерея') }}</a>
                                    </li>
                                    <li class="list-group-item"><a href="#">{{ __('Работы в продаже') }}</a></li>
                                    <li class="list-group-item"><a href="#">{{ __('Авторы') }}</a></li>
                                    <li class="list-group-item"><a href="#">{{ __('Архив') }}</a></li>
                                </ul>
                            </div>
                            <div class="col col-lg-11">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-header"><a href="#">Пространства</a>
                                    </li>
                                    <li class="list-group-item"><a href="#">Выставки</a></li>
                                    <li class="list-group-item"><a href="#">Мастерские</a></li>
                                </ul>
                            </div>
                            <div class="col col-lg-11">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-header"><a href="#">О проекте</a>
                                    </li>
                                    <li class="list-group-item"><a href="#">Платформа</a></li>
                                    <li class="list-group-item"><a href="#">Художникам</a></li>
                                    <li class="list-group-item"><a href="#">Блог • Новости</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
        </header>
        <main>
            @yield('content')
        </main>
    </div>

    <footer class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-15">
                        <a href="/" class="footer-logo">
                            <svg viewBox="0 0 282 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M141.11 0C33.9903 0 1.34204 73.1193 0 76.2376L33.6731 90.9695C34.3319 89.5208 45.1659 66.4163 75.9841 50.9478C74.4412 56.6703 73.6617 62.574 73.666 68.5033C73.6532 77.3604 75.3754 86.1332 78.7342 94.3201C82.093 102.507 87.0225 109.947 93.2409 116.216C99.4593 122.485 106.845 127.458 114.975 130.853C123.104 134.248 131.82 135.997 140.622 136H141.525C159.27 136.013 176.294 128.937 188.858 116.327C201.422 103.717 208.497 86.6048 208.529 68.7489C208.543 62.9496 207.813 57.1728 206.358 51.5616C236.688 67.202 247.985 89.9874 248.644 91.3623L282 75.7956C280.609 72.7019 245.862 0 141.11 0ZM179.687 99.6858H137.084V56.816H179.687V99.6858Z"
                                    fill="#FF665E" />
                            </svg>
                        </a>
                    </div>
                    <div class="col col-lg-15">
                        <ul class="list-unstyled">
                            <li><a href="#">Правила Аукциона</a></li>
                            <li><a href="#">Правила Аукциона-Галереи</a></li>
                            <li><a href="#">Оплата</a></li>
                            <li><a href="#">Доставка</a></li>
                        </ul>
                        <ul class="list-unstyled">
                            <li><a href="#">Договор-оферта</a></li>
                            <li><a href="#">Персональные данные</a></li>
                        </ul>
                    </div>
                    <div class="col col-lg-15">
                        <ul class="list-unstyled">
                            <li><a href="#">Аукционы</a></li>
                            <li><a href="#">онлайн-ГАЛЕРЕЯ</a></li>
                            <li><a href="#">ПРОСТРАНСТВА</a></li>
                            <li><a href="#">О проекте</a></li>
                        </ul>
                        <ul class="list-unstyled">
                            <li><a href="#">КОНТАКТЫ</a></li>
                        </ul>
                    </div>
                    <div class="col col-lg-15">
                        <form>
                            <div class="form-group">
                                <label for="subscribeFooterEmail">Узнавайте первым о новых лотах, специальных
                                    предложениях, актуальных выставках в
                                    нашей рассылке</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <svg width="63" height="45" viewBox="0 0 63 45" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2.3363" y="2.60986" width="57.9469" height="40.3902"
                                                stroke="#D6D6D6" stroke-width="4" />
                                            <path d="M6.47848 2.92703L31 22.1655L55.5215 2.92703H6.47848Z"
                                                stroke="#D6D6D6" stroke-width="4" />
                                        </svg>

                                    </div>
                                    <input type="email" class="form-control" aria-describedby="email"
                                        id="subscribeFooterEmail">
                                </div>
                                <small>обещаем, мы не будем навязчивыми</small>
                            </div>
                        </form>
                        <div class="d-flex">
                            <div class="mr-3 text-nowrap">Мы в соцсетях:</div>
                            <div class="mr-3">
                                <a href="#">
                                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M28.3613 0H3.40336C2.50073 0 1.63508 0.338647 0.996821 0.941443C0.358567 1.54424 0 2.3618 0 3.21429L0 26.7857C0 27.6382 0.358567 28.4558 0.996821 29.0586C1.63508 29.6614 2.50073 30 3.40336 30H13.1348V19.8007H8.66794V15H13.1348V11.3411C13.1348 7.17924 15.7583 4.88036 19.7764 4.88036C21.7007 4.88036 23.7129 5.20446 23.7129 5.20446V9.28929H21.4958C19.3112 9.28929 18.6299 10.5696 18.6299 11.8828V15H23.5066L22.7267 19.8007H18.6299V30H28.3613C29.264 30 30.1296 29.6614 30.7679 29.0586C31.4061 28.4558 31.7647 27.6382 31.7647 26.7857V3.21429C31.7647 2.3618 31.4061 1.54424 30.7679 0.941443C30.1296 0.338647 29.264 0 28.3613 0Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                            <div class="mr-3">
                                <a href="#">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.0033 7.30838C10.7468 7.30838 7.31344 10.7425 7.31344 15C7.31344 19.2575 10.7468 22.6916 15.0033 22.6916C19.2599 22.6916 22.6933 19.2575 22.6933 15C22.6933 10.7425 19.2599 7.30838 15.0033 7.30838ZM15.0033 20.0006C12.2527 20.0006 10.0039 17.758 10.0039 15C10.0039 12.242 12.246 9.99944 15.0033 9.99944C17.7607 9.99944 20.0028 12.242 20.0028 15C20.0028 17.758 17.754 20.0006 15.0033 20.0006ZM24.8015 6.99375C24.8015 7.99119 23.9983 8.7878 23.0078 8.7878C22.0106 8.7878 21.2142 7.98449 21.2142 6.99375C21.2142 6.00301 22.0173 5.19971 23.0078 5.19971C23.9983 5.19971 24.8015 6.00301 24.8015 6.99375ZM29.8946 8.81457C29.7808 6.41136 29.232 4.28261 27.4718 2.52873C25.7184 0.774852 23.5901 0.225929 21.1874 0.105433C18.7111 -0.0351445 11.2889 -0.0351445 8.8126 0.105433C6.41662 0.219235 4.28834 0.768158 2.52817 2.52203C0.767987 4.27591 0.225878 6.40466 0.10541 8.80788C-0.0351366 11.2847 -0.0351366 18.7086 0.10541 21.1854C0.219186 23.5886 0.767987 25.7174 2.52817 27.4713C4.28834 29.2251 6.40993 29.7741 8.8126 29.8946C11.2889 30.0351 18.7111 30.0351 21.1874 29.8946C23.5901 29.7808 25.7184 29.2318 27.4718 27.4713C29.2253 25.7174 29.7741 23.5886 29.8946 21.1854C30.0351 18.7086 30.0351 11.2914 29.8946 8.81457ZM26.6955 23.843C26.1735 25.1551 25.1629 26.1659 23.8444 26.6947C21.8701 27.478 17.1852 27.2972 15.0033 27.2972C12.8215 27.2972 8.12995 27.4713 6.1623 26.6947C4.85053 26.1726 3.83993 25.1618 3.31121 23.843C2.52817 21.8682 2.70887 17.1823 2.70887 15C2.70887 12.8177 2.53486 8.12507 3.31121 6.15698C3.83324 4.84492 4.84384 3.8341 6.1623 3.30525C8.13664 2.52203 12.8215 2.70278 15.0033 2.70278C17.1852 2.70278 21.8767 2.52873 23.8444 3.30525C25.1562 3.8274 26.1668 4.83822 26.6955 6.15698C27.4785 8.13176 27.2978 12.8177 27.2978 15C27.2978 17.1823 27.4785 21.8749 26.6955 23.843Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>ООО “ВОЛОН” © 2020 Все материалы на сайте охраняются Законом об авторском праве. При размещении
                    материалов обязательна ссылка на сайт.</p>
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