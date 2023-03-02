const { GraphQLClient } = require('graphql-request');

const endpoint = 'https://api.thegraph.com/subgraphs/name/luiscmogrovejo/factory-graph';
const query = `
  query ($invoicer: String!) {
    invoiceCreateds(where: {invoicer: $invoicer}) {
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
  const client = new GraphQLClient(endpoint);
  const variables = { invoicer };
  const data = await client.request(query, variables);
  return data.invoiceCreateds;
}

// Example usage
fetchInvoicesByInvoicer('0x1234567890123456789012345678901234567890')
  .then(invoices => console.log(invoices))
  .catch(error => console.error(error));
