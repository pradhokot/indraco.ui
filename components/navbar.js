document.write(` 
	<nav class="navbar navbar-expand-lg d-block">
		<div class="container">
			<button class="navbar-toggler" type="button">
				<i class="bi bi-search"></i>
			</button>
			<a class="navbar-brand position-relative d-flex justify-content-center align-items-center mx-0" href="#">
				<img src="img/logo/logo-baru-dark.png" width="auto" height="20" class="d-lg-none">
				<img src="img/logo/logo-baru-dark.png" width="auto" height="32" class="d-none d-lg-block">
				<h1 class="position-absolute top-50 start-50 translate-middle fs-3 opacity-0">INDRACO</h1>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navcol1" aria-controls="navcol1" aria-expanded="false" aria-label="Toggle navigation">
				<i class="bi bi-three-dots-vertical"></i>
			</button>
			<div class="collapse navbar-collapse">
				<script type="text/javascript" src="components/navbar-language.js"></script>
			</div>
		</div>
		<div class="container">
			<div class="offcanvas-lg offcanvas-end w-100" data-bs-backdrop="static" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="navcol1" aria-labelledby="navcol1Label">
				<div class="offcanvas-header">
					<h1 class="offcanvas-title fs-5 opacity-50" id="navcol1Label">INDRACO</h1>
					<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="offcanvas" data-bs-target="#navcol1"></button>
				</div>
				<div class="offcanvas-body py-0">
					<ul class="navbar-nav me-lg-auto navbar-nav-lg-vr text-capitalize">
						<li class="nav-item">
							<a class="nav-link" href="#">
								<h4 class="fs-reset mb-0">tentang kami</h4>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<h4 class="fs-reset mb-0">produk</h4>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<h4 class="fs-reset mb-0">bisnis</h4>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<h4 class="fs-reset mb-0">official store</h4>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<h4 class="fs-reset mb-0">berita & acara</h4>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<h4 class="fs-reset mb-0">brosur</h4>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<h4 class="fs-reset mb-0">karir</h4>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<h4 class="fs-reset mb-0">kontak</h4>
							</a>
						</li>
					</ul>
					<form class="d-none d-lg-flex" role="search">
						<button class="btn" type="submit">
							<i class="bi bi-search"></i>
						</button>
					</form>
					<div class="d-lg-none">
						<hr>
						<script type="text/javascript" src="components/navbar-language.js"></script>
					</div>
				</div>
			</div>
		</div>
	</nav> 
	`)