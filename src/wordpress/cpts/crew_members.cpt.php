<?php
// this file is required into ./bundle.cpt.php

// Register Custom Post Type
function init_crew_member_cpt() {

    $labels = array(
      'name'                  => _x( 'Crew Members', 'Post Type General Name', 'text_domain' ),
      'singular_name'         => _x( 'Crew Member', 'Post Type Singular Name', 'text_domain' ),
      'menu_name'             => __( 'Crew Members', 'text_domain' ),
      'name_admin_bar'        => __( 'Crew Member', 'text_domain' ),
      'archives'              => __( 'Item Archives', 'text_domain' ),
      'attributes'            => __( 'Item Attributes', 'text_domain' ),
      'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
      'all_items'             => __( 'All Items', 'text_domain' ),
      'add_new_item'          => __( 'Add New Item', 'text_domain' ),
      'add_new'               => __( 'Add New', 'text_domain' ),
      'new_item'              => __( 'New Item', 'text_domain' ),
      'edit_item'             => __( 'Edit Item', 'text_domain' ),
      'update_item'           => __( 'Update Item', 'text_domain' ),
      'view_item'             => __( 'View Item', 'text_domain' ),
      'view_items'            => __( 'View Items', 'text_domain' ),
      'search_items'          => __( 'Search Item', 'text_domain' ),
      'not_found'             => __( 'Not found', 'text_domain' ),
      'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
      'featured_image'        => __( 'Featured Image', 'text_domain' ),
      'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
      'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
      'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
      'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
      'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
      'items_list'            => __( 'Items list', 'text_domain' ),
      'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
      'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
    );
    $args = array(
      'label'                 => __( 'Crew Member', 'text_domain' ),
      'description'           => __( 'A member of the crew. Personnel.', 'text_domain' ),
      'labels'                => $labels,
      'supports'              => array( 'title', 'editor', 'thumbnail', ),
      'taxonomies'            => array( 'category', 'post_tag' ),
      'hierarchical'          => false,
      'public'                => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 5,
      'menu_icon'             => 'dashicons-businessman',
      'show_in_admin_bar'     => true,
      'show_in_nav_menus'     => true,
      'can_export'            => true,
      'has_archive'           => true,
      'exclude_from_search'   => false,
      'publicly_queryable'    => true,
      'capability_type'       => 'page',
      'show_in_rest'          => true, // exposes CPT to REST API
    );
    register_post_type( 'crew_member', $args );

  }
  add_action( 'init', 'init_crew_member_cpt', 0 );



// Expose Custom Fields to REST API - accessible by "meta" property
add_action( 'rest_api_init', function() {
  register_rest_field( 'crew_member', 'meta', array(
      'get_callback' => function( $object ) {
          $meta = get_post_meta($object['id']); 
          return $meta;
      },
      'update_callback' => null,
      'schema' => null
  ));
});

// Expose Featured Image to REST API - accessible by "featured_image_src" property
add_action( 'rest_api_init', function() {
  register_rest_field( 'crew_member', 'featured_image_src', array(
      'get_callback' => function( $object ) {
          $feat_img_array = wp_get_attachment_image_src($object['featured_media'], 'thumbnail', true);
          return $feat_img_array[0];
      },
      'update_callback' => null,
      'schema' => null
  ));
});


