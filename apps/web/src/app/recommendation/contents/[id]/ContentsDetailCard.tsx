'use client';

import Image from 'next/image';
import Link from 'next/link';

import { PromotionGoods } from '@/apis/type';
import { mappingSegments } from '@/constants/conveniences';
import { formatNumberWithComma } from '@/utils/numberFormatter';

interface ContentsDetailCardProps extends PromotionGoods {}

export default function ContentsDetailCard({
  goodsNo,
  goodsName,
  goodsPrice,
  goodsImageUrl,
  promotionType,
  storeName,
}: ContentsDetailCardProps) {
  return (
    <div className="min-h-[165px]  w-full">
      <Link
        className="relative"
        href={`/event/${mappingSegments[storeName]}/detail/${goodsNo}`}
      >
        <div className="border-main1 bg-main1 absolute left-[2px] top-[1px] h-full w-[calc(100%+3px)] rounded-[9px] border-2"></div>
        <div className="p-10px relative  flex h-[165px] rounded-[9px] border-2 border-[#1E1C1C]  bg-white">
          <div className="relative my-2 ml-[27px] flex-1">
            <Image
              className="object-contain"
              src={goodsImageUrl}
              fill
              alt={`hottrend-${goodsName}`}
            />
          </div>
          <div className="mt-[46px] w-[168px]">
            <div>
              <span className="px-7px py-2px rounded-sm border-[1px] border-[#1E1C1C] text-xs  font-bold leading-none">
                {storeName}
              </span>
            </div>
            <div className="mt-[11px] truncate text-base font-medium leading-none">
              {goodsName}
            </div>
            <div className="mt-[2px] leading-none">
              <span className="text-xl2 font-bold ">
                {formatNumberWithComma(goodsPrice)}
              </span>
              <span>원</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
