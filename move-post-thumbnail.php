<?php
/*
Plugin Name: Move post thumbnail
Description: Move the post thumbnail metabox to a prettier place next to the title in post.php
Version: 0.0.1
Author: Moritz Jacobs
Author URI: https://www.moritzjacobs.de
*/

add_action('admin_enqueue_scripts', function() {
	wp_register_style( 'mpt_css', plugin_dir_url( __FILE__ ) . 'public/css/mpt.css', false, '1.0.0' );
	wp_enqueue_style( 'mpt_css' );
	
	wp_register_script( 'mpt_js', plugin_dir_url( __FILE__ ) . 'public/js/mpt.js', array( 'jquery' ), 1.0, true);
	wp_enqueue_script( 'mpt_js' );
});

