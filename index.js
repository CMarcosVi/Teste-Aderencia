function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.animatedDisabled');
    const ableClasses = [];//array de able que sera utilizado no spread

    for (let i = 1; i <= sections.length; i++) {//iteração sobre ableClasses
        ableClasses.push(`able${i}`);
    }
    if (sections.length) {
        const windowHalf = window.innerHeight * 0.9; // 90% da altura da window

        function animaScroll() {
            sections.forEach((section, index) => {
                const sectionTop = section.getBoundingClientRect().top; //altura da div ou section em relação ao topo
                const isSectionVisible = (sectionTop - windowHalf) < 0;
                if (isSectionVisible) { //condicional se o valor de isSectionVisible é verdadeiro para adição da class
                    section.classList.add('animatedDisabled', ableClasses[index]);
                } else {
                    section.classList.remove(...ableClasses);// operador spread 
                }
            });
        }
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();