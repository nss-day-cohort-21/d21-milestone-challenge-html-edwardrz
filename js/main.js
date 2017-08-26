/* The page will have a linked JavaScript file for the blog posts section. Create an array to hold your posts (at least 2 posts). Each item in the array must be an object that contains at a minimum the following information: Title, Copy, Date. Use JavaScript to add each post to the DOM.*/
console.log("main.js Active");

let blog = [
{
	title: "Blog_Title",
	copy: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> <h3>Heading3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
	date: "Date_Published"
},
{
	title: "Blog_Title",
	copy: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> <h3>Heading3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
	date: "Date_Published"
},
{
	title: "Blog_Title",
	copy: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> <h3>Heading3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
	date: "Date_Published"
},
{
	title: "Blog_Title",
	copy: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> <h3>Heading3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
	date: "Date_Published"
}
];

blog.forEach(function(item){
	document.getElementById("post").innerHTML += `<h2>${item.title}</h2> ${item.copy} <p>${item.date}</p>`
});
