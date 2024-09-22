//your JS code here. If required.
const panels=document.querySelectorAll(".panel");

// const colors=["red","green","yellow","grey","black"];
const images=[
	{
		Link : "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		Text : "Explore the world"
	},
	{
		Link : "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		Text : "Wild Forest"
	},
	{
		Link :"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
		Text : "City on Winter"
	},
	{
		Link :"https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
		Text : "Mountain Cloud"
	},
	{
		Link :"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		Text : "Sunny Beach"
	}
];
panels.forEach((panel,idx)=>{
	// panel.style.backgroundColor=colors[idx];
	panel.style.backgroundImage=`url(${images[idx].Link})`;
});

panels.forEach((panel)=>{
	panel.addEventListener("click",()=>{
		removeActive();
		panel.classList.add("active");
		panel.innerText="Nothing";
	})
})
function removeActive() {
	panel=document.querySelector(".active");
	panel.classList.remove("active");
}