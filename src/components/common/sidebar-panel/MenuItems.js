const MenuItems = () => {
  const menuItems = [
    { id: 0, title: "Catalog", link: "/grid-default" },
    { id: 1, title: "Apartments", link: "#"  },
    { id: 2, title: "Bungalow", link: "#"  },
    { id: 3, title: "Houses", link: "#"  },
    { id: 4, title: "Loft", link: "#"  },
    { id: 5, title: "Office", link: "#"  },
    { id: 6, title: "Townhome", link: "#"  },
    { id: 7, title: "Villa", link: "#"  },
  ];

  return (
    <ul className="navbar-nav">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.id}>
          <a className="nav-link" href={item.link} role="button">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
