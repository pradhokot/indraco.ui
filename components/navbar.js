document.write(`
<nav class="navbar navbar-expand-lg d-block text-capitalize">

    <div class="container">
        <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
            <i class="bi bi-three-dots-vertical"></i>
        </button>
        <a class="navbar-brand d-flex justify-content-center align-content-center m-0 position-relative" href="index.html">
            <img src="img/logo/logo-baru-dark.png" width="auto" height="20" alt="" class="d-lg-none">
            <img src="img/logo/logo-baru-dark.png" width="auto" height="36" alt="" class="d-none d-lg-block">
            <h1 class="position-absolute top-50 start-50 translate-middle fs-reset opacity-0">INDRACO</h1>
        </a>
        <button class="navbar-toggler">
            <i class="bi bi-search"></i>
        </button>
        <div class="collapse navbar-collapse">
            <script src="components/navbar_language.js"></script>
        </div>
    </div>

    <div class="container">
        <div class="offcanvas-lg offcanvas-start w-100" data-bs-scroll="true" data-bs-backdrop="static" tabindex="-1"
            id="sidebar" aria-labelledby="sidebarLabel">

            <div class="offcanvas-header pb-0">
                <h5 class="offcanvas-title opacity-50" id="sidebarLabel">
                    <img src="img/logo/logo-baru-dark.png" width="auto" height="20" alt="">
                </h5>
                <button type="button" class="btn-close" data-bs-toggle="offcanvas" data-bs-target="#sidebar"></button>
            </div>

            <div class="offcanvas-body">
                <div class="navbar-collapse">
                    <ul class="navbar-nav nav-breadcrumb me-auto">
                        <li class="nav-item">
                            <a class="nav-link" id="nav_about" href="about.html">
                                <h4>tentang kami</h4>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav_product" href="product.html">
                                <h4>produk</h4>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav_business" href="business.html">
                                <h4>bisnis</h4>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav_store" href="store.html">
                                <h4>official store</h4>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav_news" href="#">
                                <h4>berita & acara</h4>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <h4>brosur</h4>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav_career" href="#">
                                <h4>karir</h4>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav_contact" href="contact.html">
                                <h4>kontak</h4>
                            </a>
                        </li>
                    </ul>
                    <form class="d-none d-lg-flex border" role="search">
                        <input class="form-control me-2 text-reset bg-transparent border-0" type="search"
                            placeholder="Pencarian" aria-label="Search">
                        <button class="btn text-reset" type="submit">
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div class="offcanvas-header d-block d-lg-none pt-0">
                <hr class="mt-0">
                <script src="components/navbar_language.js"></script>
            </div>
        </div>

    </div>

</nav>
`)