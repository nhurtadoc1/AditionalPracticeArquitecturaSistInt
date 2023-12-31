export const typeDefs = `#graphql
  type Card {
    id: ID!
    number: Int!
    cvv: Int!
    expirity: String!
    money: Int!
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    cards: [Card!]!
    orders: [Order!]!
  }

  type Distributor {
    id: ID!
    username: String!
    orders: [Order!]!
  }
`;