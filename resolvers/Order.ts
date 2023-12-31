import { OrderModelType } from "../db/Order.ts";
import { ClientModel, ClientModelType } from "../db/Client.ts";
import { DistributorModel, DistributorModelType } from "../db/Distributor.ts";
import { RestaurantModel, RestaurantModelType } from "../db/Restaurant.ts";
import { GraphQLError } from "graphql";

export const Order = {
    id_client: async (parent: OrderModelType): Promise<ClientModelType> => {
        const id_client = await ClientModel.findById(parent.id_client).exec();
        if (!id_client) {
          throw new GraphQLError(`No client found with id ${parent.id_client}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return id_client;
    },
    id_distributor: async (parent: OrderModelType): Promise<DistributorModelType> => {
        const id_distributor = await DistributorModel.findById(parent.id_distributor).exec();
        if (!id_distributor) {
          throw new GraphQLError(`No distributor found with id ${parent.id_client}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return id_distributor;
    },
    id_restaurant: async (parent: OrderModelType): Promise<RestaurantModelType> => {
        const id_restaurant = await RestaurantModel.findById(parent.id_restaurant).exec();
        if (!id_restaurant) {
          throw new GraphQLError(`No restaurant found with id ${parent.id_client}`, {
            extensions: { code: "NOT_FOUND" },
          });
        }
        return id_restaurant;
    },
};