<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Test-Berezka
 */

get_header();
?>

	<main id="primary" class="site-main">

		<div class="room-descr--wrap">
            <div class="room-content">
            <div class="room-img"><?php the_post_thumbnail(); ?></div>
            <p class="room-title"><?php the_title(); ?> <span class="room-s"><?php the_field('ploshhad'); ?></span></p>
            <p class="room--number-place"><?php the_field('kol-vo_mest'); ?></p>
            <hr>
              <ul class="room-descr--list">
               <?php 
	               $repeater = get_field( 'company_address' );
					foreach( $repeater as $item ) {
						?>
					<li class="room-descr--item"><?php echo $item ?></li>	
					<?php 
					}
				?>
              </ul>
            </div>
          <div class="room-foot">   
              <span class="room-price"><?php the_field('czena'); ?></span>
              <button type="button" class="btn-submit margin-top15"><?php the_field('knopka'); ?></button>
            </div>  
          </div>

	</main><!-- #main -->

<?php
get_footer();
