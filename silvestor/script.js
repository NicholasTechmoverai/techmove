const whatsappme = document.querySelectorAll('.watsappmenow');
whatsappme.forEach(clk => {
    clk.addEventListener('click', () => {
        window.location.href = 'https://wa.me/254797175215/?text=Greetings,%20Sylvestor';
    });
});

const callme = document.querySelectorAll('.callmenow');
callme.forEach(cll => {
    cll.addEventListener('click', () => {
        window.location.href = 'tel:+254797175215';
    });
});

const user_img = document.getElementById('userimg');

user_img.addEventListener('click', (event) => {
    user_img.style.width = "250px";
    user_img.style.height = "auto";
    user_img.style.borderRadius = "0";
    event.stopPropagation(); // Prevent this event from bubbling up to the document
})

document.addEventListener("click", (event) => {
    if (event.target !== user_img) { 
        user_img.style.width = "100px";  
        user_img.style.height = "100px"; 
        user_img.style.borderRadius = "50%";
    }
});


const toggle_btn = document.querySelector('#toogle-icon ion-icon[name="grid-outline"]');
const toggleList = document.getElementById('toggle-list');

// Show the toggle list on button click
toggle_btn.addEventListener('click', () => {
    const btnRect = toggle_btn.getBoundingClientRect();
    toggleList.style.top = `${btnRect.bottom}px`;
    toggleList.style.left = `${btnRect.left}px`;
    toggleList.style.display = "block";
    toggle_btn.style.rotate="45deg";
});

document.addEventListener('click', (event) => {
    // Check if the click is outside the toggle button and the toggle list
    if (!toggle_btn.contains(event.target) && !toggleList.contains(event.target)) {
        toggleList.style.display = "none";
        toggle_btn.style.rotate="0deg";
    }

});

// Optionally, hide the toggle list when the user clicks inside it (for menu behavior)
toggleList.addEventListener('click', () => {
    toggleList.style.display = "none";
    toggle_btn.style.rotate="0deg";
});

