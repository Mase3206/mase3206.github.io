// originally from https://www.w3schools.com/howto/howto_html_include.asp
// modified slightly to recognize a different include syntax

function includeComponent() {
	var z, i, el, file, xhttp;

	// Loop through a collection of all HTML elements
	elements = document.getElementsByTagName("include");

	for (i = 0; i < elements.length; i++) {
		el = elements[i];

		// search for elements with a certain atrribute
		component = el.getAttribute("component");
		file = `/components/${component}.html`;
		console.log(`Including component ${component} from ${file}`);

		if (file) {
			// Make an HTTP request using the attribute value as the file name
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {el.outerHTML = this.responseText;}
					// if (this.status == 404) {el.innerHTML = "Page not found.";}

					// Remove the `include` element
					// el.remove();


					includeComponent(); 
				}
			}

			xhttp.open("GET", file, true);
			xhttp.send();
			
			// Exit the function
			return;
		}
	}
}