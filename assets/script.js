
(function(){
  const btn = document.querySelector('.menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if(!btn || !sidebar) return;

  const toggle = (open)=>{
    const isOpen = open !== undefined ? open : btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(isOpen));
    if(isOpen){
      sidebar.removeAttribute('hidden');
      sidebar.dataset.open = "true";
      document.documentElement.style.overflow='hidden';
    }else{
      sidebar.dataset.open = "false";
      document.documentElement.style.overflow='';
    }
  };
  btn.addEventListener('click', ()=> toggle());

  // Close when clicking outside on small screens
  document.addEventListener('click', (e)=>{
    if(window.matchMedia('(min-width: 960px)').matches) return;
    if(btn.contains(e.target) || sidebar.contains(e.target)) return;
    if(btn.getAttribute('aria-expanded') === 'true') toggle(false);
  });

  // Reset state on resize
  const mm = window.matchMedia('(min-width: 960px)');
  const handle = ()=>{
    if(mm.matches){
      btn.setAttribute('aria-expanded', 'false');
      sidebar.removeAttribute('hidden');
      document.documentElement.style.overflow='';
    }else{
      // keep sidebar visible by default, but allow toggle
      sidebar.removeAttribute('hidden');
    }
  };
  mm.addEventListener('change', handle);
  handle();
})();
