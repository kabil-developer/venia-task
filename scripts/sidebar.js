/* Sidebar implementation */

const sidebar = document.getElementById('sidebar');

document.addEventListener('click', (event)=>{
  const sidebar = document.getElementById('sidebar');
  const sidebarControl = document.getElementById('sidebar-control');
  const showResultsBtn = document.getElementById('show-results-button');

  const isClickInside = sidebar.contains(event.target);
  const isClickOnControl = sidebarControl.contains(event.target);
  const isClickOnShowResults = showResultsBtn.contains(event.target);


  if(!isClickInside) {
    /* If the click is outside the sidebar */

    if(isClickOnControl) {
      /*When you click on hamburger it will open sidebar if already close and vice versa */
      toggleSidebar();
    }
    else {
      /* When the click is outside the sidebar, it will close the sidebar */
      sidebar.classList.remove('opened');
      //sidebar.className = sidebar.className.replace('opened', '');
    }
  } else {
    /* If the click is inside the sidebar */

    /* When you click on show results in sidebar, it will close the sidebar */
    if(isClickOnShowResults) {
      sidebar.classList.remove('opened');
    }
  }
});

const toggleSidebar = () => {
  if(sidebar.className.includes('opened')) {
    //sidebar.className = sidebar.className.replace('opened', '');
    sidebar.classList.remove('opened');
  }
  else {
    sidebar.className = `${sidebar.className} opened`;
  }
}