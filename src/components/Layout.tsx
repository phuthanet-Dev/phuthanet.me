import { ReactNode } from 'react';
import NavBar from './navBar';
import Footer from './footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col w-full">
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
