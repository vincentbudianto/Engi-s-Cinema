<?php
// Connecting to database engi_cinema
//require_once("config.php");
$output = "";
$countMovies = 0;
$searchquery = '';
$connection = mysqli_connect("localhost","root","","engi_cinema") or die("couldn't connect localhost");
if ($_GET)	{
	$searchquery = filter_input(INPUT_GET, 'search-input', FILTER_SANITIZE_STRING);
	$output = '';
	if(isset($_GET['search-input'])) {
		$searchquery = $_GET['search-input'];
		$searchquery = preg_replace("#[^0-9a-z]#i","",$searchquery);
	}
}
$query = mysqli_query($connection, "SELECT * FROM movies WHERE title LIKE '%$searchquery%'") or die("couldn't search!");
$count = mysqli_num_rows($query);
if ($count == 0){
	$countMovies = 0;
} else {
	$countMovies = 0;
	//$output = new SplQueue();
	while($row = mysqli_fetch_array($query)) {
		$output_content = new SplQueue();
		$title = $row['title'];
		$rating = $row['rating'];
		$description = $row['description'];
		$poster = '';
		if ($row['poster'] != null)
		{
			$poster = $row['poster'];
		}
		//$output_content->enqueue($list_title);
		//$output_content->enqueue($list_description);
		//$output_content->enqueue($list_poster);
		//$output[$i] = $output_content;
		//$i = $i + 1;
		$output .= '
					<div class="grid-item">
						<div class="poster">
							<img src='.$poster.'>
						</div>
						<div class="movie-info">
							<label class="title">'.$title.'</label>
							<div class="rating-container">
								<img src="../assets/star_icon.png">
								<label class="rating">'.$rating.'</label>
							</div>
							<div class="desc-container">
								<p class="desc">
										'.$description.'
								</p>
							</div>
						</div>
						<div class="detail-container">
							<label class="view">View details</label>
							<img class="detail-icon" src="../assets/next_icon.png">
						</div>
					</div>
				<hr>';
		$countMovies= $countMovies + 1;
	}
}
?>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/pageTemplate.css">
        <link rel="stylesheet" type="text/css" href="../css/search.css">
        <script src="../js/search.js" defer></script>
        <title>Search</title>
    </head>

    <body>
        <div class="navbar">
            <div class="navbar-wrapper">
                <label class="navbar-button" id="navbar-title" onclick="location.href='../homepage.html'"><span id="homepage-title">Engi</span>ma</label>
					<form enctype="multipart/form-data" id="searchForm" name="search-input" method="GET" class ="search-bar" action=<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>>
                    	<input id="search-input" name="search-input" type="search" placeholder="Search movie"/>
                    	<input type="image" class="navbar-button" id="search-icon" name="search-input" src="../assets/search_icon.png" alt="Search icon"/>
					</form>
                <label class="navbar-button" id="transactions-button"
                    onclick="location.href='../transactions.html'">Transactions</label>
                <label class="navbar-button" id="logout-button" onclick="location.href='php/logout.php'">Logout</label>
            </div>
        </div>


        <div class="content">
            <p id="search-header">Showing search result for keyword "<span id="search-key"><?php print("$searchquery");?></span>"
            </p>
            <p id="search-available"><span id="search-result"><?php
                    print("$countMovies");
                ?></span> results available</p>

            <grid class="grid-container">
                <?php
                    print("$output");
                ?>
            </grid>
            <div class="page-number">
                <button id="back-button" onclick="onePage(-1);">Back</button>
                <button class="page-button" num="1" onclick="changePage(this);">1</button>
                <span id="next-page">
                    <!-- <button class="page-button" num="2" onclick="changePage(this);">2</button>
                    <button class="page-button" num="3" onclick="changePage(this);">3</button> -->
                </span>
                <button id="next-button" onclick="onePage(1);">Next</button>
                <input type="hidden" id="current-page" name="current-page" value=1>
            </div>
        </div>
    </body>
</html>