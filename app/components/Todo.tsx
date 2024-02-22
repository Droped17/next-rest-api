type Props = {
    id: number,
    title: string,
};

const Todo: React.FC<Props> = ({ id, title }) => {
    return (
      <div className="p-3 shadow-md bg-slate-700 text-white">
        <p>{id} : {title}</p>
      </div>
    );
  };
  
  export default Todo;
