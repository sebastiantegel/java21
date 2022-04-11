interface IGreetingProps {
  name: string;
}

export function Greeting(props: IGreetingProps) {
  return <div>Hej: {props.name}</div>;
}
