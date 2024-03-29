'use client';

import Image from 'next/image';
import Link from 'next/link';

import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import CrownIcon from '@/components/icons/CrownIcon';
import { useGetHotTrendGoodsDetail } from '@/hooks/query/useHotTrends';
import { formatNumberWithComma, prefixZero } from '@/utils/numberFormatter';

interface HotTrendInfoProps {
  params: { id: string };
}

export default function HotTrendInfo({ params: { id } }: HotTrendInfoProps) {
  const { data } = useGetHotTrendGoodsDetail(Number(id));

  return (
    <div className="bg-white px-5 pb-9 pt-5 font-bold">
      <div className="text-xl2 py-10px ">이번주 Hot Trend</div>
      <div className="">
        <div className="border-main1 bg-main1 px-15px py-9px flex  justify-between border-2 text-white">
          <span className="gap-7px flex items-center">
            <CrownIcon />
            {prefixZero(data.rank)}
          </span>
          <span className="">Hot Ranking 🔥</span>
        </div>
        <div className="border-main1 flex border-2">
          <div>
            <div className="px-17px py-21px break-keep">{data.title}</div>
            <div className="border-main1 px-17px py-4px border-t-2 font-medium">
              <div>{data.goodsName}</div>
              <div>{formatNumberWithComma(data.goodsPrice)}원</div>
            </div>
          </div>
          <div className="border-main1 min-w-[152px] flex-1 border-l-2 p-2">
            <div className="relative flex h-full w-full ">
              <Image
                className="object-contain"
                src={data.goodsImageUrl}
                alt={data.goodsName}
                fill
              />
            </div>
          </div>
        </div>
        <div className="border-main1 py-9px px-40px text-15px break-keep border-x-2 text-center font-medium">
          {data.content}
        </div>
        <div className=" border-main1 border-2">
          <Link
            className="p-9px flex w-full items-center justify-center gap-1 bg-[#D3EB6E]"
            href={data.linkUrl}
          >
            <span className="text-15px font-bold">더 알아보기</span>
            <ChevronRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
