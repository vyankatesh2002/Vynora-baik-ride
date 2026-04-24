 // DYNAMIC YEAR
        (function() {
            const y = new Date().getFullYear();
            document.getElementById('footerYear').textContent =
                '© ' + y + ' Vynora · Premium Bike Rides · Nashik';
        })();

        // CURSOR
        const cur = document.getElementById('cur'),
            ring = document.getElementById('cur-ring');
        let mx = 0,
            my = 0,
            rx = 0,
            ry = 0;
        document.addEventListener('mousemove', e => {
            mx = e.clientX;
            my = e.clientY;
            cur.style.left = mx + 'px';
            cur.style.top = my + 'px';
        });
        setInterval(() => {
            rx += (mx - rx) * .12;
            ry += (my - ry) * .12;
            ring.style.left = rx + 'px';
            ring.style.top = ry + 'px';
        }, 16);
        document.querySelectorAll('a,button,.svc-card,.aud-card,.testi-card,.faq-q,.step-card,.price-mini-card,.trust-badge')
            .forEach(el => {
                el.addEventListener('mouseenter', () => {
                    ring.style.width = '56px';
                    ring.style.height = '56px';
                    ring.style.borderColor = 'rgba(240,128,48,.7)';
                });
                el.addEventListener('mouseleave', () => {
                    ring.style.width = '32px';
                    ring.style.height = '32px';
                    ring.style.borderColor = 'rgba(240,128,48,.5)';
                });
            });

        // NAV
        const nav = document.getElementById('mainNav');
        window.addEventListener('scroll', () => {
            nav.classList.toggle('stuck', window.scrollY > 60);
            document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
        });

        // MOBILE MENU
        function toggleMenu() {
            const m = document.getElementById('mobNav'),
                open = m.classList.toggle('open');
            document.getElementById('ham').setAttribute('aria-expanded', open);
            m.setAttribute('aria-hidden', !open);
            document.getElementById('h1').style.transform = open ? 'rotate(45deg) translate(4.5px,4.5px)' : '';
            document.getElementById('h2').style.opacity = open ? '0' : '1';
            document.getElementById('h3').style.transform = open ? 'rotate(-45deg) translate(4.5px,-4.5px)' : '';
        }

        function closeMenu() {
            document.getElementById('mobNav').classList.remove('open');
            document.getElementById('mobNav').setAttribute('aria-hidden', 'true');
            document.getElementById('ham').setAttribute('aria-expanded', 'false');
            document.getElementById('h1').style.transform = '';
            document.getElementById('h2').style.opacity = '1';
            document.getElementById('h3').style.transform = '';
        }

        // REVEAL
        const ro = new IntersectionObserver(es => es.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('in');
                ro.unobserve(e.target); }
        }), { threshold: .12 });
        document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

        // SWIPER
        new Swiper('.testi-swiper', {
            loop: true,
            pagination: { el: '.swiper-pagination', clickable: true },
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: { delay: 4000, disableOnInteraction: false },
            breakpoints: { 768: { slidesPerView: 2 } }
        });

        // FAQ
        document.querySelectorAll('.faq-q').forEach(q => {
            q.addEventListener('click', function() {
                const a = this.nextElementSibling;
                const isOpen = a.style.display === 'block';
                document.querySelectorAll('.faq-a').forEach(x => x.style.display = 'none');
                document.querySelectorAll('.faq-q').forEach(x => x.classList.remove('open'));
                if (!isOpen) { a.style.display = 'block';
                    this.classList.add('open'); }
            });
        });

        // CHARACTER COUNT
        const cMsg = document.getElementById('cMsg');
        const charCount = document.getElementById('charCount');
        if (cMsg && charCount) {
            cMsg.addEventListener('input', function() {
                charCount.textContent = this.value.length + ' / 500';
            });
        }

        // MAP
        const map = L.map('map').setView([19.9975, 73.7898], 12);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        const orangeIcon = L.divIcon({
            className: '',
            html: '<div style="width:14px;height:14px;border-radius:50%;background:#f08030;border:2px solid #fff;box-shadow:0 0 10px rgba(240,128,48,.7)"></div>',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
        const vineyardIcon = L.divIcon({
            className: '',
            html: '<div style="width:10px;height:10px;border-radius:50%;background:#e8a040;border:2px solid rgba(255,255,255,.6);box-shadow:0 0 8px rgba(232,160,64,.5)"></div>',
            iconSize: [10, 10],
            iconAnchor: [5, 5]
        });

        // Main marker
        L.marker([19.9975, 73.7898], { icon: orangeIcon }).addTo(map)
            .bindPopup('<b>Vynora · Nashik</b><br>Premium rides start here.').openPopup();

        // Vineyard markers
        const vineyards = [
            { lat: 19.9790, lng: 73.6610, name: 'Sula Vineyards' },
            { lat: 19.9780, lng: 73.6620, name: 'York Winery' },
            { lat: 19.9320, lng: 73.5300, name: 'Trimbakeshwar Temple' },
            { lat: 20.0060, lng: 73.7950, name: 'Nashik Road Station' },
        ];
        vineyards.forEach(v => {
            L.marker([v.lat, v.lng], { icon: vineyardIcon }).addTo(map)
                .bindPopup('<b>' + v.name + '</b><br>Covered by Vynora');
        });

        document.getElementById('locMeBtn').addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const { latitude: lat, longitude: lng } = pos.coords;
                    map.setView([lat, lng], 14);
                    L.marker([lat, lng], { icon: orangeIcon }).addTo(map).bindPopup(
                        'You are here').openPopup();
                    document.getElementById('locDetail').textContent =
                        'Your location: ' + lat.toFixed(4) + ', ' + lng.toFixed(4);
                }, () => alert('Unable to get location. Please check your browser permissions.'));
            } else alert('Geolocation not supported by your browser.');
        });

        document.getElementById('shareLocBtn').addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const link =
                        'https://maps.google.com/?q=' + pos.coords.latitude + ',' + pos.coords
                        .longitude;
                    window.open('https://wa.me/919960340222?text=' + encodeURIComponent(
                        'Emergency live location: ' + link), '_blank');
                }, () => alert('Unable to get location. Please check your browser permissions.'));
            } else alert('Geolocation not supported by your browser.');
        });

        // CONTACT FORM
        document.getElementById('contactForm').addEventListener('submit', e => {
            e.preventDefault();
            const n = document.getElementById('cName').value.trim();
            const p = document.getElementById('cPhone').value.trim();
            const m = document.getElementById('cMsg').value.trim();
            if (!n || !p || !m) {
                alert('Please fill in all fields before sending.');
                return;
            }
            window.open('https://wa.me/919960340222?text=' + encodeURIComponent(
                "Hi Vynora, I'm " + n + ' (' + p + '). ' + m), '_blank');
        });

        // Close mobile nav on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const mobNav = document.getElementById('mobNav');
                if (mobNav.classList.contains('open')) {
                    closeMenu();
                }
            }
        });