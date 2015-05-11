	<div class="clear"></div>
	</div><!--.container-->
	<div id="footer"><footer>
		<div class="container">
			<?php if ( ! dynamic_sidebar( 'Footer' ) ) : ?><!--Wigitized Footer--><?php endif ?>
			<p>&copy; <?php echo date("Y") ?> <a href="<?php bloginfo('url'); ?>/" title="<?php bloginfo('description'); ?>"><?php bloginfo('name'); ?></a>. <?php _e('All Rights Reserved.'); ?></p>
		</div><!--.container-->
	</footer></div><!--#footer-->
</div><!--#main-->
<script type="text/javascript" src="http://www.georgeemersonlevines.com/wp-content/themes/whiteboard/userjs/userNoConflict-ck.js"></script>
<?php wp_footer(); /* this is used by many Wordpress features and plugins to work proporly */ ?>
</body>
</html>