import { GraphQLError } from "graphql";
import { ClientModel, ClientModelType } from "../db/Client.ts";
import { RestaurantModel, RestaurantModelType } from "../db/Restaurant.ts";
import { Card } from "../types.ts";
import { CardModel } from "../db/Card.ts";
import { DistributorModel, DistributorModelType } from "../db/Distributor.ts";

export const Mutation = {
  addClient: async (
    _: unknown,
    args: { name: string; email: string }
  ): Promise<ClientModelType> => {
    const client = {
      name: args.name,
      email: args.email,
    };
    const newClient = await ClientModel.create(client);
    return newClient;
  },
  deleteClient: async (
    _: unknown,
    args: { id: string }
  ): Promise<ClientModelType> => {
    const client = await ClientModel.findByIdAndDelete(args.id);
    if (!client) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return client;
  },
  addCard: async (
    _: unknown,
    args: { id: string; number: number; cvv: number; expirity: string; money: number}
  ): Promise<ClientModelType> => {
    const card = {
        number: args.number,
        cvv: args.cvv,
        expirity: args.expirity,
        money: args.money,
    }
    const newCard = await CardModel.create(card);
    if (!newCard) {
        throw new GraphQLError(`No card could be created with id ${args.id}`, {
          extensions: { code: "NOT_FOUND" },
        });
    }
    const refClient = await ClientModel.findById(args.id);
    if (!refClient) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    const clientCardList = refClient!.cards
    const client = await ClientModel.findByIdAndUpdate(
      args.id,
      { cards: clientCardList.push(newCard.id!) },
      { new: true, runValidators: true }
    );
    return client!;
  },
  removeCard: async (
    _: unknown,
    args: { id: string; number: number }
  ): Promise<ClientModelType> => {
    const refClient = await ClientModel.findById(args.id);
    if (!refClient) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    const clientCardList = refClient!.cards
    clientCardList.filter((card: Card) => { return card.number != args.number});
    const client = await ClientModel.findByIdAndUpdate(
      args.id,
      { cards: null },
      { new: true, runValidators: true }
    );
    if (!client) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return client;
  },
  addRestaurant: async (
    _: unknown,
    args: { name: string; address: string, cif: string }
  ): Promise<RestaurantModelType> => {
    const restaurant = {
      name: args.name,
      address: args.address,
      cif: args.cif,
    };
    const newRestaurant = await RestaurantModel.create(restaurant);
    return newRestaurant;
  },
  deleteRestaurant: async (
    _: unknown,
    args: { id: string }
  ): Promise<RestaurantModelType> => {
    const restaurant = await RestaurantModel.findByIdAndDelete(args.id);
    if (!restaurant) {
      throw new GraphQLError(`No restaurant found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return restaurant;
  },
  addDistributor: async (
    _: unknown,
    args: { username: string }
  ): Promise<DistributorModelType> => {
    const distributor = {
      username: args.username,
    };
    const newDistributor = await DistributorModel.create(distributor);
    return newDistributor;
  },
  deleteDistributor: async (
    _: unknown,
    args: { id: string }
  ): Promise<DistributorModelType> => {
    const distributor = await DistributorModel.findByIdAndDelete(args.id);
    if (!distributor) {
      throw new GraphQLError(`No distributor found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return distributor;
  },
};