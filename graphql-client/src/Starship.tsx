import { graphql, FragmentType, useFragment } from "./gql";

export const StarshipFragment = graphql(/* GraphQL */ `
  fragment StarshipItem on Starship {
    id
    name
    model
  }
`);

const Starship = (props: {
  /* tweet property has the correct type 🎉 */
  starship: FragmentType<typeof StarshipFragment>;
}) => {
  const starship = useFragment(StarshipFragment, props.starship);
  return (
    <div>
      <h3>{starship.name}</h3>
      <p>{starship.model}</p>
    </div>
  );
};

export default Starship;
