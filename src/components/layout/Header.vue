<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-darkblue">
        <a class="navbar-brand" href="models.html">
            <img src="../../assets/img/FDM-Logo.png" height="70px">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100 order-2 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                        <div class="nav-icon"><i class="fas fa-search-plus"></i></div>
                        <div class="nav-icon-text">Discover more<span class="sr-only">(current)</span></div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="./cross_validation.html">Cross-Validation</a>
                        <a class="dropdown-item" href="./missing_models_list.html">Work in progress</a>
                    </div>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="./about.html">
                        <div class="nav-icon"><i class="fas fa-info"></i></div>
                        <div class="nav-icon-text">About<span class="sr-only">(current)</span></div>
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="./contacts.html">
                        <div class="nav-icon"><i class="fas fa-user-friends"></i></div>
                        <div class="nav-icon-text">Get Involved<span class="sr-only">(current)</span></div>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>