import React, { useMemo, useRef, useState } from "react";
import "./index.css";

/**
 * Self‑contained React + CSS drag & drop without external libs.
 * Desktop-only (no mobile considerations).
 * Features:
 *  - Drag items between two lists (Todo/Done)
 *  - Reorder items within a list
 *  - Visual hover/drag feedback
 */
export default function DragAndDropDemo() {
  const [lists, setLists] = useState({
    todo: [
      { id: "t1", text: "Wire up API" },
      { id: "t2", text: "Build login form" },
      { id: "t3", text: "Write tests" },
    ],
    done: [
      { id: "d1", text: "Create repo" },
      { id: "d2", text: "Project kickoff" },
    ],
  });

  // Track the item being dragged and its source
  const dragItemRef = useRef({ id: null, fromList: null });
  const overIndexRef = useRef({ list: null, index: null });

  const allIds = useMemo(
    () => new Set([...lists.todo, ...lists.done].map((i) => i.id)),
    [lists]
  );

  function onDragStart(e, itemId, fromList) {
    // Store payload
    dragItemRef.current = { id: itemId, fromList };
    // Set a light drag image offset for nicer UX
    if (e.dataTransfer) {
      e.dataTransfer.setData("text/plain", itemId);
      e.dataTransfer.effectAllowed = "move";
    }
  }

  function onDragOverList(e, listKey) {
    // Required so drop will fire
    e.preventDefault();
    e.dataTransfer && (e.dataTransfer.dropEffect = "move");
    // Mark we are over a list (not a specific item)
    overIndexRef.current = { list: listKey, index: null };
  }

  function onDragOverItem(e, listKey, index) {
    e.preventDefault();
    overIndexRef.current = { list: listKey, index };
  }

  function onDrop(e, targetList) {
    e.preventDefault();
    const drag = dragItemRef.current;
    if (!drag.id || !drag.fromList) return;

    setLists((prev) => {
      if (!allIds.has(drag.id)) return prev; // safety

      // Find the dragged item
      const sourceItems = [...prev[drag.fromList]];
      const draggedIdx = sourceItems.findIndex((i) => i.id === drag.id);
      if (draggedIdx === -1) return prev;
      const [dragged] = sourceItems.splice(draggedIdx, 1);

      const next = { ...prev };
      next[drag.fromList] = sourceItems;

      const targetItems = [...next[targetList]];

      // Determine insertion index (before hovered item, or push to end)
      const over = overIndexRef.current;
      const insertAt =
        over.list === targetList && over.index != null
          ? over.index
          : targetItems.length;

      // If moving within the same list and the removal index was before the insert index,
      // adjust for the removed item
      const finalIndex =
        drag.fromList === targetList && draggedIdx < insertAt
          ? Math.max(0, insertAt - 1)
          : insertAt;

      targetItems.splice(finalIndex, 0, dragged);
      next[targetList] = targetItems;
      return next;
    });

    // clear hints
    overIndexRef.current = { list: null, index: null };
    dragItemRef.current = { id: null, fromList: null };
  }

  function List({ title, listKey }) {
    const items = lists[listKey];

    return (
      <div
        className="list"
        onDragOver={(e) => onDragOverList(e, listKey)}
        onDrop={(e) => onDrop(e, listKey)}
      >
        <div className="listHeader">
          <h2>{title}</h2>
          <span className="count">{items.length}</span>
        </div>
        <ul className="items">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={
                "item" +
                (overIndexRef.current.list === listKey &&
                overIndexRef.current.index === index
                  ? " over"
                  : "")
              }
              draggable
              onDragStart={(e) => onDragStart(e, item.id, listKey)}
              onDragOver={(e) => onDragOverItem(e, listKey, index)}
              onDrop={(e) => onDrop(e, listKey)}
            >
              <div className="grab" aria-hidden>
                ⋮⋮
              </div>
              <span className="text">{item.text}</span>
            </li>
          ))}
          {/* Ghost slot to highlight drop-at-end */}
          <li
            className={
              "endSlot" +
              (overIndexRef.current.list === listKey &&
              overIndexRef.current.index == null
                ? " over"
                : "")
            }
            onDragOver={(e) => onDragOverItem(e, listKey, null)}
          />
        </ul>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="hero">
        <h1>React Drag & Drop</h1>
        <p>Drag tasks to reorder or move between lists.</p>
      </header>
      <main className="board">
        <List title="Todo" listKey="todo" />
        <List title="Done" listKey="done" />
      </main>
      <footer className="tips">
        <b>Tips</b>: Try dragging an item to the end of a list; a drop zone will
        appear. All logic is pure React state with native HTML5 drag events.
      </footer>
    </div>
  );
}
