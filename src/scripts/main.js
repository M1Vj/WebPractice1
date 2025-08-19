function initAccordion()
{
    const triggers = document.querySelectorAll('faq__trigger');

    for(var i = 0; i < triggers.length; i++)
    {
        triggers[i].addEventListener('click', function(event)
        {
            var isOpen = this.getAttribute('aria-expanded') === 'true';
            var panelId = this.getAttribute('aria-controls');
            var panel = panelId ? document.getElementById(panelId) : null;

            this.setAttribute('aria-expanded', !isOpen);
            if (panel)
                panel.hidden = !isOpen;
        }
        )
    }
}


document.addEventListener('DOMContentLoaded', initAccordion);