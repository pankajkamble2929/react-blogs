import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'
import settingPP from './img/blog.jpg'

export default function Setting() {
    return (
        <div className="setting">
             <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Your Account</span>
                </div>

                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src={settingPP} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div> 
                    <label>Username</label>    
                    <input type="text" placeholder="Pankaj" />  
                    <label>Email</label>    
                    <input type="email" placeholder="pankaj@gmail.com" />
                    <label>Password</label>    
                    <input type="password" />

                    <button className="settingSubmit">Update</button>
                </form>
             </div>
             <Sidebar />
        </div>
    )
}
