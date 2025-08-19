/*function initAccordion()
{
    const triggers = document.querySelectorAll('.faq__trigger');

    triggers.forEach((btn) => {
        btn.addEventListener('click', () => {
            const panelId = btn.getAttribute('aria-controls');
            const panel = panelId ? document.getElementById(panelId) : null;

            const isOpen = btn.getAttribute('aria-expanded') === 'true';
            const nextState = !isOpen;

            btn.setAttribute('aria-expanded', nextState);

            if (panel) 
                panel.hidden = !nextState;
        });

    });
}*/
function initAccordion()
{
    const triggers = document.querySelectorAll('faq__trigger');

    for(var i = 0; i < triggers.length; i++)
    {
        var btn = triggers[i];

        btn.addEventListener('click', function(event)
        {
            var btn = 
        }
        )
    }
}


document.addEventListener('DOMContentLoaded', initAccordion);