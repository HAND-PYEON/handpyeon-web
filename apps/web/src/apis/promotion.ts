import httpClient from '@/http/client';
import type {
  PromotionGoods,
  PromotionGoodsCategory,
  PromotionGoodsList,
  PromotionType,
} from './type';

export interface PromotionGoodsParams {
  type: PromotionGoodsCategory;
  size?: number;
  promotionType?: PromotionType;
  keyword?: string;
  cursor?: number;
}

export const getPromotionGoods = async (goodsNo: number) => {
  const { data } = await httpClient.get<{ data: PromotionGoods }>(
    `/handpyeon/api/promotionGoods/${goodsNo}`,
  );
  return data.data;
};

export const getPromotionGoodsList = async (params: PromotionGoodsParams) => {
  const {
    data: { data, pageInfo },
  } = await httpClient.get<PromotionGoodsList>(
    '/handpyeon/api/promotionGoods',
    {
      params,
    },
  );
  return {
    data,
    pageInfo,
    nextCursor: params.cursor + 1,
  };
};
