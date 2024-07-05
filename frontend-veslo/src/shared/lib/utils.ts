import { OrderStatus, OrderType } from "@/entities/order/_domain/const";

export const normalizeCount = (number: number, words_arr: string[]) => {
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    let options = [2, 0, 1, 1, 1, 2];
    return words_arr[(number % 100 > 4 && number % 100 < 20) ? 2 : options[(number % 10 < 5) ? number % 10 : 5]];
  }
  return words_arr[1];
}

export const humanizeOrderStatus = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.Pending:
      return 'В ожидании';
    case OrderStatus.Processing:
      return 'Принята в работу';
    case OrderStatus.Success:
      return 'Выполнена успешно';
    case OrderStatus.Failed:
      return 'Выполнена с замечаниями';
    case OrderStatus.Deleted:
      return 'Удалена';
  }
}

export const humanizeOrderType = (type: OrderType) => {
  switch (type) {
    case OrderType.Diagnostics:
      return 'Диагностика';
    case OrderType.Dismantling:
      return 'Демонтаж';
    case OrderType.Installation:
      return 'Монтаж';
    case OrderType.Verification:
      return 'Поверка';
  } 
}
