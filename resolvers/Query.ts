import { GraphQLError } from "graphql";
import { ClientModel, ClientModelType } from "../db/Client.ts";
import { DistributorModel, DistributorModelType } from "../db/Distributor.ts";
import { OrderModel, OrderModelType } from "../db/Order.ts";
import { RestaurantModel, RestaurantModelType } from "../db/Restaurant.ts";

export const Query = {
  clients: async (): Promise<ClientModelType[]> => {
    const clients = await ClientModel.find().exec();
    return clients;
  },

  client: async (_: unknown, args: { id: string }): Promise<ClientModelType> => {
    const client = await ClientModel.findById(args.id);
    if (!client) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return client;
  },

  distributors: async (): Promise<DistributorModelType[]> => {
    const distributors = await DistributorModel.find().exec();
    return distributors;
  },

  distributor: async (_: unknown, args: { id: string }): Promise<DistributorModelType> => {
    const distributor = await DistributorModel.findById(args.id);
    if (!distributor) {
      throw new GraphQLError(`No distributor found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return distributor;
  },

  orders: async (): Promise<OrderModelType[]> => {
    const orders = await OrderModel.find().exec();
    return orders;
  },

  order: async (_: unknown, args: { id: string }): Promise<OrderModelType> => {
    const order = await OrderModel.findById(args.id);
    if (!order) {
      throw new GraphQLError(`No order found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return order;
  },

  restaurants: async (): Promise<RestaurantModelType[]> => {
    const restaurants = await RestaurantModel.find().exec();
    return restaurants;
  },

  restaurant: async (_: unknown, args: { id: string }): Promise<RestaurantModelType> => {
    const restaurant = await RestaurantModel.findById(args.id);
    if (!restaurant) {
      throw new GraphQLError(`No restaurant found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return restaurant;
  },
};