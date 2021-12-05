import React from 'react';
import { Button, Htag, P, Tag, Rating } from '../components/index';

export default function Home(): JSX.Element {
  const [ rating, setRating ] = React.useState(4);

  return (
    <div>
      <Htag tag = 'h1'> Hello </Htag>
      <Button appearance = 'primary' arrow = 'right'> Button </Button>
      <Button appearance = 'ghost' arrow = 'down'> Button </Button>
      <P size = 'l'> Large </P>
      <P> Medium </P>
      <P size = 's'> Small </P>
      <Tag size = 's'> Ghost </Tag>
      <Tag size = 'm' color = 'red'> Red </Tag>
      <Tag size = 's' color = 'green'> Green </Tag>
      <Tag color = 'primary'> Primary </Tag>
      <Rating isEditable rating = {rating} setRating = {setRating} />
    </div>
  );
}
