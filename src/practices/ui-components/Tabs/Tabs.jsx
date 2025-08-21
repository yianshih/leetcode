import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import "./index.css"; // import the tiny vanilla CSS file

/**
 * Accessible, headless Tabs for React — Vanilla CSS version
 * - Keyboard: Arrow keys (←/→ or ↑/↓), Home, End
 * - ARIA roles: tablist, tab, tabpanel
 * - Controlled (value/onValueChange) or uncontrolled (defaultValue)
 * - Styling comes from tabs.css
 */

// ----------------------
// Tabs Context
// ----------------------
const TabsContext = createContext(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs components must be used within <Tabs>");
  return ctx;
}

export function Tabs({
  value,
  defaultValue = 0,
  onValueChange,
  orientation = "horizontal", // "horizontal" | "vertical"
  children,
  className = "",
}) {
  const isControlled = value !== undefined;
  const [internalIndex, setInternalIndex] = useState(defaultValue);
  const selectedIndex = isControlled ? value : internalIndex;
  const tabsRef = useRef([]);
  const [maxIndex, setMaxIndex] = useState(0);
  const baseId = useId();

  const setIndex = useCallback(
    (i) => {
      const next = Math.max(0, Math.min(i, maxIndex));
      if (!isControlled) setInternalIndex(next);
      onValueChange?.(next);
    },
    [isControlled, maxIndex, onValueChange]
  );

  const ctx = useMemo(
    () => ({
      selectedIndex,
      setIndex,
      orientation,
      tabsRef,
      baseId,
      maxIndex,
      setMaxIndex,
    }),
    [selectedIndex, setIndex, orientation, baseId, maxIndex]
  );

  return (
    <TabsContext.Provider value={ctx}>
      <div className={`tabs-container ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
}

// ----------------------
// TabList
// ----------------------
export function TabList({ children, className = "" }) {
  const { orientation, setMaxIndex } = useTabsContext();
  const items = React.Children.toArray(children).filter(Boolean);

  useEffect(() => {
    setMaxIndex(items.length - 1);
  }, [items.length, setMaxIndex]);

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={`tab-list ${className}`}
    >
      {items.map((child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { index: i })
          : child
      )}
    </div>
  );
}

// ----------------------
// Tab
// ----------------------
export function Tab({ index, children, className = "" }) {
  const { selectedIndex, setIndex, orientation, tabsRef, baseId, maxIndex } =
    useTabsContext();
  const isSelected = index === selectedIndex;
  const ref = useRef(null);

  useEffect(() => {
    tabsRef.current[index] = ref.current;
    return () => {
      tabsRef.current[index] = null;
    };
  }, [index, tabsRef]);

  const onKeyDown = (e) => {
    const horiz = orientation === "horizontal";
    if (
      (horiz && e.key === "ArrowRight") ||
      (!horiz && e.key === "ArrowDown")
    ) {
      e.preventDefault();
      const next = index + 1 > maxIndex ? 0 : index + 1;
      setIndex(next);
      tabsRef.current[next]?.focus();
    } else if (
      (horiz && e.key === "ArrowLeft") ||
      (!horiz && e.key === "ArrowUp")
    ) {
      e.preventDefault();
      const prev = index - 1 < 0 ? maxIndex : index - 1;
      setIndex(prev);
      tabsRef.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setIndex(0);
      tabsRef.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setIndex(maxIndex);
      tabsRef.current[maxIndex]?.focus();
    }
  };

  const tabId = `${baseId}-tab-${index}`;
  const panelId = `${baseId}-panel-${index}`;

  return (
    <button
      ref={ref}
      id={tabId}
      role="tab"
      aria-selected={isSelected}
      aria-controls={panelId}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => setIndex(index)}
      onKeyDown={onKeyDown}
      className={`tab ${isSelected ? "tab-selected" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

// ----------------------
// TabPanels container
// ----------------------
export function TabPanels({ children, className = "" }) {
  return <div className={`tab-panels ${className}`}>{children}</div>;
}

// ----------------------
// TabPanel
// ----------------------
export function TabPanel({ index, children, className = "" }) {
  const { selectedIndex, baseId } = useTabsContext();
  const hidden = selectedIndex !== index;
  const tabId = `${baseId}-tab-${index}`;
  const panelId = `${baseId}-panel-${index}`;

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={hidden}
      className={`tab-panel ${className}`}
    >
      {children}
    </div>
  );
}

// ----------------------
// Demo App
// ----------------------
export default function TabsDemo() {
  const [controlledIndex, setControlledIndex] = useState(0);

  return (
    <div style={{ padding: 24, background: "#f8fafc", minHeight: "100vh" }}>
      <h1>Accessible Tabs (Vanilla CSS)</h1>

      <h2>Uncontrolled</h2>
      <Tabs defaultValue={1}>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Settings</Tab>
          <Tab>Billing</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Profile content</TabPanel>
          <TabPanel index={1}>Settings content</TabPanel>
          <TabPanel index={2}>Billing content</TabPanel>
        </TabPanels>
      </Tabs>

      <h2>Controlled</h2>
      <Tabs value={controlledIndex} onValueChange={setControlledIndex}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Usage</Tab>
          <Tab>API Keys</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Overview content</TabPanel>
          <TabPanel index={1}>Usage content</TabPanel>
          <TabPanel index={2}>
            <button>Create key</button>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <p>Current index: {controlledIndex}</p>
    </div>
  );
}
