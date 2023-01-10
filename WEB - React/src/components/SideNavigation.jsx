

function SideNavigation(props) {
    return(

        <div className='top-navigation bg-slate-600'>
        <h5 class="title-text">Nachji</h5>
        <ThemeIcon />
        <FaRegBell size='24' className='top-navigation-icon' />;
        <FaUserCircle size='24' className='top-navigation-icon' />;
        </div>

    );
}

export default SideNavigation;