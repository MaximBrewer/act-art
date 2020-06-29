<ul class="list-unstyled">
    @foreach($items as $k => $menu_item)
    <li><a href="{{ $menu_item->link() }}">{{ $menu_item->getTranslatedAttribute('title')}}</a></li>
    @endforeach
</ul>