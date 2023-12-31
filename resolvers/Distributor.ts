import { DistributorModelType } from "../db/Distributor.ts";
import { OrderModel, OrderModelType } from "../db/Order.ts";

export const Distributor = {
  orders: async (parent: DistributorModelType): Promise<OrderModelType[]> => {
    const orders = await OrderModel.find({ id_distributor: parent._id });
    return orders;
  },
};