'use client';

import NotFoundPage from '@/components/NotFoundPage';
import Error from 'next/error';
import { redirect, usePathname } from 'next/navigation';

export default function NotFound() {
  const segmentList = usePathname().split('/');

  switch (true) {
    case segmentList.includes('main'):
      return redirect('/main/ALL');
    case segmentList.includes('hottrend'):
      return redirect('/main/ALL');
    case segmentList.includes('event'):
      return redirect('/event/ALL');
    default:
      return <NotFoundPage />;
  }
}
