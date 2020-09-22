import React from 'react';

type Props = {
  tab?: number;
  json: unknown;
};

const CodeObject: React.FunctionComponent<Props> = ({ json, tab = 0 }) => {
  return (
    <div>
      {Object.entries(json).map(([key, value]) => (
        <React.Fragment key={key}>
          {`${key}:`} {value}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CodeObject;
