import { NextPage } from "next";
import MuiTreeView from '@mui/lab/TreeView';
import MuiTreeItem, { TreeItemProps } from '@mui/lab/TreeItem';
import { ChevronRight as ExpandMoreIcon, ExpandMore as ChevronRightIcon } from "@mui/icons-material";
import { useState } from "react";

export interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}

export interface TreeViewProps {
  nodes: RenderTree[];
}

export const TreeView: NextPage<TreeViewProps> = ({ nodes }: TreeViewProps) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
    );
  };

  const renderTree = (nodes: RenderTree) => (
    <MuiTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </MuiTreeItem>
  );

  return (
    <MuiTreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      multiSelect
    >
      {Array.isArray(nodes) ?
        nodes.map(node => renderTree(node)) :
        null
      }
      {/* {Array.isArray(elements) ?
        elements.map(element => (
          <MuiTreeItem key={element.nodeId} nodeId={element.nodeId} label={element.label}>
          </MuiTreeItem>
        )) :
        null
      } */}
    </MuiTreeView>
  );
};

export default TreeView;
