// import LoginModal from '@/components/@Modal/auth/loginModal/LoginModal';
import GuestHeader from './source/components/GuestHeader';
import SignupModal from '@/components/@Modal/auth/signupModal/SignupModal';

const Guest = () => {
  return (
    <div>
      <GuestHeader />
      <main>
        {/* <LoginModal /> */}
        <SignupModal />
      </main>
    </div>
  );
};

export default Guest;
