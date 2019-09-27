<?php
	$connection = mysqli_connect("localhost","root","","engi_cinema") or die("couldn't connect localhost");
	
	$output = '';
	//collect
	if(isset($_POST['search'])) {
		$searchquery = $_POST['search'];
		$searchquery = preg_replace("#[^0-9a-z]#i","",$searchquery);
		
		$query = mysqli_query($connection, "SELECT * FROM movies WHERE list_title LIKE '%$searchquery%'") or die("couldn't search!");
		$count = mysqli_num_rows($query);
		if ($count == 0){
			$output = 'There was no search results!';
		} else {
			while($row = mysqli_fetch_array($query)) {
				$list_title = $row['list_title'];
				$list_description = $row['list_description'];
				$list_poster = '';
				if ($row['list_poster'] != null) 
				{
					$list_poster = $row['list_poster'];
				}
				/*$output .= '<div> <img src='.$list_poster.'> <br> '.$list_title.' <br> '.$list_description.' </div>';*/
				$output .= '
						<div class="flex-container">
							<div id="resultFlexPoster">
								<img id="moviePoster" src='.$list_poster.'>
							</div>
							<div id="resultFlexText">
								<br>
								<span id="resultTitle"> '.$list_title.' </span> <br> 
								<span id="resultRating"> <img id="resultIcon" src="assets/star_icon.png"/>8.75 </span> <br>
								<span id="resultDescription"> '.wordwrap($list_description).'</span>
								</div>
							<div id ="resultFlexSpace">
							
							</div>
							<div id="resultFlexViewDetails">
								<p id="resultViewDetails" align=right>View Details &nbsp<img align=right id="resultIcon" src="assets/view_details_icon.png"></p>
							</div>
						</div>
						<hr>';
			}
		}
	}
	mysqli_close($connection);
	
?>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/searchresults.css">
    </head>
    <body>
		<div class="navbar">
            <div class="navbar-wrapper">
                <label class="navbar-button" id="navbar-title" onclick="location.href='homepage.html'"><span id="homepage-title">Engi</span>ma</label>
                <form action="searchresults.php" method="post" class ="search-bar">
                    <input id="search-input" name="search" type="search" placeholder="Search movie"/>
                    <input type="image" class="navbar-button" id="search-icon" src="assets/search_icon.png" alt="Search icon"/>
                </form>
                <label class="navbar-button" id="transactions-button" onclick="location.href='transactions.html'">Transactions</label>
                <label class="navbar-button" id="logout-button" onclick="location.href='php/logout.php'">Logout</label>
            </div>
            
        </div>
		<div class="content">
			<?php 
				if(isset($_POST['search'])) {
					print("Showing search result for keyword \"".$searchquery."\" <br>");
				}
				else {
					$searchquery = '';
					print("Showing search result for keyword \"".$searchquery."\" <br>");
				}
			?>
			<span id="resultsAvailable"></span>
			<?php
				print("$output");
			?>
		</div>
		    <script>
				function printResultsAvailable() {
					if (<?php $count?> == 1) {
						<?php print("<?php print($count) ?> result available <br>"); ?>
					}
					else {
						<?php print("<?php print($count) ?> results available <br>"); ?> 
					}
					document.getElementById("resultsAvailable").innerHTML = window.printResultsAvailable();
				}
			</script>
			
			<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg">
    </body>
</html>
