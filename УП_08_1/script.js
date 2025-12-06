function createModal() {
    const modalHTML = `
        <div class="modal-overlay" id="modalOverlay">
            <div class="modal">
                <div class="modal-content">
                    <div class="modal-tabs">
                        <button class="tab-btn active" onclick="switchTab('login')">Log In</button>
                        <button class="tab-btn" onclick="switchTab('register')">Sign Up</button>
                        <span class="close-btn" onclick="closeModal()">×</span>
                    </div>
                    
                    <form class="auth-form active" id="loginForm" onsubmit="handleSubmit(event, 'login')">
                        <input type="email" placeholder="Email" required>
                        <input type="password" placeholder="Password" required>
                        <button type="submit" class="submit-btn">Log In</button>
                    </form>
                    
                    <form class="auth-form" id="registerForm" onsubmit="handleSubmit(event, 'register')">
                        <input type="text" placeholder="Full Name" required>
                        <input type="email" placeholder="Email" required>
                        <input type="password" placeholder="Password" required>
                        <button type="submit" class="submit-btn">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modalContainer').innerHTML = modalHTML;
}

function openModal(tab = 'login') {
    createModal();
    setTimeout(() => {
        document.getElementById('modalOverlay').classList.add('active');
        switchTab(tab);
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => 
        btn.classList.toggle('active', btn.textContent.includes(tab === 'login' ? 'Log In' : 'Sign Up'))
    );
    
    document.querySelectorAll('.auth-form').forEach(form => 
        form.classList.toggle('active', form.id === tab + 'Form')
    );
}

function handleSubmit(e, type) {
    e.preventDefault();
    alert(`${type === 'login' ? 'Вход выполнен!' : 'Регистрация успешна!'}`);
    closeModal();
}

document.getElementById('loginBtn').onclick = () => openModal('login');
document.getElementById('registerBtn').onclick = () => openModal('register');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('modalOverlay')) closeModal();
});




/* learn more */

function CreateLearnMoreModal() {
    const LearnMoreHTML = `
        <div class="learn-more-modal" id="learn-more-modal">
            <div class="modal-content">
                <button class="close-btn" onclick="closeModal_learn()">×</button>
                <h2>Learn More</h2>
                <p>Bee's don't have feet (or maybe they do... who knows...)</p>
                <p>Glue don't stick to the package as it doesn't let the air come in (Glue makes anything sticky by reacting to air)</p>
                <p>Dolphins are drug addicts. They know the dosage of toxin coming from pufferfish, they scare them and take their toxin to get high</p>
            </div>
        </div>
    `;
    document.getElementById('modalContainer').innerHTML = LearnMoreHTML;
}

function openModal_learn() {
    CreateLearnMoreModal();
    setTimeout(() => {
        document.getElementById('learn-more-modal').classList.add('active');
    }, 10);
}

function closeModal_learn() {
    const modal = document.getElementById('learn-more-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('learn-more-modal')) {
        closeModal_learn();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('learn-more-modal')) {
        closeModal_learn();
    }
});

/* block rotations */
const items = document.querySelectorAll('.j-block');
let index = 0;

items.forEach(item => {
    item.style.opacity = '0.15';
    item.style.transition = 'opacity 0.3s ease';
});

items[0].style.opacity = '1';

setInterval(() => {
    items[index].style.opacity = '0.15';
    
    index = (index + 1) % items.length;
    items[index].style.opacity = '1';
}, 3000);


/* ratings scale */
const headerBlocks = document.querySelectorAll('.header-blocks > div');
let activeIndex = 0;
const style = document.createElement('style');
style.textContent = `
    .header-blocks > div {
        display: inline-block;
        transition: all 0.5s ease;
        margin: 0 15px;
        transform: scale(0.8);
        opacity: 0.7;
    }
    
    .header-blocks > div.active {
        transform: scale(1.2);
        opacity: 1;
    }
`;
document.head.appendChild(style);

headerBlocks[0].classList.add('active');

setInterval(() => {
    headerBlocks[activeIndex].classList.remove('active');
    
    activeIndex = (activeIndex + 1) % headerBlocks.length;
    
    headerBlocks[activeIndex].classList.add('active');
}, 3000);



/* public */
const sponsorLogos = document.querySelectorAll('.feat > div');
let activeLogoIndex = 0;

// Инициализация - делаем все логотипы одинакового размера, но активный больше
sponsorLogos.forEach((logo, index) => {
    logo.style.display = 'inline-block';
    logo.style.transition = 'all 0.5s ease';
    logo.style.margin = '0 20px';
    logo.style.cursor = 'pointer';
    
    if (index === 0) {
        // Активный логотип - больше
        logo.style.transform = 'scale(1.3)';
        logo.style.opacity = '1';
        logo.style.filter = 'brightness(1)';
    } else {
        // Неактивные - меньше
        logo.style.transform = 'scale(0.9)';
        logo.style.opacity = '0.6';
        logo.style.filter = 'brightness(0.8)';
    }
});

// Функция листания логотипов
function rotateSponsors() {
    // Уменьшаем старый активный логотип
    sponsorLogos[activeLogoIndex].style.transform = 'scale(0.9)';
    sponsorLogos[activeLogoIndex].style.opacity = '0.6';
    sponsorLogos[activeLogoIndex].style.filter = 'brightness(0.8)';
    
    // Переходим к следующему логотипу
    activeLogoIndex = (activeLogoIndex + 1) % sponsorLogos.length;
    
    // Увеличиваем новый активный логотип
    sponsorLogos[activeLogoIndex].style.transform = 'scale(1.3)';
    sponsorLogos[activeLogoIndex].style.opacity = '1';
    sponsorLogos[activeLogoIndex].style.filter = 'brightness(1)';
}

// Запускаем авто-листание каждые 2.5 секунды
setInterval(rotateSponsors, 2500);

// Добавляем клик по логотипам для ручного переключения
sponsorLogos.forEach((logo, index) => {
    logo.addEventListener('click', () => {
        // Уменьшаем все логотипы
        sponsorLogos.forEach(l => {
            l.style.transform = 'scale(0.9)';
            l.style.opacity = '0.6';
            l.style.filter = 'brightness(0.8)';
        });
        
        // Увеличиваем кликнутый
        logo.style.transform = 'scale(1.3)';
        logo.style.opacity = '1';
        logo.style.filter = 'brightness(1)';
        
        // Обновляем индекс
        activeLogoIndex = index;
    });
});