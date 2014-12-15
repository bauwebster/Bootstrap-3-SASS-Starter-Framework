<?php
	$pageTitle = "Page Title";
	$pageClass = "page";
	require_once("header.php");
?>
	<main id="site-content" role="main">

		<article class="wow fadeInUp" data-wow-duration="1s">

			<header>
				<h1><?php echo $pageTitle; ?></h1>
			</header>
			<hr/>
			<section class="content-block">
				<p>Some Content Goes Here. Morbi maximus libero ut libero eleifend, non tincidunt ex consequat. Morbi semper rhoncus dui, nec ultrices ligula pulvinar non. Nulla iaculis est eu purus ornare varius. Aenean congue maximus mattis. Maecenas a ultrices metus. Phasellus mollis risus magna, in mattis nisi gravida eu. Vestibulum purus nulla, tempor at tincidunt quis, facilisis nec justo. Nulla elementum lorem tellus, eu porttitor quam faucibus imperdiet.</p>
			</section>

		</article>

	</main>

<?php require_once("footer.php"); ?>