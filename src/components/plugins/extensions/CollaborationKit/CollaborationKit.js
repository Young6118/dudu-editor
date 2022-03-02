import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { IndexeddbPersistence } from 'y-indexeddb';


const ydoc = new Y.Doc();

const provider = new WebsocketProvider('ws://127.0.0.1:1234', 'v2_1.0.0-km-example__document__title-10001', ydoc, {
  params: {
    access_token: 'super-secret-token'
  }
});

// Store the Y document in the browser
// eslint-disable-next-line no-new
new IndexeddbPersistence('v2_1.0.0-km-example__document__title-10001', ydoc);

export default [
  Collaboration.configure({
    document: ydoc,
    field: 'content'
  }),
  // Register the collaboration cursor extension
  CollaborationCursor.configure({
    provider,
    name: 'Young',
    color: '#f783ac'
  })
];
