<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Test-Berezka
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'test-berezka' ); ?></a>
	<!-- header -->
	<header class="header container">
		
	  <div class="contacts-wrap">
	  	<!-- nav menu -->
		<nav class="navbar navbar-expand-lg navbar-light">
		<?php
			$custom_logo = wp_get_attachment_image( get_theme_mod( 'custom_logo' ), 'full' );
		?>
		  <a class="navbar-brand custom-navbar" href="<?php echo home_url() ?>">
		    <?php echo $custom_logo ?>
		  </a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
	
		     <?php wp_nav_menu(array(
		      'menu'            => 'Primary Menu',
              'theme_location'  => 'Primary Menu',
              'container'       => null, 
              'menu_class'      => 'navbar-nav', 
              'menu_id'         => 'nav',
              'depth'           => 2,    
              'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
              'walker'          => new WP_Bootstrap_Navwalker()
           )); ?>

		  </div>
		</nav>
		<!-- ../nav menu -->
        <div class="contactPhones">
          <div class="contact-link">
            <div class="phone-wrap-column">
              <div class="phone-wrap">		
				<!--Site phone--->
				<?php 
				$tel = get_option('site_telephone');
				if($tel != null){ ?>
                <span class="contact-link-descrPhone"><?php echo get_option('site_telephone'); ?></span>
                <?php } ?>  
              </div>
            </div>
            <!-- Site descr -->
            <?php 
				$contact_inf = get_option('theme_contacttext');
				if($contact_inf != null){ ?>
            	<a class="contact-link-descrAdress" href="#"><?php echo $contact_inf; ?></a>
            <?php } ?>
          </div>
        </div>
      </div>  
	</header>
	<!-- ../header -->
	
	<script>
		// стилизуем меню (добавим классы со стилями к пунктам)
		jQuery('#nav > li > a').addClass('nav-item nav-link nav-link--custom');
	</script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>	
	
