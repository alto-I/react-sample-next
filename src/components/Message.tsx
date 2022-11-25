const Text = (props: { content: string }) => {
  const { content } = props;

  return <p className="text">{content}</p>;
};

const Message = (props: {}) => {
  const content1 = 'This is parent component';
  const content2 = 'Message uses Text component';
  const content3 = 'Message uses Text component22';

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
      <Text content={content3} />
    </div>
  );
};

export default Message;
