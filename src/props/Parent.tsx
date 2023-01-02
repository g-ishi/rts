import { Child } from './Child';

const Parent = () => {
  return (
    <div>
      <Child color="red" onClick={() => console.log('Clicked.')} />
    </div>
  );
};

export default Parent;
