document
	.getElementById("js-navbar-toggle")
	.addEventListener("click", function () {
		var menu = document.getElementById("js-menu");
		if (menu.style.display === "block") {
			menu.style.display = "none";
		} else {
			menu.style.display = "block";
		}
	});

// Check if the screen width is less than or equal to a certain value (e.g., 600 pixels for small devices)
if (window.innerWidth <= 768) {
    var links = document.querySelectorAll('.nav-links');

    // Add click event listeners to each link
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Get the parent ul of the clicked link and hide the menu
            document.getElementById('js-menu').style.display = 'none';
        });
    });
}

	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			document.getElementById("scrollBtn").style.display = "block";
		} else {
			document.getElementById("scrollBtn").style.display = "none";
		}
	}

	function scrollToTop() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

