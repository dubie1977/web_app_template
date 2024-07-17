import "./App.css";
import Film from "./Film";
import { graphql } from "./gql";
import { useGraphQL } from "./use-graphql";

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          ...FilmItem
        }
      }
    }
  }
`);

function FilmList() {
  const { data } = useGraphQL(allFilmsWithVariablesQueryDocument, {
    first: 10,
  });

  return (
    <div className="FilmList">
      {data && (
        <ul>
          {data.data?.allFilms?.edges?.map(
            (e, i) => e?.node && <Film film={e?.node} key={`film-${i}`} />
          )}
        </ul>
      )}
    </div>
  );
}

export default FilmList;
