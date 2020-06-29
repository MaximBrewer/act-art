<ul class="list-group list-group-flush">
    @foreach($items as $k => $menu_item)
    <li class="list-group-item @if($k == 0) list-group-item-header @endif"><a href="{{ $menu_item->link() }}">{{ $menu_item->getTranslatedAttribute('title')}}</a></li>
    @endforeach
</ul>