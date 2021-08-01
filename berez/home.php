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
      <div class="container wrapper-container">
        <div class="title-wrap col-lg-5">
          <h1 class="main-title">Парк Отель "Березка"</h1>
          <span class="main-title--descr">Забронируйте номер онлайн или по номеру телефона +38 (067) 761-20-17</span> 
        </div>
        <div class="form-wrap col-lg-3">
        <form action="" class="main-form">
          <h3 class="form-title">Оставьте запрос на лучшую цену кемпинг "Альянс"</h3>
          <textarea class="textfield--msg" placeholder="Ваше имя, количество человек и даты"></textarea>
          <input type="phone" class="textfield--phone" placeholder="Ваш телефон/Viber">
          <button type="button" class="btn-submit">Хочу на море</button>
        </form>
        </div>
      </div>
    </section>  
    <!-- ../TOP CONTENT -->

    <!-- BENEFITS -->
    <section class="benefits">
      <div class="container">
        <h2 class="benefits-title">Почему Парк Отель Берёзка бронируют с нами</h2>
        <ul class="row benefits-list">
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count">100%</div>
              <span class="benefits-count--descr">Гарантия заселения</span>
            </div>
          </li>
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count">24/7</div>
              <span class="benefits-count--descr">Круглосуточная поддержка</span>
            </div>
          </li>
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count">до 40%</div>
              <span class="benefits-count--descr">Дисконтная карта</span>
            </div>
          </li>
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count">0%</div>
              <span class="benefits-count--descr">Бронь без комиссии</span>
            </div>
          </li>
          <li class="benefits-item">
            <div class="benefits-wrap--flex">
              <div class="benefits--count">10+</div>
              <span class="benefits-count--descr">Более 10 способов оплаты</span>
            </div>
          </li>
        </ul>
        <p class="benefits--descr">Парк-отель «Березка» — уютный семейный комплекс на берегу черноморского курорта Коблево, в Николаевской зоне. В распоряжении гостей здания в четыре и шесть этажей с быстрым лифтом и свежеобустроенными номерами, а еще 12 одноэтажных коттеджей с выходом на частный пляж. Сто метров неприкосновенной территории пляжа с симпатичными навесами от палящего солнца и неограниченный доступ к морю превратят отдых с детьми в увлекательное морское приключение. Также гости могут прогуляться по сосновому бору на территории отеля.</p>
      </div>
    </section>
    <!-- ../BENEFITS -->
    
    <!-- GALLERY -->
      <section class="gallery-container">
        <div class="container">
          <ul class="gallery-wrap-list">
            <li class="col-lg-4 gallery--item">
              <a href="#" class="gallery--link">
                <img src="<?php echo get_template_directory_uri();?>/assets/img/gal1.jpg" alt="" class="gallery--img">
              </a>
            </li>
            <li class="col-lg-4 gallery--item">
              <a href="#" class="gallery--link">
                <img src="<?php echo get_template_directory_uri();?>/assets/img/gal2.jpg" alt="" class="gallery--img">
              </a>
            </li>
            <li class="col-lg-4 gallery--item">
              <a href="#" class="gallery--link">
                <img src="<?php echo get_template_directory_uri();?>/assets/img/gal3.jpg" alt="" class="gallery--img">
              </a>
            </li>
          </ul>
          <a href="#" class="btn-gallery--all col-lg-2">Смотреть все фото</a>
        </div>
      </section>        
    <!-- ../GALLERY -->

    <!-- HOTEL ROOMS -->
      <section class="rooms">
        <div class="container">
          <h2 class="rooms-main-title">Популярные номера</h2>
          <ul class="rooms-list">
            <li class="col-lg-3 rooms-item">
              <img src="<?php echo get_template_directory_uri();?>/assets/img/num4.jpg" class="room-img" alt="room">
              <div class="room-descr--wrap">
                <div class="room-content">
                <p class="room-title">Стандарт 2-х местный (север, юг) <span class="room-s">Площадь 14 кв.м</span></p>
                <p class="room--number-place">Кол-во спальных мест: 2</p>
                <hr>
                  <ul class="room-descr--list">
                    <li class="room-descr--item">WiFi</li>
                    <li class="room-descr--item">Кондиционер</li>
                    <li class="room-descr--item">Балкон</li>
                    <li class="room-descr--item">Санузел</li>
                    <li class="room-descr--item">Холодильник</li>
                  </ul>
                </div>
              <div class="room-foot">   
                  <span class="room-price">от 968 грн</span>
                  <button type="button" class="btn-submit margin-top15">Бронировать</button>
                </div>  
              </div>
            </li>

            <li class="col-lg-3 rooms-item">
              <img src="<?php echo get_template_directory_uri();?>/assets/img/num3.jpg" class="room-img" alt="room">
               <div class="room-descr--wrap">
                <div class="room-content">
                <p class="room-title">Стандарт 3-х местный (север, юг) <span class="room-s">Площадь 14 кв.м</span></p>
                <p class="room--number-place">Кол-во спальных мест: 3</p>
                <hr>
                  <ul class="room-descr--list">
                    <li class="room-descr--item">WiFi</li>
                    <li class="room-descr--item">Кондиционер</li>
                    <li class="room-descr--item">Балкон</li>
                    <li class="room-descr--item">Санузел</li>
                    <li class="room-descr--item">Холодильник</li>
                    <li class="room-descr--item">Сейф</li>
                    <li class="room-descr--item">Чайник</li>
                  </ul>
                  </div>
                <div class="room-foot">
                  <span class="room-price">от 1398 грн</span>
                  <button type="button" class="btn-submit margin-top15">Бронировать</button>
                </div>  
              </div>
            </li>

            <li class="col-lg-3 rooms-item">
              <img src="<?php echo get_template_directory_uri();?>/assets/img/num2.jpg" class="room-img" alt="room">
              <div class="room-descr--wrap">
                <div class="room-content">
                <p class="room-title">Коттедж 2-х местный (север, юг) <span class="room-s">Площадь 14 кв.м</span></p>
                <p class="room--number-place">Кол-во спальных мест: 2</p>
                <hr>
                  <ul class="room-descr--list">
                    <li class="room-descr--item">WiFi</li>
                    <li class="room-descr--item">Кондиционер</li>
                    <li class="room-descr--item">Балкон</li>
                    <li class="room-descr--item">Санузел</li>
                    <li class="room-descr--item">Холодильник</li>
                    <li class="room-descr--item">Чайник</li>
                    <li class="room-descr--item">Туалетные принадлежности</li>
                  </ul>
                </div>
                <div class="room-foot">
                  <span class="room-price">от 888 грн</span>
                  <button type="button" class="btn-submit margin-top15">Бронировать</button>
                </div>
              </div>
            </li>

            <li class="col-lg-3 rooms-item">
              <img src="<?php echo get_template_directory_uri();?>/assets/img/num1.jpg" class="room-img" alt="room">
              <div class="room-descr--wrap">
                <div class="room-content">
                <p class="room-title">Стандарт 4-х местный (север, юг) <span class="room-s">Площадь 14 кв.м</span></p>
                <p class="room--number-place">Кол-во спальных мест: 4</p>
                <hr>
                  <ul class="room-descr--list">
                    <li class="room-descr--item">WiFi</li>
                    <li class="room-descr--item">Кондиционер</li>
                    <li class="room-descr--item">Балкон</li>
                    <li class="room-descr--item">Санузел</li>
                    <li class="room-descr--item">Холодильник</li>
                    <li class="room-descr--item">Сейф</li>
                    <li class="room-descr--item">Чайник</li>
                  </ul>
              </div>
              <div class="room-foot">   
                  <span class="room-price">от 2098 грн</span>
                  <button type="button" class="btn-submit margin-top15">Бронировать</button>
                </div>  
              </div>
            </li>
          </ul> 
        </div>
      </section>
    <!-- ../HOTEL ROOMS -->
  </main>
  <!-- ../main -->

