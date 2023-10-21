import useLogout from "hooks/useLogout"

const ProfileModal = () => {

    const {logout} = useLogout()

  return (
    <ul className="menu bg-base-200 w-48 rounded-box ">
      <li onClick={logout} >
        <span>Logout</span>
      </li>
      <li>
        <span>User Info</span>
      </li>
      <li>
        <span>Raise a Issue?</span>
      </li>
    </ul>
  )
}

export default ProfileModal
