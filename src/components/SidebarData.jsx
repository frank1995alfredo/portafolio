import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from "react-icons/gi"

export const SidebarData = [
    {
        titulo: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        titulo: 'Lenguajes',
        path: '/lenguajes',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        titulo: 'Hobbies',
        path: '/hobbies',
        icon: <GiIcons.Gi3DGlasses />,
        cName: 'nav-text'
    },
    {
        titulo: 'GitHub',
        path: '/github',
        icon: <AiIcons.AiOutlineGithub />,
        cName: 'nav-text'
    }
]