<form>
    <div class="form-group mb-0">
        <label
            for="subscribeFooterEmail">{{  __('Be the first to know about new lots, special offers, new exhibitions in our mailing list') }}</label>
        <div class="input-group">
            <div class="input-group-prepend d-none d-lg-block">
                @include('svg.footer.mail')
            </div>
            <input type="email" class="form-control" aria-describedby="email" placeholder="{{  __('Your E-mail') }}"
                id="subscribeFooterEmail">
        </div>
    </div>
</form>