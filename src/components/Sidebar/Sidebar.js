import React, { useContext, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    Xbox,
    SLogo,
    NLogo,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import Logo from "../../assets/logo";

import {
    AiOutlineRise,
   
    
} from "react-icons/ai";
import { MdLogout, MdHomeWork, MdEscalatorWarning } from "react-icons/md";
import { BsFillPeopleFill} from "react-icons/bs";
import { RiSettings3Fill, RiMenuFoldLine} from "react-icons/ri";
import { IoIosBulb} from "react-icons/io";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

 

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <RiMenuFoldLine/>
                </SSidebarButton>
            </>
            <Xbox>
            <SLogo>
                <Logo/>
            </SLogo>
            {sidebarOpen && (
                            <>
                <NLogo><p>Creduxe</p></NLogo>
                </>
                        )}
            </Xbox>
            
           
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => (
                <SLinkContainer key={label}>
                    <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Dashboard",
        icon: <AiOutlineRise />,
        to: "/",
        notification: 0,
    },
    {
        label: "School",
        icon: <MdHomeWork />,
        to: "/school",
        notification: 3,
    },
    {
        label: "Students",
        icon: <BsFillPeopleFill />,
        to: "/students",
        notification: 7,
    },
    {
        label: "Guardian",
        icon: <MdEscalatorWarning/>,
        to: "/guardian",
        notification: 1,
    },
];

const secondaryLinksArray = [
    {
        label: "Get Started",
        icon: <IoIosBulb/>,
    },
    {
        label: "Settings",
        icon: <RiSettings3Fill/>,
    },
    {
        label: "Logout",
        icon: <MdLogout />,
    },
];

export default Sidebar;
