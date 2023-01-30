import {
  faBrain,
  faFilePen,
  faGears,
  faListCheck,
  faQrcode,
  faToolbox,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faUser,
  faFileLines,
  faAddressCard,
  faHeart,
  faFaceGrinHearts,
  faBell,
} from "@fortawesome/free-regular-svg-icons";

export const ListItem = [
  {
    url: "/",
    icon: faFileLines,
    text: "Buzz Home",
    number: " ",
    cName: "inactive",
  },
  {
    url: "/Post",
    icon: faFileLines,
    text: "My Buzz Posts",
    number: 8,
    cName: "inactive",
  },
  {
    url: "/Draft",
    icon: faFilePen,
    text: "Draft Posts",
    number: 2,
    cName: "inactive",
  },
  {
    url: "/Followers",
    icon: faUser,
    text: "My Followers",
    number: 33,
    cName: "inactive",
  },
  {
    url: "/Following",
    icon: faUser,
    text: "I am Following",
    number: 33,
    cName: "inactive",
  },
  {
    url: "/Teams",
    icon: faUsers,
    text: "My Teams",
    number: 12,
    cName: "inactive",
  },
  {
    url: "/Reportees",
    icon: faAddressCard,
    text: "My Reportees",
    number: 12,
    cName: "inactive",
  },
  {
    url: "/CloseFriends",
    icon: faFaceGrinHearts,
    text: "Close Friends",
    number: 12,
    cName: "inactive",
  },
  {
    url: "/Notification",
    icon: faBell,
    text: "Notification",
    number: 21,
    cName: "inactive",
  },
  {
    url: "/Settings",
    icon: faGears,
    text: "Settings",
    cName: "inactive",
  },
];

export const MenuItem = [
  {
    url: "/Artefacts",
    icon: faToolbox,
    text: "New Artefacts",
    number: 82,
    cName: "inactive",
  },
  {
    url: "/Modules",
    icon: faListCheck,
    text: "New Modules",
    number: 42,
    cName: "inactive",
  },
  {
    url: "/Skills",
    icon: faBrain,
    text: "New Skills",
    number: 23,
    cName: "inactive",
  },
  {
    url: "/Favorites",
    icon: faHeart,
    text: "Favorites",
    number: 26,
    cName: "inactive",
  },
  {
    url: "/Saved",
    icon: faBookmark,
    text: "Saved",
    number: 20,
    cName: "inactive",
  },
  {
    url: "/QRCode",
    icon: faQrcode,
    text: "QR Code",
    cName: "inactive",
  },
];
