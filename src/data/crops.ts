export interface CropDef {
  id: string;
  name: string;
  emoji: string;
  landType: 'normal' | 'fertile' | 'sandy' | 'paddy' | 'magic';
  baseInterval: number;
  basePrice: number;
  mutationRate: number;
  unlockLevel: number;
}

export const CROPS: CropDef[] = [
  { id: 'carrot', name: '胡萝卜', emoji: '🥕', landType: 'normal', baseInterval: 30, basePrice: 15, mutationRate: 0.02, unlockLevel: 1 },
  { id: 'corn', name: '玉米', emoji: '🌽', landType: 'normal', baseInterval: 90, basePrice: 40, mutationRate: 0.02, unlockLevel: 1 },
  { id: 'potato', name: '土豆', emoji: '🥔', landType: 'normal', baseInterval: 60, basePrice: 25, mutationRate: 0.02, unlockLevel: 2 },
  { id: 'onion', name: '洋葱', emoji: '🧅', landType: 'normal', baseInterval: 180, basePrice: 70, mutationRate: 0.03, unlockLevel: 5 },
  { id: 'cabbage', name: '卷心菜', emoji: '🥬', landType: 'normal', baseInterval: 300, basePrice: 120, mutationRate: 0.02, unlockLevel: 6 },
  { id: 'tomato', name: '番茄', emoji: '🍅', landType: 'fertile', baseInterval: 180, basePrice: 80, mutationRate: 0.04, unlockLevel: 4 },
  { id: 'strawberry', name: '草莓', emoji: '🍓', landType: 'fertile', baseInterval: 120, basePrice: 45, mutationRate: 0.03, unlockLevel: 3 },
  { id: 'grape', name: '葡萄', emoji: '🍇', landType: 'fertile', baseInterval: 240, basePrice: 150, mutationRate: 0.02, unlockLevel: 7 },
  { id: 'pepper', name: '辣椒', emoji: '🌶️', landType: 'fertile', baseInterval: 150, basePrice: 90, mutationRate: 0.05, unlockLevel: 5 },
  { id: 'blueberry', name: '蓝莓', emoji: '🫐', landType: 'fertile', baseInterval: 200, basePrice: 130, mutationRate: 0.03, unlockLevel: 9 },
  { id: 'pumpkin', name: '南瓜', emoji: '🎃', landType: 'sandy', baseInterval: 240, basePrice: 100, mutationRate: 0.03, unlockLevel: 5 },
  { id: 'watermelon', name: '西瓜', emoji: '🍉', landType: 'sandy', baseInterval: 480, basePrice: 250, mutationRate: 0.01, unlockLevel: 8 },
  { id: 'cucumber', name: '黄瓜', emoji: '🥒', landType: 'sandy', baseInterval: 160, basePrice: 60, mutationRate: 0.04, unlockLevel: 4 },
  { id: 'melon', name: '甜瓜', emoji: '🍈', landType: 'sandy', baseInterval: 360, basePrice: 200, mutationRate: 0.02, unlockLevel: 10 },
  { id: 'rice', name: '水稻', emoji: '🌾', landType: 'paddy', baseInterval: 200, basePrice: 160, mutationRate: 0.02, unlockLevel: 8 },
  { id: 'lotus', name: '莲藕', emoji: '🪷', landType: 'paddy', baseInterval: 300, basePrice: 220, mutationRate: 0.03, unlockLevel: 11 },
  { id: 'bamboo', name: '竹笋', emoji: '🎋', landType: 'paddy', baseInterval: 420, basePrice: 280, mutationRate: 0.02, unlockLevel: 13 },
  { id: 'celery', name: '水芹', emoji: '🌿', landType: 'paddy', baseInterval: 100, basePrice: 55, mutationRate: 0.04, unlockLevel: 6 },
  { id: 'ginger', name: '姜', emoji: '🫚', landType: 'paddy', baseInterval: 250, basePrice: 180, mutationRate: 0.03, unlockLevel: 10 },
  { id: 'truffle', name: '松露', emoji: '🍄', landType: 'magic', baseInterval: 900, basePrice: 800, mutationRate: 0.10, unlockLevel: 999 },
  { id: 'starfruit', name: '星光果', emoji: '🌟', landType: 'magic', baseInterval: 1200, basePrice: 2000, mutationRate: 0.05, unlockLevel: 999 },
];

export function getCropById(id: string): CropDef | undefined {
  return CROPS.find(c => c.id === id);
}
