<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!--========= Required meta tags =========-->
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!--====== Title ======-->
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!--====== Favicon ======-->
    <link rel="shortcut icon" href="/frontend/images/logo/favicon.ico" type="images/x-icon" />

    <!--====== CSS Here ======-->
    {{-- <link rel="stylesheet" href="/frontend/css/bootstrap.min.css">
    <link rel="stylesheet" href="/frontend/css/font-awesome.min.css">
    <link rel="stylesheet" href="/frontend/css/lightcase.css">
    <link rel="stylesheet" href="/frontend/css/meanmenu.css">
    <link rel="stylesheet" href="/frontend/css/nice-select.css">
    <link rel="stylesheet" href="/frontend/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/frontend/css/animate.min.css">
    <link rel="stylesheet" href="/frontend/css/jquery-ui.css">
    <link rel="stylesheet" href="/frontend/css/main.css"> --}}
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>


<body class="dark-bg">
    @inertia
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->


    <!--========= JS Here =========-->
    {{-- <script src="/frontend/js/jquery-2.2.4.min.js"></script>
    <script src="/frontend/js/bootstrap.bundle.min.js"></script>
    <script src="/frontend/js/jquery.meanmenu.min.js"></script>
    <script src="/frontend/js/jquery.nice-select.min.js"></script>
    <script src="/frontend/js/lightcase.js"></script>
    <script src="/frontend/js/owl.carousel.min.js"></script>
    <script src="/frontend/js/tilt.jquery.min.js"></script>
    <script src="/frontend/js/wow.min.js"></script>
    <script src="/frontend/js/jquery.easing.min.js"></script>
    <script src="/frontend/js/scrollwatch.js"></script>
    <script src="/frontend/js/sticky-header.js"></script>
    <script src="/frontend/js/waypoint.js"></script>
    <script src="/frontend/js/imagesloaded.pkgd.min.js"></script>
    <script src="/frontend/js/isotope.pkgd.min.js"></script>
    <script src="/frontend/js/jquery-ui-slider-range.js"></script>
    <script src="/frontend/js/main.js"></script> --}}
    {{-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfpGBFn5yRPvJrvAKoGIdj1O1aO9QisgQ"></script> --}}
</body>

</html>
