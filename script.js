let toggleBtn = document.querySelector(".slider");

toggleBtn.addEventListener('click', ()=>{
    let body = document.querySelector(".body");
    let topBG = document.querySelector(".top-BG");
    let cards = document.querySelectorAll(".container");
    let headings = document.querySelectorAll(".headings");
    let followers = document.querySelectorAll(".followers");
    let attribution = document.querySelector(".attribution");
    let paragraphs = document.querySelectorAll(".paragraph");
    let todayCards = document.querySelectorAll(".today-card");
    let todayNumbers = document.querySelectorAll(".today-number");
    let todayHeadings = document.querySelectorAll(".today-heading");
    let totalFollowers = document.querySelector(".total-followers");
    
    
    body.classList.toggle("dark-body");
    topBG.classList.toggle("dark-top-BG");
    attribution.classList.toggle("dark-attribution")
    totalFollowers.classList.toggle("dark-total-followers");
    cards.forEach((card) => {
        card.classList.toggle("dark-container");
    });
    headings.forEach((heading)=>{
        heading.classList.toggle("dark-heading");
    });
    followers.forEach((follower)=>{
        follower.classList.toggle("dark-followers");
    });
    paragraphs.forEach((paragraph)=>{
        paragraph.classList.toggle("dark-total-followers")
    });
    todayCards.forEach((todayCard) => {
        todayCard.classList.toggle("dark-today-card");
    });
    todayNumbers.forEach((todayNumber)=>{
        todayNumber.classList.toggle("dark-heading");
    });
    todayHeadings.forEach((todayHeading) =>{
        todayHeading.classList.toggle("dark-total-followers")
    })
});