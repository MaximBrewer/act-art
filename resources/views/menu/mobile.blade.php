<ul class="list-unstyled">
    @foreach($items as $menu_item)
        <li class="text-nowrap"><a href="{{ $menu_item->link() }}">{{ $menu_item->getTranslatedAttribute('title')}}</a></li>
    @endforeach
</ul>