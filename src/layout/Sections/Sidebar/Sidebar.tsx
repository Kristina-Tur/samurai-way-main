import React from "react";
import {S} from "./Sidebar.styles";
import {v1} from "uuid";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import {ListItemIcon} from "@mui/material";
import {MenuType} from "../../../redux/store";

type SidebarPropsType = {
    sidebar: MenuType[]
}

type IconsType = {
    [key: string]: React.ReactNode
}

const icons: IconsType = {
    'Profile': <AccountCircleIcon />,
    'Messages': <MailIcon />,
    'News': <NewspaperIcon />,
    'Music': <MusicNoteIcon />,
    'Settings': <SettingsIcon />,
};
export const Sidebar = ({sidebar}: SidebarPropsType) => {
    return (
        <S.Aside>
            <nav>
                <ul>
                    {sidebar.map(item => {
                            return (
                                <S.ListItem key={item.id}>
                                    <ListItemIcon sx={{minWidth: '35px'}}>{icons[item.title]}</ListItemIcon>
                                    <S.ListItemLink to={item.href}>{item.title}</S.ListItemLink>
                                </S.ListItem>
                            )
                        }
                    )}
                </ul>
            </nav>
        </S.Aside>
    );
};