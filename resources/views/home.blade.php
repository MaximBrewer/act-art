@extends('layouts.app')

@section('content')
<section class="home-banner">
    <div class="background-text">АУКЦИОНы</div>
    <div class="container">
        <div class="sticky-section"><span>ближайшие аукционы</span></div>
        <div id="bannerCarousel" class="carousel"></div>
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
    <div class="gallery-holder" id="gallery-holder"></div>
</section>
@widget('marquee')
@endsection