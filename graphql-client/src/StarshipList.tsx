import "./App.css";
import Starship from "./Starship";
import { graphql } from "./gql";
import { useGraphQL } from "./use-graphql";

const allStarhipsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allStarshipsWithVariablesQuery($first: Int!) {
    allStarships(first: $first) {
      edges {
        node {
          ...StarshipItem
        }
      }
    }
  }
`);

function StarshipList() {
  const { data } = useGraphQL(allStarhipsWithVariablesQueryDocument, {
    first: 100,
  });

  return (
    <div className="StarshipList">
      {data && (
        <ul>
          {data.data?.allStarships?.edges?.map(
            (e, i) =>
              e?.node && <Starship starship={e?.node} key={`starship-${i}`} />
          )}
        </ul>
      )}
    </div>
  );
}

export default StarshipList;
