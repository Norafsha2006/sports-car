
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const searchValue =
        searchInput.value.toLowerCase();

    const cards =
        document.querySelectorAll(".car-card");

    cards.forEach(card => {

        const carName =
            card.dataset.name;

        if(carName.includes(searchValue)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});
const modal =
document.getElementById("carModal");

const closeBtn =
document.querySelector(".close-btn");

const detailButtons =
document.querySelectorAll(".details-btn");

const cars = [
{
    name:"Ferrari SF90",
    speed:"340 km/h",
    hp:"986 HP",
    price:"₹7.50 Cr",
    image:"ferrari.jpg"
},
{
    name:"Lamborghini Huracan",
    speed:"325 km/h",
    hp:"631 HP",
    price:"₹4.00 Cr",
    image:"lamborghini.jpg"
},
{
    name:"Porsche 911 Turbo S",
    speed:"330 km/h",
    hp:"640 HP",
    price:"₹3.50 Cr",
    image:"porsche.jpg"
}
];

detailButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{
        document.getElementById("modalImage").src =
        cars[index].image;

        document.getElementById("modalTitle").textContent =
        cars[index].name;

        document.getElementById("modalSpeed").textContent =
        "Top Speed: " + cars[index].speed;

        document.getElementById("modalHp").textContent =
        "Horsepower: " + cars[index].hp;



        document.getElementById("modalPrice").textContent =
        "Price: " + cars[index].price;

        modal.style.display = "flex";
    });

});

closeBtn.addEventListener("click",()=>{

    modal.style.display = "none";

});

const compareBtn =
document.getElementById("compareBtn");

const carData = {
    Ferrari:{
        speed:"340 km/h",
        hp:"986 HP",
        price:"₹7.50 Cr"
    },

    Lamborghini:{
        speed:"325 km/h",
        hp:"631 HP",
        price:"₹4.00 Cr"
    },

    Porsche:{
        speed:"330 km/h",
        hp:"640 HP",
        price:"₹3.50 Cr"
    }
};

compareBtn.addEventListener("click",()=>{

    const first =
    document.getElementById("car1").value;

    const second =
    document.getElementById("car2").value;

    document.getElementById(
        "comparisonResult"
    ).innerHTML = `

        <h3>${first} VS ${second}</h3>

        <p>
        Speed:
        ${carData[first].speed}
        |
        ${carData[second].speed}
        </p>

        <p>
        HP:
        ${carData[first].hp}
        |
        ${carData[second].hp}
        </p>

        <p>
        Price:
        ${carData[first].price}
        |
        ${carData[second].price}
        </p>

    `;
});
const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector("nav ul");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});
const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));
window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
    .style.width = progress + "%";

});
function animateCounter(id,target,suffix=""){

    let count = 0;

    const increment = Math.ceil(target/100);

    const interval = setInterval(()=>{

        count += increment;

        if(count >= target){

            count = target;

            clearInterval(interval);
        }

        document.getElementById(id).textContent =
        count + suffix;

    },20);

}

animateCounter("carsCount",500,"+");
animateCounter("brandsCount",50,"+");
animateCounter("visitorsCount",10,"K+");
window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader")
        .style.display="none";

    },2000);

});
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});