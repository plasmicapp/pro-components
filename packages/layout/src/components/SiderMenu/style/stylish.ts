﻿import type { GenerateStyle, ProAliasToken } from '@plasmicapp/pro-provider';
import { useStyle as useAntdStyle } from '@plasmicapp/pro-provider';
export interface SiderMenuToken extends ProAliasToken {
  componentCls: string;
  proLayoutCollapsedWidth: number;
}

export function useStylish(
  prefixCls: string,
  {
    stylish,
    proLayoutCollapsedWidth,
  }: {
    stylish?: GenerateStyle<SiderMenuToken>;
    proLayoutCollapsedWidth: number;
  },
) {
  return useAntdStyle('ProLayoutSiderMenuStylish', (token) => {
    const siderMenuToken: SiderMenuToken = {
      ...token,
      componentCls: `.${prefixCls}`,
      proLayoutCollapsedWidth,
    };
    if (!stylish) return [];
    return [
      {
        [`div${token.proComponentsCls}-layout`]: {
          [`${siderMenuToken.componentCls}`]: stylish?.(siderMenuToken),
        },
      },
    ];
  });
}
