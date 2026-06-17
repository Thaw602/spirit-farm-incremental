export interface LandTypeDef {
  id: string;
  name: string;
  emoji: string;
  unlockCost: { gold?: number; starCoin?: number };
  bonus: {
    intervalReduction?: number;
    quantityBoost?: number;
    mutationBoost?: number;
  };
  description: string;
}

export const LAND_TYPES: LandTypeDef[] = [
  {
    id: 'normal', name: '普通农田', emoji: '🟫',
    unlockCost: {}, bonus: {}, description: '基础土地，无特殊加成'
  },
  {
    id: 'fertile', name: '肥沃黑土', emoji: '🟰',
    unlockCost: { gold: 2000 },
    bonus: { intervalReduction: 0.15 },
    description: '产出间隔 -15%'
  },
  {
    id: 'sandy', name: '沙质土地', emoji: '🟡',
    unlockCost: { gold: 5000 },
    bonus: { mutationBoost: 0.30 },
    description: '变异率 +30%'
  },
  {
    id: 'paddy', name: '水田', emoji: '🟦',
    unlockCost: { gold: 12000 },
    bonus: { quantityBoost: 0.50 },
    description: '产出数量 +50%'
  },
  {
    id: 'magic', name: '魔法沃土', emoji: '🟪',
    unlockCost: { starCoin: 50 },
    bonus: { quantityBoost: 1.0, mutationBoost: 1.0 },
    description: '产出 x2 + 变异率 x2'
  },
];
