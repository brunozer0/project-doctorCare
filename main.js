window.addEventListener ('scroll', onScroll)

onScroll() 
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
    
  }

function activateMenuAtCurrentSection(section) {

  //linha alvo
  const targetLine = scrollY + innerHeight / 2
  
   // verificar se a seção passou da linha // quais dados vou precisar para isso? //

   //O topo da seção
   const sectionTop = section.offsetTop

       // a altura da seção
   const sectionHeight = section.offsetHeight
   
   //O topo da seção chegou ou ultrapassou a linha alvo//
   const SectionTopReachOrPassedTargetLine = targetLine >=sectionTop

   //informações dos dados lógicos //
   console.log('O topo da seção chegou ou passou da linha ?', SectionTopReachOrPassedTargetLine)
   
   //verificar se a base está abaixo da linha alvo// quais dados irei precisar para isso?

   //a seção termina onde ?//
   const sectionEndsAt = sectionTop + sectionHeight

   /// O final da seção passou da linha alvo///
   const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline)

    //limites da seção//
    const sectionBoundaries = SectionTopReachOrPassedTargetLine &&
    !sectionEndPassedTargetline

      const sectionId =  section.getAttribute('id')

   const menuElement = document
   .querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }
   
}






  function showNavOnScroll() {
    if (scrollY > 0) {
        navegation.classList.add('scroll')
      } else {
        navegation.classList.remove('scroll')
      }
  }
  function showBackToTopButtonOnScroll() {
    if (scrollY > 1000) {
        backToTopButton.classList.add('show')
      } else {
        backToTopButton.classList.remove('show')
      }
  }
  
  function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }
  

  ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
  }).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    about .content `)
