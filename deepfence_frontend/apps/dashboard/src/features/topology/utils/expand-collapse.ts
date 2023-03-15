import {
  G6Combo,
  G6Graph,
  G6Item,
  G6Node,
  NodeModel,
} from '@/features/topology/types/graph';

// this is the static things that will consider a node as combo or not
export const itemExpandsAsCombo = (item: G6Item | null) => {
  const model = item?.get('model') as NodeModel;
  if (!model || !model.df_data) return false;
  return (
    model.df_data.type === 'kubernetes_cluster' ||
    model.df_data.type === 'host' ||
    model.df_data.type === 'pod' ||
    model.df_data.type == 'container'
  );
};

export const itemExpands = (item: G6Item | null) => {
  const model = item?.get('model') as NodeModel;
  if (!model || !model.df_data) return false;
  return [
    'cloud_provider',
    'cloud_region',
    'host',
    'pod',
    'kubernetes_cluster',
    'container',
  ].includes(model.df_data.type ?? '');
};

export const nodeToFront = (graph: G6Graph, nodeId: string) => {
  const node = graph.findById(nodeId) as G6Node | undefined;
  if (!node) {
    console.warn(`node ${nodeId} not found, skipping toFront`);
    return;
  }
  if (itemExpandsAsCombo(node)) {
    const combo = graph.findById(`${nodeId}-combo`) as G6Combo | undefined;
    if (!combo) {
      console.warn(`combo for ${nodeId} not found, skipping toFront`);
      return;
    }
    const children = combo.getChildren();
    for (const node of children.nodes) {
      if (node.getModel().id) nodeToFront(graph, node?.getModel?.()?.id ?? '');
    }
  } else {
    node.toFront();
    for (const edge of node.getEdges()) {
      edge.toFront();
    }
  }
};

export const focusItem = (graph: G6Graph, nodeId: string) => {
  const node = graph.findById(nodeId) as G6Node | undefined;
  if (!node) {
    console.warn(`node ${nodeId} not found, skipping focus`);
    return;
  }
  if (itemExpandsAsCombo(node)) {
    const combo = graph.findById(`${nodeId}-combo`) as G6Combo | undefined;
    if (combo) {
      graph.focusItem(combo, true);
      return;
    }
  }
  graph.focusItem(node, true);
};
