import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page"
       
        >
          <svg className="bi"><use ></use></svg>
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center gap-2"
        >
          <svg className="bi"><use ></use></svg>
          Product
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center gap-2"
        >
          <svg className="bi"><use></use></svg>
          Account
        </a>
      </li>
    </ul>
    <hr className="my-3"/>

    <ul className="nav flex-column mb-auto">
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center gap-2" href="#">
          <svg className="bi"><use ></use></svg>
          Settings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center gap-2" href="#">
          <svg className="bi"><use></use></svg>
          Sign out
        </a>
      </li>
    </ul>
  </div>
    </div>
  )
}

export default Nav