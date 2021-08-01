<?php 
  /*
  Template Name: Home
  */
  get_header('');
?>

<!-- main -->
  <main class="main">
    <!-- TOP CONTENT -->
    <section class="top-content">
      <img src="<?php the_field('background-img'); ?>" class="background-img" alt="">
      <div class="container wrapper-container">
        <div class="title-wrap col-lg-5">
          <?php if( get_field('main-title') ): ?>
            <h1 class="main-title"><?php the_field('main-title'); ?> </h1>
          <?php endif; ?>
          <?php if( get_field('main-description') ): ?>
            <span class="main-title--descr"><?php the_field('main-description'); ?></span> 
          <?php endif; ?>
        </div>
        <div class="form-wrap col-lg-3">
          <?php echo do_shortcode ('[contact-form-7 id="35" title="Контактная форма 1"]') ?>
        </div>
      </div>
    </section>  
    <!-- ../TOP CONTENT -->

    <!-- BENEFITS -->
    <section class="benefits">
      <div class="container">
         <?php if( get_field('benefits-title') ): ?>
            <h2 class="benefits-title"><?php the_field('benefits-title'); ?></h2>
          <?php endif; ?>
        <ul class="row benefits-list">
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count"><?php the_field('benefits-count-1'); ?></div>
              <span class="benefits-count--descr"><?php the_field('benefits-descr-1'); ?></span>
            </div>
          </li>
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count"><?php the_field('benefits-count-2'); ?></div>
              <span class="benefits-count--descr"><?php the_field('benefits-descr-2'); ?></span>
            </div>
          </li>
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
             <div class="benefits--count"><?php the_field('benefits-count-3'); ?></div>
              <span class="benefits-count--descr"><?php the_field('benefits-descr-3'); ?></span>
            </div>
          </li>
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count"><?php the_field('benefits-count-4'); ?></div>
              <span class="benefits-count--descr"><?php the_field('benefits-descr-4'); ?></span>
            </div>
          </li>
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count"><?php the_field('benefits-count-5'); ?></div>
              <span class="benefits-count--descr"><?php the_field('benefits-descr-5'); ?></span>
            </div>
          </li>
        </ul>
        <?php if( get_field('benefits-title') ): ?>
          <p class="benefits--descr"><?php the_field('benefits-description'); ?></p>
        <?php endif; ?>  
      </div>
    </section>
    <!-- ../BENEFITS -->
    
    <!-- GALLERY -->
      <section class="gallery-container">
        <div class="container">
          <ul class="gallery-wrap-list">
            <li class="col-lg-4 gallery--item">
              <a href="#" class="gallery--link">
                <img src="<?php the_field('img-1'); ?>" alt="" class="gallery--img">
              </a>
            </li>
            <li class="col-lg-4 gallery--item">
              <a href="#" class="gallery--link">
                <img src="<?php the_field('img-2'); ?>" alt="" class="gallery--img">
              </a>
            </li>
            <li class="col-lg-4 gallery--item">
              <a href="#" class="gallery--link">
                <img src="<?php the_field('img-3'); ?>" alt="" class="gallery--img">
              </a>
            </li>
          </ul>
          <a href="#" class="btn-gallery--all col-lg-2"><?php the_field('btn-text'); ?></a>
        </div>
      </section>        
    <!-- ../GALLERY -->

    <!-- HOTEL ROOMS -->
      <section class="rooms">
        <div class="container">
          <h2 class="rooms-main-title"><?php the_field('section-3-title'); ?></h2>
          
          <ul class="rooms-list">
            <?php
             // выводим кастомный тип записей 
              $posts = get_posts( array(
                'numberposts' => 4,
                'post_type'   => 'rooms',
                'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
              ) );

              foreach( $posts as $post ){
                setup_postdata($post);
            ?>
            <li class="col-lg-3 rooms-item">
              <!-- изображение записи -->
              <div class="room-img"><?php the_post_thumbnail(); ?></div>
               <!-- описание -->
              <div class="room-descr--wrap">
                <div class="room-content">
                      <p class="room-title"><?php the_title(); ?> <span class="room-s"><?php the_field('ploshhad'); ?></span></p>
                      <p class="room--number-place"><?php the_field('kol-vo_mest'); ?></p>
                      <hr>
                        <div class="room-descr--list">
                         <?php 
                           $repeater = get_field( 'company_address' );
                    foreach( $repeater as $item ) {
                      ?>
                    <div class="room-descr--item"><?php echo $item ?></div> 
                    <?php 
                    }
                  ?>
                  </div>
                </div>
              <div class="room-foot">   
                  <span class="room-price"><?php the_field('czena'); ?></span>
                  <button type="button" class="btn-submit margin-top15"><?php the_field('knopka'); ?></button>
                </div>  
              </div>
            </li>
              <?php
                }
                wp_reset_postdata(); // сброс
              ?>
          </ul>           
        </div>
      </section>
    <!-- ../HOTEL ROOMS -->
  </main>
  <!-- ../main -->

