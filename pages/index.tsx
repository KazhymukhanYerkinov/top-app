import { Button, Htag } from '../components/index';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag = 'h1'> Hello </Htag>
      <Button appearance = 'primary' arrow = 'right'> Button </Button>
      
    </div>
  );
}
