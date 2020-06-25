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
                <div class="sub_h1">Постоянно действующая галерея-аукцион в которой вы можете приобрести избранные
                    работы молодых российских авторов. Следите, выбирайте, торгуйтесь, собирайте свою коллекцию.
                    Еженедельное обновление.</div><br><br>
                <a href="#" class="h5 h5_underline">Как купить?</a>
            </div>

            {{-- <h3 class="h3">Как приобрести</h3>
                <ol>
                    <li>{{ __('Log in to your account') }}</li>
            <li>Выбирайте понравившиеся лоты</li>
            <li>Делайте ставки, следите за конкурентами</li>
            <li>Ставки принимаются 30 дней с момента выставления лота</li>
            <li>Если ваша ставка оказалась последней - вы становитесь обладателем лота</li>
            <li>Мы связываемся с вами и оговариваем условия оплаты и доставки</li>
            </ol> --}}
        </div>
        <div class="art-waterfall-wrapper">
            <div class="art-waterfall" id="artWaterfall"></div>
        </div>
    </div>
    <div class="dotted-gallery">
        <div class="dotted-bg"></div>
        <svg width="683" height="327" viewBox="0 0 683 327" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M341.766 0C82.3241 0 3.25041 175.809 0 183.307L81.5558 218.728C83.1514 215.245 109.391 159.692 184.032 122.5C180.295 136.259 178.407 150.454 178.418 164.71C178.387 186.006 182.558 207.1 190.693 226.784C198.828 246.469 210.767 264.359 225.828 279.431C240.889 294.504 258.776 306.463 278.467 314.625C298.157 322.787 319.265 326.992 340.584 327H342.771C385.749 327.031 426.982 310.018 457.411 279.699C487.84 249.38 504.976 208.234 505.055 165.301C505.089 151.357 503.321 137.467 499.795 123.975C573.254 161.581 600.617 216.367 602.213 219.673L683 182.244C679.631 174.805 595.475 0 341.766 0ZM435.2 239.686H332.015V136.609H435.2V239.686Z"
                fill="white" />
        </svg>


    </div>

</section>
<section id="popularCategories">
    <div class="pt-5 mb-5">
        <div class="container">
            <h3 class="py-4">Популярные категории</h3>
            <div class="row py-4">
                <div class="col col-lg-10">
                    <a href="#" class="text-decoration-none d-flex justify-content-center align-items-center"
                        style="background-image: url('/storage/images/photo-1590311825124-73ec5233cb0a.jpeg')">
                        <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">Живопись</p>
                    </a>
                </div>
                <div class="col col-lg-10">
                    <a href="#" class="text-decoration-none d-flex justify-content-center align-items-center"
                        style="background-image: url('/storage/images/photo-1592250619768-9adfd4c776c9.jpeg')">
                        <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">Графика</p>
                    </a>
                </div>
                <div class="col col-lg-10">
                    <a href="#" class="text-decoration-none d-flex justify-content-center align-items-center"
                        style="background-image: url('/storage/images/photo-1592268594767-ead5c74ee773.jpeg')">
                        <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">инсталяции</p>
                    </a>
                </div>
                <div class="col col-lg-10">
                    <a href="#" class="text-decoration-none d-flex justify-content-center align-items-center"
                        style="background-image: url('/storage/images/photo-1591726185073-8a8e17e42e20.jpeg')">
                        <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">скульптура</p>
                    </a>
                </div>
                <div class="col col-lg-10">
                    <a href="#" class="text-decoration-none d-flex justify-content-center align-items-center"
                        style="background-image: url('/storage/images/photo-1590781585743-7b5fb00a0cc9.jpeg')">
                        <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">прикладное</p>
                    </a>
                </div>
                <div class="col col-lg-10">
                    <a href="#" class="text-decoration-none d-flex justify-content-center align-items-center"
                        style="background-image: url('/storage/images/photo-1590653273912-89e0c5b46d97.jpeg')">
                        <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">другое</p>
                    </a>
                </div>
            </div>
            <div class="d-flex mt-5 justify-content-center align-items-end">
                <button class="btn btn-lg btn-primary">СМОТРЕТЬ ВСЕ РАБОТЫ</button>
            </div>
        </div>
    </div>
</section>

<section id="homeAbout">
    <div class="background-text"><svg width="1648" height="218" viewBox="0 0 1648 218" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M416.16 90.8597C415.97 44.8114 378.501 5.64502 332.299 5.64502H313.247C266.919 5.64502 229.355 45.0334 229.355 91.272V132.119C229.355 178.358 266.919 217.302 313.247 217.302H332.299C378.501 217.302 415.938 178.612 416.16 132.532H365.164V174.203H281.621V49.1879H365.164V90.8597H416.16Z"
                fill="#6C92A8" />
            <path
                d="M1220.28 49.1879V7.54785H1074.22V49.1879H1168.08V82.4556C1156.1 74.4401 1142.01 70.1675 1127.59 70.1824H1105.56C1086.19 70.1824 1067.61 77.8673 1053.92 91.5465C1040.22 105.226 1032.52 123.779 1032.52 143.124C1032.52 183.369 1065.2 217.271 1105.56 217.271H1127.59C1145.4 217.222 1162.55 210.551 1175.7 198.559C1179.51 203.961 1184.57 208.368 1190.44 211.409C1196.32 214.45 1202.84 216.036 1209.45 216.034H1241.21V174.203H1220.28V49.1879ZM1168.14 174.013H1085.36V111.981H1168.14V174.013Z"
                fill="#6C92A8" />
            <path
                d="M120.663 7.54785H10.4157V46.8728C17.1782 48.4029 24.0897 49.1794 31.0236 49.1879H43.725C57.6527 49.2191 71.4036 46.0725 83.9285 39.9882C96.4534 33.904 107.421 25.0428 115.996 14.0809L128.697 78.1108C118.399 72.6509 106.92 69.7876 95.2607 69.7701H73.0333C53.6638 69.7701 35.0877 77.455 21.3914 91.1342C7.69508 104.813 0.000578028 123.366 0.000578028 142.712C-0.0764766 162.198 7.55312 180.926 21.2299 194.824C34.9066 208.721 53.5243 216.663 73.0333 216.922H95.2607C106.027 216.823 116.638 214.336 126.325 209.641C136.012 204.947 144.533 198.161 151.274 189.775L156.513 215.875H208.588L166.833 7.54785H120.663ZM52.2349 173.855V111.696H135.556L148.035 173.855H52.2349Z"
                fill="#6C92A8" />
            <path
                d="M803.107 0C663.646 0 621.223 94.4434 619.477 98.4711L663.297 117.499C664.154 115.628 678.252 85.7856 718.357 65.8059C716.349 73.1973 715.335 80.8226 715.34 88.4812C715.349 111.564 724.536 133.698 740.881 150.017C757.226 166.336 779.392 175.504 802.503 175.504H803.71C826.767 175.504 848.884 166.38 865.22 150.13C881.556 133.879 890.78 111.826 890.873 88.7984C890.875 81.3716 889.925 73.9751 888.047 66.7891C927.389 86.9907 942.218 116.421 943.075 118.197L986.451 98.0905C984.609 93.9043 939.424 0 803.107 0ZM853.309 128.758H797.899V73.3855H853.309V128.758Z"
                fill="#6C92A8" />
            <path
                d="M427.623 48.5219H479.921V174.425C479.921 185.36 484.27 195.846 492.011 203.578C499.753 211.31 510.252 215.653 521.2 215.653H552.954V174.203H532.092V48.5219H584.262V6.8501H427.623V48.5219Z"
                fill="#6C92A8" />
            <path
                d="M1595.77 7.54785H1491.46V49.188H1543.63V163.801C1543.63 192.566 1566.97 218 1595.77 218V49.188H1648V7.54785H1595.77Z"
                fill="#6C92A8" />
            <path
                d="M1470.59 80.4576C1470.59 61.1123 1462.9 42.5594 1449.2 28.8802C1435.51 15.201 1416.93 7.51611 1397.56 7.51611H1282.84V215.875H1334.98V153.367H1374.67L1378.95 174.425C1385.3 200.621 1405.69 215.653 1428.55 215.653H1460.31V174.203H1431.22L1425.73 147.754C1439.02 142.206 1450.37 132.857 1458.35 120.883C1466.33 108.908 1470.59 94.8437 1470.59 80.4576ZM1418.11 111.41H1335.01V49.1879H1418.11V111.41Z"
                fill="#6C92A8" />
        </svg>
    </div>
    <div class="container">
        <div class="sticky-section"><span>о проекте</span></div>
    </div>
</section>

@widget('marquee')

<section id="gallery">
    <div class="gallery-holder" id="galleryHolder"></div>
</section>
@widget('marquee')
@endsection