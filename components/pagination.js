document.write(`
<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
        <li class="page-item">
            <a class="page-link" href="#">
                <i class="bi bi-chevron-double-left"></i>
                <span class="d-none d-lg-inline">Sebelumnya</span>
            </a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#">
                <span class="d-none d-lg-inline">Berikutnya</span>
                <i class="bi bi-chevron-double-right"></i>
            </a>
        </li>
    </ul>
</nav>
<style>
    .pagination .page-link {
        border-radius: 0 !important;
        color: inherit;
    }

    .pagination .page-item.active .page-link {
        background-color: #565656;
        border-color: #565656;
        color: #ffffff;
    }
</style>
`)