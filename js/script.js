// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.clientHeight);
};

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const assunto = document.getElementById("assunto");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Nome: ${fullName.value}<br> Email: ${email.value}<br> Numero: ${phone.value}<br> Mensagem: ${mess.value}<br>`;

    Email.send({
        SecureToken: "9c19da5e-5e51-4b7c-aeea-d24337cf2d16",
        To: 'viniciussaafe@gmail.com',
        From: "viniciussaafe@gmail.com",
        Subject: assunto.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Sucesso!",
                    text: "Mensagem enviada com sucesso!",
                    icon: "sucesso"
                });
            }
        }
    );
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !assunto.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});

let currentIndex = 0;
const wrapper = document.querySelector('.servico-wrapper');
const totalItems = document.querySelectorAll('.servico-box').length;
const itemWidth = document.querySelector('.servico-box').clientWidth + 32;

function moveCarousel(direction) {
    if (direction == 1 && currentIndex < totalItems - 3) {
        currentIndex++;
    } else if (direction === -1 && currentIndex > 0) {
        currentIndex--;
    }
    wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}