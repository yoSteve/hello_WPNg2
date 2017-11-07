<?php
// add support for Featured Images
add_theme_support( 'post-thumbnails' );

// Register CustomPostTypes via Bundler file
require_once(get_template_directory().'/wordpress/cpts/bundle.cpt.php');

?>
