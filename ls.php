<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title>猎手</title>
	<!-- 
    	<link rel="stylesheet" href="./jquery-ui-1.8.21.custom/development-bundle/themes/base/jquery.ui.all.css"/>
     -->
    <link rel="stylesheet" href="./jquery-ui-1.8.21.custom/development-bundle/demos/demos.css"/>
	<script src="./jquery-ui-1.8.21.custom/development-bundle/jquery-1.7.2.js"></script>
	<script src="./jquery-ui-1.8.21.custom/development-bundle/ui/jquery.ui.core.js"></script>
	<script src="./jquery-ui-1.8.21.custom/development-bundle/ui/jquery.ui.widget.js"></script>
	<script src="./jquery-ui-1.8.21.custom/development-bundle/ui/jquery.ui.tabs.js"></script>

	<style>
	#background        { padding: 0 0 0; background: #c7c7c7; }
	
	#sortable { list-style-type: none; margin: 0; padding: 0; width: 60%; }
	#sortable li { margin: 0 3px 3px 3px; padding: 0.4em; padding-left: 1.5em; font-size: 1.4em; height: 18px; }
	#sortable li span { position: absolute; margin-left: -1.3em; }
	</style>
	<script>
	$(function() {
		$( "#tabs" ).tabs();
	});
	
	$(function() {
		$( "#sortable" ).sortable();
		$( "#sortable" ).disableSelection();
	});
	</script>
	
</head>
<body>
<div id="background">
<div style="width:100%; height:30px; border-radius:10px; background-color:#CCCCCC; margin:0px">title bar</div>
<table width="100%"><tbody>
<tr>
<td class="left-nav" width="200px" >
<dl class="demos-nav">
				<dt>Interactions</dt>
					<dd><a href="draggable/index.html" class="">Draggable</a></dd>
					<dd><a href="droppable/index.html" class="">Droppable</a></dd>
					<dd><a href="resizable/index.html" class="">Resizable</a></dd>
					<dd><a href="selectable/index.html" class="">Selectable</a></dd>
					<dd><a href="sortable/index.html" class="">Sortable</a></dd>
				<dt>Widgets</dt>
					<dd><a href="accordion/index.html" class="">Accordion</a></dd>
					<dd><a href="autocomplete/index.html" class="">Autocomplete</a></dd>
					<dd><a href="button/index.html" class="">Button</a></dd>
					<dd><a href="datepicker/index.html" class="">Datepicker</a></dd>
					<dd><a href="dialog/index.html" class="">Dialog</a></dd>
					<dd><a href="progressbar/index.html" class="">Progressbar</a></dd>
					<dd><a href="slider/index.html" class="">Slider</a></dd>
					<dd><a href="tabs/index.html" class="">Tabs</a></dd>
</dl>
</td>
<td style="vertical-align:top; width:100%">
	<div class="demo">
	<div id="tabs">
	<ul>
		<li><a href="#tabs-1">Nunc tincidunt</a></li>
		<li><a href="#tabs-2">Proin dolor</a></li>
		<li><a href="#tabs-3">Aenean lacinia</a></li>
	</ul>
	<div id="tabs-1">
		<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
	</div>
	<div id="tabs-2">
		<ul id="sortable">
			<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 1</li>
			<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 2</li>
			<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 3</li>
			<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 4</li>
			<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 5</li>
			<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 6</li>
			<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 7</li>
		</ul>
</div>
	<div id="tabs-3">
		<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
		<p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>
	</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</body>
</html>
