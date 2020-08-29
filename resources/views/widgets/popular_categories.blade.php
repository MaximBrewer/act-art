<div class="popular-categories">
    <h4 class="py-4 h4">{{ __('Popular Categories') }}</h3>
    <div class="py-4 d-flex justify-content-between categories">
        @foreach($categories as $category)
        <a href="/gallery/category/{{ $category->id }}"
            class="text-decoration-none d-flex justify-content-center align-items-center"
            style="background-image: url('{{ Voyager::image($category->thumbnail('preview', 'image')) }}')">
            <p class="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">
                {{ $category->getTranslatedAttribute('title') }}</p>
        </a>
        @endforeach
    </div>
    <div class="d-flex mt-5 justify-content-center align-items-end">
        <a href="/gallery" class="btn btn-xl btn-primary">{{ __('VIEW ALL WORKS') }}</a>
    </div>
</div>