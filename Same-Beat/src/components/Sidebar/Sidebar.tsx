import { useRef, useState } from "react";
import {
  Home,
  Ticket,
  Headphones,
  User,
  Plus,
  Pencil,
  Music,
  Video,
  ImageIcon,
  LogOut,
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const [activeTab, setActiveTab] = useState("home");

  const [bubbleStyle, setBubbleStyle] = useState({
    top: 0,
    opacity: 0,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHover = (
    e: React.MouseEvent<HTMLButtonElement>,
    tab: string
  ) => {
    if (!navRef.current) return;

    const btnRect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    setBubbleStyle({
      top: btnRect.top - navRect.top + btnRect.height / 2 - 24,
      opacity: 1,
    });

    setActiveTab(tab);
  };

  const hideBubble = () => {
    setBubbleStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home size={20} />,
    },
    {
      id: "concerts",
      label: "Concerts",
      icon: <Ticket size={20} />,
    },
    {
      id: "music",
      label: "Music",
      icon: <Headphones size={20} />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User size={20} />,
    },
  ];

  return (
    <aside className="sidebar">

      {/* LOGO FLOTANTE */}
      <div className="sidebar__logo">
        <img
          src="/assets/mockis.png"
          alt="SameBeat Logo"
          className="sidebar__logo-img"
        />
      </div>

      {/* PANEL */}
      <div className="sidebar__nav-wrapper">

        {/* NAV */}
        <div
          className="sidebar__nav"
          ref={navRef}
          onMouseLeave={hideBubble}
        >

          {/* BURBUJA */}
          <div
            className="sidebar__bubble"
            style={{
              top: `${bubbleStyle.top}px`,
              opacity: bubbleStyle.opacity,
            }}
          />

          {/* BOTONES */}
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar__nav-btn ${
                activeTab === item.id
                  ? "sidebar__nav-btn--active"
                  : ""
              }`}
              onMouseEnter={(e) => handleHover(e, item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}

          {/* CREATE */}
          <div
            className={`sidebar__dropdown ${
              isDropdownOpen ? "open" : ""
            }`}
          >

            <button
              className={`sidebar__nav-btn ${
                activeTab === "create"
                  ? "sidebar__nav-btn--active"
                  : ""
              }`}
              onMouseEnter={(e) => handleHover(e, "create")}
              onClick={() =>
                setIsDropdownOpen(!isDropdownOpen)
              }
            >
              <Plus size={20} />
              <span>Create</span>
            </button>

            {/* MENU */}
            <div className="sidebar__dropdown-menu">

              <button className="sidebar__dropdown-item">
                <Pencil size={18} />
                <span>Post</span>
              </button>

              <button className="sidebar__dropdown-item">
                <Music size={18} />
                <span>Song</span>
              </button>

              <button className="sidebar__dropdown-item">
                <Video size={18} />
                <span>Video</span>
              </button>

              <button className="sidebar__dropdown-item">
                <ImageIcon size={18} />
                <span>Photo</span>
              </button>

            </div>
          </div>
        </div>

        {/* LOGOUT */}
        <button className="sidebar__logout-btn">
          <LogOut size={20} />
          <span>Log out</span>
        </button>

      </div>
    </aside>
  );
};

export default Sidebar;