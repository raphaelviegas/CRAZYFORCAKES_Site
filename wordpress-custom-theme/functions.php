<?php
function nd_dosth_theme_setup() {

        add_theme_support( 'title-tag' );  

}
add_action( 'after_setup_theme', 'nd_dosth_theme_setup');
