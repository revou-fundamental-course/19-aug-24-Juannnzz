document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;  
    
    // Format tanggal menjadi MM-DD-YYYY
    const formattedDob = formatDate(dob);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    }

    // Tampilkan data di bagian message display
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayNameMessage").textContent = name; 
    document.getElementById("displayDob").textContent = formattedDob;
    document.getElementById("displayGender").textContent = gender;
    document.getElementById("displayMessage").textContent = message;
});

// Banner Autoslide
let currentIndex = 0;
const images = document.querySelectorAll('.banner-image');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % totalImages; 
    images[currentIndex].style.opacity = 1;
    const translateX = -currentIndex * 100; 
    document.querySelector('.banner-images').style.transform = `translateX(${translateX}%)`;
}

// Mengatur interval untuk autoslide
setInterval(showNextImage, 3000);