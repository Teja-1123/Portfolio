$(document).ready(function () {
        $('#menu').click(function () {
            $(this).toggleClass('fa-times');
            $('.list').toggleClass('nav-toggle');
        });

     $(window).on('scroll load', function () {
            $('#menu').removeClass('fa-times');
            $('.list').removeClass('nav-toggle');

            if (window.scrollY > 60) {
                document.querySelector('#scroll-top').classList.add('active');
            } else {
                document.querySelector('#scroll-top').classList.remove('active');
            }


            $('section').each(function () {
                let height = $(this).height();
                let offset = $(this).offset().top - 100;
                let top = $(window).scrollTop();
                let id = $(this).attr('id');
                console.log("ID:", id, "Offset:", offset, "Top:", top, "Height:", height);

                if (top > offset && top < offset + height) {
                    $('.list ul li a').removeClass('active');
                    $('.list').find(`[href="#${id}"]`).addClass('active');
                }
            });
    });


     $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

}); 
$("#contact-form").submit(function (event) {
    emailjs.init("ae7GqBJr_n4qVcEy0"); // Your Public Key

    emailjs.sendForm('service_bejnbl2', 'template_jvpr57v', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();
            alert("Form Submitted Successfully");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Form Submission Failed! Try Again");
        });
    event.preventDefault();
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings:["frontend development", "backend development", "AI/ML"],

    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});


async function fetchData(type = "skills") {
    let response;
    type === "skills" ?
        response = await fetch("skills.json") :
        response = await fetch("projects.json");
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("Container");
    let skillHTML = "";

    // Loop through each category
    for (const category in skills) {
        skillHTML += `<h3>${category}</h3><div class="category-container">`;

        // Loop through each skill in the category
        skills[category].forEach(skill => {
            skillHTML += `
                <div class="bar">
                    <div class="info">
                        <img src="${skill.image}" alt="${skill.name}" />
                        <span>${skill.name}</span>
                    </div>
                </div>
            `;
        });

        skillHTML += `</div>`; // close category container
    }

    skillsContainer.innerHTML = skillHTML;
}

// Usage
fetchData().then(data => showSkills(data));

async function showProjects() {
    const projects = await fetchData("projects"); // fetch projects.json
    const container = document.getElementById("projectsContainer");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <h4>${project.name}</h4>
        `;
        card.addEventListener("click", () => openProjectModal(project));
        container.appendChild(card);
    });
}

// Modal logic
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLinks = document.getElementById("modalLinks");
const closeBtn = document.querySelector("#projectModal .close");

function openProjectModal(project) {
    // Set the project name
    modalTitle.innerText = project.name;

    // Combine description + technologies into one block
    let techList = project.technologies
        ? `<p><strong>Technologies:</strong> ${project.technologies.map(t => `<span class="tech">${t}</span>`).join(" ")}</p>`
        : "";

    // Add both description and technologies
    modalDesc.innerHTML = `
        <p>${project.desc}</p>
        ${techList}
    `;

    // Add links
    modalLinks.innerHTML = `
        <a href="${project.links.view}" target="_blank">View Demo</a>
        <a href="${project.links.code}" target="_blank">View Code</a>
    `;

    // Show the modal
    modal.style.display = "flex";
}


closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; }

// Call function to render projects
showProjects();

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .leetcode-link', { interval: 1000 });
srtop.reveal('.home .instagram', { interval: 600 });


/* SCROLL ABOUT */
srtop.reveal('.about .content h2', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .container', { delay: 200 });
srtop.reveal('.about .content .resume', { delay: 200 });


/* SCROLL SKILLS */
/* SCROLL SKILLS */
srtop.reveal('.skills .heading', { delay: 100 });       // For the section heading
srtop.reveal('.skills .container', { interval: 200 });   // For the whole container
// srtop.reveal('.skills .container .bar', { delay: 300 }); // For each skill bar one by one


/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });


/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });