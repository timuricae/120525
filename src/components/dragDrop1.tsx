import React, { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type ItemType = {
  id: string;
  text: string;
};

const itemsLeft: ItemType[] = [
  { id: "1", text: "Apple" },
  { id: "2", text: "Banana" },
  { id: "3", text: "Cherry" },
];

const itemsRight: ItemType[] = [
  { id: "1", text: "Яблоко" },
  { id: "2", text: "Банан" },
  { id: "3", text: "Вишня" },
];

// Компонент для перетаскиваемого элемента
const DraggableItem: React.FC<{ item: ItemType }> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "ITEM",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="draggable" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {item.text}
    </div>
  );
};

// Компонент для зоны дропа
const DroppableItem: React.FC<{ item: ItemType; onDrop: (id: string) => void }> = ({ item, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "ITEM",
    drop: (draggedItem: { id: string }) => onDrop(draggedItem.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="droppable" style={{ backgroundColor: isOver ? "#f0f0f0" : "white" }}>
      {item.text}
    </div>
  );
};

const dragDrop1: React.FC = () => {
  const [matchedItems, setMatchedItems] = useState<Record<string, boolean>>({});

  const handleDrop = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      setMatchedItems((prev) => ({ ...prev, [rightId]: true }));
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="left">
          {itemsLeft.map((item) => (
            <DraggableItem key={item.id} item={item} />
          ))}
        </div>
        <div className="right">
          {itemsRight.map((item) => (
            <DroppableItem
              key={item.id}
              item={item}
              onDrop={(draggedId) => handleDrop(draggedId, item.id)}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default dragDrop1;
