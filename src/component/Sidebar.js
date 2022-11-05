import { Link } from "react-router-dom";
import {FaTwitter} from 'react-icons/fa'
import {RiHome7Fill, RiFileListLine, RiSearchLine} from 'react-icons/ri'
import {VscBell} from 'react-icons/vsc'
import {MdOutlineLocalPostOffice} from 'react-icons/md'
import {FaRegBookmark} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {CiCircleMore} from 'react-icons/ci'
import {GiFeather} from 'react-icons/gi'


function Sidebar(){
    return (
        <div className='sidebar'>
            <div className="sidebar__icons">
                <Link className="sidebar__icons-link" to='/'><FaTwitter /> </Link>
                <Link className="sidebar__icons-link" to='/'>< RiHome7Fill /></Link>
                <Link className="sidebar__icons-link" to='/'>< RiSearchLine /></Link>
                <Link className="sidebar__icons-link" to='/'>< VscBell /></Link>
                <Link className="sidebar__icons-link" to='/'>< MdOutlineLocalPostOffice /></Link>
                <Link className="sidebar__icons-link" to='/'>< FaRegBookmark /></Link>
                <Link className="sidebar__icons-link" to='/'>< RiFileListLine /></Link>
                <Link className="sidebar__icons-link" to='/'>< CgProfile /></Link>
                <Link className="sidebar__icons-link" to='/'>< CiCircleMore /></Link>
                <Link className="sidebar__icons-link" to='/'>< GiFeather /></Link>
            </div>
            <div className='sidebar__profile'>
                <img src='https://upcdn.io/FW25awy/raw/277784206_2158174651023478_5857800306420580049_n-79Cx.jpg' alt='profile img'/>
            </div>
        </div>
    )
}

export default Sidebar