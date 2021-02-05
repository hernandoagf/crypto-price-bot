const gql = require('graphql-tag')
const { GraphQLWrapper } = require('@aragon/connect-thegraph')

const UNISWAP_URL = 'https://api.thegraph.com/subgraphs/name/1hive/uniswap-v2'
const XDAI_HNY_PAIR = '0x4505b262dc053998c10685dc5f9098af8ae5c8ad'

const HNY_PRICE_QUERY = gql`
  query {
    pair(id: "${XDAI_HNY_PAIR}") {
      token1Price
    }
  }
`
module.exports = async function hnyPrice() {
  const graphqlClient = new GraphQLWrapper(UNISWAP_URL)
  const result = await graphqlClient.performQuery(HNY_PRICE_QUERY)

  if (!result.data) {
    console.log('Query error')
    return '---'
  }

  const { pair: { token1Price } } = result.data

  return parseFloat(token1Price).toFixed(2)
}
