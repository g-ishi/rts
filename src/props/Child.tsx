interface ChildProps {
  color: string;
  onClick: () => void;
  // v18からchildrenは暗黙的に渡されなくなった。
  children?: React.ReactNode;
}

// method1: こっちはreact componentだとは認識されない。
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>click me</button>
    </div>
  );
};

// method2: こっちはreact componentとして認識される
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>click me</button>
    </div>
  );
};
