'use client';

import { ReactNode } from 'react';

import TabBar from '@/components/TabBar';

import { Convenience } from '../type';
import { useStateStore } from '@/store';
import { selectTabIndex } from '@/store/tabBar';

interface CategoryChildrenProps {
  convenience: Convenience;
  children: ReactNode;
}

export default function CategoryChildren({
  convenience,
  children,
}: CategoryChildrenProps) {
  const currentIndex = useStateStore(selectTabIndex(convenience));
  const setCategoryTabIndex = useStateStore(
    (state) => state.setCategoryTabIndex,
  );

  const handleTabBarClick = (index: number) =>
    setCategoryTabIndex({ [convenience]: index });

  return (
    <div>
      <div className="top-[53px] z-auto px-[20px] py-[19px]">
        <TabBar currentIndex={currentIndex} onClick={handleTabBarClick} />
      </div>
      <div className="pb-10px rounded-t-[30px] bg-white px-[20px] pt-[27px]">
        {children[currentIndex]}
      </div>
    </div>
  );
}
