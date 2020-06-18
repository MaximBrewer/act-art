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
                    <li>{{ __('Log in to your account') }}</li>
                    <li>Выбирайте понравившиеся лоты</li>
                    <li>Делайте ставки, следите за конкурентами</li>
                    <li>Ставки принимаются 30 дней с момента выставления лота</li>
                    <li>Если ваша ставка оказалась последней - вы становитесь обладателем лота</li>
                    <li>Мы связываемся с вами и оговариваем условия оплаты и доставки</li>
                </ol>
            </div>
        </div>
        <div class="waterfall-wrapper">
            <div class="art-waterfall" id="artWaterfall"></div>
        </div>
    </div>

</section>
<section>

</section>

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>
@widget('marquee')
@endsection