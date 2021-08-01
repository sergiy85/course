<?php
/**
 * Test-Berezka functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Test-Berezka
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'test_berezka_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function test_berezka_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Test-Berezka, use a find and replace
		 * to change 'test-berezka' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'test-berezka', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		
		// register_nav_menus(
		// 	array(
		// 		'menu-1' => esc_html__( 'Primary', 'test-berezka' ),
		// 	)
		// );

		// add_action( 'after_setup_theme', 'theme_register_nav_menu' );
		
		// function theme_register_nav_menu() {
		// 	register_nav_menu( 'primary', 'Primary Menu' );
		// }
		

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'test_berezka_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'test_berezka_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function test_berezka_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'test_berezka_content_width', 640 );
}
add_action( 'after_setup_theme', 'test_berezka_content_width', 0 );

/**
 * Register  custom post type
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */

add_action('init', 'my_custom_init');
	
	function my_custom_init(){
	  register_post_type('rooms', array(
		'labels'             => array(
			'name'               => 'Доступные номера', // Основное название типа записи
			'singular_name'      => 'Доступные номера', // отдельное название записи типа Book
			'add_new'            => 'Добавить',
			'add_new_item'       => 'Добавление',
			'edit_item'          => 'Редактировать',
			'new_item'           => 'Новый',
			'view_item'          => 'Смотреть',
			'search_items'       => 'Искать',
			'not_found'          => 'не найдено',
			'not_found_in_trash' => 'Не найдено в корзине',
			'parent_item_colon'  => '',
			'menu_name'          => 'Доступные номера'

		  ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 2,
		'supports'           => array('title','editor','author','thumbnail','excerpt','comments', 'custom-fields')
		));
	}


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function test_berezka_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'test-berezka' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'test-berezka' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	); 
}
add_action( 'widgets_init', 'test_berezka_widgets_init' );

/**
* Добавляет блок для ввода контактных данных
*/
function mytheme_customize_register( $wp_customize ) {
/*
Добавляем секцию в настройки темы
*/
	$wp_customize->add_section(
// ID
	'data_site_section',
// Массив аргументов
	array(
		'title' => 'Контактные данные',
		'capability' => 'edit_theme_options',
		'description' => "Укажите свои контакты"    )
	);
/*
Добавляем поле контактных данных
*/
	$wp_customize->add_setting(
// ID
	'theme_contacttext',
// Массив аргументов
	array(
		'default' => '',
		'type' => 'option'
		)
	);
	
	$wp_customize->add_control(
// ID
	'theme_contacttext_control',
// Массив аргументов
	array(
		'type' => 'text',
		'label' => "Текст с контактной информацией",
		'section' => 'data_site_section',
		'settings' => 'theme_contacttext'
		)
	);
/*
Добавляем поле телефона site_telephone
*/
	$wp_customize->add_setting(
// ID
	'site_telephone',
// Массив аргументов
	array(
		'default' => '',
		'type' => 'option'
		)
	);
	
	$wp_customize->add_control(
// ID
	'site_telephone_control',
// Массив аргументов
	array(
		'type' => 'text',
		'label' => "Текст с телефоном",
		'section' => 'data_site_section',
		'settings' => 'site_telephone'
		)
	);
	}
add_action( 'customize_register', 'mytheme_customize_register' );

/**
 * Enqueue scripts and styles.
 */
function test_berezka_scripts() {
	wp_enqueue_style('style', get_stylesheet_uri());
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css');

	wp_enqueue_script( 'path-jQuery', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', null, null, true );
	wp_enqueue_script('jquery-min', get_template_directory_uri() . '/assets/js/jquery.min.js');

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'test_berezka_scripts' );


/**
 * Implement custom navigation walker
 */
require_once ('class-wp-bootstrap-navwalker.php');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


// Register custom fields repeater

new My_Best_Metaboxes;

class My_Best_Metaboxes {

	public $post_type = 'rooms';

	static $meta_key = 'company_address';

	public function __construct() {
		add_action( 'add_meta_boxes', array( $this, 'add_metabox' ) );
		add_action( 'save_post_' . $this->post_type, array( $this, 'save_metabox' ) );
		add_action( 'admin_print_footer_scripts', array( $this, 'show_assets' ), 10, 999 );
	}

	## Добавляет матабоксы
	public function add_metabox() {
		add_meta_box( 'box_info_company', 'Удобства в номерах', array( $this, 'render_metabox' ), $this->post_type, 'advanced', 'high' );
	}

	## Отображает метабокс на странице редактирования поста
	public function render_metabox( $post ) {

		?>
		<table class="form-table company-info">

			<tr>
				<th>
					Удобства <span class="dashicons dashicons-plus-alt add-company-address"></span>
				</th>
				<td class="company-address-list">
					<?php
					$input = '
					<span class="item-address">
						<input type="text" name="'. self::$meta_key .'[]" value="%s">
						<span class="dashicons dashicons-trash remove-company-address"></span>
					</span>
					';

					$addresses = get_post_meta( $post->ID, self::$meta_key, true );

					if ( is_array( $addresses ) ) {
						foreach ( $addresses as $addr ) {
							printf( $input, esc_attr( $addr ) );
						}
					} else {
						printf( $input, '' );
					}
					?>
				</td>
			</tr>

		</table>

		<?php
	}

	## Очищает и сохраняет значения полей
	public function save_metabox( $post_id ) {

		// Check if it's not an autosave.
		if ( wp_is_post_autosave( $post_id ) )
			return;

		if ( isset( $_POST[self::$meta_key] ) && is_array( $_POST[self::$meta_key] ) ) {
			$addresses = $_POST[self::$meta_key];

			$addresses = array_map( 'sanitize_text_field', $addresses ); // очистка

			$addresses = array_filter( $addresses ); // уберем пустые адреса

			if ( $addresses ) 
				update_post_meta( $post_id, self::$meta_key, $addresses );
			else 
				delete_post_meta( $post_id, self::$meta_key );

		}
	}

	## Подключает скрипты и стили
	public function show_assets() {
		if ( is_admin() && get_current_screen()->id == $this->post_type ) {
			$this->show_styles();
			$this->show_scripts();
		}
	}

	## Выводит на экран стили
	public function show_styles() {
		?>
		<style>
			.add-company-address {
				color: #00a0d2;
				cursor: pointer;
			}
			.company-address-list .item-address {
				display: flex;
				align-items: center;
			}
			.company-address-list .item-address input {
				width: 100%;
				max-width: 400px;
			}
			.remove-company-address {
				color: brown;
				cursor: pointer;
			}
		</style>
		<?php
	}

	## Выводит на экран JS
	public function show_scripts() {
		?>
		<script>
			jQuery(document).ready(function ($) {

				var $companyInfo = $('.company-info');

				// Добавляет бокс с вводом адреса фирмы
				$('.add-company-address', $companyInfo).click(function () {
					var $list = $('.company-address-list');
						$item = $list.find('.item-address').first().clone();

					$item.find('input').val(''); // чистим знанчение

					$list.append( $item );
				});

				// Удаляет бокс с вводом адреса фирмы
				$companyInfo.on('click', '.remove-company-address', function () {
					if ($('.item-address').length > 1) {
						$(this).closest('.item-address').remove();
					}
					else {
						$(this).closest('.item-address').find('input').val('');
					}
				});

			});
		</script>
		<?php
	}

}

