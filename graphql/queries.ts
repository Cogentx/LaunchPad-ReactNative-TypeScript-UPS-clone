import { gql, useQuery } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomers {
      name
      value {
        name
        email
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      name
      value {
        Address
        City
        Lat
        Lng
        carrier
        createdAt
        shippingCost
        trackingItems {
          customer_id
          customer {
            name
            email
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
