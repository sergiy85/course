import React from 'react';

export default function ListItem({ item, render }) {
  const content = render(item);

  return <li className={(item.isActive === true) ? 'active-class-name list-group-item' : 'list-group-item'}>{content}</li>;
}
