@foreach($categories as $category)
<a href="/gallery#category-{{ $category->id }}"
    class="text-decoration-none d-flex justify-content-center align-items-center"
    style="background-image: url('{{ Voyager::image($category->thumbnail('preview', 'image')) }}')">
    <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">
        {{ $category->getTranslatedAttribute('title') }}</p>
</a>
@endforeach