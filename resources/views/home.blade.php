@extends('layouts.app')

@section('content')
<section class="home-banner">
    <div class="background-text">АУКЦИОНы</div>
    <div class="container">
        <div class="sticky-section"><span>ближайшие аукционы</span></div>
        <div id="bannerCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col col-xxl-38">
                            <div class="banner-image" style="background-image: url('/storage/template/img/banner.jpg')">
                                <div class="h1">СКОРО НОВЫЙ АУКЦИОН:<br>пора готовиться</div>
                                <div class="h2">26 июля / 15:00</div>
                            </div>
                        </div>
                        <div class="col col-xxl-22">
                            <div class="banner-announce">
                                <div class="h3">Размер этого шрифта должен уменьшаться при сжатии текстового
                                    контейнера
                                </div>
                                <div class="banner-counter-wrapper">
                                    <p>ДО НАЧАЛА АУКЦИОНА:</p>
                                    <div class="banner-counter d-flex">
                                        <div class="days">
                                            <div class="number h5">12</div>
                                            <small>дней</small>
                                        </div>
                                        <div class="separator h5"></div>
                                        <div class="ours">
                                            <div class="number h5">12</div>
                                            <small>часов</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="minutes">
                                            <div class="number h5">12</div>
                                            <small>мин.</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="seconds">
                                            <div class="number h5">12</div>
                                            <small>сек.</small>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg">ПРИНЯТЬ УЧАСТИЕ</button>
                                <a href="#" class="h5_underline">Смотреть лоты →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col col-xxl-38">
                            <div class="banner-image" style="background-image: url('/storage/template/img/banner.jpg')">
                                <div class="h1">СКОРО НОВЫЙ АУКЦИОН:<br>пора готовиться</div>
                                <div class="h2">26 июля / 15:00</div>
                            </div>
                        </div>
                        <div class="col col-xxl-22">
                            <div class="banner-announce">
                                <div class="h3">Размер этого шрифта должен уменьшаться при сжатии текстового
                                    контейнера
                                </div>
                                <div class="banner-counter-wrapper">
                                    <p>ДО НАЧАЛА АУКЦИОНА:</p>
                                    <div class="banner-counter d-flex">
                                        <div class="days">
                                            <div class="number h5">12</div>
                                            <small>дней</small>
                                        </div>
                                        <div class="separator h5"></div>
                                        <div class="ours">
                                            <div class="number h5">12</div>
                                            <small>часов</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="minutes">
                                            <div class="number h5">12</div>
                                            <small>мин.</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="seconds">
                                            <div class="number h5">12</div>
                                            <small>сек.</small>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg">ПРИНЯТЬ УЧАСТИЕ</button>
                                <a href="#" class="h5_underline">Смотреть лоты →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col col-xxl-38">
                            <div class="banner-image" style="background-image: url('/storage/template/img/banner.jpg')">
                                <div class="h1">СКОРО НОВЫЙ АУКЦИОН:<br>пора готовиться</div>
                                <div class="h2">26 июля / 15:00</div>
                            </div>
                        </div>
                        <div class="col col-xxl-22">
                            <div class="banner-announce">
                                <div class="h3">Размер этого шрифта должен уменьшаться при сжатии текстового
                                    контейнера
                                </div>
                                <div class="banner-counter-wrapper">
                                    <p>ДО НАЧАЛА АУКЦИОНА:</p>
                                    <div class="banner-counter d-flex">
                                        <div class="days">
                                            <div class="number h5">12</div>
                                            <small>дней</small>
                                        </div>
                                        <div class="separator h5"></div>
                                        <div class="ours">
                                            <div class="number h5">12</div>
                                            <small>часов</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="minutes">
                                            <div class="number h5">12</div>
                                            <small>мин.</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="seconds">
                                            <div class="number h5">12</div>
                                            <small>сек.</small>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg">ПРИНЯТЬ УЧАСТИЕ</button>
                                <a href="#" class="h5_underline">Смотреть лоты →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-button">
                <a href="#" class="btn btn-lg btn-default">ВСЕ АУКЦИОНЫ</a>
            </div>
            <div class="carousel-counter">
                <span class="current">1</span>/<span class="total">3</span>
            </div>
            <div class="carousel-arrows">
                <a class="btn btn-default btn-control d-flex" href="#bannerCarousel" role="button" data-slide="prev">
                    <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5946 3L6 18L20.5946 33" stroke="#1B292B" stroke-width="8" />
                        <path d="M7.62164 17.5946H38.4325" stroke="#1E2B32" stroke-width="8" />
                    </svg>

                </a>
                <a class="btn btn-default btn-control d-flex" href="#bannerCarousel" role="button" data-slide="next">
                    <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4054 33L33 18L18.4054 3" stroke="#1B292B" stroke-width="8" />
                        <path d="M31.3784 18.4054L0.567543 18.4054" stroke="#1E2B32" stroke-width="8" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>


<section id="art">
    <div class="background-text">Галерея</div>
    <div class="container">
        <div class="sticky-section"><span>работы в продаже</span></div>
        <div class="row announce">
            <div class="col col-xxl-38">
                <h2 class="h2">ОНЛАЙН-ГАЛЕРЕЯ</h2>
                <div class="sub_h1">Постоянно действующая выставка-продажа работ молодых авторов, на платформе
                    аукциона.<br>Следите, выбирайте, торгуйтесь, собирайте свою коллекцию. Еженедельное обновление.
                </div>
            </div>
            <div class="col col-xxl-22">
                <h3 class="h3">Как приобрести</h3>
                <ol>
                    <li>Войдите в личный кабинет</li>
                    <li>Выбирайте понравившиеся лоты</li>
                    <li>Делайте ставки, следите за конкурентами</li>
                    <li>Ставки принимаются 30 дней с момента выставления лота</li>
                    <li>Если ваша ставка оказалась последней - вы становитесь обладателем лота</li>
                    <li>Мы связываемся с вами и оговариваем условия оплаты и доставки</li>
                </ol>
            </div>
        </div>
        <div class="waterfall-wrapper">

            <div id="art-waterfall">
                <waterfall :grow="grow" :watch="items" @reflowed="reflowed" ref="waterfall">
                    <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height"
                        :order="index" :key="item.index" move-class="item-move">
                        <div class="item" :style="item.style" :index="item.index"></div>
                    </waterfall-slot>
                </waterfall>
            </div>
        </div>
    </div>

</section>
<section>
    <div>

        {{-- <div id="artCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col col-xxl-38">
                            <div class="banner-image" style="background-image: url('/storage/template/img/banner.jpg')">
                                <div class="h1">СКОРО НОВЫЙ АУКЦИОН:<br>пора готовиться</div>
                                <div class="h2">26 июля / 15:00</div>
                            </div>
                        </div>
                        <div class="col col-xxl-22">
                            <div class="banner-announce">
                                <div class="h3">Размер этого шрифта должен уменьшаться при сжатии текстового
                                    контейнера
                                </div>
                                <div class="banner-counter-wrapper">
                                    <p>ДО НАЧАЛА АУКЦИОНА:</p>
                                    <div class="banner-counter d-flex">
                                        <div class="days">
                                            <div class="number h5">12</div>
                                            <small>дней</small>
                                        </div>
                                        <div class="separator h5"></div>
                                        <div class="ours">
                                            <div class="number h5">12</div>
                                            <small>часов</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="minutes">
                                            <div class="number h5">12</div>
                                            <small>мин.</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="seconds">
                                            <div class="number h5">12</div>
                                            <small>сек.</small>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg">ПРИНЯТЬ УЧАСТИЕ</button>
                                <a href="#" class="h5_underline">Смотреть лоты →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col col-xxl-38">
                            <div class="banner-image" style="background-image: url('/storage/template/img/banner.jpg')">
                                <div class="h1">СКОРО НОВЫЙ АУКЦИОН:<br>пора готовиться</div>
                                <div class="h2">26 июля / 15:00</div>
                            </div>
                        </div>
                        <div class="col col-xxl-22">
                            <div class="banner-announce">
                                <div class="h3">Размер этого шрифта должен уменьшаться при сжатии текстового
                                    контейнера
                                </div>
                                <div class="banner-counter-wrapper">
                                    <p>ДО НАЧАЛА АУКЦИОНА:</p>
                                    <div class="banner-counter d-flex">
                                        <div class="days">
                                            <div class="number h5">12</div>
                                            <small>дней</small>
                                        </div>
                                        <div class="separator h5"></div>
                                        <div class="ours">
                                            <div class="number h5">12</div>
                                            <small>часов</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="minutes">
                                            <div class="number h5">12</div>
                                            <small>мин.</small>
                                        </div>
                                        <div class="separator h5">:</div>
                                        <div class="seconds">
                                            <div class="number h5">12</div>
                                            <small>сек.</small>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-lg">ПРИНЯТЬ УЧАСТИЕ</button>
                                <a href="#" class="h5_underline">Смотреть лоты →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col col-xxl-20">
                            <div class="art-image" style="background-image: url('/storage/template/img/art.jpg')"></div>
                            <h5 class="h5">Василий Цветаев:<br>Generation Ready Now
                                Ретроспектива советского плаката</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-button">
                <a href="#" class="btn btn-lg btn-default">ВСЕ АУКЦИОНЫ</a>
            </div>
            <div class="carousel-counter">
                <span class="current">1</span>/<span class="total">3</span>
            </div>
            <div class="carousel-arrows">
                <a class="btn btn-default btn-control d-flex" href="#artCarousel" role="button" data-slide="prev">
                    <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5946 3L6 18L20.5946 33" stroke="#1B292B" stroke-width="8" />
                        <path d="M7.62164 17.5946H38.4325" stroke="#1E2B32" stroke-width="8" />
                    </svg>

                </a>
                <a class="btn btn-default btn-control d-flex" href="#artCarousel" role="button" data-slide="next">
                    <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4054 33L33 18L18.4054 3" stroke="#1B292B" stroke-width="8" />
                        <path d="M31.3784 18.4054L0.567543 18.4054" stroke="#1E2B32" stroke-width="8" />
                    </svg>
                </a>
            </div>
        </div> --}}
    </div>

</section>

<section id="gallery">


    <script id="photoItemTemplate" type="text/template">


        <div class="picture-inner">
    <a href="<%= ARTICLE %>" target="_self" class="lookFullSize">
        <span class="ico-holder"><span class="ia icon-logo-eye"></span></span>
    </a>
    <div class="pic-description">
        <h5 class="tag"><%= TAG %></h5>
        <h5 class="title"><%= TITLE %></h5>
    </div>
</div>
    </script>
    <div class="gallery-holder" id="gallery-holder">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <div class="g-title">
                        <h5 class="h5">Аукцион</h5>
                        <h1 class="h1">Зёрна Арта</h1>
                        <div class="sub_h2">Лучшее из коллекции Всекохудожник 2020 г.</div>
                        <a class="h5_underline" href="#">Смотреть лоты →</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="gallery-inner">
            <div class="gallery-body">


                <div class="picture b-fixed-props" data-size="2" data-props="2,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2015/11/Графика_Judith-ann-Braun_FINGERING-10.-detail-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/графика/рисунки-углем-от-джудит-браун/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Графика</h5>
                            <h5 class="title">Рисунки углем от Джудит Браун</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2019/05/Берто-Моризо-1-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/кино/берта-моризо/" target="_self" class="lookFullSize"><span class="ico-holder"><span
                                    class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Кино</h5>
                            <h5 class="title">«Берта Моризо»: любовь через живопись</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="2" data-props="2,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2020/05/95813520_167162237963941_6727680087199580160_n-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/видео/жаринов-и-рындин/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Видео</h5>
                            <h5 class="title">Жаринов и Рындин I Разговор об искусстве</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="2" data-props="2,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2018/07/2-2-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/музыка/барокко-и-классицизм/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Музыка</h5>
                            <h5 class="title">Как слушать классику? Барокко и классицизм</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="2" data-props="2,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2017/06/Живопись_Василии-Поленов_Золотая-осень-1893-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/живопись/василий-поленов/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Живопись</h5>
                            <h5 class="title">Василий Поленов. Светлая живопись</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2017/05/Живопись_Александра-Левассер_10-300x300.jpg');">
                    <div class="picture-inner">
                        <a href="/живопись/александра-левассер/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Живопись</h5>
                            <h5 class="title">Александра Левассер – говорящая через живопись</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2018/08/jaEitQHnYPg-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/видео/клод-моне-3/" target="_self" class="lookFullSize"><span class="ico-holder"><span
                                    class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Видео</h5>
                            <h5 class="title">КЛОД МОНЕ</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2019/05/отголоски-прошлого-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/кино/отголоски-прошлого/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Кино</h5>
                            <h5 class="title">«Отголоски прошлого» двух великих</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2015/11/Стрит-арт_WallDogs_07-300x300.jpg');">
                    <div class="picture-inner">
                        <a href="/стрит-арт/художественная-роспись-стен-mural/" target="_self"
                            class="lookFullSize"><span class="ico-holder"><span
                                    class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Стрит-арт</h5>
                            <h5 class="title">Художественная роспись стен (mural) или печать?</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2015/05/Живопись_Александр-Маранов_Грань-2000-300x300.jpg');">
                    <div class="picture-inner">
                        <a href="/живопись/художник-космист-александр-маранов/" target="_self"
                            class="lookFullSize"><span class="ico-holder"><span
                                    class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Живопись</h5>
                            <h5 class="title">Художник-космист Александр Маранов</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2016/04/Музыкант_Anatoly-Ice-300x300.jpg');">
                    <div class="picture-inner">
                        <a href="/музыка/anatoly-ice/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Музыка</h5>
                            <h5 class="title">Anatoly Ice</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2016/04/Репортаж_Simiram.-2016_06-300x300.jpg');">
                    <div class="picture-inner">
                        <a href="/репортаж/simiram/" target="_self" class="lookFullSize"><span class="ico-holder"><span
                                    class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Репортаж</h5>
                            <h5 class="title">Simiram в Москве ! 29 апреля 2016</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,1"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2016/10/Живопись_Джованни-Баттиста-Тьеполо_Ринальдо-и-Армида-1757-300x300.jpg');">
                    <div class="picture-inner">
                        <a href="/живопись/джованни-баттиста-тьеполо-часть-1/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Живопись</h5>
                            <h5 class="title">Джованни Баттиста Тьеполо. Часть 1</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="2" data-props="2,2"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2015/07/Цифра_Chaotic-Atmospheres_09-800x800.png');">
                    <div class="picture-inner">
                        <a href="/цифра/chaotic-atmospheres/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Цифра</h5>
                            <h5 class="title">Chaotic Atmospheres</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="2" data-props="2,2"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2018/01/12-1-600x315.jpg');">
                    <div class="picture-inner">
                        <a href="/музыка/atl/" target="_self" class="lookFullSize"><span class="ico-holder"><span
                                    class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Музыка</h5>
                            <h5 class="title">Священный рэйв от ATL: артист дал подряд два концерта в Главклубе</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="2" data-props="2,2"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2017/06/Фотография_Джем-Крессвелл_04-800x800.jpg');">
                    <div class="picture-inner">
                        <a href="/фотография/джем-крессвелл/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Фотография</h5>
                            <h5 class="title">Джем Крессвелл – откровения морских гигантов</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,2"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2016/02/Музыка_La-Roux-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/музыка/la-roux-рыжеволосый-ангел-электропопа/" target="_self"
                            class="lookFullSize"><span class="ico-holder"><span
                                    class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Музыка</h5>
                            <h5 class="title">La Roux − рыжеволосый ангел электропопа</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,2"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2017/10/Музыка_Даите-Танк_Бал-престарелои-молодежи_01-1-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/музыка/бал-престарелой-молодежи/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Музыка</h5>
                            <h5 class="title">Бал престарелой молодежи</h5>
                        </div>
                    </div>
                </div>


                <div class="picture b-fixed-props" data-size="1" data-props="1,2"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2020/03/Фото-4-689x418.jpeg');">
                    <div class="picture-inner">
                        <a href="/кино/маттео-гарроне-пиноккио/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Кино</h5>
                            <h5 class="title">Пиноккио, будь человеком!</h5>
                        </div>
                    </div>
                </div>


                <div id="20" class="picture b-fixed-props" data-size="1" data-props="1,2"
                    style="background-image: url('https://artifex.ru/wp-content/uploads/2016/04/Живопись_Уильям-Тернер_The-shipwreck-of-the-Minotaur-689x418.jpg');">
                    <div class="picture-inner">
                        <a href="/кино/мистер-тернер/" target="_self" class="lookFullSize"><span
                                class="ico-holder"><span class="ia icon-logo-eye"></span></span></a>
                        <div class="pic-description">
                            <h5 class="tag">Кино</h5>
                            <h5 class="title">Мистер Тернер</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
@widget('marquee')
@endsection