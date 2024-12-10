// Wedding gift registry data
const gifts = [
    {
        id: 1,
        name: "Doa murah rezeki",
        image: "https://i1.wp.com/www.islamituindah.my/wp-content/uploads/2019/10/berdoa.jpg",
        description: "Doa Murah Rezeki",
        price: "RM Seikhlasnya",
        available: true
    },
    {
        id: 2,
        name: "Oven",
        image: "https://mobileimages.lowes.com/product/converted/084691/084691165279xl.jpg",
        description: "Oven with 4 burners",
        price: "RM199",
        available: true
    },
    {
        id: 3,
        name: "Smart Home Speaker",
        image: "https://th.bing.com/th/id/OIP.Cux5lePqTlkx7eA2o-UuiwHaHa?rs=1&pid=ImgDetMain",
        description: "Voice-controlled smart home speaker",
        price: "RM129",
        available: true
    },
    {
        id: 4,
        name: "Coffee Maker",
        image: "https://www.sourcedcoffee.co.uk/thumbnail/500x500/userfiles/images/sys/products/Nescafe_Alegria_Fusion_60_fresh_bean_to_cup_automatic_coffee_machine_21393jpeg.jpg",
        description: "Premium programmable coffee maker",
        price: "RM159",
        available: true
    },
    {
        id: 5,
        name: "Dining Set",
        image: "https://down-my.img.susercontent.com/file/my-11134207-7qul4-lfo1tole2sze76",
        description: "12-piece formal dining set",
        price: "RM399",
        available: true
    },
    {
        id: 6,
        name: "Robot Vacuum",
        image: "https://m.media-amazon.com/images/I/610DWX-PiPL._AC_SL1500_.jpg",
        description: "Smart robot vacuum cleaner",
        price: "RM279",
        available: true
    },
    {
        id: 7,
        name: "Air Fryer",
        image: "https://th.bing.com/th/id/OIP.0iIyw_Gq2_zrTzDaGkIgSQAAAA?rs=1&pid=ImgDetMain",
        description: "Digital touchscreen air fryer",
        price: "RM149",
        available: true
    },
    {
        id: 8,
        name: "Refrigerator",
        image: "https://th.bing.com/th/id/R.d7d374e7ed6a6fb0ffa3d4d90a3a2bb7?rik=LcA%2fwPRuY90q3g&riu=http%3a%2f%2fmobileimages.lowes.com%2fproduct%2fconverted%2f887276%2f887276966076.jpg&ehk=O9QCql9zPQ0%2fG2mkG%2fIut8NmOLy2Bu3YZH85t%2fdTchY%3d&risl=&pid=ImgRaw&r=0",
        description: "Refrigerator with ice maker",
        price: "RM1099",
        available: true
    },
    {
        id: 9,
        name: "Kerusi Massage Ogawa",
        image: "https://media.karousell.com/media/photos/products/2023/7/13/promosi_kerusi_urut_cuckoo_x_o_1689239022_f03267cd_progressive.jpg",
        description: "Kerusi Massage Ogawa",
        price: "RM 150 Installment",
        available: true
    },
    {
        id: 10,
        name: "Bunga Bromeliat",
        image: "https://th.bing.com/th/id/R.fb9061ed3160bc99e95f349bf723cf91?rik=MymdSwA1F72Mgw&riu=http%3a%2f%2fwww.faunadanflora.com%2fwp-content%2fuploads%2f2017%2f12%2fBunga-Bromelia.jpg&ehk=u85WC83ebUNi%2feqZbkt%2bKNKUTpMzakKdn2%2bU8oEeS8Y%3d&risl=&pid=ImgRaw&r=0",
        description: "Complete garden tools set",
        price: "RM129",
        available: true
    }
];

// Function to create gift items
function createGiftList() {
    const giftList = document.getElementById('giftList');
    
    gifts.forEach(gift => {
        const giftElement = document.createElement('div');
        giftElement.className = 'gift-item';
        giftElement.innerHTML = `
            <img src="${gift.image}" alt="${gift.name}">
            <h3>${gift.name}</h3>
            <p>${gift.description}</p>
            <p class="price">${gift.price}</p>
            <button onclick="selectGift(${gift.id})" ${!gift.available ? 'disabled' : ''}>
                ${gift.available ? 'Select This Gift' : 'Already Selected'}
            </button>
        `;
        giftList.appendChild(giftElement);
    });
}

// Function to handle gift selection
function selectGift(giftId) {
    const gift = gifts.find(g => g.id === giftId);
    if (gift && gift.available) {
        if (confirm(`Would you like to select "${gift.name}" as your gift?`)) {
            // Prompt for user information
            const userName = prompt("Please enter your name:");
            const userPhone = prompt("Please enter your phone number:");
            
            if (userName && userPhone) {
                gift.available = false;
                
                // Prepare email content
                const subject = encodeURIComponent("Wedding Gift Selection");
                const body = encodeURIComponent(
                    `New Gift Selection:\n\n` +
                    `Guest Name: ${userName}\n` +
                    `Phone Number: ${userPhone}\n` +
                    `Selected Gift: ${gift.name}\n` +
                    `Gift Price: ${gift.price}`
                );
                
                // Open default email client with pre-filled content
                window.location.href = `mailto:shauqiakmal8@gmail.com?subject=${subject}&body=${body}`;
                
                alert('Thank you for selecting this gift! An email notification has been sent.');
                updateGiftDisplay();
            } else {
                alert('Please provide both name and phone number to select a gift.');
            }
        }
    }
}

// Function to update gift display
function updateGiftDisplay() {
    const giftList = document.getElementById('giftList');
    giftList.innerHTML = '';
    createGiftList();
}

// Initialize the gift list when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createGiftList();
});
