import { useRouter } from 'next/navigation';
import { useEffect, useState, ComponentType } from 'react';
import { useAuth } from '../contexts/AuthContext';

const withAuth = (WrappedComponent: ComponentType<any>) => {
  const Wrapper = (props: any) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!localStorage.getItem('token')) {
        router.push('/login');
      } else {
        setLoading(false);
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated || loading) {
      return null; // You can replace this with a loading spinner if desired
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
