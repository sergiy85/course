<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'wp_berez' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'new_admin' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'v6iJEv17txzlRzFP' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         's#lw=+q^aCII?SAJ8*_q=Sj:8c6ZwLR!.J`?3VG TYAO6P4#YjaBlaF/3<LE)EbW' );
define( 'SECURE_AUTH_KEY',  'Z#nfF ,uRW@rA2GOV4L7Sx.wSVvMT:}*h$VX}B#hz@U.&U1]v%Vx/IECr7@Joc^T' );
define( 'LOGGED_IN_KEY',    'qtsJa{=1*z(oneT,L34ZYx#HXZA2pOEhm4$X~Z+(h]AEQ1]k|M3$Ix4G{!g>&7WX' );
define( 'NONCE_KEY',        'G_mP79E`IH(gRCTX^{?!bYn{KN[1iB@OWg~1JJ&=#Z.z&#G:aG>]H<T%|poiS<#_' );
define( 'AUTH_SALT',        'I%5q<?u1#aQWDxY#<$O<uxn8#HR)wJsN$XN+yorX+IT3ln5]&f&nkz71V.M<z;aA' );
define( 'SECURE_AUTH_SALT', 'uOuSM)H[atxtnQ/-l~n14L=YeIB:6Tab49mGNxRi/w5?>OiCBvN^H~k SuMo4SsF' );
define( 'LOGGED_IN_SALT',   'U{:zaeBb..iAFj]=or:O$&x*u fm|1{WBPA>uyMS*g3=ywc9z+{H-M?1%B_68iH(' );
define( 'NONCE_SALT',       '6`%{#%W q)*pG-/6r=lhKhHU-L+tUJMi1J=~93L?Pec#_Ma#E4kwqt)q+&/tUJ0r' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
