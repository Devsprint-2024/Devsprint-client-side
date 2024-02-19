import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

const setupCollaboration = (roomName) => {
  const ydoc = new Y.Doc();
  const provider = new WebrtcProvider(roomName, ydoc);
  
  return { ydoc, provider };
};

export default setupCollaboration;