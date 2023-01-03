const EventComponent: React.FC = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
