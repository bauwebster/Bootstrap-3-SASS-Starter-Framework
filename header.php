<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><?php echo $pageTitle; ?> | Site Name</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192">
		<link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160">
		<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
		<meta name="msapplication-TileColor" content="#57407c">
		<meta name="msapplication-TileImage" content="/mstile-144x144.png">

		<!-- Add OpenSans Font from Google Web Fonts -->
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600,300' rel='stylesheet' type='text/css'>

		<!-- Add FontAwesome Font Icons -->
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

		<!-- Main Site Styles -->
		<link rel="stylesheet" href="css/main.css">

		<!-- Layout Styles -->
		<link rel="stylesheet" href="css/<?php echo $pageClass; ?>.css">

		<!-- Feature Detect Via Modernizr and IE8 Responsive Fix -->
		<script src="js/modernizr-2.6.2-respond-1.1.0.min.js"></script>

		<!--[if gte IE 9]>
			<style type="text/css">
				.gradient {
					filter: none;
				}
			</style>
		<![endif]-->
	</head>
	<body class="<?php echo $pageClass; ?>">
		<!--[if lt IE 7]>
				<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<div id="header-wrapper">

			<nav id="site-main-navigation" class="navbar navbar-default" role="navigation">
			  <div class="container">
			    <div class="navbar-header">
				    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" href="index.php">Site Logo</a>
			    </div>
			    <div id="main-nav" class="collapse navbar-collapse">
			      <ul class="nav navbar-nav">
			        <li class="active"><a href="#">Active Menu Item</a></li>
			        <li><a href="#">Menu Item</a></li>
			      </ul>
			      <form class="navbar-form navbar-right" role="search">
			        <div class="input-group">
					      <input type="text" class="form-control" placeholder="Search">
					      <span class="input-group-btn">
					        <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
					      </span>
					    </div><!-- // input-group -->
			      </form>
			    </div><!-- // .navbar-collapse -->
			  </div><!-- // .container -->
			</nav><!-- // #site-main-navigation -->

			<header id="site-header" role="banner">
				<h1>Banner Title</h1>
			</header><!-- // #site-header -->

		</div><!-- // #header-wrapper -->