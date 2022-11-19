import React from 'react';

const Container = (props) => {
  const { title, children } = props;

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

const ParentJSX = () => {
  return (
    // ここでtitleを消してもjsxだとエラーがでない、tsxだとtitle必須というエラーを吐いてくれる
    <Container>
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  );
};

export default ParentJSX;
