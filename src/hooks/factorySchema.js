const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');

const client = new ApolloClient({
  uri: 'https://api.studio.thegraph.com/query/<ID>/<SUBGRAPH_NAME>',
  cache: new InMemoryCache(),
});

const GET_INVOICES = gql`
  query GetInvoices($invoicer: String!) {
    invoiceCreateds(where: { invoicer: $invoicer }) {
      id
      idInvoice
      invoicer
      payer
      dueDate
      fee
      amount
      blockNumber
      blockTimestamp
    }
  }
`;

async function fetchInvoicesByInvoicer(invoicer) {
  const { loading, error, data } = await client.query({
    query: GET_INVOICES,
    variables: { invoicer },
  });

  if (loading) {
    console.log('Loading...');
  }

  if (error) {
    console.error(error);
    return [];
  }

  return data.invoiceCreateds;
}

// Example usage
fetchInvoicesByInvoicer('0x1234567890123456789012345678901234567890')
  .then(invoices => console.log(invoices))
  .catch(error => console.error(error));
