import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './../assets/icons8-96.png';
import { getUserDetails } from '../util/GetUser';
import { Dropdown } from "antd";
import avatar from './../assets/icons8-96.png';

function NavBar(active) {

  const [user, setUser] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('todoAppUser');
    localStorage.clear();
    navigator('/login');
  };

  const items = [
    {
      key: '1',
      label: (
        <span onClick={handleLogout}>Logout</span>
      ),
    },
  ];

  return (
    <header>
      <nav>
        <div className='logo__wrapper'>
          <img src={logo} alt="logo" />
          <h4>TooDo</h4>
        </div>

        <ul className="navigation-menu">
          {user && <li>
            <Link
              to="/to-do-list"
              className={active === 'myTask' && 'activeNav'}>
              My Task
            </Link>
          </li>}

          <>
            <Dropdown
              menu={{ items, }}
              placement="bottom"
              arrow >
              <div className='userInfoNav'>
                <img src={avatar} alt="." />
                <span>
                  {user?.firstName ? `Hello, ${user?.firstName} ${user?.lastName}` : user?.username}
                </span>
              </div>
            </Dropdown>
          </>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
