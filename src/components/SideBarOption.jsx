const SideBarOption = ({ title, Icon }) => {
    return (
        <div className="sidebar-option">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
};

export default SideBarOption;
