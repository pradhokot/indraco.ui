document.write(`
<ul class="navbar-nav nav ps-4 flex-column ps-lg-0">
    <li class="nav-item">
        <div class="d-lg-none">
            <a class="nav-link px-0" data-bs-toggle="collapse" href="#navcol_consumen_product">
                <h4 class="fs-reset mb-0 lh-base">produk konsumen</h4>
            </a>
            <div class="collapse" id="navcol_consumen_product">
                <script src="components/navbar_consumen_product.js"></script>
            </div>
        </div>
        <div class="d-none d-lg-block">
            <a class="nav-link px-0 active" data-bs-toggle="tab" href="#tab_consumen_product">
                <h4 class="fs-reset mb-0 lh-base">produk konsumen</h4>
            </a>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link px-0" data-bs-toggle="tab" href="#tab_foodservice">
            <h4 class="fs-reset mb-0 lh-base">foodservice</h4>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link px-0" data-bs-toggle="tab" href="#tab_machine_peralatan">
            <h4 class="fs-reset mb-0 lh-base">mesin-mesin dan peralatan khusus
            </h4>
        </a>
    </li>
</ul>
`)