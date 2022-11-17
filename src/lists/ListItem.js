
import { faBrain, faFilePen,faGears,faListCheck,faQrcode,faToolbox,faUsers} from '@fortawesome/free-solid-svg-icons'
import {faBookmark,faUser,faFileLines,faAddressCard,faHeart,faFaceGrinHearts, faBell} from '@fortawesome/free-regular-svg-icons'


export const ListItem = [
    {   
        url: "/",
        icon:faFileLines,
        text:'Buzz Home',
        number:' ',
        cName:"default"
    },
    {
        url: "/Post",
        icon:faFileLines,
        text:'My Buzz Posts',
        number:8,
        cName:"default"
    },
    {   
        url: "/Draft",
        icon:faFilePen,
        text:'Draft Posts',
        number:2,
        cName:"default"
    },
    {   
        url: "/Followers",
        icon:faUser,
        text:'My Followers',
        number:33,
        cName:"default"
    },
    {   
        url: "/Following",
        icon:faUser,
        text:'I am Following',
        number:33,
        cName:"default"
    },
    {   
        url: "/Teams",
        icon:faUsers,
        text:'My Teams',
        number:12,
        cName:"default"
    },
    {   
        url: "/Reportees",
        icon:faAddressCard,
        text:'My Reportees',
        number:12,
        cName:"default"
    },
    {   
        url: "/CloseFriends",
        icon:faFaceGrinHearts,
        text:'Close Friends',
        number:12,
        cName:"default"
    },
    {
        url: "/Notification",
        icon:faBell,
        text:'Notification',
        number:21,
        cName:"default"
    },
    {   
        url: "/Settings",
        icon:faGears,
        text:'Settings',
        cName:"default"
        
    }
]

export const MenuItem = [
    {   
        url: "/Artefacts",
        icon:faToolbox,
        text:'New Artefacts',
        number:82,
        cName:"default" 
    },
    {
        url: "/Modules",
        icon:faListCheck,
        text:'New Modules',
        number:42,
        cName:"default"
    },
    {   
        url: "/Skills",
        icon:faBrain,
        text:'New Skills',
        number:23,
        cName:"default"
    },
    {   
        url: "/Favorites",
        icon:faHeart,
        text:'Favorites',
        number:26,
        cName:"default" 
        
    },
    {
        url: "/Saved",
        icon:faBookmark,
        text:'Saved',
        number:20,
        cName:"default"
    },
    {   
        url: "/QRCode",
        icon:faQrcode,
        text:'QR Code',
        cName:"default"
    }
]




