import { gql } from '@apollo/client'

export const getProduct = gql`
  query ($productId: String!) {
    product(id: $productId) {
      brand
      description
      name
      id
      gallery
      prices {
        amount
        currency {
          symbol
          label
        }
      }
      inStock
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }

`

export const getCurrencies = gql`
{
  currencies {
    label
    symbol
  }
}
`

export const getCategories = gql`
{
  categories {
    name
  }
}
`


export const getDataByCategories = gql`
query Category($input: CategoryInput) {
  category(input: $input) {
    name
    products {
      id
      name
      inStock
      gallery
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
}
`