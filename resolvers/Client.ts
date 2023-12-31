import { ClientModelType } from "../db/Client.ts";
import { OrderModel, OrderModelType } from "../db/Order.ts";

export const Client = {
  orders: async (parent: ClientModelType): Promise<OrderModelType[]> => {
    const orders = await OrderModel.find({ id_client: parent._id });
    return orders;
  },
};