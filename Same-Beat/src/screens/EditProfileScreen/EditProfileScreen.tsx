import EditProfile from '../../components/EditProfile/EditProfile'
import './EditProfileScreen.css'

import { userProfile } from '../../data'
import type { UserProfile } from '../../types'

export default function EditProfileScreen() {

  function handleSave(data: UserProfile) {
    console.log('Saving Profile:', data)
  }

  return (
    <div className="edit-profile-screen">

      <EditProfile
        initialData={userProfile}
        onSave={handleSave}
      />

    </div>
  )
}