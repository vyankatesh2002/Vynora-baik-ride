 AOS.init({ duration: 700, once: true, offset: 60 });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (menuBtn) menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // 50+ Nashik Moments Data (with brief intro and location)
    const moments = [
        { name: "Sula Vineyards", desc: "India's most iconic winery, scenic grape gardens and sunset views.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=250&fit=crop", area: "Gangapur Road" },
        { name: "Gangapur Dam", desc: "Serene backwaters, perfect for sunset walks and peaceful moments.", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb3cd9?w=400&h=250&fit=crop", area: "Gangapur" },
        { name: "Trimbakeshwar Temple", desc: "One of 12 Jyotirlingas, ancient architecture and spiritual aura.", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=250&fit=crop", area: "Trimbak" },
        { name: "Pandavleni Caves", desc: "Ancient Buddhist caves with stunning city views and history.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Nashik Road" },
        { name: "Anjaneri Hills", desc: "Birthplace of Lord Hanuman, lush trekking trails and waterfalls.", img: "https://images.unsplash.com/photo-1587923623987-c7e408f7d88b?w=400&h=250&fit=crop", area: "Trimbak Road" },
        { name: "Dugarwadi Waterfall", desc: "Hidden monsoon gem, natural plunge pool and green surroundings.", img: "https://images.unsplash.com/photo-1603349206334-5c5b7f1a13c2?w=400&h=250&fit=crop", area: "Igatpuri" },
        { name: "Saptashrungi Devi Temple", desc: "Hilltop temple with 108 steps and panoramic views.", img: "https://images.unsplash.com/photo-1632509872352-8b7b5f2b0f6d?w=400&h=250&fit=crop", area: "Nandgaon" },
        { name: "Muktidham Temple", desc: "White marble temple replicating major pilgrimage sites.", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Kalaram Temple", desc: "Black stone Ram temple, historic and peaceful.", img: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&h=250&fit=crop", area: "Panchavati" },
        { name: "Ramkund", desc: "Holy bathing ghat on Godavari, famous for rituals.", img: "https://images.unsplash.com/photo-1583923926512-8b1f9b6f0f1d?w=400&h=250&fit=crop", area: "Panchavati" },
        { name: "Someshwar Waterfall", desc: "Gentle cascade surrounded by greenery, local picnic spot.", img: "https://images.unsplash.com/photo-1603349206334-5c5b7f1a13c2?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Harihar Fort", desc: "Rock-cut steps, 360° views, trekker's paradise.", img: "https://images.unsplash.com/photo-1625235834357-0bfb9f5c3cc6?w=400&h=250&fit=crop", area: "Trimbak Range" },
        { name: "Brahmagiri Hill", desc: "Source of Godavari river, scenic sunrise point.", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=250&fit=crop", area: "Trimbak" },
        { name: "Sita Gufa", desc: "Cave where Sita stayed during exile, mythological significance.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Panchavati" },
        { name: "York Winery", desc: "Cozy winery with tastings and rustic charm.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=250&fit=crop", area: "Gangapur Road" },
        { name: "Soma Vineyard", desc: "Beautiful estate, wine tours and lake view.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=250&fit=crop", area: "Gangapur Road" },
        { name: "Jain Temple (Parshwanath)", desc: "Exquisite marble Jain temple, serene atmosphere.", img: "https://images.unsplash.com/photo-1583923926512-8b1f9b6f0f1d?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Bhandardara Lake", desc: "Peaceful lake, Arthur Lake, and Wilson Dam nearby.", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb3cd9?w=400&h=250&fit=crop", area: "Igatpuri" },
        { name: "Randha Falls", desc: "Powerful waterfall in the middle of forest.", img: "https://images.unsplash.com/photo-1603349206334-5c5b7f1a13c2?w=400&h=250&fit=crop", area: "Bhandardara" },
        { name: "Wilson Dam", desc: "Old masonry dam, beautiful sunset views.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Bhandardara" },
        { name: "Kalsubai Peak", desc: "Highest peak in Maharashtra, challenging trek.", img: "https://images.unsplash.com/photo-1587923623987-c7e408f7d88b?w=400&h=250&fit=crop", area: "Igatpuri" },
        { name: "Vaitarna Dam", desc: "Scenic reservoir, perfect for photography.", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb3cd9?w=400&h=250&fit=crop", area: "Igatpuri" },
        { name: "Mangi Tungi", desc: "Twin hills with Jain temples and cable car.", img: "https://images.unsplash.com/photo-1632509872352-8b7b5f2b0f6d?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Jawhar Palace", desc: "Historic palace with Warli art and gardens.", img: "https://images.unsplash.com/photo-1583923926512-8b1f9b6f0f1d?w=400&h=250&fit=crop", area: "Jawhar" },
        { name: "Dabosa Waterfall", desc: "Offbeat waterfall, less crowded, natural pool.", img: "https://images.unsplash.com/photo-1603349206334-5c5b7f1a13c2?w=400&h=250&fit=crop", area: "Igatpuri" },
        { name: "Nashik City Center", desc: "Vibrant markets, local food, and heritage buildings.", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Kapileshwara Temple", desc: "Ancient Shiva temple near Ramkund.", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=250&fit=crop", area: "Panchavati" },
        { name: "Shree Navshya Ganpati", desc: "Famous Ganesh temple with unique idol.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Ghatandevi Temple", desc: "Hilltop temple with panoramic Nashik view.", img: "https://images.unsplash.com/photo-1587923623987-c7e408f7d88b?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Pumpkin Fields (Vijay's)", desc: "Organic farm and cafe experience.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=250&fit=crop", area: "Gangapur" },
        { name: "Datta Mandir (Jalaram)", desc: "Peaceful ashram with bhojanalaya.", img: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Sula Fest Grounds", desc: "Annual wine festival venue, lively atmosphere.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=250&fit=crop", area: "Gangapur" },
        { name: "Gangapur Village", desc: "Rural charm, organic farms and pottery.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Gangapur" },
        { name: "Chennai Lake", desc: "Small serene lake near Igatpuri.", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb3cd9?w=400&h=250&fit=crop", area: "Igatpuri" },
        { name: "Kashyapi River", desc: "Quiet riverside, perfect for meditation.", img: "https://images.unsplash.com/photo-1603349206334-5c5b7f1a13c2?w=400&h=250&fit=crop", area: "Trimbak" },
        { name: "Jalaram Mandir", desc: "Spiritual spot with free meals (prasad).", img: "https://images.unsplash.com/photo-1583923926512-8b1f9b6f0f1d?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Sula Tasting Room", desc: "Premium wine tasting experience.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=250&fit=crop", area: "Gangapur" },
        { name: "York Tasting Room", desc: "Cozy wine cellar with cheese platters.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=250&fit=crop", area: "Gangapur" },
        { name: "Gangapur High School Point", desc: "Famous viewpoint for dam sunset.", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb3cd9?w=400&h=250&fit=crop", area: "Gangapur" },
        { name: "Nashik Golf Club", desc: "Scenic golf course, green landscapes.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "KTHM College", desc: "Heritage architecture, beautiful campus.", img: "https://images.unsplash.com/photo-1587923623987-c7e408f7d88b?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Bytco Point", desc: "Local hangout spot, city view.", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Vihigaon Waterfall", desc: "Popular picnic spot near Igatpuri.", img: "https://images.unsplash.com/photo-1603349206334-5c5b7f1a13c2?w=400&h=250&fit=crop", area: "Igatpuri" },
        { name: "Tringalwadi Fort", desc: "Small fort with lake and caves.", img: "https://images.unsplash.com/photo-1625235834357-0bfb9f5c3cc6?w=400&h=250&fit=crop", area: "Igatpuri" },
        { name: "Ghargad Fort", desc: "Lesser-known trek, dense forest.", img: "https://images.unsplash.com/photo-1587923623987-c7e408f7d88b?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Markandeya Rishi Ashram", desc: "Peaceful ashram on Godavari banks.", img: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Sundarnarayan Temple", desc: "Ancient temple with intricate carvings.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Naroshankar Temple", desc: "Rare circular temple architecture.", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Panchavati Garden", desc: "Green park with local food stalls.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Panchavati" },
        { name: "CBS (Central Bus Stand)", desc: "Bustling hub, street food paradise.", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Makhmalabad Village", desc: "Quaint village, known for waterfalls.", img: "https://images.unsplash.com/photo-1603349206334-5c5b7f1a13c2?w=400&h=250&fit=crop", area: "Nashik" },
        { name: "Dindori", desc: "Famous for mango farms and rural vibe.", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop", area: "Dindori" }
    ];

    const grid = document.getElementById('momentsGrid');
    if (grid) {
        moments.forEach(m => {
            const card = document.createElement('div');
            card.className = 'moment-card';
            card.innerHTML = `
                <img class="moment-img" src="${m.img}" alt="${m.name}" loading="lazy">
                <div class="moment-content">
                    <h3>${m.name}</h3>
                    <p>${m.desc}</p>
                    <div class="moment-location"><i class="fas fa-map-marker-alt"></i> ${m.area}</div>
                </div>
            `;
            grid.appendChild(card);
        });
    }