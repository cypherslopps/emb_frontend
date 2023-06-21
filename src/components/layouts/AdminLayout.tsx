import React, { ReactNode } from 'react';
import Link from 'next/link';
import AdminSidebar from '../admin-sidebar/admin-sidebar';
import AdminNavigation from '../admin-navigation/admin-navigation';
import useAuth from '@/hooks/useAuth';

type Props = {
  children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <main className="bg-gray-100/30 dark:bg-dark-100-shade-200 overflow-x-hidden">
      <AdminSidebar user={user} />

      <section className="w-[80vw] ml-[20vw] h-screen">
        {/* Admin Navigation */}
        <AdminNavigation user={user} />

        <main className="admin-content py-10 w-[98%] px-3 mx-auto md:px-6 lg:pl-[1.2rem] lg:pr-8 max-w-7xl space-y-6">
          {children}
        </main>
      </section>
    </main>
  )
}

export default AdminLayout