import React from 'react';
import { useDroppable, useDndMonitor } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

import { SortableItem } from './sortableItem';

const containerStyle = {
  background: '#dadada',
  padding: 10,
  margin: 10,
  flex: 1,
};

export const DropContainer = (props) => {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id,
  });
  useDndMonitor({
    onDragStart(event) {},
    onDragMove(event) {},
    onDragOver(event) {
      console.log(event);
    },
    onDragEnd(event) {},
    onDragCancel(event) {},
  });

  return (
    <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
      <div ref={setNodeRef} style={containerStyle}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
};
