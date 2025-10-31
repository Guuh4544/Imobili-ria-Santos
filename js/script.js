// Menu Mobile Toggle
const menuToggle = document.getElementById("menuToggle")
const navMobile = document.getElementById("navMobile")
const linksMobile = document.querySelectorAll(".link-mobile")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    navMobile.classList.toggle("active")
})

// Fechar menu ao clicar em um link
linksMobile.forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        navMobile.classList.remove("active")
    })
})

// Fechar menu ao clicar fora
document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navMobile.contains(e.target)) {
        menuToggle.classList.remove("active")
        navMobile.classList.remove("active")
    }
})

// Botão Voltar ao Topo
const btnTopo = document.getElementById("btnTopo")

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add("visible")
    } else {
        btnTopo.classList.remove("visible")
    }
})

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// Animação de Scroll Suave para Links Internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))

        if (target) {
            const headerOffset = 80
            const elementPosition = target.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
    })
})

// Animação de Entrada dos Cards ao Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

// Aplicar animação aos cards
const animateElements = document.querySelectorAll(".stat-card, .servico-card, .escritorio-item")
animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
})

// Efeito de Parallax no Banner
window.addEventListener("scroll", () => {
    const banner = document.querySelector(".banner-img")
    if (banner) {
        const scrolled = window.scrollY
        banner.style.transform = `translateY(${scrolled * 0.5}px)`
    }
})

// Contador Animado para Estatísticas
const animateCounter = (element, target) => {
    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
        current += increment
        if (current >= target) {
            element.textContent = target + (element.textContent.includes("+") ? "+" : "%")
            clearInterval(timer)
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes("+") ? "+" : "%")
        }
    }, 20)
}

// Observar cards de estatísticas para iniciar contador
const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
                const numero = entry.target.querySelector(".stat-numero")
                const text = numero.textContent
                const value = Number.parseInt(text.replace(/\D/g, ""))

                numero.textContent = "0" + (text.includes("+") ? "+" : "%")
                animateCounter(numero, value)
                entry.target.classList.add("counted")
            }
        })
    },
    { threshold: 0.5 },
)

document.querySelectorAll(".stat-card").forEach((card) => {
    statsObserver.observe(card)
})

// Adicionar classe active aos links do menu conforme scroll
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".link-topo, .link-mobile")

window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollY >= sectionTop - 100) {// Menu Mobile Toggle
            const menuToggle = document.getElementById("menuToggle")
            const navMobile = document.getElementById("navMobile")
            const linksMobile = document.querySelectorAll(".link-mobile")

            menuToggle.addEventListener("click", () => {
                menuToggle.classList.toggle("active")
                navMobile.classList.toggle("active")
            })

            // Fechar menu ao clicar em um link
            linksMobile.forEach((link) => {
                link.addEventListener("click", () => {
                    menuToggle.classList.remove("active")
                    navMobile.classList.remove("active")
                })
            })

            // Fechar menu ao clicar fora
            document.addEventListener("click", (e) => {
                if (!menuToggle.contains(e.target) && !navMobile.contains(e.target)) {
                    menuToggle.classList.remove("active")
                    navMobile.classList.remove("active")
                }
            })

            // Botão Voltar ao Topo
            const btnTopo = document.getElementById("btnTopo")

            window.addEventListener("scroll", () => {
                if (window.scrollY > 300) {
                    btnTopo.classList.add("visible")
                } else {
                    btnTopo.classList.remove("visible")
                }
            })

            btnTopo.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            })

            // Animação de Scroll Suave para Links Internos
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault()
                    const target = document.querySelector(this.getAttribute("href"))

                    if (target) {
                        const headerOffset = 80
                        const elementPosition = target.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.scrollY - headerOffset

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        })
                    }
                })
            })

            // Animação de Entrada dos Cards ao Scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1"
                        entry.target.style.transform = "translateY(0)"
                    }
                })
            }, observerOptions)

            // Aplicar animação aos cards
            const animateElements = document.querySelectorAll(".stat-card, .servico-card, .escritorio-item")
            animateElements.forEach((el) => {
                el.style.opacity = "0"
                el.style.transform = "translateY(30px)"
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
                observer.observe(el)
            })

            // Efeito de Parallax no Banner
            window.addEventListener("scroll", () => {
                const banner = document.querySelector(".banner-img")
                if (banner) {
                    const scrolled = window.scrollY
                    banner.style.transform = `translateY(${scrolled * 0.5}px)`
                }
            })

            // Contador Animado para Estatísticas
            const animateCounter = (element, target) => {
                let current = 0
                const increment = target / 100
                const timer = setInterval(() => {
                    current += increment
                    if (current >= target) {
                        element.textContent = target + (element.textContent.includes("+") ? "+" : "%")
                        clearInterval(timer)
                    } else {
                        element.textContent = Math.floor(current) + (element.textContent.includes("+") ? "+" : "%")
                    }
                }, 20)
            }

            // Observar cards de estatísticas para iniciar contador
            const statsObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
                            const numero = entry.target.querySelector(".stat-numero")
                            const text = numero.textContent
                            const value = Number.parseInt(text.replace(/\D/g, ""))

                            numero.textContent = "0" + (text.includes("+") ? "+" : "%")
                            animateCounter(numero, value)
                            entry.target.classList.add("counted")
                        }
                    })
                },
                { threshold: 0.5 },
            )

            document.querySelectorAll(".stat-card").forEach((card) => {
                statsObserver.observe(card)
            })

            // Adicionar classe active aos links do menu conforme scroll
            const sections = document.querySelectorAll("section[id]")
            const navLinks = document.querySelectorAll(".link-topo, .link-mobile")

            window.addEventListener("scroll", () => {
                let current = ""

                sections.forEach((section) => {
                    const sectionTop = section.offsetTop
                    const sectionHeight = section.clientHeight
                    if (scrollY >= sectionTop - 100) {
                        current = section.getAttribute("id")
                    }
                })

                navLinks.forEach((link) => {
                    link.classList.remove("active")
                    if (link.getAttribute("href") === `#${current}`) {
                        link.classList.add("active")
                    }
                })
            })

            console.log("🏠 Imobiliária Santos - Site carregado com sucesso!")

            current = section.getAttribute("id")
        }
    })

    navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active")
        }
    })
})

console.log("🏠 Imobiliária Santos - Site carregado com sucesso!")
