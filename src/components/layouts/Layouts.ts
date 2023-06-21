import AdminLayout from './AdminLayout';
import AuthLayout from './AuthLayout';
import GuestLayout from './GuestLayout';
import SignInSignUpLayout from './sigin-signup-container';

export const Layouts = {
    Admin: AdminLayout,
    Auth: AuthLayout,
    Guest: GuestLayout,
    SignInSignUp: SignInSignUpLayout
};

export type layouts = keyof typeof Layouts; 