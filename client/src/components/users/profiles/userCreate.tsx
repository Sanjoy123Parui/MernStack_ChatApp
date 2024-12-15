// here import components and libraries 
import ProfileCreateForm from '../../forms/profileCreateForm.tsx';

// here define User profile functional component
const UserCreate: React.FC = () => {

    return (
        <>
            <h1>User Profile</h1>
            <ProfileCreateForm />
        </>
    );

}

// export UserProfile functional component
export default UserCreate;